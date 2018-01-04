"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function remove(obj, property) {
    for (let prop in obj) {
        if (prop === property)
            delete obj[prop];
        else if (typeof obj[prop] === 'object')
            remove(obj[prop], property);
    }
}
exports.default = remove;
//# sourceMappingURL=remove.js.map