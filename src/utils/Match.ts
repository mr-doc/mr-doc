/**
 * Match
 */
export default class Match {
  static isLetter(c: string): boolean {
    return 'abcdefghijklmnopqrstuvwxyz'.indexOf(c.toLowerCase()) > -1;
  }

  static isDigit(c: string): boolean {
    return '0123456789'.indexOf(c) > -1;
  }
  
  static isLetterOrDigit(c: string): boolean {
    return Match.isLetter(c) || Match.isDigit(c);
  }

  static isLineTerminator(c: string): boolean {
    return '\u{000A}\u{000D}\u{2028}\u{2029}'.indexOf(c) > -1;
  }
  
  static isNullTerminator(c: string): boolean {
    return '\u{0000}' === c;
  }
  static isTerminator(c: string): boolean {
    return Match.isLineTerminator(c) || Match.isNullTerminator(c);
  }
 
  static isWhiteSpace(c: string): boolean {
    return '\u{0009}\u{000B}\u{000C}\u{0020}\u{00A0}\u{FEFF}'.indexOf(c) > -1;
  }
  
  static isSpace(c: string): boolean {
    return Match.isLineTerminator(c) || Match.isWhiteSpace(c);
  }
}