"use strict";
const Parser_1 = require("./Parser");
const token_1 = require("../token");
const _ = require("lodash");
function test(id) {
}
class CommentParser extends Parser_1.default {
    parse() {
        return this.parseComment();
    }
    parseComment() {
        console.log('started parsing');
        const { Tag, Description, Markdown } = token_1.TokenType;
        this.parseSingleComment();
        console.log(`current: ${this.current().name}`);
        while (_.includes([Tag, Description, Markdown], this.current().type)) {
            console.log('...parsing');
            this.parseSingleComment();
            console.log(`current: ${this.current().name}`);
        }
        console.log('\ninfo: completed parsing');
        return;
    }
    parseSingleComment() {
        console.log(`In parseSingleComment: ${this.current().name}`);
        const { Minus, Identifier, Tag, Description, Markdown } = token_1.TokenType;
        switch (this.current().type) {
            case Description:
                this.accept();
                break;
            case Tag:
                this.accept();
                if (this.current().type === Minus) {
                    this.accept();
                    this.accept(Description);
                }
                else if (this.current().type === Identifier) {
                    this.parseParameters();
                    if (this.current().type === Minus) {
                        this.accept();
                        this.accept(Description);
                    }
                }
                break;
            case Markdown:
                this.accept();
                break;
            default:
                console.log("error: expected a description, tag or markdown.");
                return;
        }
    }
    parseParameters() {
        console.log(`In parseParameters: ${this.current().name}`);
        this.parseFormalParameter();
        while (this.current().type === token_1.TokenType.Comma) {
            this.accept();
            this.parseFormalParameter();
        }
        return;
    }
    parseFormalParameter() {
        console.log(`In parseFormalParameter: ${this.current().name}`);
        const { Identifier, Equal, Initializer, QuestionMark, Colon } = token_1.TokenType;
        if (this.current().type === Identifier) {
            switch (this.peek(1).type) {
                case Colon:
                    this.parseParameter();
                    if (this.current().type === Equal) {
                        this.accept(Equal);
                        this.accept(Initializer);
                    }
                    break;
                case QuestionMark:
                    this.parseOptionalParameter();
                    break;
            }
        }
        return;
    }
    parseParameter() {
        console.log(`In parseParameter: ${this.current().name}`);
        const { Identifier, Colon, LeftParen, RightParen, Any } = token_1.TokenType;
        this.accept(Identifier);
        if (this.current().type === Colon) {
            this.accept();
            if (this.current().type === LeftParen) {
                if (this.peek(1).type === Identifier) {
                    this.parseArrowFunctionType();
                }
                else {
                    this.accept();
                    this.parseType();
                    this.accept(RightParen);
                }
            }
            else
                this.parseType();
        }
        return;
    }
    parseOptionalParameter() {
        console.log(`In parseOptionalParameter: ${this.current().name}`);
        const { Identifier, QuestionMark, LeftParen, RightParen, Colon } = token_1.TokenType;
        this.accept(Identifier);
        this.accept(QuestionMark);
        if (this.current().type === Colon) {
            this.accept();
            if (this.current().type === LeftParen) {
                this.accept();
                this.parseType();
                this.accept(RightParen);
            }
        }
        return;
    }
    parseType() {
        console.log(`In parseType: ${this.current().name}`);
        const { Any, Pipe, Ampersand, LeftParen } = token_1.TokenType;
        this.accept(Any);
        switch (this.current().type) {
            case Pipe:
                this.parseUnionType();
                break;
            case Ampersand:
                this.parseUnionType();
                break;
            case LeftParen:
                this.parseArrowFunctionType();
                break;
        }
        return;
    }
    parseUnionType() {
        console.log(`In parseUnionType: ${this.current().name}`);
        const { Pipe, Any } = token_1.TokenType;
        this.accept(Pipe);
        this.accept(Any);
        while (this.current().type === Pipe) {
            this.parseUnionType();
        }
        return;
    }
    parseIntersectionType() {
        console.log(`In parseIntersectionType: ${this.current().name}`);
        const { Ampersand, Any } = token_1.TokenType;
        this.accept(Ampersand);
        this.accept(Any);
        while (this.current().type === Ampersand) {
            this.parseUnionType();
        }
        return;
    }
    parseArrowFunctionType() {
        console.log(`In parseArrowFunctionType: ${this.current().name}`);
        const { Identifier, LeftParen, RightParen, Arrow, QuestionMark, Colon, Comma } = token_1.TokenType;
        this.accept(LeftParen);
        if (this.current().type === Identifier) {
            switch (this.peek(1).type) {
                case Colon:
                    this.parseParameter();
                    while (this.current().type === Comma) {
                        this.accept();
                        this.parseParameter();
                    }
                    break;
                case QuestionMark:
                    this.parseOptionalParameter();
                    while (this.current().type === Comma) {
                        this.accept();
                        this.parseOptionalParameter();
                    }
                    break;
            }
        }
        this.accept(RightParen);
        this.accept(Arrow);
        this.parseType();
        return;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CommentParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUNBQThCO0FBQzlCLG9DQUE0QztBQUM1Qyw0QkFBNEI7QUFpQjVCLGNBQWMsRUFBaUQ7QUFFL0QsQ0FBQztBQUVELG1CQUFtQyxTQUFRLGdCQUFNO0lBRS9DLEtBQUs7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDTyxZQUFZO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQixNQUFNLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsR0FBRyxpQkFBUyxDQUFDO1FBQ2pELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUUvQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFFekMsTUFBTSxDQUFDO0lBQ1QsQ0FBQztJQUNPLGtCQUFrQjtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMs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