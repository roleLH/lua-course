import GCore from "./core";
import JudgeCore from "./judge_core";



class JudgeSystem {
  constructor() {
    this.core = new JudgeCore();
  }

  async init() {
    await this.core.init();
  }

  compile(code) {
    if(this.core) {
      this.core.compile(code);
    }
  }

  runExamples(examples) {
    if(this.core) {
      this.core.runExamples(examples);
    }
  }

  async resetCore() {
    this.core = null;
    let core = new JudgeCore();
    await core.init();
    this.core = core;
  }

}

let GJudgeSystem = new JudgeSystem();

GCore.on("compile_req", (data) => {
  let code = data.code;
  GJudgeSystem.compile(code);
})
GCore.on("run_example_req", (data) => {
  GJudgeSystem.runExamples(data.examples);
})

GCore.on("vm_timeout", (data) => {
  GJudgeSystem.resetCore().then(() => {
    console.log("success. reset judge system.")
  });
})

GCore.on("init_judgesystem", () => {
  GJudgeSystem.init().then(() => {
    console.log("success. init judge system.")
  })
})

GCore.emit("init_judgesystem")
export default GJudgeSystem;