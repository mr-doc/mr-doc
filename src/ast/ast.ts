
import Token from '../scanner/Token';

export interface Node {
  type: string;
  child:Node;
  sibling: Node;
  readonly token: Token;
}

export interface Program extends Node {
  type: "Program";
  body: Statement[]
}

export interface Statement extends Node {

}