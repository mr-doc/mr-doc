import Parser from './Parser';
import { Node } from '../ast/AST';
import Token from '../scanner/Token';
import { TokenType } from '../scanner/'
/**
 * JSDOC grammer
 * <comment> := <simple comment>
 *            | <complex comment>
 *            | <markdown comment>
 * <simple comment> := <description (terminal)> { <description> }
 * <complex comment> := <type declaration>
 *                    | <type declaration> <minus> <simple comment>
 *                    | <optional type declaration> <minus> <simple comment>
 *                    | <type expression> <minus> <simple comment>
 * <type declaration> := <tag (terminal)> 
 *                     | <tag> <identifier (terminal; note: no starting '_' allowed!>
 *                     | <tag> <identifier> <colon> <reserved (terminal; taken care by scanner)>
 * <optional type declaration> := <type declaration> <question>
 * <type expression> := <type declaration> <equal> <default value (terminal)>
 * <markdown comment> := <triple minus > <markdown (ternminal)> <triple minus>
 * <triple minus> := <minus (terminal)> <minus> < minus>
 */

export default class CommentParser extends Parser {
  private ast: any = {};
  parse(): any {
    this.ast.program = {};
    this.parseSimpleComment();
    this.parseComplexComment();
    this.parseMarkdownComment();
  }
  match(type: TokenType) { return this.current().type === type; }
  expect(type: TokenType): Token {
    if(this.match(type)) {
      return this.next();
    } else { throw new Error('Invalid Syntax'); }
  }
  parseSimpleComment() {
    this.expect(TokenType.Description)
  }
  parseComplexComment() {

  }
  parseMarkdownComment() {

  }
}