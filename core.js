var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Core = function () {
  function Core() {
    _classCallCheck(this, Core);

    this.events = {};
  }
  /**
   * 
   * @param {String} event 
   * @param {Function} cb 
   */


  _createClass(Core, [{
    key: "on",
    value: function on(event, cb) {
      var list = this.events[event];
      if (!list) {
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

  }, {
    key: "emit",
    value: function emit(event, data) {
      var list = this.events[event];
      if (!list) {
        return;
      }
      list.forEach(function (cb) {
        cb(data);
      });
    }
    /**
     * 
     * @param {String} event 
     * @param {Function} cb 
     */

  }, {
    key: "removeEvent",
    value: function removeEvent(event, cb) {
      if (!event) {
        this.events = {};
        return;
      }
      if (!cb) {
        delete this.events[event];
        return;
      }
      var list = this.events[event];
      if (list) {
        list.delete(cb);
      }
    }
  }]);

  return Core;
}();

var GCore = new Core();
export default GCore;