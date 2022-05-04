
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
let lua_callfn = null;
lua_callfn = (l, fn_name) => {
  lua_callfn = cwrap("lua_callfn", null, ["number", "string"]);
  return lua_callfn(l, fn_name);
}
let lua_isfn = null;
lua_isfn = (l ,fn_name) => {
  lua_isfn = cwrap("lua_isfn", "number", ["number", "string"]);
  return lua_isfn(l, fn_name);
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

  /**
   * 
   * @param {String} fn_name 
   */
  callfn(fn_name) {
    if(!this.vm || this.vm == 0) {
      console.log("[luavm] cant found luavm.");
      return;
    }
    lua_callfn(this.vm, fn_name);
    return;
  }

  /**
   * 
   * @param {String} fn_name 
   */
  isfn(fn_name) {
    if(!this.vm || this.vm == 0) {
      console.log("[luavm] cant found luavm.");
      return;
    }
    let ret = lua_isfn(this.vm, fn_name);
    return ret == 1 ? true : false;
  }

  reset() {
    if(this.vm) {
      close_luavm(this.vm)
    }
    this.vm = new_luavm();
  }

}



export default LuaVM