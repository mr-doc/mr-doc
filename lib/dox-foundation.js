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

    options.title    = options.title || 'Documentation';
    options.comments = options.comments || obj
    options.generateFolderStructure = function(structure) {
      var result = "<ul>"

      for (var title in structure) {
        if (structure.hasOwnProperty(title)) {
          if (typeof structure[title] === 'string') {
            result += "<li><a href='" + structure[title] + "'>" + title + "</a></li>"
          } else {
            result += "</ul><ul><li><h6>" + title + "</h6>" + options.generateFolderStructure(structure[title]) +"</li>"
          }
        }
      }

      return result + '</ul>'
    }

    return jade.compile(template)(options);
};
