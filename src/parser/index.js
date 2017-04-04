"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Parser_1 = require("./Parser");
const token_1 = require("../token");
const location_1 = require("../location");
const _ = require("lodash");
const node_1 = require("../node");
class CommentParser extends Parser_1.default {
    createNode(flag, kind) {
        return ({ range: new location_1.Range(this.location.start), flag, kind, flagName: node_1.getNodeTypeName(flag) });
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
                range: current.range
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
            if (this.peek(1).type === Identifier) {
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
exports.default = CommentParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUE4QjtBQUM5QixvQ0FBNEM7QUFDNUMsMENBQW1DO0FBQ25DLDRCQUE0QjtBQUU1QixrQ0FnQmlCO0FBRWpCLG1CQUFtQyxTQUFRLGdCQUFNO0lBQ3ZDLFVBQVUsQ0FBQyxJQUFjLEVBQUUsSUFBZTtRQUNoRCxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLGdCQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxzQkFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBQ0QsS0FBSztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNPLFlBQVk7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxpQkFBUyxDQUFDO1FBQ3ZELE1BQU0sUUFBUSxHQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSxRQUFRLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQTtRQUN0QixRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQixR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