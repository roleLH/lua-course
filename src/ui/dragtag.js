let key_icon = null;

/**
 * 
 * @param {HTMLElement} e 
 */
function darggable(e) {
  
  e.draggable = true;
  e.ondragstart = (ev) => {
    ev.dataTransfer.setData("id", ev.target.id);
    ev.dataTransfer.dropEffect = "move";
    key_icon.hidden = false;
    ev.dataTransfer.setDragImage(key_icon, 25,25);

    e.innerText = "(你知道该怎么操作这个钥匙, 对吗? )"
  }
  e.ondragend = (ev) => {
    e.innerText = "钥匙";
    key_icon.hidden = true;
  }
}

/**
 * 
 * @param {HTMLElement} e 
 */
function droppable(e) {
  e.ondrop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("id");
    if(window.GCore) {
      window.GCore.emit("hide_help");
      window.GCore.emit("advance");
    }
  }
  e.ondragover = (ev) => {
    ev.preventDefault();
  }
}





class DragTag extends HTMLElement {
  constructor() {
    super();
    let parent = this.parentNode.parentNode;
    key_icon = parent.querySelector("#key_icon");
    let gate = parent.querySelector("#gate");
    let key = parent.querySelector("#key");
    if(gate) {
      droppable(gate);
    }
    if(key) {
      darggable(key);
    }
  }
}


window.customElements.define("drag-trigger", DragTag)