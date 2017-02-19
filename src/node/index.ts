import Token, { TokenType } from '../token';
import Range from '../location';

export
  const enum NodeKind {
  None = 0,
  Comment = 2 << 1,
  SimpleComment = 2 << 2,
  ComplexComment = 2 << 3,
  MarkdownComment = 2 << 4,
  TypeStatement = 2 << 5,
  TypeDeclaration = 2 << 6,
}


interface Node {
  kind: TokenType,
  flags: NodeKind
  statements?: Node[];
  range?: Range | [Range, Range]
}

export
  interface Comment extends Node {
  comments?: Node[]
  description?: string
}

export
  interface BasicComment extends Comment {

}

export
  interface AdvancedComment extends Comment {
  statements: Node[]
}

export
  interface MarkdownComment extends Comment {
}

export
  interface TypeStatement extends Node {
  declarations: Node[]
}

export
  interface TypeDeclaration extends Node {
  name?: string
  tag?: Tag
  types: Node[]
}

export
  interface VariableDeclaration extends Node {

}

export
  interface Tag extends Node {
  text: string
}

export
  interface Identifier extends Node {

}

export
  interface SpecialWord extends Node {
  text: string
}

export
  interface UnionType extends Node {
  types: SpecialWord[]
}

export
  interface IntersectionType extends Node {
    types: SpecialWord[]
}


export default Node;