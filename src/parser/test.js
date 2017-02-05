"use strict";
var scanner_1 = require("../scanner");
var _1 = require("./");
var scanner = new scanner_1.default("\n  * Returns an Image object that can then be painted on the screen. \n * The url argument must specify an absolute {@link URL}. The name\n * argument is a specifier that is relative to the url argument. \n * This method always returns immediately, whether or not the \n * image exists. When this applet attempts to draw the image on\n * the screen, the data will be loaded. The graphics primitives \n * that draw the image will incrementally paint on the screen. \n *\n * @param  url  an absolute URL giving the base location of the image\n * @param  name the location of the image, relative to the url argument\n * @return      the image at the specified URL\n * @see         Image\n");
var tokens = scanner.scan();
// console.log(tokens);
var parser = new _1.default(tokens);
var ast = parser.parse();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQUN4Qyx1QkFBK0I7QUFJL0IsSUFBTSxPQUFPLEdBQUcsSUFBSSxpQkFBYyxDQUFDLGdyQkFhbEMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzlCLHVCQUF1QjtBQUV2QixJQUFNLE1BQU0sR0FBRyxJQUFJLFVBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUV6QyxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFM0Isb0JBQW9CO0FBQ3BCLGdDQUFnQztBQUNoQyxrQ0FBa0M7QUFDbEMsZ0VBQWdFO0FBQ2hFLE1BQU07QUFFTix3Q0FBd0M7QUFDeEMsb0NBQW9DO0FBQ3BDLE1BQU07QUFFTix3Q0FBd0M7QUFDeEMsb0NBQW9DO0FBQ3BDLGdEQUFnRDtBQUNoRCxNQUFNO0FBRU4sdUNBQXVDO0FBQ3ZDLGtEQUFrRDtBQUNsRCxNQUFNO0FBRU4seUNBQXlDO0FBQ3pDLHdCQUF3QjtBQUN4QixNQUFNO0FBRU4sb0RBQW9EO0FBQ3BELHdCQUF3QjtBQUN4QixNQUFNO0FBRU4saURBQWlEO0FBQ2pELHdCQUF3QjtBQUN4QixNQUFNO0FBRU4sSUFBSTtBQUVKLGlCQUFpQjtBQUVqQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFFaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyJ9