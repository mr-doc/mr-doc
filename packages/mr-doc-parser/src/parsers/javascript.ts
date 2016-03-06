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
/// <reference path="../../typings/lodash/lodash" />
/// <reference path="../../typings/babylon/babylon" />
/// <reference path="../../typings/babylon/traverse" />
/// <reference path="../../typings/eslint/doctrine" />

import Option = require('../option');
import Utils = require('../utils/javascript/index');
import _ = require('lodash');
// Babylon
import Babylon = require('babylon');
import BabelTraverse = require('babel-traverse');
// Acorn
import Acorn = require('acorn');
// Espree
import Espree = require('espree');
// ESTools
import ESCodeGen = require('escodegen');
import ESTraverse = require('estraverse');
import Doctrine = require('doctrine');
// Interface
import IParser = require('../interface');

const traverse = BabelTraverse.default;


/**
 * JavaScript parser
 */
class JavaScript implements IParser {
  public version: string;
  public engine: string;
  private file: any;
  private visited: any;
  constructor(options: Option.Parser) {
    this.version = _.isEmpty(options.version) ? '6' : options.version;
    this.engine = _.isEmpty(options.engine) ? 'espree' : options.engine;
    this.file = {};
    this.visited = {};
  }
  public parse(file: Option.File): any[] {
    this.file = file;
    let results: any[] = [];
    let ast = this.getAST(file);
    this.walkComments(ast, 'leadingComments', true, results);
    this.walkComments(ast, 'innerComments', false, results);
    this.walkComments(ast, 'trailingComments', false, results);
    return results;
  }
  private getAST(file: Option.File): any {
    switch (this.engine) {
      case 'babylon': {
        return Babylon.parse(file.source, {
          allowImportExportEverywhere: true,
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
            'functionSent',
          ],
          sourceType: 'module',
        });
      }
      case 'acorn': {
        let comments: any[] = [], tokens: any[] = [], ast = Acorn.parse(file.source, {
          ecmaVersion: parseInt(this.version, 10),
          locations: true,
          onComment: comments,
          onToken: tokens,
          ranges: true,
        });
        ESCodeGen.attachComments(ast, comments, tokens);
        return ast;
      }
      case 'espree': {
        let ast = Espree.parse(file.source, {
          attachComment: true,
          comment: true,
          ecmaFeatures: {
           experimentalObjectRestSpread: true,
           globalReturn: true,
           impliedStrict: true,
            jsx: true,
          },
          ecmaVersion: parseInt(this.version, 10),
          loc: true,
          range: true,
          sourceType: 'module',
          tokens: true,
        });
        return ast;
      }
    }
  }
  private walkComments(ast: any, type: string, includeContext: boolean, results: any[]) {
    switch (this.engine) {
      case 'babylon':
        traverse(ast, {
          enter: (path: any) => {
            let node = path.node;
            if (node && node[type]) {
             node[type]
               .filter(this.isJSDocComment)
               .forEach(this.parseComment(node, results, includeContext, this.file));
            }
          }, });
        break;
      default:
        ESTraverse.traverse(ast, {
          enter: (node: any) => {
            if (node.type === 'Program') {
              node = node.body[0];
            }
            if (node && node[type]) {
             node[type]
               .filter(this.isJSDocComment)
               .forEach(this.parseComment(node, results, includeContext, this.file));
            }
          }, });
        break;
    }
  }
  private parseComment(node: any, results: any[], includeContext: boolean, file: any) {
    /**
        * Parse a comment with doctrine and decorate the result with file position and code context.
        *
        * @param {Object} comment the current state of the parsed JSDoc comment
        * @return {undefined} this emits data
        */
    let context = {
      code: undefined as any,
      file: file,
      loc: _.extend({}, JSON.parse(JSON.stringify(node.loc))),
    };
    return (comment: any) => {
      // Avoid visiting the same comment twice as a leading
      // and trailing node
      let key = JSON.stringify({ loc: comment.loc, range: comment.range });
      if (!this.visited[key]) {
        this.visited[key] = true;
        if (includeContext) {
          // This is non-enumerable so that it doesn't get stringified in
          // output; e.g. by the documentation binary.
          Object.defineProperty(context, 'ast', {
            enumerable: false,
            value: node,
          });
          let range = (node.parent && node.parent) ? node.parent.range : [node.start, node.end];
          range = !range ? node.range : range;
          range = !range ? [node.start, node.end] : range;
          context.code = file.source.substring.apply(file.source, range);
        }
        results.push(this.parseJSDoc(comment.value, comment.loc, context));
      }
    };
  }
  private parseJSDoc(comment: any, loc: any, context: any): any {
    let result = Doctrine.parse(comment, {
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
      let tag = result.tags[i];
      if (tag.errors) {
        for (let j = 0; j < tag.errors.length; j++) {
          result.errors.push({ message: tag.errors[j] });
        }
        result.tags.splice(i, 1);
      } else {
        i++;
      }
    }
    return Utils.flatten(Utils.normalize(result));
  }
  private isJSDocComment(comment: any): boolean {
    let asterisks = comment.value.match(/^(\*+)/);
    return (comment.type === 'CommentBlock' || // estree
      comment.type === 'Block') // get-comments / traditional
      && asterisks && asterisks[1].length === 1;
  }
}

export = JavaScript;
