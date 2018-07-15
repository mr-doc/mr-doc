import xdoc, { XDoc } from "../src/tom/index";
// import * as readline from 'readline';
import { tag, description, value, number, type, primary, identifier } from "./helpers/test";
import { assert } from 'chai';

const equal = assert.deepEqual;
const parse = (source: string) => XDoc.toJSON(xdoc(source).parse());
describe('Tom parser', () => {
  /* Parse tags */
  it('should parse @tag', () => equal(parse('@tag'), [
    tag('tag')
  ]));
  // with description
  it('should parse @tag - description', () => equal(parse('@tag - description'), [
    tag('tag', undefined, undefined, undefined, description('description'))
  ]));

  /* Parse tags with identifiers */
  it('should parse @tag id', () => equal(parse('@tag id'), [
      tag('tag', 'id')
    ]));
    // with description
  it('should parse @tag id - description', () => equal(parse('@tag id - description'), [
    tag('tag', 'id', undefined, undefined, description('description'))
  ]));
  // console.log(parse('@tag id: type'));
  
  /* TODO: Parse tags with types */
//   it('should parse @tag id: type', () => equal(parse('@tag id: type'), [
//     tag('tag', 'id', type(primary(identifier('type'))), undefined, undefined)
//   ]));
//   // with description
// it('should parse @tag id: type - description', () => equal(parse('@tag id: type - description'), [
//   tag('tag', 'id', primary('type'), undefined, description('description'))
// ]));

  /* Parse tags with default values */
  it('should parse @tag id = 1', () => equal(parse('@tag id = 1'), [
    tag('tag', 'id', undefined, value("literal", number("1")), undefined)
  ]));
  // with description
  it('should parse @tag id = 1 - description', () => equal(parse('@tag id = 1 - description'), [
    tag('tag', 'id', undefined, value("literal", number("1")), description('description'))
  ]));
});