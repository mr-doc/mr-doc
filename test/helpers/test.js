"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _ = require("lodash");
const scanner_1 = require("../../src/scanner");
const parser_1 = require("../../src/parser");
// import Token, { TokenType, getTokenName, getTokenKind } from '../../src/token';
const AST = require("../../src/ast");
const index_1 = require("../../src/token/index");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsNEJBQTRCO0FBRTVCLCtDQUF3QztBQUN4Qyw2Q0FBc0M7QUFFdEMsa0ZBQWtGO0FBQ2xGLHFDQUFxQztBQUdyQyxpREFBZ0U7QUFHaEUsa0JBQWU7SUFDYixPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsY0FBYyxNQUFjLEVBQUUsS0FBd0M7WUFDMUUsTUFBTSxXQUFXLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNwRCxNQUFNLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ2xDLElBQUksS0FBSyxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDbEUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFbEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsT0FBTyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUM3QixhQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFELGFBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEQsS0FBSyxFQUFFLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztLQUNGO0lBQ0QsTUFBTSxFQUFFO1FBQ04sSUFBSSxF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