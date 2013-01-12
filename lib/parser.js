var _   = require('lodash'),
    dox = require('dox'),
    fs  = require('fs');





/**
 * Parse a file and returns a generic format
 * @param  {String} filepath
 * @param  {Object} options
 * @return {Object}
 */
module.exports = function parse(filepath){
  var json = null;

  try{
    json = dox.parseComments(fs.readFileSync(filepath).toString(), {raw: false});
  } catch(e) {
    console.error("doxx:", e);
    return {};
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
  function hasParams(tag){
    return tag.type === 'param';
  }

  return json.filter(shouldPass).map(function(symbol){
    if(symbol.tags.length > 0 && symbol.tags.filter(hasParams).length > 0){
      symbol.hasParams = true;
    }
    return symbol;
  });
};

/**
 * Test if a method should be ignored or not
 * @param  {Object} method
 * @return {Boolean} true if the method is not private nor must be ignored
 */
function shouldPass(method){
  if(method.isPrivate){return false;}
  if(method.ignore){return false;}

  return method.tags.filter(function(tag){
    return tag.type === "private" || tag.type === "ignore";
  }).length === 0;
}
