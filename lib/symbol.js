'use strict';

import _ from 'lodash';
import 'source-map-support/register';

/**
 * The class that manges symbols.
 * @class Symbol
 */
class Symbol {
  constructor() {}
    /**
     * Returns the structure of a parsed file
     * @param  {Array} symbols  array of symbols
     * @param  {String} file    filename
     * @return {Array}
     */
  static structure(symbols, file) {
      return _.compact(symbols.map(function (method) {
        if (!method.ctx || !method.ctx.name) {
          return null;
        }
        return {
          targetFile: file,
          name: method.ctx.name,
          type: method.ctx.type
        };
      })) || [];
    }
    /**
     * Checks if a tag has a specific type
     * @param  {string}  val value to check against
     * @return {function}  A function that evaluates the truth
     * when True if `tag` type is `val`
     */
  static has(val) {
      return function (tag) {
        return tag.type === val;
      };
    }
    /**
     * Compacts multi-line expression
     * @return {Array}
     */
  static compact(tags) {

    // [{"type":"description",
    // "string":"Note: if `addClass` is defined at the step level."},
    //  {"type":"",
    //  "string": "The two defined `addClass` 
    //  will be taken into account in the popover"},
    //  {"type":"type","types":["String"]}]
    var compacted = [];

    tags.forEach(function (tag, i) {
      if (!tag.type) {
        if (i === 0) {
          return;
        }
        // Append to previous
        var prevTag = compacted[compacted.length - 1];
        if (prevTag.description) {
          prevTag.description += ' ' + tag.string;
        } else {
          prevTag.string += ' ' + tag.string;
        }
        return;
      }

      compacted.push(tag);
    });

    return compacted;
  }

  /**
   * Maps symbols
   * @private
   * @param {Object} symbol
   * @return {Object}
   */
  static map(symbol) {
    symbol.tags = Symbol.compact(symbol.tags);
    var tags = {};
    ['type', 'description', 'example', 'file', 'fileoverview',
      'overview', 'param', 'require',
      'jsfiddle', 'jsFiddle', 'JSFiddle',
      'return', 'returns'
    ].forEach(tag => {
      // Handle special cases
      if (tag.match(/(return|returns)\b/))
        tags.returns = symbol.tags.filter((s) => {
          return Symbol.has('return')(s) ||
            Symbol.has('returns')(s);
        });
      else if (tag.match(/(jsfiddle|jsFiddle|JSFiddle)\b/)) {
        tags.jsfiddles = symbol.tags.filter((s) => {
          return Symbol.has('jsfiddle')(s) ||
            Symbol.has('jsFiddle')(s) ||
            Symbol.has('JSFiddle')(s);
        });
      } else tags[tag.toLowerCase() + 's'] =
        symbol.tags.filter(Symbol.has(tag));
    });
    var {
      types, descriptions, examples, files, fileoverviews,
      overviews, returns, requires, jsfiddles
    } = tags;
    if (symbol.tags.length > 0 &&
      symbol.tags.filter(Symbol.has('param')).length > 0) {

      symbol.hasParams = true;
    }

    if (!symbol.ctx) {
      symbol.ctx = {};
    }

    if (symbol.ctx.type) {
      symbol.gtype = symbol.ctx.type;
    }

    if (types.length === 1) {
      symbol.type = types[0].types.join(' | ');
    }

    if (files.length === 1) {
      symbol.file = files[0].type;
      symbol.fileString = files[0].string;
      symbol.fileHtml = files[0].html;
    }

    if (fileoverviews.length === 1) {
      symbol.files = fileoverviews[0].type;
      symbol.fileString = fileoverviews[0].string;
      symbol.fileHtml = fileoverviews[0].html;
    }

    if (overviews.length === 1) {
      symbol.files = overviews[0].type;
      symbol.fileString = overviews[0].string;
      symbol.fileHtml = overviews[0].html;
    }

    if (returns.length !== 0) {
      symbol.returns = [];
      returns.forEach(function (returned) {
        symbol.returns.push(returned);
      });
    }

    if (examples.length !== 0) {
      symbol.examples = [];
      examples.forEach(function (example) {
        symbol.examples.push(example.string);
      });
    }

    if (requires.length !== 0) {
      symbol.requires = [];
      requires.forEach(function (required) {
        symbol.requires.push(required.string);
      });
    }

    // No idea what this is for but it's there anyways.
    symbol.description.extra = '';
    if (descriptions.length === 1) {
      symbol.description.extra = '<p>' + descriptions[0].string + '</p>';
    }

    if (jsfiddles.length === 1) {
      symbol.jsfiddle = jsfiddles[0].string;
    }

    return symbol;
  }
}

export default Symbol;