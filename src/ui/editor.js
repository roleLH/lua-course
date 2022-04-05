
import {createElement, BaseUI} from "./baseui.js"
import GCore from "../core.js";


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

THEMES.forEach((theme) => {
  load_css_style(theme, () => {
    console.log("load success", theme);
  })
})

function load_mode_style(name, cb) {
  let mode_style = window.mode_style;
  if(!mode_style) {
    mode_style = {};
  }
  if(mode_style[name]) { return cb && cb(); }
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

class ExecutorUI extends BaseUI {
  constructor(parent) {
    super();
  }
  init() {
    let button = createElement("button", "run");
    button.innerText = "run";
    this.rootNode = button;
  }
  /**
   * 
   * @param {Function} fn 
   */
  onClick(fn) {
    let button = this.rootNode;
    button.onclick = fn;
  }
}

class Setting extends BaseUI {
  constructor() {
    super();
    this.items = {}
  }
  init() {
    this.rootNode = createElement("div", "setting_container");
  }
  pushWidget(name, widget) {
    this.items[name] = widget;
    this.rootNode.appendChild(widget.rootNode);
  }
  removeWidget(name) {
    let widget = this.items[name];
    if(!widget) {return; }
    delete this.items[name];
    this.rootNode.removeChild(widget.rootNode);
  }
}

class EditorStyleUI extends BaseUI {
  constructor() {
    super();
    this.idx = 0;
    this.onclick = null;
  }
  init() {
    let button = createElement("button", "editor_style");
    this.rootNode = button;
    button.innerHTML = THEMES[0];
    button.onclick = (e) => {
      let idx = (this.idx + 1) % THEMES.length;
      let theme = THEMES[idx];
      if(this.onclick) {
        this.onclick(theme);
      }
      this.idx = idx;
      button.innerHTML = theme;
    }
  }
  /**
   * 
   * @param {Function} fn 
   */
  onClick(fn) {
    this.onclick = fn;
  }
}

class EditorUI extends BaseUI {
  constructor() {
    super();
    this.editor = null;
    this.lines = {}
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
    let n = createElement("div", "codeeditor");
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
    n.onmousemove = (e) => {
      // let x = e.clientX; 
      // let y = e.clientY;
      // let info = this.editor.coordsChar({left: x, top: y})
      // console.log(info);
      // if(this.lines[info.line]) {return; }
      // let node2 = document.createElement("div");
      // node2.innerText = "div";
      // this.editor.addWidget(info, node2, true);
    }
    let div = document.createElement("div");
    div.className = "TESTP"
    let doc = this.editor.getDoc()
    doc.setGutterMarker(1, "TEST",div)
  }

  setStyle(style) {
    this.editor.setOption("theme", style);
  }

  value() {
    return this.editor.getValue();
  }
}

class IDEUI { 
  constructor() {
    this.editorui = new EditorUI();
    this.setting = new Setting();
    this.editorstyle = new EditorStyleUI();
    this.init()
  }

  init() {
    this.editorui.init();
    this.setting.init();
    this.editorstyle.init();
    let executorui = new ExecutorUI();
    executorui.init();

    executorui.onClick(() => {
      let code = this.editorui.value();
      GCore.emit("run_code", {code});
    })
    this.editorstyle.onClick((style) => {
      this.editorui.setStyle(style);
    })
    
    this.setting.pushWidget("executor", executorui);
    this.setting.pushWidget("editorstyle", this.editorstyle);
  }

  render() {
    let node = document.querySelector("#editor");
    if(!node) {
      console.log("[error] not found <div> id = editor");
      return;
    }
    this.editorui.renderTo(node);
    this.setting.renderTo(node);
  }
}


export default IDEUI;