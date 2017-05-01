"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../token");
const location_1 = require("../location");
// ----------------------
// -- NodeType Helpers --
// ----------------------
function getNodeTypeName(flag) {
    return ({
        [0 /* None */]: "None",
        [1 /* Comment */]: "Comment",
        [2 /* DescriptionComment */]: "DescriptionComment",
        [3 /* TagComment */]: "TagComment",
        [4 /* MarkdownComment */]: "MarkdownComment",
        [5 /* FormalParameter */]: "FormalParameter",
        [6 /* Parameter */]: "Parameter",
        [7 /* OptionalParameter */]: "OptionalParameter",
        [8 /* TypeDeclaration */]: "TypeDeclaration",
        [9 /* Type */]: "Type",
        [10 /* UnionType */]: "UnionType",
        [11 /* IntersectionType */]: "IntersectionType",
        [12 /* ArrowFunctionType */]: "ArrowFunctionType"
    })[flag];
}
exports.getNodeTypeName = getNodeTypeName;
// -----------------
// -- AST Helpers --
// -----------------
function createNode(flag, kind, start) {
    const node = { range: new location_1.Range(start), flag, kind, flagName: getNodeTypeName(flag), kindName: token_1.getTokenName(kind) };
    return node;
}
exports.createNode = createNode;
function endNode(node, end) {
    node.range = new location_1.Range(node.range.start, end);
    return node;
}
exports.endNode = endNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG9DQUEwRDtBQUMxRCwwQ0FBOEM7QUFrQjlDLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekIseUJBQXlCO0FBRXpCLHlCQUFnQyxJQUFjO0lBQzVDLE1BQU0sQ0FBQyxDQUFDO1FBQ04sQ0FBQyxZQUFhLENBQUMsRUFBRSxNQUFNO1FBQ3ZCLENBQUMsZUFBZ0IsQ0FBQyxFQUFFLFNBQVM7UUFDN0IsQ0FBQywwQkFBMkIsQ0FBQyxFQUFFLG9CQUFvQjtRQUNuRCxDQUFDLGtCQUFtQixDQUFDLEVBQUUsWUFBWTtRQUNuQyxDQUFDLHVCQUF3QixDQUFDLEVBQUUsaUJBQWlCO1FBQzdDLENBQUMsdUJBQXdCLENBQUMsRUFBRSxpQkFBaUI7UUFDN0MsQ0FBQyxpQkFBa0IsQ0FBQyxFQUFFLFdBQVc7UUFDakMsQ0FBQyx5QkFBMEIsQ0FBQyxFQUFFLG1CQUFtQjtRQUNqRCxDQUFDLHVCQUF3QixDQUFDLEVBQUUsaUJBQWlCO1FBQzdDLENBQUMsWUFBYSxDQUFDLEVBQUUsTUFBTTtRQUN2QixDQUFDLGtCQUFrQixDQUFDLEVBQUUsV0FBVztRQUNqQyxDQUFDLHlCQUF5QixDQUFDLEVBQUUsa0JBQWtCO1FBQy9DLENBQUMsMEJBQTBCLENBQUMsRUFBRSxtQkFBbUI7S0FDbEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQWhCRCwwQ0FnQkM7QUEwRUQsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFFcEIsb0JBQTJCLElBQWMsRUFBRSxJQUFlLEVBQUUsS0FBZTtJQUN6RSxNQUFNLElBQUksR0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLGdCQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxvQkFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUE7SUFDekgsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNkLENBQUM7QUFIRCxnQ0FHQztBQUVELGlCQUF3QixJQUFVLEVBQUUsR0FBYTtJQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksZ0JBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUhELDBCQUdDIn0=