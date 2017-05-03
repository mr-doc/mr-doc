import { assert } from 'chai';
import * as _ from 'lodash';

import scanner from '../../src/scanner';
import parser from '../../src/parser';

import Token, { TokenKind, getTokenName } from '../../src/token';
import * as AST from '../../src/ast';

import remove from './remove';

const { NodeType, } = AST;


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
    test: function test(source: string, match?: any) {
      const array = [];
      const result = parser(source).parse();
      remove(result, 'range');
      // console.dir(result, { depth: null, colors: true });
      assert.deepEqual(result, match)
    },
    node, comment, description, markdown, tag, param, arrowfunc, union, intersect, anytype
  }
};

function node(flag: AST.NodeType, kind: TokenKind) {
  return { flag, kind, flagName: AST.getNodeTypeName(flag), kindName: getTokenName(kind) }
}
function comment(comments: any[]) {
  return _.assign({ comments }, node(NodeType.Comment, TokenKind.None));
}
function description(description: string) {
  return _.assign({ description }, node(NodeType.DescriptionComment, TokenKind.Description));
}
function markdown(markdown: string) {
  return _.assign({ markdown }, node(NodeType.MarkdownComment, TokenKind.Markdown));
}
function tag(tag: string, parameter?: any, description?: any, type?: any) {
  return _.assign({ tag }, parameter ? { parameter } : {}, description ? { description } : {}, type ? { type } : {}, node(NodeType.TagComment, TokenKind.Tag));
}
function param(identifier: string, type?: any, initializer?: any, isOptional = false) {
  return _.assign({ identifier, isOptional }, type ? { type } : {}, initializer ? { initializer } : {}, node(NodeType.FormalParameter, TokenKind.None))
}
function arrowfunc(parameters: any[], type: any) {
  return _.assign({ type }, parameters ? { parameters } : {}, node(NodeType.ArrowFunctionType, TokenKind.None));
}
function union(type: any[]) {
  return _.assign({ type }, node(NodeType.UnionType, TokenKind.Pipe));
}
function intersect(type: any[]) {
  return _.assign({ type }, node(NodeType.IntersectionType, TokenKind.Ampersand));
}

function anytype(type: string) {
  return _.assign({ type }, node(NodeType.Type, TokenKind.Any));
}