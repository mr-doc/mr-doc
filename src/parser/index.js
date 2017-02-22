"use strict";
const Parser_1 = require("./Parser");
const token_1 = require("../token");
const location_1 = require("../location");
const _ = require("lodash");
const AST = require("../ast");
const { NodeType, createNode } = AST;
class CommentParser extends Parser_1.default {
    parse() {
        return this.parseComment();
    }
    /**
     * Parses a comment
     * ---
     * Grammar for Comment
     * ```
     * <comment> := <single-comment> (<single-comment>)*
     * ```
     * ---
     * @returns AST.Comment - An ast of the parsed comment.
     */
    parseComment() {
        console.log('started parsing');
        const { Tag, Description, Markdown, None } = token_1.TokenType;
        const rootNode = createNode(1 /* Comment */, None, this.location);
        rootNode.comments = [];
        rootNode.comments.push(this.parseSingleComment());
        while (_.includes([Tag, Description, Markdown], this.current().type)) {
            rootNode.comments.push(this.parseSingleComment());
        }
        console.log('\ninfo: completed parsing');
        rootNode.range = new location_1.Range(rootNode.range.start, this.location.end);
        return rootNode;
    }
    parseSingleComment() {
        const { Minus, Identifier, Tag, Description, Markdown, None } = token_1.TokenType;
        const rootNode = createNode(1 /* Comment */, None, this.location);
        console.log(`In parseSingleComment: ${this.current().name}`);
        const getDescription = () => {
            const descriptionNode = createNode(2 /* DescriptionComment */, Description, this.location);
            descriptionNode.description = this.current().lexeme;
            return this.match(Description) ? descriptionNode : null;
        };
        switch (this.current().type) {
            case Description:
                const descNode = getDescription();
                this.accept();
                return descNode;
            case Tag:
                const tagNode = createNode(3 /* TagComment */, Tag, this.location);
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
                const mdNode = createNode(4 /* MarkdownComment */, Markdown, this.location);
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
    parseFormalParameter() {
        console.log(`In parseFormalParameter: ${this.current().name}`);
        const { Identifier, Equal, Initializer, QuestionMark, Colon, None } = token_1.TokenType;
        const rootNode = createNode(5 /* FormalParameter */, None, this.location);
        if (this.match(Identifier)) {
            switch (this.peek(1).type) {
                case Colon:
                case Equal:
                    rootNode.parameter = this.parseParameter();
                    rootNode.isOptional = false;
                    break;
                case QuestionMark:
                    rootNode.parameter = this.parseOptionalParameter();
                    rootNode.isOptional = true;
                    break;
            }
        }
        rootNode.range = new location_1.Range(rootNode.range.start, this.location.end);
        return rootNode;
    }
    parseParameter() {
        console.log(`In parseParameter: ${this.current().name}`);
        const { Identifier, Colon, LeftParen, RightParen, Any, Equal, Initializer } = token_1.TokenType;
        const rootNode = createNode(6 /* Parameter */, Identifier, this.location);
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
        const rootNode = createNode(6 /* Parameter */, Identifier, this.location);
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
        const rootNode = createNode(8 /* TypeDeclaration */, None, this.location);
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
        const rootNode = createNode(9 /* Type */, Any, this.location);
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
        const rootNode = createNode(10 /* UnionType */, Any, this.location);
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
        const rootNode = createNode(11 /* IntersectionType */, Any, this.location);
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
        const rootNode = createNode(12 /* ArrowFunctionType */, None, this.location);
        rootNode.parameters = [];
        this.accept(LeftParen);
        if (this.match(Identifier)) {
            switch (this.peek(1).type) {
                case Colon:
                    rootNode.parameters.push(this.parseParameter());
                    while (this.match(Comma)) {
                        this.accept();
                        rootNode.parameters.push(this.parseParameter());
                    }
                    break;
                case QuestionMark:
                    rootNode.parameters.push(this.parseOptionalParameter());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUNBQThCO0FBQzlCLG9DQUE0QztBQUM1QywwQ0FBbUM7QUFDbkMsNEJBQTRCO0FBQzVCLDhCQUE4QjtBQUM5QixNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUVyQyxtQkFBbUMsU0FBUSxnQkFBTTtJQUUvQyxLQUFLO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0Q7Ozs7Ozs7OztPQVNHO0lBQ0ssWUFBWTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsTUFBTSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLGlCQUFTLENBQUM7UUFDdkQsTUFBTSxRQUFRLEdBQWdCLFVBQVUsQ0FBQyxlQUFnQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEYsUUFBUSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUE7UUFDdEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUNsRCxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3JFLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN6QyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksZ0JBQUssQ0FBQyxR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