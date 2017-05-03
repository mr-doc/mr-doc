"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FS = require("fs");
const Path = require("path");
function read(file, ext) {
    return FS.readFileSync(Path.resolve(__dirname, '../fixtures') + `/comments/${file}${ext ? '.' + ext : '.txt'}`, 'utf8');
}
exports.default = read;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBeUI7QUFDekIsNkJBQTZCO0FBRTdCLGNBQTZCLElBQXFCLEVBQUUsR0FBWTtJQUM5RCxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsR0FBRyxhQUFhLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMxSCxDQUFDO0FBRkQsdUJBRUMifQ==