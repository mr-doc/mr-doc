'use strict';

import Symbol from './symbol';
import _ from 'lodash';
import path from 'path';
import Dir from './dir';
import dox from 'dox';
import File from 'fs-extra';
import 'source-map-support/register';

/**
 * The class that parses the dox tags.
 * @class Parser
 */
class Parser {
  constructor(options) {
      if (options) {
        this.options = options;
        this.start();
      }
    }
    /**
     * Starts the parser.
     */
  start() {
      var {
        source, extension, blacklist
      } = this.options;
      // Parse the files
      this.files = Parser.parse(source, extension, blacklist);
    }
    /**
     * Parses the source
     * @param  {String|Array} source    The source(s) to parse
     * @param  {String} extension The file extension
     * @param  {Array} ignore    The files to ignore
     * @return {Array}           The parsed files
     */
  static parse(source, extension, ignore) {
    if (_.isArray(source)) {
      return source.map(doc => {
        var targetName = doc.name + '.' + extension;
        if (!doc.targetName) doc.targetName = targetName;
        doc.symbols = Symbol.structure(doc.dox, doc.targetName);
        return doc;
      });
    } else {
      source = path.resolve(process.cwd(), source);
      let files = Dir.collectFiles(source, {
        ignore
      });
      return files.map(file => {
        var dox = Parser.parseComments(path.join(source, file));
        var targetName = file + '.' + extension;
        return {
          name: file.replace(/\\/g, '/'),
          targetName: targetName.replace(/\\/g, '/'),
          dox,
          symbols: Symbol.structure(dox, targetName)
        };
      });
    }
  }

  /**
   * Parses the source's comments using dox.
   * @param {string} filepath The path to the source 
   * @return {object} Returns a JSON representation of the tags as an array
   * @jsFiddle https://jsfiddle.net/iwatakeshi/8hc50sbc/embedded/
   */
  static parseComments(filepath) {
      var json = null;
      try {
        json = dox.parseComments(File.readFileSync(filepath).toString(), {
          raw: false
        });
      } catch (error) {
        console.error('Doxx [error]:', error);
        return [];
      }

      return json.filter(Parser.shouldPass).map(Symbol.map);
    }
    /**
     * Tests if a symbol should be ignored or not.
     * @param  {Object} symbol symbol to check against
     * @return {Boolean} true if the symbol is not private nor must be ignored
     */
  static shouldPass(symbol) {
    if (symbol.isPrivate) {
      return false;
    }
    if (symbol.ignore) {
      return false;
    }

    // Only for coffeescript
    return symbol.tags.filter(function (tag) {
      return tag.type === 'private' || tag.type === 'ignore';
    }).length === 0;
  }
}

export default Parser;