
import visitDocumentation from "../docs";
import GCore from "./core";
import ResultUI from "./ui/result";

let solve_code = `
function solve(input) 
  return 0
end`



const INPUT_URL = "docs/question_inputs/inputs.json";

class Inputs {
  constructor() {
    this.data = null;
  }
  async init() {
    const response = await fetch(INPUT_URL);
    const data = await response.json();
    this.data = data;
    return true;
  }

  /**
   * 
   * @param {Number} qid 
   * @returns {Array}
   */
  getInputs(qid) {
    let ios = this.data[qid];
    return ios && ios.io;
  }

  /**
   * 
   * @returns {Number}
   */
  length() {
    return this.data.length;
  }

}

/**
 * @note 
 * run_example.lua
 */
class Exam {
  constructor() {
    this.questionid = 0;
    this.node = document.querySelector("#descriptor");    
    this.inputs = new Inputs();
  }

  async init() {
    let ret = await this.inputs.init();
    GCore.on("run_code", (data) => {
      let code = data.code;
      if (!code) {
        return;
      } 
      // code = "solve = nil \n" + code;
      GCore.emit("compile_req", {code});
    });
    GCore.on("compile_rsp", (data) => {
      if(data && data.result === true) {
        let ios = this.inputs.getInputs(this.questionid);
        return GCore.emit("run_example_req", {examples: ios})
      }
      GCore.emit("run_result", data);
    });
    GCore.on("run_result", (data) => {
      console.log(data);
      if(data.result) {
        GCore.emit(data.result, data);
      }
    })

    GCore.on("next_question", (data) => {
      this.removeCurQuestionDescription();
      this.nextQuestion();
      this.visitCurQuestion();
    })
  }

  hasNextQuestion() {
    let len = this.inputs.length();
    return this.questionid + 1 < len;
  }

  nextQuestion() {
    if(this.hasNextQuestion()) {
      this.questionid++;
      return true;
    }
  }

  visitCurQuestion() {
    let url = `docs/questions/q${this.questionid}.md`;
    visitDocumentation(url, this.node);
  }

  removeCurQuestionDescription() {
    this.node.removeChild(this.node.childNodes[0]);
  }

  getQuestionTest(questionid, testid) {
    let ios = this.inputs.getInputs(questionid || this.questionid);
    if(!ios) { return; }
    return ios[testid];
  }
}

export default Exam;
