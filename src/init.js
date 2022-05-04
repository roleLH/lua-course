import 'babel-polyfill';
import IDEUI from "./ui/editor.js";
import GJudgeSystem from './judge_system.js';
import Exam from "./exam.js";
import GHelpWindow from "./ui/help.js"
import GCore from './core.js';

let solve_code = `


function solve(input) 
  -- 在这里面写入你的代码, 并将你的结果返回出去


  return 0
end`

window.onload = function (e) {
  let editor = new IDEUI();
  editor.render();

  let editor_core = editor.editorui;
  editor_core.setValue(solve_code);

  let exam = new Exam();
  exam.visitCurQuestion();
  exam.init()
};

window.GCore = GCore;