"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQXNCQSx5QkFBZ0MsSUFBYztJQUM1QyxNQUFNLENBQUMsQ0FBQztRQUNOLENBQUMsWUFBYSxDQUFDLEVBQUUsTUFBTTtRQUN2QixDQUFDLGVBQWdCLENBQUMsRUFBRSxTQUFTO1FBQzdCLENBQUMsMEJBQTJCLENBQUMsRUFBRSxvQkFBb0I7UUFDbkQsQ0FBQyxrQkFBbUIsQ0FBQyxFQUFFLFlBQVk7UUFDbkMsQ0FBQyx1QkFBd0IsQ0FBQyxFQUFFLGlCQUFpQjtRQUM3QyxDQUFDLHVCQUF3QixDQUFDLEVBQUUsaUJBQWlCO1FBQzdDLENBQUMsaUJBQWtCLENBQUMsRUFBRSxXQUFXO1FBQ2pDLENBQUMseUJBQTBCLENBQUMsRUFBRSxtQkFBbUI7UUFDakQsQ0FBQyx1QkFBd0IsQ0FBQyxFQUFFLGlCQUFpQjtRQUM3QyxDQUFDLFlBQWEsQ0FBQyxFQUFFLE1BQU07UUFDdkIsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLFdBQVc7UUFDakMsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLGtCQUFrQjtRQUMvQyxDQUFDLDBCQUEwQixDQUFDLEVBQUUsbUJBQW1CO0tBQ2xELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNYLENBQUM7QUFoQkQsMENBZ0JDIn0=