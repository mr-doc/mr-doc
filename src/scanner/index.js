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
// 'includes' polyfill
function includes(search, start) {
    'use strict';
    if (typeof start !== 'number') {
        start = 0;
    }
    if (start + search.length > this.length) {
        return false;
    }
    else {
        return this.indexOf(search, start) !== -1;
    }
}
;
var TokenType;
(function (TokenType) {
    TokenType[TokenType["Colon"] = 0] = "Colon";
    TokenType[TokenType["Description"] = 1] = "Description";
    TokenType[TokenType["Initializer"] = 2] = "Initializer";
    TokenType[TokenType["Equal"] = 3] = "Equal";
    TokenType[TokenType["Identifier"] = 4] = "Identifier";
    TokenType[TokenType["LineTerminator"] = 5] = "LineTerminator";
    TokenType[TokenType["Markdown"] = 6] = "Markdown";
    TokenType[TokenType["Minus"] = 7] = "Minus";
    TokenType[TokenType["NullTerminator"] = 8] = "NullTerminator";
    TokenType[TokenType["QuestionMark"] = 9] = "QuestionMark";
    TokenType[TokenType["SpecialWord"] = 10] = "SpecialWord";
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
        var previousToken = this.tokens.length > 0 ? this.tokens[this.tokens.length - 1] : false;
        // Handle strings that are identifiers. ie. MyClass | myVariable{?}: string
        if (previousToken && previousToken.type === TokenType.Tag) {
            if (previousToken.lexeme === "@return") {
                while (!Match_1.default.isLineTerminator(this.current())) {
                    this.lexeme.push(this.next());
                }
                var end_1 = this.position;
                var lexeme_1 = this.lexeme.join('');
                return new Token_1.default(lexeme_1, TokenType.Description, new Location_1.default(start, end_1));
            }
            while (!(includes.apply(':-?', [this.current()])) && !Match_1.default.isSpace(this.current())) {
                this.lexeme.push(this.next());
            }
            var end_2 = this.position;
            var lexeme = this.lexeme.join('');
            return new Token_1.default(lexeme, TokenType.Identifier, new Location_1.default(start, end_2));
        }
        // Handle special words. ie. : [special word]
        if (previousToken && previousToken.type === TokenType.Colon) {
            while (this.current() !== '-' && !Match_1.default.isSpace(this.current())) {
                this.lexeme.push(this.next());
            }
            var end_3 = this.position;
            return new Token_1.default(this.lexeme.join(''), TokenType.SpecialWord, new Location_1.default(start, end_3));
        }
        // Handle default values. ie. : [special word] = value | ... = value
        if (previousToken && previousToken.type === TokenType.Equal) {
            while (this.current() !== '-' && !Match_1.default.isSpace(this.current())) {
                this.lexeme.push(this.next());
            }
            var end_4 = this.position;
            return new Token_1.default(this.lexeme.join(''), TokenType.Initializer, new Location_1.default(start, end_4));
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
// const tokens = new CommentScanner(
//   FS.readFileSync(`${Path.resolve(__dirname, '../../test/comment.txt')}`, 'utf8')
// ).scan();
// tokens.stream.forEach(token => console.log(token.lexeme, 'is a' ,TokenType[token.type]));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7OztBQUNiLHFDQUFnQztBQUNoQyxpQ0FBNEI7QUFDNUIsNkNBQXdDO0FBQ3hDLHVDQUFrQztBQUNsQyx3Q0FBbUM7QUFJbkMsc0JBQXNCO0FBQ3RCLGtCQUFrQixNQUFNLEVBQUUsS0FBSztJQUM3QixZQUFZLENBQUM7SUFDYixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzlCLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0FBQ0gsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFZLFNBYVg7QUFiRCxXQUFZLFNBQVM7SUFDbkIsMkNBQUssQ0FBQTtJQUNMLHVEQUFXLENBQUE7SUFDWCx1REFBVyxDQUFBO0lBQ1gsMkNBQUssQ0FBQTtJQUNMLHFEQUFVLENBQUE7SUFDViw2REFBYyxDQUFBO0lBQ2QsaURBQVEsQ0FBQTtJQUNSLDJDQUFLLENBQUE7SUFDTCw2REFBYyxDQUFBO0lBQ2QseURBQVksQ0FBQTtJQUNaLHdEQUFXLENBQUE7SUFDWCx3Q0FBRyxDQUFBO0FBQ0wsQ0FBQyxFQWJXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBYXBCO0FBRUQ7SUFBNEMsa0NBQU87SUFDakQsd0JBQVksTUFBYztlQUFJLGtCQUFNLE1BQU0sQ0FBQztJQUFFLENB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LFFBQVEsQ0FBQztRQUMxQixNQUFNLENBQUMsSUFBSSxlQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLGtCQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFMUYsQ0FBQztJQUNPLDJDQUFrQixHQUExQjtRQUNFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFDN0IsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMxQixNQUFNLENBQUMsSUFBSSxlQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLGtCQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUNPLDJDQUFrQixHQUExQjtRQUNFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDOUIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMxQixNQUFNLENBQUMsSUFBSSxlQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLGtCQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUNPLGdDQUFPLEdBQWY7UUFDRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzVCLE9BQU0sQ0FBQyxlQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FB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