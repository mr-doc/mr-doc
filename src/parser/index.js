"use strict";
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
function something(fn) {
    return fn("Hello");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBa0JBLHNEQUFzRDtBQUN0RCxpRkFBaUY7QUFDakYsb0JBQW9CO0FBQ3BCLGtDQUFrQztBQUNsQyxNQUFNO0FBRU4sOEJBQThCO0FBQzlCLDZGQUE2RjtBQUM3RixtQ0FBbUM7QUFFbkMsZ0RBQWdEO0FBQ2hELGtEQUFrRDtBQUNsRCx1REFBdUQ7QUFFdkQsMkJBQTJCO0FBQzNCLG1DQUFtQztBQUNuQyw0QkFBNEI7QUFDNUIsb0NBQW9DO0FBQ3BDLHFEQUFxRDtBQUNyRCxpQ0FBaUM7QUFFakMsaUNBQWlDO0FBRWpDLG1CQUFtQjtBQUNuQixNQUFNO0FBRU4sMENBQTBDO0FBQzFDLCtDQUErQztBQUMvQyw4RUFBOEU7QUFDOUUscUNBQXFDO0FBQ3JDLDhEQUE4RDtBQUM5RCxrREFBa0Q7QUFDbEQsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxxQkFBcUI7QUFDckIsUUFBUTtBQUNSLG1CQUFtQjtBQUNuQixNQUFNO0FBRU4sNENBQTRDO0FBQzVDLDhFQUE4RTtBQUM5RSxtQ0FBbUM7QUFFbkMsNENBQTRDO0FBQzVDLHlCQUF5QjtBQUN6QixrQ0FBa0M7QUFDbEMsNEJBQTRCO0FBQzVCLHFDQUFxQztBQUNyQywwQ0FBMEM7QUFDMUMsY0FBYztBQUNkLG1DQUFtQztBQUNuQyw4REFBOEQ7QUFDOUQsMkNBQTJDO0FBQzNDLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckMsdUJBQXVCO0FBQ3ZCLFVBQVU7QUFDVixtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLHFCQUFxQjtBQUNyQixRQUFRO0FBQ1IsbUJBQW1CO0FBQ25CLE1BQU07QUFDTiwwQ0FBMEM7QUFDMUMsK0VBQStFO0FBQy9FLG1DQUFtQztBQUNuQyw4Q0FBOEM7QUFDOUMsMERBQTBEO0FBQzFELG1EQUFtRDtBQUNuRCxxREFBcUQ7QUFDckQsMERBQTBEO0FBQzFELE1BQU07QUFDTixRQUFRO0FBQ1IsZ0RBQWdEO0FBQ2hELHFIQUFxSDtBQUNySCxRQUFRO0FBQ1IsOENBQThDO0FBQzlDLHVFQUF1RTtBQUN2RSxtQ0FBbUM7QUFDbkMsdUNBQXVDO0FBQ3ZDLGlDQUFpQztBQUNqQywrRkFBK0Y7QUFDL0YsMkNBQTJDO0FBQzNDLGdEQUFnRDtBQUNoRCwrQkFBK0I7QUFDL0Isb0NBQW9DO0FBRXBDLG9EQUFvRDtBQUNwRCx5QkFBeUI7QUFDekIsbURBQW1EO0FBQ25ELFlBQVk7QUFFWiw2Q0FBNkM7QUFDN0MseUJBQXlCO0FBQ3pCLHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQseUNBQXlDO0FBQ3pDLHlDQUF5QztBQUN6QywyQkFBMkI7QUFDM0IsY0FBYztBQUNkLFlBQVk7QUFFWixxQ0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLHVCQUF1QjtBQUN2QixVQUFVO0FBQ1YsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxxQkFBcUI7QUFDckIsUUFBUTtBQUNSLG1CQUFtQjtBQUNuQixNQUFNO0FBQ04sUUFBUTtBQUNSLDRGQUE0RjtBQUM1RixRQUFRO0FBQ1Isb0VBQW9FO0FBQ3BFLHNGQUFzRjtBQUN0Riw4Q0FBOEM7QUFDOUMsbUNBQW1DO0FBQ25DLHlCQUF5QjtBQUN6QiwyQkFBMkI7QUFDM0IsNkJBQTZCO0FBQzdCLDJDQUEyQztBQUMzQyx1QkFBdUI7QUFDdkIsbURBQW1EO0FBQ25ELG1EQUFtRDtBQUNuRCx1Q0FBdUM7QUFDdkMsdUNBQXVDO0FBQ3ZDLHlCQUF5QjtBQUN6QixZQUFZO0FBQ1osVUFBVTtBQUNWLG1CQUFtQjtBQUNuQixRQUFRO0FBQ1IsbUJBQW1CO0FBQ25CLE1BQU07QUFDTixJQUFJO0FBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBRUgsRUFBRTtBQUVGOzs7R0FHRztBQUNILG1CQUFtQixFQUE0QjtJQUM3QyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JCLENBQUMifQ==