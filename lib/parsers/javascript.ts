/* 
 * Copyright (c) 
 * 2016, mr-doc
 * 2015, documentationjs <>
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */
/// <reference path="../../typings/acorn/acorn" />
/// <reference path="../../typings/escodegen/escodegen" />

import Option = require('../option');
import Utils = require('../utils/index');
// Babylon
import Babylon = require('babylon');
import BabelTraverse = require('babel-traverse');
// Acorn
import Acorn = require('acorn');
//ESTools
import ESCodeGen = require('escodegen');
import ESTraverse = require('estraverse');
import Doctrine = require('doctrine');
import IParser = require('./interface');
import _ = require('lodash');

const traverse = BabelTraverse.default;


/**
 * JavaScript parser
 */
class JavaScript implements IParser {
  version: string;
  parser: string;
  private file: any;
  constructor(version, parser) {
    this.version = version;
    this.parser = parser;
    this.file = {};
  }
  parse(file?): any[] {
    this.file = file;
    var results = [];
    var ast = this.getAST(file)
    this.walkComments(ast, 'leadingComments', true, results);
    this.walkComments(ast, 'innerComments', false, results);
    this.walkComments(ast, 'trailingComments', false, results);
    return results;
  }
  private getAST(file): any {
    switch (this.parser) {
      case 'babylon': {
        return Babylon.parse(file.source, {
          allowImportExportEverywhere: true,
          sourceType: 'module',
          plugins: [
            'jsx',
            'flow',
            'asyncFunctions',
            'classConstructorCall',
            'doExpressions',
            'trailingFunctionCommas',
            'objectRestSpread',
            'decorators',
            'classProperties',
            'exportExtensions',
            'exponentiationOperator',
            'asyncGenerators',
            'functionBind',
            'functionSent'
          ]
        });
      }
      case 'acorn': {
        let comments = [], tokens = [], ast = Acorn.parse(file.source, {
          // collect ranges for each node
          ranges: true,
          // collect locations for each node
          locations: true,
          // collect comments in Esprima's format
          onComment: comments,
          // collect token ranges
          onToken: tokens
        });
        ESCodeGen.attachComments(ast, comments, tokens);
        return ast;
      }
    }
  }
  private walkComments(ast, type: string, includeContext: boolean, results: any[]) {
    var visited = {};
    switch (this.parser) {
      case 'babylon':
        traverse(ast, {
          enter: (path) => {
            var node = path.node;
            if (node && node[type]) node[type]
              .filter(this.isJSDocComment)
              .forEach(this.parseComment(node, results, includeContext, visited, this.file));
          }
        });
        break;
      case 'acorn': {
        ESTraverse.traverse(ast, {
          enter: (node, parent) => {
            if (node.type === 'Program') {
              node = node.body[0];
            }
            if (node && node[type]) node[type]
              .filter(this.isJSDocComment)
              .forEach(this.parseComment(node, results, includeContext, visited, this.file));
          }
        })
      }
    }
  }
  private parseComment(node, results: any[], includeContext: boolean, visited, file: any, parent?) {
    /**
        * Parse a comment with doctrine and decorate the result with file position and code context.
        *
        * @param {Object} comment the current state of the parsed JSDoc comment
        * @return {undefined} this emits data
        */
    var context = {
      loc: _.extend({}, JSON.parse(JSON.stringify(node.loc))),
      file: file,
      code: undefined
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
              .apply(file.source, node.parent.range);
          } else if (node.range) {
            context.code = file.source.substring
              .apply(file.source, node.range);
          } else if(node.start && node.end) {
            context.code = file.source.substring
            .apply(file.source, [node.start, node.end]);
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
    return Utils.flatten(Utils.normalize(result));
  }
  private isJSDocComment(comment) {
    var asterisks = comment.value.match(/^(\*+)/);
    return (comment.type === 'CommentBlock' || // estree
      comment.type === 'Block') // get-comments / traditional
      && asterisks && asterisks[1].length === 1;
  }
}

export = JavaScript;