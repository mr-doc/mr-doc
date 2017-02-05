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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWF0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNYXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFDSDtJQUFBO0lBK0JBLENBQUM7SUE5QlEsY0FBUSxHQUFmLFVBQWdCLENBQVM7UUFDdkIsTUFBTSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU0sYUFBTyxHQUFkLFVBQWUsQ0FBUztRQUN0QixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0scUJBQWUsR0FBdEIsVUFBdUIsQ0FBUztRQUM5QixNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSxzQkFBZ0IsR0FBdkIsVUFBd0IsQ0FBUztRQUMvQixNQUFNLENBQUMsa0JBQWtDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTSxzQkFBZ0IsR0FBdkIsVUFBd0IsQ0FBUztRQUMvQixNQUFNLENBQUMsSUFBVSxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ00sa0JBQVksR0FBbkIsVUFBb0IsQ0FBUztRQUMzQixNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sa0JBQVksR0FBbkIsVUFBb0IsQ0FBUztRQUMzQixNQUFNLENBQUMscUJBQWtELENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFTSxhQUFPLEdBQWQsVUFBZSxDQUFTO1FBQ3RCLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUEvQkQsSUErQkMifQ==