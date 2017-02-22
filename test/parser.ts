import CommentScanner from '../src/scanner';
import CommentParser from '../src/parser';
import * as Node from '../src/ast';
import { traverse } from '../src/ast'
import * as _ from 'lodash';
const { NodeType } = Node;


const scanner = new CommentScanner();

scanner.source(`
  @param name: () => string
`);


const parser = new CommentParser(scanner.scan());
parser.options.flagName = true;
const ast = parser.parse();
// console.dir(ast, { depth: null, colors: true });
// console.log(ast.comments);

const leaves = traverse(ast);
console.dir(leaves);