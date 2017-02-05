import Parser from './Parser';
import Node from './Node';
import Token from '../scanner/Token';
import { TokenType } from '../scanner/'

/**
 * JSDOC grammer
 * <comment>                    := <simple comment> { <comment> }
 *                               | <complex comment> { <comment> }
 *                               | <markdown comment> { <comment> }
 * <simple comment>             := <description (terminal)>
 * <complex comment>            := <type statement>
 *                               | <type statement> <description>
 *                               | <type statement> <minus> <description>
 * <type statement>             := <type declaration>
 *                               | <initialized type declaration>
 *                                    | <optional type declaration>
 * <type declaration>                 := <tag (terminal)> 
 *                                   | <tag> <identifier (terminal; note: no starting '_' allowed!>
 * <initialized type declaration>   := <type declaration> <equal> <initilizer (terminal)>
 * <optional type declaration>  := <type declaration> <question>
 * <markdown comment>           := <triple minus > <markdown (ternminal)> <triple minus>
 * <triple minus>               := <minus (terminal)> <minus> <minus>
 */

export
interface Comment extends Node {
  comments?: Node[]
  description?: string
}

export 
interface SimpleComment extends Comment {

}

export
interface ComplexComment extends Comment {
  statements: Node[]
}

export
interface MarkdownComment extends Comment {
}

export
interface TypeStatement extends Node {
  declarations: Node[]
}

export
interface TypeDeclaration extends Node {
  name?: string
  tag?: string
  specialWord?: string
}

export
interface InitializedTypeDeclaration extends TypeDeclaration {
  initializer?: string
}
export
interface OptionalTypeDeclaration  extends TypeDeclaration {
  
}
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
export default class CommentParser extends Parser {
  // private ast: Node = { type: null, left: null, right: null, token: null };
  parse(): Node {
    return this.parseComment();
  }

  parseComment() {
    const node: Comment = { comments: [], type: "Comment" };
    const start = this.location;
    
    const simple = this.parseSimpleComment();
    const complex = this.parseComplexComment();
    // const markdown = this.parseMarkdownComment();

    if (simple !== null) 
      node.comments.push(simple) && 
      node.comments.push(this.parseComment());
    if (complex !== null)
      node.comments.push(complex) &&
      node.comments.push(this.parseComment());
    // if (markdown) node.comments.push(markdown);
    const end = this.location;

    node.range = [start, end];
    return node;
  }

  parseSimpleComment(): SimpleComment {
    if (this.match(TokenType.Description)) {
      const node: SimpleComment = { type: "SimpleComment", comments: [] };
      const start = this.location;
      node.description = this.next().lexeme;
      const end = this.location;
      node.range = [start, end];
      return node;
    }
    return null;
  }

  parseComplexComment(): ComplexComment {
    const node: ComplexComment = { type: "ComplexComment", statements: [] }
    const start = this.location;

    const ts = this.parseTypeStatement();
    if (ts !== null) {
      node.statements.push(ts);
      if (this.matchAny([
        { type: TokenType.Minus },
        { type: TokenType.Description }
      ])) {
        let token = this.next();
        token = token.lexeme === '-' ? this.next() : token;
        node.description = token.lexeme;
        const end = this.location;
        node.range = [start, end];
        return node;
      }
      const end = this.location;
      node.range = [start, end];
      return node;
    }
    return null;
  }
  parseTypeStatement(): TypeStatement {
    const node: TypeStatement = { type: "TypeStatement", declarations: [] };
    const start = this.location;
    const td = this.parseTypeDeclaration();
    const itd = this.parseInitializedTypeDeclaration();
    if (td !== null) node.declarations.push(td);
    if (itd !== null) node.declarations.push(itd);
    return (td !== null || itd !== null) ? node : null;
  }
/**
 *  <type declaration> := <tag (terminal)> 
 *                     | <tag> <identifier (terminal; note: no starting '_' allowed!> { <colon> <special word> }
 */
  parseTypeDeclaration(): TypeDeclaration {
    const node: TypeDeclaration = { type: "TypeDeclaration" }
    const start = this.location;
    if (this.match(TokenType.Tag)) {
      let token = this.next();
      node.tag = token.lexeme;
      if (this.match(TokenType.Identifier)) {
        token = this.next();
        node.name = token.lexeme;

        if(this.match(TokenType.QuestionMark)) {
          this.next();
          node.type = "OptionalTypeDeclaration";
        }

        if(this.match(TokenType.Colon)) {
          this.next();
          if (this.match(TokenType.SpecialWord)) {
            node.specialWord = this.next().lexeme;
            const end = this.location;
            node.range = [start, end];
            return node;
          }
        }

        const end = this.location;
        node.range = [start, end];
        return node;
      }
      const end = this.location;
      node.range = [start, end];
      return node;
    }
    return null;
  }
/**
 * <initialized type declaration> := <type declaration> <equal> <initilizer (terminal)>
 */
  parseInitializedTypeDeclaration(): InitializedTypeDeclaration {
    const node: InitializedTypeDeclaration = { type: "InitializedTypeDeclaration" }
    const td = this.parseTypeDeclaration();
    const start = this.location;
    if (td !== null) {
      node.tag = td.tag;
      node.name = td.name;
      if (this.match(TokenType.Equal)) {
        this.next();
        if (this.match(TokenType.Initializer)) {
          node.initializer = this.next().lexeme;
          const end = this.location;
          node.range = [start, end];
          return node;
        }
      }
      return td;
    }
    return null;
  }
}



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