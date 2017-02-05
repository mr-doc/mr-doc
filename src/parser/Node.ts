
import Token from '../scanner/Token';
import Location from '../scanner/Location';

export type NodeType = string | number;

interface Node {
  type: NodeType;
  statements?: Node[];
  range?: [Location, Location]
}

export default Node;