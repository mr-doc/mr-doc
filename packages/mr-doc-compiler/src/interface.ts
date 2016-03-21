import Option = require('./option');
interface ICompiler {
 options: Option.Compiler;
 compile(result: any[], path?: string): any;
 compileAsync?(result: any[]): any;
}

export = ICompiler;
