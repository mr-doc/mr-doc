"use strict";
const chai_1 = require("chai");
const scanner_1 = require("../src/scanner");
const token_1 = require("../src/token");
const FS = require("fs");
const Path = require("path");
const scanner = new scanner_1.default();
function test(source, match) {
    scanner.source(source);
    const stream = scanner.scan().stream;
    let array = typeof match === 'number' ? [[source, match]] : match;
    array.push(['\u{0000}', token_1.TokenType.NullTerminator]);
    let count = 0;
    while (count < stream.length) {
        chai_1.assert.strictEqual(stream[count].lexeme, array[count][0]);
        chai_1.assert.strictEqual(stream[count].type, array[count][1]);
        count++;
    }
}
function readComment(version, ext) {
    return FS.readFileSync(Path.resolve(__dirname, './fixtures') + `/comments/${version}${ext ? '.' + ext : '.txt'}`, 'utf8');
}
describe('CommentScanner', () => {
    describe('Basic scan', () => {
        it('should scan an ampersand', () => test('&', token_1.TokenType.Ampersand));
        it('should scan a colon', () => test(':', token_1.TokenType.Colon));
        it('should scan a comma', () => test(',', token_1.TokenType.Comma));
        it('should scan a description', () => test('description', token_1.TokenType.Description));
        it('should scan an equal', () => test('=', token_1.TokenType.Equal));
        it('should scan a left parenthesis', () => test('(', token_1.TokenType.LeftParen));
        it('should scan a markdown code', () => test('--- markdown ---', token_1.TokenType.Markdown));
        it('should scan a minus', () => test('-', token_1.TokenType.Minus));
        it('should scan a pipe', () => test('|', token_1.TokenType.Pipe));
        it('should scan a question mark', () => test('?', token_1.TokenType.QuestionMark));
        it('should scan a right parenthesis', () => test(')', token_1.TokenType.RightParen));
    });
    describe('Advanced scan', () => {
        /* Scan tags */
        it('should scan @tag', () => test('@tag', token_1.TokenType.Tag));
        /* Scan tags with identifiers */
        it('should scan @tag id', () => test('@tag id', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier]
        ]));
        it('should scan @tag ...id', () => test('@tag id', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier]
        ]));
        /* Scan tags with initializers */
        it('should scan @tag id = \'init\'', () => test('@tag id = \'init\'', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['\'init\'', token_1.TokenType.Initializer]
        ]));
        it('should scan @tag id = "init"', () => test('@tag id = "init"', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['"init"', token_1.TokenType.Initializer]
        ]));
        it('should scan @tag id = 1', () => test('@tag id = 1', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['1', token_1.TokenType.Initializer]
        ]));
        it('should scan @tag id = -1', () => test('@tag id = -1', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['-1', token_1.TokenType.Initializer]
        ]));
        it('should scan @tag id = []', () => test('@tag id = []', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['[]', token_1.TokenType.Initializer]
        ]));
        it('should scan @tag id = init', () => test('@tag id = init', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['init', token_1.TokenType.Initializer]
        ]));
        it('should scan @tag id = () => any', () => test('@tag id = () => any', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['(', token_1.TokenType.LeftParen],
            [')', token_1.TokenType.RightParen],
            ['=>', token_1.TokenType.Arrow],
            ['any', token_1.TokenType.Any]
        ]));
        it('should scan @tag id = (id) => any', () => test('@tag id = (id) => any', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['(', token_1.TokenType.LeftParen],
            ['id', token_1.TokenType.Identifier],
            [')', token_1.TokenType.RightParen],
            ['=>', token_1.TokenType.Arrow],
            ['any', token_1.TokenType.Any]
        ]));
        it('should scan @tag id = (id, id) => any', () => test('@tag id = (id, id) => any', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['(', token_1.TokenType.LeftParen],
            ['id', token_1.TokenType.Identifier],
            [',', token_1.TokenType.Comma],
            ['id', token_1.TokenType.Identifier],
            [')', token_1.TokenType.RightParen],
            ['=>', token_1.TokenType.Arrow],
            ['any', token_1.TokenType.Any]
        ]));
        it('should scan @tag id = (id: any, id) => any', () => test('@tag id = (id: any, id) => any', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['(', token_1.TokenType.LeftParen],
            ['id', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['any', token_1.TokenType.Any],
            [',', token_1.TokenType.Comma],
            ['id', token_1.TokenType.Identifier],
            [')', token_1.TokenType.RightParen],
            ['=>', token_1.TokenType.Arrow],
            ['any', token_1.TokenType.Any]
        ]));
        it('should scan @tag id = (id: any, id) => (any | any) & any', () => test('@tag id = (id: any, id) => (any | any) & any', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['(', token_1.TokenType.LeftParen],
            ['id', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['any', token_1.TokenType.Any],
            [',', token_1.TokenType.Comma],
            ['id', token_1.TokenType.Identifier],
            [')', token_1.TokenType.RightParen],
            ['=>', token_1.TokenType.Arrow],
            ['(', token_1.TokenType.LeftParen],
            ['any', token_1.TokenType.Any],
            ['|', token_1.TokenType.Pipe],
            ['any', token_1.TokenType.Any],
            [')', token_1.TokenType.RightParen],
            ['&', token_1.TokenType.Ampersand],
            ['any', token_1.TokenType.Any]
        ]));
        it('should scan @tag id = (id: any | any, id) => any & any', () => test('@tag id = (id: any | any, id) => any & any', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['(', token_1.TokenType.LeftParen],
            ['id', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['any', token_1.TokenType.Any],
            ['|', token_1.TokenType.Pipe],
            ['any', token_1.TokenType.Any],
            [',', token_1.TokenType.Comma],
            ['id', token_1.TokenType.Identifier],
            [')', token_1.TokenType.RightParen],
            ['=>', token_1.TokenType.Arrow],
            ['any', token_1.TokenType.Any],
            ['&', token_1.TokenType.Ampersand],
            ['any', token_1.TokenType.Any],
        ]));
        it('should scan @tag id = (id?: any, id) => any | any', () => test('@tag id = (id?: any, id) => any | any', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['(', token_1.TokenType.LeftParen],
            ['id', token_1.TokenType.Identifier],
            ['?', token_1.TokenType.QuestionMark],
            [':', token_1.TokenType.Colon],
            ['any', token_1.TokenType.Any],
            [',', token_1.TokenType.Comma],
            ['id', token_1.TokenType.Identifier],
            [')', token_1.TokenType.RightParen],
            ['=>', token_1.TokenType.Arrow],
            ['any', token_1.TokenType.Any],
            ['|', token_1.TokenType.Pipe],
            ['any', token_1.TokenType.Any]
        ]));
        it('should scan @tag id = (id?: any, ...id: any[]) => any | any', () => test('@tag id = (id?: any, ...id: any[]) => any | any', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['(', token_1.TokenType.LeftParen],
            ['id', token_1.TokenType.Identifier],
            ['?', token_1.TokenType.QuestionMark],
            [':', token_1.TokenType.Colon],
            ['any', token_1.TokenType.Any],
            [',', token_1.TokenType.Comma],
            ['...id', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['any[]', token_1.TokenType.Any],
            [')', token_1.TokenType.RightParen],
            ['=>', token_1.TokenType.Arrow],
            ['any', token_1.TokenType.Any],
            ['|', token_1.TokenType.Pipe],
            ['any', token_1.TokenType.Any]
        ]));
        it('should scan @tag id = (id?: any, id = 1) => any | any', () => test('@tag id = (id?: any, id = 1) => any | any', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['(', token_1.TokenType.LeftParen],
            ['id', token_1.TokenType.Identifier],
            ['?', token_1.TokenType.QuestionMark],
            [':', token_1.TokenType.Colon],
            ['any', token_1.TokenType.Any],
            [',', token_1.TokenType.Comma],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['1', token_1.TokenType.Initializer],
            [')', token_1.TokenType.RightParen],
            ['=>', token_1.TokenType.Arrow],
            ['any', token_1.TokenType.Any],
            ['|', token_1.TokenType.Pipe],
            ['any', token_1.TokenType.Any]
        ]));
        it('should scan @tag id = (id?: any, id = -1) => any | any', () => test('@tag id = (id?: any, id = -1) => any | any', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['(', token_1.TokenType.LeftParen],
            ['id', token_1.TokenType.Identifier],
            ['?', token_1.TokenType.QuestionMark],
            [':', token_1.TokenType.Colon],
            ['any', token_1.TokenType.Any],
            [',', token_1.TokenType.Comma],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['-1', token_1.TokenType.Initializer],
            [')', token_1.TokenType.RightParen],
            ['=>', token_1.TokenType.Arrow],
            ['any', token_1.TokenType.Any],
            ['|', token_1.TokenType.Pipe],
            ['any', token_1.TokenType.Any]
        ]));
        it('should scan @tag id = (id?: any = init, id = init, id = init) => any', () => test('@tag id = (id?: any = init, id = init, id = init) => any', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['(', token_1.TokenType.LeftParen],
            ['id', token_1.TokenType.Identifier],
            ['?', token_1.TokenType.QuestionMark],
            [':', token_1.TokenType.Colon],
            ['any', token_1.TokenType.Any],
            ['=', token_1.TokenType.Equal],
            ['init', token_1.TokenType.Initializer],
            [',', token_1.TokenType.Comma],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['init', token_1.TokenType.Initializer],
            [',', token_1.TokenType.Comma],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['init', token_1.TokenType.Initializer],
            [')', token_1.TokenType.RightParen],
            ['=>', token_1.TokenType.Arrow],
            ['any', token_1.TokenType.Any]
        ]));
        it('should scan @tag id: (id?: any = init, id = init, id = init) => any', () => test('@tag id: (id?: any = init, id = init, id = init) => any', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['(', token_1.TokenType.LeftParen],
            ['id', token_1.TokenType.Identifier],
            ['?', token_1.TokenType.QuestionMark],
            [':', token_1.TokenType.Colon],
            ['any', token_1.TokenType.Any],
            ['=', token_1.TokenType.Equal],
            ['init', token_1.TokenType.Initializer],
            [',', token_1.TokenType.Comma],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['init', token_1.TokenType.Initializer],
            [',', token_1.TokenType.Comma],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['init', token_1.TokenType.Initializer],
            [')', token_1.TokenType.RightParen],
            ['=>', token_1.TokenType.Arrow],
            ['any', token_1.TokenType.Any]
        ]));
        /* Scan tags with types (special words) */
        it('should scan @tag id: any', () => test('@tag id: any', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['any', token_1.TokenType.Any]
        ]));
        it('should scan @tag id?: any', () => test('@tag id?: any', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['?', token_1.TokenType.QuestionMark],
            [':', token_1.TokenType.Colon],
            ['any', token_1.TokenType.Any]
        ]));
        it('should scan @tag id: any | any', () => test('@tag id: any', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['any', token_1.TokenType.Any]
        ]));
        it('should scan @tag id: any & any', () => test('@tag id: any', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['any', token_1.TokenType.Any]
        ]));
        it('should scan @tag id: (any | any | any[])', () => test('@tag id: (any | any | any[])', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['(', token_1.TokenType.LeftParen],
            ['any', token_1.TokenType.Any],
            ['|', token_1.TokenType.Pipe],
            ['any', token_1.TokenType.Any],
            ['|', token_1.TokenType.Pipe],
            ['any[]', token_1.TokenType.Any],
            [')', token_1.TokenType.RightParen],
        ]));
    });
    describe('Real-world scan', () => {
        // From http://usejsdoc.org/howto-es2015-classes.html#documenting-a-simple-class
        const s0 = readComment(0);
        it(`should scan: ${s0}`, () => test(s0, [
            ['Create a point.', token_1.TokenType.Description],
            ['@param', token_1.TokenType.Tag],
            ['x', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['number', token_1.TokenType.Any],
            ['-', token_1.TokenType.Minus],
            ['The x value.', token_1.TokenType.Description],
            ['@param', token_1.TokenType.Tag],
            ['y', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['number', token_1.TokenType.Any],
            ['-', token_1.TokenType.Minus],
            ['The y value.', token_1.TokenType.Description]
        ]));
        const s1 = readComment(1);
        it(`should scan \n${s1}`, () => test(s1, [
            ['@param', token_1.TokenType.Tag],
            ['x', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['number', token_1.TokenType.Any],
            ['-', token_1.TokenType.Minus],
            ['The x value.', token_1.TokenType.Description],
            ['@param', token_1.TokenType.Tag],
            ['y', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['number', token_1.TokenType.Any],
            ['-', token_1.TokenType.Minus],
            ['The y value.', token_1.TokenType.Description],
            ['Create a point.', token_1.TokenType.Description]
        ]));
        const s2 = readComment(2);
        it(`should scan: \n${s2}`, () => test(s2, [
            ['Convert a string containing two comma-separated numbers into a point.', token_1.TokenType.Description],
            ['@param', token_1.TokenType.Tag],
            ['str', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['string', token_1.TokenType.Any],
            ['-', token_1.TokenType.Minus],
            ['The string containing two comma-separated numbers.', token_1.TokenType.Description],
            ['@return', token_1.TokenType.Tag],
            [':', token_1.TokenType.Colon],
            ['Point', token_1.TokenType.Any],
            ['-', token_1.TokenType.Minus],
            ['A Point object.', token_1.TokenType.Description]
        ]));
        const s3 = readComment(3);
        it(`should scan \n${s3}`, () => test(s3, [
            ['Create a dot.', token_1.TokenType.Description],
            ['@param', token_1.TokenType.Tag],
            ['x', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['number', token_1.TokenType.Any],
            ['-', token_1.TokenType.Minus],
            ['The x value.', token_1.TokenType.Description],
            ['@param', token_1.TokenType.Tag],
            ['y', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['number', token_1.TokenType.Any],
            ['-', token_1.TokenType.Minus],
            ['The y value.', token_1.TokenType.Description],
            ['@param', token_1.TokenType.Tag],
            ['width', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['number', token_1.TokenType.Any],
            ['-', token_1.TokenType.Minus],
            ['The width of the dot, in pixels.', token_1.TokenType.Description],
            ["---\n# Create a dot\n\nExample usage\n```\nconst dot = new Dot();\n```\n---", token_1.TokenType.Markdown]
        ]));
        const s4 = readComment(4);
        it(`should scan \n${s4}`, () => test(s4, [
            ['Create a dot.', token_1.TokenType.Description],
            ['@param', token_1.TokenType.Tag],
            ['x', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['number', token_1.TokenType.Any],
            ['-', token_1.TokenType.Minus],
            ['The x value.', token_1.TokenType.Description],
            ['@param', token_1.TokenType.Tag],
            ['y', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['number', token_1.TokenType.Any],
            ['-', token_1.TokenType.Minus],
            ['The y value.', token_1.TokenType.Description],
            ['@param', token_1.TokenType.Tag],
            ['width', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['number', token_1.TokenType.Any],
            ['-', token_1.TokenType.Minus],
            ['The width of the dot, in pixels.', token_1.TokenType.Description],
            ["---\n# Create a dot\n\nExample usage\n```\nconst dot = new Dot();\n```\n---", token_1.TokenType.Markdown]
        ]));
        const s5 = readComment(5);
        it(`should scan \n${s5}`, () => test(s5, [
            ['Create a dot.', token_1.TokenType.Description],
            ['@param', token_1.TokenType.Tag],
            ['x', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['number', token_1.TokenType.Any],
            ['-', token_1.TokenType.Minus],
            ['The x value.', token_1.TokenType.Description],
            ['@param', token_1.TokenType.Tag],
            ['y', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['number', token_1.TokenType.Any],
            ['-', token_1.TokenType.Minus],
            ['The y value.', token_1.TokenType.Description],
            ['@param', token_1.TokenType.Tag],
            ['width', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['number', token_1.TokenType.Any],
            ['-', token_1.TokenType.Minus],
            ['The width of the dot, in pixels.', token_1.TokenType.Description],
            ["---\n# Create a dot\n\nExample usage\n```\nconst dot = new Dot();\n```\n---", token_1.TokenType.Markdown]
        ]));
        const s6 = readComment(6, 'js');
        it(`should scan \n${s6}`, () => test(s6, [
            ['Create a dot.', token_1.TokenType.Description],
            ['@param', token_1.TokenType.Tag],
            ['x', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['number', token_1.TokenType.Any],
            ['-', token_1.TokenType.Minus],
            ['The x value.', token_1.TokenType.Description],
            ['@param', token_1.TokenType.Tag],
            ['y', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['number', token_1.TokenType.Any],
            ['-', token_1.TokenType.Minus],
            ['The y value.', token_1.TokenType.Description],
            ['@param', token_1.TokenType.Tag],
            ['width', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['number', token_1.TokenType.Any],
            ['-', token_1.TokenType.Minus],
            ['The width of the dot, in pixels.', token_1.TokenType.Description],
            ["---\n# Create a dot\n\nExample usage\n```\nconst dot = new Dot();\n```\n---", token_1.TokenType.Markdown]
        ]));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjYW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtCQUE4QjtBQUM5Qiw0Q0FBNEM7QUFDNUMsd0NBQThEO0FBQzlELHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFFN0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxpQkFBYyxFQUFFLENBQUM7QUFDckMsY0FBYyxNQUFjLEVBQUUsS0FBd0M7SUFDcEUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ3JDLElBQUksS0FBSyxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ2xFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsaUJBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBRW5ELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLE9BQU8sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3QixhQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsYUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztBQUNILENBQUM7QUFFRCxxQkFBcUIsT0FBZSxFQUFFLEdBQVk7SUFDaEQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9B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QUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1NBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLDRCQUE0QixFQUFFLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzVELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1NBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLGlDQUFpQyxFQUFFLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQ3RFLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLG1DQUFtQyxFQUFFLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQzFFLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLHVDQUF1QyxFQUFFLE1BQU0sSUFBSSxDQUFDLDJCQUEyQixFQUFFO1lBQ2xGLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRUosRUFBRSxDQUFDLDRDQUE0QyxFQUFFLE1BQy9DLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRTtZQUNyQyxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUVOLEVBQUUsQ0FBQywwREFBMEQsRUFBRSxNQUM3RCxJQUFJLENBQUMsOENBQThDLEVBQUU7WUFDbkQsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxJQUFJLENBQUM7WUFDckIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFFTixFQUFFLENBQUMsd0RBQXdELEVBQUUsTUFDM0QsSUFBSSxDQUFDLDRDQUE0QyxFQUFFO1lBQ2pELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRU4sRUFBRSxDQUFDLG1EQUFtRCxFQUFFLE1BQ3RELElBQUksQ0FBQyx1Q0FBdUMsRUFBRTtZQUM1QyxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFlBQVksQ0FBQztZQUM3QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQztZQUNyQixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUVOLEVBQUUsQ0FBQyw2REFBNkQsRUFBRSxNQUNoRSxJQUFJLENBQUMsaURBQWlELEVBQUU7WUFDdEQsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxZQUFZLENBQUM7WUFDN0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxPQUFPLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDL0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxPQUFPLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDeEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxJQUFJLENBQUM7WUFDckIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFFTixFQUFFLENBQUMsdURBQXVELEVBQUUsTUFDMUQsSUFBSSxDQUFDLDJDQUEyQyxFQUFFO1lBQ2hELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsWUFBWSxDQUFDO1lBQzdCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ04sRUFBRSxDQUFDLHdEQUF3RCxFQUFFLE1BQzNELElBQUksQ0FBQyw0Q0FBNEMsRUFBRTtZQUNqRCxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFlBQVksQ0FBQztZQUM3QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUM3QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQztZQUNyQixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUNOLEVBQUUsQ0FBQyxzRUFBc0UsRUFBRSxNQUN6RSxJQUFJLENBQUMsMERBQTBELEVBQUU7WUFDL0QsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxZQUFZLENBQUM7WUFDN0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDL0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDL0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDL0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFDTixFQUFFLENBQUMscUVBQXFFLEVBQUUsTUFDeEUsSUFBSSxDQUFDLHlEQUF5RCxFQUFFO1lBQzlELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsWUFBWSxDQUFDO1lBQzdCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQy9CLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQy9CLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQy9CLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRU4sMENBQTBDO1FBQzFDLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEQsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FB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aUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxjQUFjLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7U0FDeEMsQ0FBQyxDQUFDLENBQUM7UUFFSixNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxNQUFNLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDdkMsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxjQUFjLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDdkMsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxjQUFjLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDdkMsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztTQUMzQyxDQUFDLENBQUMsQ0FBQztRQUVKLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUxQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLE1BQU0sSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxDQUFDLHVFQUF1RSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQ2hHLENBQUMsUUFBUSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3pCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzdCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsUUFBUSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3pCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsb0RBQW9ELEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDN0UsQ0FBQyxTQUFTLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDMUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxPQUFPLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDeEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztTQUMzQyxDQUFDLENBQUMsQ0FBQztRQUVKLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUxQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLE1BQU0sSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxDQUFDLGVBQWUsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUN4QyxDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLGNBQWMsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUN2QyxDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLGNBQWMsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUN2QyxDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLE9BQU8sRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMvQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLGtDQUFrQyxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQzNELENBQUMsNkVBQTZFLEVBQUUsaUJBQVMsQ0FBQyxRQUFRLENBQUM7U0FDcEcsQ0FBQyxDQUFDLENBQUM7UUFFSixNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxNQUFNLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDdkMsQ0FBQyxlQUFlLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDeEMsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxjQUFjLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDdkMsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxjQUFjLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDdkMsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxPQUFPLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDL0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxrQ0FBa0MsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUMzRCxDQUFDLDZFQUE2RSxFQUFFLGlCQUFTLENBQUMsUUFBUSxDQUFDO1NBQ3BHLENBQUMsQ0FBQyxDQUFDO1FBRUosTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsTUFBTSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLENBQUMsZUFBZSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQ3hDLENBQUMsUUFBUSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3pCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsUUFBUSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3pCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsY0FBYyxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQ3ZDLENBQUMsUUFBUSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3pCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsUUFBUSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3pCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsY0FBYyxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQ3ZDLENBQUMsUUFBUSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3pCLENBQUMsT0FBTyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQy9CLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsUUFBUSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3pCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsa0NBQWtDLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDM0QsQ0FBQyw2RUFBNkUsRUFBRSxpQkFBUyxDQUFDLFFBQVEsQ0FBQztTQUNwRyxDQUFDLENBQUMsQ0FBQztRQUVKLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFaEMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxNQUFNLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDdkMsQ0FBQyxlQUFlLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDeEMsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxjQUFjLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDdkMsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxjQUFjLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDdkMsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxPQUFPLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDL0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxrQ0FBa0MsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUMzRCxDQUFDLDZFQUE2RSxFQUFFLGlCQUFTLENBQUMsUUFBUSxDQUFDO1NBQ3BHLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUMsQ0FBQyJ9