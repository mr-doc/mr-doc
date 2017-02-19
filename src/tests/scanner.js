"use strict";
// import * as Path from 'path';
const chai_1 = require("chai");
const scanner_1 = require("../scanner");
const token_1 = require("../token");
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
    });
    describe('Real-world scan', () => {
        // From http://usejsdoc.org/howto-es2015-classes.html#documenting-a-simple-class
        const s0 = `\n
    \tCreate a point.
    \t@param x: number - The x value.
    \t@param y: number - The y value.\n`;
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
        const s1 = `\n
    \tConvert a string containing two comma-separated numbers into a point.
    \t@param str: string - The string containing two comma-separated numbers.
    \t@return: Point - A Point object.\n`;
        it(`should scan: ${s1}`, () => test(s1, [
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
            [`---
    \t# Create a dot
    \t
    \tExample usage
    \t\`\`\`
    \tconst dot = new Dot();
    \t\`\`\`
    \t---`, token_1.TokenType.Markdown]
        ]));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjYW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLGdDQUFnQztBQUNoQywrQkFBOEI7QUFDOUIsd0NBQXdDO0FBQ3hDLG9DQUEwRDtBQUUxRCxNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFjLEVBQUUsQ0FBQztBQUNyQyxjQUFjLE1BQWMsRUFBRSxLQUF3QztJQUNwRSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDckMsSUFBSSxLQUFLLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDbEUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxpQkFBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFFbkQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsT0FBTyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzdCLGFBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxhQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0FBQ0gsQ0FBQztBQUNELFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUV6QixRQUFRLENBQUMsWUFBWSxFQUFFO1FBQ3JCLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxNQUFNLElB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QUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1NBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLGlDQUFpQyxFQUFFLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQ3RFLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLG1DQUFtQyxFQUFFLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQzFFLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLHVDQUF1QyxFQUFFLE1BQU0sSUFBSSxDQUFDLDJCQUEyQixFQUFFO1lBQ2xGLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRUosRUFBRSxDQUFDLDRDQUE0QyxFQUFFLE1BQy9DLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRTtZQUNyQyxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUVKLEVBQUUsQ0FBQywwREFBMEQsRUFBRSxNQUMvRCxJQUFJLENBQUMsOENBQThDLEVBQUU7WUFDbkQsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxJQUFJLENBQUM7WUFDckIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFFTixFQUFFLENBQUMsd0RBQXdELEVBQUUsTUFDM0QsSUFBSSxDQUFDLDRDQUE0QyxFQUFFO1lBQ2pELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRU4sRUFBRSxDQUFDLG1EQUFtRCxFQUFFLE1BQ3RELElBQUksQ0FBQyx1Q0FBdUMsRUFBRTtZQUM1QyxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFlBQVksQ0FBQztZQUM3QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQztZQUNyQixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUVOLEVBQUUsQ0FBQyw2REFBNkQsRUFBRSxNQUNoRSxJQUFJLENBQUMsaURBQWlELEVBQUU7WUFDdEQsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxZQUFZLENBQUM7WUFDN0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxPQUFPLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDL0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxPQUFPLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDeEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxJQUFJLENBQUM7WUFDckIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFFTixFQUFFLENBQUMsdURBQXVELEVBQUUsTUFDMUQsSUFBSSxDQUFDLDJDQUEyQyxFQUFFO1lBQ2hELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsWUFBWSxDQUFDO1lBQzdCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLHdEQUF3RCxFQUFFLE1BQzdELElBQUksQ0FBQyw0Q0FBNEMsRUFBRTtZQUNqRCxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFlBQVksQ0FBQztZQUM3QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUM3QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQztZQUNyQixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUNOLEVBQUUsQ0FBQyxzRUFBc0UsRUFBRSxNQUN6RSxJQUFJLENBQUMsMERBQTBELEVBQUU7WUFDL0QsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxZQUFZLENBQUM7WUFDN0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDL0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDL0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDL0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFDTixFQUFFLENBQUMscUVBQXFFLEVBQUUsTUFDeEUsSUFBSSxDQUFDLHlEQUF5RCxFQUFFO1lBQzlELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsWUFBWSxDQUFDO1lBQzdCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQy9CLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQy9CLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQy9CLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRU4sMENBQTBDO1FBQzFDLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEQsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFDSixFQUFFLENBQUMsMkJBQTJCLEVBQUUsTUFBTSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQzFELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsWUFBWSxDQUFDO1lBQzdCLENBQUMsR0FBRyxF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