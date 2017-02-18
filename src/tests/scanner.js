"use strict";
// import * as Path from 'path';
const chai_1 = require('chai');
const scanner_1 = require('../scanner');
const scanner = new scanner_1.default();
function test(source, match) {
    scanner.source(source);
    const stream = scanner.scan().stream;
    let array = typeof match === 'number' ? [[source, match]] : match;
    array.push(['\u{0000}', 13 /* NullTerminator */]);
    let count = 0;
    while (count < stream.length) {
        chai_1.assert.strictEqual(stream[count].lexeme, array[count][0]);
        chai_1.assert.strictEqual(stream[count].type, array[count][1]);
        count++;
    }
}
describe('CommentScanner', () => {
    describe('Basic scan', () => {
        it('should scan an ampersand', () => test('&', 1 /* Ampersand */));
        it('should scan a colon', () => test(':', 4 /* Colon */));
        it('should scan a comma', () => test(',', 5 /* Comma */));
        it('should scan a description', () => test('description', 6 /* Description */));
        it('should scan an equal', () => test('=', 7 /* Equal */));
        it('should scan a left parenthesis', () => test('(', 10 /* LeftParen */));
        it('should scan a markdown code', () => test('--- markdown ---', 11 /* Markdown */));
        it('should scan a minus', () => test('-', 12 /* Minus */));
        it('should scan a pipe', () => test('|', 14 /* Pipe */));
        it('should scan a question mark', () => test('?', 15 /* QuestionMark */));
        it('should scan a right parenthesis', () => test(')', 16 /* RightParen */));
    });
    describe('Advanced scan', () => {
        /* Scan tags */
        it('should scan @tag', () => test('@tag', 17 /* Tag */));
        /* Scan tags with identifiers */
        it('should scan @tag id', () => test('@tag id', [
            ['@tag', 17 /* Tag */],
            ['id', 8 /* Identifier */]
        ]));
        /* Scan tags with initializers */
        it('should scan @tag id = \'init\'', () => test('@tag id = \'init\'', [
            ['@tag', 17 /* Tag */],
            ['id', 8 /* Identifier */],
            ['=', 7 /* Equal */],
            ['\'init\'', 9 /* Initializer */]
        ]));
        it('should scan @tag id = "init"', () => test('@tag id = "init"', [
            ['@tag', 17 /* Tag */],
            ['id', 8 /* Identifier */],
            ['=', 7 /* Equal */],
            ['"init"', 9 /* Initializer */]
        ]));
        it('should scan @tag id = 1', () => test('@tag id = 1', [
            ['@tag', 17 /* Tag */],
            ['id', 8 /* Identifier */],
            ['=', 7 /* Equal */],
            ['1', 9 /* Initializer */]
        ]));
        it('should scan @tag id = []', () => test('@tag id = []', [
            ['@tag', 17 /* Tag */],
            ['id', 8 /* Identifier */],
            ['=', 7 /* Equal */],
            ['[]', 9 /* Initializer */]
        ]));
        it('should scan @tag id = init', () => test('@tag id = init', [
            ['@tag', 17 /* Tag */],
            ['id', 8 /* Identifier */],
            ['=', 7 /* Equal */],
            ['init', 9 /* Initializer */]
        ]));
        it('should scan @tag id = () => any', () => test('@tag id = () => any', [
            ['@tag', 17 /* Tag */],
            ['id', 8 /* Identifier */],
            ['=', 7 /* Equal */],
            ['(', 10 /* LeftParen */],
            [')', 16 /* RightParen */],
            ['=>', 3 /* Arrow */],
            ['any', 2 /* Any */]
        ]));
        it('should scan @tag id = (id) => any', () => test('@tag id = (id) => any', [
            ['@tag', 17 /* Tag */],
            ['id', 8 /* Identifier */],
            ['=', 7 /* Equal */],
            ['(', 10 /* LeftParen */],
            ['id', 8 /* Identifier */],
            [')', 16 /* RightParen */],
            ['=>', 3 /* Arrow */],
            ['any', 2 /* Any */]
        ]));
        it('should scan @tag id = (id, id) => any', () => test('@tag id = (id, id) => any', [
            ['@tag', 17 /* Tag */],
            ['id', 8 /* Identifier */],
            ['=', 7 /* Equal */],
            ['(', 10 /* LeftParen */],
            ['id', 8 /* Identifier */],
            [',', 5 /* Comma */],
            ['id', 8 /* Identifier */],
            [')', 16 /* RightParen */],
            ['=>', 3 /* Arrow */],
            ['any', 2 /* Any */]
        ]));
        it('should scan @tag id = (id: any, id) => any', () => test('@tag id = (id: any, id) => any', [
            ['@tag', 17 /* Tag */],
            ['id', 8 /* Identifier */],
            ['=', 7 /* Equal */],
            ['(', 10 /* LeftParen */],
            ['id', 8 /* Identifier */],
            [':', 4 /* Colon */],
            ['any', 2 /* Any */],
            [',', 5 /* Comma */],
            ['id', 8 /* Identifier */],
            [')', 16 /* RightParen */],
            ['=>', 3 /* Arrow */],
            ['any', 2 /* Any */]
        ]));
        it('should scan @tag id = (id: any | any, id) => any & any', () => test('@tag id = (id: any | any, id) => any & any', [
            ['@tag', 17 /* Tag */],
            ['id', 8 /* Identifier */],
            ['=', 7 /* Equal */],
            ['(', 10 /* LeftParen */],
            ['id', 8 /* Identifier */],
            [':', 4 /* Colon */],
            ['any', 2 /* Any */],
            ['|', 14 /* Pipe */],
            ['any', 2 /* Any */],
            [',', 5 /* Comma */],
            ['id', 8 /* Identifier */],
            [')', 16 /* RightParen */],
            ['=>', 3 /* Arrow */],
            ['any', 2 /* Any */],
            ['&', 1 /* Ampersand */],
            ['any', 2 /* Any */],
        ]));
        it('should scan @tag id = (id?: any, id) => any | any', () => test('@tag id = (id?: any, id) => any | any', [
            ['@tag', 17 /* Tag */],
            ['id', 8 /* Identifier */],
            ['=', 7 /* Equal */],
            ['(', 10 /* LeftParen */],
            ['id', 8 /* Identifier */],
            ['?', 15 /* QuestionMark */],
            [':', 4 /* Colon */],
            ['any', 2 /* Any */],
            [',', 5 /* Comma */],
            ['id', 8 /* Identifier */],
            [')', 16 /* RightParen */],
            ['=>', 3 /* Arrow */],
            ['any', 2 /* Any */],
            ['|', 14 /* Pipe */],
            ['any', 2 /* Any */]
        ]));
        it('should scan @tag id = (id?: any, id = 1) => any | any', () => test('@tag id = (id?: any, id = 1) => any | any', [
            ['@tag', 17 /* Tag */],
            ['id', 8 /* Identifier */],
            ['=', 7 /* Equal */],
            ['(', 10 /* LeftParen */],
            ['id', 8 /* Identifier */],
            ['?', 15 /* QuestionMark */],
            [':', 4 /* Colon */],
            ['any', 2 /* Any */],
            [',', 5 /* Comma */],
            ['id', 8 /* Identifier */],
            ['=', 7 /* Equal */],
            ['1', 9 /* Initializer */],
            [')', 16 /* RightParen */],
            ['=>', 3 /* Arrow */],
            ['any', 2 /* Any */],
            ['|', 14 /* Pipe */],
            ['any', 2 /* Any */]
        ]));
        it('should scan @tag id = (id?: any = init, id = init, id = init) => any', () => test('@tag id = (id?: any = init, id = init, id = init) => any', [
            ['@tag', 17 /* Tag */],
            ['id', 8 /* Identifier */],
            ['=', 7 /* Equal */],
            ['(', 10 /* LeftParen */],
            ['id', 8 /* Identifier */],
            ['?', 15 /* QuestionMark */],
            [':', 4 /* Colon */],
            ['any', 2 /* Any */],
            ['=', 7 /* Equal */],
            ['init', 9 /* Initializer */],
            [',', 5 /* Comma */],
            ['id', 8 /* Identifier */],
            ['=', 7 /* Equal */],
            ['init', 9 /* Initializer */],
            [',', 5 /* Comma */],
            ['id', 8 /* Identifier */],
            ['=', 7 /* Equal */],
            ['init', 9 /* Initializer */],
            [')', 16 /* RightParen */],
            ['=>', 3 /* Arrow */],
            ['any', 2 /* Any */]
        ]));
        it('should scan @tag id: (id?: any = init, id = init, id = init) => any', () => test('@tag id: (id?: any = init, id = init, id = init) => any', [
            ['@tag', 17 /* Tag */],
            ['id', 8 /* Identifier */],
            [':', 4 /* Colon */],
            ['(', 10 /* LeftParen */],
            ['id', 8 /* Identifier */],
            ['?', 15 /* QuestionMark */],
            [':', 4 /* Colon */],
            ['any', 2 /* Any */],
            ['=', 7 /* Equal */],
            ['init', 9 /* Initializer */],
            [',', 5 /* Comma */],
            ['id', 8 /* Identifier */],
            ['=', 7 /* Equal */],
            ['init', 9 /* Initializer */],
            [',', 5 /* Comma */],
            ['id', 8 /* Identifier */],
            ['=', 7 /* Equal */],
            ['init', 9 /* Initializer */],
            [')', 16 /* RightParen */],
            ['=>', 3 /* Arrow */],
            ['any', 2 /* Any */]
        ]));
        /* Scan tags with types (special words) */
        it('should scan @tag id: any', () => test('@tag id: any', [
            ['@tag', 17 /* Tag */],
            ['id', 8 /* Identifier */],
            [':', 4 /* Colon */],
            ['any', 2 /* Any */]
        ]));
        it('should scan @tag id?: any', () => test('@tag id?: any', [
            ['@tag', 17 /* Tag */],
            ['id', 8 /* Identifier */],
            ['?', 15 /* QuestionMark */],
            [':', 4 /* Colon */],
            ['any', 2 /* Any */]
        ]));
        it('should scan @tag id: any | any', () => test('@tag id: any', [
            ['@tag', 17 /* Tag */],
            ['id', 8 /* Identifier */],
            [':', 4 /* Colon */],
            ['any', 2 /* Any */]
        ]));
        it('should scan @tag id: any & any', () => test('@tag id: any', [
            ['@tag', 17 /* Tag */],
            ['id', 8 /* Identifier */],
            [':', 4 /* Colon */],
            ['any', 2 /* Any */]
        ]));
    });
    describe('Real-world scan', () => {
        // From http://usejsdoc.org/howto-es2015-classes.html#documenting-a-simple-class
        const s0 = `\n
    \tCreate a point.
    \t@param x: number - The x value.
    \t@param y: number - The y value.\n`;
        it(`should scan: ${s0}`, () => test(s0, [
            ['Create a point.', 6 /* Description */],
            ['@param', 17 /* Tag */],
            ['x', 8 /* Identifier */],
            [':', 4 /* Colon */],
            ['number', 2 /* Any */],
            ['-', 12 /* Minus */],
            ['The x value.', 6 /* Description */],
            ['@param', 17 /* Tag */],
            ['y', 8 /* Identifier */],
            [':', 4 /* Colon */],
            ['number', 2 /* Any */],
            ['-', 12 /* Minus */],
            ['The y value.', 6 /* Description */]
        ]));
        const s1 = `\n
    \tConvert a string containing two comma-separated numbers into a point.
    \t@param str: string - The string containing two comma-separated numbers.
    \t@return: Point - A Point object.\n`;
        it(`should scan: ${s1}`, () => test(s1, [
            ['Convert a string containing two comma-separated numbers into a point.', 6 /* Description */],
            ['@param', 17 /* Tag */],
            ['str', 8 /* Identifier */],
            [':', 4 /* Colon */],
            ['string', 2 /* Any */],
            ['-', 12 /* Minus */],
            ['The string containing two comma-separated numbers.', 6 /* Description */],
            ['@return', 17 /* Tag */],
            [':', 4 /* Colon */],
            ['Point', 2 /* Any */],
            ['-', 12 /* Minus */],
            ['A Point object.', 6 /* Description */]
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
            ['Create a dot.', 6 /* Description */],
            ['@param', 17 /* Tag */],
            ['x', 8 /* Identifier */],
            [':', 4 /* Colon */],
            ['number', 2 /* Any */],
            ['-', 12 /* Minus */],
            ['The x value.', 6 /* Description */],
            ['@param', 17 /* Tag */],
            ['y', 8 /* Identifier */],
            [':', 4 /* Colon */],
            ['number', 2 /* Any */],
            ['-', 12 /* Minus */],
            ['The y value.', 6 /* Description */],
            ['@param', 17 /* Tag */],
            ['width', 8 /* Identifier */],
            [':', 4 /* Colon */],
            ['number', 2 /* Any */],
            ['-', 12 /* Minus */],
            ['The width of the dot, in pixels.', 6 /* Description */],
            [`---
    \t# Create a dot
    \t
    \tExample usage
    \t\`\`\`
    \tconst dot = new Dot();
    \t\`\`\`
    \t---`, 11 /* Markdown */]
        ]));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjYW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLGdDQUFnQztBQUNoQyx1QkFBdUIsTUFBTSxDQUFDLENBQUE7QUFDOUIsMEJBQTJCLFlBQVksQ0FBQyxDQUFBO0FBR3hDLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQWMsRUFBRSxDQUFDO0FBQ3JDLGNBQWMsTUFBYyxFQUFFLEtBQXdDO0lBQ3BFLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxJQUFJLEtBQUssR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNsRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLHVCQUF3QixDQUFDLENBQUMsQ0FBQztJQUVuRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxPQUFPLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDN0IsYUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELGFBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7QUFDSCxDQUFDO0FBQ0QsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBRXpCLFFBQVEsQ0FBQyxZQUFZLEVBQUU7UUFDckIsRUFBRSxDQUFDLDBCQUEwQixFQUFF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