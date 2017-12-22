"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../scanner/");
const AST = require("../ast/");
const exceptions_1 = require("../exceptions");
const index_1 = require("../token/index");
// const { NodeType, createNode, endNode } = AST;
class CommentParser {
    constructor(source) {
        this.scanner = null;
        this.scanner = new _1.CommentScanner(source);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtDQUE2QztBQUc3QywrQkFBK0I7QUFDL0IsOENBQXlEO0FBRXpELDBDQUFrRDtBQUVsRCxpREFBaUQ7QUFFakQ7SUFHRSxZQUFZLE1BQWU7UUFGbEIsWUFBTyxHQUFtQixJQUFJLENBQUM7UUFHdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxJQUFZLFFBQVEsS0FBZSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFakUsSUFBWSxHQUFHLEtBQWMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksaUJBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXhFLGtCQUFrQjtJQUVWLElBQUk7UUFDVixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFekIsQ0FBQztJQUVPLElBQUk7UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU8sUUFBUTtRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxpQkFBaUI7SUFDVCxLQUFLLENBQUMsSUFBZ0M7UUFDNUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZ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