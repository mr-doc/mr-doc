"use strict";
const stream_1 = require("../stream");
const location_1 = require("../location");
class Scanner {
    constructor(source, location) {
        this.stream = new stream_1.CharacterStream();
        this.lexeme = [];
        this.tokens = [];
        this.history = [];
        if (source) {
            this.stream = new stream_1.CharacterStream(source);
        }
    }
    /**
     * @param token - Add a token to the token stream.
     * @param restrict - Restrict the addition to history only.
     */
    addToken(token, restrict = false) {
        if (!restrict) {
            this.tokens.push(token);
        }
        this.history.push(token);
    }
    consume(to, array) {
        let i = 0;
        while (i < Math.abs(to)) {
            const s = to < 0 ? this.previous() : this.next();
            if (array) {
                array.push(s);
            }
            i++;
        }
    }
    current() { return this.stream.current(); }
    next() { return this.stream.next(); }
    previous() { return this.stream.previous(); }
    peek(to) { return this.stream.peek(to); }
    get ended() { return this.stream.ended; }
    get previousToken() {
        return this.tokens[this.tokens.length - 1];
    }
    get previousTokenFromHistory() {
        return this.history[this.history.length - 1];
    }
    source(source, location) {
        this.stream.source(source, location);
        this.lexeme = [];
        this.tokens = [];
    }
    get location() {
        let { position, line, column } = this.stream;
        return new location_1.default(position, line, column);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Scanner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Nhbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNjYW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RDtBQUN6RCwwQ0FBOEM7QUFHOUM7SUFLRSxZQUFZLE1BQWUsRUFBRSxRQUFtQjtRQUp4QyxXQUFNLEdBQUcsSUFBSSx3QkFBZSxFQUFFLENBQUM7UUFDN0IsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUN0QixXQUFNLEdBQVksRUFBRSxDQUFDO1FBQ3JCLFlBQU8sR0FBWSxFQUFFLENBQUM7UUFFOUIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSx3QkFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sUUFBUSxDQUFDLEtBQVksRUFBRSxRQUFRLEdBQUcsS0FBSztRQUMvQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNTLE9BQU8sQ0FBQyxFQUFVLEVBQUUsS0FBZ0I7UUFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNqRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxDQUFDO1lBQzdCLENBQUMsRUFBRSxDQUFDO1FBQ04sQ0FBQztJQUNILENBQUM7SUFDUyxPQUFPLEtBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25ELElBQUksS0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0MsUUFBUSxLQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyRCxJQUFJLENBQUMsRUFBVSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0QsSUFBYyxLQUFLLEtBQWMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM1RCxJQUFjLGFBQWE7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELElBQWMsd0JBQXdCO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxNQUFNLENBQUMsTUFBZSxFQUFFLFFBQW1CO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM3QyxNQUFNLENBQUMsSUFBSSxrQkFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNGOztBQUVELGtCQUFlLE9BQU8sQ0FBQyJ9