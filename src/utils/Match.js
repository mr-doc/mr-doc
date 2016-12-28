"use strict";
/**
 * Match
 */
var Match = (function () {
    function Match() {
    }
    Match.isLetter = function (c) {
        return 'abcdefghijklmnopqrstuvwxyz'.indexOf(c.toLowerCase()) > -1;
    };
    Match.isDigit = function (c) {
        return '0123456789'.indexOf(c) > -1;
    };
    Match.isLetterOrDigit = function (c) {
        return Match.isLetter(c) || Match.isDigit(c);
    };
    Match.isLineTerminator = function (c) {
        return "\n\r\u2028\u2029".indexOf(c) > -1;
    };
    Match.isNullTerminator = function (c) {
        return "\0" === c;
    };
    Match.isTerminator = function (c) {
        return Match.isLineTerminator(c) || Match.isNullTerminator(c);
    };
    Match.isWhiteSpace = function (c) {
        return "\t\v\f \u00A0\uFEFF".indexOf(c) > -1;
    };
    Match.isSpace = function (c) {
        return Match.isLineTerminator(c) || Match.isWhiteSpace(c);
    };
    return Match;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Match;
//# sourceMappingURL=Match.js.map