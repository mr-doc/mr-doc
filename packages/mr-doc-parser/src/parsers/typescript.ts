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
/// <reference path="../../typings/escodegen/escodegen" />
/// <reference path="../../typings/lodash/lodash" />
/// <reference path="../../typings/eslint/doctrine" />

import Option = require('../option');
import Utils = require('../utils/javascript/index');
import _ = require('lodash');
// TypeScript
import TS = require('typescript-eslint-parser');
//ESTools
import ESCodeGen = require('escodegen');
import ESTraverse = require('estraverse');
import Doctrine = require('doctrine');
// Interface
import IParser = require('../interface');



/**
 * JavaScript parser
 */
class TypeScript implements IParser {
  version: string;
  private file: any;
  private visited: any;
  constructor(version: any) {
    this.version = (version === "" ? "6" : version);
    this.file = {};
    this.visited = {};
  }
  parse(file: Option.File): any[] {
    this.file = file;
    var results: any[] = [];
    var ast = this.getAST(file);
    console.log(ast);
    this.walkComments(ast, 'leadingComments', true, results);
    this.walkComments(ast, 'innerComments', false, results);
    this.walkComments(ast, 'trailingComments', false, results);
    return results;
  }
  private getAST(file: Option.File): any {
   let comments: any[] = [], tokens: any[] = [], ast = TS.parse(file.source, {
     // attach range information to each node
     range: true,
     // attach line/column location information to each node
     loc: true,
     // create a top-level comments array containing all comments
     comment: true,
     // attach comments to the closest relevant node as leadingComments and
     // trailingComments
     attachComment: true,
     // create a top-level tokens array containing all tokens
     tokens: true,
     // specify the language version (3, 5, 6, or 7, default is 5)
     ecmaVersion: parseInt(this.version),
     // specify which type of script you're parsing (script or module, default is script)
     sourceType: "module",
     // specify additional language features
     ecmaFeatures: {
       // enable JSX parsing
       jsx: true,
       // enable return in global scope
       globalReturn: true,
       // enable implied strict mode (if ecmaVersion >= 5)
       impliedStrict: true,
       // allow experimental object rest/spread
       experimentalObjectRestSpread: true
     }
   });
   return ast;
  }
  private walkComments(ast: any, type: string, includeContext: boolean, results: any[]) {
    ESTraverse.traverse(ast, {
          enter: (node: any) => {
            if (node.type === 'Program') {
              node = node.body[0];
            }
            console.log('node', node);
            if (node && node[type]) node[type]
              .filter(this.isJSDocComment)
              .forEach(this.parseComment(node, results, includeContext, this.file));
          }
        });
  }
  private parseComment(node: any, results: any[], includeContext: boolean, file: any) {
    /**
        * Parse a comment with doctrine and decorate the result with file position and code context.
        *
        * @param {Object} comment the current state of the parsed JSDoc comment
        * @return {undefined} this emits data
        */
    var context = {
      loc: _.extend({}, JSON.parse(JSON.stringify(node.loc))),
      file: file,
      code: undefined as any
    };
    return (comment: any) => {
      // Avoid visiting the same comment twice as a leading
      // and trailing node
      var key = JSON.stringify({ loc: comment.loc, range: comment.range });
      if (!this.visited[key]) {
        this.visited[key] = true;
        if (includeContext) {
          // This is non-enumerable so that it doesn't get stringified in
          // output; e.g. by the documentation binary.
          Object.defineProperty(context, 'ast', {
            enumerable: false,
            value: node
          });
          let range = (node.parent && node.parent) ? node.parent.range : [node.start, node.end];
          range = !range ? node.range : range;
          range = !range ? [node.start, node.end] : range;
          context.code = file.source.substring.apply(file.source, range);
        }
        results.push(this.parseJSDoc(comment.value, comment.loc, context));
      }
    }
  }

  private parseJSDoc(comment: any, loc: any, context: any) {
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
  private isJSDocComment(comment: any) {
    var asterisks = comment.value.match(/^(\*+)/);
    return (comment.type === 'CommentBlock' || // estree
      comment.type === 'Block') // get-comments / traditional
      && asterisks && asterisks[1].length === 1;
  }
}

export = TypeScript;
