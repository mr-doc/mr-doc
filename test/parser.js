"use strict";
const scanner_1 = require("../src/scanner");
const parser_1 = require("../src/parser");
const Node = require("../src/node");
const { NodeType } = Node;
const scanner = new scanner_1.default();
scanner.source(`
@tag name: (number | string | any[])
`);
const parser = new parser_1.default(scanner.scan());
const ast = parser.parse();
console.dir(ast, { depth: null, colors: true });
ast.comments.forEach(c => {
    console.log(c.flag);
    switch (c.flag) {
        case 3 /* TagComment */:
            let tag = c;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0Q0FBNEM7QUFDNUMsMENBQTBDO0FBQzFDLG9DQUFvQztBQUNwQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQzFCLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQWMsRUFBRSxDQUFDO0FBQ3JDLE9BQU8sQ0FBQyxNQUFNLENBQUM7O0NBRWQsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRWpELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFFaEQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNmLEtBQUssa0JBQW1CO1lBQ3BCLElBQUksR0FBRyxHQUFvQixDQUFDLENBQUM7WUFDN0IsZ0NBQWdDO1lBRWhDLE1BQU07WUFDUixLQUFLLENBQUM7UUFFUjtZQUNFLEtBQUssQ0FBQztJQUNWLENBQUM7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILG9DQUFvQztBQUNwQyxzRkFBc0Y7QUFDdEYscUNBQXFDO0FBQ3JDLFFBQVE7QUFDUixNQUFNO0FBR047OztHQUdHO0FBQ0gsaUJBQWlCLEdBQUc7QUFFcEIsQ0FBQyJ9