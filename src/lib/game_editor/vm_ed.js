// Raccoon vm editor
import Window from "../../ui/window";
import rcn_vm from "../game_core/vm";
import {rcn_ui_button} from "./ui"

class GameVMUI extends Window {
  constructor(title, type) {
    super(title, type);
    this.vm = new rcn_vm();
    this.vm.canvas.node.addEventListener('keydown', (e) => {
      if(e.key == ' ') { // Space key
        this.setPaused(!this.vm.paused)
      }
    });

    const vm_onmessage = this.vm.onmessage;
    this.vm.onmessage = (e) => {
      vm_onmessage.call(this, e);
      this.onmessage(e);
    }
    this.addChild(this.vm.canvas.node);

     // Create reboot button
    this.addChild(this.reboot_button = rcn_ui_button({
      value: 'Reboot',
      onclick: () => {
        this.reboot();
      },
    }));

    // Create step button
    this.addChild(this.step_button = rcn_ui_button({
      value: 'Step',
      onclick: () => {
        this.vm.update();
      },
    }));

    // Create paused checkbox
    this.addChild(this.paused_checkbox = rcn_ui_checkbox({
      label: 'Paused',
      onchange: (e) => {
        this.set_paused(this.checked);
      },
    }));

      // Create autoapply checkbox
    this.addChild(this.autoapply_checkbox = rcn_ui_checkbox({
      label: 'Autoapply',
      checked: true,
    }));

    // Create mute checkbox
    this.addChild(this.muted_checkbox = rcn_ui_checkbox({
      label: 'Muted',
      onchange: (e) => {
        this.update_volume();
      },
    }));

    this.addEventListener('rcn_bin_change', (e) => {
      if(e.detail.load) {
        // We just loaded a new bin, therefore we reboot
        this.reboot();
      } else if(this.autoapply_checkbox.checkbox.checked && e.detail.begin < e.detail.end) {
        if(this.vm.worker) { // Unless VM crashed earlier
          // If autoapply is on, we directly load changed rom into ram
          this.vm.load_memory_from_bin(e.detail.begin, e.detail.end - e.detail.begin);
        }
      }
    });

    this.addEventListener('rcn_mute_request', (e) => {
      this.muted_checkbox.checkbox.checked = true;
      this.updateVolume();
    });
  
    this.vm.load_bin(rcn_global_bin);
    this.setPaused(false);

  }

  setPaused(paused) {
    this.vm.paused = paused;
    this.paused_checkbox.checkbox.checked = paused;
    if(paused) {
      this.step_button.removeAttribute("disabled");
    } else {
      this.step_button.setAttribute('disabled', '');
    }
  }

  updateVolume() {
    this.vm.set_volume(this.muted_checkbox.checkbox.checked ? 0 : 1);
  }

  reboot(bin) {
    this.vm.load_bin(bin);
    this.update_volume();
    rcn_dispatch_ed_event('rcn_reboot');
  }

  onmessage(e) {
    switch(e.data.type) {
      case 'error': {
        const code_ed = rcn_find_editor(rcn_code_ed);
        if(code_ed) {
          code_ed.set_error(e.data);
        }
  
        const console_ed = rcn_find_editor(rcn_console_ed);
        if(console_ed) {
          console_ed.log_error(e.data);
        }
      } break;
      case 'debug':
      console.log('Raccoon VM:', e.data.msg);

      const console_ed = rcn_find_editor(rcn_console_ed);
      if(console_ed) {
        console_ed.log_text(e.data.msg);
      }
      break;
    }
  }
}

// rcn_vm_ed.prototype.title = 'Virtual Machine';
// rcn_vm_ed.prototype.docs_link = 'virtual-machine';
// rcn_vm_ed.prototype.type = 'vm_ed';
// rcn_vm_ed.prototype.group = 'code';


export default GameVMUI;
