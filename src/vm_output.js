

class VMOutput {
  constructor(maxLength) {
    this.idx = 0;
    this.idxErr = 0;
    this.maxLength = maxLength || 100;
    this.stdout = [];
    this.stderr = [];
  }

  /**
   * 
   * @param {GCore} core 
   */
  init(core) {
    core.on("code_print", (data) => {
      this.print(data && data.text);
    })
    core.on("code_error", (data) => {
      this.printErr(data && data.text);
    })
  }

  clearOutput() {
    this.stdout = [];
    this.stderr = [];
    this.idx = 0;
    this.idxErr = 0;
  }

  print(msg) {
    this.stdout[this.idx] = msg;
    let idx = (this.idx + 1) % this.maxLength;
    this.idx = idx;
  }
  printErr(msg) {
    this.stderr[this.idxErr] = msg;
    let idx = (this.idxErr + 1) % this.maxLength;
    this.idxErr = idx;
  }

}

export default VMOutput;