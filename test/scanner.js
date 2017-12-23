"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("./helpers/test");
const token_1 = require("../src/comment-parser/token");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjYW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBa0M7QUFDbEMsdURBQTZFO0FBQzdFLHlDQUFrQztBQUNsQyw2Q0FBc0M7QUFDdEMsTUFBTSxJQUFJLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7QUFFL0IsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7SUFFdkIsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7UUFDMUIsRUFBRSxDQUFDLDBCQUEwQixFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtRQUMzRCxFQUFFLENBQUMscUJBQXFCLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUQsRUFBRSxDQUFDLDJCQUEyQixFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM3RCxFQUFFLENBQUMsZ0NBQWdDLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDM0UsRUFBRSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxpQkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEYsRUFBRSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVELEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxRCxFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDM0UsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7UUFDN0IsZUFBZTtRQUNmLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUUxRCxnQ0FBZ0M7UUFDaEMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDOUMsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7U0FDN0IsQ0FBQyxDQUFDLENBQUM7UUFFSixFQUFFLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNwRCxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLE9BQU8sRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztTQUNoQyxDQUFDLENBQUMsQ0FBQztRQUVKLHdCQUF3QjtRQUN4QixFQUFFLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNoRCxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFlBQVksQ0FBQztTQUM5QixDQUFDLENBQUMsQ0FBQztRQUVKLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQzFELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsWUFBWSxDQUFDO1lBQzdCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRUosRUFBRSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUM5RCxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFlBQVksQ0FBQztZQUM3QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztTQUM1QixDQUFDLENBQUMsQ0FBQztRQUVKLGlDQUFpQztRQUNqQyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ3BFLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsVUFBVSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1NBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLDhCQUE4QixFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUNoRSxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztTQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNKLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1NBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLDBCQUEwQixFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEQsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7U0FDOUIsQ0FBQyxDQUFDLENBQUM7UUFDSixFQUFFLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4RCxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztTQUM5QixDQUFDLENBQUMsQ0FBQztRQUNKLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3hELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1NBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLDRCQUE0QixFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUM1RCxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztTQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNKLEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDdEUsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFDSixFQUFFLENBQUMsbUNBQW1DLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQzFFLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLHVDQUF1QyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRTtZQUNsRixDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUVKLEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRSxHQUFHLEVBQUUsQ0FDcEQsSUFBSSxDQUFDLGdDQUFnQyxFQUFFO1lBQ3JDLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRU4sRUFBRSxDQUFDLDBEQUEwRCxFQUFFLEdBQUcsRUFBRSxDQUNsRSxJQUFJLENBQUMsOENBQThDLEVBQUU7WUFDbkQsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxJQUFJLENBQUM7WUFDckIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFFTixFQUFFLENBQUMsd0RBQXdELEVBQUUsR0FBRyxFQUFFLENBQ2hFLElBQUksQ0FBQyw0Q0FBNEMsRUFBRTtZQUNqRCxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQztZQUNyQixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUVOLEVBQUUsQ0FBQyxtREFBbUQsRUFBRSxHQUFHLEVBQUUsQ0FDM0QsSUFBSSxDQUFDLHVDQUF1QyxFQUFFO1lBQzVDLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsWUFBWSxDQUFDO1lBQzdCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRU4sRUFBRSxDQUFDLDZEQUE2RCxFQUFFLEdBQUcsRUFBRSxDQUNyRSxJQUFJLENBQUMsaURBQWlELEVBQUU7WUFDdEQsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxZQUFZLENBQUM7WUFDN0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxPQUFPLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDL0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxPQUFPLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDeEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxJQUFJLENBQUM7WUFDckIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFFTixFQUFFLENBQUMsdURBQXVELEVBQUUsR0FBRyxFQUFFLENBQy9ELElBQUksQ0FBQywyQ0FBMkMsRUFBRTtZQUNoRCxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFlBQVksQ0FBQztZQUM3QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQztZQUNyQixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUNOLEVBQUUsQ0FBQyx3REFBd0QsRUFBRSxHQUFHLEVBQUUsQ0FDaEUsSUFBSSxDQUFDLDRDQUE0QyxFQUFFO1lBQ2pELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsWUFBWSxDQUFDO1lBQzdCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQzdCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ04sRUFBRSxDQUFDLHNFQUFzRSxFQUFFLEdBQUcsRUFBRSxDQUM5RSxJQUFJLENBQUMsMERBQTBELEVBQUU7WUFDL0QsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxZQUFZLENBQUM7WUFDN0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDL0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxL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RSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLGNBQWMsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztTQUN4QyxDQUFDLENBQUMsQ0FBQztRQUVKLE1BQU0sRUFBRSxHQUFHLGNBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVuQixFQUFFLENBQUMsaUJBQWlCLGdCQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNsRCxDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLGNBQWMsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUN2QyxDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLGNBQWMsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FB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USxjQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsaUJBQVMsQ0FBQyxRQUFRLENBQUM7U0FDcEQsQ0FBQyxDQUFDLENBQUM7UUFFSixNQUFNLEVBQUUsR0FBRyxjQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbkIsRUFBRSxDQUFDLGlCQUFpQixnQkFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDbEQsQ0FBQyxlQUFlLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDeEMsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxjQUFjLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDdkMsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxjQUFjLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDdkMsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxPQUFPLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDL0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxrQ0FBa0MsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUMzRCxDQUFDLFFBQVEsY0FBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLGlCQUFTLENBQUMsUUFBUSxDQUFDO1NBQ3BELENBQUMsQ0FBQyxDQUFDO1FBRUosTUFBTSxFQUFFLEdBQUcsY0FBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV6QixFQUFFLENBQUMsaUJBQWlCLGdCQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNsRCxDQUFDLGVBQWUsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUN4QyxDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLGNBQWMsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUN2QyxDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLGNBQWMsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUN2QyxDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLE9BQU8sRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMvQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLFFBQVEsRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN6QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLGtDQUFrQyxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQzFELENBQUMsUUFBUSxjQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsaUJBQVMsQ0FBQyxRQUFRLENBQUM7U0FDdkQsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDLENBQUMsQ0FBQztBQUVMLENBQUMsQ0FBQyxDQUFDIn0=