"use strict";
const Scanner_1 = require('./Scanner');
const token_1 = require('../token');
const _1 = require('../stream/');
const location_1 = require('../location');
const Match_1 = require('../utils/Match');
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
            return new token_1.default(this.lexeme.join(''), 8 /* Identifier */, new location_1.Range(start, end));
        };
        const scanAny = () => {
            const start = this.location;
            while (!isEnd(this.current()) && !'&|,)-'.includes(this.current())) {
                this.lexeme.push(this.next());
            }
            const end = this.location;
            return new token_1.default(this.lexeme.join(''), 2 /* Any */, new location_1.Range(start, end));
        };
        const scanInitializer = () => {
            const start = this.location;
            while (!isEnd(this.current()) && !',)-'.includes(this.current())) {
                this.lexeme.push(this.next());
            }
            const end = this.location;
            return new token_1.default(this.lexeme.join(''), 9 /* Initializer */, new location_1.Range(start, end));
        };
        if (previous.type === 17 /* Tag */ ||
            previous.type === 10 /* LeftParen */ ||
            previous.type === 5 /* Comma */) {
            return scanIdentifer();
        }
        if (previous.type === 4 /* Colon */ ||
            previous.type === 3 /* Arrow */ ||
            previous.type === 14 /* Pipe */ ||
            previous.type === 1 /* Ampersand */) {
            return scanAny();
        }
        if (previous.type === 7 /* Equal */) {
            return scanInitializer();
        }
        while (!Match_1.default.isLineTerminator(this.current()) && !Match_1.default.isNullTerminator(this.current())) {
            this.lexeme.push(this.next());
        }
        const end = this.location;
        return new token_1.default(this.lexeme.join(''), 6 /* Description */, new location_1.Range(start, end));
    }
    scanNullTerminator() {
        const start = this.location;
        this.lexeme.push(this.next());
        const end = this.location;
        return new token_1.default(this.lexeme.join(''), 13 /* NullTerminator */, new location_1.Range(start, end));
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
            type = 11 /* Markdown */;
        }
        else {
            this.lexeme.push(this.next());
            type = 12 /* Minus */;
        }
        const end = this.location;
        return new token_1.default(this.lexeme.join(''), type, new location_1.Range(start, end));
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
        const type = lexeme === '(' ? 10 /* LeftParen */ : 16 /* RightParen */;
        return new token_1.default(lexeme, type, new location_1.Range(start, end));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CommentScanner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYiwwQkFBb0IsV0FBVyxDQUFDLENBQUE7QUFDaEMsd0JBQStDLFVBQVUsQ0FBQyxDQUFBO0FBQzFELG1CQUE0QixZQUFZLENBQUMsQ0FBQTtBQUN6QywyQkFBZ0MsYUFBYSxDQUFDLENBQUE7QUFDOUMsd0JBQWtCLGdCQUFnQixDQUFDLENBQUE7QUFJbkMsNkJBQTRDLGlCQUFPO0lBQ2pELFlBQVksTUFBZSxFQUFFLFFBQW1CO1FBQzlDLE1BQU0sTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJO1FBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNqQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDMUIsRUFBRSxDQUFDLENBQUMsZUFBSyxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDdEMsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxlQUFLLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFB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