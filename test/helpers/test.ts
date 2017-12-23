import { assert } from 'chai';
import * as _ from 'lodash';

import scanner from '../../src/comment-parser/scanner';
import parser from '../../src/comment-parser/parser';
import * as AST from '../../src/comment-parser/ast';

import remove from './remove';
import { TokenType, getTokenName } from '../../src/comment-parser/token/index';


export default {
  Scanner: {
    test: function test(source: string, match: [string, TokenType][] | TokenType) {
      const tokenstream = scanner(source).toTokenStream();
      const stream = tokenstream.stream;
      let array = typeof match === 'number' ? [[source, match]] : match;
      array.push(['\0', TokenType.EOF]);

      let count = 0;
      while (count < stream.length) {
        assert.strictEqual(stream[count].lexeme, array[count][0]);
        assert.strictEqual(stream[count].kind, array[count][1]);
        count++;
      }
    }
  },
  Parser: {
    test: function test(source: string, match?: any[]) {
      const array = [];
      const printer = new AST.Generator({ omit_location: true });
      let result = parser(source)
        .parse()
        .map(statement => JSON.parse(printer.print(statement)));
      // console.log(result);
      assert.deepEqual(result, match);
    },
    comment, description, markdown, tag,
    param, init, any, group, union, intersect
  },
};

function tokenkind(kind: TokenType) {
  return { name: getTokenName(kind), kind: kind };
}

function node(lexeme: string, kind: TokenType) {
  return _.assign({}, { lexeme }, tokenkind(kind));
}

function comment(...statements: any[]) {
  return statements;
}

function description(lexeme: string, wrap: boolean = true) {
  const description = node(lexeme, TokenType.Description);
  if (wrap) return { description: description };
  return description;
}

function markdown(lexeme: string) {
  return { markdown: node(lexeme, TokenType.Markdown) };
}

function tag(lexeme: string, parameter?: {}, description?:{}) {
  return {
    tag: _.assign({}, node(lexeme, TokenType.Tag), {
      parameter: parameter || null,
      description: description || null
    }),

  };
}

function param(lexeme: string, value?: {}, type?: {}, optional: boolean = false) {
  return {
    identifier: node(lexeme, TokenType.Identifier),
    optional: optional,
    value: value || null,
    type: type || null
  }
}

function init(lexeme: string) {
  return node(lexeme, TokenType.Initializer);
}

function any(lexeme: string) {
  return node(lexeme, TokenType.Any);
}

function group(node: {}) {
  return { group: node || null }
}

function union(node: {}[]) {
  return { union: { types: node || null } };
}

function intersect(node: {}[]) {
  return { intersection: { types: node || null } };
}