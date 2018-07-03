"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(name) {
        this._name = name;
        this._edges = [];
    }
    get name() {
        return this._name;
    }
    get edges() {
        return this._edges;
    }
    addEdge(edge) {
        this._edges.push(edge);
    }
}
exports.Node = Node;
//# sourceMappingURL=node.js.map