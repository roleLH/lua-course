// Basic functionality, bootstrap, config
// 'use strict';

import rcn_bin from "./bin.js"
import rcn_vm from "./vm.js"
import LuaVM from "../../luavm.js";
import {rcn} from "./config"



function rcn_start_game_mode(params) {
  console.log('Starting game mode');
  let luavm = new LuaVM();
  luavm.reset();
  const vm = new rcn_vm({
    no_network: !!params.export,
    rcn: rcn,
    luavm: luavm
  });
  vm.init_systemcall(window.SCALLTBLS);
  document.body.appendChild(vm.canvas.node);
  vm.canvas.node.focus();
  vm.load_bin(params.bin);
  vm.draw();
}

window.addEventListener('load', function() {

    fetch('/docs/test.rcn.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(test) {
      let static_bin = new rcn_bin();
      static_bin.from_json(test);
      return rcn_start_game_mode({
        bin: static_bin,
        export: true,
      });
    });

});
