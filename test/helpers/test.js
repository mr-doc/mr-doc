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
    return _.assign({ comments }, node(NodeType.Comment, token_1.TokenKind.None));
}
function description(description) {
    return _.assign({ description }, node(NodeType.DescriptionComment, token_1.TokenKind.Description));
}
function markdown(markdown) {
    return _.assign({ markdown }, node(NodeType.MarkdownComment, token_1.TokenKind.Markdown));
}
function tag(tag, parameter, description, type) {
    return _.assign({ tag }, parameter ? { parameter } : {}, description ? { description } : {}, type ? { type } : {}, node(NodeType.TagComment, token_1.TokenKind.Tag));
}
function param(identifier, type, initializer, isOptional = false) {
    return _.assign({ identifier, isOptional }, type ? { type } : {}, initializer ? { initializer } : {}, node(NodeType.FormalParameter, token_1.TokenKind.None));
}
function arrowfunc(parameters, type) {
    return _.assign({ type }, parameters ? { parameters } : {}, node(NodeType.ArrowFunctionType, token_1.TokenKind.None));
}
function union(type) {
    return _.assign({ type }, node(NodeType.UnionType, token_1.TokenKind.Pipe));
}
function intersect(type) {
    return _.assign({ type }, node(NodeType.IntersectionType, token_1.TokenKind.Ampersand));
}
function anytype(type) {
    return _.assign({ type }, node(NodeType.Type, token_1.TokenKind.Any));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsNEJBQTRCO0FBRTVCLCtDQUF3QztBQUN4Qyw2Q0FBc0M7QUFFdEMsMkNBQWlFO0FBQ2pFLHFDQUFxQztBQUVyQyxxQ0FBOEI7QUFFOUIsTUFBTSxFQUFFLFFBQVEsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUcxQixrQkFBZTtJQUNiLE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxjQUFjLE1BQWMsRUFBRSxLQUF3QztZQUMxRSxNQUFNLFdBQVcsR0FBRyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3BELE1BQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDbEMsSUFBSSxLQUFLLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDbEUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFbEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsT0FBTyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUM3QixhQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFELGFBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEQsS0FBSyxFQUFFLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztLQUNGO0lBQ0Qs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