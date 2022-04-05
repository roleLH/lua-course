var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @time 03-12-2022
 * @description 你知道的，我总是喜欢写点无聊的东西
 * {
 *    id: 0,
 *    title: "",
 *    inouts: [],
 * }
 */
var QUESTIONS = [];
var DEFAULT_QUESTION = {
  id: 0,
  title: "default",
  inouts: [["0ffffffffffdvvvaaaaq1sqweqweqweqweeeee", "0"], ["1", "1"], ["2", "2"]]
};

var Question = function () {
  function Question(id) {
    _classCallCheck(this, Question);

    this.id = id;
    this.question = DEFAULT_QUESTION;
    this.setQuestion(id);
  }

  /**
   * 
   * @param {Number} id 
   */


  _createClass(Question, [{
    key: "setQuestion",
    value: function setQuestion(id) {
      var question = QUESTIONS[id];
      if (!question) {
        console.log("[question] error not found id", id);
        return;
      }
      this.question = question;
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.question.title;
    }
  }, {
    key: "getInOuts",
    value: function getInOuts() {
      return this.question.inouts;
    }
  }]);

  return Question;
}();

export default Question;