declare module traverse {
  export default;
  function traverse(parent: Object | Array<Object>, opts?: Object, scope?: Object, state: Object, parentPath: Object): any;
}

declare module "babel-traverse" {
  export = traverse;
}
