import { Node } from "./graph/node";
import { Graph } from "./graph";


const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

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
    const resolved: Node[] = []
    Graph.dependency_resolve(x, resolved);
    console.log(resolved.map(node => node.name).join(' '));
});





