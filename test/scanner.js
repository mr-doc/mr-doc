"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const scanner_1 = require("../src/scanner");
const token_1 = require("../src/token");
const FS = require("fs");
const Path = require("path");
const OS = require("os");
function test(source, match) {
    const tokenstream = scanner_1.default(source).toTokenStream();
    const stream = tokenstream.stream;
    let array = typeof match === 'number' ? [[source, match]] : match;
    array.push(['\0', token_1.TokenKind.EOF]);
    let count = 0;
    while (count < stream.length) {
        chai_1.assert.strictEqual(stream[count].lexeme, array[count][0]);
        chai_1.assert.strictEqual(stream[count].kind, array[count][1]);
        count++;
    }
}
function readComment(version, ext) {
    return FS.readFileSync(Path.resolve(__dirname, './fixtures') + `/comments/${version}${ext ? '.' + ext : '.txt'}`, 'utf8');
}
describe('Scanner', () => {
    describe('Basic scan', () => {
        it('should scan an ampersand', () => test('&', token_1.TokenKind.Ampersand));
        it('should scan a colon', () => test(':', token_1.TokenKind.Colon));
        it('should scan a comma', () => test(',', token_1.TokenKind.Comma));
        it('should scan a description', () => test('description', token_1.TokenKind.Description));
        it('should scan an equal', () => test('=', token_1.TokenKind.Equal));
        it('should scan a left parenthesis', () => test('(', token_1.TokenKind.LeftParen));
        it('should scan a markdown code', () => test('+-- markdown +--', token_1.TokenKind.Markdown));
        it('should scan a minus', () => test('-', token_1.TokenKind.Minus));
        it('should scan a pipe', () => test('|', token_1.TokenKind.Pipe));
        it('should scan a question mark', () => test('?', token_1.TokenKind.QuestionMark));
        it('should scan a right parenthesis', () => test(')', token_1.TokenKind.RightParen));
    });
    describe('Advanced scan', () => {
        /* Scan tags */
        it('should scan @tag', () => test('@tag', token_1.TokenKind.Tag));
        /* Scan tags with identifiers */
        it('should scan @tag id', () => test('@tag id', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier]
        ]));
        it('should scan @tag ...id', () => test('@tag ...id', [
            ['@tag', token_1.TokenKind.Tag],
            ['...id', token_1.TokenKind.Identifier]
        ]));
        /* Scan tags with initializers */
        it('should scan @tag id = \'init\'', () => test('@tag id = \'init\'', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['\'init\'', token_1.TokenKind.Initializer]
        ]));
        it('should scan @tag id = "init"', () => test('@tag id = "init"', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['"init"', token_1.TokenKind.Initializer]
        ]));
        it('should scan @tag id = 1', () => test('@tag id = 1', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['1', token_1.TokenKind.Initializer]
        ]));
        it('should scan @tag id = -1', () => test('@tag id = -1', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['-1', token_1.TokenKind.Initializer]
        ]));
        it('should scan @tag id = []', () => test('@tag id = []', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['[]', token_1.TokenKind.Initializer]
        ]));
        it('should scan @tag id = {}', () => test('@tag id = {}', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['{}', token_1.TokenKind.Initializer]
        ]));
        it('should scan @tag id = init', () => test('@tag id = init', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['init', token_1.TokenKind.Initializer]
        ]));
        it('should scan @tag id = () => any', () => test('@tag id = () => any', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['(', token_1.TokenKind.LeftParen],
            [')', token_1.TokenKind.RightParen],
            ['=>', token_1.TokenKind.Arrow],
            ['any', token_1.TokenKind.Any]
        ]));
        it('should scan @tag id = (id) => any', () => test('@tag id = (id) => any', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['(', token_1.TokenKind.LeftParen],
            ['id', token_1.TokenKind.Identifier],
            [')', token_1.TokenKind.RightParen],
            ['=>', token_1.TokenKind.Arrow],
            ['any', token_1.TokenKind.Any]
        ]));
        it('should scan @tag id = (id, id) => any', () => test('@tag id = (id, id) => any', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['(', token_1.TokenKind.LeftParen],
            ['id', token_1.TokenKind.Identifier],
            [',', token_1.TokenKind.Comma],
            ['id', token_1.TokenKind.Identifier],
            [')', token_1.TokenKind.RightParen],
            ['=>', token_1.TokenKind.Arrow],
            ['any', token_1.TokenKind.Any]
        ]));
        it('should scan @tag id = (id: any, id) => any', () => test('@tag id = (id: any, id) => any', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['(', token_1.TokenKind.LeftParen],
            ['id', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['any', token_1.TokenKind.Any],
            [',', token_1.TokenKind.Comma],
            ['id', token_1.TokenKind.Identifier],
            [')', token_1.TokenKind.RightParen],
            ['=>', token_1.TokenKind.Arrow],
            ['any', token_1.TokenKind.Any]
        ]));
        it('should scan @tag id = (id: any, id) => (any | any) & any', () => test('@tag id = (id: any, id) => (any | any) & any', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['(', token_1.TokenKind.LeftParen],
            ['id', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['any', token_1.TokenKind.Any],
            [',', token_1.TokenKind.Comma],
            ['id', token_1.TokenKind.Identifier],
            [')', token_1.TokenKind.RightParen],
            ['=>', token_1.TokenKind.Arrow],
            ['(', token_1.TokenKind.LeftParen],
            ['any', token_1.TokenKind.Any],
            ['|', token_1.TokenKind.Pipe],
            ['any', token_1.TokenKind.Any],
            [')', token_1.TokenKind.RightParen],
            ['&', token_1.TokenKind.Ampersand],
            ['any', token_1.TokenKind.Any]
        ]));
        it('should scan @tag id = (id: any | any, id) => any & any', () => test('@tag id = (id: any | any, id) => any & any', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['(', token_1.TokenKind.LeftParen],
            ['id', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['any', token_1.TokenKind.Any],
            ['|', token_1.TokenKind.Pipe],
            ['any', token_1.TokenKind.Any],
            [',', token_1.TokenKind.Comma],
            ['id', token_1.TokenKind.Identifier],
            [')', token_1.TokenKind.RightParen],
            ['=>', token_1.TokenKind.Arrow],
            ['any', token_1.TokenKind.Any],
            ['&', token_1.TokenKind.Ampersand],
            ['any', token_1.TokenKind.Any],
        ]));
        it('should scan @tag id = (id?: any, id) => any | any', () => test('@tag id = (id?: any, id) => any | any', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['(', token_1.TokenKind.LeftParen],
            ['id', token_1.TokenKind.Identifier],
            ['?', token_1.TokenKind.QuestionMark],
            [':', token_1.TokenKind.Colon],
            ['any', token_1.TokenKind.Any],
            [',', token_1.TokenKind.Comma],
            ['id', token_1.TokenKind.Identifier],
            [')', token_1.TokenKind.RightParen],
            ['=>', token_1.TokenKind.Arrow],
            ['any', token_1.TokenKind.Any],
            ['|', token_1.TokenKind.Pipe],
            ['any', token_1.TokenKind.Any]
        ]));
        it('should scan @tag id = (id?: any, ...id: any[]) => any | any', () => test('@tag id = (id?: any, ...id: any[]) => any | any', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['(', token_1.TokenKind.LeftParen],
            ['id', token_1.TokenKind.Identifier],
            ['?', token_1.TokenKind.QuestionMark],
            [':', token_1.TokenKind.Colon],
            ['any', token_1.TokenKind.Any],
            [',', token_1.TokenKind.Comma],
            ['...id', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['any[]', token_1.TokenKind.Any],
            [')', token_1.TokenKind.RightParen],
            ['=>', token_1.TokenKind.Arrow],
            ['any', token_1.TokenKind.Any],
            ['|', token_1.TokenKind.Pipe],
            ['any', token_1.TokenKind.Any]
        ]));
        it('should scan @tag id = (id?: any, id = 1) => any | any', () => test('@tag id = (id?: any, id = 1) => any | any', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['(', token_1.TokenKind.LeftParen],
            ['id', token_1.TokenKind.Identifier],
            ['?', token_1.TokenKind.QuestionMark],
            [':', token_1.TokenKind.Colon],
            ['any', token_1.TokenKind.Any],
            [',', token_1.TokenKind.Comma],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['1', token_1.TokenKind.Initializer],
            [')', token_1.TokenKind.RightParen],
            ['=>', token_1.TokenKind.Arrow],
            ['any', token_1.TokenKind.Any],
            ['|', token_1.TokenKind.Pipe],
            ['any', token_1.TokenKind.Any]
        ]));
        it('should scan @tag id = (id?: any, id = -1) => any | any', () => test('@tag id = (id?: any, id = -1) => any | any', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['(', token_1.TokenKind.LeftParen],
            ['id', token_1.TokenKind.Identifier],
            ['?', token_1.TokenKind.QuestionMark],
            [':', token_1.TokenKind.Colon],
            ['any', token_1.TokenKind.Any],
            [',', token_1.TokenKind.Comma],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['-1', token_1.TokenKind.Initializer],
            [')', token_1.TokenKind.RightParen],
            ['=>', token_1.TokenKind.Arrow],
            ['any', token_1.TokenKind.Any],
            ['|', token_1.TokenKind.Pipe],
            ['any', token_1.TokenKind.Any]
        ]));
        it('should scan @tag id = (id?: any = init, id = init, id = init) => any', () => test('@tag id = (id?: any = init, id = init, id = init) => any', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['(', token_1.TokenKind.LeftParen],
            ['id', token_1.TokenKind.Identifier],
            ['?', token_1.TokenKind.QuestionMark],
            [':', token_1.TokenKind.Colon],
            ['any', token_1.TokenKind.Any],
            ['=', token_1.TokenKind.Equal],
            ['init', token_1.TokenKind.Initializer],
            [',', token_1.TokenKind.Comma],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['init', token_1.TokenKind.Initializer],
            [',', token_1.TokenKind.Comma],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['init', token_1.TokenKind.Initializer],
            [')', token_1.TokenKind.RightParen],
            ['=>', token_1.TokenKind.Arrow],
            ['any', token_1.TokenKind.Any]
        ]));
        it('should scan @tag id: (id?: any = init, id = init, id = init) => any', () => test('@tag id: (id?: any = init, id = init, id = init) => any', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['(', token_1.TokenKind.LeftParen],
            ['id', token_1.TokenKind.Identifier],
            ['?', token_1.TokenKind.QuestionMark],
            [':', token_1.TokenKind.Colon],
            ['any', token_1.TokenKind.Any],
            ['=', token_1.TokenKind.Equal],
            ['init', token_1.TokenKind.Initializer],
            [',', token_1.TokenKind.Comma],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['init', token_1.TokenKind.Initializer],
            [',', token_1.TokenKind.Comma],
            ['id', token_1.TokenKind.Identifier],
            ['=', token_1.TokenKind.Equal],
            ['init', token_1.TokenKind.Initializer],
            [')', token_1.TokenKind.RightParen],
            ['=>', token_1.TokenKind.Arrow],
            ['any', token_1.TokenKind.Any]
        ]));
        /* Scan tags with types (special words) */
        it('should scan @tag id: any', () => test('@tag id: any', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['any', token_1.TokenKind.Any]
        ]));
        it('should scan @tag id?: any', () => test('@tag id?: any', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            ['?', token_1.TokenKind.QuestionMark],
            [':', token_1.TokenKind.Colon],
            ['any', token_1.TokenKind.Any]
        ]));
        it('should scan @tag id: any | any', () => test('@tag id: any | any', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['any', token_1.TokenKind.Any],
            ['|', token_1.TokenKind.Pipe],
            ['any', token_1.TokenKind.Any]
        ]));
        it('should scan @tag id: any & any', () => test('@tag id: any & any', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['any', token_1.TokenKind.Any],
            ['&', token_1.TokenKind.Ampersand],
            ['any', token_1.TokenKind.Any]
        ]));
        it('should scan @tag id: (any | any | any[])', () => test('@tag id: (any | any | any[])', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['(', token_1.TokenKind.LeftParen],
            ['any', token_1.TokenKind.Any],
            ['|', token_1.TokenKind.Pipe],
            ['any', token_1.TokenKind.Any],
            ['|', token_1.TokenKind.Pipe],
            ['any[]', token_1.TokenKind.Any],
            [')', token_1.TokenKind.RightParen],
        ]));
    });
    describe('Real-world scan', () => {
        // From http://usejsdoc.org/howto-es2015-classes.html#documenting-a-simple-class
        const s0 = readComment(0);
        it(`should scan: ${s0}`, () => test(s0, [
            ['Create a point.', token_1.TokenKind.Description],
            ['@param', token_1.TokenKind.Tag],
            ['x', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['number', token_1.TokenKind.Any],
            ['-', token_1.TokenKind.Minus],
            ['The x value.', token_1.TokenKind.Description],
            ['@param', token_1.TokenKind.Tag],
            ['y', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['number', token_1.TokenKind.Any],
            ['-', token_1.TokenKind.Minus],
            ['The y value.', token_1.TokenKind.Description]
        ]));
        const s1 = readComment(1);
        it(`should scan ${OS.EOL}${s1}`, () => test(s1, [
            ['@param', token_1.TokenKind.Tag],
            ['x', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['number', token_1.TokenKind.Any],
            ['-', token_1.TokenKind.Minus],
            ['The x value.', token_1.TokenKind.Description],
            ['@param', token_1.TokenKind.Tag],
            ['y', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['number', token_1.TokenKind.Any],
            ['-', token_1.TokenKind.Minus],
            ['The y value.', token_1.TokenKind.Description],
            ['Create a point.', token_1.TokenKind.Description]
        ]));
        const s2 = readComment(2);
        it(`should scan: ${OS.EOL}${2}`, () => test(s2, [
            ['Convert a string containing two comma-separated numbers into a point.', token_1.TokenKind.Description],
            ['@param', token_1.TokenKind.Tag],
            ['str', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['string', token_1.TokenKind.Any],
            ['-', token_1.TokenKind.Minus],
            ['The string containing two comma-separated numbers.', token_1.TokenKind.Description],
            ['@return', token_1.TokenKind.Tag],
            ['Point', token_1.TokenKind.Any],
            ['-', token_1.TokenKind.Minus],
            ['A Point object.', token_1.TokenKind.Description]
        ]));
        const s3 = readComment(3);
        it(`should scan ${OS.EOL}${s3}`, () => test(s3, [
            ['Create a dot.', token_1.TokenKind.Description],
            ['@param', token_1.TokenKind.Tag],
            ['x', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['number', token_1.TokenKind.Any],
            ['-', token_1.TokenKind.Minus],
            ['The x value.', token_1.TokenKind.Description],
            ['@param', token_1.TokenKind.Tag],
            ['y', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['number', token_1.TokenKind.Any],
            ['-', token_1.TokenKind.Minus],
            ['The y value.', token_1.TokenKind.Description],
            ['@param', token_1.TokenKind.Tag],
            ['width', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['number', token_1.TokenKind.Any],
            ['-', token_1.TokenKind.Minus],
            ['The width of the dot, in pixels.', token_1.TokenKind.Description],
            [`+--${OS.EOL}# Create a dot${OS.EOL}${OS.EOL}Example usage${OS.EOL}\`\`\`${OS.EOL}const dot = new Dot();${OS.EOL}\`\`\`${OS.EOL}+--`, token_1.TokenKind.Markdown]
        ]));
        const s4 = readComment(4);
        it(`should scan ${OS.EOL}${s4}`, () => test(s4, [
            ['Create a dot.', token_1.TokenKind.Description],
            ['@param', token_1.TokenKind.Tag],
            ['x', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['number', token_1.TokenKind.Any],
            ['-', token_1.TokenKind.Minus],
            ['The x value.', token_1.TokenKind.Description],
            ['@param', token_1.TokenKind.Tag],
            ['y', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['number', token_1.TokenKind.Any],
            ['-', token_1.TokenKind.Minus],
            ['The y value.', token_1.TokenKind.Description],
            ['@param', token_1.TokenKind.Tag],
            ['width', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['number', token_1.TokenKind.Any],
            ['-', token_1.TokenKind.Minus],
            ['The width of the dot, in pixels.', token_1.TokenKind.Description],
            [`+--${OS.EOL}# Create a dot${OS.EOL}${OS.EOL}Example usage${OS.EOL}\`\`\`${OS.EOL}const dot = new Dot();${OS.EOL}\`\`\`${OS.EOL}+--`, token_1.TokenKind.Markdown]
        ]));
        const s5 = readComment(5);
        it(`should scan ${OS.EOL}${s5}`, () => test(s5, [
            ['Create a dot.', token_1.TokenKind.Description],
            ['@param', token_1.TokenKind.Tag],
            ['x', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['number', token_1.TokenKind.Any],
            ['-', token_1.TokenKind.Minus],
            ['The x value.', token_1.TokenKind.Description],
            ['@param', token_1.TokenKind.Tag],
            ['y', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['number', token_1.TokenKind.Any],
            ['-', token_1.TokenKind.Minus],
            ['The y value.', token_1.TokenKind.Description],
            ['@param', token_1.TokenKind.Tag],
            ['width', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['number', token_1.TokenKind.Any],
            ['-', token_1.TokenKind.Minus],
            ['The width of the dot, in pixels.', token_1.TokenKind.Description],
            [`+--${OS.EOL} # Create a dot${OS.EOL}${OS.EOL} Example usage${OS.EOL} \`\`\`${OS.EOL} const dot = new Dot();${OS.EOL} \`\`\`${OS.EOL} +--`, token_1.TokenKind.Markdown]
        ]));
        const s6 = readComment(6, 'js');
        it(`should scan ${OS.EOL}${s6}`, () => test(s6, [
            ['Create a dot.', token_1.TokenKind.Description],
            ['@param', token_1.TokenKind.Tag],
            ['x', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['number', token_1.TokenKind.Any],
            ['-', token_1.TokenKind.Minus],
            ['The x value.', token_1.TokenKind.Description],
            ['@param', token_1.TokenKind.Tag],
            ['y', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['number', token_1.TokenKind.Any],
            ['-', token_1.TokenKind.Minus],
            ['The y value.', token_1.TokenKind.Description],
            ['@param', token_1.TokenKind.Tag],
            ['width', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['number', token_1.TokenKind.Any],
            ['-', token_1.TokenKind.Minus],
            ['The width of the dot, in pixels.', token_1.TokenKind.Description],
            [`+--${OS.EOL}   # Create a dot${OS.EOL}  ${OS.EOL}   Example usage${OS.EOL}   \`\`\`${OS.EOL}   const dot = new Dot();${OS.EOL}   \`\`\`${OS.EOL}   +--`, token_1.TokenKind.Markdown]
        ]));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjYW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsNENBQXFDO0FBQ3JDLHdDQUE4RDtBQUM5RCx5QkFBeUI7QUFDekIsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUV6QixjQUFjLE1BQWMsRUFBRSxLQUF3QztJQUNwRSxNQUFNLFdBQVcsR0FBRyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3BELE1BQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDbEMsSUFBSSxLQUFLLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDbEUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFbEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsT0FBTyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzdCLGFBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxhQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0FBQ0gsQ0FBQztBQUVELHFCQUFxQixPQUFlLEVBQUUsR0FBWTtJQUNoRCxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxZQUFZ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QixDQUFDLENBQUMsQ0FBQztRQUNKLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBRSxNQUFNLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUMxRSxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUNKLEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRSxNQUFNLElBQUksQ0FBQywyQkFBMkIsRUFBRTtZQUNsRixDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUVKLEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRSxNQUMvQyxJQUFJLENBQUMsZ0NBQWdDLEVBQUU7WUFDckMsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFFTixFQUFFLENBQUMsMERBQTBELEVBQUUsTUFDN0QsSUFBSSxDQUFDLDhDQUE4QyxFQUFFO1lBQ25ELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRU4sRUFBRSxDQUFDLHdEQUF3RCxFQUFFLE1BQzNELElBQUksQ0FBQyw0Q0FBNEMsRUFBRTtZQUNqRCxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQztZQUNyQixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUVOLEVBQUUsQ0FBQyxtREFBbUQsRUFBRSxNQUN0RCxJQUFJLENBQUMsdUNBQXVDLEVBQUU7WUFDNUMsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxZQUFZLENBQUM7WUFDN0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxJQUFJLENBQUM7WUFDckIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFFTixFQUFFLENBQUMsNkRBQTZELEVBQUUsTUFDaEUsSUFBSSxDQUFDLGlEQUFpRCxFQUFFO1lBQ3RELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsWUFBWSxDQUFDO1lBQzdCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsT0FBTyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQy9CLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsT0FBTyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3hCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRU4sRUFBRSxDQUFDLHVEQUF1RCxFQUFFLE1BQzFELElBQUksQ0FBQywyQ0FBMkMsRUFBRTtZQUNoRCxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFlBQVksQ0FBQztZQUM3QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQztZQUNyQixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUNOLEVBQUUsQ0FBQyx3REFBd0QsRUFBRSxNQUMzRCxJQUFJLENBQUMsNENBQTRDLEVBQUU7WUFDakQsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxZQUFZLENBQUM7WUFDN0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDN0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxJQUFJLENBQUM7WUFDckIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFDTixFQUFFLENBQUMsc0VBQXNFLEVBQUUsTUFDekUsSUFBSSxDQUFDLDBEQUEwRCxFQUFFO1lBQy9ELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsWUFBWSxDQUFDO1lBQzdCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQy9CLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQy9CLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQy9CLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ04sRUFBRSxDQUFDLHFFQUFxRSxFQUFFLE1BQ3hFLElBQUksQ0FBQyx5REFBeUQsRUFBRTtZQUM5RCxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFlBQVksQ0FBQztZQUM3QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUMvQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUMvQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUMvQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUVOLDBDQUEwQztRQUMxQyxFQUFFLENB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RUFBRSxNQUFNLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDdEMsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUMxQyxDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLGNBQWMsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUN2QyxDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLGNBQWMsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztTQUN4QyxDQUFDLENBQUMsQ0FBQztRQUVKLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUxQixFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLGNBQWMsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUN2QyxDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLGNBQWMsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUN2QyxDQUFDLGlCQUFpQixFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1NBQzNDLENBQUMsQ0FBQyxDQUFDO1FBRUosTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFCLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDOUMsQ0FBQyx1RUFBdUUsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUNoRyxDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM3QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLG9EQUFvRCxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQzdFLENBQUMsU0FBUyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQzFCLENBQUMsT0FBTyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3hCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsaUJBQWlCLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7U0FDM0MsQ0FBQyxDQUFDLENBQUM7UUFFSixNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUIsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDOUMsQ0FBQyxlQUFlLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDeEMsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxjQUFjLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDdkMsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxjQUFjLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDdkMsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxPQUFPLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDL0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxL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