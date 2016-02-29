
/// <reference path="../estree/estree.d.ts" />

declare module escodegen {
  function attachComments(ast:ESTree.Program, comments: any[], tokens: any[]);
  function generate(ast: ESTree.Program, options?: Options): string;
  function getDefaultOptions(): any;
  
  interface Options {
    indent?: {
      style: string;
      base: number;
      adjustMultilineComment: boolean;
    };
    newline?: string;
    space?: string;
    json?: boolean;
    renumber?: boolean;
    hexadecimal?: boolean;
    quotes?: string;
    escapeless?: boolean;
    compact?: boolean;
    parenthesis?: boolean;
    semicolon?: boolean;
    safeConcantenation?: boolean;
    moz?: {
      starlessGenerator: boolean;
      parenthesizedComprehensionBlock: boolean;
      comprehensionExpressionStartsWithAssignment: boolean;
    };
    parse?: any;
    comment?: boolean;
    sourceMap?: any;
    sourceMapRoot?: any;
    sourceMapWithCode?: boolean;
    file?: any;
    sourceContent?: any;
    directive?: boolean;
    verbatim?: any;
  }

}

declare module "escodegen" {
  export = escodegen;
}