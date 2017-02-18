"use strict";
const _1 = require('./');
class Token {
    constructor(lexeme, type, range) {
        this.lexeme = lexeme;
        this.name = _1.getTokenName(type);
        this.type = type;
        this.range = range;
        this.location = range.start;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUb2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsbUJBQTZCLElBQUksQ0FBQyxDQUFBO0FBR2xDO0lBTUUsWUFBWSxNQUFjLEVBQUUsSUFBZSxFQUFFLEtBQVk7UUFDdkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFZLENBQUMsSUFBYyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzlCLENBQUM7QUFDSCxDQUFDO0FBYkQ7dUJBYUMsQ0FBQSJ9