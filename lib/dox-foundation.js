/*!
 * Load Dependancies
 */
var fs = require('fs'),
    path = require('path'),
    jade = require('jade'),
    template  = fs.readFileSync(path.resolve(__dirname,'../views/template.jade')).toString();

/**
 * Parser name
 */
exports.name = 'dox-foundation';

/**
 * Parser version
 */
exports.version = '0.0.1';

/**
 * Parse source code to produce documentation
 * 
 * @param  {string} source          JavaScript source code with comments
 * @param  {object} [options] 
 * @param  {string} [options.title] The title of the javascript library
 * @return {string}                 An html representation of the documentation
 */
exports.parse = function(obj, options){

    options = options || {};
    var title = options.title || 'Documentation';
    var out = jade.compile(template);
    
    return out({ title: title, comments:obj });
};