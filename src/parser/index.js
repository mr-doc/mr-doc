"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../scanner/");
const token_1 = require("../token");
const _ = require("lodash");
const AST = require("../ast");
const { NodeType, createNode, endNode } = AST;
let scanner = null;
let currentToken = null;
function current() {
    // Skip the tokens we don't care
    while (currentToken.kind === token_1.TokenKind.None) {
        currentToken = scanner.scan();
    }
    return currentToken;
}
/* flow control */
function accept() {
    currentToken = scanner.scan();
}
/* comparisons */
function match(kind, lexeme) {
    const isEqualKind = current().kind === kind;
    return lexeme ? (isEqualKind && current().lexeme === lexeme) : isEqualKind;
}
function expect(kind, lexeme) {
    let token = current();
    if (match(kind, lexeme))
        accept();
    else
        token = raise(kind, lexeme);
    return token;
}
/* state handling */
function reset() { currentToken = null; }
/* error handling */
function raise(kinds, expected) {
    const { lexeme, location, kind } = current(), loc = `${location.line}:${location.column}`;
    let kindNames = "";
    if (Array.isArray(kinds)) {
        kinds.forEach((k, i) => i === 0 ? kindNames += token_1.getTokenName(k) : kindNames += ` or ${token_1.getTokenName(k)}`);
    }
    else {
        kindNames = expected ? `(${token_1.getTokenName(kinds)}, ${lexeme})` : token_1.getTokenName(kinds);
    }
    console.log(`mrdoc::parse [error]: expected ${kindNames} but found (${token_1.getTokenName(kind)}, '${lexeme}'). ${loc}`);
    return new token_1.default(expected ? expected : "", token_1.TokenKind.None, current().location);
}
function parse() {
    currentToken = scanner.scan();
    if (currentToken) {
        parseComment();
        reset();
    }
    else
        return;
}
function parseComment() {
    const { Tag, Description, Markdown, None } = token_1.TokenKind;
    const rootNode = createNode(1 /* Comment */, None, current().location);
    (rootNode.comments = []).push(parseSingleComment());
    while (current() && _.includes([Tag, Description, Markdown], current().kind)) {
        rootNode.comments.push(parseSingleComment());
    }
    return endNode(rootNode, current().location);
}
function parseSingleComment() {
    const { Minus, Identifier, Tag, Description, Markdown, None } = token_1.TokenKind;
    const rootNode = createNode(1 /* Comment */, None, current().location);
    console.log(`In parseSingleComment: ${current().name}`);
    const getDescription = () => {
        console.log(`In getDescription: ${current().name}`);
        const descriptionNode = createNode(2 /* DescriptionComment */, Description, current().location);
        descriptionNode.description = expect(Description).lexeme;
        return endNode(descriptionNode, current().location);
    };
    switch (current().kind) {
        case Description:
            return getDescription();
        case Tag:
            const tagNode = createNode(3 /* TagComment */, Tag, current().location);
            tagNode.tag = expect(Tag).lexeme;
            if (match(Identifier))
                tagNode.parameter = parseFormalParameter();
            if (match(Minus)) {
                expect(Minus);
                tagNode.description = getDescription();
            }
            return endNode(tagNode, current().location);
        case Markdown:
            const mdNode = createNode(4 /* MarkdownComment */, Markdown, current().location);
            mdNode.markdown = expect(Markdown).lexeme;
            return endNode(mdNode, current().location);
        default: return endNode(createNode(null, raise([Description, Tag, Markdown]).kind, null), null);
    }
}
function parseFormalParameter() {
    console.log(`In parseFormalParameter: ${current().name}`);
    const { Identifier, Equal, Initializer, QuestionMark, Colon, None } = token_1.TokenKind;
    const rootNode = createNode(5 /* FormalParameter */, None, current().location);
    const lexeme = expect(token_1.TokenKind.Identifier).lexeme;
    switch (current().kind) {
        case Colon:
        case Equal:
            rootNode.parameter = parseParameter();
            rootNode.identifier = lexeme;
            rootNode.isOptional = false;
            break;
        case QuestionMark:
            rootNode.parameter = parseOptionalParameter();
            rootNode.identifier = lexeme;
            rootNode.isOptional = true;
            break;
    }
    return endNode(rootNode, current().location);
}
function parseParameter() {
    console.log(`In parseParameter: ${current().name}`);
    const { Identifier, Colon, LeftParen, RightParen, Any, Equal, Initializer } = token_1.TokenKind;
    const rootNode = createNode(6 /* Parameter */, Identifier, current().location);
    // rootNode.identifier = expect(Identifier).lexeme;
    if (match(Colon))
        rootNode.type = parseTypeDeclaration();
    if (match(Equal)) {
        rootNode.initializer = expect(Equal).lexeme;
    }
    return endNode(rootNode, current().location);
}
function parseOptionalParameter() {
    console.log(`In parseOptionalParameter: ${current().name}`);
    const { Identifier, QuestionMark, LeftParen, RightParen, Colon } = token_1.TokenKind;
    const rootNode = createNode(6 /* Parameter */, Identifier, current().location);
    // rootNode.identifier = expect(Identifier).lexeme;
    expect(QuestionMark);
    if (match(Colon)) {
        rootNode.type = parseTypeDeclaration();
    }
    return endNode(rootNode, current().location);
}
function parseTypeDeclaration() {
    console.log(`In parseTypeDeclaration: ${current().name}`);
    expect(token_1.TokenKind.Colon);
    return parseType();
}
function parseType() {
    console.log(`In parseType: ${current().name}`);
    if (match(token_1.TokenKind.LeftParen))
        parseParenthesizedTypeOrFunctionType();
    else
        parseUnionTypeOrHigher();
    return null;
}
function parseParenthesizedTypeOrFunctionType() {
    console.log(`In parseParenthesizedTypeOrFunctionType: ${current().name}`);
    const rootNode = createNode(9 /* Type */, token_1.TokenKind.None, current().location);
    if (match(token_1.TokenKind.LeftParen)) {
        accept();
        if (match(token_1.TokenKind.Identifier) || match(token_1.TokenKind.RightParen)) {
            parseFunctionType();
            return null;
        }
        else {
            parseType();
            expect(token_1.TokenKind.RightParen);
        }
    }
    return endNode(rootNode, current().location);
}
function parseUnionTypeOrHigher() {
    console.log(`In parseUnionTypeOrHigher: ${current().name}`);
    parseUnionOrIntersectionType(10 /* UnionType */, parseIntersectionTypeOrHigher, token_1.TokenKind.Pipe);
}
function parseIntersectionTypeOrHigher() {
    console.log(`In parseIntersectionTypeOrHigher: ${current().name}`);
    parseUnionOrIntersectionType(11 /* IntersectionType */, parseTypeOperatorOrHigher, token_1.TokenKind.Ampersand);
}
function parseTypeOperatorOrHigher() {
    console.log(`In parseTypeOperatorOrHigher: ${current().name}`);
    if (match(token_1.TokenKind.Any))
        accept();
    else
        parseType();
}
function parseUnionOrIntersectionType(type, parseConstituentType, operator) {
    console.log(`In parseUnionOrIntersectionType: ${current().name}, operator ${token_1.getTokenName(operator)}`);
    if (match(operator))
        accept();
    parseConstituentType();
    if (match(operator)) {
        while (match(operator)) {
            accept();
            parseConstituentType();
        }
    }
}
function parseFunctionType() {
    console.log(`In parseFunctionType: ${current().name}`);
    if (!match(token_1.TokenKind.RightParen))
        parseFormalParameterList();
    expect(token_1.TokenKind.RightParen);
    expect(token_1.TokenKind.Arrow);
    parseType();
}
function parseFormalParameterList() {
    console.log(`In parseFormalParameterList: ${current().name}`);
    parseFormalParameter();
    parseFormalParameters();
}
function parseFormalParameters() {
    console.log(`In parseFormalParameters: ${current().name}`);
    while (match(token_1.TokenKind.Comma)) {
        accept();
        parseFormalParameter();
    }
}
function Parser(source) {
    scanner = _1.default(source);
    return {
        parse: function () {
            return parse();
        }
    };
}
exports.default = Parser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtDQUFnRDtBQUNoRCxvQ0FBMEQ7QUFFMUQsNEJBQTRCO0FBQzVCLDhCQUE4QjtBQUM5QixNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFFOUMsSUFBSSxPQUFPLEdBQWEsSUFBSSxDQUFDO0FBQzdCLElBQUksWUFBWSxHQUFVLElBQUksQ0FBQztBQUUvQjtJQUNFLGdDQUFnQztJQUNoQyxPQUFNLFlBQVksQ0FBQyxJQUFJLEtBQUssaUJBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQyxZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDRCxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3RCLENBQUM7QUFFRCxrQkFBa0I7QUFDbEI7SUFDRSxZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2hDLENBQUM7QUFFRCxpQkFBaUI7QUFDakIsZUFBZSxJQUFlLEVBQUUsTUFBZTtJQUM3QyxNQUFNLFdBQVcsR0FBRyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0lBQzVDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxXQUFXLElBQUksT0FBTyxFQUFFLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxHQUFHLFdBQVcsQ0FBQztBQUM3RSxDQUFDO0FBRUQsZ0JBQWdCLElBQWUsRUFBRSxNQUFlO0lBQzlDLElBQUksS0FBSyxHQUFHLE9BQU8sRUFBRSxDQUFDO0lBQ3RCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQyxJQUFJO1FBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFD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