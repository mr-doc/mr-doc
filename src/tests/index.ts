
import * as FS from 'fs';
// import * as Path from 'path';
import { expect } from 'chai';
import CommentScanner from '../scanner';

const comment = FS.readFileSync(__dirname + '/comment.txt');
const scanner = new CommentScanner(comment.toString());
console.dir(scanner.scan().stream.map(t => t.lexeme), { depth: null, colors: true});
// describe('CharacterStream', () => {
  
// });
