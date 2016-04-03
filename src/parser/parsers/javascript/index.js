'use strict';

const Doctrine = require('doctrine');
const IParser = require('../interface');
const Engine = require('../../engines/javascript');
const _ = require('lodash');
const Log = require('mr-doc-utils').Log;
const log = new Log();
const synonyms = require('./synonyms.js');

class JavaScript extends IParser {
  constructor(options) {
    super(options);
    this.visited = {};
    this.engine = new Engine(this.options);
    this.comments = [];
    this.results = [];
  }
  /**
   * Parse the file.
   * @param {Object} - The file to parse.
   */
  parse(file) {
    this.file = file;
    this.ast = this.engine.parse(this.file);
    // DEBUG: AST
    log.debug(Log.color.blue('Length of AST:'), this.ast.body.length);
    [
      { type: 'leadingComments', context: true },
      { type: 'innerComments', context: false },
      { type: 'trailingComments', context: false },
    ].forEach(comment => this.walkComments(comment));
    return this.results;
  }
  /**
   * Walk the comments.
   * @param {Object} - The comment type and context to walk.
   */
  walkComments(comment) {
    Engine.traverse(this.options, this.ast, node => (node[comment.type] || [])
        .filter(this.isJSDocComment)
        .forEach(this.parseComment(node, comment.context)));
  }
  /**
   * Parse the comment.
   * @param {Node} - The current node.
   * @param {Boolean} - The truth value on whether to include the context.
   */
  parseComment(node, includeContext) {
    let range = (node.parent && node.parent) ? node.parent.range : [node.start, node.end];
    range = !range ? node.range : range;
    range = !range ? [node.start, node.end] : range;
    const context = {
      code: null,
      file: this.file,
      loc: _.extend({}, JSON.parse(JSON.stringify(node.loc))),
      range: {
        column: [node.loc.start.column, node.loc.end.column],
        line: [node.loc.start.line, node.loc.end.line],
      },
    };
    return (comment) => {
      const key = JSON.stringify({ loc: comment.loc, range: comment.range });
      if (!this.visited[key]) {
        this.visited[key] = true;
        if (includeContext) {
          Object.defineProperty(context, 'ast', {
            enumerable: false,
            value: node,
          });
          context.code = this.file.source.substring.apply(this.file.source, range);
        }
        this.results.push(this.parseJSDoc(comment.value, comment.loc, context));
      }
    };
  }
  /**
   * Parse the JSDoc comment.
   * @param {String} - The comment to parse.
   * @param {Location} - The comment location.
   * @param {Boolean} - The truth value on whether to include the context.
   */
  parseJSDoc(comment, loc, context) {
    const result = Doctrine.parse(comment, {
      lineNumbers: true,
      recoverable: true,
      sloppy: true,
      unwrap: true,
    });
    result.loc = loc;
    result.context = context;
    result.errors = [];
    let i = 0;
    while (i < result.tags.length) {
      const tag = result.tags[i];
      if (tag.errors) {
        for (let j = 0; j < tag.errors.length; j++) {
          result.errors.push({ message: tag.errors[j] });
        }
        result.tags.splice(i, 1);
      } else i++;
    }
    return JavaScript.normalize(result);
  }
  /**
   * Determine whether the comment is normalized.
   * @param {String} - The comment to determine.
   * @return {Boolean} - The truth value.
   */
  isJSDocComment(comment) {
    const asterisks = comment.value.match(/^(\*+)/);
    return (comment.type === 'CommentBlock' ||
      comment.type === 'Block')
      && asterisks && asterisks[1].length === 1;
  }
  /**
   * Normalize the comment tags.
   * @param {Array} - The comment to normalize.
   * @return {Array} - The comment containing normalized tags.
   */
  static normalize(comment) {
    return _.assignIn({}, comment, {
      tags: comment.tags.map(tag => {
        let title = tag.title.toLowerCase();
        const canonical = synonyms[title];
        if (!canonical) {
          switch (title[0]) {
            case 'e':
              if (title === 'extend') title = 'extends';
              break;
            case 'j':
              if (title === 'jsfiddles') title = 'jsfiddle';
              break;
            default: break;
          }
        }
        return canonical ? _.extend({}, tag, { title: canonical }) : tag;
      }),
    });
  }
}

module.exports = JavaScript;
