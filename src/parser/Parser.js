"use strict";
const token_1 = require("../token");
class Parser {
    constructor(stream) { this.stream = stream; }
    current() { return this.stream.current(); }
    next() { return this.stream.next(); }
    previous() { return this.stream.previous(); }
    peek(to) { return this.stream.peek(to); }
    match(type, lexeme) {
        let current = this.current();
        if (lexeme) {
            return current.type === type && current.lexeme === lexeme;
        }
        return current.type === type;
    }
    matchAny(matches) {
        let results = [];
        for (let i = 0; i < matches.length; i++) {
            const type = matches[i].type;
            const lexeme = matches[i].lexeme;
            results.push(this.match.apply(this, lexeme ? [type, lexeme] : [type]));
        }
        return results.indexOf(true) > -1;
    }
    matchAll(matches) {
        let results = [];
        for (let i = 0; i < matches.length; i++) {
            const type = matches[i].type;
            const lexeme = matches[i].lexeme;
            results.push(this.match.apply(this, lexeme ? [type, lexeme] : [type]));
        }
        return results.indexOf(false) === 0;
    }
    get ended() {
        return this.stream.ended ||
            this.current().type === token_1.TokenType.NullTerminator;
    }
    accept(type) {
        if (type) {
            if (this.current().type === type) {
                this.next();
            }
            else {
                console.log(`warn: expected a token type of ${token_1.getTokenName(type)}`);
                this.next();
            }
        }
        else {
            this.next();
        }
    }
    get location() { return this.current().range; }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Parser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvQ0FBMEQ7QUFRMUQ7SUFFRSxZQUFZLE1BQW1CLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2hELE9BQU8sS0FBWSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEQsSUFBSSxLQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QyxRQUFRLEtBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BELElBQUksQ0FBQyxFQUFVLElBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxLQUFLLENBQUMsSUFBZSxFQUFFLE1BQWU7UUFDOUMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUM7UUFDNUQsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztJQUMvQixDQUFDO0lBQ1MsUUFBUSxDQUFDLE9BQXFCO1FBQ3RDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN4QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzdCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDakMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ1MsUUFBUSxDQUFDLE9BQXFCO1FBQ3RDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN4QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzdCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDakMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFDdEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksS0FBSyxpQkFBUyxDQUFDLGNBQWMsQ0FBQztJQUNyRCxDQUFDO0lBQ1MsTUFBTSxDQUFDLElBQWdCO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDVCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNkLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxvQkFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2QsQ0FBQztRQUNILENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksUUFBUSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztDQUNoRDs7QUFFRCxrQkFBZSxNQUFNLENBQUMifQ==