"use strict";
var CharacterStream_1 = require("./CharacterStream");
var Location_1 = require("./Location");
var Scanner = (function () {
    function Scanner(source) {
        this.lexeme = [];
        this.tokens = [];
        this.source = new CharacterStream_1.default(source);
    }
    Object.defineProperty(Scanner.prototype, "position", {
        get: function () {
            var _a = this.source, position = _a.position, line = _a.line, column = _a.column;
            return new Location_1.Position(position, line, column);
        },
        enumerable: true,
        configurable: true
    });
    Scanner.prototype.consume = function (to, array) {
        var i = 0;
        while (i < Math.abs(to)) {
            var s = to < 0 ? this.previous() : this.next();
            if (array) {
                array.push(s);
            }
            i++;
        }
    };
    Scanner.prototype.current = function () { return this.source.current(); };
    Scanner.prototype.next = function () { return this.source.next(); };
    Scanner.prototype.previous = function () { return this.source.previous(); };
    Scanner.prototype.peek = function (to) { return this.source.peek(to); };
    Object.defineProperty(Scanner.prototype, "ended", {
        get: function () { return this.source.ended; },
        enumerable: true,
        configurable: true
    });
    return Scanner;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Scanner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Nhbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2FubmVyL1NjYW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFEQUFnRDtBQUNoRCx1Q0FBZ0Q7QUFJaEQ7SUFJRSxpQkFBWSxNQUFjO1FBRmhCLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFDdEIsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSx5QkFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQUMsQ0FBQztJQUUxRSxzQkFBYyw2QkFBUTthQUF0QjtZQUNNLElBQUEsZ0JBQXdDLEVBQXRDLHNCQUFRLEVBQUUsY0FBSSxFQUFFLGtCQUFNLENBQWlCO1lBQzdDLE1BQU0sQ0FBQyxJQUFJLG1CQUFRLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QyxDQUFDOzs7T0FBQTtJQUNTLHlCQUFPLEdBQWpCLFVBQWtCLEVBQVUsRUFBRSxLQUFnQjtRQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixPQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDdkIsSUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLENBQUM7WUFDN0IsQ0FBQyxFQUFFLENBQUM7UUFDTixDQUFDO0lBQ0gsQ0FBQztJQUNTLHlCQUFPLEdBQWpCLGNBQThCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRCxzQkFBSSxHQUFkLGNBQTJCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QywwQkFBUSxHQUFsQixjQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckQsc0JBQUksR0FBZCxVQUFlLEVBQVUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELHNCQUFjLDBCQUFLO2FBQW5CLGNBQWlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQzlELGNBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDOztBQUdELGtCQUFlLE9BQU8sQ0FBQyJ9