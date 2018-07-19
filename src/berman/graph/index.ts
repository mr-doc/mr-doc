import { Node } from "./node";
export class Graph {

    static dependency_resolve(node: Node, resolved: Node[] = [], unresolved: Node[] = []) {
        // console.log(node.name);
        unresolved.push(node);
        node.edges.forEach(edge => {
            if (!resolved.includes(edge)) {
                if (unresolved.includes(edge)) {
                    throw Error(`Circular reference detected: ${node.name} -> ${edge.name}`)
                }
                Graph.dependency_resolve(edge, resolved, unresolved)
            }
        });
        resolved.push(node);
        unresolved = unresolved.filter(x => x !== node);
    }
}