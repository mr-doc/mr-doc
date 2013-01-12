var _ = require('lodash');
/**
 * Return the structure of a dox
 * @param  {Object} dox dox json
 * @return {Array} array of symbols
 */
module.exports = function structure(dox){
  return _.compact(dox.map(function(method){
    if (!method.ctx){return null;}

    return {
      name:method.ctx.name,
      type:method.ctx.type
    };
  })) || [];
};
