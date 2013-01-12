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

  var hasParams = has('param');
  var isReturn  = has('return');
  var hasType   = has('type');

  return json.filter(shouldPass).map(function(symbol){
    var types   = symbol.tags.filter(hasType);
    var returns = symbol.tags.filter(isReturn);

    if(symbol.tags.length > 0 && symbol.tags.filter(hasParams).length > 0){
      symbol.hasParams = true;
    }

    if(!symbol.ctx){
      symbol.ctx = {};
    }

    if(types.length === 1){
      symbol.type = types[0].types;
    }

    if(returns.length === 1){
      symbol["return"] = returns[0].types;
    }

    return symbol;
  });
}

/**
 * Exports
 *
 * @ignore
 */
module.exports = parse;
