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
                this.tokens.push(this.peek(1) === '>' ? this.scanArrow() : this.scanEqual());
            }
            else if (ch === '|') {
                this.tokens.push(this.scanPipe());
            }
            else if (ch === '&') {
                this.tokens.push(this.scanAmpersand());
            }
            else if (ch === ',') {
                this.tokens.push(this.scanComma());
            }
            else if ('()'.includes(ch)) {
                this.tokens.push(this.scanParenthesis());
            } /*else if ('{}'.includes(ch)) {
              this.tokens.push(this.scanBrace());
            } else if ('[]'.includes(ch)) {
              this.tokens.push(this.scanBracket());
            } */
            else {
                this.next();
            }
        }
        return new _1.TokenStream(this.tokens);
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
        const isEnd = () => {
            return Match_1.default.isLineTerminator(this.current()) ||
                Match_1.default.isSpace(this.current()) ||
                Match_1.default.isNullTerminator(this.current());
        };
        const scanIdentifer = () => {
            const start = this.location;
            while (!':)-'.includes(this.current()) && !isEnd()) {
                this.lexeme.push(this.next());
            }
            const end = this.location;
            return new token_1.default(this.lexeme.join(''), 7 /* Identifier */, new location_1.Range(start, end));
        };
        const scanSpecial = () => {
            const start = this.location;
            while (!'&|,)-'.includes(this.current()) && !isEnd()) {
                this.lexeme.push(this.next());
            }
            const end = this.location;
            return new token_1.default(this.lexeme.join(''), 21 /* SpecialWord */, new location_1.Range(start, end));
        };
        const scanInitializer = () => {
            const start = this.location;
            while (!',)-'.includes(this.current()) && !isEnd()) {
                this.lexeme.push(this.next());
            }
            const end = this.location;
            return new token_1.default(this.lexeme.join(''), 8 /* Initializer */, new location_1.Range(start, end));
        };
        if (previous.type === 22 /* Tag */ ||
            previous.type === 11 /* LeftParen */ ||
            previous.type === 4 /* Comma */) {
            return scanIdentifer();
        }
        if (previous.type === 3 /* Colon */ ||
            previous.type === 2 /* Arrow */ ||
            previous.type === 16 /* Pipe */ ||
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
    scanLineTerminator() {
        const start = this.location;
        this.lexeme.push(this.next());
        const end = this.location;
        return new token_1.default(this.lexeme.join(''), 12 /* LineTerminator */, new location_1.Range(start, end));
    }
    scanNullTerminator() {
        const start = this.location;
        this.lexeme.push(this.next());
        const end = this.location;
        return new token_1.default(this.lexeme.join(''), 15 /* NullTerminator */, new location_1.Range(start, end));
    }
    scanTag() {
        const start = this.location;
        while (!Match_1.default.isSpace(this.current()) && this.current() !== ':') {
            this.lexeme.push(this.next());
        }
        const end = this.location;
        return new token_1.default(this.lexeme.join(''), 22 /* Tag */, new location_1.Range(start, end));
    }
    scanMinus() {
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
            type = 13 /* Markdown */;
        }
        else {
            this.lexeme.push(this.next());
            type = 14 /* Minus */;
        }
        const end = this.location;
        return new token_1.default(this.lexeme.join(''), type, new location_1.Range(start, end));
    }
    scanColon() {
        const start = this.location;
        const lexeme = this.next();
        const end = this.location;
        return new token_1.default(lexeme, 3 /* Colon */, new location_1.Range(start, end));
    }
    scanQuestionMark() {
        const start = this.location;
        const lexeme = this.next();
        const end = this.location;
        return new token_1.default(lexeme, 17 /* QuestionMark */, new location_1.Range(start, end));
    }
    scanArrow() {
        const start = this.location;
        const lexeme = this.next() + this.next();
        const end = this.location;
        return new token_1.default(lexeme, 2 /* Arrow */, new location_1.Range(start, end));
    }
    scanEqual() {
        const start = this.location;
        const lexeme = this.next();
        const end = this.location;
        return new token_1.default(lexeme, 6 /* Equal */, new location_1.Range(start, end));
    }
    scanPipe() {
        const start = this.location;
        const lexeme = this.next();
        const end = this.location;
        return new token_1.default(lexeme, 16 /* Pipe */, new location_1.Range(start, end));
    }
    scanAmpersand() {
        const start = this.location;
        const lexeme = this.next();
        const end = this.location;
        return new token_1.default(lexeme, 1 /* Ampersand */, new location_1.Range(start, end));
    }
    scanComma() {
        const start = this.location;
        const lexeme = this.next();
        const end = this.location;
        return new token_1.default(lexeme, 4 /* Comma */, new location_1.Range(start, end));
    }
    scanParenthesis() {
        const start = this.location;
        const lexeme = this.next();
        const end = this.location;
        const type = lexeme === '(' ? 11 /* LeftParen */ : 20 /* RightParen */;
        return new token_1.default(lexeme, type, new location_1.Range(start, end));
    }
    scanBrace() {
        const start = this.location;
        const lexeme = this.next();
        const end = this.location;
        const type = lexeme === '{' ? 9 /* LeftBrace */ : 18 /* RightBrace */;
        return new token_1.default(lexeme, type, new location_1.Range(start, end));
    }
    scanBracket() {
        const start = this.location;
        const lexeme = this.next();
        const end = this.location;
        const type = lexeme === '[' ? 10 /* LeftBracket */ : 19 /* RightBracket */;
        return new token_1.default(lexeme, type, new location_1.Range(start, end));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CommentScanner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYix1Q0FBZ0M7QUFDaEMsb0NBQTRDO0FBQzVDLGlDQUF5QztBQUN6QywwQ0FBOEM7QUFDOUMsMENBQW1DO0FBSW5DLG9CQUFvQyxTQUFRLGlCQUFPO0lBQ2pELFlBQVksTUFBZSxFQUFFLFFBQW1CO1FBQzlDLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUk7UUFDRixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxQixFQUFFLENBQUMsQ0FBQyxlQUFLLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDOztnQkFFRTtZQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxlQUFLLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7WUFDNUMsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQy9FLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEdB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