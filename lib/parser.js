"use strict";

var _   = require('lodash'),
    dox = require('dox'),
    fs  = require('fs');

/**
 * Test if a symbol should be ignored or not
 * @param  {Object} symbol symbol to check against
 * @return {Boolean} true if the symbol is not private nor must be ignored
 */
function shouldPass(symbol){
  if(symbol.isPrivate){return false;}
  if(symbol.ignore){return false;}

  // Only for coffeescript
  return symbol.tags.filter(function(tag){
    return tag.type === "private" || tag.type === "ignore";
  }).length === 0;
}

/**
 * has Helper return a closure that check if a tag has a specific type
 * @param  {String}  val value to check against
 * @return {Boolean}     True if `tag` type is `val`
 */
function has(val){
  return function(tag){
    return tag.type === val;
  };
}

var hasParams      = has('param');
var isReturn       = has('return');
var hasDescription = has('description');
var hasType        = has('type');
var hasJSFiddle    = has('jsFiddle');

/**
 * Compact multi-line expression
 * @return {Array}
 */
function _compact(tags){
  // [{"type":"description","string":"Note: if `addClass` is defined at the step level."},
  //  {"type":"","string":"The two defined `addClass` will be taken into account in the popover"},
  //  {"type":"type","types":["String"]}]

  var compacted = [];

  tags.forEach(function(tag, i){
    if(!tag.type){
      if(i === 0){return;}
      // append to previous
      var prevTag = compacted[compacted.length-1];
      if (prevTag.description) {
        prevTag.description += " " + tag.string;
      } else {
        prevTag.string += " " + tag.string;
      }
      return;
    }

    compacted.push(tag);
  });

  return compacted;
}

/**
 * Map Symbols
 * @private
 * @param {Object} symbol
 * @return {Object}
 */
function _mapSymbol(symbol){
  symbol.tags = _compact(symbol.tags);

  var types       = symbol.tags.filter(hasType);
  var description = symbol.tags.filter(hasDescription);
  var returns     = symbol.tags.filter(isReturn);
  var jsfiddle    = symbol.tags.filter(hasJSFiddle);

  if(symbol.tags.length > 0 && symbol.tags.filter(hasParams).length > 0){
    symbol.hasParams = true;
  }

  if(!symbol.ctx){
    symbol.ctx = {};
  }

  if(symbol.ctx.type){
    symbol.gtype = symbol.ctx.type;
  }

  if(types.length === 1){
    symbol.type = types[0].types.join(' | ');
  }

  if(returns.length === 1){
    symbol["return"] = returns[0].types.join(' ');
  }

  symbol.description.extra = '';
  if(description.length === 1){
    symbol.description.extra = "<p>"+description[0].string+"</p>";
  }

  if(jsfiddle.length === 1){
    symbol.jsfiddle = jsfiddle[0].string;
  }

  return symbol;
}
/**
 * Parse a file and returns a generic format
 * @param  {String} filepath file path of the file to parse
 * @return {Array} array of symbols
 */
function parse(filepath){
  var json = null;

  try{
    json = dox.parseComments(fs.readFileSync(filepath).toString(), {raw: false});
  } catch(e) {
    console.error("doxx:", e);
    return [];
  }

  // json now contains an array of tags
  // {
  //  tags:[]
  //  description:{
  //    full:""
  //    summary:""
  //    body:""
  //  }
  //  ignore:false
  //  isPrivate:false
  //  ctx:{
  //    type:"declaration"
  //    name:""
  //    value:[]
  //    string:""
  //  }
  // }

  return json.filter(shouldPass).map(_mapSymbol);
}

/**
 * _
 *
 * @ignore
 */
parse._mapSymbol = _mapSymbol;
parse._compact = _compact;

/**
 * Exports
 *
 * @ignore
 */
module.exports = parse;
