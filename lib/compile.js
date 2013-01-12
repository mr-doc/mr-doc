"use strict";

var jade = require('jade'),
    fs   = require('fs'),
    path = require('path'),
    _    = require('lodash');

/**
 * Compile
 * @param  {Object} options
 * @return {String}
 */
function compile(options){
  return jade.compile(compile.tpl,{pretty:true})(options);
}

/**
 * Template used to produce the documentation
 */
compile.tpl = fs.readFileSync(path.resolve(__dirname,'../views/template.jade')).toString();

module.exports = compile;
