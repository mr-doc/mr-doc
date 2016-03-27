'use strict';
const ICompiler = require('../interface');
const stringify = require('json-stringify');
class JSON extends ICompiler {
  constructor(options) {
    super(options);
    this.results = [];
  }
  compile(comments) {
    this.results = comments;
    this.walk(this.results, function (comment) {
      /* eslint-disable no-param-reassign */
      delete comment.errors;
      /* eslint-enable no-param-reassign */
    });
    return stringify(this.results, null, 2);
  }
  walk(comments, fn, options) {
    comments.forEach(function (comment) {
      fn(comment, options);
      for (const scope in comment.members) {
        if (comment.members.hasOwnProperty(scope)) {
          this.walk(comment.members[scope], fn, options);
        }
      }
    });
  }
}

module.exports = JSON;
