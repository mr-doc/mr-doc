import { CommentParser } from './parser';
import { Generator } from './ast'
import { CommentScanner } from './scanner/index';

// let scanner = new CommentScanner(`
//   @tag id
// `);

// console.log(scanner.toTokenStream());


let parser = new CommentParser('@tag id');
let generator = new Generator();

let statements = parser.parse();

// statements.forEach(statement => console.log(generator.print(statement)));
