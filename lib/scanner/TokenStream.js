"use strict";
var TokenStream = (function () {
    function TokenStream(tokens) {
        this.stream = [];
        this._position = 0;
        this.stream = tokens;
    }
    TokenStream.prototype.current = function () { return this.stream[this._position]; };
    TokenStream.prototype.next = function () { return this.stream[this._position++]; };
    TokenStream.prototype.previous = function () { return this.stream[this._position--]; };
    TokenStream.prototype.peek = function (to) { return this.stream[this._position + to]; };
    Object.defineProperty(TokenStream.prototype, "position", {
        get: function () { return this._position; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenStream.prototype, "ended", {
        get: function () { return this._position === this.stream.length; },
        enumerable: true,
        configurable: true
    });
    return TokenStream;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TokenStream;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5TdHJlYW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2Nhbm5lci9Ub2tlblN0cmVhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7SUFHRSxxQkFBWSxNQUFlO1FBRmxCLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFDdEIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQUMsQ0FBQztJQUN0RCw2QkFBTyxHQUFQLGNBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsMEJBQUksR0FBSixjQUFnQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsOEJBQVEsR0FBUixjQUFvQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0QsMEJBQUksR0FBSixVQUFLLEVBQVUsSUFBVyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxzQkFBSSxpQ0FBUTthQUFaLGNBQXlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDakQsc0JBQUksOEJBQUs7YUFBVCxjQUF1QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ3hFLGtCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUMifQ==