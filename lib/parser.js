import Symbol from './symbol';
import _ from 'lodash';
import path from 'path';
import Dir from './dir';
import dox from 'dox';
import fs from 'fs';

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

      if (_.isArray(source)) {
        this.files = source.map(doc => {
          var targetName = doc.name + '.' + extension;
          if (!doc.targetName) doc.targetName = targetName;
          doc.symbols = Symbol.structure(doc.dox, doc.targetName);
          return doc;
        });
      } else {
        source = path.resolve(process.cwd(), source);
        this.files = Dir.collectFiles(source, {
          ignore: blacklist
        });
        this.files = this.files.map(file => {
          var dox = this.parse(path.join(source, file));
          var targetName = file + '.' + extension;
          return {
            name: file.replace(/\\/g, '/'),
            targetName: targetName.replace(/\\/g, '/'),
            dox: dox,
            symbols: Symbol.structure(dox, targetName)
          };
        });
      }
    }
    /**
     * Parses the source using dox.
     * @param {string} filepath The path to the source 
     * @return {object} Returns a JSON representation of the tags as an array
     * @example
     * {
     *	tags:[]
     *	description:{
     *	full:""
     *	summary:""
     *	body:""
     * 	}
     *	ignore:false
     * 	isPrivate:false
     * 	ctx:{
     *	  type:"declaration"
     * 	  name:""
     * 		value:[]
     *		string:""
     *	}
     * }
     */
  parse(filepath) {
      var json = null;
      try {
        json = dox.parseComments(fs.readFileSync(filepath).toString(), {
          raw: false
        });
      } catch (e) {
        console.error('doxx:', e);
        return [];
      }

      return json.filter(this.shouldPass).map(Symbol.map);
    }
    /**
     * Tests if a symbol should be ignored or not.
     * @param  {Object} symbol symbol to check against
     * @return {Boolean} true if the symbol is not private nor must be ignored
     */
  shouldPass(symbol) {
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

export default (options) => {
  'use strict';
  return new Parser(options);
};