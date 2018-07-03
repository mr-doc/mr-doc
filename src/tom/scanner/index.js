"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Token, { TokenType, getTokenKind } from '../token';
const stream_1 = require("../stream/");
const Match_1 = require("../utils/Match");
const _ = require("lodash");
const token_1 = require("../token/");
class CommentScanner {
    constructor(source, location) {
        this.stream = null;
        this.tokens = [];
        this.stream = new stream_1.CharacterStream(source, location);
    }
    scan() { return this.scanSource(); }
    toTokenStream() {
        let token = this.scan();
        while (token.kind !== token_1.TokenType.EOF) {
            if (token.kind !== token_1.TokenType.None) {
                this.tokens.push(token);
            }
            token = this.scan();
        }
        if (this.previousToken().kind !== token_1.TokenType.EOF) {
            this.tokens.push(token);
        }
        return new stream_1.TokenStream(this.tokens);
    }
    current() { return this.stream.current(); }
    next() { return this.stream.next(); }
    accept() { return this.stream.accept(); }
    consume(to, array) { return this.stream.consume(to, array); }
    peek(to) { return this.stream.peek(to); }
    peekToken(to) {
        return to >= 0 && to < this.tokens.length ?
            this.tokens[to] : null;
    }
    peekBackToken(to) {
        return this.peekToken(this.tokens.length - to);
    }
    previousToken() {
        return this.peekBackToken(1);
    }
    scanSource() {
        this.lexeme = [];
        while (Match_1.default.isWhiteSpace(this.current()) && !this.eof) {
            this.next();
        }
        if (this.eof) {
            return new token_1.Token('\0', token_1.TokenType.EOF, this.location);
        }
        else if (Match_1.default.isLetterOrDigit(this.current()) || '\'\"[]{}.'.includes(this.current())) {
            return this.scanName();
        }
        else if (this.current() === '@') {
            return this.scanTag();
        }
        else if (this.current() === '-') {
            return this.scanMinus();
        }
        else if (this.current() === '+' && this.peek(1) === '-' && this.peek(2) === '-') {
            return this.scanMarkdown();
        }
        else if (':?|&,'.includes(this.current())) {
            return this.scanSimpleChar();
        }
        else if (this.current() === '=') {
            return this.scanEqualOrArrow();
        }
        else if ('()'.includes(this.current())) {
            return this.scanParenthesis();
        }
        else {
            return new token_1.Token(this.accept(), token_1.TokenType.None, this.location);
        }
    }
    scanName() {
        // Filter will stop the while-loop when a character reaches a certain point.
        const filter = (kind, ch) => ({
            [token_1.TokenType.Any]: !Match_1.default.isSpace(ch) && !'&|,)-='.includes(ch) && !Match_1.default.isSpace(ch),
            [token_1.TokenType.Identifier]: !Match_1.default.isSpace(ch) && !'?:)-=,'.includes(ch) && !Match_1.default.isSpace(ch),
            [token_1.TokenType.Initializer]: !Match_1.default.isSpace(ch) && !',)-='.includes(ch) && !Match_1.default.isSpace(ch),
            [token_1.TokenType.Description]: !Match_1.default.isTerminator(ch) && this.peek(1) !== '*' && this.peek(2) !== '/'
        }[kind]);
        const consume = (kind) => {
            while (filter(kind, this.current())) {
                this.lexeme.push(this.accept());
            }
            const { Any, Ampersand, Pipe, Identifier, LeftParen, Colon } = token_1.TokenType;
            if (kind === Identifier) {
                // Skip whitespace
                while (Match_1.default.isWhiteSpace(this.current())) {
                    this.next();
                }
                if (this.previousToken()) {
                    // ... (...)
                    if (this.previousToken().kind === LeftParen) {
                        // ... : (any)
                        if (this.tokens.length > 1 &&
                            this.peekBackToken(2).kind == Colon &&
                            this.peek(1) !== ':') {
                            kind = Any;
                        }
                        // (... | any) || (... & any)
                        else if ('&|'.includes(this.current())) {
                            kind = Any;
                        }
                    }
                    else if (_.includes([Pipe, Ampersand], this.previousToken().kind)) {
                        kind = Any;
                    }
                }
            }
            return new token_1.Token(this.lexeme.join(''), kind, this.location);
        };
        // @return Any
        if (this.previousToken()) {
            if (this.previousToken().lexeme === '@return' && Match_1.default.isLetter(this.current()))
                return consume(token_1.TokenType.Any);
            const { Tag, LeftParen, Comma } = token_1.TokenType;
            if (_.includes([Tag, LeftParen, Comma], this.previousToken().kind)) {
                return consume(token_1.TokenType.Identifier);
            }
            const { Colon, Arrow, Pipe, Ampersand } = token_1.TokenType;
            if (_.includes([Colon, Arrow, Pipe, Ampersand], this.previousToken().kind)) {
                return consume(token_1.TokenType.Any);
            }
            if (this.previousToken().kind === token_1.TokenType.Equal) {
                return consume(token_1.TokenType.Initializer);
            }
        }
        return consume(token_1.TokenType.Description);
    }
    scanSimpleChar() {
        const ch = this.accept();
        const kind = token_1.getTokenKind(ch);
        return new token_1.Token(ch, kind, this.location);
    }
    scanTag() {
        while (this.current() !== ':' && !Match_1.default.isSpace(this.current())) {
            this.lexeme.push(this.accept());
        }
        return new token_1.Token(this.lexeme.join(''), token_1.TokenType.Tag, this.location);
    }
    scanMinus() {
        const prevToken = this.previousToken();
        const isInitializer = prevToken &&
            prevToken.kind === token_1.TokenType.Equal &&
            this.current() === '-' && Match_1.default.isDigit(this.peek(1));
        let kind = token_1.TokenType.None;
        if (isInitializer) {
            this.lexeme.push(this.accept());
            while (Match_1.default.isDigit(this.current())) {
                this.lexeme.push(this.accept());
            }
            kind = token_1.TokenType.Initializer;
        }
        else {
            this.lexeme.push(this.accept());
            kind = token_1.TokenType.Minus;
        }
        return new token_1.Token(this.lexeme.join(''), kind, this.location);
    }
    scanMarkdown() {
        const isMarkdownTag = (m1, m2, m3) => m1 + m2 + m3 === '+--';
        let distance = this.peek(-1) === '*' ? this.location.column - 1 : null;
        distance = this.peek(-2) === '*' ? this.location.column - 2 : distance;
        // Consume the first three lexemes
        this.consume(3, this.lexeme);
        // Keep consuming the lexemes until markdown ends
        while (!isMarkdownTag(this.current(), this.peek(1), this.peek(2))) {
            if (distance && distance === this.location.column && this.current() === '*') {
                this.next();
            }
            else {
                this.lexeme.push(this.accept());
            }
        }
        // Consume the last three lexemes
        if (isMarkdownTag(this.current(), this.peek(1), this.peek(2))) {
            this.consume(3, this.lexeme);
        }
        return new token_1.Token(this.lexeme.join(''), token_1.TokenType.Markdown, this.location);
    }
    scanEqualOrArrow() {
        const lexeme = this.peek(1) === '>' ? this.accept() + this.accept() : this.accept();
        return new token_1.Token(lexeme, token_1.getTokenKind(lexeme), this.location);
    }
    scanParenthesis() {
        const lexeme = this.accept();
        const kind = lexeme === '(' ? token_1.TokenType.LeftParen : token_1.TokenType.RightParen;
        return new token_1.Token(lexeme, kind, this.location);
    }
    get location() { return this.stream.location; }
    get eof() { return this.stream.eos; }
}
exports.CommentScanner = CommentScanner;
function Scanner(source, location) {
    return new CommentScanner(source, location);
}
exports.default = Scanner;
//# sourceMappingURL=index.js.map