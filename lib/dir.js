var fs     = require('fs'),
    path   = require('path'),
    path   = require('path'),
    mkdirp = require('mkdirp'),
    findit = require('findit'),
    _      = require('lodash');

/*
 * Create an array of all the right files in the source dir
 */
exports.collectFiles = function(source, options, callback) {
  var dirtyFiles = findit.findSync(source), // tee hee!
      ignore  = options.ignore || [],
      files   = [];

  dirtyFiles.forEach(function(file){
    file = path.relative(source, file);

    var doNotIgnore = _.all(ignore, function(d){
      // return true if no part of the path is in the ignore list
      return (file.indexOf(d) === -1);
    });

    if ((file.substr(-2) === 'js') && doNotIgnore) {
      files.push(file);
    }
  });

  return files;
};

/*
 * Make sure the folder structure in target mirrors source
 */
exports.createTargetFolders = function(target, files) {
  var folders = [];

  files.forEach(function(file){
    var folder = file.substr(0, file.lastIndexOf('/'));

    if ((folder !== '') && (folders.indexOf(folder) === -1)) {
      folders.push(folder);
      mkdirp.sync(target + '/' + folder);
    }
  });
};
