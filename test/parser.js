"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/tom/index");
// import * as readline from 'readline';
const chai_1 = require("chai");
const equal = chai_1.assert.deepEqual;
const parse = (source) => index_1.XDoc.toJSON(index_1.default(source));
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
        {}
    ]));
    // with description
    it('should parse @tag id - description', () => equal(parse('@tag id - description'), [
        Object.assign({}, name(), id(), description('description'))
    ]));
});
//# sourceMappingURL=parser.js.map