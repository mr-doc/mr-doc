import { CommentParser } from './parser';
import { Printer } from './ast'


let parser = new CommentParser(`
  Hello world
  @param id: (string & number) | MyType = 2 - description
  +--
   # Hello
   \`\`\`
    function () {}
   \`\`\`
  +--
`);
let printer = new Printer();

let statements = parser.parse();

statements.forEach(statement => console.log(printer.print(statement)));
