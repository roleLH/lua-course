(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fengari"] = factory();
	else
		root["fengari"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./docs.js":
/*!*****************!*\
  !*** ./docs.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var TWITTER_MAX_CHAR_COUNT = 280;
var TWITTER_HANDLE = "@codeurdreams";
var RE_STRING_LITERAL = /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`/i;
var RE_LINE_NUMBER = /^\d{1,6}/;
var RE_COMMENT = /(?:rem\s|#)[^\n]*/i;
var RE_NUMERIC_LITERAL_HEX = /(?<![a-z_])0(?:x|X)[0-9a-fA-F]+/;
var RE_NUMERIC_LITERAL_BIN = /(?<![a-z_])0(?:b|B)[01]+/;
var RE_NUMERIC_LITERAL_OCT = /(?<![a-z_])0(?:o|O)[0-7]+/;
var RE_NUMERIC_LITERAL_SCI = /(?:(?<=div|mod|and|or|xor|not)|(?<![a-z_][a-z0-9_]*))(?:[0-9]+\.?[0-9]*|[0-9]*\.?[0-9]+)(?:[eE][+-]?[0-9]+)?(?!\.)/;
var RE_KEYWORD = /(?<![a-z_])(?<![a-z_][0-9]+)(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)/i;
var RE_FUNCTION_NAME = /(?<![a-z_])(?<![a-z_][0-9]+)(?:sin|cos|tan|asin|acos|atan|log|ln|sqrt|round|floor|ceil|abs|asc|bin\$|oct\$|hex\$|bin|oct|hex|len|last|lower\$|upper\$|trim\$|ltrim\$|rtrim\$|chr\$)/i;
var RE_CONSTANT = /(?<![a-z0-9_])(?:pi|e|phi|epoch|random|col|row|key|heading)(?![a-z0-9_])/i;
var RE_OPERATOR = /\+|-|\*|\/|\^|(?<![a-z_])(?:div|mod)(?![a-z_])|&|\||~|;/i;
var RE_COMPARATOR = /!=|<=|>=|=|<|>/i;
var RE_LOGICAL_OPERATOR = /(?<![a-z_])(?<![a-z_][0-9]+)(?:and|or|xor|not)/i;
var RE_IDENTIFIER = /[a-z_][a-z0-9_]*[$%]?/i;
var RE_EXPRESSION_BRACKET = /[()]/;
var RE_LIST_ACCESS_BRACKET = /[\[\]]/;
var RE_PARAMETER_SEPERATOR = /,/;
var RE_STATEMENT_SEPERATOR = /:/;
var RE_WHTIESPACE = /\s+/;
var RE_OR = /|/;
var RE_ALL = new RegExp([RE_STRING_LITERAL.source, RE_LINE_NUMBER.source, RE_COMMENT.source, RE_NUMERIC_LITERAL_HEX.source, RE_NUMERIC_LITERAL_BIN.source, RE_NUMERIC_LITERAL_OCT.source, RE_NUMERIC_LITERAL_SCI.source, RE_KEYWORD.source, RE_FUNCTION_NAME.source, RE_CONSTANT.source, RE_OPERATOR.source, RE_COMPARATOR.source, RE_LOGICAL_OPERATOR.source, RE_IDENTIFIER.source, RE_EXPRESSION_BRACKET.source, RE_LIST_ACCESS_BRACKET.source, RE_PARAMETER_SEPERATOR.source, RE_STATEMENT_SEPERATOR.source, RE_WHTIESPACE.source].join(RE_OR.source), "gi");
var KEYWORD_COLOURS = {
  "and": {
    background: "blue",
    foreground: "white"
  },
  "break": {
    background: "blue",
    foreground: "white"
  },
  "do": {
    background: "blue",
    foreground: "white"
  },
  "else": {
    background: "blue",
    foreground: "white"
  },
  "elseif": {
    background: "blue",
    foreground: "white"
  },
  "end": {
    background: "blue",
    foreground: "white"
  },
  "false": {
    background: "blue",
    foreground: "white"
  },
  "for": {
    background: "blue",
    foreground: "white"
  },
  "function": {
    background: "blue",
    foreground: "white"
  },
  "goto": {
    background: "blue",
    foreground: "white"
  },
  "if": {
    background: "blue",
    foreground: "white"
  },
  "in": {
    background: "blue",
    foreground: "white"
  },
  "local": {
    background: "blue",
    foreground: "white"
  },
  "nil": {
    background: "blue",
    foreground: "white"
  },
  "not": {
    background: "blue",
    foreground: "white"
  },
  "or": {
    background: "blue",
    foreground: "white"
  },
  "repeat": {
    background: "blue",
    foreground: "white"
  },
  "return": {
    background: "blue",
    foreground: "white"
  },
  "true": {
    background: "blue",
    foreground: "white"
  },
  "until": {
    background: "blue",
    foreground: "white"
  },
  "while": {
    background: "blue",
    foreground: "white"
  },
  "print": {
    background: "blue",
    foreground: "white"
  }
};
var ESCAPE_CHARS = {
  "'": "'",
  "\"": "\"",
  "`": "`",
  "\\": "\\",
  "n": "\n",
  "r": "\r",
  "t": "\t",
  "v": "\v",
  "b": "\b",
  "f": "\f"
}; // function renderDocumentationSyntaxHighlighting(code) {
//     var element = document.createElement("div");
//     var match;
//     function addHighlight(classes, code) {
//         var highlight = document.createElement("span");
//         classes.forEach((i) => highlight.classList.add(i));
//         highlight.textContent = code;
//         element.appendChild(highlight);
//     }
//     var bracketLevel = 0;
//     while (match = RE_ALL.exec(code)) {
//         if (RE_STRING_LITERAL.exec(match)) {
//             addHighlight(["stringLiteral"], match[0]);
//         } else if (RE_COMMENT.exec(match)) {
//             addHighlight(["comment"], match[0]);
//         } else if (RE_KEYWORD.exec(match)) {
//             var keyword = match.toString().toLocaleLowerCase();
//             addHighlight(["keyword", KEYWORD_COLOURS[keyword].background], match[0]);
//         } else if (
//             RE_NUMERIC_LITERAL_HEX.exec(match) ||
//             RE_NUMERIC_LITERAL_BIN.exec(match) ||
//             RE_NUMERIC_LITERAL_OCT.exec(match) ||
//             RE_NUMERIC_LITERAL_SCI.exec(match)
//         ) {
//             addHighlight(["other"], match[0]);
//         } else if (RE_FUNCTION_NAME.exec(match)) {
//             addHighlight(["function"], match[0]);
//         } else if (RE_CONSTANT.exec(match)) {
//             addHighlight(["constant"], match[0]);
//         } else if (RE_EXPRESSION_BRACKET.exec(match)) {
//             if (match == "(") {
//                 bracketLevel++;
//             }
//             if (bracketLevel > 0) {
//                 addHighlight(["bracket", `bracket${Math.min(bracketLevel, 3)}`], match[0]);
//             } else {
//                 addHighlight(["badBracket"], match[0]);
//             }
//             if (match == ")") {
//                 bracketLevel--;
//             }
//         } else if (RE_LIST_ACCESS_BRACKET.exec(match)) {
//             addHighlight(["listAccess"], match[0]);
//         } else if (RE_OPERATOR.exec(match)) {
//             addHighlight(["operator"], match[0]);
//         } else if (RE_COMPARATOR.exec(match) || RE_LOGICAL_OPERATOR.exec(match)) {
//             addHighlight(["comparator"], match[0]);
//         } else if (RE_STATEMENT_SEPERATOR.exec(match)) {
//             addHighlight(["statementSeperator"], match[0]);
//         } else {
//             addHighlight(["other"], match[0]);
//         }
//     }
//     return element.innerHTML;
// }

function renderDocumentationSyntaxHighlighting(code) {}
/**
 * 
 * @param {String} path 
 * @param {HTMLElement} parentNode 
 */


function visitDocumentation(path, parentNode) {
  path = path.replace(/^docs\/\//g, "docs/");
  fetch(path).then(function (response) {
    return response.text();
  }).then(function (data) {
    var converter = new showdown.Converter();
    var doc = new DocumentFragment();
    var container = document.createElement("div");
    container.innerHTML = converter.makeHtml(data);
    doc.appendChild(container);
    doc.querySelectorAll("a").forEach(function (element) {
      var destination = element.getAttribute("href") || "";

      if (destination.startsWith("http://") || destination.startsWith("https://") || destination.startsWith("./") || destination.startsWith("javascript:") || destination.startsWith("#")) {
        return;
      }

      element.onclick = function (e) {
        parentNode.removeChild(container);
        visitDocumentation("docs/" + destination, parentNode);
      };

      element.setAttribute("href", "javascript:void(0)");
    });
    doc.querySelectorAll("code").forEach(function (element) {
      // var code = element.textContent;
      // element.innerHTML = renderDocumentationSyntaxHighlighting(code);
      // if (element.textContent != code) {
      //     element.textContent = code; // Fallback
      // }
      var hljs = window.hljs || hljs;
      hljs.highlightElement(element);
    });
    parentNode.appendChild(doc);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (visitDocumentation);

/***/ }),

/***/ "./src/controller/question.js":
/*!************************************!*\
  !*** ./src/controller/question.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ui_question_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/question.js */ "./src/ui/question.js");
/* harmony import */ var _model_question_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/question.js */ "./src/model/question.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var BaseControllor = /*#__PURE__*/_createClass(function BaseControllor(model, view) {
  _classCallCheck(this, BaseControllor);

  this.model = model;
  this.view = view;
});

var QuestionControllor = /*#__PURE__*/function (_BaseControllor) {
  _inherits(QuestionControllor, _BaseControllor);

  var _super = _createSuper(QuestionControllor);

  function QuestionControllor() {
    _classCallCheck(this, QuestionControllor);

    return _super.call(this, new _model_question_js__WEBPACK_IMPORTED_MODULE_1__["default"](0), new _ui_question_js__WEBPACK_IMPORTED_MODULE_0__["default"]());
  }
  /**
   * 
   * @param {Number} id 
   */


  _createClass(QuestionControllor, [{
    key: "setQuestion",
    value: function setQuestion(id) {
      var _this = this;

      this.model.setQuestion(id);
      var title = this.model.getTitle();
      this.view.setTitle(title);
      var inouts = this.model.getInOuts();
      this.view.removeAllExamples();
      inouts.forEach(function (texts) {
        _this.view.addExample(texts[0], texts[1]);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionControllor);

/***/ }),

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Core = /*#__PURE__*/function () {
  function Core() {
    _classCallCheck(this, Core);

    this.events = {};
  }
  /**
   * 
   * @param {String} event 
   * @param {Function} cb 
   */


  _createClass(Core, [{
    key: "on",
    value: function on(event, cb) {
      var list = this.events[event];

      if (!list) {
        list = new Set();
        this.events[event] = list;
      }

      list.add(cb);
    }
    /**
     * 
     * @param {String} event 
     * @param {Object} data 
     */

  }, {
    key: "emit",
    value: function emit(event, data) {
      var list = this.events[event];

      if (!list) {
        return;
      }

      list.forEach(function (cb) {
        cb(data);
      });
    }
    /**
     * 
     * @param {String} event 
     * @param {Function} cb 
     */

  }, {
    key: "removeEvent",
    value: function removeEvent(event, cb) {
      if (!event) {
        this.events = {};
        return;
      }

      if (!cb) {
        delete this.events[event];
        return;
      }

      var list = this.events[event];

      if (list) {
        list.delete(cb);
      }
    }
  }]);

  return Core;
}();

var GCore = new Core();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GCore);

/***/ }),

/***/ "./src/exam.js":
/*!*********************!*\
  !*** ./src/exam.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _docs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../docs */ "./docs.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./src/core.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



/**
 * fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
 */

var GInputs = null;

var load_inputs = function load_inputs(cb) {
  fetch("docs/question_inputs/inputs.json").then(function (response) {
    return response.json();
  }).then(function (data) {
    GInputs = data;
  });
};

if (!GInputs) {
  load_inputs();
}

var _get_cur_inputs = function _get_cur_inputs(qid) {
  var inputs = GInputs[qid];

  if (!inputs) {
    return;
  }

  return inputs.io;
};

var _gen_test_code = function _gen_test_code(id, input, output) {
  return "local ret = solve(".concat(input, ")\n  local is_same = __is_same(ret, ").concat(output, ") and 1 or 0\n  __scall(\"collectCodeRet\", ").concat(id, ", is_same)");
};
/**
 * @note 
 * run_example.lua
 */


var Exam = /*#__PURE__*/function () {
  function Exam() {
    _classCallCheck(this, Exam);

    this.questionid = 0;
    this.node = document.querySelector("#descriptor");
  }

  _createClass(Exam, [{
    key: "hasNextQuestion",
    value: function hasNextQuestion() {
      return true;
    }
  }, {
    key: "nextQuestion",
    value: function nextQuestion() {
      if (this.hasNextQuestion()) {
        this.questionid++;
      }
    }
  }, {
    key: "visitCurQuestion",
    value: function visitCurQuestion() {
      var url = "docs/questions/q".concat(this.questionid, ".md");
      (0,_docs__WEBPACK_IMPORTED_MODULE_0__["default"])(url, this.node);
    }
  }, {
    key: "vmRunExamples",
    value: function vmRunExamples(luavm) {
      var ios = _get_cur_inputs(this.questionid);

      for (var i = 0; i < ios.length; i++) {
        var test = ios[i];

        var code = _gen_test_code(i, test[0], test[1]);

        var ret = luavm.run(code);

        if (ret != 0) {
          _core__WEBPACK_IMPORTED_MODULE_1__["default"].emit("code_error", {
            text: "run test error. question:".concat(this.questionid, ", eg:").concat(i)
          });
        }
      }
    }
  }, {
    key: "putResult",
    value: function putResult(id, ret) {}
  }, {
    key: "getQuestionTest",
    value: function getQuestionTest(questionid, testid) {
      var ios = _get_cur_inputs(questionid || this.questionid);

      if (!ios) {
        return;
      }

      return ios[testid];
    }
  }]);

  return Exam;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Exam);

/***/ }),

/***/ "./src/luavm.js":
/*!**********************!*\
  !*** ./src/luavm.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// let new_luavm = cwrap("new_luavm", "number", []);
// let lua_exec = cwrap("lua_exec", "number", ["number", "string"]);
// let close_luavm = cwrap("close_luavm", null, ["number"]);
var _new_luavm = null;

_new_luavm = function new_luavm() {
  _new_luavm = cwrap("new_luavm", "number", []);
  return _new_luavm();
};

var _lua_exec = null;

_lua_exec = function lua_exec(l, code) {
  _lua_exec = cwrap("lua_exec", "number", ["number", "string"]);
  return _lua_exec(l, code);
};

var _close_luavm = null;

_close_luavm = function close_luavm(l) {
  _close_luavm = cwrap("close_luavm", null, ["number"]);
  return _close_luavm(l);
};

var LuaVM = /*#__PURE__*/function () {
  function LuaVM() {
    _classCallCheck(this, LuaVM);

    this.vm = null;
  }
  /**
   * 
   * @param {String} code 
   */


  _createClass(LuaVM, [{
    key: "run",
    value: function run(code) {
      if (!this.vm || this.vm == 0) {
        console.log("[luavm] cant found luavm.");
        return;
      }

      var errCode = _lua_exec(this.vm, code);

      return errCode;
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.vm) {
        _close_luavm(this.vm);
      }

      this.vm = _new_luavm();
    }
  }]);

  return LuaVM;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LuaVM);

/***/ }),

/***/ "./src/model/question.js":
/*!*******************************!*\
  !*** ./src/model/question.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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

var Question = /*#__PURE__*/function () {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Question);

/***/ }),

/***/ "./src/term.js":
/*!*********************!*\
  !*** ./src/term.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * Javascript terminal
 * 
 * Copyright (c) 2011-2020 Fabrice Bellard
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


function Term(options) {
  var width, height, tot_height, scrollback;

  function dummy_key_handler() {}

  width = options.cols ? options.cols : 80;
  height = options.rows ? options.rows : 25;
  scrollback = options.scrollback ? options.scrollback : 0;
  this.font_size = options.fontSize ? options.fontSize : 15;
  this.w = width;
  this.h = height;
  this.cur_h = height;
  /* current height of the scroll back buffer */

  tot_height = height + scrollback;
  this.tot_h = tot_height;
  /* maximum height of the scroll back buffer */

  /* y_base and y_disp are index in the circular buffer lines of
     length cur_h. They are defined modulo tot_h, i.e. they wrap
     when cur_h = tot_h. If cur_h < tot_h, y_base is always equal to
     cur_h - h. */

  this.y_base = 0;
  /* position of the current top screen line in the
     scroll back buffer */

  this.y_disp = 0;
  /* position of the top displayed line in the
     scroll back buffer */

  /* cursor position */

  this.x = 0;
  this.y = 0;
  this.scroll_top = 0;
  this.scroll_bottom = this.h;
  this.cursorstate = 0;
  this.handler = dummy_key_handler;
  this.state = 0;
  this.output_queue = "";
  this.colors = [
  /* normal */
  "#000000", "#aa0000", "#00aa00", "#aa5500", "#0000aa", "#aa00aa", "#00aaaa", "#aaaaaa",
  /* bright */
  "#555555", "#ff5555", "#55ff55", "#ffff55", "#5555ff", "#ff55ff", "#55ffff", "#ffffff"];
  /* attributes bits:
     0-3: bg
     4-7: fg
     8: bold
     9: inverse
  */

  this.def_attr = 7 << 4 | 0;
  this.cur_attr = this.def_attr;
  this.is_mac = navigator.userAgent.indexOf("Mac") >= 0 ? true : false;
  this.key_rep_state = 0;
  this.key_rep_str = "";
  this.utf8 = true;
  this.utf8_state = 0;
  this.utf8_val = 0;
  this.application_cursor = false;
  this.application_keypad = false;
  /* if true, emulate some behaviors of the Linux console */

  this.linux_console = true;
  this.textarea_has_focus = false;
}

Term.prototype.setKeyHandler = function (handler) {
  this.handler = handler;
};
/* return the size of a character in CSS pixels using the selected font */


function term_get_char_size(parent_el, font_size) {
  var el, g, ret;
  el = document.createElement("div");
  el.classList.add("term", "term_char_size");
  el.style.fontSize = font_size + "px";
  el.textContent = "W";
  parent_el.appendChild(el);
  g = el.getBoundingClientRect();
  /* the character width & height may not be an integer */

  ret = [g.width, g.height];
  return ret;
}

Term.prototype.open = function (parent_el) {
  var y, line, i, term, c, row_el, char_size_ret;
  /* set initial content */

  this.lines = new Array();
  c = 32 | this.def_attr << 16;

  for (y = 0; y < this.cur_h; y++) {
    line = new Array();

    for (i = 0; i < this.w; i++) {
      line[i] = c;
    }

    this.lines[y] = line;
  }

  char_size_ret = term_get_char_size(parent_el, this.font_size);
  /* size of the character in CSS pixels */

  this.char_width = char_size_ret[0];
  this.char_height = char_size_ret[1];
  this.scrollbar_width = 15;
  /* size of term_el in CSS pixels */

  this.term_width = Math.ceil(this.w * this.char_width) + this.scrollbar_width;
  this.term_height = Math.ceil(this.h * this.char_height);
  /* create the terminal window */

  this.term_el = document.createElement("div");
  this.term_el.className = "term";
  /* XXX: could compute the font metrics */

  this.term_el.style.fontSize = this.font_size + "px";
  this.term_el.style.width = this.term_width + "px";
  this.term_el.style.height = this.term_height + "px";
  /* allow the terminal to take the focus */

  this.term_el.setAttribute("tabindex", "0");
  /* scroll bar */

  this.scrollbar_el = document.createElement("div");
  this.scrollbar_el.className = "term_scrollbar";
  this.scrollbar_el.style.width = this.scrollbar_width + "px";
  this.term_el.appendChild(this.scrollbar_el);
  this.track_el = document.createElement("div");
  this.track_el.className = "term_track";
  this.track_el.onmousedown = this.mouseMoveHandler.bind(this);
  this.scrollbar_el.appendChild(this.track_el);
  this.thumb_el = document.createElement("div");
  this.thumb_el.className = "term_thumb";
  this.thumb_el.onmousedown = this.mouseDownHandler.bind(this);
  this.track_el.appendChild(this.thumb_el);
  this.end_el = document.createElement("div");
  this.end_el.className = "term_end";
  this.thumb_el.appendChild(this.end_el);
  /* current scrollbar position */

  this.thumb_size = -1;
  this.thumb_pos = -1;
  /* terminal content */

  this.content_el = document.createElement("div");
  this.content_el.className = "term_content";
  this.content_el.style.width = this.w + "ch";
  this.term_el.appendChild(this.content_el);
  this.rows_el = [];

  for (y = 0; y < this.h; y++) {
    row_el = document.createElement("div");
    this.rows_el.push(row_el);
    this.content_el.appendChild(row_el);
  }
  /* dummy textarea to get the input events and for the virtual
     keyboard on mobile devices */


  this.textarea_el = document.createElement("textarea");
  this.textarea_el.classList.add("term_textarea");
  this.textarea_el.setAttribute("autocorrect", "off");
  this.textarea_el.setAttribute("autocapitalize", "off");
  this.textarea_el.setAttribute("spellcheck", "false");
  this.textarea_el.setAttribute("tabindex", "-1");
  this.term_el.appendChild(this.textarea_el);
  this.parent_el = parent_el;
  parent_el.appendChild(this.term_el);
  this.refresh(0, this.h - 1);
  /* textarea_el events */
  // key handler

  this.textarea_el.addEventListener("keydown", this.keyDownHandler.bind(this), true);
  this.textarea_el.addEventListener("keyup", this.keyUpHandler.bind(this), true);
  /* keypress is deprecated, so use input */

  this.textarea_el.addEventListener("input", this.inputHandler.bind(this), true);
  this.textarea_el.addEventListener("focus", this.focusHandler.bind(this), true);
  this.textarea_el.addEventListener("blur", this.blurHandler.bind(this), true);
  /* term_el events */

  this.term_el.addEventListener("keydown", this.termKeyDownHandler.bind(this), true);
  this.term_el.addEventListener("paste", this.pasteHandler.bind(this), true);
  this.term_el.addEventListener("mouseup", this.termMouseUpHandler.bind(this), true);
  this.term_el.addEventListener("wheel", this.wheelHandler.bind(this), false); // cursor blinking

  term = this;
  setInterval(function () {
    term.cursor_timer_cb();
  }, 1000);
  this.term_el.focus();
};

Term.prototype.refresh_scrollbar = function () {
  var total_size, thumb_pos, thumb_size, y, y0;
  total_size = this.term_el.clientHeight;
  thumb_size = Math.ceil(this.h * total_size / this.cur_h);
  /* position of the first line of the scroll back buffer */

  y0 = (this.y_base + this.h) % this.cur_h;
  y = this.y_disp - y0;
  if (y < 0) y += this.cur_h;
  thumb_pos = Math.floor(y * total_size / this.cur_h);
  thumb_size = Math.max(thumb_size, 30);
  thumb_size = Math.min(thumb_size, total_size);
  thumb_pos = Math.min(thumb_pos, total_size - thumb_size); //    console.log("pos=" + thumb_pos + " size=" + thumb_size);

  if (thumb_pos != this.thumb_pos || thumb_size != this.thumb_size) {
    this.thumb_pos = thumb_pos;
    this.thumb_size = thumb_size;
    this.thumb_el.style.top = thumb_pos + "px";
    this.thumb_el.style.height = thumb_size + "px";
  }
};
/* move the text area at the cursor position so that the browser shows
 * the correct position when the virtual keyboard is used */


Term.prototype.move_textarea = function () {
  var x, y, base_x, base_y, pos;
  pos = this.term_el.getBoundingClientRect();
  base_x = pos.left + window.scrollX;
  base_y = pos.top + window.scrollY;
  /* position relative to the body */

  x = Math.ceil(this.x * this.char_width + base_x);
  y = Math.ceil(this.y * this.char_height + base_y);
  this.textarea_el.style.width = Math.ceil(this.char_width) + "px";
  this.textarea_el.style.height = Math.ceil(this.char_height) + "px";
  this.textarea_el.style.left = x + "px";
  this.textarea_el.style.top = y + "px";
  this.textarea_el.style.zIndex = 1000;
};

Term.prototype.refresh = function (ymin, ymax) {
  var el, y, line, outline, c, w, i, j, cx, attr, last_attr, fg, bg, y1;
  var http_link_len, http_link_str, bold, tmp, inverse;

  function is_http_link_char(c) {
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;=`.";
    return str.indexOf(String.fromCharCode(c)) >= 0;
  }

  function right_trim(str, a) {
    var i, n;
    n = a.length;
    i = str.length;

    while (i >= n && str.substr(i - n, n) == a) {
      i -= n;
    }

    return str.substr(0, i);
  }

  for (y = ymin; y <= ymax; y++) {
    /* convert to HTML string */
    y1 = y + this.y_disp;
    if (y1 >= this.cur_h) y1 -= this.cur_h;
    line = this.lines[y1];
    outline = "";
    w = this.w;

    if (y == this.y && this.cursor_state && this.y_disp == this.y_base) {
      cx = this.x;
    } else {
      cx = -1;
    }

    last_attr = this.def_attr;
    http_link_len = 0;

    for (i = 0; i < w; i++) {
      c = line[i];
      attr = c >> 16;
      c &= 0xffff;
      /* test for http link */

      if (c == 0x68 && w - i >= 8 && http_link_len == 0) {
        /* test http:// or https:// */
        if ((line[i + 1] & 0xffff) == 0x74 && (line[i + 2] & 0xffff) == 0x74 && (line[i + 3] & 0xffff) == 0x70 && ((line[i + 4] & 0xffff) == 0x3a && (line[i + 5] & 0xffff) == 0x2f && (line[i + 6] & 0xffff) == 0x2f || (line[i + 4] & 0xffff) == 0x73 && (line[i + 5] & 0xffff) == 0x3a && (line[i + 6] & 0xffff) == 0x2f && (line[i + 7] & 0xffff) == 0x2f)) {
          http_link_str = "";
          j = 0;

          while (i + j < w && is_http_link_char(line[i + j] & 0xffff)) {
            http_link_str += String.fromCharCode(line[i + j] & 0xffff);
            j++;
          }

          http_link_len = j;

          if (last_attr != this.def_attr) {
            outline += '</span>';
            last_attr = this.def_attr;
          }

          outline += "<a href='" + http_link_str + "'>";
        }
      }

      if (i == cx) {
        attr = -1;
        /* cursor */
      }

      if (attr != last_attr) {
        if (last_attr != this.def_attr) outline += '</span>';

        if (attr != this.def_attr) {
          if (attr == -1) {
            /* cursor */
            outline += '<span class="term_cursor">';
          } else {
            outline += '<span style="';
            fg = attr >> 4 & 0xf;
            bg = attr & 0xf;
            bold = attr >> 8 & 1;
            inverse = attr >> 9 & 1;

            if (inverse) {
              tmp = fg;
              fg = bg;
              bg = tmp;
            }

            if (bold) {
              /* metrics are not OK for all fonts, so disabled */

              /* outline += 'font-weight:bold;'; */

              /* use the bright color */
              if (fg < 8) fg += 8;
            }

            if (fg != 7) {
              outline += 'color:' + this.colors[fg] + ';';
            }

            if (bg != 0) {
              outline += 'background-color:' + this.colors[bg] + ';';
            }

            outline += '">';
          }
        }
      }

      switch (c) {
        case 32:
          outline += "&nbsp;";
          break;

        case 38:
          // '&'
          outline += "&amp;";
          break;

        case 60:
          // '<'
          outline += "&lt;";
          break;

        case 62:
          // '>'
          outline += "&gt;";
          break;

        default:
          if (c < 32) {
            outline += "&nbsp;";
          } else {
            outline += String.fromCharCode(c);
          }

          break;
      }

      last_attr = attr;

      if (http_link_len != 0) {
        http_link_len--;

        if (http_link_len == 0) {
          if (last_attr != this.def_attr) {
            outline += '</span>';
            last_attr = this.def_attr;
          }

          outline += "</a>";
        }
      }
    }

    if (last_attr != this.def_attr) {
      outline += '</span>';
    }
    /* trim trailing spaces for copy/paste */


    outline = right_trim(outline, "&nbsp;");
    if (outline == "") outline = "&nbsp;";
    this.rows_el[y].innerHTML = outline;
  }

  this.refresh_scrollbar();
  this.move_textarea();
};

Term.prototype.cursor_timer_cb = function () {
  this.cursor_state ^= 1;
  this.refresh(this.y, this.y);
};

Term.prototype.show_cursor = function () {
  if (!this.cursor_state) {
    this.cursor_state = 1;
    this.refresh(this.y, this.y);
  }
};
/* scroll down or up in the scroll back buffer by n lines */


Term.prototype.scroll_disp = function (n) {
  var i, y1;
  /* slow but it does not really matters */

  if (n >= 0) {
    for (i = 0; i < n; i++) {
      if (this.y_disp == this.y_base) break;
      if (++this.y_disp == this.cur_h) this.y_disp = 0;
    }
  } else {
    n = -n;
    y1 = this.y_base + this.h;
    if (y1 >= this.cur_h) y1 -= this.cur_h;

    for (i = 0; i < n; i++) {
      if (this.y_disp == y1) break;
      if (--this.y_disp < 0) this.y_disp = this.cur_h - 1;
    }
  }

  this.refresh(0, this.h - 1);
};

Term.prototype.write = function (str) {
  var s, ymin, ymax;

  function update(y) {
    ymin = Math.min(ymin, y);
    ymax = Math.max(ymax, y);
  }

  function get_erase_char() {
    var bg_mask, attr;
    bg_mask = 0xf;
    attr = s.def_attr & ~bg_mask | s.cur_attr & bg_mask;
    return 32 | attr << 16;
  }

  function erase_chars(x1, x2, y) {
    var l, i, c, y1;
    y1 = s.y_base + y;
    if (y1 >= s.cur_h) y1 -= s.cur_h;
    l = s.lines[y1];
    c = get_erase_char();

    for (i = x1; i < x2; i++) {
      l[i] = c;
    }

    update(y);
  }

  function erase_to_eol(x, y) {
    erase_chars(x, s.w, y);
  }

  function erase_in_line(n) {
    switch (n) {
      case 0:
        erase_to_eol(s.x, s.y);
        break;

      case 1:
        erase_chars(0, s.x + 1, s.y);
        break;

      case 2:
        erase_chars(0, s.w, s.y);
        break;
    }
  }

  function erase_in_display(n) {
    var y;

    switch (n) {
      case 0:
        erase_to_eol(s.x, s.y);

        for (y = s.y + 1; y < s.h; y++) {
          erase_to_eol(0, y);
        }

        break;

      case 1:
        erase_chars(0, s.x + 1, s.y);

        for (y = 0; y < s.y; y++) {
          erase_to_eol(0, y);
        }

        break;

      case 2:
        for (y = 0; y < s.h; y++) {
          erase_to_eol(0, y);
        }

        break;
    }
  }

  function delete_chars(n) {
    var l, i, c, y1, j;
    y1 = s.y + s.y_base;
    if (y1 >= s.cur_h) y1 -= s.cur_h;
    l = s.lines[y1];
    if (n < 1) n = 1;
    c = get_erase_char();
    j = s.x + n;

    for (i = s.x; i < s.w; i++) {
      if (j < s.w) l[i] = l[j];else l[i] = c;
      j++;
    }

    update(s.y);
  }

  function insert_chars(n) {
    var l, i, c, y1, x1;
    if (n < 1) n = 1;
    if (n > s.w - s.x) n = s.w - s.x;
    y1 = s.y + s.y_base;
    if (y1 >= s.cur_h) y1 -= s.cur_h;
    l = s.lines[y1];
    x1 = s.x + n;

    for (i = s.w - 1; i >= x1; i--) {
      l[i] = l[i - n];
    }

    c = get_erase_char();

    for (i = s.x; i < x1; i++) {
      l[i] = c;
    }

    update(s.y);
  }

  function csi_colors(esc_params) {
    var j, n, fg, bg, mask;

    if (esc_params.length == 0) {
      s.cur_attr = s.def_attr;
    } else {
      for (j = 0; j < esc_params.length; j++) {
        n = esc_params[j];

        if (n >= 30 && n <= 37) {
          /* foreground */
          fg = n - 30;
          s.cur_attr = s.cur_attr & ~(0xf << 4) | fg << 4;
        } else if (n >= 40 && n <= 47) {
          /* background */
          bg = n - 40;
          s.cur_attr = s.cur_attr & ~0xf | bg;
        } else if (n >= 90 && n <= 97) {
          /* bright foreground */
          fg = n - 90 + 8;
          s.cur_attr = s.cur_attr & ~(0xf << 4) | fg << 4;
        } else if (n >= 100 && n <= 107) {
          /* bright background */
          bg = n - 100 + 8;
          s.cur_attr = s.cur_attr & ~0xf | bg;
        } else if (n == 1) {
          /* bold + bright */
          s.cur_attr |= 1 << 8;
        } else if (n == 0) {
          /* default attr */
          s.cur_attr = s.def_attr;
        } else if (n == 7) {
          /* inverse */
          s.cur_attr |= 1 << 9;
        } else if (n == 27) {
          /* not inverse */
          s.cur_attr &= ~(1 << 9);
        } else if (n == 39) {
          /* reset fg */
          mask = 0x0f << 4;
          s.cur_attr = s.cur_attr & ~mask | s.def_attr & mask;
        } else if (n == 49) {
          /* reset bg */
          mask = 0x0f;
          s.cur_attr = s.cur_attr & ~mask | s.def_attr & mask;
        }
      }
    }
  }

  function empty_line(y, use_erase_char) {
    var line, c, y1, x;
    if (use_erase_char) c = get_erase_char();else c = 32 | s.def_attr << 16;
    line = new Array();

    for (x = 0; x < s.w; x++) {
      line[x] = c;
    }

    y1 = s.y_base + y;
    if (y1 >= s.cur_h) y1 -= s.cur_h;
    s.lines[y1] = line;
  }

  function scroll_down(top, bottom, use_erase_char) {
    var y, line, y1, y2;

    if (top == 0 && bottom == s.h) {
      /* increase height of buffer if possible */
      if (s.cur_h < s.tot_h) {
        s.cur_h++;
      }
      /* move down one line */


      if (++s.y_base == s.cur_h) s.y_base = 0;
      s.y_disp = s.y_base;
    } else {
      /* partial scroll */
      for (y = top; y < bottom - 1; y++) {
        y1 = s.y_base + y;
        if (y1 >= s.cur_h) y1 -= s.cur_h;
        y2 = y1 + 1;
        if (y2 >= s.cur_h) y2 -= s.cur_h;
        s.lines[y1] = s.lines[y2];
      }
    }

    empty_line(bottom - 1, use_erase_char);
    update(top);
    update(bottom - 1);
  }

  function scroll_up(top, bottom, use_erase_char) {
    var y, y1, y2;
    /* XXX: could scroll in the history */

    for (y = bottom - 1; y > top; y--) {
      y1 = s.y_base + y;
      if (y1 >= s.cur_h) y1 -= s.cur_h;
      y2 = y1 - 1;
      if (y2 >= s.cur_h) y2 -= s.cur_h;
      s.lines[y1] = s.lines[y2];
    }

    empty_line(top, use_erase_char);
    update(top);
    update(bottom - 1);
  }

  function down_with_scroll() {
    s.y++;
    s.x = 0;

    if (s.y == s.scroll_bottom) {
      s.y--;
      scroll_down(s.scroll_top, s.scroll_bottom, false);
    } else if (s.y >= s.h) {
      s.y--;
      scroll_down(0, s.h, false);
    }
  }

  function up_with_scroll() {
    if (s.y == s.scroll_top) {
      scroll_up(s.scroll_top, s.scroll_bottom, true);
    } else if (s.y == 0) {
      scroll_up(0, s.h, true);
    } else {
      s.y--;
    }
  }

  function insert_lines(n) {
    var y2;
    if (n < 1) n = 1;
    if (s.y < s.scroll_bottom) y2 = s.scroll_bottom;else y2 = s.h;

    while (n != 0) {
      scroll_up(s.y, y2, true);
      n--;
    }
  }

  function delete_lines(n) {
    var y2;
    if (n < 1) n = 1;
    if (s.y < s.scroll_bottom) y2 = s.scroll_bottom;else y2 = s.h;

    while (n != 0) {
      scroll_down(s.y, y2, true);
      n--;
    }
  }

  var TTY_STATE_NORM = 0;
  var TTY_STATE_ESC = 1;
  var TTY_STATE_CSI = 2;
  var TTY_STATE_CHARSET = 3;

  function handle_char(c) {
    var i, l, n, j, y1, y2, x1;

    switch (s.state) {
      case TTY_STATE_NORM:
        switch (c) {
          case 10:
            down_with_scroll();
            break;

          case 13:
            s.x = 0;
            break;

          case 8:
            if (s.x > 0) {
              s.x--;
            }

            break;

          case 9:
            /* tab */
            n = s.x + 8 & ~7;

            if (n <= s.w) {
              s.x = n;
            }

            break;

          case 27:
            s.state = TTY_STATE_ESC;
            break;

          default:
            if (c >= 32) {
              if (s.x >= s.w) {
                s.x = 0;
                down_with_scroll();
              }

              y1 = s.y + s.y_base;
              if (y1 >= s.cur_h) y1 -= s.cur_h;
              s.lines[y1][s.x] = c & 0xffff | s.cur_attr << 16;
              s.x++;
              update(s.y);
            }

            break;
        }

        break;

      case TTY_STATE_ESC:
        switch (c) {
          case 91:
            // '['
            s.esc_params = new Array();
            s.cur_param = 0;
            s.esc_prefix = 0;
            s.state = TTY_STATE_CSI;
            break;

          case 40: // '('

          case 41:
            // ')'
            s.state = TTY_STATE_CHARSET;
            break;

          case 61:
            // '='
            s.application_keypad = true;
            s.state = TTY_STATE_NORM;
            break;

          case 62:
            // '>'
            s.application_keypad = false;
            s.state = TTY_STATE_NORM;
            break;

          case 77:
            // 'M'
            up_with_scroll();
            s.state = TTY_STATE_NORM;
            break;

          default:
            s.state = TTY_STATE_NORM;
            break;
        }

        break;

      case TTY_STATE_CSI:
        if (c >= 48 && c <= 57) {
          // '0' '9'

          /* numeric */
          s.cur_param = s.cur_param * 10 + c - 48;
        } else {
          if (c == 63) {
            // '?'
            s.esc_prefix = c;
            break;
          }
          /* add parsed parameter */


          s.esc_params[s.esc_params.length] = s.cur_param;
          s.cur_param = 0;
          if (c == 59) // ;
            break;
          s.state = TTY_STATE_NORM; //                console.log("term: csi=" + s.esc_params + " cmd="+c);

          switch (c) {
            case 64:
              // '@' insert chars
              insert_chars(s.esc_params[0]);
              break;

            case 65:
              // 'A' up
              n = s.esc_params[0];
              if (n < 1) n = 1;
              s.y -= n;
              if (s.y < 0) s.y = 0;
              break;

            case 66:
              // 'B' down
              n = s.esc_params[0];
              if (n < 1) n = 1;
              s.y += n;
              if (s.y >= s.h) s.y = s.h - 1;
              break;

            case 67:
              // 'C' right
              n = s.esc_params[0];
              if (n < 1) n = 1;
              s.x += n;
              if (s.x >= s.w - 1) s.x = s.w - 1;
              break;

            case 68:
              // 'D' left
              n = s.esc_params[0];
              if (n < 1) n = 1;
              s.x -= n;
              if (s.x < 0) s.x = 0;
              break;

            case 71:
              /* 'G' cursor character absolute */
              x1 = s.esc_params[0] - 1;
              if (x1 < 0) x1 = 0;else if (x1 >= s.w) x1 = s.w - 1;
              s.x = x1;
              break;

            case 72:
              // 'H' goto xy
              y1 = s.esc_params[0] - 1;
              if (s.esc_params.length >= 2) x1 = s.esc_params[1] - 1;else x1 = 0;
              if (y1 < 0) y1 = 0;else if (y1 >= s.h) y1 = s.h - 1;
              if (x1 < 0) x1 = 0;else if (x1 >= s.w) x1 = s.w - 1;
              s.x = x1;
              s.y = y1;
              break;

            case 74:
              // 'J' erase in display
              erase_in_display(s.esc_params[0]);
              break;

            case 75:
              // 'K' erase in line
              erase_in_line(s.esc_params[0]);
              break;

            case 76:
              // 'L' insert lines
              insert_lines(s.esc_params[0]);
              break;

            case 77:
              // 'M' insert lines
              delete_lines(s.esc_params[0]);
              break;

            case 80:
              // 'P'
              delete_chars(s.esc_params[0]);
              break;

            case 100:
              // 'd' line position absolute
              {
                y1 = s.esc_params[0] - 1;
                if (y1 < 0) y1 = 0;else if (y1 >= s.h) y1 = s.h - 1;
                s.y = y1;
              }
              break;

            case 104:
              // 'h': set mode
              if (s.esc_prefix == 63 && s.esc_params[0] == 1) {
                s.application_cursor = true;
              }

              break;

            case 108:
              // 'l': reset mode
              if (s.esc_prefix == 63 && s.esc_params[0] == 1) {
                s.application_cursor = false;
              }

              break;

            case 109:
              // 'm': set color
              csi_colors(s.esc_params);
              break;

            case 110:
              // 'n' return the cursor position
              s.queue_chars("\x1b[" + (s.y + 1) + ";" + (s.x + 1) + "R");
              break;

            case 114:
              // 'r' set scroll region
              y1 = s.esc_params[0] - 1;
              if (y1 < 0) y1 = 0;else if (y1 >= s.h) y1 = s.h - 1;
              if (s.esc_params.length >= 2) y2 = s.esc_params[1];else y2 = s.h;
              if (y2 >= s.h || y2 <= y1) y2 = s.h;
              s.scroll_top = y1;
              s.scroll_bottom = y2;
              s.x = 0;
              s.y = 0;
              break;

            default:
              break;
          }
        }

        break;

      case TTY_STATE_CHARSET:
        /* just ignore */
        s.state = TTY_STATE_NORM;
        break;
    }
  }

  function handle_utf8(c) {
    if (s.utf8_state !== 0 && c >= 0x80 && c < 0xc0) {
      s.utf8_val = s.utf8_val << 6 | c & 0x3F;
      s.utf8_state--;

      if (s.utf8_state === 0) {
        handle_char(s.utf8_val);
      }
    } else if (c >= 0xc0 && c < 0xf8) {
      s.utf8_state = 1 + (c >= 0xe0) + (c >= 0xf0);
      s.utf8_val = c & (1 << 6 - s.utf8_state) - 1;
    } else {
      s.utf8_state = 0;
      handle_char(c);
    }
  }

  var i, c, utf8;
  /* update region is in ymin ymax */

  s = this;
  ymin = s.h;
  ymax = -1;
  update(s.y); // remove the cursor

  /* reset top of displayed screen to top of real screen */

  if (s.y_base != s.y_disp) {
    s.y_disp = s.y_base;
    /* force redraw */

    ymin = 0;
    ymax = s.h - 1;
  }

  utf8 = s.utf8;

  for (i = 0; i < str.length; i++) {
    c = str.charCodeAt(i);
    if (utf8) handle_utf8(c);else handle_char(c);
  }

  update(s.y); // show the cursor

  if (ymax >= ymin) s.refresh(ymin, ymax);
};

Term.prototype.writeln = function (str) {
  this.write(str + '\r\n');
};

Term.prototype.interceptBrowserExit = function (ev) {
  /* At least avoid exiting the navigator if Ctrl-Q or Ctrl-W are
   * pressed */
  if (ev.ctrlKey) {
    window.onbeforeunload = function () {
      window.onbeforeunload = null;
      return "CTRL-W or Ctrl-Q cannot be sent to the emulator.";
    };
  } else {
    window.onbeforeunload = null;
  }
};

Term.prototype.keyDownHandler = function (ev) {
  var str;
  this.interceptBrowserExit(ev);
  str = "";

  switch (ev.keyCode) {
    case 8:
      /* backspace */
      str = "\x7f";
      break;

    case 9:
      /* tab */
      str = "\x09";
      break;

    case 13:
      /* enter */
      str = "\x0d";
      break;

    case 27:
      /* escape */
      str = "\x1b";
      break;

    case 37:
      /* left */
      if (ev.ctrlKey) {
        str = "\x1b[1;5D";
      } else if (this.application_cursor) {
        str = "\x1bOD";
      } else {
        str = "\x1b[D";
      }

      break;

    case 39:
      /* right */
      if (ev.ctrlKey) {
        str = "\x1b[1;5C";
      } else if (this.application_cursor) {
        str = "\x1bOC";
      } else {
        str = "\x1b[C";
      }

      break;

    case 38:
      /* up */
      if (ev.ctrlKey) {
        this.scroll_disp(-1);
      } else if (this.application_cursor) {
        str = "\x1bOA";
      } else {
        str = "\x1b[A";
      }

      break;

    case 40:
      /* down */
      if (ev.ctrlKey) {
        this.scroll_disp(1);
      } else if (this.application_cursor) {
        str = "\x1bOB";
      } else {
        str = "\x1b[B";
      }

      break;

    case 46:
      /* delete */
      str = "\x1b[3~";
      break;

    case 45:
      /* insert */
      str = "\x1b[2~";
      break;

    case 36:
      /* home */
      if (this.linux_console) str = "\x1b[1~";else if (this.application_keypad) str = "\x1bOH";else str = "\x1b[H";
      break;

    case 35:
      /* end */
      if (this.linux_console) str = "\x1b[4~";else if (this.application_keypad) str = "\x1bOF";else str = "\x1b[F";
      break;

    case 33:
      /* page up */
      if (ev.ctrlKey) {
        this.scroll_disp(-(this.h - 1));
      } else {
        str = "\x1b[5~";
      }

      break;

    case 34:
      /* page down */
      if (ev.ctrlKey) {
        this.scroll_disp(this.h - 1);
      } else {
        str = "\x1b[6~";
      }

      break;

    default:
      if (ev.ctrlKey) {
        /* ctrl + key */
        if (ev.keyCode >= 65 && ev.keyCode <= 90) {
          str = String.fromCharCode(ev.keyCode - 64);
        } else if (ev.keyCode == 32) {
          str = String.fromCharCode(0);
        }
      } else if (!this.is_mac && ev.altKey || this.is_mac && ev.metaKey) {
        /* meta + key (Note: we only send lower case) */
        if (ev.keyCode >= 65 && ev.keyCode <= 90) {
          str = "\x1b" + String.fromCharCode(ev.keyCode + 32);
        }
      }

      break;
  } //    console.log("keydown: keycode=" + ev.keyCode + " charcode=" + ev.charCode + " str=" + str + " ctrl=" + ev.ctrlKey + " alt=" + ev.altKey + " meta=" + ev.metaKey);


  if (str) {
    if (ev.stopPropagation) ev.stopPropagation();
    if (ev.preventDefault) ev.preventDefault();
    this.show_cursor();
    this.key_rep_state = 1;
    this.key_rep_str = str;
    this.handler(str);
    return false;
  } else {
    this.key_rep_state = 0;
    return true;
  }
};

Term.prototype.keyUpHandler = function (ev) {
  this.interceptBrowserExit(ev);
};

Term.prototype.to_utf8 = function (s) {
  var i,
      n = s.length,
      r,
      c;
  r = "";

  for (i = 0; i < n; i++) {
    c = s.charCodeAt(i);

    if (c < 0x80) {
      r += String.fromCharCode(c);
    } else if (c < 0x800) {
      r += String.fromCharCode(c >> 6 | 0xc0, c & 0x3f | 0x80);
    } else if (c < 0x10000) {
      r += String.fromCharCode(c >> 12 | 0xe0, c >> 6 & 0x3f | 0x80, c & 0x3f | 0x80);
    } else {
      r += String.fromCharCode(c >> 18 | 0xf0, c >> 12 & 0x3f | 0x80, c >> 6 & 0x3f | 0x80, c & 0x3f | 0x80);
    }
  }

  return r;
};

Term.prototype.inputHandler = function (ev) {
  var str;
  str = this.textarea_el.value;

  if (str) {
    this.textarea_el.value = "";
    this.show_cursor();
    if (this.utf8) str = this.to_utf8(str);
    this.handler(str);
    return false;
  } else {
    return true;
  }
};

Term.prototype.termKeyDownHandler = function (ev) {
  this.interceptBrowserExit(ev);
  /* give the focus back to the textarea when a key is pressed */

  this.textarea_el.focus();
};

Term.prototype.termMouseUpHandler = function (ev) {
  var sel;
  /* if no selection, can switch back up to the textarea focus */

  sel = window.getSelection();
  if (!sel || sel.isCollapsed) this.textarea_el.focus();
};

Term.prototype.focusHandler = function (ev) {
  this.textarea_has_focus = true;
};

Term.prototype.blurHandler = function (ev) {
  /* allow unloading the page */
  window.onbeforeunload = null;
  this.textarea_has_focus = false;
};

Term.prototype.pasteHandler = function (ev) {
  var c, str;

  if (!this.textarea_has_focus) {
    c = ev.clipboardData;

    if (c) {
      str = c.getData("text/plain");
      if (this.utf8) str = this.to_utf8(str);
      this.queue_chars(str);
      return false;
    }
  }
};

Term.prototype.wheelHandler = function (ev) {
  if (ev.deltaY < 0) this.scroll_disp(-3);else if (ev.deltaY > 0) this.scroll_disp(3);
  ev.stopPropagation();
};

Term.prototype.mouseDownHandler = function (ev) {
  this.thumb_el.onmouseup = this.mouseUpHandler.bind(this);
  document.onmousemove = this.mouseMoveHandler.bind(this);
  document.onmouseup = this.mouseUpHandler.bind(this);
  /* disable potential selection */

  document.body.className += " noSelect";
  this.mouseMoveHandler(ev);
};

Term.prototype.mouseMoveHandler = function (ev) {
  var total_size, pos, new_y_disp, y, y0;
  total_size = this.term_el.clientHeight;
  y = ev.clientY - this.track_el.getBoundingClientRect().top;
  pos = Math.floor((y - this.thumb_size / 2) * this.cur_h / total_size);
  new_y_disp = Math.min(Math.max(pos, 0), this.cur_h - this.h);
  /* position of the first line of the scroll back buffer */

  y0 = (this.y_base + this.h) % this.cur_h;
  new_y_disp += y0;
  if (new_y_disp >= this.cur_h) new_y_disp -= this.cur_h;

  if (new_y_disp != this.y_disp) {
    this.y_disp = new_y_disp;
    this.refresh(0, this.h - 1);
  }
};

Term.prototype.mouseUpHandler = function (ev) {
  this.thumb_el.onmouseup = null;
  document.onmouseup = null;
  document.onmousemove = null;
  document.body.className = document.body.className.replace(" noSelect", "");
};
/* output queue to send back asynchronous responses */


Term.prototype.queue_chars = function (str) {
  this.output_queue += str;
  if (this.output_queue) setTimeout(this.outputHandler.bind(this), 0);
};

Term.prototype.outputHandler = function () {
  if (this.output_queue) {
    this.handler(this.output_queue);
    this.output_queue = "";
  }
};

Term.prototype.getSize = function () {
  return [this.w, this.h];
};
/* resize the terminal (size in pixels). Return true if the display
   size was modified. */

/* XXX: may be simpler to separate the scrollback buffer from the
   screen buffer */


Term.prototype.resizePixel = function (new_width, new_height) {
  var new_w, new_h, y, x, line, c, row_el, d, new_cur_h, e;
  if (new_width == this.term_width && new_height == this.term_height) return false;
  new_w = Math.floor((new_width - this.scrollbar_width) / this.char_width);
  new_h = Math.floor(new_height / this.char_height);
  if (new_w <= 0 || new_h <= 0 || new_h > this.tot_h) return false;
  this.term_width = new_width;
  this.term_height = new_height;
  this.term_el.style.width = this.term_width + "px";
  this.term_el.style.height = this.term_height + "px";
  /* XXX: could keep the EOL positions */

  if (new_w < this.w) {
    /* reduce the line width */
    for (y = 0; y < this.cur_h; y++) {
      line = this.lines[y];
      line = line.slice(0, new_w);
    }
  } else if (new_w > this.w) {
    /* increase the line width */
    c = 32 | this.def_attr << 16;

    for (y = 0; y < this.cur_h; y++) {
      line = this.lines[y];

      for (x = this.w; x < new_w; x++) {
        line[x] = c;
      }
    }
  }

  if (this.x >= new_w) this.x = new_w - 1;
  d = new_h - this.h;

  if (d < 0) {
    d = -d;
    /* remove displayed lines */

    /* strip the DOM terminal content */

    for (y = new_h; y < this.h; y++) {
      row_el = this.rows_el[y];
      this.content_el.removeChild(row_el);
    }

    this.rows_el = this.rows_el.slice(0, new_h);
    /* adjust cursor position if needed */

    if (this.y >= new_h) {
      if (d > this.y) d = this.y;
      this.y -= d;
      this.y_base += d;
      if (this.y_base >= this.tot_h) this.y_base -= this.tot_h;
    }

    if (this.scroll_bottom > new_h) this.scroll_bottom = new_h;
    /* fail safe for scroll top */

    if (this.scroll_top >= this.scroll_bottom) this.scroll_top = 0;
  } else if (d > 0) {
    /* add displayed lines */
    if (this.cur_h == this.tot_h) {
      if (d > this.tot_h - this.h) d = this.tot_h - this.h;
    } else {
      if (d > this.y_base) d = this.y_base;
    }

    this.y_base -= d;
    if (this.y_base < 0) this.y_base += this.tot_h;
    this.y += d;
    if (this.scroll_bottom == this.h) this.scroll_bottom = new_h;
    /* extend the DOM terminal content */

    for (y = this.h; y < new_h; y++) {
      row_el = document.createElement("div");
      this.rows_el.push(row_el);
      this.content_el.appendChild(row_el);
    }
  }

  if (this.cur_h < this.tot_h) {
    new_cur_h = this.y_base + new_h;

    if (new_cur_h < this.cur_h) {
      /* remove lines in the scroll back buffer */
      this.lines = this.lines.slice(0, new_cur_h);
    } else if (new_cur_h > this.cur_h) {
      /* add lines in the scroll back buffer */
      c = 32 | this.def_attr << 16;

      for (y = this.cur_h; y < new_cur_h; y++) {
        line = new Array();

        for (x = 0; x < new_w; x++) {
          line[x] = c;
        }

        this.lines[y] = line;
      }
    }

    this.cur_h = new_cur_h;
  }

  this.w = new_w;
  this.h = new_h;
  if (this.y >= this.h) this.y = this.h - 1;
  /* reset display position */

  this.y_disp = this.y_base;
  /*    
        console.log("lines.length", this.lines.length, "cur_h", this.cur_h,
        "y_base", this.y_base, "h", this.h,
        "scroll_bottom", this.scroll_bottom);
  */

  this.refresh(0, this.h - 1);
  return true;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Term);

/***/ }),

/***/ "./src/ui/baseui.js":
/*!**************************!*\
  !*** ./src/ui/baseui.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseUI": () => (/* binding */ BaseUI),
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * 
 * @param {String} tag 
 * @param {String} id 
 * @returns 
 */
function createElement(tag, id) {
  var node = document.createElement(tag);
  node.id = id;
  return node;
}
;
var BaseUI = /*#__PURE__*/function () {
  function BaseUI() {
    _classCallCheck(this, BaseUI);

    this.rootNode = null;
  }
  /**
   * 
   * @param {HTMLElement} node 
   */


  _createClass(BaseUI, [{
    key: "renderTo",
    value: function renderTo(node) {
      node.appendChild(this.rootNode);
    }
  }]);

  return BaseUI;
}();

/***/ }),

/***/ "./src/ui/editor.js":
/*!**************************!*\
  !*** ./src/ui/editor.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseui.js */ "./src/ui/baseui.js");
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core.js */ "./src/core.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var THEMES = ["3024-day", "3024-night", "abbott", "abcdef", "ambiance-mobile", "ambiance", "ayu-dark", "ayu-mirage", "base16-dark", "base16-light", "bespin", "blackboard", "cobalt", "colorforth", "darcula", "dracula", "duotone-dark", "duotone-light", "eclipse", "elegant", "erlang-dark", "gruvbox-dark", "hopscotch", "icecoder", "idea", "isotope", "juejin", "lesser-dark", "liquibyte", "lucario", "material-darker", "material-ocean", "material-palenight", "material", "mbo", "mdn-like", "midnight", "monokai", "moxer", "neat", "neo", "night", "nord", "oceanic-next", "panda-syntax", "paraiso-dark", "paraiso-light", "pastel-on-dark", "railscasts", "rubyblue", "seti", "shadowfox", "solarized", "ssms", "the-matrix", "tomorrow-night-bright", "tomorrow-night-eighties", "ttcn", "twilight", "vibrant-ink", "xq-dark", "xq-light", "yeti", "yonce", "zenburn"];

function load_css_style(name, cb) {
  var css_style = window.css_style;

  if (!css_style) {
    css_style = {};
  }

  if (css_style[name]) {
    return;
  }

  var node = document.createElement("link");
  node.rel = "stylesheet";
  var path = "lib/editor/theme/" + name + ".css";
  node.href = path;

  node.onload = function (e) {
    css_style[name] = true;
    if (cb) cb();
  };

  node.onerror = function (e) {
    console.log(e.toString());
  };

  var root = document.querySelector("body");
  root.appendChild(node);
}

THEMES.forEach(function (theme) {
  load_css_style(theme, function () {
    console.log("load success", theme);
  });
});

function load_mode_style(name, cb) {
  var mode_style = window.mode_style;

  if (!mode_style) {
    mode_style = {};
  }

  if (mode_style[name]) {
    return cb && cb();
  }

  var node = document.createElement("script");
  var path = "lib/editor/mode/" + name + "/" + name + ".js";
  node.src = path;

  node.onload = function (e) {
    mode_style[name] = true;
    if (cb) cb();
  };

  node.onerror = function (e) {
    console.log(e.toString());
  };

  var root = document.querySelector("body");
  root.appendChild(node);
}

var ExecutorUI = /*#__PURE__*/function (_BaseUI) {
  _inherits(ExecutorUI, _BaseUI);

  var _super = _createSuper(ExecutorUI);

  function ExecutorUI(parent) {
    _classCallCheck(this, ExecutorUI);

    return _super.call(this);
  }

  _createClass(ExecutorUI, [{
    key: "init",
    value: function init() {
      var button = (0,_baseui_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", "run");
      button.innerText = "run";
      this.rootNode = button;
    }
    /**
     * 
     * @param {Function} fn 
     */

  }, {
    key: "onClick",
    value: function onClick(fn) {
      var button = this.rootNode;
      button.onclick = fn;
    }
  }]);

  return ExecutorUI;
}(_baseui_js__WEBPACK_IMPORTED_MODULE_0__.BaseUI);

var Setting = /*#__PURE__*/function (_BaseUI2) {
  _inherits(Setting, _BaseUI2);

  var _super2 = _createSuper(Setting);

  function Setting() {
    var _this;

    _classCallCheck(this, Setting);

    _this = _super2.call(this);
    _this.items = {};
    return _this;
  }

  _createClass(Setting, [{
    key: "init",
    value: function init() {
      this.rootNode = (0,_baseui_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "setting_container");
    }
  }, {
    key: "pushWidget",
    value: function pushWidget(name, widget) {
      this.items[name] = widget;
      this.rootNode.appendChild(widget.rootNode);
    }
  }, {
    key: "removeWidget",
    value: function removeWidget(name) {
      var widget = this.items[name];

      if (!widget) {
        return;
      }

      delete this.items[name];
      this.rootNode.removeChild(widget.rootNode);
    }
  }]);

  return Setting;
}(_baseui_js__WEBPACK_IMPORTED_MODULE_0__.BaseUI);

var EditorStyleUI = /*#__PURE__*/function (_BaseUI3) {
  _inherits(EditorStyleUI, _BaseUI3);

  var _super3 = _createSuper(EditorStyleUI);

  function EditorStyleUI() {
    var _this2;

    _classCallCheck(this, EditorStyleUI);

    _this2 = _super3.call(this);
    _this2.idx = 0;
    _this2.onclick = null;
    return _this2;
  }

  _createClass(EditorStyleUI, [{
    key: "init",
    value: function init() {
      var _this3 = this;

      var button = (0,_baseui_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", "editor_style");
      this.rootNode = button;
      button.innerHTML = THEMES[0];

      button.onclick = function (e) {
        var idx = (_this3.idx + 1) % THEMES.length;
        var theme = THEMES[idx];

        if (_this3.onclick) {
          _this3.onclick(theme);
        }

        _this3.idx = idx;
        button.innerHTML = theme;
      };
    }
    /**
     * 
     * @param {Function} fn 
     */

  }, {
    key: "onClick",
    value: function onClick(fn) {
      this.onclick = fn;
    }
  }]);

  return EditorStyleUI;
}(_baseui_js__WEBPACK_IMPORTED_MODULE_0__.BaseUI);

var EditorUI = /*#__PURE__*/function (_BaseUI4) {
  _inherits(EditorUI, _BaseUI4);

  var _super4 = _createSuper(EditorUI);

  function EditorUI() {
    var _this4;

    _classCallCheck(this, EditorUI);

    _this4 = _super4.call(this);
    _this4.editor = null;
    _this4.lines = {};
    return _this4;
  }

  _createClass(EditorUI, [{
    key: "init",
    value: function init() {// let node = createElement("div", "codeeditor");
      // this.editor = CodeMirror(node, {
      //   value: "123456",
      //   lineNumbers: true,
      //   mode: "lua",
      //   styleActiveLine: true,
      //   matchBrackets: true
      // });
      // this.rootNode = node;  
    }
  }, {
    key: "renderTo",
    value: function renderTo(node) {
      var n = (0,_baseui_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "codeeditor");
      node.appendChild(n);
      this.editor = CodeMirror(n, {
        value: "123456",
        lineNumbers: true,
        mode: "lua",
        styleActiveLine: true,
        matchBrackets: true,
        smartIndent: false,
        foldGutter: true,
        autoCloseBrackets: true,
        gutters: ["CodeMirror-linenumbers", "TEST"]
      });

      n.onmousemove = function (e) {// let x = e.clientX; 
        // let y = e.clientY;
        // let info = this.editor.coordsChar({left: x, top: y})
        // console.log(info);
        // if(this.lines[info.line]) {return; }
        // let node2 = document.createElement("div");
        // node2.innerText = "div";
        // this.editor.addWidget(info, node2, true);
      };

      var div = document.createElement("div");
      div.className = "TESTP";
      var doc = this.editor.getDoc();
      doc.setGutterMarker(1, "TEST", div);
    }
  }, {
    key: "setStyle",
    value: function setStyle(style) {
      this.editor.setOption("theme", style);
    }
  }, {
    key: "value",
    value: function value() {
      return this.editor.getValue();
    }
  }]);

  return EditorUI;
}(_baseui_js__WEBPACK_IMPORTED_MODULE_0__.BaseUI);

var IDEUI = /*#__PURE__*/function () {
  function IDEUI() {
    _classCallCheck(this, IDEUI);

    this.editorui = new EditorUI();
    this.setting = new Setting();
    this.editorstyle = new EditorStyleUI();
    this.init();
  }

  _createClass(IDEUI, [{
    key: "init",
    value: function init() {
      var _this5 = this;

      this.editorui.init();
      this.setting.init();
      this.editorstyle.init();
      var executorui = new ExecutorUI();
      executorui.init();
      executorui.onClick(function () {
        var code = _this5.editorui.value();

        _core_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit("run_code", {
          code: code
        });
      });
      this.editorstyle.onClick(function (style) {
        _this5.editorui.setStyle(style);
      });
      this.setting.pushWidget("executor", executorui);
      this.setting.pushWidget("editorstyle", this.editorstyle);
    }
  }, {
    key: "render",
    value: function render() {
      var node = document.querySelector("#editor");

      if (!node) {
        console.log("[error] not found <div> id = editor");
        return;
      }

      this.editorui.renderTo(node);
      this.setting.renderTo(node);
    }
  }]);

  return IDEUI;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IDEUI);

/***/ }),

/***/ "./src/ui/question.js":
/*!****************************!*\
  !*** ./src/ui/question.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseui.js */ "./src/ui/baseui.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var IODescriptor = /*#__PURE__*/function (_BaseUI) {
  _inherits(IODescriptor, _BaseUI);

  var _super = _createSuper(IODescriptor);

  function IODescriptor() {
    var _this;

    _classCallCheck(this, IODescriptor);

    _this = _super.call(this);
    _this.iNode = null;
    _this.oNode = null;

    _this.init();

    return _this;
  }

  _createClass(IODescriptor, [{
    key: "init",
    value: function init() {
      this.rootNode = (0,_baseui_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "eg");
      this.iNode = (0,_baseui_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "egi");
      this.oNode = (0,_baseui_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "ego");
      this.rootNode.appendChild(this.iNode);
      this.rootNode.appendChild(this.oNode);
    }
    /**
     * 
     * @param {String} text 
     */

  }, {
    key: "setEGI",
    value: function setEGI(text) {
      this.iNode.innerText = text;
    }
    /**
     * 
     * @param {String} text 
     */

  }, {
    key: "setEGO",
    value: function setEGO(text) {
      this.oNode.innerText = text;
    }
    /**
     * 
     * @param {String} iText 
     * @param {String} oText 
     */

  }, {
    key: "setEGIO",
    value: function setEGIO(iText, oText) {
      this.setEGI(iText);
      this.setEGO(oText);
    }
  }]);

  return IODescriptor;
}(_baseui_js__WEBPACK_IMPORTED_MODULE_0__.BaseUI);

var QuestionUI = /*#__PURE__*/function (_BaseUI2) {
  _inherits(QuestionUI, _BaseUI2);

  var _super2 = _createSuper(QuestionUI);

  function QuestionUI() {
    var _this2;

    _classCallCheck(this, QuestionUI);

    _this2 = _super2.call(this);
    _this2.titleNode = null;
    _this2.contentNode = null;

    _this2.init();

    return _this2;
  }

  _createClass(QuestionUI, [{
    key: "init",
    value: function init() {
      this.rootNode = (0,_baseui_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "question");
      this.titleNode = (0,_baseui_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "qtitle");
      this.contentNode = (0,_baseui_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "qcontent");
      this.rootNode.appendChild(this.titleNode);
      this.rootNode.appendChild(this.contentNode);
    }
    /**
     * 
     * @param {String} title 
     */

  }, {
    key: "setTitle",
    value: function setTitle(title) {
      this.titleNode.innerHTML = title;
    }
    /**
     * 
     * @param {String} iText 
     * @param {String} oText 
     */

  }, {
    key: "addExample",
    value: function addExample(iText, oText) {
      var d = new IODescriptor();
      d.setEGIO(iText, oText);
      d.renderTo(this.contentNode);
    }
  }, {
    key: "replaceExample",
    value: function replaceExample(idx, iText, oText) {
      var node = this.contentNode.childNodes[idx];

      if (!node) {
        return;
      }

      var d = new IODescriptor();
      d.setEGIO(iText, oText);
      this.contentNode.replaceChild(d, node);
      return true;
    }
    /**
     * 
     * @param {Number} idx 
     */

  }, {
    key: "removeExampleByIdx",
    value: function removeExampleByIdx(idx) {
      var node = this.contentNode.childNodes[idx];

      if (!node) {
        return;
      }

      this.contentNode.removeChild(node);
    }
  }, {
    key: "removeAllExamples",
    value: function removeAllExamples() {
      var childNodes = this.contentNode.childNodes;

      while (childNodes.length > 0) {
        var node = childNodes[childNodes.length - 1];
        this.contentNode.removeChild(node);
      }
    }
  }]);

  return QuestionUI;
}(_baseui_js__WEBPACK_IMPORTED_MODULE_0__.BaseUI);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionUI);

/***/ }),

/***/ "./src/ui/result.js":
/*!**************************!*\
  !*** ./src/ui/result.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseui */ "./src/ui/baseui.js");
/* harmony import */ var _term__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../term */ "./src/term.js");
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window */ "./src/ui/window.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * succeed
 * <svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
 * failed
 * <svg viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>
 */

var ResultUI = /*#__PURE__*/function (_BaseUI) {
  _inherits(ResultUI, _BaseUI);

  var _super = _createSuper(ResultUI);

  function ResultUI() {
    var _this;

    _classCallCheck(this, ResultUI);

    _this = _super.call(this);
    _this.term = null;
    _this.window = null;
    _this.state = "hide";
    _this.rootNode = (0,_baseui__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "term_container");
    _this.icon = null;
    _this.content = null;
    return _this;
  }

  _createClass(ResultUI, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.term = new _term__WEBPACK_IMPORTED_MODULE_1__["default"]({
        cols: 80,
        rows: 30,
        scrollback: 10000,
        fontSize: 15
      });
      this.window = new _window__WEBPACK_IMPORTED_MODULE_2__["default"]("result", "result");
      var div = (0,_baseui__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "term_container");
      this.window.addChild(div);
      this.window.onClose(function () {
        _this2.hide();
      });
      this.rootNode.appendChild(this.window.section);
      this.term.open(div);
      this.hide();
    }
  }, {
    key: "render",
    value: function render() {
      var node = document.querySelector("body");
      this.renderTo(node);
    }
  }, {
    key: "hide",
    value: function hide() {
      this.rootNode.hidden = true;
    }
  }, {
    key: "show",
    value: function show() {
      this.rootNode.hidden = false; //  this.init();
    }
  }]);

  return ResultUI;
}(_baseui__WEBPACK_IMPORTED_MODULE_0__.BaseUI);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResultUI);
/**
 * @note
 * ------luavm------
 * (js -> lua) vm.call("lua code")
 * 
 * (lua -> js) system.call("json ?")
 * -----------------
 * FILE: test.lua
 * game.init(function() 
 *  
 * end)
 * game.update(function() 
 * 
 * end)
 * game.render(function() 
 * 
 * end)
 */

/***/ }),

/***/ "./src/ui/window.js":
/*!**************************!*\
  !*** ./src/ui/window.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var dragInfo = {
  window: null,
  dx: null,
  dy: null
};

var Window = /*#__PURE__*/function () {
  function Window(title, type) {
    var _this = this;

    _classCallCheck(this, Window);

    var section = document.createElement("section");
    section.tabIndex = 0;
    section.classList.add("window");
    section.classList.add(type);

    section.onmousedown = function (e) {
      _this.foreground();
    };

    section.style.left = "256px";
    section.style.top = "256px";
    section.style.zIndex = 100;
    var header = document.createElement("header");

    header.onmousedown = function (e) {
      e.preventDefault();
      var ele = _this.section;
      dragInfo.window = _this;
      dragInfo.dx = e.offsetX;
      dragInfo.dy = e.offsetY;
    };

    header.innerText = title;
    section.appendChild(header);
    var content = document.createElement("content");
    section.appendChild(content);
    this.section = section;
    this.header = header;
    this.content = content;
    this.title = title;
    this.type = type;
    this.onclosecb = null;
    this.observer = new MutationObserver(function (mutations) {
      var _iterator = _createForOfIteratorHelper(mutations),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var mutation = _step.value;

          if (mutation.attributeName == "style") {
            _this.section.dispatchEvent(new CustomEvent("win_resize"));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
    this.observer.observe(this.content, {
      attributes: true
    });
    this.addHeaderIcon({
      codepoint: "274C",
      type: "close",
      onclick: function onclick() {
        _this.kill();
      }
    });
  }

  _createClass(Window, [{
    key: "addHeaderIcon",
    value: function addHeaderIcon(args) {
      var icon = document.createElement("icon");
      icon.innerHTML = "&#x" + args.codepoint;
      icon.classList.add(args.type);
      icon.onclick = args.onclick;

      icon.onmousedown = function (e) {
        e.stopPropagation();
      };

      this.header.appendChild(icon);
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, listener, opts) {
      this.section.addEventListener(type, listener, opts);
    }
  }, {
    key: "addChild",
    value: function addChild(node) {
      this.content.appendChild(node);
    }
  }, {
    key: "kill",
    value: function kill() {
      if (this.onclosecb) {
        this.onclosecb();
      } //  this.section.parentElement.removeChild(this.section);

    }
  }, {
    key: "foreground",
    value: function foreground() {//TODO:
    }
  }, {
    key: "updateSnapping",
    value: function updateSnapping() {}
  }, {
    key: "onClose",
    value: function onClose(cb) {
      this.onclosecb = cb;
    }
  }]);

  return Window;
}();

document.addEventListener("mousemove", function (e) {
  if (!dragInfo.window) {
    return;
  }

  e.preventDefault();
  var section = dragInfo.window.section;
  section.style.left = "".concat(e.clientX - dragInfo.dx, "px");
  section.style.top = "".concat(e.clientY - dragInfo.dy, "px");
  dragInfo.window.updateSnapping();
});
document.addEventListener("mouseup", function (e) {
  dragInfo.window = null;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Window);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/editor.js */ "./src/ui/editor.js");
/* harmony import */ var _controller_question_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/question.js */ "./src/controller/question.js");
/* harmony import */ var _luavm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./luavm.js */ "./src/luavm.js");
/* harmony import */ var _term_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./term.js */ "./src/term.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core */ "./src/core.js");
/* harmony import */ var _docs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../docs.js */ "./docs.js");
/* harmony import */ var _ui_result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/result */ "./src/ui/result.js");
/* harmony import */ var _exam_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exam.js */ "./src/exam.js");








var global_this = window;
global_this.GCore = _core__WEBPACK_IMPORTED_MODULE_4__["default"];
var SCALLTBLS = {
  collectCodeRet: function collectCodeRet(id, ret) {
    _core__WEBPACK_IMPORTED_MODULE_4__["default"].emit("code_ret", {
      id: id,
      ret: ret
    });
  }
};

global_this.scall = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var fn = SCALLTBLS[args[0]];

  if (!fn) {
    _core__WEBPACK_IMPORTED_MODULE_4__["default"].emit("code_error", {
      text: "not found scall call: " + args[0]
    });
    return;
  }

  return fn(args[1], args[2], args[3], args[4]);
};

var load_luavm = function load_luavm(cb) {
  cb();
};
/**
 * 
 * @param {LuaVM} luavm 
 * @returns {Number}
 */


function initSystemCall(luavm) {
  var code = "\n\n  __is_same = function(a, b) \n    local type_a = type(a)\n    local type_b = type(b)\n    if type_a ~= type_b then \n      return false\n    end\n    if type_a == \"table\" then \n      for k, v in pairs(a) do \n        if not __is_same(v, b[k]) then \n          return false\n        end\n      end\n      return true\n    end\n    return a == b\n  end\n\n  function init_system_call_tbl() \n  local check_type = function(val) \n    local t = type(val)\n    if t == \"number\" or t == \"string\" then \n      return true\n    end\n  end\n  system = {}\n  local mtbl = {}\n  mtbl.__index = function(t, k) \n    return function(...) \n      local args = {...}\n      for k, v in pairs(args) do\n        if not check_type(v) then \n          return -1 -- unavailable type\n        end\n      end\n      return __scall(k, ...)\n    end\n  end\n  setmetatable(system, mtbl)\nend\ninit_system_call_tbl()";
  return luavm.run(code);
}

window.onload = function (e) {
  var editor = new _ui_editor_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  editor.render();
  var result = new _ui_result__WEBPACK_IMPORTED_MODULE_6__["default"]();
  result.render();
  result.init();
  var exam = new _exam_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
  exam.visitCurQuestion();
  _core__WEBPACK_IMPORTED_MODULE_4__["default"].on("code_error", function (data) {
    var text = data.text;
    result.term.writeln(text);
  });
  _core__WEBPACK_IMPORTED_MODULE_4__["default"].on("code_print", function (data) {
    var text = data.text;
    result.term.write(text);
  });
  _core__WEBPACK_IMPORTED_MODULE_4__["default"].on("code_ret", function (data) {
    var id = data.id,
        ret = data.ret;
    var test = exam.getQuestionTest(null, id);
    var accepted = "[\x1b[32mAccepted\x1b[0m]";
    var error = "[\x1b[31mWrong Answer\x1b[0m]";
    var str = "input[\x1B[33m".concat(test[0], "\x1B[0m] output[\x1B[33m").concat(test[1], "\x1B[0m] result: ").concat(ret ? accepted : error);
    result.term.writeln(str);
  });
  load_luavm(function () {
    var luavm = new _luavm_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    luavm.reset();
    initSystemCall(luavm);
    _core__WEBPACK_IMPORTED_MODULE_4__["default"].on("run_code", function (data) {
      var code = data.code;

      if (!code) {
        return;
      }

      result.show();
      _core__WEBPACK_IMPORTED_MODULE_4__["default"].emit("code_print", {
        text: "---------------\n"
      });
      var ok = luavm.run(code);

      if (ok == 0) {
        exam.vmRunExamples(luavm);
      }

      _core__WEBPACK_IMPORTED_MODULE_4__["default"].emit("code_print", {
        text: "---------------\n"
      }); //   result.term.write(`\x1b[41;36m 6767676 \x1b[0m`);      
    });
  });
}; // let term = new Term({ cols: 80, rows: 30, scrollback: 10000, fontSize: 15 });
// term.open(document.getElementById("term_container"),
//           document.getElementById("term_paste"));    
// term.write("your print stdout:\r\n");
//export default 123
// visitDocumentation("docs/questions/q0.md", document.querySelector("#descriptor"));
// window.visitDocumentation = visitDocumentation;
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxVQUFJVCxJQUFJLEdBQUdTLElBQUksQ0FBQ1QsSUFBaEI7O0FBQ0EsVUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDVDtBQUNEOztBQUNEK1osTUFBQUEsTUFBTSxDQUFDUSxJQUFQO0FBQ0ExVyxNQUFBQSxrREFBQSxDQUFXLFlBQVgsRUFBeUI7QUFBQ3JELFFBQUFBLElBQUksRUFBQztBQUFOLE9BQXpCO0FBQ0EsVUFBSWdhLEVBQUUsR0FBRzVWLEtBQUssQ0FBQ00sR0FBTixDQUFVbEYsSUFBVixDQUFUOztBQUNBLFVBQUd3YSxFQUFFLElBQUksQ0FBVCxFQUFZO0FBQ1ZSLFFBQUFBLElBQUksQ0FBQ1MsYUFBTCxDQUFtQjdWLEtBQW5CO0FBQ0Q7O0FBQ0RmLE1BQUFBLGtEQUFBLENBQVcsWUFBWCxFQUF5QjtBQUFDckQsUUFBQUEsSUFBSSxFQUFDO0FBQU4sT0FBekIsRUFYbUMsQ0FZdEM7QUFDRSxLQWJEO0FBY0QsR0FsQlMsQ0FBVjtBQW1CRCxDQTlDRCxFQWtEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxrRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zlbmdhcmkvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2ZlbmdhcmkvLi9kb2NzLmpzIiwid2VicGFjazovL2ZlbmdhcmkvLi9zcmMvY29udHJvbGxlci9xdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly9mZW5nYXJpLy4vc3JjL2NvcmUuanMiLCJ3ZWJwYWNrOi8vZmVuZ2FyaS8uL3NyYy9leGFtLmpzIiwid2VicGFjazovL2ZlbmdhcmkvLi9zcmMvbHVhdm0uanMiLCJ3ZWJwYWNrOi8vZmVuZ2FyaS8uL3NyYy9tb2RlbC9xdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly9mZW5nYXJpLy4vc3JjL3Rlcm0uanMiLCJ3ZWJwYWNrOi8vZmVuZ2FyaS8uL3NyYy91aS9iYXNldWkuanMiLCJ3ZWJwYWNrOi8vZmVuZ2FyaS8uL3NyYy91aS9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vZmVuZ2FyaS8uL3NyYy91aS9xdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly9mZW5nYXJpLy4vc3JjL3VpL3Jlc3VsdC5qcyIsIndlYnBhY2s6Ly9mZW5nYXJpLy4vc3JjL3VpL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly9mZW5nYXJpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zlbmdhcmkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zlbmdhcmkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mZW5nYXJpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmVuZ2FyaS8uL3NyYy9pbml0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZlbmdhcmlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZmVuZ2FyaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIlxuY29uc3QgVFdJVFRFUl9NQVhfQ0hBUl9DT1VOVCA9IDI4MDtcbmNvbnN0IFRXSVRURVJfSEFORExFID0gXCJAY29kZXVyZHJlYW1zXCI7XG5cblxuY29uc3QgUkVfU1RSSU5HX0xJVEVSQUwgPSAvXCIoPzpbXlwiXFxcXF18XFxcXC4pKlwifCcoPzpbXidcXFxcXXxcXFxcLikqJ3xgKD86W15gXFxcXF18XFxcXC4pKmAvaTtcbmNvbnN0IFJFX0xJTkVfTlVNQkVSID0gL15cXGR7MSw2fS87XG5jb25zdCBSRV9DT01NRU5UID0gLyg/OnJlbVxcc3wjKVteXFxuXSovaTtcbmNvbnN0IFJFX05VTUVSSUNfTElURVJBTF9IRVggPSAvKD88IVthLXpfXSkwKD86eHxYKVswLTlhLWZBLUZdKy87XG5jb25zdCBSRV9OVU1FUklDX0xJVEVSQUxfQklOID0gLyg/PCFbYS16X10pMCg/OmJ8QilbMDFdKy87XG5jb25zdCBSRV9OVU1FUklDX0xJVEVSQUxfT0NUID0gLyg/PCFbYS16X10pMCg/Om98TylbMC03XSsvO1xuY29uc3QgUkVfTlVNRVJJQ19MSVRFUkFMX1NDSSA9IC8oPzooPzw9ZGl2fG1vZHxhbmR8b3J8eG9yfG5vdCl8KD88IVthLXpfXVthLXowLTlfXSopKSg/OlswLTldK1xcLj9bMC05XSp8WzAtOV0qXFwuP1swLTldKykoPzpbZUVdWystXT9bMC05XSspPyg/IVxcLikvO1xuY29uc3QgUkVfS0VZV09SRCA9IC8oPzwhW2Etel9dKSg/PCFbYS16X11bMC05XSspKD86YW5kfGJyZWFrfGRvfGVsc2V8ZWxzZWlmfGVuZHxmYWxzZXxmb3J8ZnVuY3Rpb258Z290b3xpZnxpbnxsb2NhbHxuaWx8bm90fG9yfHJlcGVhdHxyZXR1cm58dGhlbnx0cnVlfHVudGlsfHdoaWxlKS9pO1xuY29uc3QgUkVfRlVOQ1RJT05fTkFNRSA9IC8oPzwhW2Etel9dKSg/PCFbYS16X11bMC05XSspKD86c2lufGNvc3x0YW58YXNpbnxhY29zfGF0YW58bG9nfGxufHNxcnR8cm91bmR8Zmxvb3J8Y2VpbHxhYnN8YXNjfGJpblxcJHxvY3RcXCR8aGV4XFwkfGJpbnxvY3R8aGV4fGxlbnxsYXN0fGxvd2VyXFwkfHVwcGVyXFwkfHRyaW1cXCR8bHRyaW1cXCR8cnRyaW1cXCR8Y2hyXFwkKS9pO1xuY29uc3QgUkVfQ09OU1RBTlQgPSAvKD88IVthLXowLTlfXSkoPzpwaXxlfHBoaXxlcG9jaHxyYW5kb218Y29sfHJvd3xrZXl8aGVhZGluZykoPyFbYS16MC05X10pL2k7XG5jb25zdCBSRV9PUEVSQVRPUiA9IC9cXCt8LXxcXCp8XFwvfFxcXnwoPzwhW2Etel9dKSg/OmRpdnxtb2QpKD8hW2Etel9dKXwmfFxcfHx+fDsvaTtcbmNvbnN0IFJFX0NPTVBBUkFUT1IgPSAvIT18PD18Pj18PXw8fD4vaTtcbmNvbnN0IFJFX0xPR0lDQUxfT1BFUkFUT1IgPSAvKD88IVthLXpfXSkoPzwhW2Etel9dWzAtOV0rKSg/OmFuZHxvcnx4b3J8bm90KS9pO1xuY29uc3QgUkVfSURFTlRJRklFUiA9IC9bYS16X11bYS16MC05X10qWyQlXT8vaTtcbmNvbnN0IFJFX0VYUFJFU1NJT05fQlJBQ0tFVCA9IC9bKCldLztcbmNvbnN0IFJFX0xJU1RfQUNDRVNTX0JSQUNLRVQgPSAvW1xcW1xcXV0vO1xuY29uc3QgUkVfUEFSQU1FVEVSX1NFUEVSQVRPUiA9IC8sLztcbmNvbnN0IFJFX1NUQVRFTUVOVF9TRVBFUkFUT1IgPSAvOi87XG5jb25zdCBSRV9XSFRJRVNQQUNFID0gL1xccysvO1xuXG5jb25zdCBSRV9PUiA9IC98LztcblxuY29uc3QgUkVfQUxMID0gbmV3IFJlZ0V4cChbXG4gICAgUkVfU1RSSU5HX0xJVEVSQUwuc291cmNlLFxuICAgIFJFX0xJTkVfTlVNQkVSLnNvdXJjZSxcbiAgICBSRV9DT01NRU5ULnNvdXJjZSxcbiAgICBSRV9OVU1FUklDX0xJVEVSQUxfSEVYLnNvdXJjZSxcbiAgICBSRV9OVU1FUklDX0xJVEVSQUxfQklOLnNvdXJjZSxcbiAgICBSRV9OVU1FUklDX0xJVEVSQUxfT0NULnNvdXJjZSxcbiAgICBSRV9OVU1FUklDX0xJVEVSQUxfU0NJLnNvdXJjZSxcbiAgICBSRV9LRVlXT1JELnNvdXJjZSxcbiAgICBSRV9GVU5DVElPTl9OQU1FLnNvdXJjZSxcbiAgICBSRV9DT05TVEFOVC5zb3VyY2UsXG4gICAgUkVfT1BFUkFUT1Iuc291cmNlLFxuICAgIFJFX0NPTVBBUkFUT1Iuc291cmNlLFxuICAgIFJFX0xPR0lDQUxfT1BFUkFUT1Iuc291cmNlLFxuICAgIFJFX0lERU5USUZJRVIuc291cmNlLFxuICAgIFJFX0VYUFJFU1NJT05fQlJBQ0tFVC5zb3VyY2UsXG4gICAgUkVfTElTVF9BQ0NFU1NfQlJBQ0tFVC5zb3VyY2UsXG4gICAgUkVfUEFSQU1FVEVSX1NFUEVSQVRPUi5zb3VyY2UsXG4gICAgUkVfU1RBVEVNRU5UX1NFUEVSQVRPUi5zb3VyY2UsXG4gICAgUkVfV0hUSUVTUEFDRS5zb3VyY2Vcbl0uam9pbihSRV9PUi5zb3VyY2UpLCBcImdpXCIpO1xuXG5jb25zdCBLRVlXT1JEX0NPTE9VUlMgPSB7XG4gICAgXCJhbmRcIjoge2JhY2tncm91bmQ6IFwiYmx1ZVwiLCBmb3JlZ3JvdW5kOiBcIndoaXRlXCJ9LFxuICAgIFwiYnJlYWtcIjoge2JhY2tncm91bmQ6IFwiYmx1ZVwiLCBmb3JlZ3JvdW5kOiBcIndoaXRlXCJ9LFxuICAgIFwiZG9cIjoge2JhY2tncm91bmQ6IFwiYmx1ZVwiLCBmb3JlZ3JvdW5kOiBcIndoaXRlXCJ9LFxuICAgIFwiZWxzZVwiOiB7YmFja2dyb3VuZDogXCJibHVlXCIsIGZvcmVncm91bmQ6IFwid2hpdGVcIn0sXG4gICAgXCJlbHNlaWZcIjoge2JhY2tncm91bmQ6IFwiYmx1ZVwiLCBmb3JlZ3JvdW5kOiBcIndoaXRlXCJ9LFxuICAgIFwiZW5kXCI6IHtiYWNrZ3JvdW5kOiBcImJsdWVcIiwgZm9yZWdyb3VuZDogXCJ3aGl0ZVwifSxcbiAgICBcImZhbHNlXCI6IHtiYWNrZ3JvdW5kOiBcImJsdWVcIiwgZm9yZWdyb3VuZDogXCJ3aGl0ZVwifSxcbiAgICBcImZvclwiOiB7YmFja2dyb3VuZDogXCJibHVlXCIsIGZvcmVncm91bmQ6IFwid2hpdGVcIn0sXG4gICAgXCJmdW5jdGlvblwiOiB7YmFja2dyb3VuZDogXCJibHVlXCIsIGZvcmVncm91bmQ6IFwid2hpdGVcIn0sXG4gICAgXCJnb3RvXCI6IHtiYWNrZ3JvdW5kOiBcImJsdWVcIiwgZm9yZWdyb3VuZDogXCJ3aGl0ZVwifSxcbiAgICBcImlmXCI6IHtiYWNrZ3JvdW5kOiBcImJsdWVcIiwgZm9yZWdyb3VuZDogXCJ3aGl0ZVwifSxcbiAgICBcImluXCI6IHtiYWNrZ3JvdW5kOiBcImJsdWVcIiwgZm9yZWdyb3VuZDogXCJ3aGl0ZVwifSxcbiAgICBcImxvY2FsXCI6IHtiYWNrZ3JvdW5kOiBcImJsdWVcIiwgZm9yZWdyb3VuZDogXCJ3aGl0ZVwifSxcbiAgICBcIm5pbFwiOiB7YmFja2dyb3VuZDogXCJibHVlXCIsIGZvcmVncm91bmQ6IFwid2hpdGVcIn0sXG4gICAgXCJub3RcIjoge2JhY2tncm91bmQ6IFwiYmx1ZVwiLCBmb3JlZ3JvdW5kOiBcIndoaXRlXCJ9LFxuICAgIFwib3JcIjoge2JhY2tncm91bmQ6IFwiYmx1ZVwiLCBmb3JlZ3JvdW5kOiBcIndoaXRlXCJ9LFxuICAgIFwicmVwZWF0XCI6IHtiYWNrZ3JvdW5kOiBcImJsdWVcIiwgZm9yZWdyb3VuZDogXCJ3aGl0ZVwifSxcbiAgICBcInJldHVyblwiOiB7YmFja2dyb3VuZDogXCJibHVlXCIsIGZvcmVncm91bmQ6IFwid2hpdGVcIn0sXG4gICAgXCJ0cnVlXCI6IHtiYWNrZ3JvdW5kOiBcImJsdWVcIiwgZm9yZWdyb3VuZDogXCJ3aGl0ZVwifSxcbiAgICBcInVudGlsXCI6IHtiYWNrZ3JvdW5kOiBcImJsdWVcIiwgZm9yZWdyb3VuZDogXCJ3aGl0ZVwifSxcbiAgICBcIndoaWxlXCI6IHtiYWNrZ3JvdW5kOiBcImJsdWVcIiwgZm9yZWdyb3VuZDogXCJ3aGl0ZVwifSxcbiAgICBcInByaW50XCI6IHtiYWNrZ3JvdW5kOiBcImJsdWVcIiwgZm9yZWdyb3VuZDogXCJ3aGl0ZVwifSxcbiAgICBcbn07XG5cbmNvbnN0IEVTQ0FQRV9DSEFSUyA9IHtcbiAgICBcIidcIjogXCInXCIsXG4gICAgXCJcXFwiXCI6IFwiXFxcIlwiLFxuICAgIFwiYFwiOiBcImBcIixcbiAgICBcIlxcXFxcIjogXCJcXFxcXCIsXG4gICAgXCJuXCI6IFwiXFxuXCIsXG4gICAgXCJyXCI6IFwiXFxyXCIsXG4gICAgXCJ0XCI6IFwiXFx0XCIsXG4gICAgXCJ2XCI6IFwiXFx2XCIsXG4gICAgXCJiXCI6IFwiXFxiXCIsXG4gICAgXCJmXCI6IFwiXFxmXCJcbn07XG4vLyBmdW5jdGlvbiByZW5kZXJEb2N1bWVudGF0aW9uU3ludGF4SGlnaGxpZ2h0aW5nKGNvZGUpIHtcbi8vICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgdmFyIG1hdGNoO1xuXG4vLyAgICAgZnVuY3Rpb24gYWRkSGlnaGxpZ2h0KGNsYXNzZXMsIGNvZGUpIHtcbi8vICAgICAgICAgdmFyIGhpZ2hsaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4vLyAgICAgICAgIGNsYXNzZXMuZm9yRWFjaCgoaSkgPT4gaGlnaGxpZ2h0LmNsYXNzTGlzdC5hZGQoaSkpO1xuXG4vLyAgICAgICAgIGhpZ2hsaWdodC50ZXh0Q29udGVudCA9IGNvZGU7XG5cbi8vICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChoaWdobGlnaHQpO1xuLy8gICAgIH1cblxuLy8gICAgIHZhciBicmFja2V0TGV2ZWwgPSAwO1xuXG4vLyAgICAgd2hpbGUgKG1hdGNoID0gUkVfQUxMLmV4ZWMoY29kZSkpIHtcblxuLy8gICAgICAgICBpZiAoUkVfU1RSSU5HX0xJVEVSQUwuZXhlYyhtYXRjaCkpIHtcbi8vICAgICAgICAgICAgIGFkZEhpZ2hsaWdodChbXCJzdHJpbmdMaXRlcmFsXCJdLCBtYXRjaFswXSk7XG4vLyAgICAgICAgIH0gZWxzZSBpZiAoUkVfQ09NTUVOVC5leGVjKG1hdGNoKSkge1xuLy8gICAgICAgICAgICAgYWRkSGlnaGxpZ2h0KFtcImNvbW1lbnRcIl0sIG1hdGNoWzBdKTtcbi8vICAgICAgICAgfSBlbHNlIGlmIChSRV9LRVlXT1JELmV4ZWMobWF0Y2gpKSB7XG4vLyAgICAgICAgICAgICB2YXIga2V5d29yZCA9IG1hdGNoLnRvU3RyaW5nKCkudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuLy8gICAgICAgICAgICAgYWRkSGlnaGxpZ2h0KFtcImtleXdvcmRcIiwgS0VZV09SRF9DT0xPVVJTW2tleXdvcmRdLmJhY2tncm91bmRdLCBtYXRjaFswXSk7XG4vLyAgICAgICAgIH0gZWxzZSBpZiAoXG4vLyAgICAgICAgICAgICBSRV9OVU1FUklDX0xJVEVSQUxfSEVYLmV4ZWMobWF0Y2gpIHx8XG4vLyAgICAgICAgICAgICBSRV9OVU1FUklDX0xJVEVSQUxfQklOLmV4ZWMobWF0Y2gpIHx8XG4vLyAgICAgICAgICAgICBSRV9OVU1FUklDX0xJVEVSQUxfT0NULmV4ZWMobWF0Y2gpIHx8XG4vLyAgICAgICAgICAgICBSRV9OVU1FUklDX0xJVEVSQUxfU0NJLmV4ZWMobWF0Y2gpXG4vLyAgICAgICAgICkge1xuLy8gICAgICAgICAgICAgYWRkSGlnaGxpZ2h0KFtcIm90aGVyXCJdLCBtYXRjaFswXSk7XG4vLyAgICAgICAgIH0gZWxzZSBpZiAoUkVfRlVOQ1RJT05fTkFNRS5leGVjKG1hdGNoKSkge1xuLy8gICAgICAgICAgICAgYWRkSGlnaGxpZ2h0KFtcImZ1bmN0aW9uXCJdLCBtYXRjaFswXSk7XG4vLyAgICAgICAgIH0gZWxzZSBpZiAoUkVfQ09OU1RBTlQuZXhlYyhtYXRjaCkpIHtcbi8vICAgICAgICAgICAgIGFkZEhpZ2hsaWdodChbXCJjb25zdGFudFwiXSwgbWF0Y2hbMF0pO1xuLy8gICAgICAgICB9IGVsc2UgaWYgKFJFX0VYUFJFU1NJT05fQlJBQ0tFVC5leGVjKG1hdGNoKSkge1xuLy8gICAgICAgICAgICAgaWYgKG1hdGNoID09IFwiKFwiKSB7XG4vLyAgICAgICAgICAgICAgICAgYnJhY2tldExldmVsKys7XG4vLyAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgIGlmIChicmFja2V0TGV2ZWwgPiAwKSB7XG4vLyAgICAgICAgICAgICAgICAgYWRkSGlnaGxpZ2h0KFtcImJyYWNrZXRcIiwgYGJyYWNrZXQke01hdGgubWluKGJyYWNrZXRMZXZlbCwgMyl9YF0sIG1hdGNoWzBdKTtcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgYWRkSGlnaGxpZ2h0KFtcImJhZEJyYWNrZXRcIl0sIG1hdGNoWzBdKTtcbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgaWYgKG1hdGNoID09IFwiKVwiKSB7XG4vLyAgICAgICAgICAgICAgICAgYnJhY2tldExldmVsLS07XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0gZWxzZSBpZiAoUkVfTElTVF9BQ0NFU1NfQlJBQ0tFVC5leGVjKG1hdGNoKSkge1xuLy8gICAgICAgICAgICAgYWRkSGlnaGxpZ2h0KFtcImxpc3RBY2Nlc3NcIl0sIG1hdGNoWzBdKTtcbi8vICAgICAgICAgfSBlbHNlIGlmIChSRV9PUEVSQVRPUi5leGVjKG1hdGNoKSkge1xuLy8gICAgICAgICAgICAgYWRkSGlnaGxpZ2h0KFtcIm9wZXJhdG9yXCJdLCBtYXRjaFswXSk7XG4vLyAgICAgICAgIH0gZWxzZSBpZiAoUkVfQ09NUEFSQVRPUi5leGVjKG1hdGNoKSB8fCBSRV9MT0dJQ0FMX09QRVJBVE9SLmV4ZWMobWF0Y2gpKSB7XG4vLyAgICAgICAgICAgICBhZGRIaWdobGlnaHQoW1wiY29tcGFyYXRvclwiXSwgbWF0Y2hbMF0pO1xuLy8gICAgICAgICB9IGVsc2UgaWYgKFJFX1NUQVRFTUVOVF9TRVBFUkFUT1IuZXhlYyhtYXRjaCkpIHtcbi8vICAgICAgICAgICAgIGFkZEhpZ2hsaWdodChbXCJzdGF0ZW1lbnRTZXBlcmF0b3JcIl0sIG1hdGNoWzBdKTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIGFkZEhpZ2hsaWdodChbXCJvdGhlclwiXSwgbWF0Y2hbMF0pO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIGVsZW1lbnQuaW5uZXJIVE1MO1xuLy8gfVxuXG5mdW5jdGlvbiByZW5kZXJEb2N1bWVudGF0aW9uU3ludGF4SGlnaGxpZ2h0aW5nKGNvZGUpIHtcbiAgICBcbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50Tm9kZSBcbiAqL1xuZnVuY3Rpb24gdmlzaXREb2N1bWVudGF0aW9uKHBhdGgsIHBhcmVudE5vZGUpIHtcbiAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9eZG9jc1xcL1xcLy9nLCBcImRvY3MvXCIpO1xuICAgIFxuICAgIGZldGNoKHBhdGgpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgdmFyIGNvbnZlcnRlciA9IG5ldyBzaG93ZG93bi5Db252ZXJ0ZXIoKTtcbiAgICAgICAgbGV0IGRvYyA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIFxuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGNvbnZlcnRlci5tYWtlSHRtbChkYXRhKTtcbiAgICAgICAgZG9jLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpIHx8IFwiXCI7XG5cbiAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKFwiaHR0cDovL1wiKSB8fCBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKFwiaHR0cHM6Ly9cIikgfHwgZGVzdGluYXRpb24uc3RhcnRzV2l0aChcIi4vXCIpIHx8IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoXCJqYXZhc2NyaXB0OlwiKSB8fCBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKFwiI1wiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHZpc2l0RG9jdW1lbnRhdGlvbihcImRvY3MvXCIgKyBkZXN0aW5hdGlvbiwgcGFyZW50Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgYGphdmFzY3JpcHQ6dm9pZCgwKWApO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2MucXVlcnlTZWxlY3RvckFsbChcImNvZGVcIikuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAvLyB2YXIgY29kZSA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gZWxlbWVudC5pbm5lckhUTUwgPSByZW5kZXJEb2N1bWVudGF0aW9uU3ludGF4SGlnaGxpZ2h0aW5nKGNvZGUpO1xuXG4gICAgICAgICAgICAvLyBpZiAoZWxlbWVudC50ZXh0Q29udGVudCAhPSBjb2RlKSB7XG4gICAgICAgICAgICAvLyAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvZGU7IC8vIEZhbGxiYWNrXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBsZXQgaGxqcyA9IHdpbmRvdy5obGpzIHx8IGhsanM7XG4gICAgICAgICAgICBobGpzLmhpZ2hsaWdodEVsZW1lbnQoZWxlbWVudClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChkb2MpXG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZpc2l0RG9jdW1lbnRhdGlvbjtcbiIsImltcG9ydCBRdWVzdGlvblVJIGZyb20gXCIuLi91aS9xdWVzdGlvbi5qc1wiO1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gXCIuLi9tb2RlbC9xdWVzdGlvbi5qc1wiO1xuXG5cbmNsYXNzIEJhc2VDb250cm9sbG9yIHtcbiAgY29uc3RydWN0b3IobW9kZWwsIHZpZXcpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy52aWV3ID0gdmlldztcbiAgfVxufVxuXG5jbGFzcyBRdWVzdGlvbkNvbnRyb2xsb3IgZXh0ZW5kcyBCYXNlQ29udHJvbGxvcntcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIobmV3IFF1ZXN0aW9uKDApLCBuZXcgUXVlc3Rpb25VSSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlkIFxuICAgKi9cbiAgc2V0UXVlc3Rpb24oaWQpIHtcbiAgICB0aGlzLm1vZGVsLnNldFF1ZXN0aW9uKGlkKTtcbiAgICBsZXQgdGl0bGUgPSB0aGlzLm1vZGVsLmdldFRpdGxlKCk7XG4gICAgdGhpcy52aWV3LnNldFRpdGxlKHRpdGxlKTtcbiAgICBsZXQgaW5vdXRzID0gdGhpcy5tb2RlbC5nZXRJbk91dHMoKTtcbiAgICB0aGlzLnZpZXcucmVtb3ZlQWxsRXhhbXBsZXMoKTtcbiAgICBpbm91dHMuZm9yRWFjaCgodGV4dHMpID0+IHtcbiAgICAgIHRoaXMudmlldy5hZGRFeGFtcGxlKHRleHRzWzBdLCB0ZXh0c1sxXSk7XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRvclwiKTtcbiAgICB0aGlzLnZpZXcucmVuZGVyVG8obm9kZSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbkNvbnRyb2xsb3IiLCJcblxuY2xhc3MgQ29yZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgXG4gICAqL1xuICBvbihldmVudCwgY2IpIHtcbiAgICBsZXQgbGlzdCA9IHRoaXMuZXZlbnRzW2V2ZW50XTtcbiAgICBpZighbGlzdCkge1xuICAgICAgbGlzdCA9IG5ldyBTZXQoKTtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IGxpc3Q7XG4gICAgfVxuICAgIGxpc3QuYWRkKGNiKTtcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgXG4gICAqL1xuICBlbWl0KGV2ZW50LCBkYXRhKSB7XG4gICAgbGV0IGxpc3QgPSB0aGlzLmV2ZW50c1tldmVudF07XG4gICAgaWYoIWxpc3QpIHsgcmV0dXJuOyB9XG4gICAgbGlzdC5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgY2IoZGF0YSk7XG4gICAgfSlcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgXG4gICAqL1xuICByZW1vdmVFdmVudChldmVudCwgY2IpIHtcbiAgICBpZighZXZlbnQpIHtcbiAgICAgIHRoaXMuZXZlbnRzID0ge307XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKCFjYikge1xuICAgICAgZGVsZXRlIHRoaXMuZXZlbnRzW2V2ZW50XTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGxpc3QgPSB0aGlzLmV2ZW50c1tldmVudF07XG4gICAgaWYobGlzdCkge1xuICAgICAgbGlzdC5kZWxldGUoY2IpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBHQ29yZSA9IG5ldyBDb3JlKCk7XG5leHBvcnQgZGVmYXVsdCBHQ29yZTsiLCJcbmltcG9ydCB2aXNpdERvY3VtZW50YXRpb24gZnJvbSBcIi4uL2RvY3NcIjtcbmltcG9ydCBHQ29yZSBmcm9tIFwiLi9jb3JlXCI7XG5cbi8qKlxuICogZmV0Y2goJ2h0dHA6Ly9leGFtcGxlLmNvbS9tb3ZpZXMuanNvbicpXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7XG4gKi9cblxubGV0IEdJbnB1dHMgPSBudWxsO1xubGV0IGxvYWRfaW5wdXRzID0gKGNiKSA9PiB7XG4gIGZldGNoKFwiZG9jcy9xdWVzdGlvbl9pbnB1dHMvaW5wdXRzLmpzb25cIilcbiAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbigoZGF0YSkgPT4ge1xuICAgIEdJbnB1dHMgPSBkYXRhO1xuICB9KVxufVxuaWYoIUdJbnB1dHMpIHtcbiAgbG9hZF9pbnB1dHMoKTtcbn1cblxubGV0IF9nZXRfY3VyX2lucHV0cyA9IChxaWQpID0+IHtcbiAgbGV0IGlucHV0cyA9IEdJbnB1dHNbcWlkXTtcbiAgaWYoIWlucHV0cykgeyByZXR1cm4gO31cbiAgcmV0dXJuIGlucHV0cy5pbztcbn1cblxubGV0IF9nZW5fdGVzdF9jb2RlID0gKGlkLCBpbnB1dCwgb3V0cHV0KSA9PiB7XG4gIHJldHVybiBgbG9jYWwgcmV0ID0gc29sdmUoJHtpbnB1dH0pXG4gIGxvY2FsIGlzX3NhbWUgPSBfX2lzX3NhbWUocmV0LCAke291dHB1dH0pIGFuZCAxIG9yIDBcbiAgX19zY2FsbChcImNvbGxlY3RDb2RlUmV0XCIsICR7aWR9LCBpc19zYW1lKWA7XG59XG5cbi8qKlxuICogQG5vdGUgXG4gKiBydW5fZXhhbXBsZS5sdWFcbiAqL1xuY2xhc3MgRXhhbSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucXVlc3Rpb25pZCA9IDA7XG4gICAgdGhpcy5ub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdG9yXCIpO1xuICB9XG5cbiAgaGFzTmV4dFF1ZXN0aW9uKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbmV4dFF1ZXN0aW9uKCkge1xuICAgIGlmKHRoaXMuaGFzTmV4dFF1ZXN0aW9uKCkpIHtcbiAgICAgIHRoaXMucXVlc3Rpb25pZCsrO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0Q3VyUXVlc3Rpb24oKSB7XG4gICAgbGV0IHVybCA9IGBkb2NzL3F1ZXN0aW9ucy9xJHt0aGlzLnF1ZXN0aW9uaWR9Lm1kYDtcbiAgICB2aXNpdERvY3VtZW50YXRpb24odXJsLCB0aGlzLm5vZGUpO1xuICB9XG5cbiAgdm1SdW5FeGFtcGxlcyhsdWF2bSkge1xuICAgIGxldCBpb3MgPSBfZ2V0X2N1cl9pbnB1dHModGhpcy5xdWVzdGlvbmlkKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGVzdCA9IGlvc1tpXTtcbiAgICAgIGxldCBjb2RlID0gX2dlbl90ZXN0X2NvZGUoaSwgdGVzdFswXSwgdGVzdFsxXSk7XG4gICAgICBsZXQgcmV0ID0gbHVhdm0ucnVuKGNvZGUpO1xuICAgICAgaWYocmV0ICE9IDApIHtcbiAgICAgICAgR0NvcmUuZW1pdChcImNvZGVfZXJyb3JcIiwge1xuICAgICAgICAgIHRleHQ6IGBydW4gdGVzdCBlcnJvci4gcXVlc3Rpb246JHt0aGlzLnF1ZXN0aW9uaWR9LCBlZzoke2l9YFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBwdXRSZXN1bHQoaWQsIHJldCkge1xuICAgXG4gIH1cblxuICBnZXRRdWVzdGlvblRlc3QocXVlc3Rpb25pZCwgdGVzdGlkKSB7XG4gICAgbGV0IGlvcyA9IF9nZXRfY3VyX2lucHV0cyhxdWVzdGlvbmlkIHx8IHRoaXMucXVlc3Rpb25pZCk7XG4gICAgaWYoIWlvcykgeyByZXR1cm47IH1cbiAgICByZXR1cm4gaW9zW3Rlc3RpZF07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhhbTsiLCJcbi8vIGxldCBuZXdfbHVhdm0gPSBjd3JhcChcIm5ld19sdWF2bVwiLCBcIm51bWJlclwiLCBbXSk7XG4vLyBsZXQgbHVhX2V4ZWMgPSBjd3JhcChcImx1YV9leGVjXCIsIFwibnVtYmVyXCIsIFtcIm51bWJlclwiLCBcInN0cmluZ1wiXSk7XG4vLyBsZXQgY2xvc2VfbHVhdm0gPSBjd3JhcChcImNsb3NlX2x1YXZtXCIsIG51bGwsIFtcIm51bWJlclwiXSk7XG5cbmxldCBuZXdfbHVhdm0gPSBudWxsO1xubmV3X2x1YXZtID0gKCkgPT4ge1xuICBuZXdfbHVhdm0gPSBjd3JhcChcIm5ld19sdWF2bVwiLCBcIm51bWJlclwiLCBbXSk7XG4gIHJldHVybiBuZXdfbHVhdm0oKTtcbn1cbmxldCBsdWFfZXhlYyA9IG51bGw7XG5sdWFfZXhlYyA9IChsLCBjb2RlKSA9PiB7XG4gIGx1YV9leGVjID0gY3dyYXAoXCJsdWFfZXhlY1wiLCBcIm51bWJlclwiLCBbXCJudW1iZXJcIiwgXCJzdHJpbmdcIl0pO1xuICByZXR1cm4gbHVhX2V4ZWMobCwgY29kZSk7XG59XG5sZXQgY2xvc2VfbHVhdm0gPSBudWxsO1xuY2xvc2VfbHVhdm0gPSAobCkgPT4ge1xuICBjbG9zZV9sdWF2bSA9IGN3cmFwKFwiY2xvc2VfbHVhdm1cIiwgbnVsbCwgW1wibnVtYmVyXCJdKTtcbiAgcmV0dXJuIGNsb3NlX2x1YXZtKGwpO1xufVxuXG5jbGFzcyBMdWFWTSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudm0gPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29kZSBcbiAgICovXG4gIHJ1bihjb2RlKSB7XG4gICAgaWYoIXRoaXMudm0gfHwgdGhpcy52bSA9PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltsdWF2bV0gY2FudCBmb3VuZCBsdWF2bS5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBlcnJDb2RlID0gbHVhX2V4ZWModGhpcy52bSwgY29kZSk7XG5cblxuICAgIHJldHVybiBlcnJDb2RlO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgaWYodGhpcy52bSkge1xuICAgICAgY2xvc2VfbHVhdm0odGhpcy52bSlcbiAgICB9XG4gICAgdGhpcy52bSA9IG5ld19sdWF2bSgpO1xuICB9XG5cbiAgXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBMdWFWTSIsIlxuXG5cbi8qKlxuICogQHRpbWUgMDMtMTItMjAyMlxuICogQGRlc2NyaXB0aW9uIOS9oOefpemBk+eahO+8jOaIkeaAu+aYr+WWnOasouWGmeeCueaXoOiBiueahOS4nOilv1xuICoge1xuICogICAgaWQ6IDAsXG4gKiAgICB0aXRsZTogXCJcIixcbiAqICAgIGlub3V0czogW10sXG4gKiB9XG4gKi9cbmNvbnN0IFFVRVNUSU9OUyA9IFtdO1xuY29uc3QgREVGQVVMVF9RVUVTVElPTiA9IHtcbiAgaWQgOiAwLFxuICB0aXRsZSA6IFwiZGVmYXVsdFwiLFxuICBpbm91dHMgOiBbXG4gICAgW1wiMGZmZmZmZmZmZmZkdnZ2YWFhYXExc3F3ZXF3ZXF3ZXF3ZWVlZWVcIiwgXCIwXCJdLFxuICAgIFtcIjFcIiwgXCIxXCJdLFxuICAgIFtcIjJcIiwgXCIyXCJdXG4gIF1cbn1cblxuXG5cbmNsYXNzIFF1ZXN0aW9uIHtcbiAgY29uc3RydWN0b3IoaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5xdWVzdGlvbiA9IERFRkFVTFRfUVVFU1RJT047XG4gICAgdGhpcy5zZXRRdWVzdGlvbihpZCk7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpZCBcbiAgICovXG4gIHNldFF1ZXN0aW9uKGlkKSB7XG4gICAgbGV0IHF1ZXN0aW9uID0gUVVFU1RJT05TW2lkXTtcbiAgICBpZighcXVlc3Rpb24pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW3F1ZXN0aW9uXSBlcnJvciBub3QgZm91bmQgaWRcIiwgaWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnF1ZXN0aW9uID0gcXVlc3Rpb247XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVzdGlvbi50aXRsZTtcbiAgfVxuICBnZXRJbk91dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlc3Rpb24uaW5vdXRzO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb247IiwiLypcbiAqIEphdmFzY3JpcHQgdGVybWluYWxcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDExLTIwMjAgRmFicmljZSBCZWxsYXJkXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMXG4gKiBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIFRlcm0ob3B0aW9ucylcbntcbiAgICB2YXIgd2lkdGgsIGhlaWdodCwgdG90X2hlaWdodCwgc2Nyb2xsYmFjaztcbiAgICBcbiAgICBmdW5jdGlvbiBkdW1teV9rZXlfaGFuZGxlcigpXG4gICAge1xuICAgIH1cblxuICAgIHdpZHRoID0gb3B0aW9ucy5jb2xzID8gb3B0aW9ucy5jb2xzIDogODA7XG4gICAgaGVpZ2h0ID0gb3B0aW9ucy5yb3dzID8gb3B0aW9ucy5yb3dzIDogMjU7XG4gICAgc2Nyb2xsYmFjayA9IG9wdGlvbnMuc2Nyb2xsYmFjayA/IG9wdGlvbnMuc2Nyb2xsYmFjayA6IDA7XG4gICAgdGhpcy5mb250X3NpemUgPSBvcHRpb25zLmZvbnRTaXplID8gb3B0aW9ucy5mb250U2l6ZSA6IDE1O1xuXG4gICAgdGhpcy53ID0gd2lkdGg7XG4gICAgdGhpcy5oID0gaGVpZ2h0O1xuICAgIHRoaXMuY3VyX2ggPSBoZWlnaHQ7IC8qIGN1cnJlbnQgaGVpZ2h0IG9mIHRoZSBzY3JvbGwgYmFjayBidWZmZXIgKi9cbiAgICB0b3RfaGVpZ2h0ID0gaGVpZ2h0ICsgc2Nyb2xsYmFjaztcbiAgICB0aGlzLnRvdF9oID0gdG90X2hlaWdodDsgLyogbWF4aW11bSBoZWlnaHQgb2YgdGhlIHNjcm9sbCBiYWNrIGJ1ZmZlciAqL1xuXG4gICAgLyogeV9iYXNlIGFuZCB5X2Rpc3AgYXJlIGluZGV4IGluIHRoZSBjaXJjdWxhciBidWZmZXIgbGluZXMgb2ZcbiAgICAgICBsZW5ndGggY3VyX2guIFRoZXkgYXJlIGRlZmluZWQgbW9kdWxvIHRvdF9oLCBpLmUuIHRoZXkgd3JhcFxuICAgICAgIHdoZW4gY3VyX2ggPSB0b3RfaC4gSWYgY3VyX2ggPCB0b3RfaCwgeV9iYXNlIGlzIGFsd2F5cyBlcXVhbCB0b1xuICAgICAgIGN1cl9oIC0gaC4gKi9cbiAgICB0aGlzLnlfYmFzZSA9IDA7IC8qIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IHRvcCBzY3JlZW4gbGluZSBpbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbCBiYWNrIGJ1ZmZlciAqL1xuICAgIHRoaXMueV9kaXNwID0gMDsgLyogcG9zaXRpb24gb2YgdGhlIHRvcCBkaXNwbGF5ZWQgbGluZSBpbiB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbCBiYWNrIGJ1ZmZlciAqL1xuICAgIC8qIGN1cnNvciBwb3NpdGlvbiAqL1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgICB0aGlzLnNjcm9sbF90b3AgPSAwO1xuICAgIHRoaXMuc2Nyb2xsX2JvdHRvbSA9IHRoaXMuaDtcbiAgICB0aGlzLmN1cnNvcnN0YXRlID0gMDtcbiAgICB0aGlzLmhhbmRsZXIgPSBkdW1teV9rZXlfaGFuZGxlcjtcbiAgICB0aGlzLnN0YXRlID0gMDtcbiAgICB0aGlzLm91dHB1dF9xdWV1ZSA9IFwiXCI7XG4gICAgdGhpcy5jb2xvcnMgPSBbXG4gICAgICAgIC8qIG5vcm1hbCAqL1xuICAgICAgICBcIiMwMDAwMDBcIixcbiAgICAgICAgXCIjYWEwMDAwXCIsXG4gICAgICAgIFwiIzAwYWEwMFwiLFxuICAgICAgICBcIiNhYTU1MDBcIixcbiAgICAgICAgXCIjMDAwMGFhXCIsXG4gICAgICAgIFwiI2FhMDBhYVwiLFxuICAgICAgICBcIiMwMGFhYWFcIixcbiAgICAgICAgXCIjYWFhYWFhXCIsXG4gICAgICAgIC8qIGJyaWdodCAqL1xuICAgICAgICBcIiM1NTU1NTVcIixcbiAgICAgICAgXCIjZmY1NTU1XCIsXG4gICAgICAgIFwiIzU1ZmY1NVwiLFxuICAgICAgICBcIiNmZmZmNTVcIixcbiAgICAgICAgXCIjNTU1NWZmXCIsXG4gICAgICAgIFwiI2ZmNTVmZlwiLFxuICAgICAgICBcIiM1NWZmZmZcIixcbiAgICAgICAgXCIjZmZmZmZmXCIgXG4gICAgXTtcbiAgICAvKiBhdHRyaWJ1dGVzIGJpdHM6XG4gICAgICAgMC0zOiBiZ1xuICAgICAgIDQtNzogZmdcbiAgICAgICA4OiBib2xkXG4gICAgICAgOTogaW52ZXJzZVxuICAgICovXG4gICAgdGhpcy5kZWZfYXR0ciA9ICg3IDw8IDQpIHwgMDtcbiAgICB0aGlzLmN1cl9hdHRyID0gdGhpcy5kZWZfYXR0cjtcbiAgICB0aGlzLmlzX21hYyA9IChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNYWNcIikgPj0wICkgPyB0cnVlIDogZmFsc2U7XG4gICAgdGhpcy5rZXlfcmVwX3N0YXRlID0gMDtcbiAgICB0aGlzLmtleV9yZXBfc3RyID0gXCJcIjtcbiAgICBcbiAgICB0aGlzLnV0ZjggPSB0cnVlO1xuICAgIHRoaXMudXRmOF9zdGF0ZSA9IDA7XG4gICAgdGhpcy51dGY4X3ZhbCA9IDA7XG5cbiAgICB0aGlzLmFwcGxpY2F0aW9uX2N1cnNvciA9IGZhbHNlO1xuICAgIHRoaXMuYXBwbGljYXRpb25fa2V5cGFkID0gZmFsc2U7XG4gICAgLyogaWYgdHJ1ZSwgZW11bGF0ZSBzb21lIGJlaGF2aW9ycyBvZiB0aGUgTGludXggY29uc29sZSAqL1xuICAgIHRoaXMubGludXhfY29uc29sZSA9IHRydWU7XG5cbiAgICB0aGlzLnRleHRhcmVhX2hhc19mb2N1cyA9IGZhbHNlO1xufVxuXG5UZXJtLnByb3RvdHlwZS5zZXRLZXlIYW5kbGVyID0gZnVuY3Rpb24oaGFuZGxlcilcbntcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xufVxuXG4vKiByZXR1cm4gdGhlIHNpemUgb2YgYSBjaGFyYWN0ZXIgaW4gQ1NTIHBpeGVscyB1c2luZyB0aGUgc2VsZWN0ZWQgZm9udCAqL1xuZnVuY3Rpb24gdGVybV9nZXRfY2hhcl9zaXplKHBhcmVudF9lbCwgZm9udF9zaXplKVxue1xuICAgIHZhciBlbCwgZywgcmV0O1xuICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKFwidGVybVwiLCBcInRlcm1fY2hhcl9zaXplXCIpO1xuICAgIGVsLnN0eWxlLmZvbnRTaXplID0gZm9udF9zaXplICsgXCJweFwiO1xuICAgIGVsLnRleHRDb250ZW50ID0gXCJXXCI7XG4gICAgcGFyZW50X2VsLmFwcGVuZENoaWxkKGVsKTtcbiAgICBnID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgLyogdGhlIGNoYXJhY3RlciB3aWR0aCAmIGhlaWdodCBtYXkgbm90IGJlIGFuIGludGVnZXIgKi9cbiAgICByZXQgPSBbZy53aWR0aCwgZy5oZWlnaHRdO1xuICAgIHJldHVybiByZXQ7XG59XG5cblRlcm0ucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbihwYXJlbnRfZWwpXG57XG4gICAgdmFyIHksIGxpbmUsIGksIHRlcm0sIGMsIHJvd19lbCwgY2hhcl9zaXplX3JldDtcblxuICAgIC8qIHNldCBpbml0aWFsIGNvbnRlbnQgKi9cbiAgICB0aGlzLmxpbmVzID0gbmV3IEFycmF5KCk7XG4gICAgYyA9IDMyIHwgKHRoaXMuZGVmX2F0dHIgPDwgMTYpO1xuICAgIGZvcih5ID0gMDsgeSA8IHRoaXMuY3VyX2g7eSsrKSB7XG4gICAgICAgIGxpbmUgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yKGk9MDtpPHRoaXMudztpKyspXG4gICAgICAgICAgICBsaW5lW2ldID0gYztcbiAgICAgICAgdGhpcy5saW5lc1t5XSA9IGxpbmU7XG4gICAgfVxuXG4gICAgY2hhcl9zaXplX3JldCA9IHRlcm1fZ2V0X2NoYXJfc2l6ZShwYXJlbnRfZWwsIHRoaXMuZm9udF9zaXplKTtcbiAgICAvKiBzaXplIG9mIHRoZSBjaGFyYWN0ZXIgaW4gQ1NTIHBpeGVscyAqL1xuICAgIHRoaXMuY2hhcl93aWR0aCA9IGNoYXJfc2l6ZV9yZXRbMF07XG4gICAgdGhpcy5jaGFyX2hlaWdodCA9IGNoYXJfc2l6ZV9yZXRbMV07XG5cbiAgICB0aGlzLnNjcm9sbGJhcl93aWR0aCA9IDE1O1xuICAgIFxuICAgIC8qIHNpemUgb2YgdGVybV9lbCBpbiBDU1MgcGl4ZWxzICovXG4gICAgdGhpcy50ZXJtX3dpZHRoID0gTWF0aC5jZWlsKHRoaXMudyAqIHRoaXMuY2hhcl93aWR0aCkgK1xuICAgICAgICB0aGlzLnNjcm9sbGJhcl93aWR0aDtcbiAgICB0aGlzLnRlcm1faGVpZ2h0ID0gTWF0aC5jZWlsKHRoaXMuaCAqIHRoaXMuY2hhcl9oZWlnaHQpO1xuICAgICAgICBcbiAgICAvKiBjcmVhdGUgdGhlIHRlcm1pbmFsIHdpbmRvdyAqL1xuICAgIHRoaXMudGVybV9lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy50ZXJtX2VsLmNsYXNzTmFtZSA9IFwidGVybVwiO1xuICAgIC8qIFhYWDogY291bGQgY29tcHV0ZSB0aGUgZm9udCBtZXRyaWNzICovXG4gICAgdGhpcy50ZXJtX2VsLnN0eWxlLmZvbnRTaXplID0gdGhpcy5mb250X3NpemUgKyBcInB4XCI7XG4gICAgdGhpcy50ZXJtX2VsLnN0eWxlLndpZHRoID0gdGhpcy50ZXJtX3dpZHRoICsgXCJweFwiO1xuICAgIHRoaXMudGVybV9lbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnRlcm1faGVpZ2h0ICsgXCJweFwiO1xuICAgIC8qIGFsbG93IHRoZSB0ZXJtaW5hbCB0byB0YWtlIHRoZSBmb2N1cyAqL1xuICAgIHRoaXMudGVybV9lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgXG4gICAgLyogc2Nyb2xsIGJhciAqL1xuICAgIHRoaXMuc2Nyb2xsYmFyX2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLnNjcm9sbGJhcl9lbC5jbGFzc05hbWUgPSBcInRlcm1fc2Nyb2xsYmFyXCI7XG4gICAgdGhpcy5zY3JvbGxiYXJfZWwuc3R5bGUud2lkdGggPSB0aGlzLnNjcm9sbGJhcl93aWR0aCArIFwicHhcIjtcbiAgICB0aGlzLnRlcm1fZWwuYXBwZW5kQ2hpbGQodGhpcy5zY3JvbGxiYXJfZWwpO1xuXG4gICAgdGhpcy50cmFja19lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy50cmFja19lbC5jbGFzc05hbWUgPSBcInRlcm1fdHJhY2tcIjtcbiAgICB0aGlzLnRyYWNrX2VsLm9ubW91c2Vkb3duID0gdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zY3JvbGxiYXJfZWwuYXBwZW5kQ2hpbGQodGhpcy50cmFja19lbCk7XG4gICAgXG4gICAgdGhpcy50aHVtYl9lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy50aHVtYl9lbC5jbGFzc05hbWUgPSBcInRlcm1fdGh1bWJcIjtcbiAgICB0aGlzLnRodW1iX2VsLm9ubW91c2Vkb3duID0gdGhpcy5tb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50cmFja19lbC5hcHBlbmRDaGlsZCh0aGlzLnRodW1iX2VsKTtcblxuICAgIHRoaXMuZW5kX2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLmVuZF9lbC5jbGFzc05hbWUgPSBcInRlcm1fZW5kXCI7XG4gICAgdGhpcy50aHVtYl9lbC5hcHBlbmRDaGlsZCh0aGlzLmVuZF9lbCk7XG5cbiAgICAvKiBjdXJyZW50IHNjcm9sbGJhciBwb3NpdGlvbiAqL1xuICAgIHRoaXMudGh1bWJfc2l6ZSA9IC0xO1xuICAgIHRoaXMudGh1bWJfcG9zID0gLTE7XG4gICAgXG4gICAgLyogdGVybWluYWwgY29udGVudCAqL1xuICAgIHRoaXMuY29udGVudF9lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy5jb250ZW50X2VsLmNsYXNzTmFtZSA9IFwidGVybV9jb250ZW50XCI7XG4gICAgdGhpcy5jb250ZW50X2VsLnN0eWxlLndpZHRoID0gKHRoaXMudykgKyBcImNoXCI7XG4gICAgdGhpcy50ZXJtX2VsLmFwcGVuZENoaWxkKHRoaXMuY29udGVudF9lbCk7XG4gICAgXG4gICAgdGhpcy5yb3dzX2VsID0gW107XG4gICAgZm9yKHk9MDt5PHRoaXMuaDt5KyspIHtcbiAgICAgICAgcm93X2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5yb3dzX2VsLnB1c2gocm93X2VsKTtcbiAgICAgICAgdGhpcy5jb250ZW50X2VsLmFwcGVuZENoaWxkKHJvd19lbCk7XG4gICAgfVxuICAgIFxuICAgIC8qIGR1bW15IHRleHRhcmVhIHRvIGdldCB0aGUgaW5wdXQgZXZlbnRzIGFuZCBmb3IgdGhlIHZpcnR1YWxcbiAgICAgICBrZXlib2FyZCBvbiBtb2JpbGUgZGV2aWNlcyAqL1xuICAgIHRoaXMudGV4dGFyZWFfZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgdGhpcy50ZXh0YXJlYV9lbC5jbGFzc0xpc3QuYWRkKFwidGVybV90ZXh0YXJlYVwiKTtcbiAgICB0aGlzLnRleHRhcmVhX2VsLnNldEF0dHJpYnV0ZShcImF1dG9jb3JyZWN0XCIsIFwib2ZmXCIpO1xuICAgIHRoaXMudGV4dGFyZWFfZWwuc2V0QXR0cmlidXRlKFwiYXV0b2NhcGl0YWxpemVcIiwgXCJvZmZcIik7XG4gICAgdGhpcy50ZXh0YXJlYV9lbC5zZXRBdHRyaWJ1dGUoXCJzcGVsbGNoZWNrXCIsIFwiZmFsc2VcIik7XG4gICAgdGhpcy50ZXh0YXJlYV9lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xuICAgIHRoaXMudGVybV9lbC5hcHBlbmRDaGlsZCh0aGlzLnRleHRhcmVhX2VsKTtcblxuICAgIHRoaXMucGFyZW50X2VsID0gcGFyZW50X2VsO1xuICAgIHBhcmVudF9lbC5hcHBlbmRDaGlsZCh0aGlzLnRlcm1fZWwpO1xuXG4gICAgdGhpcy5yZWZyZXNoKDAsIHRoaXMuaCAtIDEpO1xuICAgIFxuICAgIC8qIHRleHRhcmVhX2VsIGV2ZW50cyAqL1xuICAgIC8vIGtleSBoYW5kbGVyXG4gICAgdGhpcy50ZXh0YXJlYV9lbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgICB0aGlzLnRleHRhcmVhX2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSwgdHJ1ZSk7XG4gICAgLyoga2V5cHJlc3MgaXMgZGVwcmVjYXRlZCwgc28gdXNlIGlucHV0ICovXG4gICAgdGhpcy50ZXh0YXJlYV9lbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyksIHRydWUpO1xuICAgIHRoaXMudGV4dGFyZWFfZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNIYW5kbGVyLmJpbmQodGhpcyksIHRydWUpO1xuICAgIHRoaXMudGV4dGFyZWFfZWwuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ibHVySGFuZGxlci5iaW5kKHRoaXMpLCB0cnVlKTtcblxuICAgIC8qIHRlcm1fZWwgZXZlbnRzICovXG4gICAgdGhpcy50ZXJtX2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXJtS2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlKTtcbiAgICB0aGlzLnRlcm1fZWwuYWRkRXZlbnRMaXN0ZW5lcihcInBhc3RlXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFzdGVIYW5kbGVyLmJpbmQodGhpcyksIHRydWUpO1xuICAgIHRoaXMudGVybV9lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVybU1vdXNlVXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSk7XG4gICAgdGhpcy50ZXJtX2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndoZWVsSGFuZGxlci5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cbiAgICAvLyBjdXJzb3IgYmxpbmtpbmdcbiAgICB0ZXJtID0gdGhpcztcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHsgdGVybS5jdXJzb3JfdGltZXJfY2IoKTsgfSwgMTAwMCk7XG5cbiAgICB0aGlzLnRlcm1fZWwuZm9jdXMoKTtcbn07XG5cblRlcm0ucHJvdG90eXBlLnJlZnJlc2hfc2Nyb2xsYmFyID0gZnVuY3Rpb24gKClcbntcbiAgICB2YXIgdG90YWxfc2l6ZSwgdGh1bWJfcG9zLCB0aHVtYl9zaXplLCB5LCB5MDtcbiAgICB0b3RhbF9zaXplID0gdGhpcy50ZXJtX2VsLmNsaWVudEhlaWdodDtcbiAgICB0aHVtYl9zaXplID0gTWF0aC5jZWlsKHRoaXMuaCAqIHRvdGFsX3NpemUgLyB0aGlzLmN1cl9oKTtcbiAgICAvKiBwb3NpdGlvbiBvZiB0aGUgZmlyc3QgbGluZSBvZiB0aGUgc2Nyb2xsIGJhY2sgYnVmZmVyICovXG4gICAgeTAgPSAodGhpcy55X2Jhc2UgKyB0aGlzLmgpICUgdGhpcy5jdXJfaDtcbiAgICB5ID0gdGhpcy55X2Rpc3AgLSB5MDtcbiAgICBpZiAoeSA8IDApXG4gICAgICAgIHkgKz0gdGhpcy5jdXJfaDtcbiAgICB0aHVtYl9wb3MgPSBNYXRoLmZsb29yKHkgKiB0b3RhbF9zaXplIC8gdGhpcy5jdXJfaCk7XG4gICAgdGh1bWJfc2l6ZSA9IE1hdGgubWF4KHRodW1iX3NpemUsIDMwKTtcbiAgICB0aHVtYl9zaXplID0gTWF0aC5taW4odGh1bWJfc2l6ZSwgdG90YWxfc2l6ZSk7XG4gICAgdGh1bWJfcG9zID0gTWF0aC5taW4odGh1bWJfcG9zLCB0b3RhbF9zaXplIC0gdGh1bWJfc2l6ZSk7XG4vLyAgICBjb25zb2xlLmxvZyhcInBvcz1cIiArIHRodW1iX3BvcyArIFwiIHNpemU9XCIgKyB0aHVtYl9zaXplKTtcbiAgICBpZiAodGh1bWJfcG9zICE9IHRoaXMudGh1bWJfcG9zIHx8IHRodW1iX3NpemUgIT0gdGhpcy50aHVtYl9zaXplKSB7XG4gICAgICAgIHRoaXMudGh1bWJfcG9zID0gdGh1bWJfcG9zO1xuICAgICAgICB0aGlzLnRodW1iX3NpemUgPSB0aHVtYl9zaXplO1xuICAgICAgICB0aGlzLnRodW1iX2VsLnN0eWxlLnRvcCA9IHRodW1iX3BvcyArIFwicHhcIjtcbiAgICAgICAgdGhpcy50aHVtYl9lbC5zdHlsZS5oZWlnaHQgPSB0aHVtYl9zaXplICsgXCJweFwiO1xuICAgIH1cbn1cblxuLyogbW92ZSB0aGUgdGV4dCBhcmVhIGF0IHRoZSBjdXJzb3IgcG9zaXRpb24gc28gdGhhdCB0aGUgYnJvd3NlciBzaG93c1xuICogdGhlIGNvcnJlY3QgcG9zaXRpb24gd2hlbiB0aGUgdmlydHVhbCBrZXlib2FyZCBpcyB1c2VkICovXG5UZXJtLnByb3RvdHlwZS5tb3ZlX3RleHRhcmVhID0gZnVuY3Rpb24oKVxue1xuICAgIHZhciB4LCB5LCBiYXNlX3gsIGJhc2VfeSwgcG9zO1xuXG4gICAgcG9zID0gdGhpcy50ZXJtX2VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGJhc2VfeCA9IHBvcy5sZWZ0ICsgd2luZG93LnNjcm9sbFg7XG4gICAgYmFzZV95ID0gcG9zLnRvcCArIHdpbmRvdy5zY3JvbGxZO1xuICAgIC8qIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBib2R5ICovXG4gICAgeCA9IE1hdGguY2VpbCh0aGlzLnggKiB0aGlzLmNoYXJfd2lkdGggKyBiYXNlX3gpO1xuICAgIHkgPSBNYXRoLmNlaWwodGhpcy55ICogdGhpcy5jaGFyX2hlaWdodCArIGJhc2VfeSk7XG5cbiAgICB0aGlzLnRleHRhcmVhX2VsLnN0eWxlLndpZHRoID0gTWF0aC5jZWlsKHRoaXMuY2hhcl93aWR0aCkgKyBcInB4XCI7XG4gICAgdGhpcy50ZXh0YXJlYV9lbC5zdHlsZS5oZWlnaHQgPSBNYXRoLmNlaWwodGhpcy5jaGFyX2hlaWdodCkgKyBcInB4XCI7XG4gICAgdGhpcy50ZXh0YXJlYV9lbC5zdHlsZS5sZWZ0ID0geCArIFwicHhcIjtcbiAgICB0aGlzLnRleHRhcmVhX2VsLnN0eWxlLnRvcCA9IHkgKyBcInB4XCI7XG4gICAgdGhpcy50ZXh0YXJlYV9lbC5zdHlsZS56SW5kZXggPSAxMDAwO1xufVxuXG5UZXJtLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oeW1pbiwgeW1heClcbntcbiAgICB2YXIgZWwsIHksIGxpbmUsIG91dGxpbmUsIGMsIHcsIGksIGosIGN4LCBhdHRyLCBsYXN0X2F0dHIsIGZnLCBiZywgeTE7XG4gICAgdmFyIGh0dHBfbGlua19sZW4sIGh0dHBfbGlua19zdHIsIGJvbGQsIHRtcCwgaW52ZXJzZTtcbiAgICBcbiAgICBmdW5jdGlvbiBpc19odHRwX2xpbmtfY2hhcihjKVxuICAgIHtcbiAgICAgICAgdmFyIHN0ciA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODktLl9+Oi8/I1tdQCEkJicoKSorLDs9YC5cIjtcbiAgICAgICAgcmV0dXJuIHN0ci5pbmRleE9mKFN0cmluZy5mcm9tQ2hhckNvZGUoYykpID49IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmlnaHRfdHJpbShzdHIsIGEpXG4gICAge1xuICAgICAgICB2YXIgaSwgbjtcbiAgICAgICAgbiA9IGEubGVuZ3RoO1xuICAgICAgICBpID0gc3RyLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGkgPj0gbiAmJiBzdHIuc3Vic3RyKGkgLSBuLCBuKSA9PSBhKVxuICAgICAgICAgICAgaSAtPSBuO1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cigwLCBpKTtcbiAgICB9XG4gICAgXG4gICAgZm9yKHkgPSB5bWluOyB5IDw9IHltYXg7IHkrKykge1xuICAgICAgICAvKiBjb252ZXJ0IHRvIEhUTUwgc3RyaW5nICovXG4gICAgICAgIHkxID0geSArIHRoaXMueV9kaXNwO1xuICAgICAgICBpZiAoeTEgPj0gdGhpcy5jdXJfaClcbiAgICAgICAgICAgIHkxIC09IHRoaXMuY3VyX2g7XG4gICAgICAgIGxpbmUgPSB0aGlzLmxpbmVzW3kxXTtcbiAgICAgICAgb3V0bGluZSA9IFwiXCI7XG4gICAgICAgIHcgPSB0aGlzLnc7XG4gICAgICAgIGlmICh5ID09IHRoaXMueSAmJiB0aGlzLmN1cnNvcl9zdGF0ZSAmJiBcbiAgICAgICAgICAgIHRoaXMueV9kaXNwID09IHRoaXMueV9iYXNlKSB7XG4gICAgICAgICAgICBjeCA9IHRoaXMueDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN4ID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdF9hdHRyID0gdGhpcy5kZWZfYXR0cjtcbiAgICAgICAgaHR0cF9saW5rX2xlbiA9IDA7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IHc7IGkrKykge1xuICAgICAgICAgICAgYyA9IGxpbmVbaV07XG4gICAgICAgICAgICBhdHRyID0gYyA+PiAxNjtcbiAgICAgICAgICAgIGMgJj0gMHhmZmZmO1xuICAgICAgICAgICAgLyogdGVzdCBmb3IgaHR0cCBsaW5rICovXG4gICAgICAgICAgICBpZiAoYyA9PSAweDY4ICYmICh3IC0gaSkgPj0gOCAmJiBodHRwX2xpbmtfbGVuID09IDApIHtcbiAgICAgICAgICAgICAgICAvKiB0ZXN0IGh0dHA6Ly8gb3IgaHR0cHM6Ly8gKi9cbiAgICAgICAgICAgICAgICBpZiAoKGxpbmVbaSArIDFdICYgMHhmZmZmKSA9PSAweDc0ICYmXG4gICAgICAgICAgICAgICAgICAgIChsaW5lW2kgKyAyXSAmIDB4ZmZmZikgPT0gMHg3NCAmJlxuICAgICAgICAgICAgICAgICAgICAobGluZVtpICsgM10gJiAweGZmZmYpID09IDB4NzAgJiZcbiAgICAgICAgICAgICAgICAgICAgKCgobGluZVtpICsgNF0gJiAweGZmZmYpID09IDB4M2EgJiZcbiAgICAgICAgICAgICAgICAgICAgICAobGluZVtpICsgNV0gJiAweGZmZmYpID09IDB4MmYgJiZcbiAgICAgICAgICAgICAgICAgICAgICAobGluZVtpICsgNl0gJiAweGZmZmYpID09IDB4MmYpIHx8XG4gICAgICAgICAgICAgICAgICAgICAoKGxpbmVbaSArIDRdICYgMHhmZmZmKSA9PSAweDczICYmXG4gICAgICAgICAgICAgICAgICAgICAgKGxpbmVbaSArIDVdICYgMHhmZmZmKSA9PSAweDNhICYmXG4gICAgICAgICAgICAgICAgICAgICAgKGxpbmVbaSArIDZdICYgMHhmZmZmKSA9PSAweDJmICYmXG4gICAgICAgICAgICAgICAgICAgICAgKGxpbmVbaSArIDddICYgMHhmZmZmKSA9PSAweDJmKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaHR0cF9saW5rX3N0ciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGogPSAwO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKGkgKyBqKSA8IHcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2h0dHBfbGlua19jaGFyKGxpbmVbaSArIGpdICYgMHhmZmZmKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHR0cF9saW5rX3N0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGxpbmVbaSArIGpdICYgMHhmZmZmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBodHRwX2xpbmtfbGVuID0gajtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RfYXR0ciAhPSB0aGlzLmRlZl9hdHRyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lICs9ICc8L3NwYW4+JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfYXR0ciA9IHRoaXMuZGVmX2F0dHI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZSArPSBcIjxhIGhyZWY9J1wiICsgaHR0cF9saW5rX3N0ciArIFwiJz5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSA9PSBjeCkgIHtcbiAgICAgICAgICAgICAgICBhdHRyID0gLTE7IC8qIGN1cnNvciAqL1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGF0dHIgIT0gbGFzdF9hdHRyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RfYXR0ciAhPSB0aGlzLmRlZl9hdHRyKVxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lICs9ICc8L3NwYW4+JztcbiAgICAgICAgICAgICAgICBpZiAoYXR0ciAhPSB0aGlzLmRlZl9hdHRyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBjdXJzb3IgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmUgKz0gJzxzcGFuIGNsYXNzPVwidGVybV9jdXJzb3JcIj4nO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZSArPSAnPHNwYW4gc3R5bGU9XCInO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmcgPSAoYXR0ciA+PiA0KSAmIDB4ZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJnID0gYXR0ciAmIDB4ZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvbGQgPSAoYXR0ciA+PiA4KSAmIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnNlID0gKGF0dHIgPj4gOSkgJiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGludmVyc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXAgPSBmZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZyA9IGJnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnID0gdG1wO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBtZXRyaWNzIGFyZSBub3QgT0sgZm9yIGFsbCBmb250cywgc28gZGlzYWJsZWQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBvdXRsaW5lICs9ICdmb250LXdlaWdodDpib2xkOyc7ICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogdXNlIHRoZSBicmlnaHQgY29sb3IgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmcgPCA4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZyArPSA4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZnICE9IDcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lICs9ICdjb2xvcjonICsgdGhpcy5jb2xvcnNbZmddICsgJzsnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJnICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lICs9ICdiYWNrZ3JvdW5kLWNvbG9yOicgKyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvcnNbYmddICsgJzsnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZSArPSAnXCI+JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaChjKSB7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgIG91dGxpbmUgKz0gXCImbmJzcDtcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzg6IC8vICcmJ1xuICAgICAgICAgICAgICAgIG91dGxpbmUgKz0gXCImYW1wO1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2MDogLy8gJzwnXG4gICAgICAgICAgICAgICAgb3V0bGluZSArPSBcIiZsdDtcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjI6IC8vICc+J1xuICAgICAgICAgICAgICAgIG91dGxpbmUgKz0gXCImZ3Q7XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChjIDwgMzIpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZSArPSBcIiZuYnNwO1wiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmUgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0X2F0dHIgPSBhdHRyO1xuICAgICAgICAgICAgaWYgKGh0dHBfbGlua19sZW4gIT0gMCkge1xuICAgICAgICAgICAgICAgIGh0dHBfbGlua19sZW4tLTtcbiAgICAgICAgICAgICAgICBpZiAoaHR0cF9saW5rX2xlbiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0X2F0dHIgIT0gdGhpcy5kZWZfYXR0cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZSArPSAnPC9zcGFuPic7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2F0dHIgPSB0aGlzLmRlZl9hdHRyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmUgKz0gXCI8L2E+XCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0X2F0dHIgIT0gdGhpcy5kZWZfYXR0cikge1xuICAgICAgICAgICAgb3V0bGluZSArPSAnPC9zcGFuPic7XG4gICAgICAgIH1cblxuICAgICAgICAvKiB0cmltIHRyYWlsaW5nIHNwYWNlcyBmb3IgY29weS9wYXN0ZSAqL1xuICAgICAgICBvdXRsaW5lID0gcmlnaHRfdHJpbShvdXRsaW5lLCBcIiZuYnNwO1wiKTtcbiAgICAgICAgaWYgKG91dGxpbmUgPT0gXCJcIilcbiAgICAgICAgICAgIG91dGxpbmUgPSBcIiZuYnNwO1wiO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yb3dzX2VsW3ldLmlubmVySFRNTCA9IG91dGxpbmU7XG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoX3Njcm9sbGJhcigpO1xuICAgIHRoaXMubW92ZV90ZXh0YXJlYSgpO1xufTtcblxuVGVybS5wcm90b3R5cGUuY3Vyc29yX3RpbWVyX2NiID0gZnVuY3Rpb24oKVxue1xuICAgIHRoaXMuY3Vyc29yX3N0YXRlIF49IDE7XG4gICAgdGhpcy5yZWZyZXNoKHRoaXMueSwgdGhpcy55KTtcbn07XG5cblRlcm0ucHJvdG90eXBlLnNob3dfY3Vyc29yID0gZnVuY3Rpb24oKVxue1xuICAgIGlmICghdGhpcy5jdXJzb3Jfc3RhdGUpIHtcbiAgICAgICAgdGhpcy5jdXJzb3Jfc3RhdGUgPSAxO1xuICAgICAgICB0aGlzLnJlZnJlc2godGhpcy55LCB0aGlzLnkpO1xuICAgIH1cbn07XG5cbi8qIHNjcm9sbCBkb3duIG9yIHVwIGluIHRoZSBzY3JvbGwgYmFjayBidWZmZXIgYnkgbiBsaW5lcyAqL1xuVGVybS5wcm90b3R5cGUuc2Nyb2xsX2Rpc3AgPSBmdW5jdGlvbihuKVxue1xuICAgIHZhciBpLCB5MTtcbiAgICAvKiBzbG93IGJ1dCBpdCBkb2VzIG5vdCByZWFsbHkgbWF0dGVycyAqL1xuICAgIGlmIChuID49IDApIHtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy55X2Rpc3AgPT0gdGhpcy55X2Jhc2UpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBpZiAoKyt0aGlzLnlfZGlzcCA9PSB0aGlzLmN1cl9oKVxuICAgICAgICAgICAgICAgIHRoaXMueV9kaXNwID0gMDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG4gPSAtbjtcbiAgICAgICAgeTEgPSB0aGlzLnlfYmFzZSArIHRoaXMuaDtcbiAgICAgICAgaWYgKHkxID49IHRoaXMuY3VyX2gpXG4gICAgICAgICAgICB5MSAtPSB0aGlzLmN1cl9oO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnlfZGlzcCA9PSB5MSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGlmICgtLXRoaXMueV9kaXNwIDwgMClcbiAgICAgICAgICAgICAgICB0aGlzLnlfZGlzcCA9IHRoaXMuY3VyX2ggLSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaCgwLCB0aGlzLmggLSAxKTtcbn07XG5cblRlcm0ucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24oc3RyKVxue1xuICAgIHZhciBzLCB5bWluLCB5bWF4O1xuICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZSh5KSBcbiAgICB7XG4gICAgICAgIHltaW4gPSBNYXRoLm1pbih5bWluLCB5KTtcbiAgICAgICAgeW1heCA9IE1hdGgubWF4KHltYXgsIHkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldF9lcmFzZV9jaGFyKClcbiAgICB7XG4gICAgICAgIHZhciBiZ19tYXNrLCBhdHRyO1xuICAgICAgICBiZ19tYXNrID0gMHhmO1xuICAgICAgICBhdHRyID0gKHMuZGVmX2F0dHIgJiB+YmdfbWFzaykgfCAocy5jdXJfYXR0ciAmIGJnX21hc2spO1xuICAgICAgICByZXR1cm4gMzIgfCAoYXR0ciA8PCAxNik7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGVyYXNlX2NoYXJzKHgxLCB4MiwgeSkge1xuICAgICAgICB2YXIgbCwgaSwgYywgeTE7XG4gICAgICAgIHkxID0gcy55X2Jhc2UgKyB5O1xuICAgICAgICBpZiAoeTEgPj0gcy5jdXJfaClcbiAgICAgICAgICAgIHkxIC09IHMuY3VyX2g7XG4gICAgICAgIGwgPSBzLmxpbmVzW3kxXTtcbiAgICAgICAgYyA9IGdldF9lcmFzZV9jaGFyKCk7XG4gICAgICAgIGZvcihpID0geDE7IGkgPCB4MjsgaSsrKVxuICAgICAgICAgICAgbFtpXSA9IGM7XG4gICAgICAgIHVwZGF0ZSh5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcmFzZV90b19lb2woeCwgeSkge1xuICAgICAgICBlcmFzZV9jaGFycyh4LCBzLncsIHkpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBlcmFzZV9pbl9saW5lKG4pIHtcbiAgICAgICAgc3dpdGNoKG4pIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgZXJhc2VfdG9fZW9sKHMueCwgcy55KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBlcmFzZV9jaGFycygwLCBzLnggKyAxLCBzLnkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGVyYXNlX2NoYXJzKDAsIHMudywgcy55KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXJhc2VfaW5fZGlzcGxheShuKSB7XG4gICAgICAgIHZhciB5O1xuICAgICAgICBzd2l0Y2gobikge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBlcmFzZV90b19lb2wocy54LCBzLnkpO1xuICAgICAgICAgICAgZm9yKHkgPSBzLnkgKyAxOyB5IDwgcy5oOyB5KyspXG4gICAgICAgICAgICAgICAgZXJhc2VfdG9fZW9sKDAsIHkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGVyYXNlX2NoYXJzKDAsIHMueCArIDEsIHMueSk7XG4gICAgICAgICAgICBmb3IoeSA9IDA7IHkgPCBzLnk7IHkrKykge1xuICAgICAgICAgICAgICAgIGVyYXNlX3RvX2VvbCgwLCB5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBmb3IoeSA9IDA7IHkgPCBzLmg7IHkrKykge1xuICAgICAgICAgICAgICAgIGVyYXNlX3RvX2VvbCgwLCB5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG4gICAgZnVuY3Rpb24gZGVsZXRlX2NoYXJzKG4pXG4gICAge1xuICAgICAgICB2YXIgbCwgaSwgYywgeTEsIGo7XG4gICAgICAgIHkxID0gcy55ICsgcy55X2Jhc2U7XG4gICAgICAgIGlmICh5MSA+PSBzLmN1cl9oKVxuICAgICAgICAgICAgeTEgLT0gcy5jdXJfaDtcbiAgICAgICAgbCA9IHMubGluZXNbeTFdO1xuICAgICAgICBpZiAobiA8IDEpXG4gICAgICAgICAgICBuID0gMTtcbiAgICAgICAgYyA9IGdldF9lcmFzZV9jaGFyKCk7XG4gICAgICAgIGogPSBzLnggKyBuO1xuICAgICAgICBmb3IoaSA9IHMueDsgaSA8IHMudzsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaiA8IHMudylcbiAgICAgICAgICAgICAgICBsW2ldID0gbFtqXTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBsW2ldID0gYztcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGUocy55KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnNlcnRfY2hhcnMobilcbiAgICB7XG4gICAgICAgIHZhciBsLCBpLCBjLCB5MSwgeDE7XG4gICAgICAgIGlmIChuIDwgMSlcbiAgICAgICAgICAgIG4gPSAxO1xuICAgICAgICBpZiAobiA+IHMudyAtIHMueClcbiAgICAgICAgICAgIG4gPSBzLncgLSBzLng7XG4gICAgICAgIHkxID0gcy55ICsgcy55X2Jhc2U7XG4gICAgICAgIGlmICh5MSA+PSBzLmN1cl9oKVxuICAgICAgICAgICAgeTEgLT0gcy5jdXJfaDtcbiAgICAgICAgbCA9IHMubGluZXNbeTFdO1xuICAgICAgICB4MSA9IHMueCArIG47XG4gICAgICAgIGZvcihpID0gcy53IC0gMTsgaSA+PSB4MTsgaS0tKVxuICAgICAgICAgICAgbFtpXSA9IGxbaSAtIG5dO1xuICAgICAgICBjID0gZ2V0X2VyYXNlX2NoYXIoKTtcbiAgICAgICAgZm9yKGkgPSBzLng7IGkgPCB4MTsgaSsrKVxuICAgICAgICAgICAgbFtpXSA9IGM7XG4gICAgICAgIHVwZGF0ZShzLnkpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjc2lfY29sb3JzKGVzY19wYXJhbXMpXG4gICAge1xuICAgICAgICB2YXIgaiwgbiwgZmcsIGJnLCBtYXNrO1xuXG4gICAgICAgIGlmIChlc2NfcGFyYW1zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBzLmN1cl9hdHRyPSBzLmRlZl9hdHRyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yKGogPSAwOyBqIDwgZXNjX3BhcmFtcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIG4gPSBlc2NfcGFyYW1zW2pdO1xuICAgICAgICAgICAgICAgIGlmIChuID49IDMwICYmIG4gPD0gMzcpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogZm9yZWdyb3VuZCAqL1xuICAgICAgICAgICAgICAgICAgICBmZyA9IG4gLSAzMDtcbiAgICAgICAgICAgICAgICAgICAgcy5jdXJfYXR0ciA9IChzLmN1cl9hdHRyICYgfigweGYgPDwgNCkpIHwgKGZnIDw8IDQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobiA+PSA0MCAmJiBuIDw9IDQ3KSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIGJhY2tncm91bmQgKi9cbiAgICAgICAgICAgICAgICAgICAgYmcgPSBuIC0gNDA7XG4gICAgICAgICAgICAgICAgICAgIHMuY3VyX2F0dHIgPSAocy5jdXJfYXR0ciAmIH4weGYpIHwgYmc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuID49IDkwICYmIG4gPD0gOTcpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogYnJpZ2h0IGZvcmVncm91bmQgKi9cbiAgICAgICAgICAgICAgICAgICAgZmcgPSBuIC0gOTAgKyA4O1xuICAgICAgICAgICAgICAgICAgICBzLmN1cl9hdHRyID0gKHMuY3VyX2F0dHIgJiB+KDB4ZiA8PCA0KSkgfCAoZmcgPDwgNCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuID49IDEwMCAmJiBuIDw9IDEwNykge1xuICAgICAgICAgICAgICAgICAgICAvKiBicmlnaHQgYmFja2dyb3VuZCAqL1xuICAgICAgICAgICAgICAgICAgICBiZyA9IG4gLSAxMDAgKyA4O1xuICAgICAgICAgICAgICAgICAgICBzLmN1cl9hdHRyID0gKHMuY3VyX2F0dHIgJiB+MHhmKSB8IGJnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobiA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIGJvbGQgKyBicmlnaHQgKi9cbiAgICAgICAgICAgICAgICAgICAgcy5jdXJfYXR0ciB8PSAoMSA8PCA4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG4gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvKiBkZWZhdWx0IGF0dHIgKi9cbiAgICAgICAgICAgICAgICAgICAgcy5jdXJfYXR0ciA9IHMuZGVmX2F0dHI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuID09IDcpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogaW52ZXJzZSAqL1xuICAgICAgICAgICAgICAgICAgICBzLmN1cl9hdHRyIHw9ICgxIDw8IDkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobiA9PSAyNykge1xuICAgICAgICAgICAgICAgICAgICAvKiBub3QgaW52ZXJzZSAqL1xuICAgICAgICAgICAgICAgICAgICBzLmN1cl9hdHRyICY9IH4oMSA8PCA5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG4gPT0gMzkpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogcmVzZXQgZmcgKi9cbiAgICAgICAgICAgICAgICAgICAgbWFzayA9IDB4MGYgPDwgNDtcbiAgICAgICAgICAgICAgICAgICAgcy5jdXJfYXR0ciA9IChzLmN1cl9hdHRyICYgfm1hc2spIHwgKHMuZGVmX2F0dHIgJiBtYXNrKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG4gPT0gNDkpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogcmVzZXQgYmcgKi9cbiAgICAgICAgICAgICAgICAgICAgbWFzayA9IDB4MGY7XG4gICAgICAgICAgICAgICAgICAgIHMuY3VyX2F0dHIgPSAocy5jdXJfYXR0ciAmIH5tYXNrKSB8IChzLmRlZl9hdHRyICYgbWFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW1wdHlfbGluZSh5LCB1c2VfZXJhc2VfY2hhcikge1xuICAgICAgICB2YXIgbGluZSwgYywgeTEsIHg7XG4gICAgICAgIGlmICh1c2VfZXJhc2VfY2hhcilcbiAgICAgICAgICAgIGMgPSBnZXRfZXJhc2VfY2hhcigpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBjID0gMzIgfCAocy5kZWZfYXR0ciA8PCAxNik7XG4gICAgICAgIGxpbmUgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yKHg9MDt4PHMudzt4KyspXG4gICAgICAgICAgICBsaW5lW3hdID0gYztcbiAgICAgICAgeTEgPSBzLnlfYmFzZSArIHk7XG4gICAgICAgIGlmICh5MSA+PSBzLmN1cl9oKVxuICAgICAgICAgICAgeTEgLT0gcy5jdXJfaDtcbiAgICAgICAgcy5saW5lc1t5MV0gPSBsaW5lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbF9kb3duKHRvcCwgYm90dG9tLCB1c2VfZXJhc2VfY2hhcilcbiAgICB7XG4gICAgICAgIHZhciB5LCBsaW5lLCB5MSwgeTI7XG4gICAgICAgIFxuICAgICAgICBpZiAodG9wID09IDAgJiYgYm90dG9tID09IHMuaCkge1xuICAgICAgICAgICAgLyogaW5jcmVhc2UgaGVpZ2h0IG9mIGJ1ZmZlciBpZiBwb3NzaWJsZSAqL1xuICAgICAgICAgICAgaWYgKHMuY3VyX2ggPCBzLnRvdF9oKSB7XG4gICAgICAgICAgICAgICAgcy5jdXJfaCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogbW92ZSBkb3duIG9uZSBsaW5lICovXG4gICAgICAgICAgICBpZiAoKytzLnlfYmFzZSA9PSBzLmN1cl9oKVxuICAgICAgICAgICAgICAgIHMueV9iYXNlID0gMDtcbiAgICAgICAgICAgIHMueV9kaXNwID0gcy55X2Jhc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKiBwYXJ0aWFsIHNjcm9sbCAqL1xuICAgICAgICAgICAgZm9yKHkgPSB0b3A7IHkgPCBib3R0b20gLSAxOyB5KyspIHtcbiAgICAgICAgICAgICAgICB5MSA9IHMueV9iYXNlICsgeTtcbiAgICAgICAgICAgICAgICBpZiAoeTEgPj0gcy5jdXJfaClcbiAgICAgICAgICAgICAgICAgICAgeTEgLT0gcy5jdXJfaDtcbiAgICAgICAgICAgICAgICB5MiA9IHkxICsgMTtcbiAgICAgICAgICAgICAgICBpZiAoeTIgPj0gcy5jdXJfaClcbiAgICAgICAgICAgICAgICAgICAgeTIgLT0gcy5jdXJfaDtcbiAgICAgICAgICAgICAgICBzLmxpbmVzW3kxXSA9IHMubGluZXNbeTJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVtcHR5X2xpbmUoYm90dG9tIC0gMSwgdXNlX2VyYXNlX2NoYXIpO1xuICAgICAgICB1cGRhdGUodG9wKTtcbiAgICAgICAgdXBkYXRlKGJvdHRvbSAtIDEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbF91cCh0b3AsIGJvdHRvbSwgdXNlX2VyYXNlX2NoYXIpIHtcbiAgICAgICAgdmFyIHksIHkxLCB5MjtcbiAgICAgICAgLyogWFhYOiBjb3VsZCBzY3JvbGwgaW4gdGhlIGhpc3RvcnkgKi9cbiAgICAgICAgZm9yKHkgPSBib3R0b20gLSAxOyB5ID4gdG9wOyB5LS0pIHtcbiAgICAgICAgICAgIHkxID0gcy55X2Jhc2UgKyB5O1xuICAgICAgICAgICAgaWYgKHkxID49IHMuY3VyX2gpXG4gICAgICAgICAgICAgICAgeTEgLT0gcy5jdXJfaDtcbiAgICAgICAgICAgIHkyID0geTEgLSAxO1xuICAgICAgICAgICAgaWYgKHkyID49IHMuY3VyX2gpXG4gICAgICAgICAgICAgICAgeTIgLT0gcy5jdXJfaDtcbiAgICAgICAgICAgIHMubGluZXNbeTFdID0gcy5saW5lc1t5Ml07XG4gICAgICAgIH1cbiAgICAgICAgZW1wdHlfbGluZSh0b3AsIHVzZV9lcmFzZV9jaGFyKTtcbiAgICAgICAgdXBkYXRlKHRvcCk7XG4gICAgICAgIHVwZGF0ZShib3R0b20gLSAxKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZG93bl93aXRoX3Njcm9sbCgpIHtcbiAgICAgICAgcy55Kys7XG4gICAgICAgIHMueCA9IDA7XG4gICAgICAgIGlmIChzLnkgPT0gcy5zY3JvbGxfYm90dG9tKSB7XG4gICAgICAgICAgICBzLnktLTtcbiAgICAgICAgICAgIHNjcm9sbF9kb3duKHMuc2Nyb2xsX3RvcCwgcy5zY3JvbGxfYm90dG9tLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAocy55ID49IHMuaCkge1xuICAgICAgICAgICAgcy55LS07XG4gICAgICAgICAgICBzY3JvbGxfZG93bigwLCBzLmgsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwX3dpdGhfc2Nyb2xsKCkge1xuICAgICAgICBpZiAocy55ID09IHMuc2Nyb2xsX3RvcCkge1xuICAgICAgICAgICAgc2Nyb2xsX3VwKHMuc2Nyb2xsX3RvcCwgcy5zY3JvbGxfYm90dG9tLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChzLnkgPT0gMCkge1xuICAgICAgICAgICAgc2Nyb2xsX3VwKDAsIHMuaCwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzLnktLTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc2VydF9saW5lcyhuKSB7XG4gICAgICAgIHZhciB5MjtcbiAgICAgICAgaWYgKG4gPCAxKVxuICAgICAgICAgICAgbiA9IDE7XG4gICAgICAgIGlmIChzLnkgPCBzLnNjcm9sbF9ib3R0b20pXG4gICAgICAgICAgICB5MiA9IHMuc2Nyb2xsX2JvdHRvbTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgeTIgPSBzLmg7XG4gICAgICAgIHdoaWxlIChuICE9IDApIHtcbiAgICAgICAgICAgIHNjcm9sbF91cChzLnksIHkyLCB0cnVlKTtcbiAgICAgICAgICAgIG4tLTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZV9saW5lcyhuKSB7XG4gICAgICAgIHZhciB5MjtcbiAgICAgICAgaWYgKG4gPCAxKVxuICAgICAgICAgICAgbiA9IDE7XG4gICAgICAgIGlmIChzLnkgPCBzLnNjcm9sbF9ib3R0b20pXG4gICAgICAgICAgICB5MiA9IHMuc2Nyb2xsX2JvdHRvbTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgeTIgPSBzLmg7XG4gICAgICAgIHdoaWxlIChuICE9IDApIHtcbiAgICAgICAgICAgIHNjcm9sbF9kb3duKHMueSwgeTIsIHRydWUpO1xuICAgICAgICAgICAgbi0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHZhciBUVFlfU1RBVEVfTk9STSA9IDA7XG4gICAgdmFyIFRUWV9TVEFURV9FU0MgPSAxO1xuICAgIHZhciBUVFlfU1RBVEVfQ1NJID0gMjtcbiAgICB2YXIgVFRZX1NUQVRFX0NIQVJTRVQgPSAzO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlX2NoYXIoYykge1xuICAgICAgICB2YXIgaSwgbCwgbiwgaiwgeTEsIHkyLCB4MTtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaChzLnN0YXRlKSB7XG4gICAgICAgIGNhc2UgVFRZX1NUQVRFX05PUk06XG4gICAgICAgICAgICBzd2l0Y2goYykge1xuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICBkb3duX3dpdGhfc2Nyb2xsKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgIHMueCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgaWYgKHMueCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcy54LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OiAvKiB0YWIgKi9cbiAgICAgICAgICAgICAgICBuID0gKHMueCArIDgpICYgfjc7XG4gICAgICAgICAgICAgICAgaWYgKG4gPD0gcy53KSB7XG4gICAgICAgICAgICAgICAgICAgIHMueCA9IG47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICAgICAgICBzLnN0YXRlID0gVFRZX1NUQVRFX0VTQztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKGMgPj0gMzIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMueCA+PSBzLncpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMueCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3duX3dpdGhfc2Nyb2xsKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeTEgPSBzLnkgKyBzLnlfYmFzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHkxID49IHMuY3VyX2gpXG4gICAgICAgICAgICAgICAgICAgICAgICB5MSAtPSBzLmN1cl9oO1xuICAgICAgICAgICAgICAgICAgICBzLmxpbmVzW3kxXVtzLnhdID0gKGMgJiAweGZmZmYpIHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAocy5jdXJfYXR0ciA8PCAxNik7XG4gICAgICAgICAgICAgICAgICAgIHMueCsrO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGUocy55KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBUVFlfU1RBVEVfRVNDOlxuICAgICAgICAgICAgc3dpdGNoKGMpIHtcbiAgICAgICAgICAgIGNhc2UgOTE6IC8vICdbJ1xuICAgICAgICAgICAgICAgIHMuZXNjX3BhcmFtcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgICAgIHMuY3VyX3BhcmFtID0gMDtcbiAgICAgICAgICAgICAgICBzLmVzY19wcmVmaXggPSAwO1xuICAgICAgICAgICAgICAgIHMuc3RhdGUgPSBUVFlfU1RBVEVfQ1NJO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0MDogLy8gJygnXG4gICAgICAgICAgICBjYXNlIDQxOiAvLyAnKSdcbiAgICAgICAgICAgICAgICBzLnN0YXRlID0gVFRZX1NUQVRFX0NIQVJTRVQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDYxOiAvLyAnPSdcbiAgICAgICAgICAgICAgICBzLmFwcGxpY2F0aW9uX2tleXBhZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcy5zdGF0ZSA9IFRUWV9TVEFURV9OT1JNO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2MjogLy8gJz4nXG4gICAgICAgICAgICAgICAgcy5hcHBsaWNhdGlvbl9rZXlwYWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzLnN0YXRlID0gVFRZX1NUQVRFX05PUk07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDc3OiAvLyAnTSdcbiAgICAgICAgICAgICAgICB1cF93aXRoX3Njcm9sbCgpO1xuICAgICAgICAgICAgICAgIHMuc3RhdGUgPSBUVFlfU1RBVEVfTk9STTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcy5zdGF0ZSA9IFRUWV9TVEFURV9OT1JNO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVFRZX1NUQVRFX0NTSTpcbiAgICAgICAgICAgIGlmIChjID49IDQ4ICYmIGMgPD0gNTcpIHsgLy8gJzAnICc5J1xuICAgICAgICAgICAgICAgIC8qIG51bWVyaWMgKi9cbiAgICAgICAgICAgICAgICBzLmN1cl9wYXJhbSA9IHMuY3VyX3BhcmFtICogMTAgKyBjIC0gNDg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjID09IDYzKSB7IC8vICc/J1xuICAgICAgICAgICAgICAgICAgICBzLmVzY19wcmVmaXggPSBjO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyogYWRkIHBhcnNlZCBwYXJhbWV0ZXIgKi9cbiAgICAgICAgICAgICAgICBzLmVzY19wYXJhbXNbcy5lc2NfcGFyYW1zLmxlbmd0aF0gPSBzLmN1cl9wYXJhbTtcbiAgICAgICAgICAgICAgICBzLmN1cl9wYXJhbSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKGMgPT0gNTkpIC8vIDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgcy5zdGF0ZSA9IFRUWV9TVEFURV9OT1JNO1xuXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXJtOiBjc2k9XCIgKyBzLmVzY19wYXJhbXMgKyBcIiBjbWQ9XCIrYyk7XG4gICAgICAgICAgICAgICAgc3dpdGNoKGMpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDY0OiAvLyAnQCcgaW5zZXJ0IGNoYXJzXG4gICAgICAgICAgICAgICAgICAgIGluc2VydF9jaGFycyhzLmVzY19wYXJhbXNbMF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDY1OiAvLyAnQScgdXBcbiAgICAgICAgICAgICAgICAgICAgbiA9IHMuZXNjX3BhcmFtc1swXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gPCAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHMueSAtPSBuO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy55IDwgMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHMueSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNjY6IC8vICdCJyBkb3duXG4gICAgICAgICAgICAgICAgICAgIG4gPSBzLmVzY19wYXJhbXNbMF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChuIDwgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gPSAxO1xuICAgICAgICAgICAgICAgICAgICBzLnkgKz0gbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMueSA+PSBzLmgpXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnkgPSBzLmggLSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDY3OiAvLyAnQycgcmlnaHRcbiAgICAgICAgICAgICAgICAgICAgbiA9IHMuZXNjX3BhcmFtc1swXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gPCAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHMueCArPSBuO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy54ID49IHMudyAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnggPSBzLncgLSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDY4OiAvLyAnRCcgbGVmdFxuICAgICAgICAgICAgICAgICAgICBuID0gcy5lc2NfcGFyYW1zWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobiA8IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBuID0gMTtcbiAgICAgICAgICAgICAgICAgICAgcy54IC09IG47XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnggPCAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgcy54ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA3MTogLyogJ0cnIGN1cnNvciBjaGFyYWN0ZXIgYWJzb2x1dGUgKi9cbiAgICAgICAgICAgICAgICAgICAgeDEgPSBzLmVzY19wYXJhbXNbMF0gLSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeDEgPCAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgeDEgPSAwO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh4MSA+PSBzLncpXG4gICAgICAgICAgICAgICAgICAgICAgICB4MSA9IHMudyAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHMueCA9IHgxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDcyOiAvLyAnSCcgZ290byB4eVxuICAgICAgICAgICAgICAgICAgICB5MSA9IHMuZXNjX3BhcmFtc1swXSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmVzY19wYXJhbXMubGVuZ3RoID49IDIpXG4gICAgICAgICAgICAgICAgICAgICAgICB4MSA9IHMuZXNjX3BhcmFtc1sxXSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHkxIDwgMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoeTEgPj0gcy5oKVxuICAgICAgICAgICAgICAgICAgICAgICAgeTEgPSBzLmggLSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeDEgPCAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgeDEgPSAwO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh4MSA+PSBzLncpXG4gICAgICAgICAgICAgICAgICAgICAgICB4MSA9IHMudyAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHMueCA9IHgxO1xuICAgICAgICAgICAgICAgICAgICBzLnkgPSB5MTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA3NDogLy8gJ0onIGVyYXNlIGluIGRpc3BsYXlcbiAgICAgICAgICAgICAgICAgICAgZXJhc2VfaW5fZGlzcGxheShzLmVzY19wYXJhbXNbMF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDc1OiAvLyAnSycgZXJhc2UgaW4gbGluZVxuICAgICAgICAgICAgICAgICAgICBlcmFzZV9pbl9saW5lKHMuZXNjX3BhcmFtc1swXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNzY6IC8vICdMJyBpbnNlcnQgbGluZXNcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0X2xpbmVzKHMuZXNjX3BhcmFtc1swXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNzc6IC8vICdNJyBpbnNlcnQgbGluZXNcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlX2xpbmVzKHMuZXNjX3BhcmFtc1swXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgODA6IC8vICdQJ1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVfY2hhcnMocy5lc2NfcGFyYW1zWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxMDA6IC8vICdkJyBsaW5lIHBvc2l0aW9uIGFic29sdXRlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxID0gcy5lc2NfcGFyYW1zWzBdIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5MSA8IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTEgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoeTEgPj0gcy5oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkxID0gcy5oIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMueSA9IHkxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTA0OiAvLyAnaCc6IHNldCBtb2RlXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmVzY19wcmVmaXggPT0gNjMgJiYgcy5lc2NfcGFyYW1zWzBdID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYXBwbGljYXRpb25fY3Vyc29yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDEwODogLy8gJ2wnOiByZXNldCBtb2RlXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmVzY19wcmVmaXggPT0gNjMgJiYgcy5lc2NfcGFyYW1zWzBdID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuYXBwbGljYXRpb25fY3Vyc29yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxMDk6IC8vICdtJzogc2V0IGNvbG9yXG4gICAgICAgICAgICAgICAgICAgIGNzaV9jb2xvcnMocy5lc2NfcGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxMTA6IC8vICduJyByZXR1cm4gdGhlIGN1cnNvciBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICBzLnF1ZXVlX2NoYXJzKFwiXFx4MWJbXCIgKyAocy55ICsgMSkgKyBcIjtcIiArIChzLnggKyAxKSArIFwiUlwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxMTQ6IC8vICdyJyBzZXQgc2Nyb2xsIHJlZ2lvblxuICAgICAgICAgICAgICAgICAgICB5MSA9IHMuZXNjX3BhcmFtc1swXSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGlmICh5MSA8IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB5MSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHkxID49IHMuaClcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxID0gcy5oIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuZXNjX3BhcmFtcy5sZW5ndGggPj0gMilcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyID0gcy5lc2NfcGFyYW1zWzFdO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB5MiA9IHMuaDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHkyID49IHMuaCB8fCB5MiA8PSB5MSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyID0gcy5oO1xuICAgICAgICAgICAgICAgICAgICBzLnNjcm9sbF90b3AgPSB5MTtcbiAgICAgICAgICAgICAgICAgICAgcy5zY3JvbGxfYm90dG9tID0geTI7XG4gICAgICAgICAgICAgICAgICAgIHMueCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHMueSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFRUWV9TVEFURV9DSEFSU0VUOlxuICAgICAgICAgICAgLyoganVzdCBpZ25vcmUgKi9cbiAgICAgICAgICAgIHMuc3RhdGUgPSBUVFlfU1RBVEVfTk9STTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlX3V0ZjgoYykge1xuICAgICAgICBpZiAocy51dGY4X3N0YXRlICE9PSAwICYmIChjID49IDB4ODAgJiYgYyA8IDB4YzApKSB7XG4gICAgICAgICAgICBzLnV0ZjhfdmFsID0gKHMudXRmOF92YWwgPDwgNikgfCAoYyAmIDB4M0YpO1xuICAgICAgICAgICAgcy51dGY4X3N0YXRlLS07XG4gICAgICAgICAgICBpZiAocy51dGY4X3N0YXRlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlX2NoYXIocy51dGY4X3ZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoYyA+PSAweGMwICYmIGMgPCAweGY4KSB7XG4gICAgICAgICAgICBzLnV0Zjhfc3RhdGUgPSAxICsgKGMgPj0gMHhlMCkgKyAoYyA+PSAweGYwKTtcbiAgICAgICAgICAgIHMudXRmOF92YWwgPSBjICYgKCgxIDw8ICg2IC0gcy51dGY4X3N0YXRlKSkgLSAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHMudXRmOF9zdGF0ZSA9IDA7XG4gICAgICAgICAgICBoYW5kbGVfY2hhcihjKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB2YXIgaSwgYywgdXRmODtcblxuICAgIC8qIHVwZGF0ZSByZWdpb24gaXMgaW4geW1pbiB5bWF4ICovXG4gICAgcyA9IHRoaXM7XG4gICAgeW1pbiA9IHMuaDtcbiAgICB5bWF4ID0gLTE7XG4gICAgdXBkYXRlKHMueSk7IC8vIHJlbW92ZSB0aGUgY3Vyc29yXG4gICAgLyogcmVzZXQgdG9wIG9mIGRpc3BsYXllZCBzY3JlZW4gdG8gdG9wIG9mIHJlYWwgc2NyZWVuICovXG4gICAgaWYgKHMueV9iYXNlICE9IHMueV9kaXNwKSB7XG4gICAgICAgIHMueV9kaXNwID0gcy55X2Jhc2U7XG4gICAgICAgIC8qIGZvcmNlIHJlZHJhdyAqL1xuICAgICAgICB5bWluID0gMDtcbiAgICAgICAgeW1heCA9IHMuaCAtIDE7XG4gICAgfVxuICAgIHV0ZjggPSBzLnV0Zjg7XG4gICAgZm9yKGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKHV0ZjgpXG4gICAgICAgICAgICBoYW5kbGVfdXRmOChjKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgaGFuZGxlX2NoYXIoYyk7XG4gICAgfVxuICAgIHVwZGF0ZShzLnkpOyAvLyBzaG93IHRoZSBjdXJzb3JcblxuICAgIGlmICh5bWF4ID49IHltaW4pXG4gICAgICAgIHMucmVmcmVzaCh5bWluLCB5bWF4KTtcbn07XG5cblRlcm0ucHJvdG90eXBlLndyaXRlbG4gPSBmdW5jdGlvbiAoc3RyKVxue1xuICAgIHRoaXMud3JpdGUoc3RyICsgJ1xcclxcbicpO1xufTtcblxuVGVybS5wcm90b3R5cGUuaW50ZXJjZXB0QnJvd3NlckV4aXQgPSBmdW5jdGlvbiAoZXYpXG57XG4gICAgLyogQXQgbGVhc3QgYXZvaWQgZXhpdGluZyB0aGUgbmF2aWdhdG9yIGlmIEN0cmwtUSBvciBDdHJsLVcgYXJlXG4gICAgICogcHJlc3NlZCAqL1xuICAgIGlmIChldi5jdHJsS2V5KSB7XG4gICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBcIkNUUkwtVyBvciBDdHJsLVEgY2Fubm90IGJlIHNlbnQgdG8gdGhlIGVtdWxhdG9yLlwiO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IG51bGw7XG4gICAgfVxufVxuXG5UZXJtLnByb3RvdHlwZS5rZXlEb3duSGFuZGxlciA9IGZ1bmN0aW9uIChldilcbntcbiAgICB2YXIgc3RyO1xuXG4gICAgdGhpcy5pbnRlcmNlcHRCcm93c2VyRXhpdChldik7XG4gICAgXG4gICAgc3RyPVwiXCI7XG4gICAgc3dpdGNoKGV2LmtleUNvZGUpIHtcbiAgICBjYXNlIDg6IC8qIGJhY2tzcGFjZSAqL1xuICAgICAgICBzdHIgPSBcIlxceDdmXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgOTogLyogdGFiICovXG4gICAgICAgIHN0ciA9IFwiXFx4MDlcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAxMzogLyogZW50ZXIgKi9cbiAgICAgICAgc3RyID0gXCJcXHgwZFwiO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIDI3OiAvKiBlc2NhcGUgKi9cbiAgICAgICAgc3RyID0gXCJcXHgxYlwiO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIDM3OiAvKiBsZWZ0ICovXG4gICAgICAgIGlmIChldi5jdHJsS2V5KSB7XG4gICAgICAgICAgICBzdHIgPSBcIlxceDFiWzE7NURcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFwcGxpY2F0aW9uX2N1cnNvcikge1xuICAgICAgICAgICAgc3RyID0gXCJcXHgxYk9EXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHIgPSBcIlxceDFiW0RcIjtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICBjYXNlIDM5OiAvKiByaWdodCAqL1xuICAgICAgICBpZiAoZXYuY3RybEtleSkge1xuICAgICAgICAgICAgc3RyID0gXCJcXHgxYlsxOzVDXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hcHBsaWNhdGlvbl9jdXJzb3IpIHtcbiAgICAgICAgICAgIHN0ciA9IFwiXFx4MWJPQ1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyID0gXCJcXHgxYltDXCI7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAzODogLyogdXAgKi9cbiAgICAgICAgaWYgKGV2LmN0cmxLZXkpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsX2Rpc3AoLTEpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXBwbGljYXRpb25fY3Vyc29yKSB7XG4gICAgICAgICAgICBzdHIgPSBcIlxceDFiT0FcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0ciA9IFwiXFx4MWJbQVwiO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDA6IC8qIGRvd24gKi9cbiAgICAgICAgaWYgKGV2LmN0cmxLZXkpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsX2Rpc3AoMSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hcHBsaWNhdGlvbl9jdXJzb3IpIHtcbiAgICAgICAgICAgIHN0ciA9IFwiXFx4MWJPQlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyID0gXCJcXHgxYltCXCI7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSA0NjogLyogZGVsZXRlICovXG4gICAgICAgIHN0ciA9IFwiXFx4MWJbM35cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSA0NTogLyogaW5zZXJ0ICovXG4gICAgICAgIHN0ciA9IFwiXFx4MWJbMn5cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAzNjogLyogaG9tZSAqL1xuICAgICAgICBpZiAodGhpcy5saW51eF9jb25zb2xlKVxuICAgICAgICAgICAgc3RyID0gXCJcXHgxYlsxflwiO1xuICAgICAgICBlbHNlIGlmICh0aGlzLmFwcGxpY2F0aW9uX2tleXBhZClcbiAgICAgICAgICAgIHN0ciA9IFwiXFx4MWJPSFwiO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzdHIgPSBcIlxceDFiW0hcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAzNTogLyogZW5kICovXG4gICAgICAgIGlmICh0aGlzLmxpbnV4X2NvbnNvbGUpXG4gICAgICAgICAgICBzdHIgPSBcIlxceDFiWzR+XCI7XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYXBwbGljYXRpb25fa2V5cGFkKVxuICAgICAgICAgICAgc3RyID0gXCJcXHgxYk9GXCI7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHN0ciA9IFwiXFx4MWJbRlwiO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIDMzOiAvKiBwYWdlIHVwICovXG4gICAgICAgIGlmIChldi5jdHJsS2V5KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbF9kaXNwKC0odGhpcy5oIC0gMSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyID0gXCJcXHgxYls1flwiO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzQ6IC8qIHBhZ2UgZG93biAqL1xuICAgICAgICBpZiAoZXYuY3RybEtleSkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxfZGlzcCh0aGlzLmggLSAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0ciA9IFwiXFx4MWJbNn5cIjtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoZXYuY3RybEtleSkge1xuICAgICAgICAgICAgLyogY3RybCArIGtleSAqL1xuICAgICAgICAgICAgaWYgKGV2LmtleUNvZGUgPj0gNjUgJiYgZXYua2V5Q29kZSA8PSA5MCkge1xuICAgICAgICAgICAgICAgIHN0ciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZXYua2V5Q29kZSAtIDY0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXYua2V5Q29kZSA9PSAzMikge1xuICAgICAgICAgICAgICAgIHN0ciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoKCF0aGlzLmlzX21hYyAmJiBldi5hbHRLZXkpIHx8XG4gICAgICAgICAgICAgICAgICAgKHRoaXMuaXNfbWFjICYmIGV2Lm1ldGFLZXkpKSB7XG4gICAgICAgICAgICAvKiBtZXRhICsga2V5IChOb3RlOiB3ZSBvbmx5IHNlbmQgbG93ZXIgY2FzZSkgKi9cbiAgICAgICAgICAgIGlmIChldi5rZXlDb2RlID49IDY1ICYmIGV2LmtleUNvZGUgPD0gOTApIHtcbiAgICAgICAgICAgICAgICBzdHIgPSBcIlxceDFiXCIgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2LmtleUNvZGUgKyAzMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vICAgIGNvbnNvbGUubG9nKFwia2V5ZG93bjoga2V5Y29kZT1cIiArIGV2LmtleUNvZGUgKyBcIiBjaGFyY29kZT1cIiArIGV2LmNoYXJDb2RlICsgXCIgc3RyPVwiICsgc3RyICsgXCIgY3RybD1cIiArIGV2LmN0cmxLZXkgKyBcIiBhbHQ9XCIgKyBldi5hbHRLZXkgKyBcIiBtZXRhPVwiICsgZXYubWV0YUtleSk7XG4gICAgaWYgKHN0cikge1xuICAgICAgICBpZiAoZXYuc3RvcFByb3BhZ2F0aW9uKVxuICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmIChldi5wcmV2ZW50RGVmYXVsdClcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5zaG93X2N1cnNvcigpO1xuICAgICAgICB0aGlzLmtleV9yZXBfc3RhdGUgPSAxO1xuICAgICAgICB0aGlzLmtleV9yZXBfc3RyID0gc3RyO1xuICAgICAgICB0aGlzLmhhbmRsZXIoc3RyKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMua2V5X3JlcF9zdGF0ZSA9IDA7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn07XG5cblRlcm0ucHJvdG90eXBlLmtleVVwSGFuZGxlciA9IGZ1bmN0aW9uIChldilcbntcbiAgICB0aGlzLmludGVyY2VwdEJyb3dzZXJFeGl0KGV2KTtcbn07XG5cblRlcm0ucHJvdG90eXBlLnRvX3V0ZjggPSBmdW5jdGlvbihzKVxue1xuICAgIHZhciBpLCBuID0gcy5sZW5ndGgsIHIsIGM7XG4gICAgciA9IFwiXCI7XG4gICAgZm9yKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGMgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjIDwgMHg4MCkge1xuICAgICAgICAgICAgciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKGMgPCAweDgwMCkge1xuICAgICAgICAgICAgciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDYpIHwgMHhjMCwgKGMgJiAweDNmKSB8IDB4ODApO1xuICAgICAgICB9IGVsc2UgaWYgKGMgPCAweDEwMDAwKSB7XG4gICAgICAgICAgICByICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gMTIpIHwgMHhlMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGMgPj4gNikgJiAweDNmKSB8IDB4ODAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGMgJiAweDNmKSB8IDB4ODApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDE4KSB8IDB4ZjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChjID4+IDEyKSAmIDB4M2YpIHwgMHg4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGMgPj4gNikgJiAweDNmKSB8IDB4ODAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGMgJiAweDNmKSB8IDB4ODApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByO1xufVxuXG5UZXJtLnByb3RvdHlwZS5pbnB1dEhhbmRsZXIgPSBmdW5jdGlvbiAoZXYpXG57XG4gICAgdmFyIHN0cjtcbiAgICBzdHIgPSB0aGlzLnRleHRhcmVhX2VsLnZhbHVlO1xuICAgIGlmIChzdHIpIHtcbiAgICAgICAgdGhpcy50ZXh0YXJlYV9lbC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuc2hvd19jdXJzb3IoKTtcbiAgICAgICAgaWYgKHRoaXMudXRmOClcbiAgICAgICAgICAgIHN0ciA9IHRoaXMudG9fdXRmOChzdHIpO1xuICAgICAgICB0aGlzLmhhbmRsZXIoc3RyKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn07XG5cblRlcm0ucHJvdG90eXBlLnRlcm1LZXlEb3duSGFuZGxlciA9IGZ1bmN0aW9uKGV2KVxue1xuICAgIHRoaXMuaW50ZXJjZXB0QnJvd3NlckV4aXQoZXYpO1xuICAgIC8qIGdpdmUgdGhlIGZvY3VzIGJhY2sgdG8gdGhlIHRleHRhcmVhIHdoZW4gYSBrZXkgaXMgcHJlc3NlZCAqL1xuICAgIHRoaXMudGV4dGFyZWFfZWwuZm9jdXMoKTtcbn1cblxuVGVybS5wcm90b3R5cGUudGVybU1vdXNlVXBIYW5kbGVyID0gZnVuY3Rpb24oZXYpXG57XG4gICAgdmFyIHNlbDtcbiAgICAvKiBpZiBubyBzZWxlY3Rpb24sIGNhbiBzd2l0Y2ggYmFjayB1cCB0byB0aGUgdGV4dGFyZWEgZm9jdXMgKi9cbiAgICBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgaWYgKCFzZWwgfHwgc2VsLmlzQ29sbGFwc2VkKVxuICAgICAgICB0aGlzLnRleHRhcmVhX2VsLmZvY3VzKCk7XG59XG5cblRlcm0ucHJvdG90eXBlLmZvY3VzSGFuZGxlciA9IGZ1bmN0aW9uIChldilcbntcbiAgICB0aGlzLnRleHRhcmVhX2hhc19mb2N1cyA9IHRydWU7XG59O1xuXG5UZXJtLnByb3RvdHlwZS5ibHVySGFuZGxlciA9IGZ1bmN0aW9uIChldilcbntcbiAgICAvKiBhbGxvdyB1bmxvYWRpbmcgdGhlIHBhZ2UgKi9cbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBudWxsO1xuICAgIHRoaXMudGV4dGFyZWFfaGFzX2ZvY3VzID0gZmFsc2U7XG59O1xuXG5UZXJtLnByb3RvdHlwZS5wYXN0ZUhhbmRsZXIgPSBmdW5jdGlvbiAoZXYpXG57XG4gICAgdmFyIGMsIHN0cjtcbiAgICBpZiAoIXRoaXMudGV4dGFyZWFfaGFzX2ZvY3VzKSB7XG4gICAgICAgIGMgPSBldi5jbGlwYm9hcmREYXRhO1xuICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgc3RyID0gYy5nZXREYXRhKFwidGV4dC9wbGFpblwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnV0ZjgpXG4gICAgICAgICAgICAgICAgc3RyID0gdGhpcy50b191dGY4KHN0cik7XG4gICAgICAgICAgICB0aGlzLnF1ZXVlX2NoYXJzKHN0cik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblRlcm0ucHJvdG90eXBlLndoZWVsSGFuZGxlciA9IGZ1bmN0aW9uIChldilcbntcbiAgICBpZiAoZXYuZGVsdGFZIDwgMClcbiAgICAgICAgdGhpcy5zY3JvbGxfZGlzcCgtMyk7XG4gICAgZWxzZSBpZiAoZXYuZGVsdGFZID4gMClcbiAgICAgICAgdGhpcy5zY3JvbGxfZGlzcCgzKTtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuVGVybS5wcm90b3R5cGUubW91c2VEb3duSGFuZGxlciA9IGZ1bmN0aW9uIChldilcbntcbiAgICB0aGlzLnRodW1iX2VsLm9ubW91c2V1cCA9IHRoaXMubW91c2VVcEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IHRoaXMubW91c2VVcEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIC8qIGRpc2FibGUgcG90ZW50aWFsIHNlbGVjdGlvbiAqL1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lICs9IFwiIG5vU2VsZWN0XCI7XG4gICAgXG4gICAgdGhpcy5tb3VzZU1vdmVIYW5kbGVyKGV2KTtcbn1cblxuVGVybS5wcm90b3R5cGUubW91c2VNb3ZlSGFuZGxlciA9IGZ1bmN0aW9uIChldilcbntcbiAgICB2YXIgdG90YWxfc2l6ZSwgcG9zLCBuZXdfeV9kaXNwLCB5LCB5MDtcbiAgICB0b3RhbF9zaXplID0gdGhpcy50ZXJtX2VsLmNsaWVudEhlaWdodDtcbiAgICB5ID0gZXYuY2xpZW50WSAtIHRoaXMudHJhY2tfZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIHBvcyA9IE1hdGguZmxvb3IoKHkgLSAodGhpcy50aHVtYl9zaXplIC8gMikpICogdGhpcy5jdXJfaCAvIHRvdGFsX3NpemUpO1xuICAgIG5ld195X2Rpc3AgPSBNYXRoLm1pbihNYXRoLm1heChwb3MsIDApLCB0aGlzLmN1cl9oIC0gdGhpcy5oKTtcbiAgICAvKiBwb3NpdGlvbiBvZiB0aGUgZmlyc3QgbGluZSBvZiB0aGUgc2Nyb2xsIGJhY2sgYnVmZmVyICovXG4gICAgeTAgPSAodGhpcy55X2Jhc2UgKyB0aGlzLmgpICUgdGhpcy5jdXJfaDtcbiAgICBuZXdfeV9kaXNwICs9IHkwO1xuICAgIGlmIChuZXdfeV9kaXNwID49IHRoaXMuY3VyX2gpXG4gICAgICAgIG5ld195X2Rpc3AgLT0gdGhpcy5jdXJfaDtcbiAgICBpZiAobmV3X3lfZGlzcCAhPSB0aGlzLnlfZGlzcCkge1xuICAgICAgICB0aGlzLnlfZGlzcCA9IG5ld195X2Rpc3A7XG4gICAgICAgIHRoaXMucmVmcmVzaCgwLCB0aGlzLmggLSAxKTtcbiAgICB9XG59XG5cblRlcm0ucHJvdG90eXBlLm1vdXNlVXBIYW5kbGVyID0gZnVuY3Rpb24gKGV2KVxue1xuICAgIHRoaXMudGh1bWJfZWwub25tb3VzZXVwID0gbnVsbDtcbiAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xuICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoXCIgbm9TZWxlY3RcIiwgXCJcIik7XG59XG5cbi8qIG91dHB1dCBxdWV1ZSB0byBzZW5kIGJhY2sgYXN5bmNocm9ub3VzIHJlc3BvbnNlcyAqL1xuVGVybS5wcm90b3R5cGUucXVldWVfY2hhcnMgPSBmdW5jdGlvbiAoc3RyKVxue1xuICAgIHRoaXMub3V0cHV0X3F1ZXVlICs9IHN0cjtcbiAgICBpZiAodGhpcy5vdXRwdXRfcXVldWUpXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5vdXRwdXRIYW5kbGVyLmJpbmQodGhpcyksIDApO1xufTtcblxuVGVybS5wcm90b3R5cGUub3V0cHV0SGFuZGxlciA9IGZ1bmN0aW9uICgpXG57XG4gICAgaWYgKHRoaXMub3V0cHV0X3F1ZXVlKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcih0aGlzLm91dHB1dF9xdWV1ZSk7XG4gICAgICAgIHRoaXMub3V0cHV0X3F1ZXVlID0gXCJcIjtcbiAgICB9XG59O1xuXG5UZXJtLnByb3RvdHlwZS5nZXRTaXplID0gZnVuY3Rpb24gKClcbntcbiAgICByZXR1cm4gW3RoaXMudywgdGhpcy5oXTtcbn07XG5cbi8qIHJlc2l6ZSB0aGUgdGVybWluYWwgKHNpemUgaW4gcGl4ZWxzKS4gUmV0dXJuIHRydWUgaWYgdGhlIGRpc3BsYXlcbiAgIHNpemUgd2FzIG1vZGlmaWVkLiAqL1xuLyogWFhYOiBtYXkgYmUgc2ltcGxlciB0byBzZXBhcmF0ZSB0aGUgc2Nyb2xsYmFjayBidWZmZXIgZnJvbSB0aGVcbiAgIHNjcmVlbiBidWZmZXIgKi9cblRlcm0ucHJvdG90eXBlLnJlc2l6ZVBpeGVsID0gZnVuY3Rpb24gKG5ld193aWR0aCwgbmV3X2hlaWdodClcbntcbiAgICB2YXIgbmV3X3csIG5ld19oLCB5LCB4LCBsaW5lLCBjLCByb3dfZWwsIGQsIG5ld19jdXJfaCwgZTtcbiAgICBcbiAgICBpZiAobmV3X3dpZHRoID09IHRoaXMudGVybV93aWR0aCAmJiBuZXdfaGVpZ2h0ID09IHRoaXMudGVybV9oZWlnaHQpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBuZXdfdyA9IE1hdGguZmxvb3IoKG5ld193aWR0aCAtIHRoaXMuc2Nyb2xsYmFyX3dpZHRoKSAvXG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcl93aWR0aCk7XG4gICAgbmV3X2ggPSBNYXRoLmZsb29yKG5ld19oZWlnaHQgLyB0aGlzLmNoYXJfaGVpZ2h0KTtcbiAgICBpZiAobmV3X3cgPD0gMCB8fCBuZXdfaCA8PSAwIHx8IG5ld19oID4gdGhpcy50b3RfaClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIFxuICAgIHRoaXMudGVybV93aWR0aCA9IG5ld193aWR0aDtcbiAgICB0aGlzLnRlcm1faGVpZ2h0ID0gbmV3X2hlaWdodDtcbiAgICB0aGlzLnRlcm1fZWwuc3R5bGUud2lkdGggPSB0aGlzLnRlcm1fd2lkdGggKyBcInB4XCI7XG4gICAgdGhpcy50ZXJtX2VsLnN0eWxlLmhlaWdodCA9IHRoaXMudGVybV9oZWlnaHQgKyBcInB4XCI7XG5cbiAgICAvKiBYWFg6IGNvdWxkIGtlZXAgdGhlIEVPTCBwb3NpdGlvbnMgKi9cbiAgICBpZiAobmV3X3cgPCB0aGlzLncpIHtcbiAgICAgICAgLyogcmVkdWNlIHRoZSBsaW5lIHdpZHRoICovXG4gICAgICAgIGZvcih5ID0gMDsgeSA8IHRoaXMuY3VyX2g7eSsrKSB7XG4gICAgICAgICAgICBsaW5lID0gdGhpcy5saW5lc1t5XTtcbiAgICAgICAgICAgIGxpbmUgPSBsaW5lLnNsaWNlKDAsIG5ld193KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAobmV3X3cgPiB0aGlzLncpIHtcbiAgICAgICAgLyogaW5jcmVhc2UgdGhlIGxpbmUgd2lkdGggKi9cbiAgICAgICAgYyA9IDMyIHwgKHRoaXMuZGVmX2F0dHIgPDwgMTYpO1xuICAgICAgICBmb3IoeSA9IDA7IHkgPCB0aGlzLmN1cl9oO3krKykge1xuICAgICAgICAgICAgbGluZSA9IHRoaXMubGluZXNbeV07XG4gICAgICAgICAgICBmb3IoeCA9IHRoaXMudzsgeCA8IG5ld193OyB4KyspXG4gICAgICAgICAgICAgICAgbGluZVt4XSA9IGM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy54ID49IG5ld193KVxuICAgICAgICB0aGlzLnggPSBuZXdfdyAtIDE7XG5cbiAgICBkID0gbmV3X2ggLSB0aGlzLmg7XG4gICAgaWYgKGQgPCAwKSB7XG4gICAgICAgIGQgPSAtZDtcbiAgICAgICAgLyogcmVtb3ZlIGRpc3BsYXllZCBsaW5lcyAqL1xuXG4gICAgICAgIC8qIHN0cmlwIHRoZSBET00gdGVybWluYWwgY29udGVudCAqL1xuICAgICAgICBmb3IoeSA9IG5ld19oOyB5IDwgdGhpcy5oOyB5KyspIHtcbiAgICAgICAgICAgIHJvd19lbCA9IHRoaXMucm93c19lbFt5XTtcbiAgICAgICAgICAgIHRoaXMuY29udGVudF9lbC5yZW1vdmVDaGlsZChyb3dfZWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm93c19lbCA9IHRoaXMucm93c19lbC5zbGljZSgwLCBuZXdfaCk7XG5cbiAgICAgICAgLyogYWRqdXN0IGN1cnNvciBwb3NpdGlvbiBpZiBuZWVkZWQgKi9cbiAgICAgICAgaWYgKHRoaXMueSA+PSBuZXdfaCkge1xuICAgICAgICAgICAgaWYgKGQgPiB0aGlzLnkpXG4gICAgICAgICAgICAgICAgZCA9IHRoaXMueTtcbiAgICAgICAgICAgIHRoaXMueSAtPSBkO1xuICAgICAgICAgICAgdGhpcy55X2Jhc2UgKz0gZDtcbiAgICAgICAgICAgIGlmICh0aGlzLnlfYmFzZSA+PSB0aGlzLnRvdF9oKVxuICAgICAgICAgICAgICAgIHRoaXMueV9iYXNlIC09IHRoaXMudG90X2g7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zY3JvbGxfYm90dG9tID4gbmV3X2gpXG4gICAgICAgICAgICB0aGlzLnNjcm9sbF9ib3R0b20gPSBuZXdfaDtcbiAgICAgICAgLyogZmFpbCBzYWZlIGZvciBzY3JvbGwgdG9wICovXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbF90b3AgPj0gdGhpcy5zY3JvbGxfYm90dG9tKVxuICAgICAgICAgICAgdGhpcy5zY3JvbGxfdG9wID0gMDtcbiAgICAgICAgXG4gICAgfSBlbHNlIGlmIChkID4gMCkge1xuICAgICAgICAvKiBhZGQgZGlzcGxheWVkIGxpbmVzICovXG5cbiAgICAgICAgaWYgKHRoaXMuY3VyX2ggPT0gdGhpcy50b3RfaCkge1xuICAgICAgICAgICAgaWYgKGQgPiB0aGlzLnRvdF9oIC0gdGhpcy5oKVxuICAgICAgICAgICAgICAgIGQgPSB0aGlzLnRvdF9oIC0gdGhpcy5oO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGQgPiB0aGlzLnlfYmFzZSlcbiAgICAgICAgICAgICAgICBkID0gdGhpcy55X2Jhc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy55X2Jhc2UgLT0gZDtcbiAgICAgICAgaWYgKHRoaXMueV9iYXNlIDwgMClcbiAgICAgICAgICAgIHRoaXMueV9iYXNlICs9IHRoaXMudG90X2g7XG4gICAgICAgIHRoaXMueSArPSBkO1xuXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbF9ib3R0b20gPT0gdGhpcy5oKVxuICAgICAgICAgICAgdGhpcy5zY3JvbGxfYm90dG9tID0gbmV3X2g7XG4gICAgICAgIFxuICAgICAgICAvKiBleHRlbmQgdGhlIERPTSB0ZXJtaW5hbCBjb250ZW50ICovXG4gICAgICAgIGZvcih5ID0gdGhpcy5oOyB5IDwgbmV3X2g7IHkrKykge1xuICAgICAgICAgICAgcm93X2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMucm93c19lbC5wdXNoKHJvd19lbCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRfZWwuYXBwZW5kQ2hpbGQocm93X2VsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmN1cl9oIDwgdGhpcy50b3RfaCkge1xuICAgICAgICBuZXdfY3VyX2ggPSB0aGlzLnlfYmFzZSArIG5ld19oO1xuICAgICAgICBpZiAobmV3X2N1cl9oIDwgdGhpcy5jdXJfaCkge1xuICAgICAgICAgICAgLyogcmVtb3ZlIGxpbmVzIGluIHRoZSBzY3JvbGwgYmFjayBidWZmZXIgKi9cbiAgICAgICAgICAgIHRoaXMubGluZXMgPSB0aGlzLmxpbmVzLnNsaWNlKDAsIG5ld19jdXJfaCk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3X2N1cl9oID4gdGhpcy5jdXJfaCkge1xuICAgICAgICAgICAgLyogYWRkIGxpbmVzIGluIHRoZSBzY3JvbGwgYmFjayBidWZmZXIgKi9cbiAgICAgICAgICAgIGMgPSAzMiB8ICh0aGlzLmRlZl9hdHRyIDw8IDE2KTtcbiAgICAgICAgICAgIGZvcih5ID0gdGhpcy5jdXJfaDsgeSA8IG5ld19jdXJfaDsgeSsrKSB7XG4gICAgICAgICAgICAgICAgbGluZSA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgICAgIGZvcih4ID0gMDsgeCA8IG5ld193OyB4KyspXG4gICAgICAgICAgICAgICAgICAgIGxpbmVbeF0gPSBjO1xuICAgICAgICAgICAgICAgIHRoaXMubGluZXNbeV0gPSBsaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VyX2ggPSBuZXdfY3VyX2g7XG4gICAgfVxuICAgICAgICBcbiAgICB0aGlzLncgPSBuZXdfdztcbiAgICB0aGlzLmggPSBuZXdfaDtcblxuICAgIGlmICh0aGlzLnkgPj0gdGhpcy5oKVxuICAgICAgICB0aGlzLnkgPSB0aGlzLmggLSAxO1xuXG4gICAgLyogcmVzZXQgZGlzcGxheSBwb3NpdGlvbiAqL1xuICAgIHRoaXMueV9kaXNwID0gdGhpcy55X2Jhc2U7XG4vKiAgICBcbiAgICAgIGNvbnNvbGUubG9nKFwibGluZXMubGVuZ3RoXCIsIHRoaXMubGluZXMubGVuZ3RoLCBcImN1cl9oXCIsIHRoaXMuY3VyX2gsXG4gICAgICBcInlfYmFzZVwiLCB0aGlzLnlfYmFzZSwgXCJoXCIsIHRoaXMuaCxcbiAgICAgIFwic2Nyb2xsX2JvdHRvbVwiLCB0aGlzLnNjcm9sbF9ib3R0b20pO1xuKi8gIFxuICAgIHRoaXMucmVmcmVzaCgwLCB0aGlzLmggLSAxKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUZXJtOyIsIlxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtTdHJpbmd9IHRhZyBcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBcbiAqIEByZXR1cm5zIFxuICovXG4gZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBpZCkge1xuICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgbm9kZS5pZCA9IGlkO1xuICByZXR1cm4gbm9kZTtcbn07XG5cblxuZXhwb3J0IGNsYXNzIEJhc2VVSSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucm9vdE5vZGUgPSBudWxsO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZSBcbiAgICovXG4gIHJlbmRlclRvKG5vZGUpIHtcbiAgICBub2RlLmFwcGVuZENoaWxkKHRoaXMucm9vdE5vZGUpO1xuICB9XG59XG4iLCJcbmltcG9ydCB7Y3JlYXRlRWxlbWVudCwgQmFzZVVJfSBmcm9tIFwiLi9iYXNldWkuanNcIlxuaW1wb3J0IEdDb3JlIGZyb20gXCIuLi9jb3JlLmpzXCI7XG5cblxuY29uc3QgVEhFTUVTID0gW1xuICBcIjMwMjQtZGF5XCIsXG4gIFwiMzAyNC1uaWdodFwiLFxuICBcImFiYm90dFwiLFxuICBcImFiY2RlZlwiLFxuICBcImFtYmlhbmNlLW1vYmlsZVwiLFxuICBcImFtYmlhbmNlXCIsXG4gIFwiYXl1LWRhcmtcIixcbiAgXCJheXUtbWlyYWdlXCIsXG4gIFwiYmFzZTE2LWRhcmtcIixcbiAgXCJiYXNlMTYtbGlnaHRcIixcbiAgXCJiZXNwaW5cIixcbiAgXCJibGFja2JvYXJkXCIsXG4gIFwiY29iYWx0XCIsXG4gIFwiY29sb3Jmb3J0aFwiLFxuICBcImRhcmN1bGFcIixcbiAgXCJkcmFjdWxhXCIsXG4gIFwiZHVvdG9uZS1kYXJrXCIsXG4gIFwiZHVvdG9uZS1saWdodFwiLFxuICBcImVjbGlwc2VcIixcbiAgXCJlbGVnYW50XCIsXG4gIFwiZXJsYW5nLWRhcmtcIixcbiAgXCJncnV2Ym94LWRhcmtcIixcbiAgXCJob3BzY290Y2hcIixcbiAgXCJpY2Vjb2RlclwiLFxuICBcImlkZWFcIixcbiAgXCJpc290b3BlXCIsXG4gIFwianVlamluXCIsXG4gIFwibGVzc2VyLWRhcmtcIixcbiAgXCJsaXF1aWJ5dGVcIixcbiAgXCJsdWNhcmlvXCIsXG4gIFwibWF0ZXJpYWwtZGFya2VyXCIsXG4gIFwibWF0ZXJpYWwtb2NlYW5cIixcbiAgXCJtYXRlcmlhbC1wYWxlbmlnaHRcIixcbiAgXCJtYXRlcmlhbFwiLFxuICBcIm1ib1wiLFxuICBcIm1kbi1saWtlXCIsXG4gIFwibWlkbmlnaHRcIixcbiAgXCJtb25va2FpXCIsXG4gIFwibW94ZXJcIixcbiAgXCJuZWF0XCIsXG4gIFwibmVvXCIsXG4gIFwibmlnaHRcIixcbiAgXCJub3JkXCIsXG4gIFwib2NlYW5pYy1uZXh0XCIsXG4gIFwicGFuZGEtc3ludGF4XCIsXG4gIFwicGFyYWlzby1kYXJrXCIsXG4gIFwicGFyYWlzby1saWdodFwiLFxuICBcInBhc3RlbC1vbi1kYXJrXCIsXG4gIFwicmFpbHNjYXN0c1wiLFxuICBcInJ1YnlibHVlXCIsXG4gIFwic2V0aVwiLFxuICBcInNoYWRvd2ZveFwiLFxuICBcInNvbGFyaXplZFwiLFxuICBcInNzbXNcIixcbiAgXCJ0aGUtbWF0cml4XCIsXG4gIFwidG9tb3Jyb3ctbmlnaHQtYnJpZ2h0XCIsXG4gIFwidG9tb3Jyb3ctbmlnaHQtZWlnaHRpZXNcIixcbiAgXCJ0dGNuXCIsXG4gIFwidHdpbGlnaHRcIixcbiAgXCJ2aWJyYW50LWlua1wiLFxuICBcInhxLWRhcmtcIixcbiAgXCJ4cS1saWdodFwiLFxuICBcInlldGlcIixcbiAgXCJ5b25jZVwiLFxuICBcInplbmJ1cm5cIixcbiAgXVxuICBcbmZ1bmN0aW9uIGxvYWRfY3NzX3N0eWxlKG5hbWUsIGNiKSB7XG4gIGxldCBjc3Nfc3R5bGUgPSB3aW5kb3cuY3NzX3N0eWxlO1xuICBpZighY3NzX3N0eWxlKSB7XG4gICAgY3NzX3N0eWxlID0ge307XG4gIH1cbiAgaWYoY3NzX3N0eWxlW25hbWVdKSB7IHJldHVybjsgfVxuICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICBub2RlLnJlbCA9IFwic3R5bGVzaGVldFwiXG4gIGxldCBwYXRoID0gXCJsaWIvZWRpdG9yL3RoZW1lL1wiICsgbmFtZSArIFwiLmNzc1wiXG4gIG5vZGUuaHJlZiA9IHBhdGg7XG4gIG5vZGUub25sb2FkID0gKGUpID0+IHtcbiAgICBjc3Nfc3R5bGVbbmFtZV0gPSB0cnVlO1xuICAgIGlmKGNiKSBjYigpO1xuICB9XG4gIG5vZGUub25lcnJvciA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50b1N0cmluZygpKTtcbiAgfVxuICBsZXQgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICByb290LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuXG5USEVNRVMuZm9yRWFjaCgodGhlbWUpID0+IHtcbiAgbG9hZF9jc3Nfc3R5bGUodGhlbWUsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImxvYWQgc3VjY2Vzc1wiLCB0aGVtZSk7XG4gIH0pXG59KVxuXG5mdW5jdGlvbiBsb2FkX21vZGVfc3R5bGUobmFtZSwgY2IpIHtcbiAgbGV0IG1vZGVfc3R5bGUgPSB3aW5kb3cubW9kZV9zdHlsZTtcbiAgaWYoIW1vZGVfc3R5bGUpIHtcbiAgICBtb2RlX3N0eWxlID0ge307XG4gIH1cbiAgaWYobW9kZV9zdHlsZVtuYW1lXSkgeyByZXR1cm4gY2IgJiYgY2IoKTsgfVxuICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gIGxldCBwYXRoID0gXCJsaWIvZWRpdG9yL21vZGUvXCIgKyBuYW1lICsgXCIvXCIgKyBuYW1lICsgXCIuanNcIlxuICBub2RlLnNyYyA9IHBhdGg7XG4gIG5vZGUub25sb2FkID0gKGUpID0+IHtcbiAgICBtb2RlX3N0eWxlW25hbWVdID0gdHJ1ZTtcbiAgICBpZihjYikgY2IoKTtcbiAgfVxuICBub2RlLm9uZXJyb3IgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudG9TdHJpbmcoKSk7XG4gIH1cbiAgbGV0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICByb290LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuXG5jbGFzcyBFeGVjdXRvclVJIGV4dGVuZHMgQmFzZVVJIHtcbiAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBpbml0KCkge1xuICAgIGxldCBidXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwicnVuXCIpO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSBcInJ1blwiO1xuICAgIHRoaXMucm9vdE5vZGUgPSBidXR0b247XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBcbiAgICovXG4gIG9uQ2xpY2soZm4pIHtcbiAgICBsZXQgYnV0dG9uID0gdGhpcy5yb290Tm9kZTtcbiAgICBidXR0b24ub25jbGljayA9IGZuO1xuICB9XG59XG5cbmNsYXNzIFNldHRpbmcgZXh0ZW5kcyBCYXNlVUkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaXRlbXMgPSB7fVxuICB9XG4gIGluaXQoKSB7XG4gICAgdGhpcy5yb290Tm9kZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzZXR0aW5nX2NvbnRhaW5lclwiKTtcbiAgfVxuICBwdXNoV2lkZ2V0KG5hbWUsIHdpZGdldCkge1xuICAgIHRoaXMuaXRlbXNbbmFtZV0gPSB3aWRnZXQ7XG4gICAgdGhpcy5yb290Tm9kZS5hcHBlbmRDaGlsZCh3aWRnZXQucm9vdE5vZGUpO1xuICB9XG4gIHJlbW92ZVdpZGdldChuYW1lKSB7XG4gICAgbGV0IHdpZGdldCA9IHRoaXMuaXRlbXNbbmFtZV07XG4gICAgaWYoIXdpZGdldCkge3JldHVybjsgfVxuICAgIGRlbGV0ZSB0aGlzLml0ZW1zW25hbWVdO1xuICAgIHRoaXMucm9vdE5vZGUucmVtb3ZlQ2hpbGQod2lkZ2V0LnJvb3ROb2RlKTtcbiAgfVxufVxuXG5jbGFzcyBFZGl0b3JTdHlsZVVJIGV4dGVuZHMgQmFzZVVJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmlkeCA9IDA7XG4gICAgdGhpcy5vbmNsaWNrID0gbnVsbDtcbiAgfVxuICBpbml0KCkge1xuICAgIGxldCBidXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiZWRpdG9yX3N0eWxlXCIpO1xuICAgIHRoaXMucm9vdE5vZGUgPSBidXR0b247XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IFRIRU1FU1swXTtcbiAgICBidXR0b24ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBsZXQgaWR4ID0gKHRoaXMuaWR4ICsgMSkgJSBUSEVNRVMubGVuZ3RoO1xuICAgICAgbGV0IHRoZW1lID0gVEhFTUVTW2lkeF07XG4gICAgICBpZih0aGlzLm9uY2xpY2spIHtcbiAgICAgICAgdGhpcy5vbmNsaWNrKHRoZW1lKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaWR4ID0gaWR4O1xuICAgICAgYnV0dG9uLmlubmVySFRNTCA9IHRoZW1lO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFxuICAgKi9cbiAgb25DbGljayhmbikge1xuICAgIHRoaXMub25jbGljayA9IGZuO1xuICB9XG59XG5cbmNsYXNzIEVkaXRvclVJIGV4dGVuZHMgQmFzZVVJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmVkaXRvciA9IG51bGw7XG4gICAgdGhpcy5saW5lcyA9IHt9XG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vIGxldCBub2RlID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNvZGVlZGl0b3JcIik7XG4gICAgLy8gdGhpcy5lZGl0b3IgPSBDb2RlTWlycm9yKG5vZGUsIHtcbiAgICAvLyAgIHZhbHVlOiBcIjEyMzQ1NlwiLFxuICAgIC8vICAgbGluZU51bWJlcnM6IHRydWUsXG4gICAgLy8gICBtb2RlOiBcImx1YVwiLFxuICAgIC8vICAgc3R5bGVBY3RpdmVMaW5lOiB0cnVlLFxuICAgIC8vICAgbWF0Y2hCcmFja2V0czogdHJ1ZVxuICAgIC8vIH0pO1xuICAgIC8vIHRoaXMucm9vdE5vZGUgPSBub2RlOyAgXG4gIH1cblxuICByZW5kZXJUbyhub2RlKSB7XG4gICAgbGV0IG4gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiY29kZWVkaXRvclwiKTtcbiAgICBub2RlLmFwcGVuZENoaWxkKG4pO1xuICAgIHRoaXMuZWRpdG9yID0gQ29kZU1pcnJvcihuLCB7XG4gICAgICB2YWx1ZTogXCIxMjM0NTZcIixcbiAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxuICAgICAgbW9kZTogXCJsdWFcIixcbiAgICAgIHN0eWxlQWN0aXZlTGluZTogdHJ1ZSxcbiAgICAgIG1hdGNoQnJhY2tldHM6IHRydWUsXG4gICAgICBzbWFydEluZGVudDogZmFsc2UsXG4gICAgICBmb2xkR3V0dGVyOiB0cnVlLFxuICAgICAgYXV0b0Nsb3NlQnJhY2tldHM6IHRydWUsXG4gICAgICBndXR0ZXJzOiBbXCJDb2RlTWlycm9yLWxpbmVudW1iZXJzXCIsIFwiVEVTVFwiXVxuICAgIH0pO1xuICAgIG4ub25tb3VzZW1vdmUgPSAoZSkgPT4ge1xuICAgICAgLy8gbGV0IHggPSBlLmNsaWVudFg7IFxuICAgICAgLy8gbGV0IHkgPSBlLmNsaWVudFk7XG4gICAgICAvLyBsZXQgaW5mbyA9IHRoaXMuZWRpdG9yLmNvb3Jkc0NoYXIoe2xlZnQ6IHgsIHRvcDogeX0pXG4gICAgICAvLyBjb25zb2xlLmxvZyhpbmZvKTtcbiAgICAgIC8vIGlmKHRoaXMubGluZXNbaW5mby5saW5lXSkge3JldHVybjsgfVxuICAgICAgLy8gbGV0IG5vZGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIC8vIG5vZGUyLmlubmVyVGV4dCA9IFwiZGl2XCI7XG4gICAgICAvLyB0aGlzLmVkaXRvci5hZGRXaWRnZXQoaW5mbywgbm9kZTIsIHRydWUpO1xuICAgIH1cbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJURVNUUFwiXG4gICAgbGV0IGRvYyA9IHRoaXMuZWRpdG9yLmdldERvYygpXG4gICAgZG9jLnNldEd1dHRlck1hcmtlcigxLCBcIlRFU1RcIixkaXYpXG4gIH1cblxuICBzZXRTdHlsZShzdHlsZSkge1xuICAgIHRoaXMuZWRpdG9yLnNldE9wdGlvbihcInRoZW1lXCIsIHN0eWxlKTtcbiAgfVxuXG4gIHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmVkaXRvci5nZXRWYWx1ZSgpO1xuICB9XG59XG5cbmNsYXNzIElERVVJIHsgXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZWRpdG9ydWkgPSBuZXcgRWRpdG9yVUkoKTtcbiAgICB0aGlzLnNldHRpbmcgPSBuZXcgU2V0dGluZygpO1xuICAgIHRoaXMuZWRpdG9yc3R5bGUgPSBuZXcgRWRpdG9yU3R5bGVVSSgpO1xuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZWRpdG9ydWkuaW5pdCgpO1xuICAgIHRoaXMuc2V0dGluZy5pbml0KCk7XG4gICAgdGhpcy5lZGl0b3JzdHlsZS5pbml0KCk7XG4gICAgbGV0IGV4ZWN1dG9ydWkgPSBuZXcgRXhlY3V0b3JVSSgpO1xuICAgIGV4ZWN1dG9ydWkuaW5pdCgpO1xuXG4gICAgZXhlY3V0b3J1aS5vbkNsaWNrKCgpID0+IHtcbiAgICAgIGxldCBjb2RlID0gdGhpcy5lZGl0b3J1aS52YWx1ZSgpO1xuICAgICAgR0NvcmUuZW1pdChcInJ1bl9jb2RlXCIsIHtjb2RlfSk7XG4gICAgfSlcbiAgICB0aGlzLmVkaXRvcnN0eWxlLm9uQ2xpY2soKHN0eWxlKSA9PiB7XG4gICAgICB0aGlzLmVkaXRvcnVpLnNldFN0eWxlKHN0eWxlKTtcbiAgICB9KVxuICAgIFxuICAgIHRoaXMuc2V0dGluZy5wdXNoV2lkZ2V0KFwiZXhlY3V0b3JcIiwgZXhlY3V0b3J1aSk7XG4gICAgdGhpcy5zZXR0aW5nLnB1c2hXaWRnZXQoXCJlZGl0b3JzdHlsZVwiLCB0aGlzLmVkaXRvcnN0eWxlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdG9yXCIpO1xuICAgIGlmKCFub2RlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltlcnJvcl0gbm90IGZvdW5kIDxkaXY+IGlkID0gZWRpdG9yXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVkaXRvcnVpLnJlbmRlclRvKG5vZGUpO1xuICAgIHRoaXMuc2V0dGluZy5yZW5kZXJUbyhub2RlKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IElERVVJOyIsIlxuaW1wb3J0IHtjcmVhdGVFbGVtZW50LCBCYXNlVUl9IGZyb20gXCIuL2Jhc2V1aS5qc1wiXG5jbGFzcyBJT0Rlc2NyaXB0b3IgIGV4dGVuZHMgQmFzZVVJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmlOb2RlID0gbnVsbDtcbiAgICB0aGlzLm9Ob2RlID0gbnVsbDtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnJvb3ROb2RlID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImVnXCIpO1xuICAgIHRoaXMuaU5vZGUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZWdpXCIpO1xuICAgIHRoaXMub05vZGUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZWdvXCIpO1xuXG4gICAgdGhpcy5yb290Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmlOb2RlKTtcbiAgICB0aGlzLnJvb3ROb2RlLmFwcGVuZENoaWxkKHRoaXMub05vZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dCBcbiAgICovXG4gIHNldEVHSSh0ZXh0KSB7XG4gICAgdGhpcy5pTm9kZS5pbm5lclRleHQgPSB0ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dCBcbiAgICovXG4gIHNldEVHTyh0ZXh0KSB7XG4gICAgdGhpcy5vTm9kZS5pbm5lclRleHQgPSB0ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0ge1N0cmluZ30gaVRleHQgXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBvVGV4dCBcbiAgICovXG4gIHNldEVHSU8oaVRleHQsIG9UZXh0KSB7XG4gICAgdGhpcy5zZXRFR0koaVRleHQpO1xuICAgIHRoaXMuc2V0RUdPKG9UZXh0KTtcbiAgfVxuXG59XG5cblxuXG5cblxuY2xhc3MgUXVlc3Rpb25VSSBleHRlbmRzIEJhc2VVSSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50aXRsZU5vZGUgPSBudWxsO1xuICAgIHRoaXMuY29udGVudE5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMucm9vdE5vZGUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicXVlc3Rpb25cIik7XG4gICAgdGhpcy50aXRsZU5vZGUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicXRpdGxlXCIpO1xuICAgIHRoaXMuY29udGVudE5vZGUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicWNvbnRlbnRcIik7XG5cbiAgICB0aGlzLnJvb3ROb2RlLmFwcGVuZENoaWxkKHRoaXMudGl0bGVOb2RlKTtcbiAgICB0aGlzLnJvb3ROb2RlLmFwcGVuZENoaWxkKHRoaXMuY29udGVudE5vZGUpO1xuICB9XG5cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSBcbiAgICovXG4gIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZU5vZGUuaW5uZXJIVE1MID0gdGl0bGU7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpVGV4dCBcbiAgICogQHBhcmFtIHtTdHJpbmd9IG9UZXh0IFxuICAgKi9cbiAgYWRkRXhhbXBsZShpVGV4dCwgb1RleHQpIHtcbiAgICBsZXQgZCA9IG5ldyBJT0Rlc2NyaXB0b3IoKTtcbiAgICBkLnNldEVHSU8oaVRleHQsIG9UZXh0KTtcbiAgICBkLnJlbmRlclRvKHRoaXMuY29udGVudE5vZGUpO1xuICB9XG5cblxuICByZXBsYWNlRXhhbXBsZShpZHgsIGlUZXh0LCBvVGV4dCkge1xuICAgIGxldCBub2RlID0gdGhpcy5jb250ZW50Tm9kZS5jaGlsZE5vZGVzW2lkeF07XG4gICAgaWYoIW5vZGUpIHsgcmV0dXJuOyB9XG4gICAgbGV0IGQgPSBuZXcgSU9EZXNjcmlwdG9yKCk7XG4gICAgZC5zZXRFR0lPKGlUZXh0LCBvVGV4dCk7XG4gICAgdGhpcy5jb250ZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZCwgbm9kZSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlkeCBcbiAgICovXG4gIHJlbW92ZUV4YW1wbGVCeUlkeChpZHgpIHtcbiAgICBsZXQgbm9kZSA9IHRoaXMuY29udGVudE5vZGUuY2hpbGROb2Rlc1tpZHhdO1xuICAgIGlmKCFub2RlKSB7IHJldHVybjsgfVxuICAgIHRoaXMuY29udGVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gIH1cblxuICByZW1vdmVBbGxFeGFtcGxlcygpIHtcbiAgICBsZXQgY2hpbGROb2RlcyA9IHRoaXMuY29udGVudE5vZGUuY2hpbGROb2Rlc1xuICAgIHdoaWxlKGNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IG5vZGUgPSBjaGlsZE5vZGVzW2NoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG4gICAgICB0aGlzLmNvbnRlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbiAgfVxuXG5cbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25VSTsiLCJpbXBvcnQge0Jhc2VVSSwgY3JlYXRlRWxlbWVudH0gZnJvbSBcIi4vYmFzZXVpXCJcbmltcG9ydCBUZXJtIGZyb20gXCIuLi90ZXJtXCI7XG5pbXBvcnQgV2luZG93IGZyb20gXCIuL3dpbmRvd1wiO1xuXG4vKipcbiAqIHN1Y2NlZWRcbiAqIDxzdmcgdmlld0JveD1cIjY0IDY0IDg5NiA4OTZcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtaWNvbj1cImNoZWNrLWNpcmNsZVwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxwYXRoIGQ9XCJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTE5My41IDMwMS43bC0yMTAuNiAyOTJhMzEuOCAzMS44IDAgMDEtNTEuNyAwTDMxOC41IDQ4NC45Yy0zLjgtNS4zIDAtMTIuNyA2LjUtMTIuN2g0Ni45YzEwLjIgMCAxOS45IDQuOSAyNS45IDEzLjNsNzEuMiA5OC44IDE1Ny4yLTIxOGM2LTguMyAxNS42LTEzLjMgMjUuOS0xMy4zSDY5OWM2LjUgMCAxMC4zIDcuNCA2LjUgMTIuN3pcIj48L3BhdGg+PC9zdmc+XG4gKiBmYWlsZWRcbiAqIDxzdmcgdmlld0JveD1cIjY0IDY0IDg5NiA4OTZcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtaWNvbj1cImNsb3NlLWNpcmNsZVwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxwYXRoIGQ9XCJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTE2NS40IDYxOC4ybC02Ni0uM0w1MTIgNTYzLjRsLTk5LjMgMTE4LjQtNjYuMS4zYy00LjQgMC04LTMuNS04LTggMC0xLjkuNy0zLjcgMS45LTUuMmwxMzAuMS0xNTVMMzQwLjUgMzU5YTguMzIgOC4zMiAwIDAxLTEuOS01LjJjMC00LjQgMy42LTggOC04bDY2LjEuM0w1MTIgNDY0LjZsOTkuMy0xMTguNCA2Ni0uM2M0LjQgMCA4IDMuNSA4IDggMCAxLjktLjcgMy43LTEuOSA1LjJMNTUzLjUgNTE0bDEzMCAxNTVjMS4yIDEuNSAxLjkgMy4zIDEuOSA1LjIgMCA0LjQtMy42IDgtOCA4elwiPjwvcGF0aD48L3N2Zz5cbiAqL1xuXG5cbmNsYXNzIFJlc3VsdFVJIGV4dGVuZHMgQmFzZVVJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnRlcm0gPSBudWxsO1xuICAgIHRoaXMud2luZG93ID0gbnVsbDtcbiAgICB0aGlzLnN0YXRlID0gXCJoaWRlXCI7XG4gICAgdGhpcy5yb290Tm9kZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0ZXJtX2NvbnRhaW5lclwiKTtcbiAgICBcbiAgICB0aGlzLmljb24gPSBudWxsO1xuICAgIHRoaXMuY29udGVudCA9IG51bGw7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMudGVybSA9IG5ldyBUZXJtKHtcbiAgICAgIGNvbHM6IDgwLFxuICAgICAgcm93czogMzAsXG4gICAgICBzY3JvbGxiYWNrOiAxMDAwMCxcbiAgICAgIGZvbnRTaXplOiAxNVxuICAgIH0pO1xuICAgIHRoaXMud2luZG93ID0gbmV3IFdpbmRvdyhcInJlc3VsdFwiLCBcInJlc3VsdFwiKTtcbiAgICBsZXQgZGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRlcm1fY29udGFpbmVyXCIpO1xuICAgIHRoaXMud2luZG93LmFkZENoaWxkKGRpdik7XG4gICAgdGhpcy53aW5kb3cub25DbG9zZSgoKSA9PiB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9KVxuICAgIHRoaXMucm9vdE5vZGUuYXBwZW5kQ2hpbGQodGhpcy53aW5kb3cuc2VjdGlvbik7XG4gICAgdGhpcy50ZXJtLm9wZW4oZGl2KTtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIHRoaXMucmVuZGVyVG8obm9kZSk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMucm9vdE5vZGUuaGlkZGVuID0gdHJ1ZVxuICB9XG4gIHNob3coKSB7XG4gICAgdGhpcy5yb290Tm9kZS5oaWRkZW4gPSBmYWxzZTtcbiAgLy8gIHRoaXMuaW5pdCgpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0VUkgXG5cbi8qKlxuICogQG5vdGVcbiAqIC0tLS0tLWx1YXZtLS0tLS0tXG4gKiAoanMgLT4gbHVhKSB2bS5jYWxsKFwibHVhIGNvZGVcIilcbiAqIFxuICogKGx1YSAtPiBqcykgc3lzdGVtLmNhbGwoXCJqc29uID9cIilcbiAqIC0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGSUxFOiB0ZXN0Lmx1YVxuICogZ2FtZS5pbml0KGZ1bmN0aW9uKCkgXG4gKiAgXG4gKiBlbmQpXG4gKiBnYW1lLnVwZGF0ZShmdW5jdGlvbigpIFxuICogXG4gKiBlbmQpXG4gKiBnYW1lLnJlbmRlcihmdW5jdGlvbigpIFxuICogXG4gKiBlbmQpXG4gKi8iLCJcblxubGV0IGRyYWdJbmZvID0ge1xuICB3aW5kb3c6IG51bGwsXG4gIGR4OiBudWxsLFxuICBkeTogbnVsbCxcbn07XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCB0eXBlKSB7XG4gICAgbGV0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBzZWN0aW9uLnRhYkluZGV4ID0gMDtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ3aW5kb3dcIik7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKHR5cGUpO1xuICAgIHNlY3Rpb24ub25tb3VzZWRvd24gPSAoZSkgPT4ge1xuICAgICAgdGhpcy5mb3JlZ3JvdW5kKCk7XG4gICAgfTtcbiAgICBzZWN0aW9uLnN0eWxlLmxlZnQgPSBcIjI1NnB4XCI7XG4gICAgc2VjdGlvbi5zdHlsZS50b3AgPSBcIjI1NnB4XCI7XG4gICAgc2VjdGlvbi5zdHlsZS56SW5kZXggPSAxMDA7XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICAgIGhlYWRlci5vbm1vdXNlZG93biA9IChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgZWxlID0gdGhpcy5zZWN0aW9uO1xuICAgICAgZHJhZ0luZm8ud2luZG93ID0gdGhpcztcbiAgICAgIGRyYWdJbmZvLmR4ID0gZS5vZmZzZXRYO1xuICAgICAgZHJhZ0luZm8uZHkgPSBlLm9mZnNldFk7XG4gICAgfVxuICAgIGhlYWRlci5pbm5lclRleHQgPSB0aXRsZTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb250ZW50XCIpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICB0aGlzLnNlY3Rpb24gPSBzZWN0aW9uO1xuICAgIHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5vbmNsb3NlY2IgPSBudWxsO1xuXG4gICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcbiAgICAgIGZvcihsZXQgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgIGlmKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT0gXCJzdHlsZVwiKSB7XG4gICAgICAgICAgdGhpcy5zZWN0aW9uLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwid2luX3Jlc2l6ZVwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy5jb250ZW50LCB7XG4gICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgIH0pXG5cbiAgICB0aGlzLmFkZEhlYWRlckljb24oe1xuICAgICAgY29kZXBvaW50OiBcIjI3NENcIixcbiAgICAgIHR5cGU6IFwiY2xvc2VcIixcbiAgICAgIG9uY2xpY2s6ICgpID0+IHtcbiAgICAgICAgdGhpcy5raWxsKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGRIZWFkZXJJY29uKGFyZ3MpIHtcbiAgICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpY29uXCIpO1xuICAgIGljb24uaW5uZXJIVE1MID0gXCImI3hcIiArIGFyZ3MuY29kZXBvaW50O1xuICAgIGljb24uY2xhc3NMaXN0LmFkZChhcmdzLnR5cGUpO1xuICAgIGljb24ub25jbGljayA9IGFyZ3Mub25jbGljaztcbiAgICBpY29uLm9ubW91c2Vkb3duID0gKGUpID0+IHtlLnN0b3BQcm9wYWdhdGlvbigpO31cbiAgICB0aGlzLmhlYWRlci5hcHBlbmRDaGlsZChpY29uKTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdHMpIHtcbiAgICB0aGlzLnNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0cyk7XG4gIH1cblxuICBhZGRDaGlsZChub2RlKSB7XG4gICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICB9XG5cbiAga2lsbCgpIHtcbiAgICBpZih0aGlzLm9uY2xvc2VjYikge1xuICAgICAgdGhpcy5vbmNsb3NlY2IoKTtcbiAgICB9XG4gIC8vICB0aGlzLnNlY3Rpb24ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLnNlY3Rpb24pO1xuICB9XG5cbiAgZm9yZWdyb3VuZCgpIHtcbiAgICAvL1RPRE86XG4gIH1cblxuICB1cGRhdGVTbmFwcGluZygpIHtcblxuICB9XG5cbiAgb25DbG9zZShjYikge1xuICAgIHRoaXMub25jbG9zZWNiID0gY2I7XG4gIH1cbn1cblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcbiAgaWYoIWRyYWdJbmZvLndpbmRvdykgeyByZXR1cm47IH1cbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgc2VjdGlvbiA9IGRyYWdJbmZvLndpbmRvdy5zZWN0aW9uO1xuXG4gIHNlY3Rpb24uc3R5bGUubGVmdCA9IGAke2UuY2xpZW50WCAtIGRyYWdJbmZvLmR4fXB4YDtcbiAgc2VjdGlvbi5zdHlsZS50b3AgID0gYCR7ZS5jbGllbnRZIC0gZHJhZ0luZm8uZHl9cHhgO1xuICBkcmFnSW5mby53aW5kb3cudXBkYXRlU25hcHBpbmcoKTtcbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChlKSA9PiB7XG4gIGRyYWdJbmZvLndpbmRvdyA9IG51bGw7XG59KVxuXG5leHBvcnQgZGVmYXVsdCBXaW5kb3c7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgSURFVUkgZnJvbSBcIi4vdWkvZWRpdG9yLmpzXCI7XG5pbXBvcnQgUXVlc3Rpb25Db250cm9sbG9yIGZyb20gXCIuL2NvbnRyb2xsZXIvcXVlc3Rpb24uanNcIjtcbmltcG9ydCBMdWFWTSBmcm9tIFwiLi9sdWF2bS5qc1wiO1xuaW1wb3J0IFRlcm0gZnJvbSBcIi4vdGVybS5qc1wiO1xuaW1wb3J0IEdDb3JlIGZyb20gXCIuL2NvcmVcIjtcbmltcG9ydCB2aXNpdERvY3VtZW50YXRpb24gZnJvbSBcIi4uL2RvY3MuanNcIjtcbmltcG9ydCBSZXN1bHRVSSBmcm9tIFwiLi91aS9yZXN1bHRcIjtcbmltcG9ydCBFeGFtIGZyb20gXCIuL2V4YW0uanNcIjtcblxubGV0IGdsb2JhbF90aGlzID0gd2luZG93O1xuZ2xvYmFsX3RoaXMuR0NvcmUgPSBHQ29yZTtcblxuY29uc3QgU0NBTExUQkxTID0ge1xuICBjb2xsZWN0Q29kZVJldCA6IChpZCwgcmV0KSA9PiB7XG4gICAgR0NvcmUuZW1pdChcImNvZGVfcmV0XCIsIHtcbiAgICAgIGlkLFxuICAgICAgcmV0XG4gICAgfSk7XG4gIH0sXG59XG5cbmdsb2JhbF90aGlzLnNjYWxsID0gKC4uLmFyZ3MpID0+IHtcbiAgbGV0IGZuID0gU0NBTExUQkxTW2FyZ3NbMF1dO1xuICBpZighZm4pIHtcbiAgICBHQ29yZS5lbWl0KFwiY29kZV9lcnJvclwiLCB7XG4gICAgICB0ZXh0OiBcIm5vdCBmb3VuZCBzY2FsbCBjYWxsOiBcIiArIGFyZ3NbMF1cbiAgICB9KTtcbiAgICByZXR1cm4gXG4gIH1cbiAgcmV0dXJuIGZuKGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0pO1xufVxuXG5sZXQgbG9hZF9sdWF2bSA9IChjYikgPT4ge1xuICBjYigpO1xufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtMdWFWTX0gbHVhdm0gXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5mdW5jdGlvbiBpbml0U3lzdGVtQ2FsbChsdWF2bSkge1xuICBsZXQgY29kZSA9IGBcblxuICBfX2lzX3NhbWUgPSBmdW5jdGlvbihhLCBiKSBcbiAgICBsb2NhbCB0eXBlX2EgPSB0eXBlKGEpXG4gICAgbG9jYWwgdHlwZV9iID0gdHlwZShiKVxuICAgIGlmIHR5cGVfYSB+PSB0eXBlX2IgdGhlbiBcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIGVuZFxuICAgIGlmIHR5cGVfYSA9PSBcInRhYmxlXCIgdGhlbiBcbiAgICAgIGZvciBrLCB2IGluIHBhaXJzKGEpIGRvIFxuICAgICAgICBpZiBub3QgX19pc19zYW1lKHYsIGJba10pIHRoZW4gXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIGVuZFxuICAgICAgZW5kXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGVuZFxuICAgIHJldHVybiBhID09IGJcbiAgZW5kXG5cbiAgZnVuY3Rpb24gaW5pdF9zeXN0ZW1fY2FsbF90YmwoKSBcbiAgbG9jYWwgY2hlY2tfdHlwZSA9IGZ1bmN0aW9uKHZhbCkgXG4gICAgbG9jYWwgdCA9IHR5cGUodmFsKVxuICAgIGlmIHQgPT0gXCJudW1iZXJcIiBvciB0ID09IFwic3RyaW5nXCIgdGhlbiBcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZW5kXG4gIGVuZFxuICBzeXN0ZW0gPSB7fVxuICBsb2NhbCBtdGJsID0ge31cbiAgbXRibC5fX2luZGV4ID0gZnVuY3Rpb24odCwgaykgXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLikgXG4gICAgICBsb2NhbCBhcmdzID0gey4uLn1cbiAgICAgIGZvciBrLCB2IGluIHBhaXJzKGFyZ3MpIGRvXG4gICAgICAgIGlmIG5vdCBjaGVja190eXBlKHYpIHRoZW4gXG4gICAgICAgICAgcmV0dXJuIC0xIC0tIHVuYXZhaWxhYmxlIHR5cGVcbiAgICAgICAgZW5kXG4gICAgICBlbmRcbiAgICAgIHJldHVybiBfX3NjYWxsKGssIC4uLilcbiAgICBlbmRcbiAgZW5kXG4gIHNldG1ldGF0YWJsZShzeXN0ZW0sIG10YmwpXG5lbmRcbmluaXRfc3lzdGVtX2NhbGxfdGJsKClgO1xucmV0dXJuIGx1YXZtLnJ1bihjb2RlKTtcbn1cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gIGxldCBlZGl0b3IgPSBuZXcgSURFVUkoKTtcbiAgZWRpdG9yLnJlbmRlcigpO1xuXG4gIGxldCByZXN1bHQgPSBuZXcgUmVzdWx0VUkoKTtcbiAgcmVzdWx0LnJlbmRlcigpO1xuICByZXN1bHQuaW5pdCgpO1xuICBsZXQgZXhhbSA9IG5ldyBFeGFtKCk7XG4gIGV4YW0udmlzaXRDdXJRdWVzdGlvbigpO1xuXG4gIEdDb3JlLm9uKFwiY29kZV9lcnJvclwiLCAoZGF0YSkgPT4ge1xuICAgIGxldCB0ZXh0ID0gZGF0YS50ZXh0O1xuICAgIHJlc3VsdC50ZXJtLndyaXRlbG4odGV4dCk7XG4gIH0pXG4gIEdDb3JlLm9uKFwiY29kZV9wcmludFwiLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGxldCB0ZXh0ID0gZGF0YS50ZXh0O1xuICAgIHJlc3VsdC50ZXJtLndyaXRlKHRleHQpO1xuICB9KTtcbiAgR0NvcmUub24oXCJjb2RlX3JldFwiLCAoZGF0YSkgPT4ge1xuICAgIGxldCB7aWQsIHJldH0gPSBkYXRhO1xuICAgIGxldCB0ZXN0ID0gZXhhbS5nZXRRdWVzdGlvblRlc3QobnVsbCwgaWQpXG4gICAgbGV0IGFjY2VwdGVkICA9IFwiW1xceDFiWzMybUFjY2VwdGVkXFx4MWJbMG1dXCI7XG4gICAgbGV0IGVycm9yICAgICA9IFwiW1xceDFiWzMxbVdyb25nIEFuc3dlclxceDFiWzBtXVwiO1xuICAgIGxldCBzdHIgPSBgaW5wdXRbXFx4MWJbMzNtJHt0ZXN0WzBdfVxceDFiWzBtXSBvdXRwdXRbXFx4MWJbMzNtJHt0ZXN0WzFdfVxceDFiWzBtXSByZXN1bHQ6ICR7cmV0ID8gYWNjZXB0ZWQgOiBlcnJvcn1gO1xuICAgIHJlc3VsdC50ZXJtLndyaXRlbG4oc3RyKTtcbiAgfSlcblxuICBsb2FkX2x1YXZtKCgpID0+IHtcbiAgICBsZXQgbHVhdm0gPSBuZXcgTHVhVk0oKTtcbiAgICBsdWF2bS5yZXNldCgpO1xuICAgIGluaXRTeXN0ZW1DYWxsKGx1YXZtKTtcbiAgICBHQ29yZS5vbihcInJ1bl9jb2RlXCIsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBsZXQgY29kZSA9IGRhdGEuY29kZTtcbiAgICAgIGlmICghY29kZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IFxuICAgICAgcmVzdWx0LnNob3coKTtcbiAgICAgIEdDb3JlLmVtaXQoXCJjb2RlX3ByaW50XCIsIHt0ZXh0OlwiLS0tLS0tLS0tLS0tLS0tXFxuXCJ9KTtcbiAgICAgIGxldCBvayA9IGx1YXZtLnJ1bihjb2RlKTtcbiAgICAgIGlmKG9rID09IDApIHtcbiAgICAgICAgZXhhbS52bVJ1bkV4YW1wbGVzKGx1YXZtKTtcbiAgICAgIH1cbiAgICAgIEdDb3JlLmVtaXQoXCJjb2RlX3ByaW50XCIsIHt0ZXh0OlwiLS0tLS0tLS0tLS0tLS0tXFxuXCJ9KTtcbiAgIC8vICAgcmVzdWx0LnRlcm0ud3JpdGUoYFxceDFiWzQxOzM2bSA2NzY3Njc2IFxceDFiWzBtYCk7ICAgICAgXG4gICAgfSk7XG4gIH0pXG59O1xuXG5cblxuLy8gbGV0IHRlcm0gPSBuZXcgVGVybSh7IGNvbHM6IDgwLCByb3dzOiAzMCwgc2Nyb2xsYmFjazogMTAwMDAsIGZvbnRTaXplOiAxNSB9KTtcbi8vIHRlcm0ub3Blbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlcm1fY29udGFpbmVyXCIpLFxuLy8gICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVybV9wYXN0ZVwiKSk7ICAgIFxuLy8gdGVybS53cml0ZShcInlvdXIgcHJpbnQgc3Rkb3V0OlxcclxcblwiKTtcbi8vZXhwb3J0IGRlZmF1bHQgMTIzXG5cbi8vIHZpc2l0RG9jdW1lbnRhdGlvbihcImRvY3MvcXVlc3Rpb25zL3EwLm1kXCIsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRvclwiKSk7XG4vLyB3aW5kb3cudmlzaXREb2N1bWVudGF0aW9uID0gdmlzaXREb2N1bWVudGF0aW9uO1xuIl0sIm5hbWVzIjpbIlRXSVRURVJfTUFYX0NIQVJfQ09VTlQiLCJUV0lUVEVSX0hBTkRMRSIsIlJFX1NUUklOR19MSVRFUkFMIiwiUkVfTElORV9OVU1CRVIiLCJSRV9DT01NRU5UIiwiUkVfTlVNRVJJQ19MSVRFUkFMX0hFWCIsIlJFX05VTUVSSUNfTElURVJBTF9CSU4iLCJSRV9OVU1FUklDX0xJVEVSQUxfT0NUIiwiUkVfTlVNRVJJQ19MSVRFUkFMX1NDSSIsIlJFX0tFWVdPUkQiLCJSRV9GVU5DVElPTl9OQU1FIiwiUkVfQ09OU1RBTlQiLCJSRV9PUEVSQVRPUiIsIlJFX0NPTVBBUkFUT1IiLCJSRV9MT0dJQ0FMX09QRVJBVE9SIiwiUkVfSURFTlRJRklFUiIsIlJFX0VYUFJFU1NJT05fQlJBQ0tFVCIsIlJFX0xJU1RfQUNDRVNTX0JSQUNLRVQiLCJSRV9QQVJBTUVURVJfU0VQRVJBVE9SIiwiUkVfU1RBVEVNRU5UX1NFUEVSQVRPUiIsIlJFX1dIVElFU1BBQ0UiLCJSRV9PUiIsIlJFX0FMTCIsIlJlZ0V4cCIsInNvdXJjZSIsImpvaW4iLCJLRVlXT1JEX0NPTE9VUlMiLCJiYWNrZ3JvdW5kIiwiZm9yZWdyb3VuZCIsIkVTQ0FQRV9DSEFSUyIsInJlbmRlckRvY3VtZW50YXRpb25TeW50YXhIaWdobGlnaHRpbmciLCJjb2RlIiwidmlzaXREb2N1bWVudGF0aW9uIiwicGF0aCIsInBhcmVudE5vZGUiLCJyZXBsYWNlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJ0ZXh0IiwiZGF0YSIsImNvbnZlcnRlciIsInNob3dkb3duIiwiQ29udmVydGVyIiwiZG9jIiwiRG9jdW1lbnRGcmFnbWVudCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsIm1ha2VIdG1sIiwiYXBwZW5kQ2hpbGQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJkZXN0aW5hdGlvbiIsImdldEF0dHJpYnV0ZSIsInN0YXJ0c1dpdGgiLCJvbmNsaWNrIiwiZSIsInJlbW92ZUNoaWxkIiwic2V0QXR0cmlidXRlIiwiaGxqcyIsIndpbmRvdyIsImhpZ2hsaWdodEVsZW1lbnQiLCJRdWVzdGlvblVJIiwiUXVlc3Rpb24iLCJCYXNlQ29udHJvbGxvciIsIm1vZGVsIiwidmlldyIsIlF1ZXN0aW9uQ29udHJvbGxvciIsImlkIiwic2V0UXVlc3Rpb24iLCJ0aXRsZSIsImdldFRpdGxlIiwic2V0VGl0bGUiLCJpbm91dHMiLCJnZXRJbk91dHMiLCJyZW1vdmVBbGxFeGFtcGxlcyIsInRleHRzIiwiYWRkRXhhbXBsZSIsIm5vZGUiLCJxdWVyeVNlbGVjdG9yIiwicmVuZGVyVG8iLCJDb3JlIiwiZXZlbnRzIiwiZXZlbnQiLCJjYiIsImxpc3QiLCJTZXQiLCJhZGQiLCJkZWxldGUiLCJHQ29yZSIsIkdJbnB1dHMiLCJsb2FkX2lucHV0cyIsImpzb24iLCJfZ2V0X2N1cl9pbnB1dHMiLCJxaWQiLCJpbnB1dHMiLCJpbyIsIl9nZW5fdGVzdF9jb2RlIiwiaW5wdXQiLCJvdXRwdXQiLCJFeGFtIiwicXVlc3Rpb25pZCIsImhhc05leHRRdWVzdGlvbiIsInVybCIsImx1YXZtIiwiaW9zIiwiaSIsImxlbmd0aCIsInRlc3QiLCJyZXQiLCJydW4iLCJlbWl0IiwidGVzdGlkIiwibmV3X2x1YXZtIiwiY3dyYXAiLCJsdWFfZXhlYyIsImwiLCJjbG9zZV9sdWF2bSIsIkx1YVZNIiwidm0iLCJjb25zb2xlIiwibG9nIiwiZXJyQ29kZSIsIlFVRVNUSU9OUyIsIkRFRkFVTFRfUVVFU1RJT04iLCJxdWVzdGlvbiIsIlRlcm0iLCJvcHRpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3RfaGVpZ2h0Iiwic2Nyb2xsYmFjayIsImR1bW15X2tleV9oYW5kbGVyIiwiY29scyIsInJvd3MiLCJmb250X3NpemUiLCJmb250U2l6ZSIsInciLCJoIiwiY3VyX2giLCJ0b3RfaCIsInlfYmFzZSIsInlfZGlzcCIsIngiLCJ5Iiwic2Nyb2xsX3RvcCIsInNjcm9sbF9ib3R0b20iLCJjdXJzb3JzdGF0ZSIsImhhbmRsZXIiLCJzdGF0ZSIsIm91dHB1dF9xdWV1ZSIsImNvbG9ycyIsImRlZl9hdHRyIiwiY3VyX2F0dHIiLCJpc19tYWMiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwia2V5X3JlcF9zdGF0ZSIsImtleV9yZXBfc3RyIiwidXRmOCIsInV0Zjhfc3RhdGUiLCJ1dGY4X3ZhbCIsImFwcGxpY2F0aW9uX2N1cnNvciIsImFwcGxpY2F0aW9uX2tleXBhZCIsImxpbnV4X2NvbnNvbGUiLCJ0ZXh0YXJlYV9oYXNfZm9jdXMiLCJwcm90b3R5cGUiLCJzZXRLZXlIYW5kbGVyIiwidGVybV9nZXRfY2hhcl9zaXplIiwicGFyZW50X2VsIiwiZWwiLCJnIiwiY2xhc3NMaXN0Iiwic3R5bGUiLCJ0ZXh0Q29udGVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm9wZW4iLCJsaW5lIiwidGVybSIsImMiLCJyb3dfZWwiLCJjaGFyX3NpemVfcmV0IiwibGluZXMiLCJBcnJheSIsImNoYXJfd2lkdGgiLCJjaGFyX2hlaWdodCIsInNjcm9sbGJhcl93aWR0aCIsInRlcm1fd2lkdGgiLCJNYXRoIiwiY2VpbCIsInRlcm1faGVpZ2h0IiwidGVybV9lbCIsImNsYXNzTmFtZSIsInNjcm9sbGJhcl9lbCIsInRyYWNrX2VsIiwib25tb3VzZWRvd24iLCJtb3VzZU1vdmVIYW5kbGVyIiwiYmluZCIsInRodW1iX2VsIiwibW91c2VEb3duSGFuZGxlciIsImVuZF9lbCIsInRodW1iX3NpemUiLCJ0aHVtYl9wb3MiLCJjb250ZW50X2VsIiwicm93c19lbCIsInB1c2giLCJ0ZXh0YXJlYV9lbCIsInJlZnJlc2giLCJhZGRFdmVudExpc3RlbmVyIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJpbnB1dEhhbmRsZXIiLCJmb2N1c0hhbmRsZXIiLCJibHVySGFuZGxlciIsInRlcm1LZXlEb3duSGFuZGxlciIsInBhc3RlSGFuZGxlciIsInRlcm1Nb3VzZVVwSGFuZGxlciIsIndoZWVsSGFuZGxlciIsInNldEludGVydmFsIiwiY3Vyc29yX3RpbWVyX2NiIiwiZm9jdXMiLCJyZWZyZXNoX3Njcm9sbGJhciIsInRvdGFsX3NpemUiLCJ5MCIsImNsaWVudEhlaWdodCIsImZsb29yIiwibWF4IiwibWluIiwidG9wIiwibW92ZV90ZXh0YXJlYSIsImJhc2VfeCIsImJhc2VfeSIsInBvcyIsImxlZnQiLCJzY3JvbGxYIiwic2Nyb2xsWSIsInpJbmRleCIsInltaW4iLCJ5bWF4Iiwib3V0bGluZSIsImoiLCJjeCIsImF0dHIiLCJsYXN0X2F0dHIiLCJmZyIsImJnIiwieTEiLCJodHRwX2xpbmtfbGVuIiwiaHR0cF9saW5rX3N0ciIsImJvbGQiLCJ0bXAiLCJpbnZlcnNlIiwiaXNfaHR0cF9saW5rX2NoYXIiLCJzdHIiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJyaWdodF90cmltIiwiYSIsIm4iLCJzdWJzdHIiLCJjdXJzb3Jfc3RhdGUiLCJzaG93X2N1cnNvciIsInNjcm9sbF9kaXNwIiwid3JpdGUiLCJzIiwidXBkYXRlIiwiZ2V0X2VyYXNlX2NoYXIiLCJiZ19tYXNrIiwiZXJhc2VfY2hhcnMiLCJ4MSIsIngyIiwiZXJhc2VfdG9fZW9sIiwiZXJhc2VfaW5fbGluZSIsImVyYXNlX2luX2Rpc3BsYXkiLCJkZWxldGVfY2hhcnMiLCJpbnNlcnRfY2hhcnMiLCJjc2lfY29sb3JzIiwiZXNjX3BhcmFtcyIsIm1hc2siLCJlbXB0eV9saW5lIiwidXNlX2VyYXNlX2NoYXIiLCJzY3JvbGxfZG93biIsImJvdHRvbSIsInkyIiwic2Nyb2xsX3VwIiwiZG93bl93aXRoX3Njcm9sbCIsInVwX3dpdGhfc2Nyb2xsIiwiaW5zZXJ0X2xpbmVzIiwiZGVsZXRlX2xpbmVzIiwiVFRZX1NUQVRFX05PUk0iLCJUVFlfU1RBVEVfRVNDIiwiVFRZX1NUQVRFX0NTSSIsIlRUWV9TVEFURV9DSEFSU0VUIiwiaGFuZGxlX2NoYXIiLCJjdXJfcGFyYW0iLCJlc2NfcHJlZml4IiwicXVldWVfY2hhcnMiLCJoYW5kbGVfdXRmOCIsImNoYXJDb2RlQXQiLCJ3cml0ZWxuIiwiaW50ZXJjZXB0QnJvd3NlckV4aXQiLCJldiIsImN0cmxLZXkiLCJvbmJlZm9yZXVubG9hZCIsImtleUNvZGUiLCJhbHRLZXkiLCJtZXRhS2V5Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJ0b191dGY4IiwiciIsInZhbHVlIiwic2VsIiwiZ2V0U2VsZWN0aW9uIiwiaXNDb2xsYXBzZWQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImRlbHRhWSIsIm9ubW91c2V1cCIsIm1vdXNlVXBIYW5kbGVyIiwib25tb3VzZW1vdmUiLCJib2R5IiwibmV3X3lfZGlzcCIsImNsaWVudFkiLCJzZXRUaW1lb3V0Iiwib3V0cHV0SGFuZGxlciIsImdldFNpemUiLCJyZXNpemVQaXhlbCIsIm5ld193aWR0aCIsIm5ld19oZWlnaHQiLCJuZXdfdyIsIm5ld19oIiwiZCIsIm5ld19jdXJfaCIsInNsaWNlIiwidGFnIiwiQmFzZVVJIiwicm9vdE5vZGUiLCJUSEVNRVMiLCJsb2FkX2Nzc19zdHlsZSIsIm5hbWUiLCJjc3Nfc3R5bGUiLCJyZWwiLCJocmVmIiwib25sb2FkIiwib25lcnJvciIsInRvU3RyaW5nIiwicm9vdCIsInRoZW1lIiwibG9hZF9tb2RlX3N0eWxlIiwibW9kZV9zdHlsZSIsInNyYyIsIkV4ZWN1dG9yVUkiLCJwYXJlbnQiLCJidXR0b24iLCJpbm5lclRleHQiLCJmbiIsIlNldHRpbmciLCJpdGVtcyIsIndpZGdldCIsIkVkaXRvclN0eWxlVUkiLCJpZHgiLCJFZGl0b3JVSSIsImVkaXRvciIsIkNvZGVNaXJyb3IiLCJsaW5lTnVtYmVycyIsIm1vZGUiLCJzdHlsZUFjdGl2ZUxpbmUiLCJtYXRjaEJyYWNrZXRzIiwic21hcnRJbmRlbnQiLCJmb2xkR3V0dGVyIiwiYXV0b0Nsb3NlQnJhY2tldHMiLCJndXR0ZXJzIiwiZGl2IiwiZ2V0RG9jIiwic2V0R3V0dGVyTWFya2VyIiwic2V0T3B0aW9uIiwiZ2V0VmFsdWUiLCJJREVVSSIsImVkaXRvcnVpIiwic2V0dGluZyIsImVkaXRvcnN0eWxlIiwiaW5pdCIsImV4ZWN1dG9ydWkiLCJvbkNsaWNrIiwic2V0U3R5bGUiLCJwdXNoV2lkZ2V0IiwiSU9EZXNjcmlwdG9yIiwiaU5vZGUiLCJvTm9kZSIsImlUZXh0Iiwib1RleHQiLCJzZXRFR0kiLCJzZXRFR08iLCJ0aXRsZU5vZGUiLCJjb250ZW50Tm9kZSIsInNldEVHSU8iLCJjaGlsZE5vZGVzIiwicmVwbGFjZUNoaWxkIiwiV2luZG93IiwiUmVzdWx0VUkiLCJpY29uIiwiY29udGVudCIsImFkZENoaWxkIiwib25DbG9zZSIsImhpZGUiLCJzZWN0aW9uIiwiaGlkZGVuIiwiZHJhZ0luZm8iLCJkeCIsImR5IiwidHlwZSIsInRhYkluZGV4IiwiaGVhZGVyIiwiZWxlIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJvbmNsb3NlY2IiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJtdXRhdGlvbiIsImF0dHJpYnV0ZU5hbWUiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsImFkZEhlYWRlckljb24iLCJjb2RlcG9pbnQiLCJraWxsIiwiYXJncyIsImxpc3RlbmVyIiwib3B0cyIsImNsaWVudFgiLCJ1cGRhdGVTbmFwcGluZyIsImdsb2JhbF90aGlzIiwiU0NBTExUQkxTIiwiY29sbGVjdENvZGVSZXQiLCJzY2FsbCIsImxvYWRfbHVhdm0iLCJpbml0U3lzdGVtQ2FsbCIsInJlbmRlciIsInJlc3VsdCIsImV4YW0iLCJ2aXNpdEN1clF1ZXN0aW9uIiwib24iLCJnZXRRdWVzdGlvblRlc3QiLCJhY2NlcHRlZCIsImVycm9yIiwicmVzZXQiLCJzaG93Iiwib2siLCJ2bVJ1bkV4YW1wbGVzIl0sInNvdXJjZVJvb3QiOiIifQ==