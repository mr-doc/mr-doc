"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scanner_1 = require("../scanner/");
const AST = require("../ast/");
const exceptions_1 = require("../exceptions");
const index_1 = require("../token/index");
// const { NodeType, createNode, endNode } = AST;
class CommentParser {
    constructor(source) {
        this.scanner = null;
        this.scanner = new scanner_1.CommentScanner(source);
        this.tokens = this.scanner.toTokenStream();
    }
    get location() { return this.peek().location; }
    get eof() { return this.peek().kind == index_1.TokenType.EOF; }
    /* flow control */
    next() {
        if (!this.eof)
            this.tokens.next();
        return this.previous();
    }
    peek() {
        return this.tokens.current();
    }
    previous() {
        return this.tokens.peek(-1);
    }
    /* comparisons */
    check(kind) {
        if (this.eof)
            return false;
        const isEqualKind = this.peek().kind === kind[0];
        return kind[1] ? (isEqualKind && this.peek().lexeme === kind[1]) : isEqualKind;
    }
    match(...kinds) {
        for (let i = 0; i < kinds.length; i++) {
            if (this.check(kinds[i])) {
                this.next();
                return true;
            }
        }
        return false;
    }
    consume(kind, message) {
        if (this.check(kind))
            return this.next();
        throw this.error(this.previous(), message);
    }
    /* error handling */
    error(token, message) {
        // console.log(`mrdoc::parse ${message}`)
        return new exceptions_1.ParseException(token, message);
    }
    parse() {
        let statements = [];
        while (!this.eof) {
            try {
                statements.push(this.parseCommentStatement());
            }
            catch (error) {
                console.error(error.name, error.stack, ":", error.message);
                statements = [];
                break;
            }
        }
        return statements;
    }
    parseCommentStatement() {
        /* A Comment is either a description, markdown, or tag */
        if (this.match([index_1.TokenType.Description, null]))
            return new AST.DescriptionStatement(this.previous());
        if (this.match([index_1.TokenType.Markdown, null]))
            return new AST.MarkdownStatement(this.previous());
        if (this.match([index_1.TokenType.Tag, null]))
            return this.parseTagStatement();
        throw this.error(this.previous(), "Expected a description comment, markdown comment, or tag comment");
    }
    parseTagStatement() {
        let tag = this.previous();
        // Check if we have a parameter
        if (this.check([index_1.TokenType.Identifier, null])) {
            let identifier = this.next();
            let optional = false;
            // Is this an optional parameter?
            if (this.check([index_1.TokenType.QuestionMark, null])) {
                this.next();
                optional = true;
            }
            let value;
            // Does it have a default value?
            if (this.check([index_1.TokenType.Equal, null]) && optional === false) {
                this.next();
                value = new AST.LiteralExpression(this.consume([index_1.TokenType.Initializer, null], "Expected a valid initilizer"));
            }
            let type;
            // Is there a type associated with this?
            if (this.check([index_1.TokenType.Colon, null])) {
                this.next();
                type = this.parseExpression();
                // Does it have a default value after a type? (i.e. @param id: MyType = value)
                if (this.check([index_1.TokenType.Equal, null]) && optional === false) {
                    this.next();
                    value = new AST.LiteralExpression(this.consume([index_1.TokenType.Initializer, null], "Expected a valid initializer"));
                }
            }
            // Check if we have a description
            if (this.check([index_1.TokenType.Minus, null])) {
                this.next();
                if (this.match([index_1.TokenType.Description, null])) {
                    return new AST.TagStatement(tag, new AST.ParameterDeclaration(identifier, value, type, optional), new AST.DescriptionStatement(this.previous()));
                }
                throw this.error(this.previous(), "Expected a description comment");
            }
            // Otherwise, create a tag node with a parameter
            return new AST.TagStatement(tag, new AST.ParameterDeclaration(identifier, value, type, optional));
        }
        if (this.check([index_1.TokenType.Minus, null])) {
            this.next();
            if (this.match([index_1.TokenType.Description, null])) {
                return new AST.TagStatement(tag, null, new AST.DescriptionStatement(this.previous()));
            }
            throw this.error(this.previous(), "Expected a description comment");
        }
        return new AST.TagStatement(tag);
    }
    parseExpression() {
        return this.parseIntersectionExpression();
    }
    parseIntersectionExpression() {
        let expression = this.parseUnionExpression();
        let expressions = [expression];
        while (this.check([index_1.TokenType.Ampersand, null])) {
            this.next();
            expressions.push(this.parseExpression());
        }
        return expressions.length > 1 ? new AST.IntersectionExpression(expressions) : expression;
    }
    parseUnionExpression() {
        let expression = this.parsePrimaryExpression();
        let expressions = [expression];
        while (this.check([index_1.TokenType.Pipe, null])) {
            this.next();
            expressions.push(this.parseExpression());
        }
        return expressions.length > 1 ? new AST.UnionExpression(expressions) : expression;
    }
    parsePrimaryExpression() {
        if (this.match([index_1.TokenType.Any, null])) {
            return new AST.LiteralExpression(this.previous());
        }
        else if (this.match([index_1.TokenType.LeftParen, null])) {
            let expression = this.parseExpression();
            this.consume([index_1.TokenType.RightParen, null], "Expected right parenthesis");
            return new AST.GroupExpression(expression);
        }
        else
            throw this.error(this.previous(), "Expected a valid initializer");
    }
}
exports.CommentParser = CommentParser;
function Parser(source) {
    return new CommentParser(source);
}
exports.default = Parser;
//# sourceMappingURL=index.js.map