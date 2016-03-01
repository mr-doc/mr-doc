declare module Option {
  export interface Parser {
      language?: string;
      version?: string;
      parser?: string;
  }
  export interface File {
    name: string;
    path: string;
    source: string;
  }
}
export = Option;
