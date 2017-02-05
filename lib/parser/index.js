"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Parser_1 = require("./Parser");
var _1 = require("../scanner/");
/**
 * Returns an Image object that can then be painted on the screen.
 * The url argument must specify an absolute {@link URL}. The name
 * argument is a specifier that is relative to the url argument.
 * This method always returns immediately, whether or not the
 * image exists. When this applet attempts to draw the image on
 * the screen, the data will be loaded. The graphics primitives
 * that draw the image will incrementally paint on the screen.
 *
 * @param  url  an absolute URL giving the base location of the image
 * @param  name the location of the image, relative to the url argument
 * @return      the image at the specified URL
 * @see         Image
 */
var CommentParser = (function (_super) {
    __extends(CommentParser, _super);
    function CommentParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // private ast: Node = { type: null, left: null, right: null, token: null };
    CommentParser.prototype.parse = function () {
        return this.parseComment();
    };
    CommentParser.prototype.parseComment = function () {
        var node = { comments: [], type: "Comment" };
        var start = this.location;
        var simple = this.parseSimpleComment();
        var complex = this.parseComplexComment();
        // const markdown = this.parseMarkdownComment();
        if (simple !== null)
            node.comments.push(simple) &&
                node.comments.push(this.parseComment());
        if (complex !== null)
            node.comments.push(complex) &&
                node.comments.push(this.parseComment());
        // if (markdown) node.comments.push(markdown);
        var end = this.location;
        node.range = [start, end];
        return node;
    };
    CommentParser.prototype.parseSimpleComment = function () {
        if (this.match(_1.TokenType.Description)) {
            var node = { type: "SimpleComment", comments: [] };
            var start = this.location;
            node.description = this.next().lexeme;
            var end = this.location;
            node.range = [start, end];
            return node;
        }
        return null;
    };
    CommentParser.prototype.parseComplexComment = function () {
        var node = { type: "ComplexComment", statements: [] };
        var start = this.location;
        var ts = this.parseTypeStatement();
        if (ts !== null) {
            node.statements.push(ts);
            if (this.matchAny([
                { type: _1.TokenType.Minus },
                { type: _1.TokenType.Description }
            ])) {
                var token = this.next();
                token = token.lexeme === '-' ? this.next() : token;
                node.description = token.lexeme;
                var end_1 = this.location;
                node.range = [start, end_1];
                return node;
            }
            var end = this.location;
            node.range = [start, end];
            return node;
        }
        return null;
    };
    CommentParser.prototype.parseTypeStatement = function () {
        var node = { type: "TypeStatement", declarations: [] };
        var start = this.location;
        var td = this.parseTypeDeclaration();
        var itd = this.parseInitializedTypeDeclaration();
        if (td !== null)
            node.declarations.push(td);
        if (td !== null)
            node.declarations.push(itd);
        return node;
    };
    /**
     *  <type declaration> := <tag (terminal)>
     *                     | <tag> <identifier (terminal; note: no starting '_' allowed!> { <colon> <special word> }
     */
    CommentParser.prototype.parseTypeDeclaration = function () {
        var node = { type: "TypeDeclaration" };
        var start = this.location;
        if (this.match(_1.TokenType.Tag)) {
            var token = this.next();
            node.tag = token.lexeme;
            if (this.match(_1.TokenType.Identifier)) {
                token = this.next();
                node.name = token.lexeme;
                if (this.match(_1.TokenType.QuestionMark)) {
                    this.next();
                    node.type = "OptionalTypeDeclaration";
                }
                if (this.match(_1.TokenType.Colon)) {
                    this.next();
                    if (this.match(_1.TokenType.SpecialWord)) {
                        node.specialWord = this.next().lexeme;
                        var end_2 = this.location;
                        node.range = [start, end_2];
                        return node;
                    }
                }
                var end_3 = this.location;
                node.range = [start, end_3];
                return node;
            }
            var end = this.location;
            node.range = [start, end];
            return node;
        }
        return null;
    };
    /**
     * <initialized type declaration> := <type declaration> <equal> <initilizer (terminal)>
     */
    CommentParser.prototype.parseInitializedTypeDeclaration = function () {
        var node = { type: "InitializedTypeDeclaration" };
        var td = this.parseTypeDeclaration();
        var start = this.location;
        if (td !== null) {
            node.tag = td.tag;
            node.name = td.name;
            if (this.match(_1.TokenType.Equal)) {
                this.next();
                if (this.match(_1.TokenType.Initializer)) {
                    node.initializer = this.next().lexeme;
                    var end = this.location;
                    node.range = [start, end];
                    return node;
                }
            }
            return td;
        }
        return null;
    };
    return CommentParser;
}(Parser_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CommentParser;
/**
 * JSDOC grammer
 * <comment>                    := <simple comment> { <comment> }
 *                               | <complex comment> { <comment> }
 *                               | <markdown comment> { <comment> }
 *
 * <simple comment>             := <description (terminal)>
 *
 * <complex comment>            := <type statement>
 *                               | <type statement> <description>
 *                               | <type statement> <minus> <description>
 *
 * <type statement>             := <type declaration>
 *                               | <initialized type declaration>
 *
 * <type declaration>                 := <tag (terminal)>
 *                                   | <tag> <identifier (terminal; note: no starting '_' allowed!> {<question>} { <colon> <special word> }
 *
 * <initialized type declaration>   := <type declaration> <equal> <initilizer (terminal)>
 *
 * <markdown comment>           := <triple minus > <markdown (ternminal)> <triple minus>
 * <triple minus>               := <minus (terminal)> <minus> <minus>
 */ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGFyc2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1DQUE4QjtBQUc5QixnQ0FBdUM7QUFnRXZDOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSDtJQUEyQyxpQ0FBTTtJQUFqRDs7SUFzSUEsQ0FBQztJQXJJQyw0RUFBNEU7SUFDNUUsNkJBQUssR0FBTDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDRSxJQUFNLElBQUksR0FBWSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDO1FBQ3hELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFNUIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDekMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0MsZ0RBQWdEO1FBRWhELEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUMxQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDMUMsOENBQThDO1FBQzlDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFMUIsSUFBSSxDQUFDLEtBQUss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