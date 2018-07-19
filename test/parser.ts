import xdoc, { XDoc } from "../src/tom/index";
// import * as readline from 'readline';
import { assert } from 'chai';

const equal = assert.deepEqual;
const parse = (source: string) => XDoc.toJSON(xdoc(source));

describe('Tom parser', () => {
  /* Parse tags */
  it('should parse @tag', () => equal(parse('@tag'), [
    {
      name: 'tag'
    }
  ]));
  // with description
  it('should parse @tag - description', () => equal(parse('@tag - description'), [
    {
      name: 'tag',
      description: {
        inlines: [],
        text: 'description'
      }
    }
  ]));

  /* Parse tags with identifiers */
  it('should parse @tag id', () => equal(parse('@tag id'), [
    {
      
    }
  ]));
  // with description
  it('should parse @tag id - description', () => equal(parse('@tag id - description'), [
    {
      ...name(),
      ...id(),
      ...description('description')
    }
  ]));
});