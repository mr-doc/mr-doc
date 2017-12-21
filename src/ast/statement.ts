import Token, { TokenKind, getTokenName } from '../token';
import { StatementVisitor } from '../visitor'
import { ParameterDeclaration } from './index';

export abstract class Statement {
  abstract accept<T>(visitor: StatementVisitor<T>): T;
}

export class DescriptionStatement extends Statement {
  public description: Token
  public constructor(description: Token) {
    super();
    this.description = description;
  }
  public accept<T>(visitor: StatementVisitor<T>): T {
    return visitor.visitDescription(this);
  }
}

export class MarkdownStatement extends Statement {
  public markdown: Token;
  constructor(markdown: Token) {
    super();
    this.markdown = markdown;
  }
  public accept<T>(visitor: StatementVisitor<T>): T {
    return visitor.visitMarkdown(this);
  }
}

export class TagStatement extends Statement {
  public tag: Token;
  public description?: DescriptionStatement
  public parameter?: ParameterDeclaration
  constructor(tag: Token, parameter?: ParameterDeclaration, description?: DescriptionStatement) {
    super();
    this.tag = tag;
    this.parameter = parameter;
    this.description = description;
  }
  public accept<T>(visitor: StatementVisitor<T>): T {
    return visitor.visitTagStatement(this);
  }
}