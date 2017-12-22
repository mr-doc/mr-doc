import { DeclarationVisitor } from "../visitor/index";
import Token from "../token/Token";
import { Expression } from "./index";

export abstract class Declaration {
  abstract accept<T>(visitor: DeclarationVisitor<T>): T;
}

export class ParameterDeclaration implements Declaration {
  public optional: boolean;
  public identifier: Token;
  public value: Expression;
  public type: Expression;
  constructor(identifier: Token, value: Expression, type?: Expression, optional: boolean = false) {
    this.identifier = identifier;
    this.value = value;
    this.type = type;
    this.optional = optional
  }
  public accept<T>(visitor: DeclarationVisitor<T>): T {
    return visitor.visitParameter(this);
  }
}