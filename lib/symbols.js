"use strict";

var _ = require('lodash');
/**
 * Return the structure of a dox
 * @param  {Object} dox dox json
 * @return {Array} array of symbols
 */
module.exports = function structure(dox, file){
  return _.compact(dox.map(function(method){
    if (!method.ctx){return null;}

    return {
      targetFile:file,
      name:method.ctx.name,
      type:method.ctx.type
    };
  })) || [];
};
