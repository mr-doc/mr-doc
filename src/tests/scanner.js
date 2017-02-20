"use strict";
const chai_1 = require('chai');
const scanner_1 = require('../scanner');
const token_1 = require('../token');
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
    \t@param x: number - The x value.
    \t@param y: number - The y value.
    \tCreate a point.\n`;
        it(`should scan: ${s1}`, () => test(s1, [
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
        const s2 = `\n
    \tConvert a string containing two comma-separated numbers into a point.
    \t@param str: string - The string containing two comma-separated numbers.
    \t@return: Point - A Point object.\n`;
        it(`should scan: ${s2}`, () => test(s2, [
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
        const s3 = `\n
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
        it(`should scan ${s3}`, () => test(s3, [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjYW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUF1QixNQUFNLENBQUMsQ0FBQTtBQUM5QiwwQkFBMkIsWUFBWSxDQUFDLENBQUE7QUFDeEMsd0JBQStDLFVBQVUsQ0FBQyxDQUFBO0FBRTFELE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQWMsRUFBRSxDQUFDO0FBQ3JDLGNBQWMsTUFBYyxFQUFFLEtBQXdDO0lBQ3BFLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxJQUFJLEtBQUssR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNsRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLGlCQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUVuRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxPQUFPLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDN0IsYUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELGFBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7QUFDSCxDQUFDO0FBQ0QsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBRXpCLFFBQVEsQ0FBQyxZQUFZLEVBQUU7UUFDckIsRUFBRSxDQUFDLDBCQUEwQixFQUFFLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDckUsRUFBRSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7UUFDM0QsRUFBRSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUQsRUFBRSxDQUFDLDJCQUEyQixFQUFFLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbEYsRUFBRSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDN0QsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDM0UsRUFBRSxDQUFDLDZCQUE2QixFQUFFLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLGlCQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN0RixFQUFFLENBQUMscUJBQXFCLEVBQUUsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RCxFQUFFLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxRCxFQUFFLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUMzRSxFQUFFLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxlQUFlLEVBQUU7UUFDeEIsZUFBZTtRQUNmLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTFELGdDQUFnQztRQUNoQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsTUFBTSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzlDLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1NBQzdCLENBQUMsQ0FBQyxDQUFDO1FBRUosRUFBRSxDQUFDLHdCQUF3QixFQUFFLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqRCxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztTQUM3QixDQUFDLENBQUMsQ0FBQztRQUVKLGlDQUFpQztRQUNqQyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUsTUFBTSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDcEUsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxVQUFVLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7U0FDcEMsQ0FBQyxDQUFDLENBQUM7UUFDSixFQUFFLENBQUMsOEJBQThCLEVBQUUsTUFBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDaEUsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7U0FDbEMsQ0FBQyxDQUFDLENBQUM7UUFDSixFQUFFLENBQUMseUJBQXlCLEVBQUUsTUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1NBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLDBCQUEwQixFQUFFLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4RCxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztTQUM5QixDQUFDLENBQUMsQ0FBQztRQUNKLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEQsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7U0FDOUIsQ0FBQyxDQUFDLENBQUM7UUFDSixFQUFFLENBQUMsNEJBQTRCLEVBQUUsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDNUQsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7U0FDaEMsQ0FBQyxDQUFDLENBQUM7UUFDSixFQUFFLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDdEUsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFDSixFQUFFLENBQUMsbUNBQW1DLEVBQUUsTUFBTSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDMUUsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFDSixFQUFFLENBQUMsdUNBQXVDLEVBQUUsTUFBTSxJQUFJLENBQUMsMkJBQTJCLEVBQUU7WUFDbEYsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFFSixFQUFFLENBQUMsNENBQTRDLEVBQUUsTUFDL0MsSUFBSSxDQUFDLGdDQUFnQyxFQUFFO1lBQ3JDLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRU4sRUFBRSxDQUFDLDBEQUEwRCxFQUFFLE1BQzdELElBQUksQ0FBQyw4Q0FBOEMsRUFBRTtZQUNuRCxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQztZQUNyQixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUVOLEVBQUUsQ0FBQyx3REFBd0QsRUFBRSxNQUMzRCxJQUFJLENBQUMsNENBQTRDLEVBQUU7WUFDakQsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxJQUFJLENBQUM7WUFDckIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFFTixFQUFFLENBQUMsbURBQW1ELEVBQUUsTUFDdEQsSUFBSSxDQUFDLHVDQUF1QyxFQUFFO1lBQzVDLENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsWUFBWSxDQUFDO1lBQzdCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRU4sRUFBRSxDQUFDLDZEQUE2RCxFQUFFLE1BQ2hFLElBQUksQ0FBQyxpREFBaUQsRUFBRTtZQUN0RCxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFlBQVksQ0FBQztZQUM3QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLE9BQU8sRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMvQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLE9BQU8sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN4QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQztZQUNyQixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUVOLEVBQUUsQ0FBQyx1REFBdUQsRUFBRSxNQUMxRCxJQUFJLENBQUMsMkNBQTJDLEVBQUU7WUFDaEQsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxZQUFZLENBQUM7WUFDN0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxJQUFJLENBQUM7WUFDckIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFDTixFQUFFLENBQUMsd0RBQXdELEVBQUUsTUFDM0QsSUFBSSxDQUFDLDRDQUE0QyxFQUFFO1lBQ2pELENBQUMsTUFBTSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsWUFBWSxDQUFDO1lBQzdCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQzdCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsVUFBVSxDQUFDO1lBQzNCLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxFQUFFLGlCQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUMsS0FBSyxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ04sRUFBRSxDQUFDLHNFQUFzRSxFQUFFLE1BQ3pFLElBQUksQ0FBQywwREFBMEQsRUFBRTtZQUMvRCxDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFlBQVksQ0FBQztZQUM3QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUN0QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUMvQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUMvQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLE1BQU0sRUFBRSxpQkFBUyxDQUFDLFdBQVcsQ0FBQztZQUMvQixDQUFDLEdBQUcsRUFBRSxpQkFBUyxDQUFDLFVBQVUsQ0FBQztZQUMzQixDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN2QixDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQztTQUN2QixDQUFDLENBQUMsQ0FBQztRQUNOLEVBQUUsQ0FBQyxxRUFBcUUsRUFBRSxNQUN4RSxJQUFJLENBQUMseURBQXlELEVBQUU7WUFDOUQsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxJQUFJLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDNUIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxZQUFZLENBQUM7WUFDN0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxLQUFLLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxNQUFNLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7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QUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxjQUFjLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDdkMsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxjQUFjLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7U0FDeEMsQ0FBQyxDQUFDLENBQUM7UUFFSixNQUFNLEVBQUUsR0FBRzs7O3dCQUdTLENBQUM7UUFFckIsRUFBRSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxNQUFNLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDdEMsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQyxjQUFjLEVBQUUsaUJBQVMsQ0FBQyxXQUFXLENBQUM7WUFDdkMsQ0FBQyxRQUFRLEVBQUUsaUJBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekIsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsQ0FBQyxHQUFHLEVBQUUsaUJBQVMsQ0FBQyxLQUFLLENB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