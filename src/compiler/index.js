'use strict';
const JSONC = require('./compilers/json/');
// const HTML = require('./compilers/html');

class Compiler {
  constructor(options) {
    this.options = options;
  }
  factory() {
    switch (this.options.compiler().file.format) {
      case 'json':
        return (new JSONC(this.options));
      case 'html':
        // return (new HTML(this.options));
      default:
        return null;
    }
  }
}
module.exports = Compiler;
