"use strict";
const _ = require("lodash");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEJBQTRCO0FBZTVCLHlCQUFnQyxJQUFjO0lBQzVDLE1BQU0sQ0FBQyxDQUFDO1FBQ04sQ0FBQyxZQUFhLENBQUMsRUFBRSxNQUFNO1FBQ3ZCLENBQUMsZUFBZ0IsQ0FBQyxFQUFFLFNBQVM7UUFDN0IsQ0FBQywwQkFBMkIsQ0FBQyxFQUFFLG9CQUFvQjtRQUNuRCxDQUFDLGtCQUFtQixDQUFDLEVBQUUsWUFBWTtRQUNuQyxDQUFDLHVCQUF3QixDQUFDLEVBQUUsaUJBQWlCO1FBQzdDLENBQUMsdUJBQXdCLENBQUMsRUFBRSxpQkFBaUI7UUFDN0MsQ0FBQyxpQkFBa0IsQ0FBQyxFQUFFLFdBQVc7UUFDakMsQ0FBQyx5QkFBMEIsQ0FBQyxFQUFFLG1CQUFtQjtRQUNqRCxDQUFDLHVCQUF3QixDQUFDLEVBQUUsaUJBQWlCO1FBQzdDLENBQUMsWUFBYSxDQUFDLEVBQUUsTUFBTTtRQUN2QixDQUFDLGtCQUFrQixDQUFDLEVBQUUsV0FBVztRQUNqQyxDQUFDLHlCQUF5QixDQUFDLEVBQUUsa0JBQWtCO1FBQy9DLENBQUMsMEJBQTBCLENBQUMsRUFBRSxtQkFBbUI7S0FDbEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQWhCRCwwQ0FnQkM7QUF1RUQ7Ozs7R0FJRztBQUNILGtCQUF5QixJQUFJLEVBQUUsT0FBMkM7SUFDeEUsTUFBTSxNQUFNLEdBQVcsRUFBRSxDQUFDO0lBRTFCLE1BQU0sS0FBSyxHQUFHLENBQUMsSUFBVSxFQUFFLE1BQU8sRUFBRSxRQUFTLEVBQUUsS0FBYztRQUMzRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2RSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDdEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7NEJBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDakMsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuQixLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNFLENBQUMsQ0FBQTtJQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBM0JELDRCQTJCQztBQUFBLENBQUMifQ==