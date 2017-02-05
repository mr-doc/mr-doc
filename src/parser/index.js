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
        if (itd !== null)
            node.declarations.push(itd);
        return (td !== null || itd !== null) ? node : null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBOEI7QUFHOUIsZ0NBQXVDO0FBOER2Qzs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0g7SUFBMkMsaUNBQU07SUFBakQ7O0lBc0lBLENBQUM7SUFySUMsNEVBQTRFO0lBQzVFLDZCQUFLLEdBQUw7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0UsSUFBTSxJQUFJLEdBQVksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUN4RCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRTVCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3pDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNDLGdEQUFnRDtRQUVoRCxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDMUMsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLDhDQUE4QztRQUM5QyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRTFCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEVB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