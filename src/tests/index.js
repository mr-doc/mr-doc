"use strict";
const FS = require("fs");
const scanner_1 = require("../scanner");
const comment = FS.readFileSync(__dirname + '/comment.txt');
const scanner = new scanner_1.default(comment.toString());
console.dir(scanner.scan().stream.map(t => t.lexeme), { depth: null, colors: true });
// describe('CharacterStream', () => {
// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EseUJBQXlCO0FBR3pCLHdDQUF3QztBQUV4QyxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsQ0FBQztBQUM1RCxNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztBQUNwRixzQ0FBc0M7QUFFdEMsTUFBTSJ9