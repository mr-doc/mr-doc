import IParser = require('./src/interface');
import JavaScript = require('./src/parsers/javascript');
import Option = require('./src/option');
/**
 * Parser
 */
class Parser {
  config: Option.Parser;
  constructor(config: Option.Parser) {
    this.config = config;
  }

  factory(): IParser {
    switch (this.config.language) {
      case 'javascript':
        return new JavaScript(this.config.version, this.config.parser);
    }
  }
}

export = Parser;
