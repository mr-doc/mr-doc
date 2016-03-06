import ICompiler = require('./src/interface');
import Option = require('./src/option');
import JSON = require('./src/compilers/json');
/**
 * Compiler
 */
class Compiler {
  private config: Option.Compiler;
  constructor(config: Option.Compiler) {
    this.config = config;
  }

  public factory(): ICompiler {
    switch (this.config.format) {
      case 'json':
        return (new JSON(this.config));
    }
  }
}
export = Compiler;
