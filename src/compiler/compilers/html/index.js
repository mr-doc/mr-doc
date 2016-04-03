'use strict';
const ICompiler = require('../interface');

class HTML extends ICompiler {
  constructor(options) {
    super(options);
    this.results = [];
  }
  compile(comments) {
    this.comments = comments;
  }
}
module.exports = HTML;
