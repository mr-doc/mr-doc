"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("./helpers/test");
const token_1 = require("../src/tom/token");
const read_1 = require("./helpers/read");
const indent_1 = require("./helpers/indent");
const test = test_1.default.Scanner.test;
describe('Scanner', () => {
    describe('Basic scan', () => {
        it('should scan an ampersand', () => test('&', token_1.TokenType.Ampersand));
        it('should scan a colon', () => test(':', token_1.TokenType.Colon));
        it('should scan a comma', () => test(',', token_1.TokenType.Comma));
        it('should scan a description', () => test('description', token_1.TokenType.Description));
        it('should scan an equal', () => test('=', token_1.TokenType.Equal));
        it('should scan a left parenthesis', () => test('(', token_1.TokenType.LeftParen));
        it('should scan a markdown code', () => test('+-- markdown +--', token_1.TokenType.Markdown));
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
        it('should scan @tag ...id', () => test('@tag ...id', [
            ['@tag', token_1.TokenType.Tag],
            ['...id', token_1.TokenType.Identifier]
        ]));
        /* Scan optional tags */
        it('should scan @tag id?', () => test('@tag id?', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['?', token_1.TokenType.QuestionMark]
        ]));
        it('should scan @tag id?: any', () => test('@tag id?: any', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['?', token_1.TokenType.QuestionMark],
            [':', token_1.TokenType.Colon],
            ['any', token_1.TokenType.Any]
        ]));
        it('should scan @tag id?: (any)', () => test('@tag id?: (any)', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['?', token_1.TokenType.QuestionMark],
            [':', token_1.TokenType.Colon],
            ['(', token_1.TokenType.LeftParen],
            ['any', token_1.TokenType.Any],
            [')', token_1.TokenType.RightParen]
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
        it('should scan @tag id = {}', () => test('@tag id = {}', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            ['=', token_1.TokenType.Equal],
            ['{}', token_1.TokenType.Initializer]
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
        it('should scan @tag id: any | any', () => test('@tag id: any | any', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['any', token_1.TokenType.Any],
            ['|', token_1.TokenType.Pipe],
            ['any', token_1.TokenType.Any]
        ]));
        it('should scan @tag id: any & any', () => test('@tag id: any & any', [
            ['@tag', token_1.TokenType.Tag],
            ['id', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['any', token_1.TokenType.Any],
            ['&', token_1.TokenType.Ampersand],
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
        const s0 = read_1.default(0);
        it(`should scan: \n${indent_1.default(s0, 2)}`, () => test(s0, [
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
        const s1 = read_1.default(1);
        it(`should scan \n${indent_1.default(s1, 2)}`, () => test(s1, [
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
        const s2 = read_1.default(2);
        it(`should scan: \n${indent_1.default(s2, 2)}`, () => test(s2, [
            ['Convert a string containing two comma-separated numbers into a point.', token_1.TokenType.Description],
            ['@param', token_1.TokenType.Tag],
            ['str', token_1.TokenType.Identifier],
            [':', token_1.TokenType.Colon],
            ['string', token_1.TokenType.Any],
            ['-', token_1.TokenType.Minus],
            ['The string containing two comma-separated numbers.', token_1.TokenType.Description],
            ['@return', token_1.TokenType.Tag],
            ['Point', token_1.TokenType.Any],
            ['-', token_1.TokenType.Minus],
            ['A Point object.', token_1.TokenType.Description]
        ]));
        const s3 = read_1.default(3);
        it(`should scan \n${indent_1.default(s3, 2)}`, () => test(s3, [
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
            [`+--\n${read_1.default(3, 'md')}\n+--`, token_1.TokenType.Markdown]
        ]));
        const s4 = read_1.default(4);
        it(`should scan \n${indent_1.default(s4, 2)}`, () => test(s4, [
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
            [`+--\n${read_1.default(4, 'md')}\n+--`, token_1.TokenType.Markdown]
        ]));
        const s5 = read_1.default(5);
        it(`should scan \n${indent_1.default(s5, 2)}`, () => test(s5, [
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
            [`+--\n${read_1.default(5, 'md')}\n +--`, token_1.TokenType.Markdown]
        ]));
        const s6 = read_1.default(6, 'js');
        it(`should scan \n${indent_1.default(s6, 2)}`, () => test(s6, [
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
            [`+--\n${read_1.default(6, 'md')}\n   +--`, token_1.TokenType.Markdown]
        ]));
    });
});
//# sourceMappingURL=scanner.js.map