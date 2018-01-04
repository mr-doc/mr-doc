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
//# sourceMappingURL=expression.js.map