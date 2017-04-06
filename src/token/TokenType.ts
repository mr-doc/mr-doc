export enum TokenKind {
  None = 0,
  Ampersand,
  Any,
  Arrow,
  Colon,
  Comma,
  Description,
  Equal,
  Identifier,
  Initializer,
  // LeftBrace,
  // LeftBracket,
  LeftParen,
  LineTerminator,
  Markdown,
  Minus,
  NullTerminator,
  Pipe,
  QuestionMark,
  // RightBrace,
  // RightBracket,
  RightParen,
  Tag,
  EOF
}

export function getTokenKind(ch: string): TokenKind {
  return ({
    '&': TokenKind.Ampersand,
    '=>': TokenKind.Arrow,
    ':': TokenKind.Colon,
    ',': TokenKind.Comma,
    '=': TokenKind.Equal,
    '(': TokenKind.LeftParen,
    '-': TokenKind.Minus,
    '|': TokenKind.Pipe,
    '?': TokenKind.QuestionMark,
    ')': TokenKind.RightParen,
    '@': TokenKind.Tag,
    '\n': TokenKind.LineTerminator
  })[ch];
}

export function getTokenName(type: TokenKind): string {
  return ({
    [TokenKind.None]: 'None',
    [TokenKind.Ampersand]: 'Ampersand',
    [TokenKind.Arrow]: 'Arrow',
    [TokenKind.Colon]: 'Colon',
    [TokenKind.Comma]: 'Comma',
    [TokenKind.Description]: 'Description',
    [TokenKind.Equal]: 'Equal',
    [TokenKind.Identifier]: 'Identifier',
    [TokenKind.Initializer]: 'Initializer',
    [TokenKind.LeftParen]: 'LeftParen',
    [TokenKind.Markdown]: 'Markdown',
    [TokenKind.Minus]: 'Minus',
    [TokenKind.NullTerminator]: 'NullTerminator',
    [TokenKind.Pipe]: 'Pipe',
    [TokenKind.QuestionMark]: 'QuestionMark',
    [TokenKind.RightParen]: 'RightParen',
    [TokenKind.Any]: 'Any',
    [TokenKind.Tag]: 'Tag',
    [TokenKind.EOF]: 'EOF'
  })[type];
}

function getTokenCharacter(type: TokenKind): string {
  return ({
    [TokenKind.None]: '',
    [TokenKind.Ampersand]: '&',
    [TokenKind.Arrow]: '=>',
    [TokenKind.Colon]: ':',
    [TokenKind.Comma]: ',',
    [TokenKind.Equal]: '=',
    [TokenKind.LeftParen]: '(',
    [TokenKind.Minus]: '-',
    [TokenKind.Pipe]: '|',
    [TokenKind.QuestionMark]: '?',
    [TokenKind.RightParen]: ')',
    [TokenKind.Tag]: '@'
  })[type];
}

export default TokenKind;