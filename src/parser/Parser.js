"use strict";
var Parser = (function () {
    function Parser(stream) {
        this.stream = stream;
    }
    Parser.prototype.current = function () { return this.stream.current(); };
    Parser.prototype.next = function () { return this.stream.next(); };
    Parser.prototype.previous = function () { return this.stream.previous(); };
    Parser.prototype.peek = function (to) { return this.stream.peek(to); };
    Parser.prototype.match = function (type, lexeme) {
        var current = this.current();
        if (lexeme) {
            return current.type === type && current.lexeme === lexeme;
        }
        return current.type === type;
    };
    Parser.prototype.matchAny = function (matches) {
        var results = [];
        for (var i = 0; i < matches.length; i++) {
            var type = matches[i].type;
            var lexeme = matches[i].lexeme;
            results.push(this.match.apply(this, lexeme ? [type, lexeme] : [type]));
        }
        return results.indexOf(true) > -1;
    };
    Parser.prototype.matchAll = function (matches) {
        var results = [];
        for (var i = 0; i < matches.length; i++) {
            var type = matches[i].type;
            var lexeme = matches[i].lexeme;
            results.push(this.match.apply(this, lexeme ? [type, lexeme] : [type]));
        }
        return results.indexOf(false) === 0;
    };
    Object.defineProperty(Parser.prototype, "ended", {
        get: function () { return this.stream.ended; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parser.prototype, "location", {
        get: function () { return this.current().location; },
        enumerable: true,
        configurable: true
    });
    return Parser;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Parser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFTQTtJQUVFLGdCQUFZLE1BQW1CO1FBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFBQyxDQUFDO0lBQ2hELHdCQUFPLEdBQWpCLGNBQTZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsRCxxQkFBSSxHQUFkLGNBQTBCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1Qyx5QkFBUSxHQUFsQixjQUE4QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEQscUJBQUksR0FBZCxVQUFlLEVBQVUsSUFBVyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELHNCQUFLLEdBQWYsVUFBZ0IsSUFBZSxFQUFFLE1BQWU7UUFDOUMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUM7UUFDNUQsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztJQUMvQixDQUFDO0lBQ1MseUJBQVEsR0FBbEIsVUFBbUIsT0FBcUI7UUFDdEMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3ZDLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDN0IsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNqQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDUyx5QkFBUSxHQUFsQixVQUFtQixPQUFxQjtRQUN0QyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdkMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM3QixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxDQUFDO1FBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxzQkFBSSx5QkFBSzthQUFULGNBQXVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ2xELHNCQUFJLDRCQUFRO2FBQVosY0FBa0IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNyRCxhQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQzs7QUFFRCxrQkFBZSxNQUFNLENBQUMifQ==