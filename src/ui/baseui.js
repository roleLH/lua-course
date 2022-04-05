

/**
 * 
 * @param {String} tag 
 * @param {String} id 
 * @returns 
 */
 export function createElement(tag, id) {
  let node = document.createElement(tag);
  node.id = id;
  return node;
};


export class BaseUI {
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
