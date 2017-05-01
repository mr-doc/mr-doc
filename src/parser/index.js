"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../scanner/");
const token_1 = require("../token");
const _ = require("lodash");
const AST = require("../ast");
const { NodeType, createNode, endNode } = AST;
class CommentParser {
    constructor(source) {
        this.currentToken = null;
        this.scanner = null;
        this.scanner = new _1.CommentScanner(source);
    }
    current() {
        // Skip the tokens we don't care
        while (this.currentToken.kind === token_1.TokenKind.None) {
            this.currentToken = this.scanner.scan();
        }
        return this.currentToken;
    }
    get location() { return this.currentToken.location; }
    /* flow control */
    accept() {
        const previousToken = this.currentToken;
        this.currentToken = this.scanner.scan();
        return previousToken;
    }
    /* comparisons */
    match(kind, lexeme) {
        const isEqualKind = this.current().kind === kind;
        return lexeme ? (isEqualKind && this.current().lexeme === lexeme) : isEqualKind;
    }
    expect(kind, lexeme) {
        let token = this.current();
        if (this.match(kind, lexeme))
            this.accept();
        else {
            token = this.raise(kind, lexeme);
        }
        return token;
    }
    /* error handling */
    raise(kinds, expected) {
        const { lexeme, location, kind } = this.current(), loc = `Ln ${location.line}, Col ${location.column}`;
        let kindNames = "";
        if (Array.isArray(kinds)) {
            kinds.forEach((k, i) => i === 0 ? kindNames += token_1.getTokenName(k) : kindNames += ` or ${token_1.getTokenName(k)}`);
        }
        else {
            kindNames = expected ? `(${token_1.getTokenName(kinds)}, ${lexeme})` : token_1.getTokenName(kinds);
        }
        console.log(`mrdoc::parse [error]: expected ${kindNames} but found (${token_1.getTokenName(kind)}, '${lexeme}'). ${loc}`);
        return new token_1.default(expected ? expected : "", token_1.TokenKind.None, this.location);
    }
    parse() {
        this.currentToken = this.scanner.scan();
        if (this.currentToken)
            return this.parseComment();
        else
            return;
    }
    parseComment() {
        const { Tag, Description, Markdown, None } = token_1.TokenKind;
        const rootNode = createNode(1 /* Comment */, None, this.location);
        (rootNode.comments = []).push(this.parseSingleComment());
        while (this.current() && _.includes([Tag, Description, Markdown], this.current().kind)) {
            rootNode.comments.push(this.parseSingleComment());
        }
        return endNode(rootNode, this.location);
    }
    parseSingleComment() {
        const { Any, Minus, Identifier, Tag, Description, Markdown, None, Colon } = token_1.TokenKind;
        const rootNode = createNode(1 /* Comment */, None, this.location);
        // console.log(`In parseSingleComment: ${this.current().name}`);
        const getDescription = () => {
            // console.log(`In getDescription: ${this.current().name}`);
            const descriptionNode = createNode(2 /* DescriptionComment */, Description, this.location);
            descriptionNode.description = this.expect(Description).lexeme;
            return endNode(descriptionNode, this.location);
        };
        switch (this.current().kind) {
            case Description:
                return getDescription();
            case Tag:
                const tagNode = createNode(3 /* TagComment */, Tag, this.location);
                tagNode.tag = this.expect(Tag).lexeme;
                if (tagNode.tag === '@return' && this.match(Any)) {
                    tagNode.type = this.parseType();
                }
                else if (this.match(Identifier))
                    tagNode.parameter = this.parseFormalParameter();
                if (this.match(Minus)) {
                    this.expect(Minus);
                    tagNode.description = getDescription();
                }
                return endNode(tagNode, this.location);
            case Markdown:
                const mdNode = createNode(4 /* MarkdownComment */, Markdown, this.location);
                mdNode.markdown = this.expect(Markdown).lexeme;
                return endNode(mdNode, this.location);
            default: return endNode(createNode(null, this.raise([Description, Tag, Markdown]).kind, null), null);
        }
    }
    parseFormalParameter() {
        // console.log(`In parseFormalParameter: ${this.current().name}`);
        const { Identifier, Equal, Initializer, QuestionMark, Colon, None } = token_1.TokenKind;
        let rootNode = createNode(5 /* FormalParameter */, None, this.location);
        const lexeme = this.expect(token_1.TokenKind.Identifier).lexeme;
        // console.log(`In parseFormalParameter (after): ${this.current().name}`);
        switch (this.current().kind) {
            case Colon:
            case Equal:
                rootNode = this.parseParameter();
                rootNode.identifier = lexeme;
                rootNode.isOptional = false;
                break;
            case QuestionMark:
                rootNode = this.parseOptionalParameter();
                rootNode.identifier = lexeme;
                rootNode.isOptional = true;
                break;
            default:
                rootNode.identifier = lexeme;
                rootNode.isOptional = false;
        }
        return endNode(rootNode, this.location);
    }
    parseParameter() {
        // console.log(`In parseParameter: ${this.current().name}`);
        const { None, Colon, LeftParen, RightParen, Any, Equal, Initializer } = token_1.TokenKind;
        const rootNode = createNode(5 /* FormalParameter */, None, this.location);
        if (this.match(Colon)) {
            rootNode.type = this.parseTypeDeclaration();
        }
        if (this.match(Equal)) {
            this.accept();
            if (this.match(token_1.TokenKind.Initializer)) {
                rootNode.initializer = this.expect(token_1.TokenKind.Initializer).lexeme;
            }
            else if (this.match(token_1.TokenKind.LeftParen)) {
                this.accept();
                rootNode.initializer = this.parseFunctionType();
            }
        }
        return endNode(rootNode, this.location);
    }
    parseOptionalParameter() {
        // console.log(`In parseOptionalParameter: ${this.current().name}`);
        const { None, QuestionMark, LeftParen, RightParen, Colon } = token_1.TokenKind;
        const rootNode = createNode(5 /* FormalParameter */, None, this.location);
        this.expect(QuestionMark);
        if (this.match(Colon)) {
            rootNode.type = this.parseTypeDeclaration();
            rootNode.type = _.isString(rootNode.type.type) ? rootNode.type : rootNode.type.type;
        }
        return endNode(rootNode, this.location);
    }
    parseTypeDeclaration() {
        // console.log(`In parseTypeDeclaration: ${this.current().name}`);
        this.expect(token_1.TokenKind.Colon);
        return this.parseType();
    }
    parseType() {
        // console.log(`In parseType: ${this.current().name}`);
        let rootNode = createNode(9 /* Type */, token_1.TokenKind.None, this.location);
        if (this.match(token_1.TokenKind.LeftParen)) {
            rootNode = this.parseParenthesizedTypeOrFunctionType();
            if (this.match(token_1.TokenKind.Ampersand) || this.match(token_1.TokenKind.Pipe)) {
                rootNode = this.parseUnionOrIntersectionType(rootNode);
            }
        }
        else
            rootNode = this.parseUnionOrIntersectionOrPrimaryType();
        return endNode(rootNode, this.location);
    }
    parseParenthesizedTypeOrFunctionType() {
        // console.log(`In parseParenthesizedTypeOrFunctionType: ${this.current().name}`);
        let rootNode = createNode(9 /* Type */, token_1.TokenKind.None, this.location);
        this.accept();
        if (this.match(token_1.TokenKind.Identifier) || this.match(token_1.TokenKind.RightParen)) {
            rootNode = this.parseFunctionType();
        }
        else {
            rootNode = this.parseType();
            this.expect(token_1.TokenKind.RightParen);
        }
        // console.log(`In parseParenthesizedTypeOrFunctionType: (after) ${this.current().name}`);
        return endNode(rootNode, this.location);
    }
    parseUnionOrIntersectionOrPrimaryType() {
        // console.log(`In parseUnionOrIntersectionOrPrimaryType: ${this.current().name}`);
        let rootNode = createNode(9 /* Type */, token_1.TokenKind.Any, this.location);
        rootNode.type = this.expect(token_1.TokenKind.Any).lexeme;
        // console.log(`In parseUnionOrIntersectionOrPrimaryType: (after) ${this.current().name}`);
        return this.parseUnionOrIntersectionType(rootNode);
    }
    parseUnionOrIntersectionType(rootNode) {
        // console.log(`In parseUnionOrIntersectionType: ${this.current().name}`);
        if (this.match(token_1.TokenKind.Pipe) || this.match(token_1.TokenKind.Ampersand)) {
            const operator = this.current().kind;
            const nodeType = operator === token_1.TokenKind.Pipe ? 10 /* UnionType */ : 11 /* IntersectionType */;
            let tempNode = endNode(rootNode, this.location);
            rootNode = createNode(nodeType, operator, this.location);
            (rootNode.types = []).push(tempNode);
            while (this.match(operator)) {
                this.accept();
                rootNode.types.push(this.parseType());
            }
            // console.log(`In parseUnionOrIntersectionType: (after) ${this.current().name}`);
            rootNode.type = rootNode.types;
            delete rootNode.types;
        }
        return endNode(rootNode, this.location);
    }
    parseFunctionType() {
        // console.log(`In parseFunctionType: ${this.current().name}`);
        let rootNode = createNode(12 /* ArrowFunctionType */, token_1.TokenKind.None, this.location);
        if (this.match(token_1.TokenKind.Identifier))
            rootNode.parameters = this.parseFormalParameterList();
        else
            delete rootNode.parameters;
        this.expect(token_1.TokenKind.RightParen);
        this.expect(token_1.TokenKind.Arrow);
        // console.log(`In parseFunctionType: (after) ${this.current().name}`);
        rootNode.type = this.parseType();
        return endNode(rootNode, this.location);
    }
    parseFormalParameterList() {
        // console.log(`In parseFormalParameterList: ${this.current().name}`);
        const parameters = [];
        parameters.push(this.parseFormalParameter());
        while (this.match(token_1.TokenKind.Comma)) {
            this.accept();
            parameters.push(this.parseFormalParameter());
        }
        return parameters;
    }
}
exports.CommentParser = CommentParser;
function Parser(source) {
    return new CommentParser(source);
}
exports.default = Parser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtDQUE2QztBQUM3QyxvQ0FBMEQ7QUFFMUQsNEJBQTRCO0FBQzVCLDhCQUE4QjtBQUM5QixNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFFOUM7SUFHRSxZQUFZLE1BQWU7UUFGM0IsaUJBQVksR0FBVSxJQUFJLENBQUM7UUFDM0IsWUFBTyxHQUFtQixJQUFJLENBQUM7UUFFN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNPLE9BQU87UUFDYixnQ0FBZ0M7UUFDaEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxpQkFBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQUMsQ0FBQztRQUM5RixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBWSxRQUFRLEtBQWUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUV2RSxrQkFBa0I7SUFDVixNQUFNO1FBQ1osTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEMsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQsaUJBQWlCO0lBQ1QsS0FBSyxDQUFDLElBQWUsRUFBRSxNQUFlO1FBQzVDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO1FBQ2pE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