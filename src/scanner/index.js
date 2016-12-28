"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scanner_1 = require('./Scanner');
var Token_1 = require('./Token');
var Location_1 = require('./Location');
var Match_1 = require('../utils/Match');
var FS = require('fs');
var Path = require('path');
/**
 * JSDOC grammer
 * <jsdoc> := <start> <comment> <end>
 * <start> := <forward slash> <asterisk> <asterisk>
 * <forward slash> := '/'
 * <asterisk> := '*'
 * <comment> := <simple comment>
 *            | <complex comment>
 *            | <markdown comment>
 * <simple comment> := <description> <eol> { <simple comment> }
 * <description> := <special char> { <special char> }
 * <special char> := [a-z] | [A-Z] | [0-9] | <ws>
 * <period> := '.'
 * <eol> := '\n'
 * <complex comment> := <type declaration> <minus> <simple comment>
 * <type declaration> := <tag> <variable> <colon> <reserved>
 * <tag> := @public | @private | @protected | ...
 * <variable> := <char> { <char> }
 * <char> := [a-z] | [A-Z] | [0-9] | '_'
 * <colon> := ':'
 * <type> := 'string' | 'number' | 'object' | 'function' | 'undefined' | 'boolean'
 * <collection type> := '[]'
 * <default type> := <assignment>
 */
(function (TokenType) {
    TokenType[TokenType["Colon"] = 0] = "Colon";
    TokenType[TokenType["Description"] = 1] = "Description";
    TokenType[TokenType["Equal"] = 2] = "Equal";
    TokenType[TokenType["Identifier"] = 3] = "Identifier";
    TokenType[TokenType["LineTerminator"] = 4] = "LineTerminator";
    TokenType[TokenType["MarkdownComment"] = 5] = "MarkdownComment";
    TokenType[TokenType["Minus"] = 6] = "Minus";
    TokenType[TokenType["NullTerminator"] = 7] = "NullTerminator";
    TokenType[TokenType["OptionalIdentifier"] = 8] = "OptionalIdentifier";
    TokenType[TokenType["ReservedWord"] = 9] = "ReservedWord";
    TokenType[TokenType["Tag"] = 10] = "Tag";
})(exports.TokenType || (exports.TokenType = {}));
var TokenType = exports.TokenType;
var CommentScanner = (function (_super) {
    __extends(CommentScanner, _super);
    function CommentScanner(source) {
        _super.call(this, source);
    }
    CommentScanner.prototype.scan = function () {
        while (!this.ended) {
            this.lexeme = [];
            var ch = this.current();
            if (Match_1.default.isLetterOrDigit(ch)) {
                this.tokens.push(this.scanString());
            } /*else if (Match.isLineTerminator(ch)) {
                this.tokens.push(this.scanLineTerminator());
            } */
            else if (Match_1.default.isNullTerminator(ch)) {
                this.tokens.push(this.scanNullTerminator());
            }
            else if (ch === '@') {
                this.tokens.push(this.scanTag());
            }
            else if (ch === '-') {
                this.tokens.push(this.scanMinus());
            }
            else if (ch === ':') {
                this.tokens.push(this.scanColon());
            }
            else {
                this.next();
            }
        }
        return this.tokens;
    };
    CommentScanner.prototype.scanString = function () {
        var start = this.position;
        var previousToken = this.tokens[this.tokens.length - 1];
        // Handle strings that are identifiers. ie. MyClass | myVariable: string[?]
        if (previousToken.type === TokenType.Tag) {
            while (!Match_1.default.isWhiteSpace(this.current()) &&
                !Match_1.default.isLineTerminator(this.current()) &&
                ':-'.indexOf(this.current()) === -1) {
                this.lexeme.push(this.next());
            }
            var end_1 = this.position;
            var lexeme = this.lexeme.join('');
            var isOptional = lexeme[lexeme.length - 1] === '?';
            return new Token_1.default(lexeme, isOptional ? TokenType.OptionalIdentifier : TokenType.Identifier, new Location_1.default(start, end_1));
        }
        // Handle Reserved words. ie. : [reserved word]
        if (previousToken.type === TokenType.Colon) {
            while (this.current() !== '-' && !Match_1.default.isLineTerminator(this.current())) {
                this.lexeme.push(this.next());
            }
            var end_2 = this.position;
            return new Token_1.default(this.lexeme.join(''), TokenType.ReservedWord, new Location_1.default(start, end_2));
        }
        // Handle Descriptions
        while (!Match_1.default.isTerminator(this.current())) {
            this.lexeme.push(this.next());
        }
        var end = this.position;
        return new Token_1.default(this.lexeme.join(''), TokenType.Description, new Location_1.default(start, end));
    };
    CommentScanner.prototype.scanLineTerminator = function () {
        var start = this.position;
        this.lexeme.push(this.next());
        var end = this.position;
        return new Token_1.default(this.lexeme.join(''), TokenType.LineTerminator, new Location_1.default(start, end));
    };
    CommentScanner.prototype.scanNullTerminator = function () {
        var start = this.position;
        this.lexeme.push(this.next());
        var end = this.position;
        return new Token_1.default(this.lexeme.join(''), TokenType.NullTerminator, new Location_1.default(start, end));
    };
    CommentScanner.prototype.scanTag = function () {
        var start = this.position;
        while (!Match_1.default.isWhiteSpace(this.current()) &&
            this.current() !== ':') {
            this.lexeme.push(this.next());
        }
        var end = this.position;
        return new Token_1.default(this.lexeme.join(''), TokenType.Tag, new Location_1.default(start, end));
    };
    CommentScanner.prototype.scanMinus = function () {
        var _this = this;
        var start = this.position;
        var type;
        var isMarkdownTag = function () { return _this.current() + _this.peek(1) + _this.peek(2) === '---'; };
        // Determine whether it is markdown
        if (isMarkdownTag()) {
            // Consume the first three lexemes
            this.consume(3, this.lexeme);
            // Keep consuming the lexemes until markdown ends
            while (!isMarkdownTag()) {
                this.lexeme.push(this.next());
            }
            // Consume the last three lexemes
            if (isMarkdownTag()) {
                this.consume(3, this.lexeme);
            }
            type = TokenType.MarkdownComment;
        }
        else {
            this.lexeme.push(this.next());
            type = TokenType.Minus;
        }
        var end = this.position;
        return new Token_1.default(this.lexeme.join(''), type, new Location_1.default(start, end));
    };
    CommentScanner.prototype.scanColon = function () {
        var start = this.position;
        this.lexeme.push(this.next());
        var end = this.position;
        return new Token_1.default(this.lexeme.join(''), TokenType.Colon, new Location_1.default(start, end));
    };
    return CommentScanner;
}(Scanner_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CommentScanner;
var tokens = new CommentScanner(FS.readFileSync("" + Path.resolve(__dirname, '../../test/comment.txt'), 'utf8')).scan();
tokens.forEach(function (token) { return console.log(token.lexeme, 'is a', TokenType[token.type]); });
//# sourceMappingURL=index.js.map