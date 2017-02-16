import Parser from './Parser';
import Token, { TokenType } from '../token';
import Node, { 
  NodeKind,
  Comment,
  SimpleComment,
  ComplexComment,
  MarkdownComment,
  TypeStatement,
  TypeDeclaration,
  Tag,
  IntersectionType,
  UnionType,
  Identifier
} from '../node';



// export default class CommentParser extends Parser {
//   // private ast: Node = { type: null, left: null, right: null, token: null };
//   parse(): Node {
//     return this.parseComment();
//   }

//   parseComment(): Comment {
//     const node: Comment = { type: NodeKind.Comment, comments: [], flags: TokenType.None };
//     const start = this.location;

//     const simple = this.parseSimpleComment();
//     const complex = this.parseComplexComment();
//     // const markdown = this.parseMarkdownComment();

//     if (simple !== null)
//       node.comments.push(simple)
//     if (complex !== null)
//       node.comments.push(complex)
//     // if (markdown) node.comments.push(markdown);
//     const end = this.location;

//     node.range = [start, end];

//     return node;
//   }

//   parseSimpleComment(): SimpleComment {
//     if (this.match(TokenType.Description)) {
//       const node: SimpleComment = { type: "SimpleComment", comments: [], };
//       const start = this.location;
//       while (this.current().type === TokenType.Description)
//         node.description += this.next().lexeme;
//       const end = this.location;
//       node.range = [start, end];
//       return node;
//     }
//     return null;
//   }

//   parseComplexComment(): ComplexComment {
//     const node: ComplexComment = { type: "ComplexComment", statements: [] }
//     const start = this.location;

//     const ts = this.parseTypeStatement();
//     if (ts !== null) {
//       node.statements.push(ts);
//       if (this.matchAny([
//         { type: TokenType.Minus },
//         { type: TokenType.Description }
//       ])) {
//         let token = this.next();
//         token = token.lexeme === '-' ? this.next() : token;
//         node.description = token.lexeme;
//         const end = this.location;
//         node.range = [start, end];
//         return node;
//       }
//       const end = this.location;
//       node.range = [start, end];
//       return node;
//     }
//     return null;
//   }
//   parseTypeStatement(): TypeStatement {
//     const node: TypeStatement = { type: "TypeStatement", declarations: [] };
//     const start = this.location;
//     const td = this.parseTypeDeclaration();
//     const itd = this.parseInitializedTypeDeclaration();
//     if (td !== null) node.declarations.push(td);
//     if (itd !== null) node.declarations.push(itd);
//     return (td !== null || itd !== null) ? node : null;
//   }
//   /**
//    *  <type declaration> := <tag (terminal)> 
//    *                     | <tag> <identifier (terminal; note: no starting '_' allowed!> { <colon> <special word> }
//    */
//   parseTypeDeclaration(): TypeDeclaration {
//     const node: TypeDeclaration = { kind: NodeKind.TypeDeclaration }
//     const start = this.location;
//     if (this.match(TokenType.Tag)) {
//       let token = this.next();
//       let tagNode: Tag = { text: token.lexeme, range: [token.range.start, token.range.end]} 
//       node.tag = { text: token.lexeme, }
//       if (this.match(TokenType.Identifier)) {
//         token = this.next();
//         node.name = token.lexeme;

//         if (this.match(TokenType.QuestionMark)) {
//           this.next();
//           node.type = "OptionalTypeDeclaration";
//         }

//         if (this.match(TokenType.Colon)) {
//           this.next();
//           if (this.match(TokenType.SpecialWord)) {
//             node.specialWord = this.next().lexeme;
//             const end = this.location;
//             node.range = [start, end];
//             return node;
//           }
//         }

//         const end = this.location;
//         node.range = [start, end];
//         return node;
//       }
//       const end = this.location;
//       node.range = [start, end];
//       return node;
//     }
//     return null;
//   }
//   /**
//    * <initialized type declaration> := <type declaration> <equal> <initilizer (terminal)>
//    */
//   parseInitializedTypeDeclaration(): InitializedTypeDeclaration {
//     const node: InitializedTypeDeclaration = { type: "InitializedTypeDeclaration" }
//     const td = this.parseTypeDeclaration();
//     const start = this.location;
//     if (td !== null) {
//       node.tag = td.tag;
//       node.name = td.name;
//       if (this.match(TokenType.Equal)) {
//         this.next();
//         if (this.match(TokenType.Initializer)) {
//           node.initializer = this.next().lexeme;
//           const end = this.location;
//           node.range = [start, end];
//           return node;
//         }
//       }
//       return td;
//     }
//     return null;
//   }
// }

/**
 * JSDOC grammer
 * <comment>                    := <simple comment> | <complex comment> | <markdown comment> { <comment> }
 * 
 * <simple comment>             := <description (terminal)>
 * 
 * <complex comment>            := <type statement>
 *                               | <type statement> <description>
 *                               | <type statement> <minus> <description>
 * 
 * <type statement>             := <type expression>
 *                               | <type declaration> 
 * 
 * <type declaration> := <tag (terminal)> 
 *                     | <tag> <variable declaration>
 * <variable declaration> := <identifier (terminal)>
 *                        | 
 * 
 * <markdown comment>           := <triple minus > <markdown (ternminal)> <triple minus>
 * <triple minus>               := <minus (terminal)> <minus> <minus>
 */

//

/**
 * @method something
 * @param fn:(name: string) => string - a method that returns a string
 */
function something(fn: (name: string) => string) {
  return fn("Hello");
}