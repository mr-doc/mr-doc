"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exception extends Error {
    constructor(token, message) {
        super(message);
        Error.captureStackTrace(this, Exception.constructor);
        this.token = token;
        // Object.setPrototypeOf(this, Exception.prototype);
    }
}
exports.Exception = Exception;
class ParseException extends Exception {
    constructor(token, message) {
        super(token, message);
        this.name = this.constructor.name;
        this.stack = `(line ${token.location.line}, column ${token.location.column})`;
    }
}
exports.ParseException = ParseException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLGVBQXVCLFNBQVEsS0FBSztJQUVsQyxZQUFZLEtBQVksRUFBRSxPQUFnQjtRQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixvREFBb0Q7SUFDdEQsQ0FBQztDQUNGO0FBUkQsOEJBUUM7QUFFRCxvQkFBNEIsU0FBUSxTQUFTO0lBQzNDLFlBQVksS0FBWSxFQUFFLE9BQWdCO1FBQ3hDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFlBQVksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztJQUNoRixDQUFDO0NBQ0Y7QUFORCx3Q0FNQyJ9