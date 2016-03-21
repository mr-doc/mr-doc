import ICompiler = require('./src/interface');
import Option = require('./src/option');
import JSON = require('./src/compilers/json');
import HTML = require('./src/compilers/html');
/**
 * Compiler
 */
class Compiler {
  private options: Option.Compiler;
  constructor(options: Option.Compiler) {
    this.options = options;
  }

  public factory(): ICompiler {
    switch (this.options.file.format) {
      case 'json':
        return (new JSON(this.options));
      case 'html':
        return (new HTML(this.options));
    }
  }
}
export = Compiler;
