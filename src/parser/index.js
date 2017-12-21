"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../scanner/");
const AST = require("../ast/");
const TokenType_1 = require("../token/TokenType");
const exceptions_1 = require("../exceptions");
// const { NodeType, createNode, endNode } = AST;
class CommentParser {
    constructor(source) {
        this.position = 0;
        this.scanner = null;
        this.tokens = [];
        this.scanner = new _1.CommentScanner(source);
        while (!this.scanner.eof) {
            this.tokens.push(this.scanner.scan());
        }
        // console.log(this.tokens);
    }
    get location() { return this.peek().location; }
    get eof() { return this.peek().kind == TokenType_1.default.EOF; }
    /* flow control */
    next() {
        if (!this.eof)
            this.position++;
        return this.previous();
    }
    peek() {
        return this.tokens[this.position];
    }
    previous() {
        return this.tokens[this.position - 1];
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
        if (this.match([TokenType_1.default.Description, null]))
            return new AST.DescriptionStatement(this.previous());
        if (this.match([TokenType_1.default.Markdown, null]))
            return new AST.MarkdownStatement(this.previous());
        if (this.match([TokenType_1.default.Tag, null]))
            return this.parseTagCommentStatement();
        throw this.error(this.previous(), "Expected a description comment, markdown comment, or tag comment");
    }
    parseTagCommentStatement() {
        let tag = this.previous();
        // Check if we have a parameter
        if (this.check([TokenType_1.default.Identifier, null])) {
            let identifier = this.next();
            let optional = false;
            // Is this an optional parameter?
            if (this.check([TokenType_1.default.QuestionMark, null])) {
                this.next();
                optional = true;
            }
            let value = null;
            // Does it have a default value?
            if (this.check([TokenType_1.default.Equal, null])) {
                this.next();
                if (this.match([TokenType_1.default.Initializer, null])) {
                    value = new AST.LiteralExpression(this.previous());
                }
                else
                    throw this.error(this.previous(), "Expected a valid initializer");
            }
            // Check if we have a description
            if (this.check([TokenType_1.default.Minus, null])) {
                this.next();
                if (this.match([TokenType_1.default.Description, null])) {
                    return new AST.TagStatement(tag, new AST.ParameterDeclaration(identifier, value, optional), new AST.DescriptionStatement(this.previous()));
                }
                throw this.error(this.previous(), "Expected a description comment");
            }
            // Otherwise, create a tag node with a parameter
            return new AST.TagStatement(tag, new AST.ParameterDeclaration(identifier, value, optional));
        }
        if (this.check([TokenType_1.default.Minus, null])) {
            this.next();
            if (this.match([TokenType_1.default.Description, null])) {
                return new AST.TagStatement(tag, null, new AST.DescriptionStatement(this.previous()));
            }
            throw this.error(this.previous(), "Expected a description comment");
        }
        return new AST.TagStatement(tag);
    }
}
exports.CommentParser = CommentParser;
function Parser(source) {
    return new CommentParser(source);
}
exports.default = Parser;
