
import {createElement, BaseUI} from "./baseui.js"
class IODescriptor  extends BaseUI {
  constructor() {
    super();
    this.iNode = null;
    this.oNode = null;

    this.init();
  }

  init() {
    this.rootNode = createElement("div", "eg");
    this.iNode = createElement("div", "egi");
    this.oNode = createElement("div", "ego");

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





class QuestionUI extends BaseUI {
  constructor() {
    super();
    this.titleNode = null;
    this.contentNode = null;

    this.init();
  }

  init() {
    this.rootNode = createElement("div", "question");
    this.titleNode = createElement("div", "qtitle");
    this.contentNode = createElement("div", "qcontent");

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




export default QuestionUI;