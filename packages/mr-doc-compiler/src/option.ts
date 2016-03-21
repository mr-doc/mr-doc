declare module Option {
 export interface Compiler {
  file?: {
    name: string,
    format: string
  };
  template?: {
    path: string,
    engine: string
  };
 }
}

export = Option;
