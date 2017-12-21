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