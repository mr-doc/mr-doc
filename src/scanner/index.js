"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../token");
const _1 = require("../stream/");
const Match_1 = require("../utils/Match");
const _ = require("lodash");
class CommentScanner {
    constructor(source, location) {
        this.stream = null;
        this.tokens = [];
        this.previousToken = null;
        this.stream = new _1.CharacterStream(source, location);
    }
    scan() { return this.previousToken = this.scanSource(); }
    toTokenStream() {
        let token = this.scan();
        while (token.kind !== token_1.TokenKind.EOF) {
            if (token.kind !== token_1.TokenKind.None) {
                this.tokens.push(token);
            }
            token = this.scan();
        }
        return new _1.TokenStream(this.tokens);
    }
    current() { return this.stream.current(); }
    next() { return this.stream.next(); }
    accept() { return this.stream.accept(); }
    consume(to, array) { return this.stream.consume(to, array); }
    peek(to) { return this.stream.peek(to); }
    scanSource() {
        this.lexeme = [];
        while (Match_1.default.isWhiteSpace(this.current()) && !this.eof) {
            this.next();
        }
        if (this.eof) {
            return new token_1.default('\0', token_1.TokenKind.EOF, this.location);
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
            return new token_1.default(this.accept(), token_1.TokenKind.None, this.location);
        }
    }
    scanName() {
        const prevToken = () => this.previousToken;
        const filter = (kind, ch) => ({
            [token_1.TokenKind.Any]: !Match_1.default.isSpace(ch) && !'&|,)-='.includes(ch) && !Match_1.default.isSpace(ch),
            [token_1.TokenKind.Identifier]: !Match_1.default.isSpace(ch) && !'?:)-=,'.includes(ch) && !Match_1.default.isSpace(ch),
            [token_1.TokenKind.Initializer]: !Match_1.default.isSpace(ch) && !',)-='.includes(ch) && !Match_1.default.isSpace(ch),
            [token_1.TokenKind.Description]: !Match_1.default.isTerminator(ch)
        }[kind]);
        const consume = (kind) => {
            while (filter(kind, this.current())) {
                this.lexeme.push(this.accept());
            }
            const { Any, Ampersand, Pipe, Identifier, LeftParen } = token_1.TokenKind;
            if (kind === Identifier) {
                // Skip whitespace
                while (Match_1.default.isWhiteSpace(this.current())) {
                    this.next();
                }
                // ... =>  (... | any) || (... & any )
                if (prevToken() && prevToken().kind === LeftParen) {
                    if ('&|'.includes(this.current())) {
                        kind = Any;
                    }
                }
                else if (prevToken() && _.includes([Pipe, Ampersand], prevToken().kind)) {
                    kind = Any;
                }
            }
            return new token_1.default(this.lexeme.join(''), kind, this.location);
        };
        // @return Any
        if (prevToken() && prevToken().lexeme === '@return' && Match_1.default.isLetter(this.current()))
            return consume(token_1.TokenKind.Any);
        const { Tag, LeftParen, Comma } = token_1.TokenKind;
        if (prevToken() && _.includes([Tag, LeftParen, Comma], prevToken().kind)) {
            return consume(token_1.TokenKind.Identifier);
        }
        const { Colon, Arrow, Pipe, Ampersand } = token_1.TokenKind;
        if (prevToken() && _.includes([Colon, Arrow, Pipe, Ampersand], prevToken().kind)) {
            return consume(token_1.TokenKind.Any);
        }
        if (prevToken() && prevToken().kind === token_1.TokenKind.Equal) {
            return consume(token_1.TokenKind.Initializer);
        }
        return consume(token_1.TokenKind.Description);
    }
    scanSimpleChar() {
        const ch = this.accept();
        const kind = token_1.getTokenKind(ch);
        return new token_1.default(ch, kind, this.location);
    }
    scanTag() {
        while (this.current() !== ':' && !Match_1.default.isSpace(this.current())) {
            this.lexeme.push(this.accept());
        }
        return new token_1.default(this.lexeme.join(''), token_1.TokenKind.Tag, this.location);
    }
    scanMinus() {
        const prevToken = this.previousToken;
        const isInitializer = prevToken &&
            prevToken.kind === token_1.TokenKind.Equal &&
            this.current() === '-' && Match_1.default.isDigit(this.peek(1));
        let kind = token_1.TokenKind.None;
        if (isInitializer) {
            this.lexeme.push(this.accept());
            while (Match_1.default.isDigit(this.current())) {
                this.lexeme.push(this.accept());
            }
            kind = token_1.TokenKind.Initializer;
        }
        else {
            this.lexeme.push(this.accept());
            kind = token_1.TokenKind.Minus;
        }
        return new token_1.default(this.lexeme.join(''), kind, this.location);
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
        return new token_1.default(this.lexeme.join(''), token_1.TokenKind.Markdown, this.location);
    }
    scanEqualOrArrow() {
        const lexeme = this.peek(1) === '>' ? this.accept() + this.accept() : this.accept();
        return new token_1.default(lexeme, token_1.getTokenKind(lexeme), this.location);
    }
    scanParenthesis() {
        const lexeme = this.accept();
        const kind = lexeme === '(' ? token_1.TokenKind.LeftParen : token_1.TokenKind.RightParen;
        return new token_1.default(lexeme, kind, this.location);
    }
    get location() { return this.stream.location; }
    get eof() { return this.stream.eos; }
}
exports.CommentScanner = CommentScanner;
function Scanner(source, location) {
    return new CommentScanner(source, location);
}
exports.default = Scanner;
