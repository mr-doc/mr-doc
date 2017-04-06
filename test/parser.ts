// import Scanner from '../src/scanner';
import Parser from '../src/parser';
import * as Node from '../src/ast';
import { traverse } from '../src/ast'
import * as _ from 'lodash';
import * as FS from 'fs';
import * as Path from 'path';
const { NodeType } = Node;

function readComment(version: number, ext?: string) {
  return FS.readFileSync(Path.resolve(__dirname, './fixtures') + `/comments/${version}${ext ? '.' + ext : '.txt'}`, 'utf8');
}

Parser(readComment(6, 'js')).parse();