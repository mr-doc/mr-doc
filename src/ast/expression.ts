import { ExpressionVisitor } from "../visitor/index";
import Token from "../token/Token";

export abstract class Expression {
  abstract accept<T>(visitor: ExpressionVisitor<T>): T;
}

export class LiteralExpression implements Expression {
  public value: Token;
  constructor(value: Token) {
    this.value = value;
  }
  public accept<T>(visitor: ExpressionVisitor<T>): T {
    return visitor.visitLiteralExpression(this);
  }
}

export class BinaryExpression implements Expression {
  public left: Expression
  public right: Expression
  constructor(left: Expression, right: Expression) {
    this.left = left;
    this.right = right;
  }  
  public accept<T>(visitor: ExpressionVisitor<T>): T {
    return visitor.visitBinaryExpression(this);
  }
}

export class GroupExpression implements Expression {
  public expression: Expression
  constructor(expression: Expression) {
    this.expression = expression;
  }
  public accept<T>(visitor: ExpressionVisitor<T>) : T {
    return visitor.visitGroupExpression(this);
  }
}

export class UnionExpression implements Expression {
  public expressions: Expression[];
  constructor(expressions: Expression[]) {
    this.expressions = expressions
  }
  public accept<T>(visitor: ExpressionVisitor<T>) : T {
    return visitor.visitUnionExpresson(this);
  }
}

export class IntersectionExpression implements Expression {
  public expressions: Expression[];
  constructor(expressions: Expression[]) {
    this.expressions = expressions;
  }
  public accept<T>(visitor: ExpressionVisitor<T>) : T {
    return visitor.visitIntersectExpression(this);
  }
}