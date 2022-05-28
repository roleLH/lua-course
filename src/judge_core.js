


import GCore from "./core";
import VMWorker from "./luavm_worker";
import VMOutput from "./vm_output";


let _gen_test_code = (id, input, output) => {
  return `local ret = solve(${input})
  local is_same = __is_same(ret, ${output}) and 1 or 0
  __scall("collectCodeRet", ${id}, is_same)`;
}

/**
 * 
 * @param {VMWorker} worker 
 * @returns {Promise}
 */
 function initSystemCall(worker) {
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
  game = {}
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
  setmetatable(game, mtbl)
end
init_system_call_tbl()`;
  return worker.run("run", code);
}



class JudgeCore {
  constructor() {
    this.output = new VMOutput(100);
    this.worker = new VMWorker(this.output);

    this.code = null;
    this.cur_ret = {
      id: -1,
      ret: -1,
    }
  }


  async init() {
    this.onWorkerEvent("error", (data) => {
      this.worker.onreject(data);
    });
    this.onWorkerEvent("code_error", (data) => {
      if(this.worker.oncodeerror) {
        this.worker.oncodeerror(data);
      }
      return this.worker.output.printErr(data);
    });
    this.onWorkerEvent("code_print", (data) => {
      //  console.log(data);
      this.worker.output.print(data);
    });
    this.onWorkerEvent("question_ret", (data) => {
      this.cur_ret.id = data.id;
      this.cur_ret.ret = data.ret;
    })
    try {
      await this.worker.createVM();
      await initSystemCall(this.worker);
      await this.worker.run("initexamcore");
    } catch(e) {
      console.log(e);
    }

  }

  async resetWorker() {
    if(this.worker.isAlive()) { return; }
    try {
      await this.worker.createVM();
      await initSystemCall(this.worker);
      await this.worker.run("initexamcore");
    } catch(e) {
      console.log(e);
    }
  }

  /**
   * 
   * @param {String} enent 
   * @param {Function} cb 
   */
  onWorkerEvent(event, cb) {
    this.worker.onVMEvent(event, cb);
  }



  /**
   * @description 先跑一遍代码看看有没有语法错误
   * @param {String} code
   */
  compile(code) {
    if(!code) { return; }
    let worker = this.worker;
    let error_info = null;
    worker.codeerror((data) => {
      console.log(data);
      error_info = data;
    })
    this.code = code;
    worker.run("run", code).then(() => {
      GCore.emit("compile_rsp", {
        result : error_info ? "compile" : true,
        error_info: error_info
      })
    }).catch((error) => {
      console.log(error);
      if(error.toString() == "timeout") {
        GCore.emit("vm_timeout", {
          core: this,
        })
      }
      GCore.emit("compile_rsp", {
        result : "timeout",
        data: error,
      })
    })
  }

  /**
   * @description 跑样例
   * @param {Array} examples 
   * @returns 
   */
  runExamples(examples) {
    if(!examples) {return; }
    let worker = this.worker;
    let ios = examples;

    let idx = 0;

    let is_error = false;
    let error_info = null;
    let _code_error = (data) => {
      console.log(data);
      is_error = true;
      error_info = data;
    }
    worker.codeerror(_code_error);

    let _process = null;
    _process = () => {
      let test = ios[idx];
      if(!test) {
        return GCore.emit("run_result", {
          result: "accepted",
        })
      }

      let code = _gen_test_code(idx, test[0], test[1]);
      worker.run("run", code).then((data) => {
        if(is_error) { 
          return GCore.emit("run_result", {
            result: "runtime",
            error_info: error_info,
          }); 
        }
        if(this.cur_ret.id > -1 && this.cur_ret.ret !== 1) {
          return GCore.emit("run_result", {
            result: "wrong",
            error_info: ios[idx],
          });
        }
        idx++;
        _process();
      }).catch((err) => {
        if(err.toString() == "timeout") {
          GCore.emit("vm_timeout", {
            core: this,
          })
          return GCore.emit("run_result", {
            result: "timeout",
          })
        }
        console.log(err);
      })
    }
    _process();

  }
}

export default JudgeCore