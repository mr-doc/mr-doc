const enum TokenType {
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
  // LineTerminator,
  Markdown,
  Minus,
  NullTerminator,
  Pipe,
  QuestionMark,
  // RightBrace,
  // RightBracket,
  RightParen,
  Tag
}

export function getTokenType(ch: string): TokenType {
  return ({
    '&': TokenType.Ampersand,
    '=>': TokenType.Arrow,
    ':': TokenType.Colon,
    ',': TokenType.Comma,
    '=': TokenType.Equal,
    '(': TokenType.LeftParen,
    '-': TokenType.Minus,
    '|': TokenType.Pipe,
    '?': TokenType.QuestionMark,
    ')': TokenType.RightParen,
    '@': TokenType.Tag
  })[ch];
}

export function getTokenName(type: TokenType): string {
  return ({
    [TokenType.None]: 'None',
    [TokenType.Ampersand]: 'Ampersand',
    [TokenType.Arrow]: 'Arrow',
    [TokenType.Colon]: 'Colon',
    [TokenType.Comma]: 'Comma',
    [TokenType.Description]: 'Description',
    [TokenType.Equal]: 'Equal',
    [TokenType.Identifier]: 'Identifier',
    [TokenType.Initializer]: 'Initializer',
    [TokenType.LeftParen]: 'LeftParen',
    [TokenType.Markdown]: 'Markdown',
    [TokenType.Minus]: 'Minus',
    [TokenType.NullTerminator]: 'NullTerminator',
    [TokenType.Pipe]: 'Pipe',
    [TokenType.QuestionMark]: 'QuestionMark',
    [TokenType.RightParen]: 'RightParen',
    [TokenType.Any]: 'Any',
    [TokenType.Tag]: 'Tag'
  })[type];
}

function getTokenCharacter(type: TokenType): string {
  return ({
    [TokenType.None]: '',
    [TokenType.Ampersand]: '&',
    [TokenType.Arrow]: '=>',
    [TokenType.Colon]: ':',
    [TokenType.Comma]: ',',
    [TokenType.Equal]: '=',
    [TokenType.LeftParen]: '(',
    [TokenType.Minus]: '-',
    [TokenType.Pipe]: '|',
    [TokenType.QuestionMark]: '?',
    [TokenType.RightParen]: ')',
    [TokenType.Tag]: '@'
  })[type];
}

export default TokenType;