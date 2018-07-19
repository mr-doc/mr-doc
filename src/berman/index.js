"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("./graph/node");
const graph_1 = require("./graph");
const a = new node_1.Node('a');
const b = new node_1.Node('b');
const c = new node_1.Node('c');
const d = new node_1.Node('d');
const e = new node_1.Node('e');
// a depends on b
a.addEdge(b);
// a depends on d
a.addEdge(d);
// b depends on c
b.addEdge(c);
// b depends on e
b.addEdge(e);
// c depends on d
c.addEdge(d);
// c depends on e
c.addEdge(e);
// d depends on b (circular)
// d.addEdge(b);
[a, b, c, d, e].forEach(x => {
    console.log(x.name + ':');
    const resolved = [];
    graph_1.Graph.dependency_resolve(x, resolved);
    console.log(resolved.map(node => node.name).join(' '));
});
//# sourceMappingURL=index.js.map