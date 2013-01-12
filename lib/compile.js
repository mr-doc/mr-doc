"use strict";

var jade = require('jade'),
    fs   = require('fs'),
    path = require('path'),
    _    = require('lodash');

/**
 * Compile
 * @param  {Object} locals local variable object
 * @return {String} rendered content
 */
function compile(locals){
  return jade.compile(compile.tpl,{pretty:true})(locals);
}

/**
 * Template used to produce the documentation
 * @type {String} template string
 */
compile.tpl = fs.readFileSync(path.resolve(__dirname,'../views/template.jade')).toString();

module.exports = compile;
