"use strict";
const scanner_1 = require("../scanner");
const scanner = new scanner_1.default(`
 * Returns an Image object that can then be painted on the screen. 
 * The url argument must specify an absolute {@link URL}. The name
 * argument is a specifier that is relative to the url argument. 
 * This method always returns immediately, whether or not the 
 * image exists. When this applet attempts to draw the image on
 * the screen, the data will be loaded. The graphics primitives 
 * that draw the image will incrementally paint on the screen. 
 *
 * @param  [mydata?: someday]  an absolute URL giving the base location of the image
 * @param  [name: string | number] the location of the image, relative to the url argument
 * @return      the image at the specified URL
 * @see         Image
`.trim());
const tokens = scanner.scan();
console.dir(tokens, { depth: null, colors: true });
// const parser = new CommentParser(tokens);
// const ast = parser.parse();
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
// console.dir(ast, { depth: null, colors: true });
// console.log('Done'); 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdDQUF3QztBQUl4QyxNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFjLENBQUM7Ozs7Ozs7Ozs7Ozs7Q0FhbEMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRVYsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUVuRCw0Q0FBNEM7QUFFNUMsOEJBQThCO0FBRTlCLG9CQUFvQjtBQUNwQixnQ0FBZ0M7QUFDaEMsa0NBQWtDO0FBQ2xDLGdFQUFnRTtBQUNoRSxNQUFNO0FBRU4sd0NBQXdDO0FBQ3hDLG9DQUFvQztBQUNwQyxNQUFNO0FBRU4sd0NBQXdDO0FBQ3hDLG9DQUFvQztBQUNwQyxnREFBZ0Q7QUFDaEQsTUFBTTtBQUVOLHVDQUF1QztBQUN2QyxrREFBa0Q7QUFDbEQsTUFBTTtBQUVOLHlDQUF5QztBQUN6Qyx3QkFBd0I7QUFDeEIsTUFBTTtBQUVOLG9EQUFvRDtBQUNwRCx3QkFBd0I7QUFDeEIsTUFBTTtBQUVOLGlEQUFpRDtBQUNqRCx3QkFBd0I7QUFDeEIsTUFBTTtBQUVOLElBQUk7QUFFSixpQkFBaUI7QUFFakIsbURBQW1EO0FBRW5ELHVCQUF1QiJ9