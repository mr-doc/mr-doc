"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FS = require("fs");
const Path = require("path");
function read(file, ext) {
    return FS.readFileSync(Path.resolve(__dirname, '../fixtures') + `/comments/${file}${ext ? '.' + ext : '.txt'}`, 'utf8');
}
exports.default = read;
//# sourceMappingURL=read.js.map