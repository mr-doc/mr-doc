"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Match
 */
class Match {
    static isLetter(c) {
        return 'abcdefghijklmnopqrstuvwxyz'.indexOf(c.toLowerCase()) > -1;
    }
    static isDigit(c) {
        return '0123456789'.indexOf(c) > -1;
    }
    static isLetterOrDigit(c) {
        return Match.isLetter(c) || Match.isDigit(c);
    }
    static isCarriageReturn(c) {
        return '\u{000D}' === c;
    }
    static isLineFeed(c) {
        return '\u{000A}' === c;
    }
    static isLineTerminator(c) {
        return '\u{000A}\u{000D}\u{2028}\u{2029}'.indexOf(c) > -1;
    }
    static isNullTerminator(c) {
        return '\u{0000}'.indexOf(c) > -1;
    }
    static isTerminator(c) {
        return Match.isLineTerminator(c) || Match.isNullTerminator(c);
    }
    // https://en.wikipedia.org/wiki/Whitespace_character
    static isWhiteSpace(c) {
        return '\u{0009}\u{000A}\u{000B}\u{000C}\u{000D}\u{0020}'.indexOf(c) > -1 ||
            '\u{0085}\u{00A0}\u{1680}\u{2000}\u{2001}\u{2002}'.indexOf(c) > -1 ||
            '\u{2003}\u{2004}\u{2005}\u{2006}\u{2007}\u{2008}'.indexOf(c) > -1 ||
            '\u{2009}\u{200A}\u{2028}\u{2029}\u{202F}\u{205F}'.indexOf(c) > -1 ||
            '\u{3000}\u{FEFF}'.indexOf(c) > -1;
    }
    static isSpace(c) {
        return Match.isTerminator(c) || Match.isWhiteSpace(c);
    }
}
exports.default = Match;
//# sourceMappingURL=Match.js.map