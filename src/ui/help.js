import {BaseUI, createElement} from "./baseui"
import Window from "./window";
import GCore from "./../core"
import visitDocumentation from "../../docs";

class HelpWindow extends BaseUI {
  constructor() {
    super();

    this.window = null;
    this.rootNode = createElement("div", "help");
    this.hide();

    let node = document.querySelector("body");
    this.renderTo(node);
  }

  init() {
    this.window = new Window("help", "help");
    this.window.onClose(() => {
      this.removeInfo();
      this.hide();
    })
    this.rootNode.appendChild(this.window.section);
  }

  /**
   * 
   * @param {String} url 
   */
  showInfo(url) {
    if(!url) { return; }
    this.show();
    let content = this.window.content;
    visitDocumentation(url, content);
  }

  removeInfo() {
    let content = this.window.content;
    content.removeChild(content.childNodes[0]);
  }

}


let GHelpWindow = new HelpWindow();
GHelpWindow.init();
GCore.on("help", (data) => {
  let url = data.url;
  GHelpWindow.showInfo(url);
})
export default GHelpWindow;