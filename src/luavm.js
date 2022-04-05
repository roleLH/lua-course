
// let new_luavm = cwrap("new_luavm", "number", []);
// let lua_exec = cwrap("lua_exec", "number", ["number", "string"]);
// let close_luavm = cwrap("close_luavm", null, ["number"]);

let new_luavm = null;
new_luavm = () => {
  new_luavm = cwrap("new_luavm", "number", []);
  return new_luavm();
}
let lua_exec = null;
lua_exec = (l, code) => {
  lua_exec = cwrap("lua_exec", "number", ["number", "string"]);
  return lua_exec(l, code);
}
let close_luavm = null;
close_luavm = (l) => {
  close_luavm = cwrap("close_luavm", null, ["number"]);
  return close_luavm(l);
}

class LuaVM {
  constructor() {
    this.vm = null;
  }

  /**
   * 
   * @param {String} code 
   */
  run(code) {
    if(!this.vm || this.vm == 0) {
      console.log("[luavm] cant found luavm.");
      return;
    }
    let errCode = lua_exec(this.vm, code);


    return errCode;
  }

  reset() {
    if(this.vm) {
      close_luavm(this.vm)
    }
    this.vm = new_luavm();
  }

  
}



export default LuaVM