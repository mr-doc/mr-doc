export class Node {
    private _name: string;
    private _edges: Node[];
    constructor(name: string) {
        this._name = name;
        this._edges = [];
    }
    get name() {
        return this._name;
    }
    get edges() {
        return this._edges;
    }
    addEdge(edge: Node) {
        this._edges.push(edge);
    }
}