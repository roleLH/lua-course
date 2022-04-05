var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import QuestionUI from "../ui/question.js";
import Question from "../model/question.js";

var BaseControllor = function BaseControllor(model, view) {
  _classCallCheck(this, BaseControllor);

  this.model = model;
  this.view = view;
};

var QuestionControllor = function (_BaseControllor) {
  _inherits(QuestionControllor, _BaseControllor);

  function QuestionControllor() {
    _classCallCheck(this, QuestionControllor);

    return _possibleConstructorReturn(this, (QuestionControllor.__proto__ || Object.getPrototypeOf(QuestionControllor)).call(this, new Question(0), new QuestionUI()));
  }

  /**
   * 
   * @param {Number} id 
   */


  _createClass(QuestionControllor, [{
    key: "setQuestion",
    value: function setQuestion(id) {
      var _this2 = this;

      this.model.setQuestion(id);
      var title = this.model.getTitle();
      this.view.setTitle(title);
      var inouts = this.model.getInOuts();
      this.view.removeAllExamples();
      inouts.forEach(function (texts) {
        _this2.view.addExample(texts[0], texts[1]);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var node = document.querySelector("#descriptor");
      this.view.renderTo(node);
    }
  }]);

  return QuestionControllor;
}(BaseControllor);

export default QuestionControllor;