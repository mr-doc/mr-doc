"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _ = require("lodash");
const scanner_1 = require("../../src/scanner");
const parser_1 = require("../../src/parser");
const token_1 = require("../../src/token");
const AST = require("../../src/ast");
const remove_1 = require("./remove");
const { NodeType, } = AST;
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
            const result = parser_1.default(source).parse();
            remove_1.default(result, 'range');
            // console.dir(result, { depth: null, colors: true });
            chai_1.assert.deepEqual(result, match);
        },
        node, comment, description, markdown, tag, param, arrowfunc, union, intersect, anytype
    }
};
function node(flag, kind) {
    return { flag, kind, flagName: AST.getNodeTypeName(flag), kindName: token_1.getTokenName(kind) };
}
function comment(comments) {
    return _.assign({ comments }, node(1 /* Comment */, token_1.TokenKind.None));
}
function description(description) {
    return _.assign({ description }, node(2 /* DescriptionComment */, token_1.TokenKind.Description));
}
function markdown(markdown) {
    return _.assign({ markdown }, node(4 /* MarkdownComment */, token_1.TokenKind.Markdown));
}
function tag(tag, parameter, description, type) {
    return _.assign({ tag }, parameter ? { parameter } : {}, description ? { description } : {}, type ? { type } : {}, node(3 /* TagComment */, token_1.TokenKind.Tag));
}
function param(identifier, type, initializer, isOptional = false) {
    return _.assign({ identifier, isOptional }, type ? { type } : {}, initializer ? { initializer } : {}, node(5 /* FormalParameter */, token_1.TokenKind.None));
}
function arrowfunc(parameters, type) {
    return _.assign({ type }, parameters ? { parameters } : {}, node(12 /* ArrowFunctionType */, token_1.TokenKind.None));
}
function union(type) {
    return _.assign({ type }, node(10 /* UnionType */, token_1.TokenKind.Pipe));
}
function intersect(type) {
    return _.assign({ type }, node(11 /* IntersectionType */, token_1.TokenKind.Ampersand));
}
function anytype(type) {
    return _.assign({ type }, node(9 /* Type */, token_1.TokenKind.Any));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsNEJBQTRCO0FBRTVCLCtDQUF3QztBQUN4Qyw2Q0FBc0M7QUFFdEMsMkNBQWlFO0FBQ2pFLHFDQUFxQztBQUVyQyxxQ0FBOEI7QUFFOUIsTUFBTSxFQUFFLFFBQVEsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUcxQixrQkFBZTtJQUNiLE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxjQUFjLE1BQWMsRUFBRSxLQUF3QztZQUMxRSxNQUFNLFdBQVcsR0FBRyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3BELE1BQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDbEMsSUFBSSxLQUFLLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDbEUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFbEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsT0FBTyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUM3QixhQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFELGFBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEQsS0FBSyxFQUFFLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztLQUNGO0lBQ0Qs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