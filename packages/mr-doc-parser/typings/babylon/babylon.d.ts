declare module babylon {
  function parse(code: string, options?: Options): any;

  interface Options {
    allowImportExportEverywhere?: boolean;
    allowReturnOutsideFunction?: boolean;
    allowSuperOutsideMethod?: boolean;
    sourceType?: string;
    plugins?: string[];
  }
}

declare module "babylon" {
    export = babylon
}
