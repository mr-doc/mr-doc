"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("./parser");
const ast_1 = require("./ast");
// let scanner = new CommentScanner(`
//   @tag id
// `);
// console.log(scanner.toTokenStream());
let parser = new parser_1.CommentParser('@tag id');
let generator = new ast_1.Generator();
let statements = parser.parse();
// statements.forEach(statement => console.log(generator.print(statement)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBeUM7QUFDekMsK0JBQWlDO0FBR2pDLHFDQUFxQztBQUNyQyxZQUFZO0FBQ1osTUFBTTtBQUVOLHdDQUF3QztBQUd4QyxJQUFJLE1BQU0sR0FBRyxJQUFJLHNCQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDMUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxlQUFTLEVBQUUsQ0FBQztBQUVoQyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFaEMsNEVBQTRFIn0=