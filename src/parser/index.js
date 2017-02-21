"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CommentParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUNBQThCO0FBQzlCLG9DQUE0QztBQUM1QywwQ0FBbUM7QUFDbkMsNEJBQTRCO0FBRTVCLGtDQWdCaUI7QUFFakIsbUJBQW1DLFNBQVEsZ0JBQU07SUFDdkMsVUFBVSxDQUFDLElBQWMsRUFBRSxJQUFlO1FBQ2hELE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksZ0JBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLHNCQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFDRCxLQUFLO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ08sWUFBWTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsTUFBTSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLGlCQUFTLENBQUM7UUFDdkQsTUFBTSxRQUFRLEdBQVksSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xFLFFBQVEsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFBO1FBQ3RCLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDbEQsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNyRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDekMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLGdCQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRSxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFDTyxrQkFBa0I7UUFDeEIsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsaUJBQVMsQ0FBQztRQUMxRSxNQUFNLFFBQVEsR0FBWSxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0QsTUFBTSxjQUFjLEdBQUc7WUFDckIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7Z0JBQ2hDLElBQUksRUFBRSwwQkFBMkI7Z0JBQ2pDLFdBQVcsRUFBRSxPQUFPLENBQUMsTUFBTTtnQkFDM0IsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFpQjtnQkFDL0IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO2FBQ3JCLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDWixDQUFDLENBQUE7UUFFRCxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1QixLQUFLLFdBQVc7Z0JBQ2QsTUFBTSxRQUFRLEdBQUcsY0FBYyxFQUFFLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDZCxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ2xCLEtBQUssR0FBRztnQkFDTixNQUFNLE9BQU8sR0FBZSxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFtQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN0RSxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNkLE9BQU8sQ0FBQyxXQUFXLEdBQUcsY0FBYyxFQUFFLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3pCLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ2pCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxNQUFNLGVBQWUsR0FBb0IsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7b0JBQ3JFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN0QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7d0JBQ2QsT0FBTyxDQUFDLFdBQVcsR0FBRyxjQUFjLEVBQUUsQ0FBQzt3QkFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDM0IsQ0FBQztvQkFDRCxPQUFPLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztnQkFDdEMsQ0FBQztnQkFDRCxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksZ0JBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuRSxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2pCLEtBQUssUUFBUTtnQkFDWCxNQUFNLE1BQU0sR0FBb0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBd0IsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDcEYsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUN4QyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDZCxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2hCO2dCQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaURBQWlELENBQUMsQ0FBQztnQkFDL0QsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLGdCQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDcEUsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNwQixDQUFDO0lBQ0gsQ0FBQztJQUNELDBDQUEwQztJQUMxQywrREFBK0Q7SUFDL0QsdUNBQXVDO0lBQ3ZDLDZFQUE2RTtJQUM3RSxpREFBaUQ7SUFDakQsdUNBQXVDO0lBQ3ZDLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsNkRBQTZEO0lBRTdELE1BQU07SUFDTix5RUFBeUU7SUFDekUscUJBQXFCO0lBQ3JCLElBQUk7SUFDSSxvQkFBb0I7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDL0QsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsaUJBQVMsQ0FBQztRQUNoRixNQUFNLFFBQVEsR0FBb0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBd0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVsRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLEtBQUssS0FBSyxDQUFDO2dCQUNYLEtBQUssS0FBSztvQkFDUixRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDM0MsUUFBUSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQzVCLEtBQUssQ0FBQztnQkFDUixLQUFLLFlBQVk7b0JBQ2YsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztvQkFDeEQsUUFBUSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztvQkFDdkMsUUFBUSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO29CQUV2RCxLQUFLLENBQUM7Z0JBQ1I7b0JBQ0UsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQzNDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO29CQUM1QixLQUFLLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztRQUNELFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxnQkFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEUsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBQ08sY0FBYztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN6RCxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEdBQUcsaUJBQVMsQ0FBQztRQUN4RixNQUFNLFFBQVEsR0FBYyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFrQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRTVFLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDOUMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBQ0QsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLGdCQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRSxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFDTyxzQkFBc0I7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDakUsTUFBTSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxpQkFBUyxDQUFDO1FBQzdFLE1BQU0sUUFBUSxHQUFjLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWtCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFNUUsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzlDLENBQUM7UUFDRCxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksZ0JBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUNPLG9CQUFvQjtRQUMxQixNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEdBQUcsaUJBQVMsQ0FBQztRQUM5RCxNQUFNLFFBQVEsR0FBb0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBd0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRixjQUFjO1FBQ2QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDckMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUNoRCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNkLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzFCLENBQUM7UUFDSCxDQUFDO1FBQUMsSUFBSTtZQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3hDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxnQkFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEUsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBQ08sU0FBUztRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxpQkFBUyxDQUFDO1FBQ3RELE1BQU0sUUFBUSxHQUFTLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTNELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixLQUFLLElBQUk7b0JBQ1AsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3RDLEtBQUssQ0FBQztnQkFDUixLQUFLLFNBQVM7b0JBQ1osUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3RDLEtBQUssQ0FBQztnQkFDUixLQUFLLFNBQVM7b0JBQ1osUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztvQkFDOUMsS0FBSyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7UUFFRCxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksZ0JBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUNPLGNBQWM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDekQsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxpQkFBUyxDQUFDO1FBQ2hDLE1BQU0sUUFBUSxHQUFjLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckUsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLENBQUM7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUM7UUFDRCxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksZ0JBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUNPLHFCQUFxQjtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNoRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxHQUFHLGlCQUFTLENBQUM7UUFDckMsTUFBTSxRQUFRLEdBQXFCLElBQUksQ0FBQyxVQUFVLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkYsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLENBQUM7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUM7UUFDRCxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksZ0JBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUNPLHNCQUFzQjtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNqRSxNQUFNLEVBQ0osVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQ2pDLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQ3hDLEdBQUcsaUJBQVMsQ0FBQztRQUNkLE1BQU0sUUFBUSxHQUFzQixJQUFJLENBQUMsVUFBVSxDQUFDLDBCQUEwQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixLQUFLLEtBQUs7b0JBQ1IsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQzNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN0QixRQUFRLENBQUMsVUFBVSxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUMzQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDNUIsQ0FBQztvQkFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQzt3QkFDekIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUNkLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO29CQUNsRCxDQUFDO29CQUNELEtBQUssQ0FBQztnQkFDUixLQUFLLFlBQVk7b0JBQ2YsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztvQkFDbkQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RCLFFBQVEsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQzNDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUM1QixDQUFDO29CQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO3dCQUN6QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7d0JBQ2QsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQztvQkFDMUQsQ0FBQztvQkFDRCxLQUFLLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksZ0JBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUNGOztBQTdRRCxnQ0E2UUMifQ==