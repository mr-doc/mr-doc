import CommentScanner from '../src/scanner';
import CommentParser from '../src/parser';
import * as Node from '../src/node';
const { NodeType } = Node;
const scanner = new CommentScanner();
scanner.source(`
@tag name: (number | string | any[])
`);
const parser = new CommentParser(scanner.scan());

const ast = parser.parse();
console.dir(ast, { depth: null, colors: true });

ast.comments.forEach(c => {
  console.log(c.flag);
  switch (c.flag) {
    case NodeType.TagComment:
        let tag: Node.TagComment = c;
        // tag.parameters.forEach(p => {
          
        // });
      break;
  
    default:
      break;
  }
});

// describe('CommentParser', () => {
//   it('should parse @tag id: (id: string, id2: string, id3: string) => any', () => {
//     // const ast = parser.parse();
//   });
// });


/**
 * @param str - this is a string
 * @param 
 */
function display(str) {

}