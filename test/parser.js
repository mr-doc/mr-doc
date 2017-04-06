"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Scanner from '../src/scanner';
const parser_1 = require("../src/parser");
const Node = require("../src/ast");
const FS = require("fs");
const Path = require("path");
const { NodeType } = Node;
function readComment(version, ext) {
    return FS.readFileSync(Path.resolve(__dirname, './fixtures') + `/comments/${version}${ext ? '.' + ext : '.txt'}`, 'utf8');
}
parser_1.default(readComment(6, 'js')).parse();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQXdDO0FBQ3hDLDBDQUFtQztBQUNuQyxtQ0FBbUM7QUFHbkMseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3QixNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBRTFCLHFCQUFxQixPQUFlLEVBQUUsR0FBWTtJQUNoRCxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRyxhQUFhLE9BQU8sR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBRUQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMifQ==