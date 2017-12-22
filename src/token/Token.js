"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
class Token {
    constructor(lexeme, type, location) {
        this.lexeme = lexeme;
        this.name = _1.getTokenName(type);
        this.kind = type;
        this.location = location;
    }
}
exports.Token = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUb2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlCQUE2QztBQUU3QztJQU1FLFlBQVksTUFBYyxFQUFFLElBQWUsRUFBRSxRQUFrQjtRQUM3RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLGVBQVksQ0FBQyxJQUFjLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUFaRCxzQkFZQyJ9