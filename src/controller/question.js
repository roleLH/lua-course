import QuestionUI from "../ui/question.js";
import Question from "../model/question.js";


class BaseControllor {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

class QuestionControllor extends BaseControllor{
  constructor() {
    super(new Question(0), new QuestionUI());
  }

  /**
   * 
   * @param {Number} id 
   */
  setQuestion(id) {
    this.model.setQuestion(id);
    let title = this.model.getTitle();
    this.view.setTitle(title);
    let inouts = this.model.getInOuts();
    this.view.removeAllExamples();
    inouts.forEach((texts) => {
      this.view.addExample(texts[0], texts[1]);
    })
  }

  render() {
    let node = document.querySelector("#descriptor");
    this.view.renderTo(node);
  }
}


export default QuestionControllor