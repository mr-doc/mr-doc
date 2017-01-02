"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scanner_1 = require("./Scanner");
var Token_1 = require("./Token");
var TokenStream_1 = require("./TokenStream");
var Location_1 = require("./Location");
var Match_1 = require("../utils/Match");
var FS = require("fs");
var Path = require("path");
var TokenType;
(function (TokenType) {
    TokenType[TokenType["Colon"] = 0] = "Colon";
    TokenType[TokenType["Description"] = 1] = "Description";
    TokenType[TokenType["DefaultValue"] = 2] = "DefaultValue";
    TokenType[TokenType["Equal"] = 3] = "Equal";
    TokenType[TokenType["Identifier"] = 4] = "Identifier";
    TokenType[TokenType["LineTerminator"] = 5] = "LineTerminator";
    TokenType[TokenType["Markdown"] = 6] = "Markdown";
    TokenType[TokenType["Minus"] = 7] = "Minus";
    TokenType[TokenType["NullTerminator"] = 8] = "NullTerminator";
    TokenType[TokenType["QuestionMark"] = 9] = "QuestionMark";
    TokenType[TokenType["ReservedWord"] = 10] = "ReservedWord";
    TokenType[TokenType["Tag"] = 11] = "Tag";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
var CommentScanner = (function (_super) {
    __extends(CommentScanner, _super);
    function CommentScanner(source) {
        return _super.call(this, source) || this;
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
            else if (ch === '?') {
                this.tokens.push(this.scanQuestionMark());
            }
            else if (ch === '=') {
                this.tokens.push(this.scanEqual());
            }
            else {
                this.next();
            }
        }
        return new TokenStream_1.default(this.tokens);
    };
    CommentScanner.prototype.scanString = function () {
        var start = this.position;
        var previousToken = this.tokens[this.tokens.length - 1];
        // Handle strings that are identifiers. ie. MyClass | myVariable: string[?]
        if (previousToken.type === TokenType.Tag) {
            while (!(':-?'.includes(this.current())) && !Match_1.default.isSpace(this.current())) {
                this.lexeme.push(this.next());
            }
            var end_1 = this.position;
            var lexeme = this.lexeme.join('');
            return new Token_1.default(lexeme, TokenType.Identifier, new Location_1.default(start, end_1));
        }
        // Handle Reserved words. ie. : [reserved word]
        if (previousToken.type === TokenType.Colon) {
            while (this.current() !== '-' && !Match_1.default.isSpace(this.current())) {
                this.lexeme.push(this.next());
            }
            var end_2 = this.position;
            return new Token_1.default(this.lexeme.join(''), TokenType.ReservedWord, new Location_1.default(start, end_2));
        }
        // Handle default values. ie. : [reserved word] = value | ... = value
        if (previousToken.type === TokenType.Equal) {
            while (this.current() !== '-' && !Match_1.default.isSpace(this.current())) {
                this.lexeme.push(this.next());
            }
            var end_3 = this.position;
            return new Token_1.default(this.lexeme.join(''), TokenType.DefaultValue, new Location_1.default(start, end_3));
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
        while (!Match_1.default.isSpace(this.current()) && this.current() !== ':') {
            this.lexeme.push(this.next());
        }
        var end = this.position;
        return new Token_1.default(this.lexeme.join(''), TokenType.Tag, new Location_1.default(start, end));
    };
    CommentScanner.prototype.scanMinus = function () {
        var _this = this;
        var start = this.position;
        var isMarkdownTag = function () { return _this.current() + _this.peek(1) + _this.peek(2) === '---'; };
        var isCommentStar = function (col) { return (col === 0 || col === 1) && _this.current() === '*'; };
        var type;
        var starEnabled = this.peek(-1) === '*';
        // Determine whether it is markdown
        if (isMarkdownTag()) {
            // Consume the first three lexemes
            this.consume(3, this.lexeme);
            // Keep consuming the lexemes until markdown ends
            while (!isMarkdownTag()) {
                if (isCommentStar(this.position.column) && starEnabled) {
                    this.next();
                }
                else {
                    this.lexeme.push(this.next());
                }
            }
            // Consume the last three lexemes
            if (isMarkdownTag()) {
                this.consume(3, this.lexeme);
            }
            type = TokenType.Markdown;
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
    CommentScanner.prototype.scanQuestionMark = function () {
        var start = this.position;
        this.lexeme.push(this.next());
        var end = this.position;
        return new Token_1.default(this.lexeme.join(''), TokenType.QuestionMark, new Location_1.default(start, end));
    };
    CommentScanner.prototype.scanEqual = function () {
        var start = this.position;
        this.lexeme.push(this.next());
        var end = this.position;
        return new Token_1.default(this.lexeme.join(''), TokenType.Equal, new Location_1.default(start, end));
    };
    return CommentScanner;
}(Scanner_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CommentScanner;
var tokens = new CommentScanner(FS.readFileSync("" + Path.resolve(__dirname, '../../test/comment.txt'), 'utf8')).scan();
tokens.stream.forEach(function (token) { return console.log(token.lexeme, 'is a', TokenType[token.type]); });
//# sourceMappingURL=index.js.map