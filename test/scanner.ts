import { assert } from 'chai';
import Scanner from '../src/scanner';
import Token, { TokenKind, getTokenName } from '../src/token';
import * as FS from 'fs';
import * as Path from 'path';
import * as OS from 'os';

function test(source: string, match: [string, TokenKind][] | TokenKind) {
  const tokenstream = Scanner(source).toTokenStream();
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

function readComment(version: number, ext?: string) {
  return FS.readFileSync(Path.resolve(__dirname, './fixtures') + `/comments/${version}${ext ? '.' + ext : '.txt'}`, 'utf8');
}

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
    const s0 = readComment(0);

    it(`should scan: ${s0}`, () => test(s0, [
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

    const s1 = readComment(1);

    it(`should scan ${OS.EOL}${s1}`, () => test(s1, [
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

    const s2 = readComment(2);

    it(`should scan: ${OS.EOL}${2}`, () => test(s2, [
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

    const s3 = readComment(3);

    it(`should scan ${OS.EOL}${s3}`, () => test(s3, [
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
      [`+--${OS.EOL}# Create a dot${OS.EOL}${OS.EOL}Example usage${OS.EOL}\`\`\`${OS.EOL}const dot = new Dot();${OS.EOL}\`\`\`${OS.EOL}+--`, TokenKind.Markdown]
    ]));

    const s4 = readComment(4);
    
    it(`should scan ${OS.EOL}${s4}`, () => test(s4, [
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
      [`+--${OS.EOL}# Create a dot${OS.EOL}${OS.EOL}Example usage${OS.EOL}\`\`\`${OS.EOL}const dot = new Dot();${OS.EOL}\`\`\`${OS.EOL}+--`, TokenKind.Markdown]
    ]));

    const s5 = readComment(5);

    it(`should scan ${OS.EOL}${s5}`, () => test(s5, [
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
      [`+--${OS.EOL} # Create a dot${OS.EOL}${OS.EOL} Example usage${OS.EOL} \`\`\`${OS.EOL} const dot = new Dot();${OS.EOL} \`\`\`${OS.EOL} +--`, TokenKind.Markdown]
    ]));

    const s6 = readComment(6, 'js');

    it(`should scan ${OS.EOL}${s6}`, () => test(s6, [
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
      [`+--${OS.EOL}   # Create a dot${OS.EOL}  ${OS.EOL}   Example usage${OS.EOL}   \`\`\`${OS.EOL}   const dot = new Dot();${OS.EOL}   \`\`\`${OS.EOL}   +--`, TokenKind.Markdown]
    ]));
  });

});
