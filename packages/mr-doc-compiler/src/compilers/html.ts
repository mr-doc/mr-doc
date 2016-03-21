import ICompiler = require('../interface');
import Option = require('../option');
import Promise = require('bluebird');

class HTML implements ICompiler {
  public options: Option.Compiler;
  constructor (options: Option.Compiler) {
    this.options = options;
  }
  public compile (result: any[], path?: string) {

  }

  public compileAsync(result: any[], path?: string) {

  }
}

export = HTML;
