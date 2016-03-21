declare module Option {
  export interface Parser {
      language?: string;
      version?: string;
      engine?: string;
  }
  export interface File {
    name: string;
    path: string;
    source: string;
    id?: string;
  }
}
export = Option;
