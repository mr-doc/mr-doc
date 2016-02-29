
/// <reference path="../typings/acorn/acorn" />
/// <reference path="../typings/escodegen/escodegen" />
/// <reference path="../typings/extend/extend" />


import Option = require('./option');
import Acorn = require('acorn');
import ESCodeGen = require('escodegen');
import ESTraverse = require('estraverse');
import Extend = require('extend');
import Doctrine = require('doctrine');
import Flatten = require('./utils/flatten');
import Normalize = require('./utils/normalize');
/**
 *  Parser interface
 * 
 *  Defines the parser
 */

interface IParser {
  version: string;
  parse(): Object;
}

/**
 * JavaScript parser
 */
class JavaScript implements IParser {
  version: string;
  private comments: Array<any>;
  private tokens: Array<any>;
  private file: any;
  private results: Array<any>;
  constructor(version) {
    this.version = version;
    this.comments = [];
    this.tokens = [];
    this.file = {};
    this.results = [];
  }
  parse(file?: any | Object): Object {
    this.file = file;
    var results = [];
    var ast = Acorn.parse(file.source, {
      // collect ranges for each node
      ranges: true,
      // collect comments in Esprima's format
      onComment: this.comments,
      // collect token ranges
      onToken: this.tokens
    });
    ESCodeGen.attachComments(ast, this.comments, this.tokens);
    this.walkComments(ast, 'leadingComments', true, result);
    this.walkComments(ast, 'innerComments', false, result);
    this.walkComments(ast, 'trailingComments', false, results);
    return results;
  }

  private walkComments(ast: ESTree.Program, type: string, includeContext: boolean, results: any[]) {
    ESTraverse.traverse(ast, {
      enter: (node, parent) => {
        console.log(parent);
        // (node.body || [])
        //   .filter(this.isJSDocComment)
        //   .forEach(this.parseComment(node, results, includeContext, this.file));
      }
    });
  }
  private parseComment(node, results, includeContext: boolean, file: any) {
    let visited = {};
    /**
        * Parse a comment with doctrine and decorate the result with file position and code context.
        *
        * @param {Object} comment the current state of the parsed JSDoc comment
        * @return {undefined} this emits data
        */
    var context = {
      loc: Extend({}, JSON.parse(JSON.stringify(node.range))),
      file: file
    };
    return (comment) => {
      // Avoid visiting the same comment twice as a leading
      // and trailing node
      var key = JSON.stringify(comment.loc);
      if (!visited[key]) {
        visited[key] = true;
        if (includeContext) {
          // This is non-enumerable so that it doesn't get stringified in
          // output; e.g. by the documentation binary.
          Object.defineProperty(context, 'ast', {
            enumerable: false,
            value: node
          });

          if (node.parent && node.parent.node) {
            context.code = file.source.substring
              .apply(file.source, node.parent.node.range);
          }
        }
        results.push(this.parseJSDoc(comment.value, comment.loc, context));
      }
    }
  }

  private parseJSDoc(comment, loc, context) {
    var result = Doctrine.parse(comment, {
      // have doctrine itself remove the comment asterisks from content
      unwrap: true,
      // enable parsing of optional parameters in brackets, JSDoc3 style
      sloppy: true,
      // `recoverable: true` is the only way to get error information out
      recoverable: true,
      // include line numbers
      lineNumbers: true
    });

    result.loc = loc;
    result.context = context;
    result.errors = [];

    var i = 0;
    while (i < result.tags.length) {
      var tag = result.tags[i];
      if (tag.errors) {
        for (var j = 0; j < tag.errors.length; j++) {
          result.errors.push({ message: tag.errors[j] });
        }
        result.tags.splice(i, 1);
      } else {
        i++;
      }
    }

    return Flatten(Normalize(result));
  }
  private isJSDocComment(comment) {
    var asterisks = comment.value.match(/^(\*+)/);
    return (comment.type === 'CommentBlock' || // estree
      comment.type === 'Block') // get-comments / traditional
      && asterisks && asterisks[1].length === 1;
  }
}


/**
 * Parser
 */
class Parser {
  config: Option.ParserOption;
  constructor(config: Option.ParserOption) {
    this.config = config;
  }

  factory(): IParser {
    switch (this.config.language) {
      case 'javascript':
        return new JavaScript(this.config.version);
    }
  }
}

var parser = (new Parser({ language: 'javascript' })).factory();
var result = parser.parse({
  name: 'index',
  path: 'lib/',
  source: 'var x = 42; // answer\n /* Hello */'
});
console.log(result);
export = Parser;