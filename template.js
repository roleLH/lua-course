
var TEMPLATES = {
  desciptor: function desciptor(title) {
    return "\n  <div id = \"desciptor\">\n    <div id = \"qtitle\">" + title + "</div>\n    <div id = \"qcontent\"></div>\n  </div>\n  ";
  },
  ioitem: function ioitem(i, o) {
    return "\n  <div id = \"ioitem\">\n    <div id = \"ioitemi\">" + i + "</div>\n    <div id = \"ioitemo\">" + o + "</div>\n  </div>\n  ";
  }

};

export default TEMPLATES;