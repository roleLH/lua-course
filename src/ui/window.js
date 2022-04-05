

let dragInfo = {
  window: null,
  dx: null,
  dy: null,
};

class Window {
  constructor(title, type) {
    let section = document.createElement("section");
    section.tabIndex = 0;
    section.classList.add("window");
    section.classList.add(type);
    section.onmousedown = (e) => {
      this.foreground();
    };
    section.style.left = "256px";
    section.style.top = "256px";
    section.style.zIndex = 100;

    let header = document.createElement("header");

    header.onmousedown = (e) => {
      e.preventDefault();
      let ele = this.section;
      dragInfo.window = this;
      dragInfo.dx = e.offsetX;
      dragInfo.dy = e.offsetY;
    }
    header.innerText = title;
    section.appendChild(header);

    let content = document.createElement("content");
    section.appendChild(content);

    this.section = section;
    this.header = header;
    this.content = content;
    this.title = title;
    this.type = type;
    this.onclosecb = null;

    this.observer = new MutationObserver((mutations) => {
      for(let mutation of mutations) {
        if(mutation.attributeName == "style") {
          this.section.dispatchEvent(new CustomEvent("win_resize"));
        }
      }
    });
    this.observer.observe(this.content, {
      attributes: true,
    })

    this.addHeaderIcon({
      codepoint: "274C",
      type: "close",
      onclick: () => {
        this.kill();
      }
    });
  }

  addHeaderIcon(args) {
    let icon = document.createElement("icon");
    icon.innerHTML = "&#x" + args.codepoint;
    icon.classList.add(args.type);
    icon.onclick = args.onclick;
    icon.onmousedown = (e) => {e.stopPropagation();}
    this.header.appendChild(icon);
  }

  addEventListener(type, listener, opts) {
    this.section.addEventListener(type, listener, opts);
  }

  addChild(node) {
    this.content.appendChild(node);
  }

  kill() {
    if(this.onclosecb) {
      this.onclosecb();
    }
  //  this.section.parentElement.removeChild(this.section);
  }

  foreground() {
    //TODO:
  }

  updateSnapping() {

  }

  onClose(cb) {
    this.onclosecb = cb;
  }
}



document.addEventListener("mousemove", (e) => {
  if(!dragInfo.window) { return; }
  e.preventDefault();
  let section = dragInfo.window.section;

  section.style.left = `${e.clientX - dragInfo.dx}px`;
  section.style.top  = `${e.clientY - dragInfo.dy}px`;
  dragInfo.window.updateSnapping();
})

document.addEventListener("mouseup", (e) => {
  dragInfo.window = null;
})

export default Window;