"use strict";
const Scanner_1 = require("./Scanner");
const token_1 = require("../token");
const _1 = require("../stream/");
const location_1 = require("../location");
const Match_1 = require("../utils/Match");
const _ = require("lodash");
class CommentScanner extends Scanner_1.default {
    constructor(source, location) {
        super(source, location);
    }
    scan() {
        while (!this.ended) {
            this.lexeme = [];
            const ch = this.current();
            if (Match_1.default.isLetterOrDigit(ch) || '\'\"[].'.includes(ch)) {
                this.addToken(this.scanString());
            }
            else if (Match_1.default.isLineTerminator(ch)) {
                this.addToken(this.scanSimpleChar(), true);
            }
            else if (Match_1.default.isNullTerminator(ch)) {
                this.addToken(this.scanNullTerminator());
            }
            else if (ch === '@') {
                this.addToken(this.scanTag());
            }
            else if (ch === '-') {
                this.addToken(this.scanMinus());
            }
            else if (':?|&,'.includes(ch)) {
                this.addToken(this.scanSimpleChar());
            }
            else if (ch === '=') {
                this.addToken(this.scanEqualOrArrow());
            }
            else if ('()'.includes(ch)) {
                this.addToken(this.scanParenthesis());
            }
            else {
                this.next();
            }
        }
        return new _1.TokenStream(this.tokens);
    }
    scanSimpleChar() {
        const ch = this.current();
        const start = this.location;
        const lexeme = this.next();
        const end = this.location;
        const type = token_1.getTokenType(ch);
        return new token_1.default(lexeme, type, new location_1.Range(start, end));
    }
    scanString() {
        const start = this.location;
        const previous = this.tokens.length > 0 ? this.previousToken :
            new token_1.default('', token_1.TokenType.None, new location_1.Range(start, null));
        const isEnd = (ch) => Match_1.default.isSpace(ch) || Match_1.default.isNullTerminator(ch);
        const filter = (type, ch) => ({
            [token_1.TokenType.Any]: !isEnd(ch) && !'&|,)-'.includes(ch),
            [token_1.TokenType.Identifier]: !isEnd(ch) && !'?:)-,'.includes(ch),
            [token_1.TokenType.Initializer]: !isEnd(ch) && !',)-'.includes(ch),
            [token_1.TokenType.Description]: !Match_1.default.isLineTerminator(ch) && !Match_1.default.isNullTerminator(ch)
        }[type]);
        const consume = (type) => {
            while (filter(type, this.current())) {
                this.lexeme.push(this.next());
            }
            const { Any, Ampersand, Pipe, Identifier, LeftParen } = token_1.TokenType;
            if (type === Identifier) {
                // Skip whitespace
                while (Match_1.default.isWhiteSpace(this.current())) {
                    this.next();
                }
                // ... =>  (... | any) || (... & any )
                if (previous && previous.type === LeftParen) {
                    if ('&|'.includes(this.current())) {
                        type = Any;
                    }
                }
                else if (previous && _.includes([Pipe, Ampersand], previous.type)) {
                    type = Any;
                }
            }
            const end = this.location;
            return new token_1.default(this.lexeme.join(''), type, new location_1.Range(start, end));
        };
        const { Tag, LeftParen, Comma } = token_1.TokenType;
        if (_.includes([Tag, LeftParen, Comma], previous.type) && !this.isTagTerminated) {
            return consume(token_1.TokenType.Identifier);
        }
        else {
            this.history = [];
        }
        const { Colon, Arrow, Pipe, Ampersand } = token_1.TokenType;
        if (_.includes([Colon, Arrow, Pipe, Ampersand], previous.type)) {
            return consume(token_1.TokenType.Any);
        }
        if (previous.type === token_1.TokenType.Equal) {
            return consume(token_1.TokenType.Initializer);
        }
        return consume(token_1.TokenType.Description);
    }
    scanNullTerminator() {
        const start = this.location;
        this.lexeme.push(this.next());
        const end = this.location;
        return new token_1.default(this.lexeme.join(''), token_1.TokenType.NullTerminator, new location_1.Range(start, end));
    }
    scanTag() {
        const start = this.location;
        const isEnd = (ch) => Match_1.default.isSpace(ch) || Match_1.default.isNullTerminator(ch);
        while (!isEnd(this.current()) && this.current() !== ':') {
            this.lexeme.push(this.next());
        }
        const end = this.location;
        return new token_1.default(this.lexeme.join(''), token_1.TokenType.Tag, new location_1.Range(start, end));
    }
    scanMinus() {
        const start = this.location;
        const previous = this.tokens[this.tokens.length - 1];
        const isInitializer = previous && previous.type === token_1.TokenType.Equal && this.current() === '-' && Match_1.default.isDigit(this.peek(1));
        const isMarkdown = this.current() + this.peek(1) + this.peek(2) === '---';
        let type = token_1.TokenType.None;
        if (isInitializer) {
            this.lexeme.push(this.next());
            while (Match_1.default.isDigit(this.current())) {
                this.lexeme.push(this.next());
            }
            type = token_1.TokenType.Initializer;
        }
        else if (isMarkdown) {
            type = this.scanMarkdown();
        }
        else {
            this.lexeme.push(this.next());
            type = token_1.TokenType.Minus;
        }
        const end = this.location;
        return new token_1.default(this.lexeme.join(''), type, new location_1.Range(start, end));
    }
    scanMarkdown() {
        const isMarkdownTag = (m1, m2, m3) => m1 + m2 + m3 === '---';
        const isCommentStar = (col) => (col === 0 || col === 1) && this.current() === '*';
        let starEnabled = this.peek(-1) === '*';
        // Consume the first three lexemes
        this.consume(3, this.lexeme);
        // Keep consuming the lexemes until markdown ends
        while (!isMarkdownTag(this.current(), this.peek(1), this.peek(2))) {
            if (isCommentStar(this.location.column) && starEnabled) {
                this.next();
            }
            else {
                this.lexeme.push(this.next());
            }
        }
        // Consume the last three lexemes
        if (isMarkdownTag(this.current(), this.peek(1), this.peek(2))) {
            this.consume(3, this.lexeme);
        }
        return token_1.TokenType.Markdown;
    }
    scanEqualOrArrow() {
        const start = this.location;
        const lexeme = this.peek(1) === '>' ? this.next() + this.next() : this.next();
        const end = this.location;
        return new token_1.default(lexeme, token_1.getTokenType(lexeme), new location_1.Range(start, end));
    }
    scanParenthesis() {
        const start = this.location;
        const lexeme = this.next();
        const end = this.location;
        const type = lexeme === '(' ? token_1.TokenType.LeftParen : token_1.TokenType.RightParen;
        return new token_1.default(lexeme, type, new location_1.Range(start, end));
    }
    get isTagTerminated() {
        // Get the token from history which contains eols
        const prev0 = this.previousTokenFromHistory, 
        // Get the previous token that does not have eols
        prev1 = this.previousToken, { LineTerminator, Tag } = token_1.TokenType;
        return prev0 && prev0.type === LineTerminator && prev1.type === Tag;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CommentScanner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYix1Q0FBZ0M7QUFDaEMsb0NBQTBEO0FBQzFELGlDQUF5QztBQUN6QywwQ0FBOEM7QUFDOUMsMENBQW1DO0FBR25DLDRCQUE0QjtBQUU1QixvQkFBb0MsU0FBUSxpQkFBTztJQUNqRCxZQUFZLE1BQWUsRUFBRSxRQUFtQjtRQUM5QyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJO1FBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNqQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDMUIsRUFBRSxDQUFDLENBQUMsZUFBSyxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQTtZQUNsQyxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGVBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdDLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsZUFBSyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLENBQUM7WUFBQyxJQUFJ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