'use strict';
const JSONC = require('./compilers/json/');
const Log = require('mr-doc-utils').Log;
const log = new Log();
// const HTML = require('./compilers/html');

class Compiler {
  constructor(options) {
    this.options = options;
  }
  factory() {
    const format = this.options.compiler.file.format;
    // DEBUG: Compiler format
    log.debug(Log.color.blue('Compiler format:'), format);
    switch (format) {
      case 'json':
        return (new JSONC(this.options));
      case 'html':
        // return (new HTML(this.options));
        return null;
      default:
        return null;
    }
  }
}
module.exports = Compiler;
