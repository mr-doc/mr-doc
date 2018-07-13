"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/tom/index");
var result = index_1.default(`@param x: Number`);
var annotations = result.body().annotations();
parseAnnotations(annotations);
function parseAnnotations(node) {
    console.log(Array.isArray(node.tag()));
}
//# sourceMappingURL=parser.js.map