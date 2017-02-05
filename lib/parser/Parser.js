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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BhcnNlci9QYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVNBO0lBRUUsZ0JBQVksTUFBbUI7UUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFDaEQsd0JBQU8sR0FBakIsY0FBNkIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xELHFCQUFJLEdBQWQsY0FBMEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLHlCQUFRLEdBQWxCLGNBQThCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwRCxxQkFBSSxHQUFkLFVBQWUsRUFBVSxJQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsc0JBQUssR0FBZixVQUFnQixJQUFlLEVBQUUsTUFBZTtRQUM5QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNYLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQztRQUM1RCxDQUFDO1FBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFDUyx5QkFBUSxHQUFsQixVQUFtQixPQUFxQjtRQUN0QyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdkMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM3QixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxDQUFDO1FBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNTLHlCQUFRLEdBQWxCLFVBQW1CLE9BQXFCO1FBQ3RDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN2QyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzdCLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDakMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHNCQUFJLHlCQUFLO2FBQVQsY0FBdUIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDbEQsc0JBQUksNEJBQVE7YUFBWixjQUFrQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ3JELGFBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDOztBQUVELGtCQUFlLE1BQU0sQ0FBQyJ9