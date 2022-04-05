


/**
 * @time 03-12-2022
 * @description 你知道的，我总是喜欢写点无聊的东西
 * {
 *    id: 0,
 *    title: "",
 *    inouts: [],
 * }
 */
const QUESTIONS = [];
const DEFAULT_QUESTION = {
  id : 0,
  title : "default",
  inouts : [
    ["0ffffffffffdvvvaaaaq1sqweqweqweqweeeee", "0"],
    ["1", "1"],
    ["2", "2"]
  ]
}



class Question {
  constructor(id) {
    this.id = id;
    this.question = DEFAULT_QUESTION;
    this.setQuestion(id);
  }

  /**
   * 
   * @param {Number} id 
   */
  setQuestion(id) {
    let question = QUESTIONS[id];
    if(!question) {
      console.log("[question] error not found id", id);
      return;
    }
    this.question = question;
  }

  getTitle() {
    return this.question.title;
  }
  getInOuts() {
    return this.question.inouts;
  }

}

export default Question;