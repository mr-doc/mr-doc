'use strict';
const JavaScript = require('./parsers/javascript/');

class Parser {
  constructor(options) {
    this.options = options;
  }
  factory() {
    switch (this.options.parser().language) {
      case 'js':
      case 'javascript':
        return (new JavaScript(this.options));
      default:
        return null;
    }
  }
}
module.exports = Parser;
