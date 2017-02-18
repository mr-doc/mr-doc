"use strict";
// import * as Path from 'path';
const chai_1 = require("chai");
const scanner_1 = require("../scanner");
const scanner = new scanner_1.default();
function test(source, match) {
    scanner.source(source);
    const stream = scanner.scan().stream;
    let array = typeof match === 'number' ? [[source, match]] : match;
    array.push(['\u{0000}', 12 /* NullTerminator */]);
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
        it('should scan a colon', () => test(':', 3 /* Colon */));
        it('should scan a comma', () => test(',', 4 /* Comma */));
        it('should scan a description', () => test('description', 5 /* Description */));
        it('should scan an equal', () => test('=', 6 /* Equal */));
        it('should scan a left parenthesis', () => test('(', 9 /* LeftParen */));
        it('should scan a markdown code', () => test('--- markdown ---', 10 /* Markdown */));
        it('should scan a minus', () => test('-', 11 /* Minus */));
        it('should scan a pipe', () => test('|', 13 /* Pipe */));
        it('should scan a question mark', () => test('?', 14 /* QuestionMark */));
        it('should scan a right parenthesis', () => test(')', 15 /* RightParen */));
    });
    describe('Advanced scan', () => {
        /* Scan tags */
        it('should scan @tag', () => test('@tag', 17 /* Tag */));
        /* Scan tags with identifiers */
        it('should scan @tag id', () => test('@tag id', [
            ['@tag', 17 /* Tag */],
            ['id', 7 /* Identifier */]
        ]));
        /* Scan tags with initializers */
        it('should scan @tag id = \'init\'', () => test('@tag id = \'init\'', [
            ['@tag', 17 /* Tag */],
            ['id', 7 /* Identifier */],
            ['=', 6 /* Equal */],
            ['\'init\'', 8 /* Initializer */]
        ]));
        it('should scan @tag id = "init"', () => test('@tag id = "init"', [
            ['@tag', 17 /* Tag */],
            ['id', 7 /* Identifier */],
            ['=', 6 /* Equal */],
            ['"init"', 8 /* Initializer */]
        ]));
        it('should scan @tag id = 1', () => test('@tag id = 1', [
            ['@tag', 17 /* Tag */],
            ['id', 7 /* Identifier */],
            ['=', 6 /* Equal */],
            ['1', 8 /* Initializer */]
        ]));
        it('should scan @tag id = []', () => test('@tag id = []', [
            ['@tag', 17 /* Tag */],
            ['id', 7 /* Identifier */],
            ['=', 6 /* Equal */],
            ['[]', 8 /* Initializer */]
        ]));
        it('should scan @tag id = init', () => test('@tag id = init', [
            ['@tag', 17 /* Tag */],
            ['id', 7 /* Identifier */],
            ['=', 6 /* Equal */],
            ['init', 8 /* Initializer */]
        ]));
        it('should scan @tag id = () => special', () => test('@tag id = () => special', [
            ['@tag', 17 /* Tag */],
            ['id', 7 /* Identifier */],
            ['=', 6 /* Equal */],
            ['(', 9 /* LeftParen */],
            [')', 15 /* RightParen */],
            ['=>', 2 /* Arrow */],
            ['special', 16 /* SpecialWord */]
        ]));
        it('should scan @tag id = (id) => special', () => test('@tag id = (id) => special', [
            ['@tag', 17 /* Tag */],
            ['id', 7 /* Identifier */],
            ['=', 6 /* Equal */],
            ['(', 9 /* LeftParen */],
            ['id', 7 /* Identifier */],
            [')', 15 /* RightParen */],
            ['=>', 2 /* Arrow */],
            ['special', 16 /* SpecialWord */]
        ]));
        it('should scan @tag id = (id, id) => special', () => test('@tag id = (id, id) => special', [
            ['@tag', 17 /* Tag */],
            ['id', 7 /* Identifier */],
            ['=', 6 /* Equal */],
            ['(', 9 /* LeftParen */],
            ['id', 7 /* Identifier */],
            [',', 4 /* Comma */],
            ['id', 7 /* Identifier */],
            [')', 15 /* RightParen */],
            ['=>', 2 /* Arrow */],
            ['special', 16 /* SpecialWord */]
        ]));
        it('should scan @tag id = (id: special, id) => special', () => test('@tag id = (id: special, id) => special', [
            ['@tag', 17 /* Tag */],
            ['id', 7 /* Identifier */],
            ['=', 6 /* Equal */],
            ['(', 9 /* LeftParen */],
            ['id', 7 /* Identifier */],
            [':', 3 /* Colon */],
            ['special', 16 /* SpecialWord */],
            [',', 4 /* Comma */],
            ['id', 7 /* Identifier */],
            [')', 15 /* RightParen */],
            ['=>', 2 /* Arrow */],
            ['special', 16 /* SpecialWord */]
        ]));
        it('should scan @tag id = (id: special | special, id) => special & special', () => test('@tag id = (id: special | special, id) => special & special', [
            ['@tag', 17 /* Tag */],
            ['id', 7 /* Identifier */],
            ['=', 6 /* Equal */],
            ['(', 9 /* LeftParen */],
            ['id', 7 /* Identifier */],
            [':', 3 /* Colon */],
            ['special', 16 /* SpecialWord */],
            ['|', 13 /* Pipe */],
            ['special', 16 /* SpecialWord */],
            [',', 4 /* Comma */],
            ['id', 7 /* Identifier */],
            [')', 15 /* RightParen */],
            ['=>', 2 /* Arrow */],
            ['special', 16 /* SpecialWord */],
            ['&', 1 /* Ampersand */],
            ['special', 16 /* SpecialWord */],
        ]));
        it('should scan @tag id = (id?: special, id) => special | special', () => test('@tag id = (id?: special, id) => special | special', [
            ['@tag', 17 /* Tag */],
            ['id', 7 /* Identifier */],
            ['=', 6 /* Equal */],
            ['(', 9 /* LeftParen */],
            ['id', 7 /* Identifier */],
            ['?', 14 /* QuestionMark */],
            [':', 3 /* Colon */],
            ['special', 16 /* SpecialWord */],
            [',', 4 /* Comma */],
            ['id', 7 /* Identifier */],
            [')', 15 /* RightParen */],
            ['=>', 2 /* Arrow */],
            ['special', 16 /* SpecialWord */],
            ['|', 13 /* Pipe */],
            ['special', 16 /* SpecialWord */]
        ]));
        it('should scan @tag id = (id?: special, id = 1) => special | special', () => test('@tag id = (id?: special, id = 1) => special | special', [
            ['@tag', 17 /* Tag */],
            ['id', 7 /* Identifier */],
            ['=', 6 /* Equal */],
            ['(', 9 /* LeftParen */],
            ['id', 7 /* Identifier */],
            ['?', 14 /* QuestionMark */],
            [':', 3 /* Colon */],
            ['special', 16 /* SpecialWord */],
            [',', 4 /* Comma */],
            ['id', 7 /* Identifier */],
            ['=', 6 /* Equal */],
            ['1', 8 /* Initializer */],
            [')', 15 /* RightParen */],
            ['=>', 2 /* Arrow */],
            ['special', 16 /* SpecialWord */],
            ['|', 13 /* Pipe */],
            ['special', 16 /* SpecialWord */]
        ]));
        it('should scan @tag id = (id?: special = init, id = init, id = init) => special', () => test('@tag id = (id?: special = init, id = init, id = init) => special', [
            ['@tag', 17 /* Tag */],
            ['id', 7 /* Identifier */],
            ['=', 6 /* Equal */],
            ['(', 9 /* LeftParen */],
            ['id', 7 /* Identifier */],
            ['?', 14 /* QuestionMark */],
            [':', 3 /* Colon */],
            ['special', 16 /* SpecialWord */],
            ['=', 6 /* Equal */],
            ['init', 8 /* Initializer */],
            [',', 4 /* Comma */],
            ['id', 7 /* Identifier */],
            ['=', 6 /* Equal */],
            ['init', 8 /* Initializer */],
            [',', 4 /* Comma */],
            ['id', 7 /* Identifier */],
            ['=', 6 /* Equal */],
            ['init', 8 /* Initializer */],
            [')', 15 /* RightParen */],
            ['=>', 2 /* Arrow */],
            ['special', 16 /* SpecialWord */]
        ]));
        it('should scan @tag id: (id?: special = init, id = init, id = init) => special', () => test('@tag id: (id?: special = init, id = init, id = init) => special', [
            ['@tag', 17 /* Tag */],
            ['id', 7 /* Identifier */],
            [':', 3 /* Colon */],
            ['(', 9 /* LeftParen */],
            ['id', 7 /* Identifier */],
            ['?', 14 /* QuestionMark */],
            [':', 3 /* Colon */],
            ['special', 16 /* SpecialWord */],
            ['=', 6 /* Equal */],
            ['init', 8 /* Initializer */],
            [',', 4 /* Comma */],
            ['id', 7 /* Identifier */],
            ['=', 6 /* Equal */],
            ['init', 8 /* Initializer */],
            [',', 4 /* Comma */],
            ['id', 7 /* Identifier */],
            ['=', 6 /* Equal */],
            ['init', 8 /* Initializer */],
            [')', 15 /* RightParen */],
            ['=>', 2 /* Arrow */],
            ['special', 16 /* SpecialWord */]
        ]));
        /* Scan tags with types (special words) */
        it('should scan @tag id: special', () => test('@tag id: special', [
            ['@tag', 17 /* Tag */],
            ['id', 7 /* Identifier */],
            [':', 3 /* Colon */],
            ['special', 16 /* SpecialWord */]
        ]));
        it('should scan @tag id?: special', () => test('@tag id?: special', [
            ['@tag', 17 /* Tag */],
            ['id', 7 /* Identifier */],
            ['?', 14 /* QuestionMark */],
            [':', 3 /* Colon */],
            ['special', 16 /* SpecialWord */]
        ]));
        it('should scan @tag id: special | special', () => test('@tag id: special', [
            ['@tag', 17 /* Tag */],
            ['id', 7 /* Identifier */],
            [':', 3 /* Colon */],
            ['special', 16 /* SpecialWord */]
        ]));
        it('should scan @tag id: special & special', () => test('@tag id: special', [
            ['@tag', 17 /* Tag */],
            ['id', 7 /* Identifier */],
            [':', 3 /* Colon */],
            ['special', 16 /* SpecialWord */]
        ]));
    });
    describe('Real-world scan', () => {
        // From http://usejsdoc.org/howto-es2015-classes.html#documenting-a-simple-class
        const s0 = `\n
    \tCreate a point.
    \t@param x: number - The x value.
    \t@param y: number - The y value.\n`;
        it(`should scan: ${s0}`, () => test(s0, [
            ['Create a point.', 5 /* Description */],
            ['@param', 17 /* Tag */],
            ['x', 7 /* Identifier */],
            [':', 3 /* Colon */],
            ['number', 16 /* SpecialWord */],
            ['-', 11 /* Minus */],
            ['The x value.', 5 /* Description */],
            ['@param', 17 /* Tag */],
            ['y', 7 /* Identifier */],
            [':', 3 /* Colon */],
            ['number', 16 /* SpecialWord */],
            ['-', 11 /* Minus */],
            ['The y value.', 5 /* Description */]
        ]));
        const s1 = `\n
    \tConvert a string containing two comma-separated numbers into a point.
    \t@param str: string - The string containing two comma-separated numbers.
    \t@return: Point - A Point object.\n`;
        it(`should scan: ${s1}`, () => test(s1, [
            ['Convert a string containing two comma-separated numbers into a point.', 5 /* Description */],
            ['@param', 17 /* Tag */],
            ['str', 7 /* Identifier */],
            [':', 3 /* Colon */],
            ['string', 16 /* SpecialWord */],
            ['-', 11 /* Minus */],
            ['The string containing two comma-separated numbers.', 5 /* Description */],
            ['@return', 17 /* Tag */],
            [':', 3 /* Colon */],
            ['Point', 16 /* SpecialWord */],
            ['-', 11 /* Minus */],
            ['A Point object.', 5 /* Description */]
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
            ['Create a dot.', 5 /* Description */],
            ['@param', 17 /* Tag */],
            ['x', 7 /* Identifier */],
            [':', 3 /* Colon */],
            ['number', 16 /* SpecialWord */],
            ['-', 11 /* Minus */],
            ['The x value.', 5 /* Description */],
            ['@param', 17 /* Tag */],
            ['y', 7 /* Identifier */],
            [':', 3 /* Colon */],
            ['number', 16 /* SpecialWord */],
            ['-', 11 /* Minus */],
            ['The y value.', 5 /* Description */],
            ['@param', 17 /* Tag */],
            ['width', 7 /* Identifier */],
            [':', 3 /* Colon */],
            ['number', 16 /* SpecialWord */],
            ['-', 11 /* Minus */],
            ['The width of the dot, in pixels.', 5 /* Description */],
            [`---
    \t# Create a dot
    \t
    \tExample usage
    \t\`\`\`
    \tconst dot = new Dot();
    \t\`\`\`
    \t---`, 10 /* Markdown */]
        ]));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjYW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLGdDQUFnQztBQUNoQywrQkFBOEI7QUFDOUIsd0NBQXdDO0FBR3hDLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQWMsRUFBRSxDQUFDO0FBQ3JDLGNBQWMsTUFBYyxFQUFFLEtBQXdDO0lBQ3BFLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxJQUFJLEtBQUssR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNsRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLHVCQUF3QixDQUFDLENBQUMsQ0FBQztJQUVuRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxPQUFPLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDN0IsYUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELGFBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7QUFDSCxDQUFDO0FBQ0QsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBRXpCLFFBQVEsQ0FBQyxZQUFZLEVBQUU7UUFDckIsRUFBRSxDQUFDLDBCQUEwQixFQUFFLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxpQkFB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