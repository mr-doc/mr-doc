import { assert } from 'chai';
import * as _ from 'lodash';

import scanner from '../../src/scanner';
import parser from '../../src/parser';

import Token, { TokenKind, getTokenName, getTokenKind } from '../../src/token';
import * as AST from '../../src/ast';

import remove from './remove';


export default {
  Scanner: {
    test: function test(source: string, match: [string, TokenKind][] | TokenKind) {
      const tokenstream = scanner(source).toTokenStream();
      const stream = tokenstream.stream;
      let array = typeof match === 'number' ? [[source, match]] : match;
      array.push(['\0', TokenKind.EOF]);

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
      const printer = new AST.Printer({ omit_location: true });
      let result = parser(source)
        .parse()
        .map(statement => JSON.parse(printer.print(statement)));
      // console.log(result);
      assert.deepEqual(result, match);
    },
    comment, description, markdown, tag, param, init,
  },
};

function tokenkind(kind: TokenKind) {
  return { name: getTokenName(kind), kind: kind };
}

function node(lexeme: string, kind: TokenKind) {
  return _.assign({}, { lexeme }, tokenkind(kind));
}

function comment(...statements: any[]) {
  return statements;
}

function description(lexeme: string, wrap: boolean = true) {
  const description = node(lexeme, TokenKind.Description);
  if (wrap) return { description: description };
  return description;
}

function markdown(lexeme: string) {
  return { markdown: node(lexeme, TokenKind.Markdown) };
}

function tag(lexeme: string, parameter?: {}, description?:{}) {
  return {
    tag: _.assign({}, node(lexeme, TokenKind.Tag), {
      parameter: parameter || null,
      description: description || null
    }),

  };
}

function param(lexeme: string, value?: {}, optional: boolean = false) {
  return {
    identifier: node(lexeme, TokenKind.Identifier),
    optional: optional,
    value: value || null
  }
}

function init(lexeme: string) {
  return node(lexeme, TokenKind.Initializer);
}