import Parser from './Parser';
import Token, { TokenType, getTokenName } from '../token';
import Node, {
  NodeKind,
  AdvancedComment,
  BasicComment,
  Comment,
  MarkdownComment,
  TypeStatement,
  TypeDeclaration,
  Tag,
  IntersectionType,
  UnionType,
  Identifier
} from '../node';


class CommentParser extends Parser {
  parse(): Node {
    return null;
  }
  private parseComment() {

  }
  private parseSingleComment() {

  }
  private parseDeclaration() {

  }
  private parseTypeDeclaration() {

  }
  private parseInitializer() {

  }
  private parseType() {

  }
  private parseOptionalType() {

  }
  private parseAnyType() {

  }
  private parseUnionType() {

  }
  private parseIntersectionType() {

  }
  private parseArrowFunction() {

  }

  private accept(type?: TokenType) {
    if (type) {
      if (this.current().type === type) {
        this.next();
      } else {
        console.log(`warn: expected a token type of ${getTokenName(type)}`);
      }
    } else { this.next(); }
  }
}