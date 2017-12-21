"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _ = require("lodash");
const scanner_1 = require("../../src/scanner");
const parser_1 = require("../../src/parser");
const token_1 = require("../../src/token");
const AST = require("../../src/ast");
exports.default = {
    Scanner: {
        test: function test(source, match) {
            const tokenstream = scanner_1.default(source).toTokenStream();
            const stream = tokenstream.stream;
            let array = typeof match === 'number' ? [[source, match]] : match;
            array.push(['\0', token_1.TokenKind.EOF]);
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
            const printer = new AST.Printer({ omit_location: true });
            let result = parser_1.default(source)
                .parse()
                .map(statement => JSON.parse(printer.print(statement)));
            // console.log(result);
            chai_1.assert.deepEqual(result, match);
        },
        comment, description, markdown, tag, param, init,
    },
};
function tokenkind(kind) {
    return { name: token_1.getTokenName(kind), kind: kind };
}
function node(lexeme, kind) {
    return _.assign({}, { lexeme }, tokenkind(kind));
}
function comment(...statements) {
    return statements;
}
function description(lexeme, wrap = true) {
    const description = node(lexeme, token_1.TokenKind.Description);
    if (wrap)
        return { description: description };
    return description;
}
function markdown(lexeme) {
    return { markdown: node(lexeme, token_1.TokenKind.Markdown) };
}
function tag(lexeme, parameter, description) {
    return {
        tag: _.assign({}, node(lexeme, token_1.TokenKind.Tag), {
            parameter: parameter || null,
            description: description || null
        }),
    };
}
function param(lexeme, value, optional = false) {
    return {
        identifier: node(lexeme, token_1.TokenKind.Identifier),
        optional: optional,
        value: value || null
    };
}
function init(lexeme) {
    return node(lexeme, token_1.TokenKind.Initializer);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsNEJBQTRCO0FBRTVCLCtDQUF3QztBQUN4Qyw2Q0FBc0M7QUFFdEMsMkNBQStFO0FBQy9FLHFDQUFxQztBQUtyQyxrQkFBZTtJQUNiLE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxjQUFjLE1BQWMsRUFBRSxLQUF3QztZQUMxRSxNQUFNLFdBQVcsR0FBRyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3BELE1BQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDbEMsSUFBSSxLQUFLLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNsRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLGlCQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUVsQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZCxPQUFPLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzdCLGFBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUQsYUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxLQUFLLEVBQUUsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0tBQ0Y7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsY0FBYyxNQUFj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