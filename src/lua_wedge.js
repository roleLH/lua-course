
import {
  FENGARI_AUTHORS,
  FENGARI_COPYRIGHT,
  FENGARI_RELEASE,
  FENGARI_VERSION,
  FENGARI_VERSION_MAJOR,
  FENGARI_VERSION_MINOR,
  FENGARI_VERSION_NUM,
  FENGARI_VERSION_RELEASE,

  luastring_eq,
  luastring_indexOf,
  luastring_of,
  to_jsstring,
  to_luastring,
  to_uristring,

  lua,
  lauxlib,
  lualib
} from 'fengari';
import * as interop from 'fengari-interop';
import GCore from './core';

const {
  LUA_ERRRUN,
  LUA_ERRSYNTAX,
  LUA_OK,
  LUA_VERSION_MAJOR,
  LUA_VERSION_MINOR,
  lua_Debug,
  lua_getinfo,
  lua_getstack,
  lua_gettop,
  lua_insert,
  lua_pcall,
  lua_pop,
  lua_pushcfunction,
  lua_pushstring,
  lua_remove,
  lua_setglobal,
  lua_tojsstring
} = lua;
const {
  luaL_loadbuffer,
  luaL_newstate,
  luaL_requiref,
} = lauxlib;
const {
  checkjs,
  luaopen_js,
  push,
  tojs
} = interop;

console.log(LUA_ERRRUN, LUA_ERRSYNTAX);

// const L = luaL_newstate();
// lualib.luaL_openlibs(L);


// let ret = luaL_loadbuffer(L, str, null, "test");
// console.log(ret)
// console.log(lua_pcall(L, 0, 1, 0))

const msghandler = function(L) {
  let ar = new lua_Debug();
  if (lua_getstack(L, 2, ar))
    lua_getinfo(L, to_luastring("Sl"), ar);
  let e = new ErrorEvent("error", {
    bubbles: true,
    cancelable: true,
    message: lua_tojsstring(L, 1),
    error: tojs(L, 1),
    filename: ar.short_src ? to_jsstring(ar.short_src) : void 0,
    lineno: ar.currentline > 0 ? ar.currentline : void 0
  })
    push(L, e);
  return 1;
};

let termPrint = function(luaState) {
  let n = lua_gettop(luaState);
  if(n <= 0) { return 0; }
  let args = [];
  for(let i = 1; i <= n; i++) {
    let s = lua_tojsstring(luaState, i);
    args.push(s);
  }
  GCore.emit("print", {args});
  return 0;
}


class LuaVM {
  constructor() {
    this.luaState = null;
    this.needStandardLibs = true;
    this.term
  }

  reset() {
    this.luaState = null;
    this.luaState = luaL_newstate();
    if(this.needStandardLibs) {
      lualib.luaL_openlibs(this.luaState);
    }
  }

  /**
   * 
   * @param {Boolean} flag 
   */
  needStandardLib(flag) {
    this.needStandardLibs = flag;
  }



  /**
   * 
   * @param {String} code
   * @param {String} chunkname 
   */
  runCode(code, chunkname) {
    let luaCode = to_luastring(code);
    chunkname = chunkname || "tmprun";
    let luaChunkName = to_luastring(chunkname);
    let e = null;
    let ok = luaL_loadbuffer(this.luaState, luaCode, null, luaChunkName);
    if(ok !== LUA_OK) {
      let msg = lua_tojsstring(this.luaState, -1);
			let filename = chunkname;
			let lineno = void 0; /* TODO: extract out of msg */
			let syntaxerror = new SyntaxError(msg, filename, lineno);
			e = new ErrorEvent("error", {
				message: msg,
				error: syntaxerror,
				filename: filename,
				lineno: lineno
			});
    }
    /* insert message handler below function */
    let base = lua_gettop(this.luaState);
    lua_pushcfunction(this.luaState, msghandler);
    lua_insert(this.luaState, base);
    ok = lua_pcall(this.luaState, 0, 0, base);
    lua_remove(this.luaState, base);
    /* Check if normal error that msghandler would have handled */
    if (ok === LUA_ERRRUN) {
      e = checkjs(this.luaState, -1);
    }
    if (ok !== LUA_OK) {
			{
				e = new ErrorEvent("error", {
					message: lua_tojsstring(this.luaState, -1),
					error: tojs(this.luaState, -1)
				});
			}
			lua_pop(this.luaState, 1);
			if (window.dispatchEvent(e)) {
				console.error("uncaught exception", e.error);
			}
		}
  }

  setTermPrint() {
    // lua_setglobal
    lua_pushcfunction(this.luaState, termPrint);
    lua_setglobal(this.luaState, "print");
  }


}

export default LuaVM;

/*
let samples = [{
  input : 123,
  output : 123,
}, {
  input : `{1, 2, 3}`,
  output : `{2, 2, 3}`,
}]

let loop_code = ""
samples.forEach((sample) => {
  let code = `
    __input = ${sample.input}
    __output = ${sample.output}
    __rets[__i] = __is_same(solve(__input), __output)
    __i = __i + 1 `
    loop_code += code;
})

let user_code = ""

let final_code = `
${user_code}
function __js__generate_fn() 
  local __is_same
  __is_same = function(a, b) 
    local type_a = type(a)
    local type_b = type(b)
    if type_a ~= type_b then 
      return false
    end
    if type_a == "table" then 
      for k, v in pairs(a) do 
        if not __is_same(v, b[k]) then 
          return false
        end
      end
      return true
    end
    return a == b
  end
  
end
`

*/