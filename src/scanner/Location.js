"use strict";
var Position = (function () {
    function Position(position, line, column) {
        this.position = position;
        this.line = line;
        this.column = column;
    }
    return Position;
}());
exports.Position = Position;
var Location = (function () {
    function Location(start, end) {
        this.start = start;
        this.end = end;
    }
    return Location;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Location;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9jYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMb2NhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFJRSxrQkFBWSxRQUFnQixFQUFFLElBQVksRUFBRSxNQUFjO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFUWSw0QkFBUTtBQVdyQjtJQUdFLGtCQUFZLEtBQWUsRUFBRSxHQUFhO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQVBELElBT0MifQ==