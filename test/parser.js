"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/tom/index");
// import * as readline from 'readline';
const test_1 = require("./helpers/test");
const chai_1 = require("chai");
const equal = chai_1.assert.deepEqual;
const parse = (source) => index_1.XDoc.toJSON(index_1.default(source).parse());
describe('Tom parser', () => {
    /* Parse tags */
    it('should parse @tag', () => equal(parse('@tag'), [
        test_1.tag('tag')
    ]));
    // with description
    it('should parse @tag - description', () => equal(parse('@tag - description'), [
        test_1.tag('tag', undefined, undefined, undefined, test_1.description('description'))
    ]));
    /* Parse tags with identifiers */
    it('should parse @tag id', () => equal(parse('@tag id'), [
        test_1.tag('tag', 'id')
    ]));
    // with description
    it('should parse @tag id - description', () => equal(parse('@tag id - description'), [
        test_1.tag('tag', 'id', undefined, undefined, test_1.description('description'))
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
        test_1.tag('tag', 'id', undefined, test_1.value("literal", test_1.number("1")), undefined)
    ]));
    // with description
    it('should parse @tag id = 1 - description', () => equal(parse('@tag id = 1 - description'), [
        test_1.tag('tag', 'id', undefined, test_1.value("literal", test_1.number("1")), test_1.description('description'))
    ]));
});
//# sourceMappingURL=parser.js.map