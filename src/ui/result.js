import {BaseUI, createElement} from "./baseui"
import Window from "./window";
import GCore from "./../core"


const loading_svg_str = `
<!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
<svg width="58" height="58" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
        <g transform="translate(2 1)" stroke="#FFF" stroke-width="1.5">
            <circle cx="42.601" cy="11.462" r="5" fill-opacity="1" fill="#fff">
                <animate attributeName="fill-opacity"
                     begin="0s" dur="1.3s"
                     values="1;0;0;0;0;0;0;0" calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="49.063" cy="27.063" r="5" fill-opacity="0" fill="#fff">
                <animate attributeName="fill-opacity"
                     begin="0s" dur="1.3s"
                     values="0;1;0;0;0;0;0;0" calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="42.601" cy="42.663" r="5" fill-opacity="0" fill="#fff">
                <animate attributeName="fill-opacity"
                     begin="0s" dur="1.3s"
                     values="0;0;1;0;0;0;0;0" calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="27" cy="49.125" r="5" fill-opacity="0" fill="#fff">
                <animate attributeName="fill-opacity"
                     begin="0s" dur="1.3s"
                     values="0;0;0;1;0;0;0;0" calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="11.399" cy="42.663" r="5" fill-opacity="0" fill="#fff">
                <animate attributeName="fill-opacity"
                     begin="0s" dur="1.3s"
                     values="0;0;0;0;1;0;0;0" calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="4.938" cy="27.063" r="5" fill-opacity="0" fill="#fff">
                <animate attributeName="fill-opacity"
                     begin="0s" dur="1.3s"
                     values="0;0;0;0;0;1;0;0" calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="11.399" cy="11.462" r="5" fill-opacity="0" fill="#fff">
                <animate attributeName="fill-opacity"
                     begin="0s" dur="1.3s"
                     values="0;0;0;0;0;0;1;0" calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="27" cy="5" r="5" fill-opacity="0" fill="#fff">
                <animate attributeName="fill-opacity"
                     begin="0s" dur="1.3s"
                     values="0;0;0;0;0;0;0;1" calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
        </g>
    </g>
</svg>
`;

let succeed_icon = createElement("div", "icon_success");
succeed_icon.innerHTML = "✓";
let failed_icon = createElement("div", "icon_failed");
failed_icon.innerHTML = "✖";
let loading_icon = createElement("div", "icon_loading");
loading_icon.innerHTML = loading_svg_str;

const STATE = {
  loading:  0,
  success:  1,
  failed:   2,
  syntax_error: 3,
  runtime_error: 4,
  timeout: 5,
}

let state_to_icon = (state) => {
  switch(state) {
    case STATE.loading: return loading_icon;
    case STATE.success: return succeed_icon;
    default: return failed_icon; 

  }
}

class ResultUI extends BaseUI {
  constructor() {
    super();
    this.window = null;
    this.state = "hide";
    this.rootNode = createElement("div", "term_container");
    
    this.state = STATE.loading;
    this.icon = null;
    this.content = null;
  }

  init() {
    let node = document.querySelector("body");
    this.renderTo(node);

    this.window = new Window("result", "result");
    this.icon = createElement("div", "icon");
    this.icon.appendChild(loading_icon);
    this.content = createElement("div", "div");
    this.window.addChild(this.icon);
    this.window.addChild(this.content);

    this.window.onClose(() => {
      this.hide();
    })
    this.rootNode.appendChild(this.window.section);
    // this.hide();
  }

  clearContent() {
    this.window.delChild(this.content);
  }

  /**
   * 
   * @param {} info {
   *  state: 0, 1, 2, 3, 4,
   *  title: "",
   *  class: "",
   *  extra_info: () => {}
   * }
   */
  switchResult(info) {
    let old_icon = state_to_icon(this.state);
    let new_icon = state_to_icon(info.state);
    this.icon.replaceChild(new_icon, old_icon);

    let content = createElement("div", "result");
    let title = createElement("h3", "result_title");
    if(info.title) {
      title.innerText = info.title;
    }
    if(info.class) {
      title.classList.add(info.class);
    }
    let extra = info.extra_info ? info.extra_info() : null;
    content.appendChild(title);
    if(extra) {
      content.appendChild(extra);
    }
    this.window.replaceChild(content, this.content);
    this.content = content;
    this.state = info.state;
  }

  loading() {
    let info = {
      state: STATE.loading,
      title: "Loading",
    }
    this.switchResult(info);
  }
  success() {
    let info = {
      state: STATE.success,
      title: "Accepted",
      class: "success",
      extra_info: () => {
        let div = createElement("div");
        let next_text = createElement("p", "next_text");
        next_text.innerText = "一鼓作气！下一题！"
    
        let next_btn = createElement("button", "next_question");
        next_btn.innerText = "next";
        next_btn.onclick = (e) => {
          GCore.emit("next_question");
        }
        div.appendChild(next_text);
        div.appendChild(next_btn);
        return div;
      }
    };
    this.switchResult(info);
  }

  timeout() {
    let info = {
      state: STATE.timeout,
      title: "Time Limited",
      class: "failed",
      extra_info: () => {
        let div = createElement("div");
        let next_text = createElement("p", "timeout");
        next_text.innerText = "抱歉, 超时!"
        div.appendChild(next_text);
        return div;
      }
    };
    this.switchResult(info);
  }

  /**
   * 
   * @param {Array} error_info 
   */
  syntax_error(error_info) {
    let info = {
      state: STATE.syntax_error,
      title: "Compile Error",
      class: "failed",
      extra_info: () => {
        let div = createElement("div", "debug_info");
        let str = "";
        error_info.forEach((info) => {
          str = str + info + "\n";
        })
        let code = createElement("code");
        code.innerText = str;
        
        div.appendChild(code);
        return div;
      }
    };
    this.switchResult(info);
  }

  /**
   * 
   * @param {Array} error_info 
   */
  runtime_error(error_info) {
    let info = {
      state: STATE.runtime_error,
      title: "Runtime Error",
      class: "failed",
      extra_info: () => {
        let div = createElement("div", "debug_info");
        let str = "";
        error_info.forEach((info) => {
          str = str + info + "\n";
        })
        let code = createElement("code");
        code.innerText = str;
        
        div.appendChild(code);
        return div;
      }
    };
    this.switchResult(info);
  }

  wrong_answer(error_info) {
    let info = {
      state: STATE.failed,
      title: "Wrong Answer",
      class: "failed",
      extra_info: () => {
        let div = createElement("div", "debug_info");
        let wrong_msg = createElement("div", "wrong_msg")
        wrong_msg.innerText = "错误的样例:"
      
        let str = "";
        error_info.forEach((info) => {
          str = str + info + "\n";
        })
        let code = createElement("code");
        code.innerText = str;
        
        div.appendChild(wrong_msg);
        div.appendChild(code);
        return div;
      }
    };
    this.switchResult(info);
  }

  something(something_info) {
    let info = {
      state: STATE.success,
      title: "INFO",
      class: "success",
      extra_info: () => {
        let div = createElement("div", "debug_info");
        let str = "";
        something_info.forEach((info) => {
          str = str + info + "\n";
        })
        let code = createElement("code");
        code.innerText = str;
        
        div.appendChild(code);
        return div;
      }
    };
    this.switchResult(info);
  }

}


/**
 * 
 * @param {ResultUI} result 
 */
 function init_result(result) {
  GCore.on("accepted", (data) => {
    console.log(data);
    result.success();
  });
  GCore.on("wrong", (data) => {
    console.log(data)
    result.wrong_answer(data.error_info);
  })
  GCore.on("runtime", (data) => {
    console.log(data)
    result.runtime_error(data.error_info || []);
  })
  GCore.on("timeout", (data) => {
    console.log(data)
    result.timeout(data);
  })
  GCore.on("compile", (data) => {
    console.log(data)
    result.syntax_error(data.error_info);
  })
  // GCore.on("compile", (data) => {
  //   console.log(data)
  //   result.something(data);
  // })
  GCore.on("loading", (data) => {
    result.loading();
  })
}


let GResultUI = new ResultUI()
GResultUI.init();
GResultUI.hide();

GCore.on("run_code", (data) => {
  if(GResultUI.ishide()) {
    GResultUI.show();
  }
});
GCore.on("next_question", (data) => {
  GResultUI.hide();
});

init_result(GResultUI);

export default GResultUI 
