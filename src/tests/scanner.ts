
import * as FS from 'fs';
// import * as Path from 'path';
import { assert } from 'chai';
import CommentScanner from '../scanner';
import Token, { TokenType, getTokenName } from '../token';

const scanner = new CommentScanner();
function test(source: string, match: [string, TokenType][] | TokenType) {
  scanner.source(source);
  const stream = scanner.scan().stream;
  let array = typeof match === 'number' ? [[source, match]] : match;
  array.push(['\u{0000}', TokenType.NullTerminator]);

  let count = 0;
  while (count < stream.length) {
    assert.strictEqual(stream[count].lexeme, array[count][0]);
    assert.strictEqual(stream[count].type, array[count][1]);
    count++;
  }
}
describe('CommentScanner', () => {

  describe('Basic scan', () => {
    it('should scan an ampersand', () => test('&', TokenType.Ampersand));
    it('should scan a colon', () => test(':', TokenType.Colon))
    it('should scan a comma', () => test(',', TokenType.Comma));
    it('should scan a description', () => test('description', TokenType.Description));
    it('should scan an equal', () => test('=', TokenType.Equal));
    it('should scan a left parenthesis', () => test('(', TokenType.LeftParen));
    it('should scan a markdown code', () => test('--- markdown ---', TokenType.Markdown));
    it('should scan a minus', () => test('-', TokenType.Minus));
    it('should scan a pipe', () => test('|', TokenType.Pipe));
    it('should scan a question mark', () => test('?', TokenType.QuestionMark));
    it('should scan a right parenthesis', () => test(')', TokenType.RightParen));
  });

  describe('Advanced scan', () => {
    /* Scan tags */
    it('should scan @tag', () => test('@tag', TokenType.Tag));

    /* Scan tags with identifiers */
    it('should scan @tag id', () => test('@tag id', [
      ['@tag', TokenType.Tag],
      ['id', TokenType.Identifier]
    ]));

    /* Scan tags with initializers */
    it('should scan @tag id = \'init\'', () => test('@tag id = \'init\'', [
      ['@tag', TokenType.Tag],
      ['id', TokenType.Identifier],
      ['=', TokenType.Equal],
      ['\'init\'', TokenType.Initializer]
    ]));
    it('should scan @tag id = "init"', () => test('@tag id = "init"', [
      ['@tag', TokenType.Tag],
      ['id', TokenType.Identifier],
      ['=', TokenType.Equal],
      ['"init"', TokenType.Initializer]
    ]));
    it('should scan @tag id = 1', () => test('@tag id = 1', [
      ['@tag', TokenType.Tag],
      ['id', TokenType.Identifier],
      ['=', TokenType.Equal],
      ['1', TokenType.Initializer]
    ]));
    it('should scan @tag id = []', () => test('@tag id = []', [
      ['@tag', TokenType.Tag],
      ['id', TokenType.Identifier],
      ['=', TokenType.Equal],
      ['[]', TokenType.Initializer]
    ]));
    it('should scan @tag id = init', () => test('@tag id = init', [
      ['@tag', TokenType.Tag],
      ['id', TokenType.Identifier],
      ['=', TokenType.Equal],
      ['init', TokenType.Initializer]
    ]));
    it('should scan @tag id = () => special', () => test('@tag id = () => special', [
      ['@tag', TokenType.Tag],
      ['id', TokenType.Identifier],
      ['=', TokenType.Equal],
      ['(', TokenType.LeftParen],
      [')', TokenType.RightParen],
      ['=>', TokenType.Arrow],
      ['special', TokenType.SpecialWord]
    ]));
    it('should scan @tag id = (id) => special', () => test('@tag id = (id) => special', [
      ['@tag', TokenType.Tag],
      ['id', TokenType.Identifier],
      ['=', TokenType.Equal],
      ['(', TokenType.LeftParen],
      ['id', TokenType.Identifier],
      [')', TokenType.RightParen],
      ['=>', TokenType.Arrow],
      ['special', TokenType.SpecialWord]
    ]));
    it('should scan @tag id = (id, id) => special', () => test('@tag id = (id, id) => special', [
      ['@tag', TokenType.Tag],
      ['id', TokenType.Identifier],
      ['=', TokenType.Equal],
      ['(', TokenType.LeftParen],
      ['id', TokenType.Identifier],
      [',', TokenType.Comma],
      ['id', TokenType.Identifier],
      [')', TokenType.RightParen],
      ['=>', TokenType.Arrow],
      ['special', TokenType.SpecialWord]
    ]));

    it('should scan @tag id = (id: special, id) => special', () =>
      test('@tag id = (id: special, id) => special', [
        ['@tag', TokenType.Tag],
        ['id', TokenType.Identifier],
        ['=', TokenType.Equal],
        ['(', TokenType.LeftParen],
        ['id', TokenType.Identifier],
        [':', TokenType.Colon],
        ['special', TokenType.SpecialWord],
        [',', TokenType.Comma],
        ['id', TokenType.Identifier],
        [')', TokenType.RightParen],
        ['=>', TokenType.Arrow],
        ['special', TokenType.SpecialWord]
      ]));

    it('should scan @tag id = (id: special | special, id) => special & special', () =>
      test('@tag id = (id: special | special, id) => special & special', [
        ['@tag', TokenType.Tag],
        ['id', TokenType.Identifier],
        ['=', TokenType.Equal],
        ['(', TokenType.LeftParen],
        ['id', TokenType.Identifier],
        [':', TokenType.Colon],
        ['special', TokenType.SpecialWord],
        ['|', TokenType.Pipe],
        ['special', TokenType.SpecialWord],
        [',', TokenType.Comma],
        ['id', TokenType.Identifier],
        [')', TokenType.RightParen],
        ['=>', TokenType.Arrow],
        ['special', TokenType.SpecialWord],
        ['&', TokenType.Ampersand],
        ['special', TokenType.SpecialWord],
      ]));

    it('should scan @tag id = (id?: special, id) => special | special', () =>
      test('@tag id = (id?: special, id) => special | special', [
        ['@tag', TokenType.Tag],
        ['id', TokenType.Identifier],
        ['=', TokenType.Equal],
        ['(', TokenType.LeftParen],
        ['id', TokenType.Identifier],
        ['?', TokenType.QuestionMark],
        [':', TokenType.Colon],
        ['special', TokenType.SpecialWord],
        [',', TokenType.Comma],
        ['id', TokenType.Identifier],
        [')', TokenType.RightParen],
        ['=>', TokenType.Arrow],
        ['special', TokenType.SpecialWord],
        ['|', TokenType.Pipe],
        ['special', TokenType.SpecialWord]
      ]));

    it('should scan @tag id = (id?: special, id = 1) => special | special', () =>
      test('@tag id = (id?: special, id = 1) => special | special', [
        ['@tag', TokenType.Tag],
        ['id', TokenType.Identifier],
        ['=', TokenType.Equal],
        ['(', TokenType.LeftParen],
        ['id', TokenType.Identifier],
        ['?', TokenType.QuestionMark],
        [':', TokenType.Colon],
        ['special', TokenType.SpecialWord],
        [',', TokenType.Comma],
        ['id', TokenType.Identifier],
        ['=', TokenType.Equal],
        ['1', TokenType.Initializer],
        [')', TokenType.RightParen],
        ['=>', TokenType.Arrow],
        ['special', TokenType.SpecialWord],
        ['|', TokenType.Pipe],
        ['special', TokenType.SpecialWord]
      ]));
    it('should scan @tag id = (id?: special = init, id = init, id = init) => special', () =>
      test('@tag id = (id?: special = init, id = init, id = init) => special', [
        ['@tag', TokenType.Tag],
        ['id', TokenType.Identifier],
        ['=', TokenType.Equal],
        ['(', TokenType.LeftParen],
        ['id', TokenType.Identifier],
        ['?', TokenType.QuestionMark],
        [':', TokenType.Colon],
        ['special', TokenType.SpecialWord],
        ['=', TokenType.Equal],
        ['init', TokenType.Initializer],
        [',', TokenType.Comma],
        ['id', TokenType.Identifier],
        ['=', TokenType.Equal],
        ['init', TokenType.Initializer],
        [',', TokenType.Comma],
        ['id', TokenType.Identifier],
        ['=', TokenType.Equal],
        ['init', TokenType.Initializer],
        [')', TokenType.RightParen],
        ['=>', TokenType.Arrow],
        ['special', TokenType.SpecialWord]
      ]));
    it('should scan @tag id: (id?: special = init, id = init, id = init) => special', () =>
      test('@tag id: (id?: special = init, id = init, id = init) => special', [
        ['@tag', TokenType.Tag],
        ['id', TokenType.Identifier],
        [':', TokenType.Colon],
        ['(', TokenType.LeftParen],
        ['id', TokenType.Identifier],
        ['?', TokenType.QuestionMark],
        [':', TokenType.Colon],
        ['special', TokenType.SpecialWord],
        ['=', TokenType.Equal],
        ['init', TokenType.Initializer],
        [',', TokenType.Comma],
        ['id', TokenType.Identifier],
        ['=', TokenType.Equal],
        ['init', TokenType.Initializer],
        [',', TokenType.Comma],
        ['id', TokenType.Identifier],
        ['=', TokenType.Equal],
        ['init', TokenType.Initializer],
        [')', TokenType.RightParen],
        ['=>', TokenType.Arrow],
        ['special', TokenType.SpecialWord]
      ]));

    /* Scan tags with types (special words) */
    it('should scan @tag id: special', () => test('@tag id: special', [
      ['@tag', TokenType.Tag],
      ['id', TokenType.Identifier],
      [':', TokenType.Colon],
      ['special', TokenType.SpecialWord]
    ]));
    it('should scan @tag id?: special', () => test('@tag id?: special', [
      ['@tag', TokenType.Tag],
      ['id', TokenType.Identifier],
      ['?', TokenType.QuestionMark],
      [':', TokenType.Colon],
      ['special', TokenType.SpecialWord]
    ]));
    it('should scan @tag id: special | special', () => test('@tag id: special', [
      ['@tag', TokenType.Tag],
      ['id', TokenType.Identifier],
      [':', TokenType.Colon],
      ['special', TokenType.SpecialWord]
    ]));
    it('should scan @tag id: special & special', () => test('@tag id: special', [
      ['@tag', TokenType.Tag],
      ['id', TokenType.Identifier],
      [':', TokenType.Colon],
      ['special', TokenType.SpecialWord]
    ]));
  });

  describe('Real-world scan', () => {
    // From http://usejsdoc.org/howto-es2015-classes.html#documenting-a-simple-class
    const s0 = `\n
    \tCreate a point.
    \t@param x: number - The x value.
    \t@param y: number - The y value.\n`;

    it(`should scan: ${s0}`, () => test(s0, [
      ['Create a point.', TokenType.Description],
      ['@param', TokenType.Tag],
      ['x', TokenType.Identifier],
      [':', TokenType.Colon],
      ['number', TokenType.SpecialWord],
      ['-', TokenType.Minus],
      ['The x value.', TokenType.Description],
      ['@param', TokenType.Tag],
      ['y', TokenType.Identifier],
      [':', TokenType.Colon],
      ['number', TokenType.SpecialWord],
      ['-', TokenType.Minus],
      ['The y value.', TokenType.Description]
    ]));

    const s1 = `\n
    \tConvert a string containing two comma-separated numbers into a point.
    \t@param str: string - The string containing two comma-separated numbers.
    \t@return: Point - A Point object.\n`;

    it(`should scan: ${s1}`, () => test(s1, [
      ['Convert a string containing two comma-separated numbers into a point.', TokenType.Description],
      ['@param', TokenType.Tag],
      ['str', TokenType.Identifier],
      [':', TokenType.Colon],
      ['string', TokenType.SpecialWord],
      ['-', TokenType.Minus],
      ['The string containing two comma-separated numbers.', TokenType.Description],
      ['@return', TokenType.Tag],
      [':', TokenType.Colon],
      ['Point', TokenType.SpecialWord],
      ['-', TokenType.Minus],
      ['A Point object.', TokenType.Description]
    ]));

    const s2 = `\n
    \tCreate a dot.
    \t@param x: number - The x value.
    \t@param y: number - The y value.
    \t@param width: number - The width of the dot, in pixels.
    \t---
    \t# Create a dot
    \t
    \tExample usage
    \t\`\`\`
    \tconst dot = new Dot();
    \t\`\`\`
    \t---\n`;

    it(`should scan ${s2}`, () => test(s2, [
      ['Create a dot.', TokenType.Description],
      ['@param', TokenType.Tag],
      ['x', TokenType.Identifier],
      [':', TokenType.Colon],
      ['number', TokenType.SpecialWord],
      ['-', TokenType.Minus],
      ['The x value.', TokenType.Description],
      ['@param', TokenType.Tag],
      ['y', TokenType.Identifier],
      [':', TokenType.Colon],
      ['number', TokenType.SpecialWord],
      ['-', TokenType.Minus],
      ['The y value.', TokenType.Description],
      ['@param', TokenType.Tag],
      ['width', TokenType.Identifier],
      [':', TokenType.Colon],
      ['number', TokenType.SpecialWord],
      ['-', TokenType.Minus],
      ['The width of the dot, in pixels.', TokenType.Description],
      [`---
    \t# Create a dot
    \t
    \tExample usage
    \t\`\`\`
    \tconst dot = new Dot();
    \t\`\`\`
    \t---`, TokenType.Markdown]
    ]));
  });

});
