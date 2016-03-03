import Option = require('./option');
interface ICompiler {
 format?: string;
 template?: string;
 compile(result: any[], path?:string) : any;
 compileAsync?(result: any[]): any;
}

export = ICompiler;
