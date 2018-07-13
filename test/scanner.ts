// import Test from './helpers/test';
// import { Token, TokenType, getTokenName } from '../src/tom/token';
// import read from './helpers/read';
// import indent from './helpers/indent';
// const test = Test.Scanner.test;

// describe('Scanner', () => {

//   describe('Basic scan', () => {
//     it('should scan an ampersand', () => test('&', TokenType.Ampersand));
//     it('should scan a colon', () => test(':', TokenType.Colon))
//     it('should scan a comma', () => test(',', TokenType.Comma));
//     it('should scan a description', () => test('description', TokenType.Description));
//     it('should scan an equal', () => test('=', TokenType.Equal));
//     it('should scan a left parenthesis', () => test('(', TokenType.LeftParen));
//     it('should scan a markdown code', () => test('+-- markdown +--', TokenType.Markdown));
//     it('should scan a minus', () => test('-', TokenType.Minus));
//     it('should scan a pipe', () => test('|', TokenType.Pipe));
//     it('should scan a question mark', () => test('?', TokenType.QuestionMark));
//     it('should scan a right parenthesis', () => test(')', TokenType.RightParen));
//   });

//   describe('Advanced scan', () => {
//     /* Scan tags */
//     it('should scan @tag', () => test('@tag', TokenType.Tag));

//     /* Scan tags with identifiers */
//     it('should scan @tag id', () => test('@tag id', [
//       ['@tag', TokenType.Tag],
//       ['id', TokenType.Identifier]
//     ]));

//     it('should scan @tag ...id', () => test('@tag ...id', [
//       ['@tag', TokenType.Tag],
//       ['...id', TokenType.Identifier]
//     ]));
    
//     /* Scan optional tags */
//     it('should scan @tag id?', () => test('@tag id?', [
//       ['@tag', TokenType.Tag],
//       ['id', TokenType.Identifier],
//       ['?', TokenType.QuestionMark]
//     ]));

//     it('should scan @tag id?: any', () => test('@tag id?: any', [
//       ['@tag', TokenType.Tag],
//       ['id', TokenType.Identifier],
//       ['?', TokenType.QuestionMark],
//       [':', TokenType.Colon],
//       ['any', TokenType.Any]
//     ]));

//     it('should scan @tag id?: (any)', () => test('@tag id?: (any)', [
//       ['@tag', TokenType.Tag],
//       ['id', TokenType.Identifier],
//       ['?', TokenType.QuestionMark],
//       [':', TokenType.Colon],
//       ['(', TokenType.LeftParen],
//       ['any', TokenType.Any],
//       [')', TokenType.RightParen]
//     ]));

//     /* Scan tags with initializers */
//     it('should scan @tag id = \'init\'', () => test('@tag id = \'init\'', [
//       ['@tag', TokenType.Tag],
//       ['id', TokenType.Identifier],
//       ['=', TokenType.Equal],
//       ['\'init\'', TokenType.Initializer]
//     ]));
//     it('should scan @tag id = "init"', () => test('@tag id = "init"', [
//       ['@tag', TokenType.Tag],
//       ['id', TokenType.Identifier],
//       ['=', TokenType.Equal],
//       ['"init"', TokenType.Initializer]
//     ]));
//     it('should scan @tag id = 1', () => test('@tag id = 1', [
//       ['@tag', TokenType.Tag],
//       ['id', TokenType.Identifier],
//       ['=', TokenType.Equal],
//       ['1', TokenType.Initializer]
//     ]));
//     it('should scan @tag id = -1', () => test('@tag id = -1', [
//       ['@tag', TokenType.Tag],
//       ['id', TokenType.Identifier],
//       ['=', TokenType.Equal],
//       ['-1', TokenType.Initializer]
//     ]));
//     it('should scan @tag id = []', () => test('@tag id = []', [
//       ['@tag', TokenType.Tag],
//       ['id', TokenType.Identifier],
//       ['=', TokenType.Equal],
//       ['[]', TokenType.Initializer]
//     ]));
//     it('should scan @tag id = {}', () => test('@tag id = {}', [
//       ['@tag', TokenType.Tag],
//       ['id', TokenType.Identifier],
//       ['=', TokenType.Equal],
//       ['{}', TokenType.Initializer]
//     ]));
//     it('should scan @tag id = init', () => test('@tag id = init', [
//       ['@tag', TokenType.Tag],
//       ['id', TokenType.Identifier],
//       ['=', TokenType.Equal],
//       ['init', TokenType.Initializer]
//     ]));
//     it('should scan @tag id = () => any', () => test('@tag id = () => any', [
//       ['@tag', TokenType.Tag],
//       ['id', TokenType.Identifier],
//       ['=', TokenType.Equal],
//       ['(', TokenType.LeftParen],
//       [')', TokenType.RightParen],
//       ['=>', TokenType.Arrow],
//       ['any', TokenType.Any]
//     ]));
//     it('should scan @tag id = (id) => any', () => test('@tag id = (id) => any', [
//       ['@tag', TokenType.Tag],
//       ['id', TokenType.Identifier],
//       ['=', TokenType.Equal],
//       ['(', TokenType.LeftParen],
//       ['id', TokenType.Identifier],
//       [')', TokenType.RightParen],
//       ['=>', TokenType.Arrow],
//       ['any', TokenType.Any]
//     ]));
//     it('should scan @tag id = (id, id) => any', () => test('@tag id = (id, id) => any', [
//       ['@tag', TokenType.Tag],
//       ['id', TokenType.Identifier],
//       ['=', TokenType.Equal],
//       ['(', TokenType.LeftParen],
//       ['id', TokenType.Identifier],
//       [',', TokenType.Comma],
//       ['id', TokenType.Identifier],
//       [')', TokenType.RightParen],
//       ['=>', TokenType.Arrow],
//       ['any', TokenType.Any]
//     ]));

//     it('should scan @tag id = (id: any, id) => any', () =>
//       test('@tag id = (id: any, id) => any', [
//         ['@tag', TokenType.Tag],
//         ['id', TokenType.Identifier],
//         ['=', TokenType.Equal],
//         ['(', TokenType.LeftParen],
//         ['id', TokenType.Identifier],
//         [':', TokenType.Colon],
//         ['any', TokenType.Any],
//         [',', TokenType.Comma],
//         ['id', TokenType.Identifier],
//         [')', TokenType.RightParen],
//         ['=>', TokenType.Arrow],
//         ['any', TokenType.Any]
//       ]));

//     it('should scan @tag id = (id: any, id) => (any | any) & any', () =>
//       test('@tag id = (id: any, id) => (any | any) & any', [
//         ['@tag', TokenType.Tag],
//         ['id', TokenType.Identifier],
//         ['=', TokenType.Equal],
//         ['(', TokenType.LeftParen],
//         ['id', TokenType.Identifier],
//         [':', TokenType.Colon],
//         ['any', TokenType.Any],
//         [',', TokenType.Comma],
//         ['id', TokenType.Identifier],
//         [')', TokenType.RightParen],
//         ['=>', TokenType.Arrow],
//         ['(', TokenType.LeftParen],
//         ['any', TokenType.Any],
//         ['|', TokenType.Pipe],
//         ['any', TokenType.Any],
//         [')', TokenType.RightParen],
//         ['&', TokenType.Ampersand],
//         ['any', TokenType.Any]
//       ]));

//     it('should scan @tag id = (id: any | any, id) => any & any', () =>
//       test('@tag id = (id: any | any, id) => any & any', [
//         ['@tag', TokenType.Tag],
//         ['id', TokenType.Identifier],
//         ['=', TokenType.Equal],
//         ['(', TokenType.LeftParen],
//         ['id', TokenType.Identifier],
//         [':', TokenType.Colon],
//         ['any', TokenType.Any],
//         ['|', TokenType.Pipe],
//         ['any', TokenType.Any],
//         [',', TokenType.Comma],
//         ['id', TokenType.Identifier],
//         [')', TokenType.RightParen],
//         ['=>', TokenType.Arrow],
//         ['any', TokenType.Any],
//         ['&', TokenType.Ampersand],
//         ['any', TokenType.Any],
//       ]));

//     it('should scan @tag id = (id?: any, id) => any | any', () =>
//       test('@tag id = (id?: any, id) => any | any', [
//         ['@tag', TokenType.Tag],
//         ['id', TokenType.Identifier],
//         ['=', TokenType.Equal],
//         ['(', TokenType.LeftParen],
//         ['id', TokenType.Identifier],
//         ['?', TokenType.QuestionMark],
//         [':', TokenType.Colon],
//         ['any', TokenType.Any],
//         [',', TokenType.Comma],
//         ['id', TokenType.Identifier],
//         [')', TokenType.RightParen],
//         ['=>', TokenType.Arrow],
//         ['any', TokenType.Any],
//         ['|', TokenType.Pipe],
//         ['any', TokenType.Any]
//       ]));

//     it('should scan @tag id = (id?: any, ...id: any[]) => any | any', () =>
//       test('@tag id = (id?: any, ...id: any[]) => any | any', [
//         ['@tag', TokenType.Tag],
//         ['id', TokenType.Identifier],
//         ['=', TokenType.Equal],
//         ['(', TokenType.LeftParen],
//         ['id', TokenType.Identifier],
//         ['?', TokenType.QuestionMark],
//         [':', TokenType.Colon],
//         ['any', TokenType.Any],
//         [',', TokenType.Comma],
//         ['...id', TokenType.Identifier],
//         [':', TokenType.Colon],
//         ['any[]', TokenType.Any],
//         [')', TokenType.RightParen],
//         ['=>', TokenType.Arrow],
//         ['any', TokenType.Any],
//         ['|', TokenType.Pipe],
//         ['any', TokenType.Any]
//       ]));

//     it('should scan @tag id = (id?: any, id = 1) => any | any', () =>
//       test('@tag id = (id?: any, id = 1) => any | any', [
//         ['@tag', TokenType.Tag],
//         ['id', TokenType.Identifier],
//         ['=', TokenType.Equal],
//         ['(', TokenType.LeftParen],
//         ['id', TokenType.Identifier],
//         ['?', TokenType.QuestionMark],
//         [':', TokenType.Colon],
//         ['any', TokenType.Any],
//         [',', TokenType.Comma],
//         ['id', TokenType.Identifier],
//         ['=', TokenType.Equal],
//         ['1', TokenType.Initializer],
//         [')', TokenType.RightParen],
//         ['=>', TokenType.Arrow],
//         ['any', TokenType.Any],
//         ['|', TokenType.Pipe],
//         ['any', TokenType.Any]
//       ]));
//     it('should scan @tag id = (id?: any, id = -1) => any | any', () =>
//       test('@tag id = (id?: any, id = -1) => any | any', [
//         ['@tag', TokenType.Tag],
//         ['id', TokenType.Identifier],
//         ['=', TokenType.Equal],
//         ['(', TokenType.LeftParen],
//         ['id', TokenType.Identifier],
//         ['?', TokenType.QuestionMark],
//         [':', TokenType.Colon],
//         ['any', TokenType.Any],
//         [',', TokenType.Comma],
//         ['id', TokenType.Identifier],
//         ['=', TokenType.Equal],
//         ['-1', TokenType.Initializer],
//         [')', TokenType.RightParen],
//         ['=>', TokenType.Arrow],
//         ['any', TokenType.Any],
//         ['|', TokenType.Pipe],
//         ['any', TokenType.Any]
//       ]));
//     it('should scan @tag id = (id?: any = init, id = init, id = init) => any', () =>
//       test('@tag id = (id?: any = init, id = init, id = init) => any', [
//         ['@tag', TokenType.Tag],
//         ['id', TokenType.Identifier],
//         ['=', TokenType.Equal],
//         ['(', TokenType.LeftParen],
//         ['id', TokenType.Identifier],
//         ['?', TokenType.QuestionMark],
//         [':', TokenType.Colon],
//         ['any', TokenType.Any],
//         ['=', TokenType.Equal],
//         ['init', TokenType.Initializer],
//         [',', TokenType.Comma],
//         ['id', TokenType.Identifier],
//         ['=', TokenType.Equal],
//         ['init', TokenType.Initializer],
//         [',', TokenType.Comma],
//         ['id', TokenType.Identifier],
//         ['=', TokenType.Equal],
//         ['init', TokenType.Initializer],
//         [')', TokenType.RightParen],
//         ['=>', TokenType.Arrow],
//         ['any', TokenType.Any]
//       ]));
//     it('should scan @tag id: (id?: any = init, id = init, id = init) => any', () =>
//       test('@tag id: (id?: any = init, id = init, id = init) => any', [
//         ['@tag', TokenType.Tag],
//         ['id', TokenType.Identifier],
//         [':', TokenType.Colon],
//         ['(', TokenType.LeftParen],
//         ['id', TokenType.Identifier],
//         ['?', TokenType.QuestionMark],
//         [':', TokenType.Colon],
//         ['any', TokenType.Any],
//         ['=', TokenType.Equal],
//         ['init', TokenType.Initializer],
//         [',', TokenType.Comma],
//         ['id', TokenType.Identifier],
//         ['=', TokenType.Equal],
//         ['init', TokenType.Initializer],
//         [',', TokenType.Comma],
//         ['id', TokenType.Identifier],
//         ['=', TokenType.Equal],
//         ['init', TokenType.Initializer],
//         [')', TokenType.RightParen],
//         ['=>', TokenType.Arrow],
//         ['any', TokenType.Any]
//       ]));

//     /* Scan tags with types (special words) */
//     it('should scan @tag id: any', () => test('@tag id: any', [
//       ['@tag', TokenType.Tag],
//       ['id', TokenType.Identifier],
//       [':', TokenType.Colon],
//       ['any', TokenType.Any]
//     ]));

//     it('should scan @tag id?: any', () => test('@tag id?: any', [
//       ['@tag', TokenType.Tag],
//       ['id', TokenType.Identifier],
//       ['?', TokenType.QuestionMark],
//       [':', TokenType.Colon],
//       ['any', TokenType.Any]
//     ]));
//     it('should scan @tag id: any | any', () => test('@tag id: any | any', [
//       ['@tag', TokenType.Tag],
//       ['id', TokenType.Identifier],
//       [':', TokenType.Colon],
//       ['any', TokenType.Any],
//       ['|', TokenType.Pipe],
//       ['any', TokenType.Any]
//     ]));
//     it('should scan @tag id: any & any', () => test('@tag id: any & any', [
//       ['@tag', TokenType.Tag],
//       ['id', TokenType.Identifier],
//       [':', TokenType.Colon],
//       ['any', TokenType.Any],
//       ['&', TokenType.Ampersand],
//       ['any', TokenType.Any]
//     ]));
//     it('should scan @tag id: (any | any | any[])', () => test('@tag id: (any | any | any[])', [
//       ['@tag', TokenType.Tag],
//       ['id', TokenType.Identifier],
//       [':', TokenType.Colon],
//       ['(', TokenType.LeftParen],
//       ['any', TokenType.Any],
//       ['|', TokenType.Pipe],
//       ['any', TokenType.Any],
//       ['|', TokenType.Pipe],
//       ['any[]', TokenType.Any],
//       [')', TokenType.RightParen],
//     ]));
//   });

//   describe('Real-world scan', () => {
//     // From http://usejsdoc.org/howto-es2015-classes.html#documenting-a-simple-class
//     const s0 = read(0);

//     it(`should scan: \n${indent(s0, 2)}`, () => test(s0, [
//       ['Create a point.', TokenType.Description],
//       ['@param', TokenType.Tag],
//       ['x', TokenType.Identifier],
//       [':', TokenType.Colon],
//       ['number', TokenType.Any],
//       ['-', TokenType.Minus],
//       ['The x value.', TokenType.Description],
//       ['@param', TokenType.Tag],
//       ['y', TokenType.Identifier],
//       [':', TokenType.Colon],
//       ['number', TokenType.Any],
//       ['-', TokenType.Minus],
//       ['The y value.', TokenType.Description]
//     ]));

//     const s1 = read(1);

//     it(`should scan \n${indent(s1, 2)}`, () => test(s1, [
//       ['@param', TokenType.Tag],
//       ['x', TokenType.Identifier],
//       [':', TokenType.Colon],
//       ['number', TokenType.Any],
//       ['-', TokenType.Minus],
//       ['The x value.', TokenType.Description],
//       ['@param', TokenType.Tag],
//       ['y', TokenType.Identifier],
//       [':', TokenType.Colon],
//       ['number', TokenType.Any],
//       ['-', TokenType.Minus],
//       ['The y value.', TokenType.Description],
//       ['Create a point.', TokenType.Description]
//     ]));

//     const s2 = read(2);

//     it(`should scan: \n${indent(s2, 2)}`, () => test(s2, [
//       ['Convert a string containing two comma-separated numbers into a point.', TokenType.Description],
//       ['@param', TokenType.Tag],
//       ['str', TokenType.Identifier],
//       [':', TokenType.Colon],
//       ['string', TokenType.Any],
//       ['-', TokenType.Minus],
//       ['The string containing two comma-separated numbers.', TokenType.Description],
//       ['@return', TokenType.Tag],
//       ['Point', TokenType.Any],
//       ['-', TokenType.Minus],
//       ['A Point object.', TokenType.Description]
//     ]));

//     const s3 = read(3);

//     it(`should scan \n${indent(s3, 2)}`, () => test(s3, [
//       ['Create a dot.', TokenType.Description],
//       ['@param', TokenType.Tag],
//       ['x', TokenType.Identifier],
//       [':', TokenType.Colon],
//       ['number', TokenType.Any],
//       ['-', TokenType.Minus],
//       ['The x value.', TokenType.Description],
//       ['@param', TokenType.Tag],
//       ['y', TokenType.Identifier],
//       [':', TokenType.Colon],
//       ['number', TokenType.Any],
//       ['-', TokenType.Minus],
//       ['The y value.', TokenType.Description],
//       ['@param', TokenType.Tag],
//       ['width', TokenType.Identifier],
//       [':', TokenType.Colon],
//       ['number', TokenType.Any],
//       ['-', TokenType.Minus],
//       ['The width of the dot, in pixels.', TokenType.Description],
//       [`+--\n${read(3, 'md')}\n+--`, TokenType.Markdown]
//     ]));

//     const s4 = read(4);
    
//     it(`should scan \n${indent(s4, 2)}`, () => test(s4, [
//       ['Create a dot.', TokenType.Description],
//       ['@param', TokenType.Tag],
//       ['x', TokenType.Identifier],
//       [':', TokenType.Colon],
//       ['number', TokenType.Any],
//       ['-', TokenType.Minus],
//       ['The x value.', TokenType.Description],
//       ['@param', TokenType.Tag],
//       ['y', TokenType.Identifier],
//       [':', TokenType.Colon],
//       ['number', TokenType.Any],
//       ['-', TokenType.Minus],
//       ['The y value.', TokenType.Description],
//       ['@param', TokenType.Tag],
//       ['width', TokenType.Identifier],
//       [':', TokenType.Colon],
//       ['number', TokenType.Any],
//       ['-', TokenType.Minus],
//       ['The width of the dot, in pixels.', TokenType.Description],
//        [`+--\n${read(4, 'md')}\n+--`, TokenType.Markdown]
//     ]));

//     const s5 = read(5);

//     it(`should scan \n${indent(s5, 2)}`, () => test(s5, [
//       ['Create a dot.', TokenType.Description],
//       ['@param', TokenType.Tag],
//       ['x', TokenType.Identifier],
//       [':', TokenType.Colon],
//       ['number', TokenType.Any],
//       ['-', TokenType.Minus],
//       ['The x value.', TokenType.Description],
//       ['@param', TokenType.Tag],
//       ['y', TokenType.Identifier],
//       [':', TokenType.Colon],
//       ['number', TokenType.Any],
//       ['-', TokenType.Minus],
//       ['The y value.', TokenType.Description],
//       ['@param', TokenType.Tag],
//       ['width', TokenType.Identifier],
//       [':', TokenType.Colon],
//       ['number', TokenType.Any],
//       ['-', TokenType.Minus],
//       ['The width of the dot, in pixels.', TokenType.Description],
//       [`+--\n${read(5, 'md')}\n +--`, TokenType.Markdown]
//     ]));

//     const s6 = read(6, 'js');

//     it(`should scan \n${indent(s6, 2)}`, () => test(s6, [
//       ['Create a dot.', TokenType.Description],
//       ['@param', TokenType.Tag],
//       ['x', TokenType.Identifier],
//       [':', TokenType.Colon],
//       ['number', TokenType.Any],
//       ['-', TokenType.Minus],
//       ['The x value.', TokenType.Description],
//       ['@param', TokenType.Tag],
//       ['y', TokenType.Identifier],
//       [':', TokenType.Colon],
//       ['number', TokenType.Any],
//       ['-', TokenType.Minus],
//       ['The y value.', TokenType.Description],
//       ['@param', TokenType.Tag],
//       ['width', TokenType.Identifier],
//       [':', TokenType.Colon],
//       ['number', TokenType.Any],
//       ['-', TokenType.Minus],
//       ['The width of the dot, in pixels.', TokenType.Description],
//        [`+--\n${read(6, 'md')}\n   +--`, TokenType.Markdown]
//     ]));
//   });

// });
