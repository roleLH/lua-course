

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
export default GCore;