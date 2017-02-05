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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWF0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvTWF0Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ0g7SUFBQTtJQStCQSxDQUFDO0lBOUJRLGNBQVEsR0FBZixVQUFnQixDQUFTO1FBQ3ZCLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVNLGFBQU8sR0FBZCxVQUFlLENBQVM7UUFDdEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLHFCQUFlLEdBQXRCLFVBQXVCLENBQVM7UUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sc0JBQWdCLEdBQXZCLFVBQXdCLENBQVM7UUFDL0IsTUFBTSxDQUFDLGtCQUFrQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU0sc0JBQWdCLEdBQXZCLFVBQXdCLENBQVM7UUFDL0IsTUFBTSxDQUFDLElBQVUsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNNLGtCQUFZLEdBQW5CLFVBQW9CLENBQVM7UUFDM0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLGtCQUFZLEdBQW5CLFVBQW9CLENBQVM7UUFDM0IsTUFBTSxDQUFDLHFCQUFrRCxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRU0sYUFBTyxHQUFkLFVBQWUsQ0FBUztRQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDIn0=