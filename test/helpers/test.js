"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _ = require("lodash");
const scanner_1 = require("../../src/tom/scanner");
const parser_1 = require("../../src/tom/parser");
const AST = require("../../src/tom/ast");
const index_1 = require("../../src/tom/token/index");
exports.default = {
    Scanner: {
        test: function test(source, match) {
            const tokenstream = scanner_1.default(source).toTokenStream();
            const stream = tokenstream.stream;
            let array = typeof match === 'number' ? [[source, match]] : match;
            array.push(['\0', index_1.TokenType.EOF]);
            let count = 0;
            while (count < stream.length) {
                chai_1.assert.strictEqual(stream[count].lexeme, array[count][0]);
                chai_1.assert.strictEqual(stream[count].kind, array[count][1]);
                count++;
            }
        }
    },
    Parser: {
        test: function test(source, match) {
            const array = [];
            const printer = new AST.Generator({ omit_location: true });
            let result = parser_1.default(source)
                .parse()
                .map(statement => JSON.parse(printer.print(statement)));
            // console.log(result);
            chai_1.assert.deepEqual(result, match);
        },
        comment, description, markdown, tag,
        param, init, any, group, union, intersect
    },
};
function tokenkind(kind) {
    return { name: index_1.getTokenName(kind), kind: kind };
}
function node(lexeme, kind) {
    return _.assign({}, { lexeme }, tokenkind(kind));
}
function comment(...statements) {
    return statements;
}
function description(lexeme, wrap = true) {
    const description = node(lexeme, index_1.TokenType.Description);
    if (wrap)
        return { description: description };
    return description;
}
function markdown(lexeme) {
    return { markdown: node(lexeme, index_1.TokenType.Markdown) };
}
function tag(lexeme, parameter, description) {
    return {
        tag: _.assign({}, node(lexeme, index_1.TokenType.Tag), {
            parameter: parameter || null,
            description: description || null
        }),
    };
}
function param(lexeme, value, type, optional = false) {
    return {
        identifier: node(lexeme, index_1.TokenType.Identifier),
        optional: optional,
        value: value || null,
        type: type || null
    };
}
function init(lexeme) {
    return node(lexeme, index_1.TokenType.Initializer);
}
function any(lexeme) {
    return node(lexeme, index_1.TokenType.Any);
}
function group(node) {
    return { group: node || null };
}
function union(node) {
    return { union: { types: node || null } };
}
function intersect(node) {
    return { intersection: { types: node || null } };
}
//# sourceMappingURL=test.js.map