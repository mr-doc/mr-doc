"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
class Token {
    constructor(lexeme, type, location) {
        this.lexeme = lexeme;
        this.name = _1.getTokenName(type);
        this.type = type;
        this.location = location;
    }
}
exports.default = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUb2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlCQUFrQztBQUdsQztJQVNFLFlBQVksTUFBYyxFQUFFLElBQWUsRUFBRSxRQUFrQjtRQUM3RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLGVBQVksQ0FBQyxJQUFjLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUUzQixDQUFDO0NBQ0Y7QUFoQkQsd0JBZ0JDIn0=