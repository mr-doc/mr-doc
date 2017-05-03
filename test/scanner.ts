import Test from './helpers/test';
import Token, { TokenKind, getTokenName } from '../src/token';
import read from './helpers/read';
import indent from './helpers/indent';
const test = Test.Scanner.test;

describe('Scanner', () => {

  describe('Basic scan', () => {
    it('should scan an ampersand', () => test('&', TokenKind.Ampersand));
    it('should scan a colon', () => test(':', TokenKind.Colon))
    it('should scan a comma', () => test(',', TokenKind.Comma));
    it('should scan a description', () => test('description', TokenKind.Description));
    it('should scan an equal', () => test('=', TokenKind.Equal));
    it('should scan a left parenthesis', () => test('(', TokenKind.LeftParen));
    it('should scan a markdown code', () => test('+-- markdown +--', TokenKind.Markdown));
    it('should scan a minus', () => test('-', TokenKind.Minus));
    it('should scan a pipe', () => test('|', TokenKind.Pipe));
    it('should scan a question mark', () => test('?', TokenKind.QuestionMark));
    it('should scan a right parenthesis', () => test(')', TokenKind.RightParen));
  });

  describe('Advanced scan', () => {
    /* Scan tags */
    it('should scan @tag', () => test('@tag', TokenKind.Tag));

    /* Scan tags with identifiers */
    it('should scan @tag id', () => test('@tag id', [
      ['@tag', TokenKind.Tag],
      ['id', TokenKind.Identifier]
    ]));

    it('should scan @tag ...id', () => test('@tag ...id', [
      ['@tag', TokenKind.Tag],
      ['...id', TokenKind.Identifier]
    ]));

    /* Scan tags with initializers */
    it('should scan @tag id = \'init\'', () => test('@tag id = \'init\'', [
      ['@tag', TokenKind.Tag],
      ['id', TokenKind.Identifier],
      ['=', TokenKind.Equal],
      ['\'init\'', TokenKind.Initializer]
    ]));
    it('should scan @tag id = "init"', () => test('@tag id = "init"', [
      ['@tag', TokenKind.Tag],
      ['id', TokenKind.Identifier],
      ['=', TokenKind.Equal],
      ['"init"', TokenKind.Initializer]
    ]));
    it('should scan @tag id = 1', () => test('@tag id = 1', [
      ['@tag', TokenKind.Tag],
      ['id', TokenKind.Identifier],
      ['=', TokenKind.Equal],
      ['1', TokenKind.Initializer]
    ]));
    it('should scan @tag id = -1', () => test('@tag id = -1', [
      ['@tag', TokenKind.Tag],
      ['id', TokenKind.Identifier],
      ['=', TokenKind.Equal],
      ['-1', TokenKind.Initializer]
    ]));
    it('should scan @tag id = []', () => test('@tag id = []', [
      ['@tag', TokenKind.Tag],
      ['id', TokenKind.Identifier],
      ['=', TokenKind.Equal],
      ['[]', TokenKind.Initializer]
    ]));
    it('should scan @tag id = {}', () => test('@tag id = {}', [
      ['@tag', TokenKind.Tag],
      ['id', TokenKind.Identifier],
      ['=', TokenKind.Equal],
      ['{}', TokenKind.Initializer]
    ]));
    it('should scan @tag id = init', () => test('@tag id = init', [
      ['@tag', TokenKind.Tag],
      ['id', TokenKind.Identifier],
      ['=', TokenKind.Equal],
      ['init', TokenKind.Initializer]
    ]));
    it('should scan @tag id = () => any', () => test('@tag id = () => any', [
      ['@tag', TokenKind.Tag],
      ['id', TokenKind.Identifier],
      ['=', TokenKind.Equal],
      ['(', TokenKind.LeftParen],
      [')', TokenKind.RightParen],
      ['=>', TokenKind.Arrow],
      ['any', TokenKind.Any]
    ]));
    it('should scan @tag id = (id) => any', () => test('@tag id = (id) => any', [
      ['@tag', TokenKind.Tag],
      ['id', TokenKind.Identifier],
      ['=', TokenKind.Equal],
      ['(', TokenKind.LeftParen],
      ['id', TokenKind.Identifier],
      [')', TokenKind.RightParen],
      ['=>', TokenKind.Arrow],
      ['any', TokenKind.Any]
    ]));
    it('should scan @tag id = (id, id) => any', () => test('@tag id = (id, id) => any', [
      ['@tag', TokenKind.Tag],
      ['id', TokenKind.Identifier],
      ['=', TokenKind.Equal],
      ['(', TokenKind.LeftParen],
      ['id', TokenKind.Identifier],
      [',', TokenKind.Comma],
      ['id', TokenKind.Identifier],
      [')', TokenKind.RightParen],
      ['=>', TokenKind.Arrow],
      ['any', TokenKind.Any]
    ]));

    it('should scan @tag id = (id: any, id) => any', () =>
      test('@tag id = (id: any, id) => any', [
        ['@tag', TokenKind.Tag],
        ['id', TokenKind.Identifier],
        ['=', TokenKind.Equal],
        ['(', TokenKind.LeftParen],
        ['id', TokenKind.Identifier],
        [':', TokenKind.Colon],
        ['any', TokenKind.Any],
        [',', TokenKind.Comma],
        ['id', TokenKind.Identifier],
        [')', TokenKind.RightParen],
        ['=>', TokenKind.Arrow],
        ['any', TokenKind.Any]
      ]));

    it('should scan @tag id = (id: any, id) => (any | any) & any', () =>
      test('@tag id = (id: any, id) => (any | any) & any', [
        ['@tag', TokenKind.Tag],
        ['id', TokenKind.Identifier],
        ['=', TokenKind.Equal],
        ['(', TokenKind.LeftParen],
        ['id', TokenKind.Identifier],
        [':', TokenKind.Colon],
        ['any', TokenKind.Any],
        [',', TokenKind.Comma],
        ['id', TokenKind.Identifier],
        [')', TokenKind.RightParen],
        ['=>', TokenKind.Arrow],
        ['(', TokenKind.LeftParen],
        ['any', TokenKind.Any],
        ['|', TokenKind.Pipe],
        ['any', TokenKind.Any],
        [')', TokenKind.RightParen],
        ['&', TokenKind.Ampersand],
        ['any', TokenKind.Any]
      ]));

    it('should scan @tag id = (id: any | any, id) => any & any', () =>
      test('@tag id = (id: any | any, id) => any & any', [
        ['@tag', TokenKind.Tag],
        ['id', TokenKind.Identifier],
        ['=', TokenKind.Equal],
        ['(', TokenKind.LeftParen],
        ['id', TokenKind.Identifier],
        [':', TokenKind.Colon],
        ['any', TokenKind.Any],
        ['|', TokenKind.Pipe],
        ['any', TokenKind.Any],
        [',', TokenKind.Comma],
        ['id', TokenKind.Identifier],
        [')', TokenKind.RightParen],
        ['=>', TokenKind.Arrow],
        ['any', TokenKind.Any],
        ['&', TokenKind.Ampersand],
        ['any', TokenKind.Any],
      ]));

    it('should scan @tag id = (id?: any, id) => any | any', () =>
      test('@tag id = (id?: any, id) => any | any', [
        ['@tag', TokenKind.Tag],
        ['id', TokenKind.Identifier],
        ['=', TokenKind.Equal],
        ['(', TokenKind.LeftParen],
        ['id', TokenKind.Identifier],
        ['?', TokenKind.QuestionMark],
        [':', TokenKind.Colon],
        ['any', TokenKind.Any],
        [',', TokenKind.Comma],
        ['id', TokenKind.Identifier],
        [')', TokenKind.RightParen],
        ['=>', TokenKind.Arrow],
        ['any', TokenKind.Any],
        ['|', TokenKind.Pipe],
        ['any', TokenKind.Any]
      ]));

    it('should scan @tag id = (id?: any, ...id: any[]) => any | any', () =>
      test('@tag id = (id?: any, ...id: any[]) => any | any', [
        ['@tag', TokenKind.Tag],
        ['id', TokenKind.Identifier],
        ['=', TokenKind.Equal],
        ['(', TokenKind.LeftParen],
        ['id', TokenKind.Identifier],
        ['?', TokenKind.QuestionMark],
        [':', TokenKind.Colon],
        ['any', TokenKind.Any],
        [',', TokenKind.Comma],
        ['...id', TokenKind.Identifier],
        [':', TokenKind.Colon],
        ['any[]', TokenKind.Any],
        [')', TokenKind.RightParen],
        ['=>', TokenKind.Arrow],
        ['any', TokenKind.Any],
        ['|', TokenKind.Pipe],
        ['any', TokenKind.Any]
      ]));

    it('should scan @tag id = (id?: any, id = 1) => any | any', () =>
      test('@tag id = (id?: any, id = 1) => any | any', [
        ['@tag', TokenKind.Tag],
        ['id', TokenKind.Identifier],
        ['=', TokenKind.Equal],
        ['(', TokenKind.LeftParen],
        ['id', TokenKind.Identifier],
        ['?', TokenKind.QuestionMark],
        [':', TokenKind.Colon],
        ['any', TokenKind.Any],
        [',', TokenKind.Comma],
        ['id', TokenKind.Identifier],
        ['=', TokenKind.Equal],
        ['1', TokenKind.Initializer],
        [')', TokenKind.RightParen],
        ['=>', TokenKind.Arrow],
        ['any', TokenKind.Any],
        ['|', TokenKind.Pipe],
        ['any', TokenKind.Any]
      ]));
    it('should scan @tag id = (id?: any, id = -1) => any | any', () =>
      test('@tag id = (id?: any, id = -1) => any | any', [
        ['@tag', TokenKind.Tag],
        ['id', TokenKind.Identifier],
        ['=', TokenKind.Equal],
        ['(', TokenKind.LeftParen],
        ['id', TokenKind.Identifier],
        ['?', TokenKind.QuestionMark],
        [':', TokenKind.Colon],
        ['any', TokenKind.Any],
        [',', TokenKind.Comma],
        ['id', TokenKind.Identifier],
        ['=', TokenKind.Equal],
        ['-1', TokenKind.Initializer],
        [')', TokenKind.RightParen],
        ['=>', TokenKind.Arrow],
        ['any', TokenKind.Any],
        ['|', TokenKind.Pipe],
        ['any', TokenKind.Any]
      ]));
    it('should scan @tag id = (id?: any = init, id = init, id = init) => any', () =>
      test('@tag id = (id?: any = init, id = init, id = init) => any', [
        ['@tag', TokenKind.Tag],
        ['id', TokenKind.Identifier],
        ['=', TokenKind.Equal],
        ['(', TokenKind.LeftParen],
        ['id', TokenKind.Identifier],
        ['?', TokenKind.QuestionMark],
        [':', TokenKind.Colon],
        ['any', TokenKind.Any],
        ['=', TokenKind.Equal],
        ['init', TokenKind.Initializer],
        [',', TokenKind.Comma],
        ['id', TokenKind.Identifier],
        ['=', TokenKind.Equal],
        ['init', TokenKind.Initializer],
        [',', TokenKind.Comma],
        ['id', TokenKind.Identifier],
        ['=', TokenKind.Equal],
        ['init', TokenKind.Initializer],
        [')', TokenKind.RightParen],
        ['=>', TokenKind.Arrow],
        ['any', TokenKind.Any]
      ]));
    it('should scan @tag id: (id?: any = init, id = init, id = init) => any', () =>
      test('@tag id: (id?: any = init, id = init, id = init) => any', [
        ['@tag', TokenKind.Tag],
        ['id', TokenKind.Identifier],
        [':', TokenKind.Colon],
        ['(', TokenKind.LeftParen],
        ['id', TokenKind.Identifier],
        ['?', TokenKind.QuestionMark],
        [':', TokenKind.Colon],
        ['any', TokenKind.Any],
        ['=', TokenKind.Equal],
        ['init', TokenKind.Initializer],
        [',', TokenKind.Comma],
        ['id', TokenKind.Identifier],
        ['=', TokenKind.Equal],
        ['init', TokenKind.Initializer],
        [',', TokenKind.Comma],
        ['id', TokenKind.Identifier],
        ['=', TokenKind.Equal],
        ['init', TokenKind.Initializer],
        [')', TokenKind.RightParen],
        ['=>', TokenKind.Arrow],
        ['any', TokenKind.Any]
      ]));

    /* Scan tags with types (special words) */
    it('should scan @tag id: any', () => test('@tag id: any', [
      ['@tag', TokenKind.Tag],
      ['id', TokenKind.Identifier],
      [':', TokenKind.Colon],
      ['any', TokenKind.Any]
    ]));

    it('should scan @tag id?: any', () => test('@tag id?: any', [
      ['@tag', TokenKind.Tag],
      ['id', TokenKind.Identifier],
      ['?', TokenKind.QuestionMark],
      [':', TokenKind.Colon],
      ['any', TokenKind.Any]
    ]));
    it('should scan @tag id: any | any', () => test('@tag id: any | any', [
      ['@tag', TokenKind.Tag],
      ['id', TokenKind.Identifier],
      [':', TokenKind.Colon],
      ['any', TokenKind.Any],
      ['|', TokenKind.Pipe],
      ['any', TokenKind.Any]
    ]));
    it('should scan @tag id: any & any', () => test('@tag id: any & any', [
      ['@tag', TokenKind.Tag],
      ['id', TokenKind.Identifier],
      [':', TokenKind.Colon],
      ['any', TokenKind.Any],
      ['&', TokenKind.Ampersand],
      ['any', TokenKind.Any]
    ]));
    it('should scan @tag id: (any | any | any[])', () => test('@tag id: (any | any | any[])', [
      ['@tag', TokenKind.Tag],
      ['id', TokenKind.Identifier],
      [':', TokenKind.Colon],
      ['(', TokenKind.LeftParen],
      ['any', TokenKind.Any],
      ['|', TokenKind.Pipe],
      ['any', TokenKind.Any],
      ['|', TokenKind.Pipe],
      ['any[]', TokenKind.Any],
      [')', TokenKind.RightParen],
    ]));
  });

  describe('Real-world scan', () => {
    // From http://usejsdoc.org/howto-es2015-classes.html#documenting-a-simple-class
    const s0 = read(0);

    it(`should scan: \n${indent(s0, 2)}`, () => test(s0, [
      ['Create a point.', TokenKind.Description],
      ['@param', TokenKind.Tag],
      ['x', TokenKind.Identifier],
      [':', TokenKind.Colon],
      ['number', TokenKind.Any],
      ['-', TokenKind.Minus],
      ['The x value.', TokenKind.Description],
      ['@param', TokenKind.Tag],
      ['y', TokenKind.Identifier],
      [':', TokenKind.Colon],
      ['number', TokenKind.Any],
      ['-', TokenKind.Minus],
      ['The y value.', TokenKind.Description]
    ]));

    const s1 = read(1);

    it(`should scan \n${indent(s1, 2)}`, () => test(s1, [
      ['@param', TokenKind.Tag],
      ['x', TokenKind.Identifier],
      [':', TokenKind.Colon],
      ['number', TokenKind.Any],
      ['-', TokenKind.Minus],
      ['The x value.', TokenKind.Description],
      ['@param', TokenKind.Tag],
      ['y', TokenKind.Identifier],
      [':', TokenKind.Colon],
      ['number', TokenKind.Any],
      ['-', TokenKind.Minus],
      ['The y value.', TokenKind.Description],
      ['Create a point.', TokenKind.Description]
    ]));

    const s2 = read(2);

    it(`should scan: \n${indent(s2, 2)}`, () => test(s2, [
      ['Convert a string containing two comma-separated numbers into a point.', TokenKind.Description],
      ['@param', TokenKind.Tag],
      ['str', TokenKind.Identifier],
      [':', TokenKind.Colon],
      ['string', TokenKind.Any],
      ['-', TokenKind.Minus],
      ['The string containing two comma-separated numbers.', TokenKind.Description],
      ['@return', TokenKind.Tag],
      ['Point', TokenKind.Any],
      ['-', TokenKind.Minus],
      ['A Point object.', TokenKind.Description]
    ]));

    const s3 = read(3);

    it(`should scan \n${indent(s3, 2)}`, () => test(s3, [
      ['Create a dot.', TokenKind.Description],
      ['@param', TokenKind.Tag],
      ['x', TokenKind.Identifier],
      [':', TokenKind.Colon],
      ['number', TokenKind.Any],
      ['-', TokenKind.Minus],
      ['The x value.', TokenKind.Description],
      ['@param', TokenKind.Tag],
      ['y', TokenKind.Identifier],
      [':', TokenKind.Colon],
      ['number', TokenKind.Any],
      ['-', TokenKind.Minus],
      ['The y value.', TokenKind.Description],
      ['@param', TokenKind.Tag],
      ['width', TokenKind.Identifier],
      [':', TokenKind.Colon],
      ['number', TokenKind.Any],
      ['-', TokenKind.Minus],
      ['The width of the dot, in pixels.', TokenKind.Description],
      [`+--\n${read(3, 'md')}\n+--`, TokenKind.Markdown]
    ]));

    const s4 = read(4);
    
    it(`should scan \n${indent(s4, 2)}`, () => test(s4, [
      ['Create a dot.', TokenKind.Description],
      ['@param', TokenKind.Tag],
      ['x', TokenKind.Identifier],
      [':', TokenKind.Colon],
      ['number', TokenKind.Any],
      ['-', TokenKind.Minus],
      ['The x value.', TokenKind.Description],
      ['@param', TokenKind.Tag],
      ['y', TokenKind.Identifier],
      [':', TokenKind.Colon],
      ['number', TokenKind.Any],
      ['-', TokenKind.Minus],
      ['The y value.', TokenKind.Description],
      ['@param', TokenKind.Tag],
      ['width', TokenKind.Identifier],
      [':', TokenKind.Colon],
      ['number', TokenKind.Any],
      ['-', TokenKind.Minus],
      ['The width of the dot, in pixels.', TokenKind.Description],
       [`+--\n${read(4, 'md')}\n+--`, TokenKind.Markdown]
    ]));

    const s5 = read(5);

    it(`should scan \n${indent(s5, 2)}`, () => test(s5, [
      ['Create a dot.', TokenKind.Description],
      ['@param', TokenKind.Tag],
      ['x', TokenKind.Identifier],
      [':', TokenKind.Colon],
      ['number', TokenKind.Any],
      ['-', TokenKind.Minus],
      ['The x value.', TokenKind.Description],
      ['@param', TokenKind.Tag],
      ['y', TokenKind.Identifier],
      [':', TokenKind.Colon],
      ['number', TokenKind.Any],
      ['-', TokenKind.Minus],
      ['The y value.', TokenKind.Description],
      ['@param', TokenKind.Tag],
      ['width', TokenKind.Identifier],
      [':', TokenKind.Colon],
      ['number', TokenKind.Any],
      ['-', TokenKind.Minus],
      ['The width of the dot, in pixels.', TokenKind.Description],
      [`+--\n${read(5, 'md')}\n +--`, TokenKind.Markdown]
    ]));

    const s6 = read(6, 'js');

    it(`should scan \n${indent(s6, 2)}`, () => test(s6, [
      ['Create a dot.', TokenKind.Description],
      ['@param', TokenKind.Tag],
      ['x', TokenKind.Identifier],
      [':', TokenKind.Colon],
      ['number', TokenKind.Any],
      ['-', TokenKind.Minus],
      ['The x value.', TokenKind.Description],
      ['@param', TokenKind.Tag],
      ['y', TokenKind.Identifier],
      [':', TokenKind.Colon],
      ['number', TokenKind.Any],
      ['-', TokenKind.Minus],
      ['The y value.', TokenKind.Description],
      ['@param', TokenKind.Tag],
      ['width', TokenKind.Identifier],
      [':', TokenKind.Colon],
      ['number', TokenKind.Any],
      ['-', TokenKind.Minus],
      ['The width of the dot, in pixels.', TokenKind.Description],
       [`+--\n${read(6, 'md')}\n   +--`, TokenKind.Markdown]
    ]));
  });

});
