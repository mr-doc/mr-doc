"use strict";
const Scanner_1 = require("./Scanner");
const token_1 = require("../token");
const _1 = require("../stream/");
const location_1 = require("../location");
const Match_1 = require("../utils/Match");
class CommentScanner extends Scanner_1.default {
    constructor(source, location) {
        super(source, location);
    }
    scan() {
        while (!this.ended) {
            this.lexeme = [];
            const ch = this.current();
            if (Match_1.default.isLetterOrDigit(ch) || '\'\"[]'.includes(ch)) {
                this.tokens.push(this.scanString());
            }
            else if (Match_1.default.isNullTerminator(ch)) {
                this.tokens.push(this.scanNullTerminator());
            }
            else if (ch === '@') {
                this.tokens.push(this.scanTag());
            }
            else if (ch === '-') {
                this.tokens.push(this.scanMinusOrMarkdown());
            }
            else if (':?|&,'.includes(ch)) {
                this.tokens.push(this.scanSimpleChar());
            }
            else if (ch === '=') {
                this.tokens.push(this.scanEqualOrArrow());
            }
            else if ('()'.includes(ch)) {
                this.tokens.push(this.scanParenthesis());
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
        const previous = this.tokens.length > 0 ? this.tokens[this.tokens.length - 1] : { type: 0 /* None */ };
        // The possible types of tagged comments:
        // @tag
        // @tag id
        // @tag id = init
        // @tag id : special = init
        // @tag id : () => special
        // @tag id : (id: special) => special
        // @tag id : (id: special, id, id) => special
        // @tag id : (id: special = init, id = init, id = init) => special
        // @tag id : (id: special | special) => special | special
        // @tag id : (id: special & special) => special & special
        const isEnd = (ch) => Match_1.default.isSpace(ch) || Match_1.default.isNullTerminator(ch);
        const scanIdentifer = () => {
            const start = this.location;
            while (!isEnd(this.current()) && !'?:)-,'.includes(this.current())) {
                this.lexeme.push(this.next());
            }
            const end = this.location;
            return new token_1.default(this.lexeme.join(''), 7 /* Identifier */, new location_1.Range(start, end));
        };
        const scanSpecial = () => {
            const start = this.location;
            while (!isEnd(this.current()) && !'&|,)-'.includes(this.current())) {
                this.lexeme.push(this.next());
            }
            const end = this.location;
            return new token_1.default(this.lexeme.join(''), 16 /* SpecialWord */, new location_1.Range(start, end));
        };
        const scanInitializer = () => {
            const start = this.location;
            while (!isEnd(this.current()) && !',)-'.includes(this.current())) {
                this.lexeme.push(this.next());
            }
            const end = this.location;
            return new token_1.default(this.lexeme.join(''), 8 /* Initializer */, new location_1.Range(start, end));
        };
        if (previous.type === 17 /* Tag */ ||
            previous.type === 9 /* LeftParen */ ||
            previous.type === 4 /* Comma */) {
            return scanIdentifer();
        }
        if (previous.type === 3 /* Colon */ ||
            previous.type === 2 /* Arrow */ ||
            previous.type === 13 /* Pipe */ ||
            previous.type === 1 /* Ampersand */) {
            return scanSpecial();
        }
        if (previous.type === 6 /* Equal */) {
            return scanInitializer();
        }
        while (!Match_1.default.isLineTerminator(this.current()) && !Match_1.default.isNullTerminator(this.current())) {
            this.lexeme.push(this.next());
        }
        const end = this.location;
        return new token_1.default(this.lexeme.join(''), 5 /* Description */, new location_1.Range(start, end));
    }
    scanNullTerminator() {
        const start = this.location;
        this.lexeme.push(this.next());
        const end = this.location;
        return new token_1.default(this.lexeme.join(''), 12 /* NullTerminator */, new location_1.Range(start, end));
    }
    scanTag() {
        const start = this.location;
        const isEnd = (ch) => Match_1.default.isSpace(ch) || Match_1.default.isNullTerminator(ch);
        while (!isEnd(this.current()) && this.current() !== ':') {
            this.lexeme.push(this.next());
        }
        const end = this.location;
        return new token_1.default(this.lexeme.join(''), 17 /* Tag */, new location_1.Range(start, end));
    }
    scanMinusOrMarkdown() {
        const start = this.location;
        const isMarkdownTag = () => this.current() + this.peek(1) + this.peek(2) === '---';
        const isCommentStar = (col) => (col === 0 || col === 1) && this.current() === '*';
        let type;
        let starEnabled = this.peek(-1) === '*';
        // Determine whether it is markdown
        if (isMarkdownTag()) {
            // Consume the first three lexemes
            this.consume(3, this.lexeme);
            // Keep consuming the lexemes until markdown ends
            while (!isMarkdownTag()) {
                if (isCommentStar(this.location.column) && starEnabled) {
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
            type = 10 /* Markdown */;
        }
        else {
            this.lexeme.push(this.next());
            type = 11 /* Minus */;
        }
        const end = this.location;
        return new token_1.default(this.lexeme.join(''), type, new location_1.Range(start, end));
    }
    scanEqualOrArrow() {
        // let ch = this.next();
        const start = this.location;
        const lexeme = this.peek(1) === '>' ? this.next() + this.next() : this.next();
        const end = this.location;
        return new token_1.default(lexeme, token_1.getTokenType(lexeme), new location_1.Range(start, end));
    }
    scanParenthesis() {
        const start = this.location;
        const lexeme = this.next();
        const end = this.location;
        const type = lexeme === '(' ? 9 /* LeftParen */ : 15 /* RightParen */;
        return new token_1.default(lexeme, type, new location_1.Range(start, end));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CommentScanner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYix1Q0FBZ0M7QUFDaEMsb0NBQTBEO0FBQzFELGlDQUF5QztBQUN6QywwQ0FBOEM7QUFDOUMsMENBQW1DO0FBSW5DLG9CQUFvQyxTQUFRLGlCQUFPO0lBQ2pELFlBQVksTUFBZSxFQUFFLFFBQW1CO1FBQzlDLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUk7UUFDRixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxQixFQUFFLENBQUMsQ0FBQyxlQUFLLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGVBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7WUFDOUMsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFF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