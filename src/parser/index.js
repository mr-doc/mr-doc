"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../scanner/");
const token_1 = require("../token");
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
        // Add EOF if the scanner did not create one at the end.
        if (this.tokens[this.tokens.length - 1].kind != token_1.TokenKind.EOF) {
            this.tokens.push(this.scanner.scan());
        }
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
            let value;
            // Does it have a default value?
            if (this.check([TokenType_1.default.Equal, null]) && optional === false) {
                this.next();
                value = new AST.LiteralExpression(this.consume([TokenType_1.default.Initializer, null], "Expected a valid initilizer"));
            }
            let type;
            // Is there a type associated with this?
            if (this.check([TokenType_1.default.Colon, null])) {
                this.next();
                type = this.parseExpression();
                // Does it have a default value after a type? (i.e. @param id: MyType = value)
                if (this.check([TokenType_1.default.Equal, null]) && optional === false) {
                    this.next();
                    value = new AST.LiteralExpression(this.consume([TokenType_1.default.Initializer, null], "Expected a valid initializer"));
                }
            }
            // Check if we have a description
            if (this.check([TokenType_1.default.Minus, null])) {
                this.next();
                if (this.match([TokenType_1.default.Description, null])) {
                    return new AST.TagStatement(tag, new AST.ParameterDeclaration(identifier, value, type, optional), new AST.DescriptionStatement(this.previous()));
                }
                throw this.error(this.previous(), "Expected a description comment");
            }
            // Otherwise, create a tag node with a parameter
            return new AST.TagStatement(tag, new AST.ParameterDeclaration(identifier, value, type, optional));
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
    parseExpression() {
        return this.parseIntersectionExpression();
    }
    parseIntersectionExpression() {
        let expression = this.parseUnionExpression();
        let expressions = [expression];
        while (this.check([TokenType_1.default.Ampersand, null])) {
            this.next();
            expressions.push(this.parseExpression());
        }
        return expressions.length > 1 ? new AST.IntersectionExpression(expressions) : expression;
    }
    parseUnionExpression() {
        let expression = this.parsePrimaryExpression();
        let expressions = [expression];
        while (this.check([TokenType_1.default.Pipe, null])) {
            this.next();
            expressions.push(this.parseExpression());
        }
        return expressions.length > 1 ? new AST.UnionExpression(expressions) : expression;
    }
    parsePrimaryExpression() {
        if (this.match([TokenType_1.default.Any, null])) {
            return new AST.LiteralExpression(this.previous());
        }
        else if (this.match([TokenType_1.default.LeftParen, null])) {
            let expression = this.parseExpression();
            this.consume([TokenType_1.default.RightParen, null], "Expected right parenthesis");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtDQUE2QztBQUM3QyxvQ0FBMEQ7QUFHMUQsK0JBQStCO0FBQy9CLGtEQUEyQztBQUMzQyw4Q0FBeUQ7QUFFekQsaURBQWlEO0FBRWpEO0lBSUUsWUFBWSxNQUFlO1FBSG5CLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDcEIsWUFBTyxHQUFtQixJQUFJLENBQUM7UUFDL0IsV0FBTSxHQUFZLEVBQUUsQ0FBQTtRQUUzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFDdkMsQ0FBQztRQUNELHdEQUF3RDtRQUN4RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBWSxRQUFRLEtBQWUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRWpFLElBQVksR0FBRyxLQUFjLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLG1CQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUV4RSxrQkFBa0I7SUFFVixJQUFJO1FB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