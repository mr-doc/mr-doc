"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("./parser");
const ast_1 = require("./ast");
let parser = new parser_1.CommentParser(`
  Hello world
  @param id: (string & number) | MyType = 2 - description
  +--
   # Hello
   \`\`\`
    function () {}
   \`\`\`
  +--
`);
let printer = new ast_1.Printer();
let statements = parser.parse();
statements.forEach(statement => console.log(printer.print(statement)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBeUM7QUFDekMsK0JBQStCO0FBRy9CLElBQUksTUFBTSxHQUFHLElBQUksc0JBQWEsQ0FBQzs7Ozs7Ozs7O0NBUzlCLENBQUMsQ0FBQztBQUNILElBQUksT0FBTyxHQUFHLElBQUksYUFBTyxFQUFFLENBQUM7QUFFNUIsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRWhDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDIn0=