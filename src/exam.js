
import visitDocumentation from "../docs";
import GCore from "./core";

/**
 * fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
 */

let GInputs = null;
let load_inputs = (cb) => {
  fetch("docs/question_inputs/inputs.json")
  .then(response => response.json())
  .then((data) => {
    GInputs = data;
  })
}
if(!GInputs) {
  load_inputs();
}

let _get_cur_inputs = (qid) => {
  let inputs = GInputs[qid];
  if(!inputs) { return ;}
  return inputs.io;
}

let _gen_test_code = (id, input, output) => {
  return `local ret = solve(${input})
  local is_same = __is_same(ret, ${output}) and 1 or 0
  __scall("collectCodeRet", ${id}, is_same)`;
}

/**
 * @note 
 * run_example.lua
 */
class Exam {
  constructor() {
    this.questionid = 0;
    this.node = document.querySelector("#descriptor");
  }

  hasNextQuestion() {
    return true;
  }

  nextQuestion() {
    if(this.hasNextQuestion()) {
      this.questionid++;
    }
  }

  visitCurQuestion() {
    let url = `docs/questions/q${this.questionid}.md`;
    visitDocumentation(url, this.node);
  }

  vmRunExamples(luavm) {
    let ios = _get_cur_inputs(this.questionid);
    for(let i = 0; i < ios.length; i++) {
      let test = ios[i];
      let code = _gen_test_code(i, test[0], test[1]);
      let ret = luavm.run(code);
      if(ret != 0) {
        GCore.emit("code_error", {
          text: `run test error. question:${this.questionid}, eg:${i}`
        })
      }
    }
  }
  putResult(id, ret) {
   
  }

  getQuestionTest(questionid, testid) {
    let ios = _get_cur_inputs(questionid || this.questionid);
    if(!ios) { return; }
    return ios[testid];
  }
}

export default Exam;