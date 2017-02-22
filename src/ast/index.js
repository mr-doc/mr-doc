"use strict";
const _ = require("lodash");
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
function createNode(flag, kind, range) {
    const node = { range: new location_1.Range(range.start), flag, kind, flagName: getNodeTypeName(flag) };
    return node;
}
exports.createNode = createNode;
/**
 * Traverses an AST
 * Credits to https://github.com/olov/ast-traverse
 * @returns Node[]  - A flattened tree
 */
function traverse(root, visitor) {
    const leaves = [];
    const visit = (node, parent, property, index) => {
        if (_.isUndefined(node))
            return;
        if (visitor && visitor.pre)
            visitor.pre(node, parent, property, index);
        if (_.isObject(node)) {
            for (const prop in node) {
                let child = node[prop];
                if (_.isArray(child)) {
                    for (let i = 0; i < child.length; i++) {
                        if (_.isPlainObject(child[i])) {
                            leaves.push(child[i]);
                            visit(child[i], node, prop, i);
                        }
                    }
                }
                else if (_.isPlainObject(child)) {
                    leaves.push(child);
                    visit(child, node, prop);
                }
            }
        }
        if (visitor && visitor.post)
            visitor.post(node, parent, property, index);
    };
    leaves.push(root);
    visit(root);
    return leaves;
}
exports.traverse = traverse;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEJBQTRCO0FBRTVCLDBDQUE4QztBQWtCOUMseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFFekIseUJBQWdDLElBQWM7SUFDNUMsTUFBTSxDQUFDLENBQUM7UUFDTixDQUFDLFlBQWEsQ0FBQyxFQUFFLE1BQU07UUFDdkIsQ0FBQyxlQUFnQixDQUFDLEVBQUUsU0FBUztRQUM3QixDQUFDLDBCQUEyQixDQUFDLEVBQUUsb0JBQW9CO1FBQ25ELENBQUMsa0JBQW1CLENBQUMsRUFBRSxZQUFZO1FBQ25DLENBQUMsdUJBQXdCLENBQUMsRUFBRSxpQkFBaUI7UUFDN0MsQ0FBQyx1QkFBd0IsQ0FBQyxFQUFFLGlCQUFpQjtRQUM3QyxDQUFDLGlCQUFrQixDQUFDLEVBQUUsV0FBVztRQUNqQyxDQUFDLHlCQUEwQixDQUFDLEVBQUUsbUJBQW1CO1FBQ2pELENBQUMsdUJBQXdCLENBQUMsRUFBRSxpQkFBaUI7UUFDN0MsQ0FBQyxZQUFhLENBQUMsRUFBRSxNQUFNO1FBQ3ZCLENBQUMsa0JBQWtCLENBQUMsRUFBRSxXQUFXO1FBQ2pDLENBQUMseUJBQXlCLENBQUMsRUFBRSxrQkFBa0I7UUFDL0MsQ0FBQywwQkFBMEIsQ0FBQyxFQUFFLG1CQUFtQjtLQUNsRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDWCxDQUFDO0FBaEJELDBDQWdCQztBQW1FRCxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUVwQixvQkFBMkIsSUFBYyxFQUFFLElBQWUsRUFBRSxLQUFZO0lBQ3RFLE1BQU0sSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksZ0JBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUE7SUFDM0YsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNkLENBQUM7QUFIRCxnQ0FHQztBQUdEOzs7O0dBSUc7QUFDSCxrQkFBeUIsSUFBSSxFQUFFLE9BQTJDO0lBQ3hFLE1BQU0sTUFBTSxHQUFXLEVBQUUsQ0FBQztJQUUxQixNQUFNLEtBQUssR0FBRyxDQUFDLElBQVUsRUFBRSxNQUFPLEVBQUUsUUFBUyxFQUFFLEtBQWM7UUFDM0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUNoQyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQ3RDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBOzRCQUNyQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ2pDLENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbkIsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzNCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzRSxDQUFDLENBQUE7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQTNCRCw0QkEyQkM7QUFBQSxDQUFDIn0=