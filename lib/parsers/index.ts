import IParser = require('./interface');
import JavaScript = require('./javascript');
import Option = require('../option');
/**
 * Parser
 */
class Parser {
  config: Option.ParserOption;
  constructor(config: Option.ParserOption) {
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