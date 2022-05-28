import GEngine from "./vm_worker";
import rcn_canvas from "./canvas";
import rcn_audio from "./audio"
import GCore from "../../core";

const rcn_key_to_gamepad = {
  'ArrowLeft': 0, 'ArrowRight': 1, 'ArrowUp': 2, 'ArrowDown': 3,
  'x': 4, 'c': 5, 'v': 6, 'b': 7,
  'X': 4, 'C': 5, 'V': 6, 'B': 7,
};

function rcn_vm(params = {}) {
  const vm = this;

  if(!params.no_canvas) {
    this.canvas = new rcn_canvas({
      ignore_alpha: true,
      no_palette_init: true,
    });
    this.canvas.set_size(128, 128);
    this.canvas.node.tabIndex = 0; // Means we can focus the canvas and receive input
    this.canvas.node.addEventListener('keydown', function(e) {
      if(rcn_key_to_gamepad[e.key] != undefined) {
        e.preventDefault();
        const player = vm.get_player_for_gamepad_id('keyboard', this.rcn.gamepad_layout_xcvb, true);
        if(player >= 0) {
          vm.set_gamepad_bit(player, rcn_key_to_gamepad[e.key], true);
        }
      }
    });
    this.canvas.node.addEventListener('keyup', function(e) {
      if(rcn_key_to_gamepad[e.key] != undefined) {
        e.preventDefault();
        const player = vm.get_player_for_gamepad_id('keyboard', this.rcn.gamepad_layout_xcvb, true);
        if(player >= 0) {
          vm.set_gamepad_bit(player, rcn_key_to_gamepad[e.key], false);
        }
      }
    });
    this.canvas.node.addEventListener('blur', function() {
      // Reset keyboard state
      vm.gamepad_state[0] = 0;
    });
    this.dom_element = this.canvas.node;
  }

  if(params.dom_element) {
    this.dom_element = params.dom_element;
  }

  this.luavm = params.luavm;
  this.rcn = params.rcn;
  
  GEngine.loadvm(this.luavm);
  GEngine.init(this.rcn);

  this.reset();
  this.last_tick = 0;

  // const tick = function() {
  //   const now = performance.now();
  //   if(now > vm.last_tick + 30) {
  //     if(!vm.tick()) {
  //       return;
  //     }
  //     vm.last_tick = now;
  //   }
  //   requestAnimationFrame(tick);
  // }
  // requestAnimationFrame(tick);
}

rcn_vm.prototype.kill = function() {
  if(GEngine.kill) {
    GEngine.kill();
  }
  if(this.audio) {
    this.audio.kill();
    this.audio = null;
  }
}

rcn_vm.prototype.tick = function() {
  if(this.dom_element && !document.body.contains(this.dom_element)) {
    // The DOM element was removed from the visible DOM, bail
    this.kill();
    return false;
  }

  if(!this.paused) {
    this.update();
  } else if(this.canvas) {
    this.canvas.flush();
  }
  if(this.canvas) {
    this.draw();
  }
  return true;
}

rcn_vm.prototype.update = function() {
  this.poll_gamepads();
  GEngine.write(this.rcn.mem_gamepad_offset, this.gamepad_state);
  GEngine.update();

  let bytes = GEngine.read(this.rcn.mem_soundreg_offset, this.rcn.mem_soundreg_size);
  this.audio.update(bytes);
  this.gamepad_state.copyWithin(this.rcn.gamepad_count, 0, this.rcn.gamepad_count); // Keep copy of previous frame gamepad state
}

rcn_vm.prototype.draw = function() {
  GEngine.render();
  let bytes = GEngine.read(this.rcn.mem_palette_offset, this.rcn.mem_palette_size);
  this.canvas.upload_palette(bytes);
  bytes = GEngine.read(this.rcn.mem_screen_offset, this.rcn.mem_screen_size);
  if(this.canvas) {
    this.canvas.upload_pixels(bytes);
    this.canvas.flush();
  }
  
}

rcn_vm.prototype.reset = function() {
  this.kill();

  const vm = this; 
  this.audio = new rcn_audio();

  this.gamepad_state = new Uint8Array(this.rcn.mem_gamepad_size);
  this.gamepad_mapping = [];

  // Set default gamepad layouts
  this.set_gamepad_layout(0, this.rcn.gamepad_layout_xcvb); // Keyboard for first player
  for(let i = 1; i < this.rcn.gamepad_count; i++) {
    this.set_gamepad_layout(i, this.rcn.gamepad_layout_abxy); // Abxy for the rest
  }
}

rcn_vm.prototype.poll_gamepads = function() {
  const gamepads = navigator.getGamepads();
  for(let i = 0; i < gamepads.length; i++) {
    const gamepad = gamepads[i];
    if(!gamepad) {
      continue;
    }
    const state = [
      gamepad.axes[0] < -0.33,
      gamepad.axes[0] > +0.33,
      gamepad.axes[1] < -0.33,
      gamepad.axes[1] > +0.33,
      gamepad.buttons[0].pressed,
      gamepad.buttons[1].pressed,
      gamepad.buttons[2].pressed,
      gamepad.buttons[3].pressed,
    ];

    const create_mapping = state.includes(true);
    const player = this.get_player_for_gamepad_id(gamepad.id, this.rcn.gamepad_layout_abxy, create_mapping);
    if(player >= 0) {
      for(let i in state) {
        this.set_gamepad_bit(player, i, state[i]);
      }
    }
  }
}

rcn_vm.prototype.load_bin = function(bin) {
  this.reset();
  this.load_memory(bin.rom);
  this.load_code("print(333) __scall(\"spr\", 3, 0, 100)");
}

rcn_vm.prototype.load_code = function(code) {
  GEngine.loadcode(code);
}

rcn_vm.prototype.load_memory = function(bytes, offset = 0) {
  GEngine.write(bytes, offset);
}

rcn_vm.prototype.load_memory_from_bin = function(offset, size) {
  this.load_memory(rcn_global_bin.rom.slice(offset, offset + size), offset);
}

rcn_vm.prototype.get_player_for_gamepad_id = function(id, layout, create_mapping = false) {
  let player = this.gamepad_mapping.indexOf(id);
  if(player < 0 && create_mapping && this.gamepad_mapping.length < this.rcn.gamepad_count) {
    player = this.gamepad_mapping.length;
    this.gamepad_mapping.push(id);
    this.set_gamepad_layout(player, layout);
  }
  return player;
}

rcn_vm.prototype.set_gamepad_bit = function(player, offset, value) {
  if(value) {
    this.gamepad_state[player] |= (1 << offset);
  } else {
    this.gamepad_state[player] &= ~(1 << offset);
  }
}

rcn_vm.prototype.set_gamepad_layout = function(player, layout) {
  this.gamepad_state[player + this.rcn.gamepad_count*2] = layout;
}

rcn_vm.prototype.set_volume = function(volume) {
  this.audio.set_volume(volume);
}

// rcn_vm.prototype.onmessage = function(e) {
//   switch(e.data.type) {

//     case 'error':
//       this.kill();
//       break;

//   }
// }

rcn_vm.prototype.init_systemcall = function(scall_tbl) {
  let calls = GEngine.calls;
  for(let k in calls) {
    scall_tbl[k] = calls[k];
  }
}

export default rcn_vm;