/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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




class BaseControllor {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

class QuestionControllor extends BaseControllor{
  constructor() {
    super(new _model_question_js__WEBPACK_IMPORTED_MODULE_1__["default"](0), new _ui_question_js__WEBPACK_IMPORTED_MODULE_0__["default"]());
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


class Core {
  constructor() {
    this.events = {}
  }
  /**
   * 
   * @param {String} event 
   * @param {Function} cb 
   */
  on(event, cb) {
    let list = this.events[event];
    if(!list) {
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
  emit(event, data) {
    let list = this.events[event];
    if(!list) { return; }
    list.forEach((cb) => {
      cb(data);
    })
  }
  /**
   * 
   * @param {String} event 
   * @param {Function} cb 
   */
  removeEvent(event, cb) {
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
}

const GCore = new Core();

GCore.on("run_code", (data) => {
  console.log(data.code);
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GCore);

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Question);

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


/**
 * 
 * @param {String} tag 
 * @param {String} id 
 * @returns 
 */
 function createElement(tag, id) {
  let node = document.createElement(tag);
  node.id = id;
  return node;
};


class BaseUI {
  constructor() {
    this.rootNode = null;
  }
  /**
   * 
   * @param {HTMLElement} node 
   */
  renderTo(node) {
    node.appendChild(this.rootNode);
  }
}


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




const THEMES = [
  "3024-day",
  "3024-night",
  "abbott",
  "abcdef",
  "ambiance-mobile",
  "ambiance",
  "ayu-dark",
  "ayu-mirage",
  "base16-dark",
  "base16-light",
  "bespin",
  "blackboard",
  "cobalt",
  "colorforth",
  "darcula",
  "dracula",
  "duotone-dark",
  "duotone-light",
  "eclipse",
  "elegant",
  "erlang-dark",
  "gruvbox-dark",
  "hopscotch",
  "icecoder",
  "idea",
  "isotope",
  "juejin",
  "lesser-dark",
  "liquibyte",
  "lucario",
  "material-darker",
  "material-ocean",
  "material-palenight",
  "material",
  "mbo",
  "mdn-like",
  "midnight",
  "monokai",
  "moxer",
  "neat",
  "neo",
  "night",
  "nord",
  "oceanic-next",
  "panda-syntax",
  "paraiso-dark",
  "paraiso-light",
  "pastel-on-dark",
  "railscasts",
  "rubyblue",
  "seti",
  "shadowfox",
  "solarized",
  "ssms",
  "the-matrix",
  "tomorrow-night-bright",
  "tomorrow-night-eighties",
  "ttcn",
  "twilight",
  "vibrant-ink",
  "xq-dark",
  "xq-light",
  "yeti",
  "yonce",
  "zenburn",
  ]
  
function load_css_style(name, cb) {
  let css_style = window.css_style;
  if(!css_style) {
    css_style = {};
  }
  if(css_style[name]) { return; }
  let node = document.createElement("link");
  node.rel = "stylesheet"
  let path = "lib/editor/theme/" + name + ".css"
  node.href = path;
  node.onload = (e) => {
    css_style[name] = true;
    if(cb) cb();
  }
  node.onerror = (e) => {
    console.log(e.toString());
  }
  let root = document.querySelector("body");
  root.appendChild(node);
}

function load_mode_style(name, cb) {
  let mode_style = window.mode_style;
  if(!mode_style) {
    mode_style = {};
  }
  if(mode_style[name]) { return; }
  let node = document.createElement("script");
  let path = "lib/editor/mode/" + name + "/" + name + ".js"
  node.src = path;
  node.onload = (e) => {
    mode_style[name] = true;
    if(cb) cb();
  }
  node.onerror = (e) => {
    console.log(e.toString());
  }
  let root = document.querySelector("body")
  root.appendChild(node);
}

  
window.onload = (e) => {
  THEMES.forEach((theme) => {
    load_css_style(theme, () => {
    //  console.log("load success", theme);
    })
  })
  // load_mode_style("lua", console.log("lua success."))
}

class ExecutorUI extends _baseui_js__WEBPACK_IMPORTED_MODULE_0__.BaseUI {
  constructor(parent) {
    super();
    this.parent = parent;
  }
  init() {
    let button = (0,_baseui_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", "run");
    button.innerText = "run";
    button.onclick = () => {
      let code = this.parent.editorui.value();
      _core_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit("run_code", {code});
    }
    this.rootNode = button;
  }
}


class EditorUI extends _baseui_js__WEBPACK_IMPORTED_MODULE_0__.BaseUI {
  constructor() {
    super();
    this.editor = null;
  }

  init() {
    // let node = createElement("div", "codeeditor");
    // this.editor = CodeMirror(node, {
    //   value: "123456",
    //   lineNumbers: true,
    //   mode: "lua",
    //   styleActiveLine: true,
    //   matchBrackets: true
    // });
    // this.rootNode = node;  
  }

  renderTo(node) {
    let n = (0,_baseui_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "codeeditor");
    node.appendChild(n);
    this.editor = CodeMirror(n, {
      value: "123456",
      lineNumbers: true,
      mode: "lua",
      styleActiveLine: true,
      matchBrackets: true,
      smartIndent: false,
    });
  }


  value() {
    return this.editor.getValue();
  }
}

class IDEUI { 
  constructor() {
    this.editorui = new EditorUI();
    this.executorui = new ExecutorUI(this);
    this.editorui.init();
    this.executorui.init();
  }

  render() {
    let node = document.querySelector("#editor");
    if(!node) {
      console.log("[error] not found <div> id = editor");
      return;
    }
    this.editorui.renderTo(node);
    this.executorui.renderTo(node);
  }
}


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


class IODescriptor  extends _baseui_js__WEBPACK_IMPORTED_MODULE_0__.BaseUI {
  constructor() {
    super();
    this.iNode = null;
    this.oNode = null;

    this.init();
  }

  init() {
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
  setEGI(text) {
    this.iNode.innerText = text;
  }

  /**
   * 
   * @param {String} text 
   */
  setEGO(text) {
    this.oNode.innerText = text;
  }

  /**
   * 
   * @param {String} iText 
   * @param {String} oText 
   */
  setEGIO(iText, oText) {
    this.setEGI(iText);
    this.setEGO(oText);
  }

}





class QuestionUI extends _baseui_js__WEBPACK_IMPORTED_MODULE_0__.BaseUI {
  constructor() {
    super();
    this.titleNode = null;
    this.contentNode = null;

    this.init();
  }

  init() {
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
  setTitle(title) {
    this.titleNode.innerHTML = title;
  }

  /**
   * 
   * @param {String} iText 
   * @param {String} oText 
   */
  addExample(iText, oText) {
    let d = new IODescriptor();
    d.setEGIO(iText, oText);
    d.renderTo(this.contentNode);
  }


  replaceExample(idx, iText, oText) {
    let node = this.contentNode.childNodes[idx];
    if(!node) { return; }
    let d = new IODescriptor();
    d.setEGIO(iText, oText);
    this.contentNode.replaceChild(d, node);
    return true;
  }


  /**
   * 
   * @param {Number} idx 
   */
  removeExampleByIdx(idx) {
    let node = this.contentNode.childNodes[idx];
    if(!node) { return; }
    this.contentNode.removeChild(node);
  }

  removeAllExamples() {
    let childNodes = this.contentNode.childNodes
    while(childNodes.length > 0) {
      let node = childNodes[childNodes.length - 1];
      this.contentNode.removeChild(node);
    }
  }


}




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionUI);

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


// import * as lua from "./lua_wedge.js"

window.onload = (e) => {
  var editor = new _ui_editor_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  editor.render();

  var qc = new _controller_question_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  qc.setQuestion(0);
  qc.render();
  
}

//export default 123


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7QUFLQSxpRUFBZSxVQUFVOzs7Ozs7VUM3SHpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ3dCO0FBQzFEOztBQUVBO0FBQ0EsbUJBQW1CLHFEQUFLO0FBQ3hCOztBQUVBLGVBQWUsK0RBQWtCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXR0by1tYWluLy4vc3JjL2NvbnRyb2xsZXIvcXVlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vYXR0by1tYWluLy4vc3JjL2NvcmUuanMiLCJ3ZWJwYWNrOi8vYXR0by1tYWluLy4vc3JjL21vZGVsL3F1ZXN0aW9uLmpzIiwid2VicGFjazovL2F0dG8tbWFpbi8uL3NyYy91aS9iYXNldWkuanMiLCJ3ZWJwYWNrOi8vYXR0by1tYWluLy4vc3JjL3VpL2VkaXRvci5qcyIsIndlYnBhY2s6Ly9hdHRvLW1haW4vLi9zcmMvdWkvcXVlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vYXR0by1tYWluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2F0dG8tbWFpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXR0by1tYWluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXR0by1tYWluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXR0by1tYWluLy4vc3JjL2luaXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFF1ZXN0aW9uVUkgZnJvbSBcIi4uL3VpL3F1ZXN0aW9uLmpzXCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4uL21vZGVsL3F1ZXN0aW9uLmpzXCI7XG5cblxuY2xhc3MgQmFzZUNvbnRyb2xsb3Ige1xuICBjb25zdHJ1Y3Rvcihtb2RlbCwgdmlldykge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICB9XG59XG5cbmNsYXNzIFF1ZXN0aW9uQ29udHJvbGxvciBleHRlbmRzIEJhc2VDb250cm9sbG9ye1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihuZXcgUXVlc3Rpb24oMCksIG5ldyBRdWVzdGlvblVJKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0ge051bWJlcn0gaWQgXG4gICAqL1xuICBzZXRRdWVzdGlvbihpZCkge1xuICAgIHRoaXMubW9kZWwuc2V0UXVlc3Rpb24oaWQpO1xuICAgIGxldCB0aXRsZSA9IHRoaXMubW9kZWwuZ2V0VGl0bGUoKTtcbiAgICB0aGlzLnZpZXcuc2V0VGl0bGUodGl0bGUpO1xuICAgIGxldCBpbm91dHMgPSB0aGlzLm1vZGVsLmdldEluT3V0cygpO1xuICAgIHRoaXMudmlldy5yZW1vdmVBbGxFeGFtcGxlcygpO1xuICAgIGlub3V0cy5mb3JFYWNoKCh0ZXh0cykgPT4ge1xuICAgICAgdGhpcy52aWV3LmFkZEV4YW1wbGUodGV4dHNbMF0sIHRleHRzWzFdKTtcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdG9yXCIpO1xuICAgIHRoaXMudmlldy5yZW5kZXJUbyhub2RlKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uQ29udHJvbGxvciIsIlxuXG5jbGFzcyBDb3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBcbiAgICovXG4gIG9uKGV2ZW50LCBjYikge1xuICAgIGxldCBsaXN0ID0gdGhpcy5ldmVudHNbZXZlbnRdO1xuICAgIGlmKCFsaXN0KSB7XG4gICAgICBsaXN0ID0gbmV3IFNldCgpO1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnRdID0gbGlzdDtcbiAgICB9XG4gICAgbGlzdC5hZGQoY2IpO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IFxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBcbiAgICovXG4gIGVtaXQoZXZlbnQsIGRhdGEpIHtcbiAgICBsZXQgbGlzdCA9IHRoaXMuZXZlbnRzW2V2ZW50XTtcbiAgICBpZighbGlzdCkgeyByZXR1cm47IH1cbiAgICBsaXN0LmZvckVhY2goKGNiKSA9PiB7XG4gICAgICBjYihkYXRhKTtcbiAgICB9KVxuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBcbiAgICovXG4gIHJlbW92ZUV2ZW50KGV2ZW50LCBjYikge1xuICAgIGlmKCFldmVudCkge1xuICAgICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYoIWNiKSB7XG4gICAgICBkZWxldGUgdGhpcy5ldmVudHNbZXZlbnRdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgbGlzdCA9IHRoaXMuZXZlbnRzW2V2ZW50XTtcbiAgICBpZihsaXN0KSB7XG4gICAgICBsaXN0LmRlbGV0ZShjYik7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IEdDb3JlID0gbmV3IENvcmUoKTtcblxuR0NvcmUub24oXCJydW5fY29kZVwiLCAoZGF0YSkgPT4ge1xuICBjb25zb2xlLmxvZyhkYXRhLmNvZGUpO1xufSlcblxuZXhwb3J0IGRlZmF1bHQgR0NvcmU7IiwiXG5cblxuLyoqXG4gKiBAdGltZSAwMy0xMi0yMDIyXG4gKiBAZGVzY3JpcHRpb24g5L2g55+l6YGT55qE77yM5oiR5oC75piv5Zac5qyi5YaZ54K55peg6IGK55qE5Lic6KW/XG4gKiB7XG4gKiAgICBpZDogMCxcbiAqICAgIHRpdGxlOiBcIlwiLFxuICogICAgaW5vdXRzOiBbXSxcbiAqIH1cbiAqL1xuY29uc3QgUVVFU1RJT05TID0gW107XG5jb25zdCBERUZBVUxUX1FVRVNUSU9OID0ge1xuICBpZCA6IDAsXG4gIHRpdGxlIDogXCJkZWZhdWx0XCIsXG4gIGlub3V0cyA6IFtcbiAgICBbXCIwZmZmZmZmZmZmZmR2dnZhYWFhcTFzcXdlcXdlcXdlcXdlZWVlZVwiLCBcIjBcIl0sXG4gICAgW1wiMVwiLCBcIjFcIl0sXG4gICAgW1wiMlwiLCBcIjJcIl1cbiAgXVxufVxuXG5cblxuY2xhc3MgUXVlc3Rpb24ge1xuICBjb25zdHJ1Y3RvcihpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnF1ZXN0aW9uID0gREVGQVVMVF9RVUVTVElPTjtcbiAgICB0aGlzLnNldFF1ZXN0aW9uKGlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlkIFxuICAgKi9cbiAgc2V0UXVlc3Rpb24oaWQpIHtcbiAgICBsZXQgcXVlc3Rpb24gPSBRVUVTVElPTlNbaWRdO1xuICAgIGlmKCFxdWVzdGlvbikge1xuICAgICAgY29uc29sZS5sb2coXCJbcXVlc3Rpb25dIGVycm9yIG5vdCBmb3VuZCBpZFwiLCBpZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucXVlc3Rpb24gPSBxdWVzdGlvbjtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXN0aW9uLnRpdGxlO1xuICB9XG4gIGdldEluT3V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVzdGlvbi5pbm91dHM7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbjsiLCJcblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7U3RyaW5nfSB0YWcgXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgXG4gKiBAcmV0dXJucyBcbiAqL1xuIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgaWQpIHtcbiAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIG5vZGUuaWQgPSBpZDtcbiAgcmV0dXJuIG5vZGU7XG59O1xuXG5cbmV4cG9ydCBjbGFzcyBCYXNlVUkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJvb3ROb2RlID0gbnVsbDtcbiAgfVxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGUgXG4gICAqL1xuICByZW5kZXJUbyhub2RlKSB7XG4gICAgbm9kZS5hcHBlbmRDaGlsZCh0aGlzLnJvb3ROb2RlKTtcbiAgfVxufVxuIiwiXG5pbXBvcnQge2NyZWF0ZUVsZW1lbnQsIEJhc2VVSX0gZnJvbSBcIi4vYmFzZXVpLmpzXCJcbmltcG9ydCBHQ29yZSBmcm9tIFwiLi4vY29yZS5qc1wiO1xuXG5jb25zdCBUSEVNRVMgPSBbXG4gIFwiMzAyNC1kYXlcIixcbiAgXCIzMDI0LW5pZ2h0XCIsXG4gIFwiYWJib3R0XCIsXG4gIFwiYWJjZGVmXCIsXG4gIFwiYW1iaWFuY2UtbW9iaWxlXCIsXG4gIFwiYW1iaWFuY2VcIixcbiAgXCJheXUtZGFya1wiLFxuICBcImF5dS1taXJhZ2VcIixcbiAgXCJiYXNlMTYtZGFya1wiLFxuICBcImJhc2UxNi1saWdodFwiLFxuICBcImJlc3BpblwiLFxuICBcImJsYWNrYm9hcmRcIixcbiAgXCJjb2JhbHRcIixcbiAgXCJjb2xvcmZvcnRoXCIsXG4gIFwiZGFyY3VsYVwiLFxuICBcImRyYWN1bGFcIixcbiAgXCJkdW90b25lLWRhcmtcIixcbiAgXCJkdW90b25lLWxpZ2h0XCIsXG4gIFwiZWNsaXBzZVwiLFxuICBcImVsZWdhbnRcIixcbiAgXCJlcmxhbmctZGFya1wiLFxuICBcImdydXZib3gtZGFya1wiLFxuICBcImhvcHNjb3RjaFwiLFxuICBcImljZWNvZGVyXCIsXG4gIFwiaWRlYVwiLFxuICBcImlzb3RvcGVcIixcbiAgXCJqdWVqaW5cIixcbiAgXCJsZXNzZXItZGFya1wiLFxuICBcImxpcXVpYnl0ZVwiLFxuICBcImx1Y2FyaW9cIixcbiAgXCJtYXRlcmlhbC1kYXJrZXJcIixcbiAgXCJtYXRlcmlhbC1vY2VhblwiLFxuICBcIm1hdGVyaWFsLXBhbGVuaWdodFwiLFxuICBcIm1hdGVyaWFsXCIsXG4gIFwibWJvXCIsXG4gIFwibWRuLWxpa2VcIixcbiAgXCJtaWRuaWdodFwiLFxuICBcIm1vbm9rYWlcIixcbiAgXCJtb3hlclwiLFxuICBcIm5lYXRcIixcbiAgXCJuZW9cIixcbiAgXCJuaWdodFwiLFxuICBcIm5vcmRcIixcbiAgXCJvY2VhbmljLW5leHRcIixcbiAgXCJwYW5kYS1zeW50YXhcIixcbiAgXCJwYXJhaXNvLWRhcmtcIixcbiAgXCJwYXJhaXNvLWxpZ2h0XCIsXG4gIFwicGFzdGVsLW9uLWRhcmtcIixcbiAgXCJyYWlsc2Nhc3RzXCIsXG4gIFwicnVieWJsdWVcIixcbiAgXCJzZXRpXCIsXG4gIFwic2hhZG93Zm94XCIsXG4gIFwic29sYXJpemVkXCIsXG4gIFwic3Ntc1wiLFxuICBcInRoZS1tYXRyaXhcIixcbiAgXCJ0b21vcnJvdy1uaWdodC1icmlnaHRcIixcbiAgXCJ0b21vcnJvdy1uaWdodC1laWdodGllc1wiLFxuICBcInR0Y25cIixcbiAgXCJ0d2lsaWdodFwiLFxuICBcInZpYnJhbnQtaW5rXCIsXG4gIFwieHEtZGFya1wiLFxuICBcInhxLWxpZ2h0XCIsXG4gIFwieWV0aVwiLFxuICBcInlvbmNlXCIsXG4gIFwiemVuYnVyblwiLFxuICBdXG4gIFxuZnVuY3Rpb24gbG9hZF9jc3Nfc3R5bGUobmFtZSwgY2IpIHtcbiAgbGV0IGNzc19zdHlsZSA9IHdpbmRvdy5jc3Nfc3R5bGU7XG4gIGlmKCFjc3Nfc3R5bGUpIHtcbiAgICBjc3Nfc3R5bGUgPSB7fTtcbiAgfVxuICBpZihjc3Nfc3R5bGVbbmFtZV0pIHsgcmV0dXJuOyB9XG4gIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIG5vZGUucmVsID0gXCJzdHlsZXNoZWV0XCJcbiAgbGV0IHBhdGggPSBcImxpYi9lZGl0b3IvdGhlbWUvXCIgKyBuYW1lICsgXCIuY3NzXCJcbiAgbm9kZS5ocmVmID0gcGF0aDtcbiAgbm9kZS5vbmxvYWQgPSAoZSkgPT4ge1xuICAgIGNzc19zdHlsZVtuYW1lXSA9IHRydWU7XG4gICAgaWYoY2IpIGNiKCk7XG4gIH1cbiAgbm9kZS5vbmVycm9yID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLnRvU3RyaW5nKCkpO1xuICB9XG4gIGxldCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIHJvb3QuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRfbW9kZV9zdHlsZShuYW1lLCBjYikge1xuICBsZXQgbW9kZV9zdHlsZSA9IHdpbmRvdy5tb2RlX3N0eWxlO1xuICBpZighbW9kZV9zdHlsZSkge1xuICAgIG1vZGVfc3R5bGUgPSB7fTtcbiAgfVxuICBpZihtb2RlX3N0eWxlW25hbWVdKSB7IHJldHVybjsgfVxuICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gIGxldCBwYXRoID0gXCJsaWIvZWRpdG9yL21vZGUvXCIgKyBuYW1lICsgXCIvXCIgKyBuYW1lICsgXCIuanNcIlxuICBub2RlLnNyYyA9IHBhdGg7XG4gIG5vZGUub25sb2FkID0gKGUpID0+IHtcbiAgICBtb2RlX3N0eWxlW25hbWVdID0gdHJ1ZTtcbiAgICBpZihjYikgY2IoKTtcbiAgfVxuICBub2RlLm9uZXJyb3IgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudG9TdHJpbmcoKSk7XG4gIH1cbiAgbGV0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICByb290LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuXG4gIFxud2luZG93Lm9ubG9hZCA9IChlKSA9PiB7XG4gIFRIRU1FUy5mb3JFYWNoKCh0aGVtZSkgPT4ge1xuICAgIGxvYWRfY3NzX3N0eWxlKHRoZW1lLCAoKSA9PiB7XG4gICAgLy8gIGNvbnNvbGUubG9nKFwibG9hZCBzdWNjZXNzXCIsIHRoZW1lKTtcbiAgICB9KVxuICB9KVxuICAvLyBsb2FkX21vZGVfc3R5bGUoXCJsdWFcIiwgY29uc29sZS5sb2coXCJsdWEgc3VjY2Vzcy5cIikpXG59XG5cbmNsYXNzIEV4ZWN1dG9yVUkgZXh0ZW5kcyBCYXNlVUkge1xuICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB9XG4gIGluaXQoKSB7XG4gICAgbGV0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJydW5cIik7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IFwicnVuXCI7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBsZXQgY29kZSA9IHRoaXMucGFyZW50LmVkaXRvcnVpLnZhbHVlKCk7XG4gICAgICBHQ29yZS5lbWl0KFwicnVuX2NvZGVcIiwge2NvZGV9KTtcbiAgICB9XG4gICAgdGhpcy5yb290Tm9kZSA9IGJ1dHRvbjtcbiAgfVxufVxuXG5cbmNsYXNzIEVkaXRvclVJIGV4dGVuZHMgQmFzZVVJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmVkaXRvciA9IG51bGw7XG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vIGxldCBub2RlID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNvZGVlZGl0b3JcIik7XG4gICAgLy8gdGhpcy5lZGl0b3IgPSBDb2RlTWlycm9yKG5vZGUsIHtcbiAgICAvLyAgIHZhbHVlOiBcIjEyMzQ1NlwiLFxuICAgIC8vICAgbGluZU51bWJlcnM6IHRydWUsXG4gICAgLy8gICBtb2RlOiBcImx1YVwiLFxuICAgIC8vICAgc3R5bGVBY3RpdmVMaW5lOiB0cnVlLFxuICAgIC8vICAgbWF0Y2hCcmFja2V0czogdHJ1ZVxuICAgIC8vIH0pO1xuICAgIC8vIHRoaXMucm9vdE5vZGUgPSBub2RlOyAgXG4gIH1cblxuICByZW5kZXJUbyhub2RlKSB7XG4gICAgbGV0IG4gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiY29kZWVkaXRvclwiKTtcbiAgICBub2RlLmFwcGVuZENoaWxkKG4pO1xuICAgIHRoaXMuZWRpdG9yID0gQ29kZU1pcnJvcihuLCB7XG4gICAgICB2YWx1ZTogXCIxMjM0NTZcIixcbiAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxuICAgICAgbW9kZTogXCJsdWFcIixcbiAgICAgIHN0eWxlQWN0aXZlTGluZTogdHJ1ZSxcbiAgICAgIG1hdGNoQnJhY2tldHM6IHRydWUsXG4gICAgICBzbWFydEluZGVudDogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuXG4gIHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmVkaXRvci5nZXRWYWx1ZSgpO1xuICB9XG59XG5cbmNsYXNzIElERVVJIHsgXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZWRpdG9ydWkgPSBuZXcgRWRpdG9yVUkoKTtcbiAgICB0aGlzLmV4ZWN1dG9ydWkgPSBuZXcgRXhlY3V0b3JVSSh0aGlzKTtcbiAgICB0aGlzLmVkaXRvcnVpLmluaXQoKTtcbiAgICB0aGlzLmV4ZWN1dG9ydWkuaW5pdCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0b3JcIik7XG4gICAgaWYoIW5vZGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW2Vycm9yXSBub3QgZm91bmQgPGRpdj4gaWQgPSBlZGl0b3JcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZWRpdG9ydWkucmVuZGVyVG8obm9kZSk7XG4gICAgdGhpcy5leGVjdXRvcnVpLnJlbmRlclRvKG5vZGUpO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSURFVUk7IiwiXG5pbXBvcnQge2NyZWF0ZUVsZW1lbnQsIEJhc2VVSX0gZnJvbSBcIi4vYmFzZXVpLmpzXCJcbmNsYXNzIElPRGVzY3JpcHRvciAgZXh0ZW5kcyBCYXNlVUkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaU5vZGUgPSBudWxsO1xuICAgIHRoaXMub05vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMucm9vdE5vZGUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZWdcIik7XG4gICAgdGhpcy5pTm9kZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJlZ2lcIik7XG4gICAgdGhpcy5vTm9kZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJlZ29cIik7XG5cbiAgICB0aGlzLnJvb3ROb2RlLmFwcGVuZENoaWxkKHRoaXMuaU5vZGUpO1xuICAgIHRoaXMucm9vdE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5vTm9kZSk7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0IFxuICAgKi9cbiAgc2V0RUdJKHRleHQpIHtcbiAgICB0aGlzLmlOb2RlLmlubmVyVGV4dCA9IHRleHQ7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0IFxuICAgKi9cbiAgc2V0RUdPKHRleHQpIHtcbiAgICB0aGlzLm9Ob2RlLmlubmVyVGV4dCA9IHRleHQ7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpVGV4dCBcbiAgICogQHBhcmFtIHtTdHJpbmd9IG9UZXh0IFxuICAgKi9cbiAgc2V0RUdJTyhpVGV4dCwgb1RleHQpIHtcbiAgICB0aGlzLnNldEVHSShpVGV4dCk7XG4gICAgdGhpcy5zZXRFR08ob1RleHQpO1xuICB9XG5cbn1cblxuXG5cblxuXG5jbGFzcyBRdWVzdGlvblVJIGV4dGVuZHMgQmFzZVVJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnRpdGxlTm9kZSA9IG51bGw7XG4gICAgdGhpcy5jb250ZW50Tm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5yb290Tm9kZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJxdWVzdGlvblwiKTtcbiAgICB0aGlzLnRpdGxlTm9kZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJxdGl0bGVcIik7XG4gICAgdGhpcy5jb250ZW50Tm9kZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJxY29udGVudFwiKTtcblxuICAgIHRoaXMucm9vdE5vZGUuYXBwZW5kQ2hpbGQodGhpcy50aXRsZU5vZGUpO1xuICAgIHRoaXMucm9vdE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50Tm9kZSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlIFxuICAgKi9cbiAgc2V0VGl0bGUodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlTm9kZS5pbm5lckhUTUwgPSB0aXRsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHtTdHJpbmd9IGlUZXh0IFxuICAgKiBAcGFyYW0ge1N0cmluZ30gb1RleHQgXG4gICAqL1xuICBhZGRFeGFtcGxlKGlUZXh0LCBvVGV4dCkge1xuICAgIGxldCBkID0gbmV3IElPRGVzY3JpcHRvcigpO1xuICAgIGQuc2V0RUdJTyhpVGV4dCwgb1RleHQpO1xuICAgIGQucmVuZGVyVG8odGhpcy5jb250ZW50Tm9kZSk7XG4gIH1cblxuXG4gIHJlcGxhY2VFeGFtcGxlKGlkeCwgaVRleHQsIG9UZXh0KSB7XG4gICAgbGV0IG5vZGUgPSB0aGlzLmNvbnRlbnROb2RlLmNoaWxkTm9kZXNbaWR4XTtcbiAgICBpZighbm9kZSkgeyByZXR1cm47IH1cbiAgICBsZXQgZCA9IG5ldyBJT0Rlc2NyaXB0b3IoKTtcbiAgICBkLnNldEVHSU8oaVRleHQsIG9UZXh0KTtcbiAgICB0aGlzLmNvbnRlbnROb2RlLnJlcGxhY2VDaGlsZChkLCBub2RlKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0ge051bWJlcn0gaWR4IFxuICAgKi9cbiAgcmVtb3ZlRXhhbXBsZUJ5SWR4KGlkeCkge1xuICAgIGxldCBub2RlID0gdGhpcy5jb250ZW50Tm9kZS5jaGlsZE5vZGVzW2lkeF07XG4gICAgaWYoIW5vZGUpIHsgcmV0dXJuOyB9XG4gICAgdGhpcy5jb250ZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgfVxuXG4gIHJlbW92ZUFsbEV4YW1wbGVzKCkge1xuICAgIGxldCBjaGlsZE5vZGVzID0gdGhpcy5jb250ZW50Tm9kZS5jaGlsZE5vZGVzXG4gICAgd2hpbGUoY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgbm9kZSA9IGNoaWxkTm9kZXNbY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcbiAgICAgIHRoaXMuY29udGVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxuICB9XG5cblxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvblVJOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IElERVVJIGZyb20gXCIuL3VpL2VkaXRvci5qc1wiXG5pbXBvcnQgUXVlc3Rpb25Db250cm9sbG9yIGZyb20gXCIuL2NvbnRyb2xsZXIvcXVlc3Rpb24uanNcIjtcbi8vIGltcG9ydCAqIGFzIGx1YSBmcm9tIFwiLi9sdWFfd2VkZ2UuanNcIlxuXG53aW5kb3cub25sb2FkID0gKGUpID0+IHtcbiAgdmFyIGVkaXRvciA9IG5ldyBJREVVSSgpO1xuICBlZGl0b3IucmVuZGVyKCk7XG5cbiAgdmFyIHFjID0gbmV3IFF1ZXN0aW9uQ29udHJvbGxvcigpO1xuICBxYy5zZXRRdWVzdGlvbigwKTtcbiAgcWMucmVuZGVyKCk7XG4gIFxufVxuXG4vL2V4cG9ydCBkZWZhdWx0IDEyM1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=