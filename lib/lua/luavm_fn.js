

  vm_print = function(text) {
    console.log(text);
    postMessage({
      type: "code_print",
      data : text,
    })
  };
  let err_logs = [];
  vm_print_err = function(text) {
    err_logs.push(text);
  }

  let SCALLTBLS = {}
  scall = function(...args) {
    let fn = SCALLTBLS[args[0]];
    if(!fn) {
      postMessage({
        type: "code_error",
        text: "not found scall call: " + args[0]
      })
      return; 
    }
    let arg = [];
    let n_arg = args[1];
    for(let i = 0; i < n_arg; i++) {
      arg[i] = args[i+2];
    }
    return fn(...arg);
  }


  let new_luavm = null;
  let lua_exec = null;
  let close_luavm = null;
  let lua_callfn = null;
  let lua_isfn = null;

  var Module = {}
  let wasm_path = "lua_emcc.wasm";
  let getWasm = function () {
    return fetch(wasm_path, { credentials: 'same-origin' }).then(function(response) {
      if (!response['ok']) {
        throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
      }
      return response['arrayBuffer']();
    })
  }

  getWasm().then((binary) => {
    Module.wasmBinary = binary;
    // let buffer = new Uint8Array(binary);
    
    let _init = (info, receiver) => {
      WebAssembly.instantiate(binary, info).then((output) => {
        receiver(output && output.instance);

        new_luavm = cwrap("new_luavm", "number", []);
        lua_exec = cwrap("lua_exec", "number", ["number", "string"]);
        close_luavm = cwrap("close_luavm", null, ["number"]);
        lua_callfn = cwrap("lua_callfn", null, ["number", "string"]);
        lua_isfn = cwrap("lua_isfn", "number", ["number", "string"]);

        postMessage({
          type: "init_wasm",
          data: true
        })

      })
    }

    Module.instantiateWasm = _init;
    importScripts("/lib/lua/lua_emcc.js");
  })

  
  let vm_core = null;
  let fns = {
    run : function(code) {
      if(!vm_core || vm_core === 0) {
        return;
      }
      let ret = lua_exec(vm_core, code);
      if(err_logs.length > 0) {
        postMessage({
          type: "code_error",
          data : err_logs,
        });
        err_logs = [];
      }
      return ret;
    },
    callfn : function(fn_name) {
      if(!vm_core || vm_core === 0) {
        console.log("[luavm] cant found luavm.");
        return;
      }
      return lua_callfn(vm_core, fn_name);
    },
    isfn : function(fn_name) {
      if(!vm_core || vm_core === 0) {
        console.log("[luavm] cant found luavm.");
        return;
      }
      let ret = lua_isfn(vm_core, fn_name);
      return ret == 1 ? true : false;
    },
    reset : function() {
      if(vm_core && vm_core !== 0) {
        close_luavm(vm_core);
      }
      vm_core = new_luavm();
      return vm_core !== 0
    },

    initgamecore : function() {

    },

    initexamcore : function() {
      SCALLTBLS.collectCodeRet = function(id, ret) {
        postMessage({
          type: "question_ret",
          data: {id, ret}
        })
      }
    },

    game_init : function() {
      let fn_name = "init";
      if(fns.isfn(fn_name)) {
        fns.callfn(fn_name);
      }
    },
    game_update: function() {
      fns.callfn("update");
    }, 
    game_draw: function() {
      fns.callfn("draw");
    },
    game_read : function() {

    }, 
    game_write: function(data) {

    }
  }


  onmessage = (e) => {
    let key = e.data.type;
    let arg = e.data.data;
    let fn = fns[key]
    if(!fn) {
      postMessage({
        type: "error",
        data: `not found method ${key}`
      })
      return;
    }
    let method = fn;
    let ret = method(arg);
    postMessage({
      type: key,
      data: ret,
    })
  }

