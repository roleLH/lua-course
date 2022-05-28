
import VMOutput from "./vm_output";

let start_time = 0;
let end_time = 0;

class VMWorker {
  constructor(vm_output) {
    this.worker = null;
    this.ispending  = false;
    this.onresolve  = null;
    this.onreject   = null;

    this.output = vm_output || new VMOutput(100);
    this.oncodeerror = null;
    this.events = {}
    this.code_timeout = 1000 * 10;
    this.running = null;
    this.timer = null;

    this.onVMEvent("init_wasm", (data) => {
      let ret = data || data.data;
      if(ret && this.onresolve) {
        return this.onresolve();
      }
      if(this.onreject) {
        this.onreject("init wasm failed")
      }
    })
  }

  clearState() {
    this.ispending = false;
    this.onresolve = null;
    this.onreject = null;
    this.running = null;
    this.timer = null;
  }

  isAlive() {
    return this.worker;
  }

  /**
   * 
   * @param {String} e 
   * @param {Function} cb 
   */
  onVMEvent(e, cb) {
    let listener = this.events[e];
    if(!listener) {
      listener = new Set();
      this.events[e] = listener;
    }
    listener.add(cb);
  }

  /**
   * 
   * @param {String} e 
   * @param {Function} cb 
   */
  removeVMEvent(event, cb) {
    if(!event) {
      this.events = {};
      return;
    }
    if(!cb) {
      delete this.events[event];
      return;
    }
    let list = this.events[event];
    if(list) {
      list.delete(cb);
    }
  }
  

  createVM() {
    this.worker = new Worker("./lib/lua/luavm_fn.js");
    this.worker.onmessage = (e) => {
      this.ispending = false;
      let data = e.data;
      if(this.running === data.type) {
        if(this.timer) {
          clearTimeout(this.timer);
        }
        // console.log(data.type, "clear timeout.");
        this.timer = null;
      }

      let end = new Date().valueOf();
      console.log(this.running, this.arg, end - start_time);
      let listeners = this.events[data.type];
      if(!listeners) {
        return this.onresolve(data); 
      }
      listeners.forEach((cb) => {
        cb(data.data);
      })        
    }
    return new Promise((resolve, reject) => {
      this.onresolve = resolve;
      this.onreject = reject;
    }).then(() => {
      return this.run("reset");
    })
  }
  destoryVM() {
    if(!this.worker) {
      return;
    }
    this.worker.terminate();
    this.worker = null;
  }
  killVM() {
    console.log("kill vm.")
    this.destoryVM();
    this.clearState();
  }

  /**
   * 
   * @param {String} fn_name 
   * @param {String} arg 
   * @returns Promise
   */
  run(fn_name, arg) {
    if(this.ispending) {
      return Promise.reject("vm is pending.");
    }
    this.ispending = true;

    start_time = new Date().valueOf();
    this.running = fn_name;
    this.arg = arg;
    this.worker.postMessage({
      type: fn_name,
      data: arg,
    });
    // this.timer = setTimeout(() => {
    //   if(this.running === fn_name) {
    //     this.onreject("timeout");
    //     this.killVM();
    //     console.log(arg);
    //     return 
    //   }
    // }, this.code_timeout)
    return new Promise((resolve, reject) => {
      this.onresolve = resolve;
      this.onreject = reject;
    })
  }

  codeerror(cb) {
    this.oncodeerror = cb;
  }
}



export default VMWorker