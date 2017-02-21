import CommentScanner from '../src/scanner';
import CommentParser from '../src/parser';
import * as Node from '../src/node';
const { NodeType } = Node;



const scanner = new CommentScanner();

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


const parser = new CommentParser(scanner.scan());

const ast = parser.parse();
console.dir(ast, { depth: null, colors: true });