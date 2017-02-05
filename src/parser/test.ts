import CommentScanner from '../scanner';
import CommentParser from './';
import Node from './Node';
import { Comment } from './'

const scanner = new CommentScanner(`
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
`);

const tokens = scanner.scan();
// console.log(tokens);

const parser = new CommentParser(tokens);

const ast = parser.parse();

// console.log(ast);
// function traverse(ast: any) {
//   if (ast.type === "Comment") {
//     ast.comments.forEach(c => traverse(c) && console.log(c));
//   }

//   if (ast.type === "SimpleComment") {
//     console.log(ast.description);
//   }

//   if(ast.type === "ComplexComment") {
//     console.log(ast.description);
//     ast.statements.forEach(s => traverse(s));
//   }

//   if(ast.type === "TypeStatement") {
//     ast.declarations.forEach(d => traverse(d));
//   }

//   if(ast.type === "TypeDeclaration") {
//     console.log(ast);
//   }

//   if(ast.type === "InitializedTypeDeclaration") {
//     console.log(ast);
//   }

//   if(ast.type === "OptionalTypeDeclaration") {
//     console.log(ast);
//   }

// }

// traverse(ast);

console.dir(ast, { depth: null, colors: true });

console.log('Done');