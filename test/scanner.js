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
describe('CommentScanner', () => {
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
        it('should scan @tag ...id', () => test('@tag id', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier]
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
        it('should scan @tag id: any | any', () => test('@tag id: any', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['any', token_1.TokenKind.Any]
        ]));
        it('should scan @tag id: any & any', () => test('@tag id: any', [
            ['@tag', token_1.TokenKind.Tag],
            ['id', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
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
        it(`should scan: ${OS.EOL}${s2}`, () => test(s2, [
            ['Convert a string containing two comma-separated numbers into a point.', token_1.TokenKind.Description],
            ['@param', token_1.TokenKind.Tag],
            ['str', token_1.TokenKind.Identifier],
            [':', token_1.TokenKind.Colon],
            ['string', token_1.TokenKind.Any],
            ['-', token_1.TokenKind.Minus],
            ['The string containing two comma-separated numbers.', token_1.TokenKind.Description],
            ['@return', token_1.TokenKind.Tag],
            [':', token_1.TokenKind.Colon],
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
        console.log(OS.EOL.charCodeAt(0));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjYW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsNENBQXFDO0FBQ3JDLHdDQUE4RDtBQUM5RCx5QkFBeUI7QUFDekIsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUV6QixjQUFjLE1BQWMsRUFBRSxLQUF3QztJQUNwRSxNQUFNLFdBQVcsR0FBRyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3BELE1BQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDbEMsSUFBSSxLQUFLLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDbEUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFbEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsT0FBTyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzdCLGFBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxhQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0FBQ0gsQ0FBQztBQUVELHFCQUFxQixPQUFlLEVBQUUsR0FBWTtJQUNoRCxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRyxhQUFhLE9BQU8sR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBRUQsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBRXpCLFFBQVEsQ0FBQyxZQUFZLEVBQUU7UUFDckIsRUFBRSxDQUFDLDBCQUEwQixFQUFFLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDckUsRUFBRSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7UUFDM0QsRUFBRSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUQsRUFBRSxDQUFDLDJCQUEyQixFQUFFLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbEYsRUFBRSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDN0QsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDM0UsRUFBRSxDQUFDLDZCQUE2QixFQUFFLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLGlCQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN0RixFQUFFLENBQUMscUJBQXFCLEVBQUUsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RCxFQUFFLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxRCxFQUFFLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUMzRSxFQUFFLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxlQUFlLEVBQUU7UUFDeEIsZUFBZTtRQUNmLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTFELGdDQUFnQztRQUNoQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsTUFBTSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzlDLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1NBQzdCLENBQUMsQ0FBQyxDQUFDO1FBRUosRUFBRSxDQUFDLHdCQUF3QixFQUFFLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqRCxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztTQUM3QixDQUFDLENBQUMsQ0FBQztRQUVKLGlDQUFpQztRQUNqQyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUsTUFBTSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDcEUsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxVQUFVLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7U0FDcEMsQ0FBQyxDQUFDLENBQUM7UUFDSixFQUFFLENBQUMsOEJBQThCLEVBQUUsTUFBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDaEUsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7U0FDbEMsQ0FBQyxDQUFDLENBQUM7UUFDSixFQUFFLENBQUMseUJBQXlCLEVBQUUsTUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1NBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLDBCQUEwQixFQUFFLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4RCxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztTQUM5QixDQUFDLENBQUMsQ0FBQztRQUNKLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEQsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7U0FDOUIsQ0FBQyxDQUFDLENBQUM7UUFDSixFQUFFLENBQUMsMEJBQTBCLEVBQUUsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3hELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1NBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLDRCQUE0QixFQUFFLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzVELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1NBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLGlDQUFpQyxFQUFFLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQ3RFLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLG1DQUFtQyxFQUFFLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQzFFLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLHVDQUF1QyxFQUFFLE1BQU0sSUFBSSxDQUFDLDJCQUEyQixFQUFFO1lBQ2xGLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRUosRUFBRSxDQUFDLDRDQUE0QyxFQUFFLE1BQy9DLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRTtZQUNyQyxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUVOLEVBQUUsQ0FBQywwREFBMEQsRUFBRSxNQUM3RCxJQUFJLENBQUMsOENBQThDLEVBQUU7WUFDbkQsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxJQUFJLENBQUM7WUFDckIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFFTixFQUFFLENBQUMsd0RBQXdELEVBQUUsTUFDM0QsSUFBSSxDQUFDLDRDQUE0QyxFQUFFO1lBQ2pELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRU4sRUFBRSxDQUFDLG1EQUFtRCxFQUFFLE1BQ3RELElBQUksQ0FBQyx1Q0FBdUMsRUFBRTtZQUM1QyxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFlBQVksQ0FBQztZQUM3QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQztZQUNyQixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUVOLEVBQUUsQ0FBQyw2REFBNkQsRUFBRSxNQUNoRSxJQUFJLENBQUMsaURBQWlELEVBQUU7WUFDdEQsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxZQUFZLENBQUM7WUFDN0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxPQUFPLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDL0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxPQUFPLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDeEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxJQUFJLENBQUM7WUFDckIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFFTixFQUFFLENBQUMsdURBQXVELEVBQUUsTUFDMUQsSUFBSSxDQUFDLDJDQUEyQyxFQUFFO1lBQ2hELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsWUFBWSxDQUFDO1lBQzdCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ04sRUFBRSxDQUFDLHdEQUF3RCxFQUFFLE1BQzNELElBQUksQ0FBQyw0Q0FBNEMsRUFBRTtZQUNqRCxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFlBQVksQ0FBQztZQUM3QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUM3QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQztZQUNyQixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUNOLEVBQUUsQ0FBQyxzRUFBc0UsRUFBRSxNQUN6RSxJQUFJLENBQUMsMERBQTBELEVBQUU7WUFDL0QsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxZQUFZLENBQUM7WUFDN0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDL0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDL0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDL0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFDTixFQUFFLENBQUMscUVBQXFFLEVBQUUsTUFDeEUsSUFBSSxDQUFDLHlEQUF5RCxFQUFFO1lBQzlELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsWUFBWSxDQUFDO1lBQzdCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQy9CLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQy9CLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQy9CLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRU4sMENBQTBDO1FBQzFDLEVBQUUs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QUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxjQUFjLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDdkMsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxjQUFjLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7U0FDeEMsQ0FBQyxDQUFDLENBQUM7UUFFSixNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUIsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDOUMsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxjQUFjLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDdkMsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxjQUFjLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDdkMsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztTQUMzQyxDQUFDLENBQUMsQ0FBQztRQUVKLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUxQixFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQy9DLENBQUMsdUVBQXVFLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDaEcsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDN0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxvREFBb0QsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUM3RSxDQUFDLFNBQVMsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUMxQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLE9BQU8sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN4QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLGlCQUFpQixFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1NBQzNDLENBQUMsQ0FBQyxDQUFDO1FBRUosTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFCLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQzlDLENBQUMsZUFBZSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQ3hDLENBQUMsUUFBUSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3pCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsUUFBUSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3pCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsY0FBYyxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQ3ZDLENBQUMsUUFBUSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3pCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsUUFBUSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3pCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsY0FBYyxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQ3ZDLENBQUMsUUFBUSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3pCLENBQUMsT0FBTyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQy9CLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsUUFBUSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3pCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsa0NBQWtDLEVBQUUsaUJBQVMsQ0FBQyxX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