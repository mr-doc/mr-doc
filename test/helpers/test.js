"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _ = require("lodash");
const scanner_1 = require("../../src/comment-parser/scanner");
const parser_1 = require("../../src/comment-parser/parser");
const AST = require("../../src/comment-parser/ast");
const index_1 = require("../../src/comment-parser/token/index");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsNEJBQTRCO0FBRTVCLDhEQUF1RDtBQUN2RCw0REFBcUQ7QUFDckQsb0RBQW9EO0FBR3BELGdFQUErRTtBQUcvRSxrQkFBZTtJQUNiLE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxjQUFjLE1BQWMsRUFBRSxLQUF3QztZQUMxRSxNQUFNLFdBQVcsR0FBRyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3BELE1BQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDbEMsSUFBSSxLQUFLLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNsRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUVsQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZCxPQUFPLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzdCLGFBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUQsYUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxLQUFLLEVBQUUsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0tBQ0Y7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsY0FBYyxNQUFj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