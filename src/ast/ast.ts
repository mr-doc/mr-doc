
import Token from '../scanner/Token';

export interface Node {
  type: string;
  child:Node;
  sibling: Node;
  readonly token: Token;
}