import IDEUI from "./ui/editor.js";
import QuestionControllor from "./controller/question.js";
import LuaVM from "./luavm.js";
import Term from "./term.js";
import GCore from "./core";
import visitDocumentation from "../docs.js";
import ResultUI from "./ui/result";
import Exam from "./exam.js";

let global_this = window;
global_this.GCore = GCore;

const SCALLTBLS = {
  collectCodeRet : (id, ret) => {
    GCore.emit("code_ret", {
      id,
      ret
    });
  },
}

global_this.scall = (...args) => {
  let fn = SCALLTBLS[args[0]];
  if(!fn) {
    GCore.emit("code_error", {
      text: "not found scall call: " + args[0]
    });
    return 
  }
  return fn(args[1], args[2], args[3], args[4]);
}

let load_luavm = (cb) => {
  cb();
}

/**
 * 
 * @param {LuaVM} luavm 
 * @returns {Number}
 */
function initSystemCall(luavm) {
  let code = `

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

  function init_system_call_tbl() 
  local check_type = function(val) 
    local t = type(val)
    if t == "number" or t == "string" then 
      return true
    end
  end
  system = {}
  local mtbl = {}
  mtbl.__index = function(t, k) 
    return function(...) 
      local args = {...}
      for k, v in pairs(args) do
        if not check_type(v) then 
          return -1 -- unavailable type
        end
      end
      return __scall(k, ...)
    end
  end
  setmetatable(system, mtbl)
end
init_system_call_tbl()`;
return luavm.run(code);
}

window.onload = function (e) {
  let editor = new IDEUI();
  editor.render();

  let result = new ResultUI();
  result.render();
  result.init();
  let exam = new Exam();
  exam.visitCurQuestion();

  GCore.on("code_error", (data) => {
    let text = data.text;
    result.term.writeln(text);
  })
  GCore.on("code_print", function (data) {
    let text = data.text;
    result.term.write(text);
  });
  GCore.on("code_ret", (data) => {
    let {id, ret} = data;
    let test = exam.getQuestionTest(null, id)
    let accepted  = "[\x1b[32mAccepted\x1b[0m]";
    let error     = "[\x1b[31mWrong Answer\x1b[0m]";
    let str = `input[\x1b[33m${test[0]}\x1b[0m] output[\x1b[33m${test[1]}\x1b[0m] result: ${ret ? accepted : error}`;
    result.term.writeln(str);
  })

  load_luavm(() => {
    let luavm = new LuaVM();
    luavm.reset();
    initSystemCall(luavm);
    GCore.on("run_code", function (data) {
      let code = data.code;
      if (!code) {
        return;
      } 
      result.show();
      GCore.emit("code_print", {text:"---------------\n"});
      let ok = luavm.run(code);
      if(ok == 0) {
        exam.vmRunExamples(luavm);
      }
      GCore.emit("code_print", {text:"---------------\n"});
   //   result.term.write(`\x1b[41;36m 6767676 \x1b[0m`);      
    });
  })
};



// let term = new Term({ cols: 80, rows: 30, scrollback: 10000, fontSize: 15 });
// term.open(document.getElementById("term_container"),
//           document.getElementById("term_paste"));    
// term.write("your print stdout:\r\n");
//export default 123

// visitDocumentation("docs/questions/q0.md", document.querySelector("#descriptor"));
// window.visitDocumentation = visitDocumentation;
