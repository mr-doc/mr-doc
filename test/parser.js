"use strict";
const scanner_1 = require('../src/scanner');
const parser_1 = require('../src/parser');
const Node = require('../src/node');
const { NodeType } = Node;
const scanner = new scanner_1.default();
scanner.source(`
  @param
  @param
  @param id: (a: string, b: number) => string
  @param
  @param
  @param id: (a: string, b: number) => string
  @param
  @param
  @param id: (a: string, b: number) => string
  @param
  @param
  @param id: (a: string, b: number) => string
  @param
  @param
  @param
  @param
  @param
  @param
  @param
  @param
  @param
  @param
  @param
  @param
  @param
  @param
  @param
  @param
  @param
  @param
  @param
  @param
  @param
  @param
  @param
`);
const parser = new parser_1.default(scanner.scan());
const ast = parser.parse();
console.dir(ast, { depth: null, colors: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQkFBMkIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM1Qyx5QkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsTUFBWSxJQUFJLFdBQU0sYUFBYSxDQUFDLENBQUE7QUFDcEMsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztBQUkxQixNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFjLEVBQUUsQ0FBQztBQUVyQyxPQUFPLENBQUMsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FvQ2QsQ0FBQyxDQUFDO0FBR0gsTUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRWpELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMifQ==