"use strict";
const Parser_1 = require("./Parser");
const token_1 = require("../token");
const location_1 = require("../location");
const _ = require("lodash");
const ast_1 = require("../ast");
class CommentParser extends Parser_1.default {
    constructor() {
        super(...arguments);
        this.options = {
            flagName: false
        };
    }
    createNode(flag, kind) {
        const node = { range: new location_1.Range(this.location.start), flag, kind };
        return this.options.flagName ? _.merge(node, { flagName: ast_1.getNodeTypeName(flag) }) : node;
    }
    parse() {
        return this.parseComment();
    }
    parseComment() {
        console.log('started parsing');
        const { Tag, Description, Markdown, None } = token_1.TokenType;
        const rootNode = this.createNode(1 /* Comment */, None);
        rootNode.comments = [];
        rootNode.comments.push(this.parseSingleComment());
        while (_.includes([Tag, Description, Markdown], this.current().type)) {
            console.log('...parsing');
            rootNode.comments.push(this.parseSingleComment());
        }
        console.log(`current: ${this.current().name}`);
        console.log('\ninfo: completed parsing');
        rootNode.range = new location_1.Range(rootNode.range.start, this.location.end);
        return rootNode;
    }
    parseSingleComment() {
        const { Minus, Identifier, Tag, Description, Markdown, None } = token_1.TokenType;
        const rootNode = this.createNode(1 /* Comment */, None);
        console.log(`In parseSingleComment: ${this.current().name}`);
        const getDescription = () => {
            const current = this.current();
            return this.match(Description) ? ({
                flag: 2 /* DescriptionComment */,
                description: current.lexeme,
                kind: current.type,
                range: current.range,
                flagName: this.options.flagName ? ast_1.getNodeTypeName(2 /* DescriptionComment */) : undefined
            }) : null;
        };
        switch (this.current().type) {
            case Description:
                const descNode = getDescription();
                this.accept();
                return descNode;
            case Tag:
                const tagNode = this.createNode(3 /* TagComment */, Tag);
                tagNode.tag = this.current().lexeme;
                this.accept();
                if (this.match(Minus)) {
                    this.accept();
                    tagNode.description = getDescription();
                    this.accept(Description);
                    return tagNode;
                }
                else if (this.match(Identifier)) {
                    const formalParamNode = this.parseFormalParameter();
                    if (this.match(Minus)) {
                        this.accept();
                        tagNode.description = getDescription();
                        this.accept(Description);
                    }
                    tagNode.parameter = formalParamNode;
                }
                tagNode.range = new location_1.Range(rootNode.range.start, this.location.end);
                return tagNode;
            case Markdown:
                const mdNode = this.createNode(4 /* MarkdownComment */, Markdown);
                mdNode.markdown = this.current().lexeme;
                mdNode.range = this.current().range;
                this.accept();
                return mdNode;
            default:
                console.log("error: expected a description, tag or markdown.");
                rootNode.range = new location_1.Range(rootNode.range.start, this.location.end);
                return rootNode;
        }
    }
    // private parseParameters(): Parameters {
    //   console.log(`In parseParameters: ${this.current().name}`);
    //   const { Comma, None } = TokenType;
    //   const rootNode: Parameters = this.createNode(NodeType.Parameters, None);
    //   let paramNode = this.parseFormalParameter();
    //   rootNode.parameters = [paramNode];
    //   while (this.match(Comma)) {
    //     this.accept();
    //     rootNode.parameters.push(this.parseFormalParameter());
    //   }
    //   rootNode.range = new Range(rootNode.range.start, this.location.end);
    //   return rootNode;
    // }
    parseFormalParameter() {
        console.log(`In parseFormalParameter: ${this.current().name}`);
        const { Identifier, Equal, Initializer, QuestionMark, Colon, None } = token_1.TokenType;
        const rootNode = this.createNode(5 /* FormalParameter */, None);
        if (this.match(Identifier)) {
            switch (this.peek(1).type) {
                case Colon:
                case Equal:
                    rootNode.parameter = this.parseParameter();
                    rootNode.isOptional = false;
                    break;
                case QuestionMark:
                    const optionalParamNode = this.parseOptionalParameter();
                    rootNode.parameter = optionalParamNode;
                    rootNode.isOptional = optionalParamNode ? true : false;
                    break;
                default:
                    rootNode.parameter = this.parseParameter();
                    rootNode.isOptional = false;
                    break;
            }
        }
        rootNode.range = new location_1.Range(rootNode.range.start, this.location.end);
        return rootNode;
    }
    parseParameter() {
        console.log(`In parseParameter: ${this.current().name}`);
        const { Identifier, Colon, LeftParen, RightParen, Any, Equal, Initializer } = token_1.TokenType;
        const rootNode = this.createNode(6 /* Parameter */, Identifier);
        rootNode.identifier = this.current().lexeme;
        this.accept(Identifier);
        if (this.match(Colon)) {
            rootNode.type = this.parseTypeDeclaration();
        }
        else if (this.match(Equal)) {
            this.accept();
            rootNode.initializer = this.current().lexeme;
            this.accept(Initializer);
        }
        rootNode.range = new location_1.Range(rootNode.range.start, this.location.end);
        return rootNode;
    }
    parseOptionalParameter() {
        console.log(`In parseOptionalParameter: ${this.current().name}`);
        const { Identifier, QuestionMark, LeftParen, RightParen, Colon } = token_1.TokenType;
        const rootNode = this.createNode(6 /* Parameter */, Identifier);
        rootNode.identifier = this.current().lexeme;
        this.accept(Identifier);
        this.accept(QuestionMark);
        if (this.match(Colon)) {
            rootNode.type = this.parseTypeDeclaration();
        }
        rootNode.range = new location_1.Range(rootNode.range.start, this.location.end);
        return rootNode;
    }
    parseTypeDeclaration() {
        const { LeftParen, RightParen, Identifier, None } = token_1.TokenType;
        const rootNode = this.createNode(8 /* TypeDeclaration */, None);
        // Consume ':'
        this.accept();
        if (this.match(LeftParen)) {
            if (this.peek(1).type === Identifier || this.peek(1).type == RightParen) {
                rootNode.type = this.parseArrowFunctionType();
            }
            else {
                this.accept();
                rootNode.type = this.parseType();
                this.accept(RightParen);
            }
        }
        else
            rootNode.type = this.parseType();
        rootNode.range = new location_1.Range(rootNode.range.start, this.location.end);
        return rootNode;
    }
    parseType() {
        console.log(`In parseType: ${this.current().name}`);
        const { Any, Pipe, Ampersand, LeftParen } = token_1.TokenType;
        const rootNode = this.createNode(9 /* Type */, Any);
        if (!_.includes([Pipe, Ampersand, LeftParen], this.peek(1).type)) {
            rootNode.type = this.current().lexeme;
            this.accept(Any);
        }
        else {
            switch (this.peek(1).type) {
                case Pipe:
                    rootNode.type = this.parseUnionType();
                    break;
                case Ampersand:
                    rootNode.type = this.parseUnionType();
                    break;
                case LeftParen:
                    rootNode.type = this.parseArrowFunctionType();
                    break;
            }
        }
        rootNode.range = new location_1.Range(rootNode.range.start, this.location.end);
        return rootNode;
    }
    parseUnionType() {
        console.log(`In parseUnionType: ${this.current().name}`);
        const { Pipe, Any } = token_1.TokenType;
        const rootNode = this.createNode(10 /* UnionType */, Any);
        rootNode.types = [this.current().lexeme];
        this.accept(Any);
        if (this.match(Pipe)) {
            this.accept();
            rootNode.types.push(this.current().lexeme);
            this.accept(Any);
        }
        while (this.match(Pipe)) {
            this.accept();
            if (this.match(Any)) {
                rootNode.types.push(this.current().lexeme);
            }
            this.accept(Any);
        }
        rootNode.range = new location_1.Range(rootNode.range.start, this.location.end);
        return rootNode;
    }
    parseIntersectionType() {
        console.log(`In parseIntersectionType: ${this.current().name}`);
        const { Ampersand, Any } = token_1.TokenType;
        const rootNode = this.createNode(11 /* IntersectionType */, Any);
        rootNode.types = [this.current().lexeme];
        this.accept(Any);
        if (this.match(Ampersand)) {
            this.accept();
            rootNode.types.push(this.current().lexeme);
            this.accept(Any);
        }
        while (this.match(Ampersand)) {
            this.accept();
            if (this.match(Any)) {
                rootNode.types.push(this.current().lexeme);
            }
            this.accept(Any);
        }
        rootNode.range = new location_1.Range(rootNode.range.start, this.location.end);
        return rootNode;
    }
    parseArrowFunctionType() {
        console.log(`In parseArrowFunctionType: ${this.current().name}`);
        const { Identifier, LeftParen, RightParen, Arrow, QuestionMark, Colon, Comma, None } = token_1.TokenType;
        const rootNode = this.createNode(12 /* ArrowFunctionType */, None);
        this.accept(LeftParen);
        if (this.match(Identifier)) {
            switch (this.peek(1).type) {
                case Colon:
                    rootNode.parameter = this.parseParameter();
                    if (this.match(Comma)) {
                        rootNode.parameters = [rootNode.parameter];
                        rootNode.parameter = null;
                    }
                    while (this.match(Comma)) {
                        this.accept();
                        rootNode.parameters.push(this.parseParameter());
                    }
                    break;
                case QuestionMark:
                    rootNode.parameter = this.parseOptionalParameter();
                    if (this.match(Comma)) {
                        rootNode.parameters = [rootNode.parameter];
                        rootNode.parameter = null;
                    }
                    while (this.match(Comma)) {
                        this.accept();
                        rootNode.parameters.push(this.parseOptionalParameter());
                    }
                    break;
            }
        }
        this.accept(RightParen);
        this.accept(Arrow);
        rootNode.type = this.parseType();
        rootNode.range = new location_1.Range(rootNode.range.start, this.location.end);
        return rootNode;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CommentParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUNBQThCO0FBQzlCLG9DQUE0QztBQUM1QywwQ0FBbUM7QUFDbkMsNEJBQTRCO0FBRTVCLGdDQWdCZ0I7QUFFaEIsbUJBQW1DLFNBQVEsZ0JBQU07SUFBakQ7O1FBQ0UsWUFBTyxHQUFHO1lBQ1IsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQTtJQStRSCxDQUFDO0lBOVFTLFVBQVUsQ0FBQyxJQUFjLEVBQUUsSUFBZTtRQUNoRCxNQUFNLElBQUksR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLGdCQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUE7UUFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLHFCQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUMzRixDQUFDO0lBQ0QsS0FBSztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNPLFlBQVk7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxpQkFBUyxDQUFDO1FBQ3ZELE1BQU0sUUFBUSxHQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSxRQUFRLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQTtRQUN0QixRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBQ2xE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