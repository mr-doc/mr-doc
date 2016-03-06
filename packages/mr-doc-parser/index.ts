import IParser = require('./src/interface');
import JavaScript = require('./src/parsers/javascript');
import TypeScript = require('./src/parsers/typescript');
import Option = require('./src/option');
/**
 * Parser
 */
class Parser {
  private config: Option.Parser;
  constructor(config: Option.Parser) {
    this.config = config;
  }

  public factory(): IParser {
    switch (this.config.language) {
      case 'javascript':
        return new JavaScript(this.config);
      case 'typescript':
        return new TypeScript(this.config);
    }
  }
}

export = Parser;
