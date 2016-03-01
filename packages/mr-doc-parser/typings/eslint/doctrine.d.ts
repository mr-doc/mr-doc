declare module doctrine {
  function parse (comment: string, options?: Option) : any;

  interface Option {
    unwrap?: boolean;
    tags?: string[];
    recoverable?: boolean;
    sloppy?: boolean;
    lineNumbers?: boolean;
  }
}

declare module "doctrine" {
  export = doctrine;
}
