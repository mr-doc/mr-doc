import { CommentParser } from './src/parser';
import { Printer } from './src/ast'


let parser = new CommentParser(`
  Hello world
  @param id = [] - description
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
