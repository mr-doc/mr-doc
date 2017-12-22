"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Expression {
}
exports.Expression = Expression;
class LiteralExpression {
    constructor(value) {
        this.value = value;
    }
    accept(visitor) {
        return visitor.visitLiteralExpression(this);
    }
}
exports.LiteralExpression = LiteralExpression;
class BinaryExpression {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
    accept(visitor) {
        return visitor.visitBinaryExpression(this);
    }
}
exports.BinaryExpression = BinaryExpression;
class GroupExpression {
    constructor(expression) {
        this.expression = expression;
    }
    accept(visitor) {
        return visitor.visitGroupExpression(this);
    }
}
exports.GroupExpression = GroupExpression;
class UnionExpression {
    constructor(expressions) {
        this.expressions = expressions;
    }
    accept(visitor) {
        return visitor.visitUnionExpresson(this);
    }
}
exports.UnionExpression = UnionExpression;
class IntersectionExpression {
    constructor(expressions) {
        this.expressions = expressions;
    }
    accept(visitor) {
        return visitor.visitIntersectExpression(this);
    }
}
exports.IntersectionExpression = IntersectionExpression;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV4cHJlc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQTtDQUVDO0FBRkQsZ0NBRUM7QUFFRDtJQUVFLFlBQVksS0FBWTtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ00sTUFBTSxDQUFJLE9BQTZCO1FBQzVDLE1BQU0sQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNGO0FBUkQsOENBUUM7QUFFRDtJQUdFLFlBQVksSUFBZ0IsRUFBRSxLQUFpQjtRQUM3QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ00sTUFBTSxDQUFJLE9BQTZCO1FBQzVDLE1BQU0sQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGO0FBVkQsNENBVUM7QUFFRDtJQUVFLFlBQVksVUFBc0I7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUNNLE1BQU0sQ0FBSSxPQUE2QjtRQUM1QyxNQUFNLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDRjtBQVJELDBDQVFDO0FBRUQ7SUFFRSxZQUFZLFdBQXlCO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO0lBQ2hDLENBQUM7SUFDTSxNQUFNLENBQUksT0FBNkI7UUFDNUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0Y7QUFSRCwwQ0FRQztBQUVEO0lBRUUsWUFBWSxXQUF5QjtRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0lBQ00sTUFBTSxDQUFJLE9BQTZCO1FBQzVDLE1BQU0sQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNGO0FBUkQsd0RBUUMifQ==