/*!
 * Load Dependancies
 */
var fs = require('fs'),
    path = require('path'),
    jade = require('jade'),
    path = require('path'),
    mkdirp = require('mkdirp'),
    dox = require('dox'),
    _ = require('underscore'),
    pkg = require('../package');

/**
 * Parser name
 */
exports.name = pkg.name;

/**
 * Parser version
 */
exports.version = pkg.version;

/**
 * Template used to produce the documentation
 */
exports.template = fs.readFileSync(path.resolve(__dirname,'../views/template.jade')).toString();

/**
 * Parse source code to produce documentation
 */
exports.parse = function(file, files, options){
    options          = options || { title: 'Documentation' };
    file.dox         = file.dox.filter(exports.shouldPass);
    options.comments = file.dox;

    options.structure = files.map(function(file){
      var names = [];

      file.dox.forEach(function(method){
        if (method.ctx) names.push({name:method.ctx.name, type:method.ctx.type});
      });

      return {
        source: file.sourceFile,
        target: file.targetFile,
        methods: names
      };
    });

    return jade.compile(exports.template)(options);
};

/**
 * Test if a method should be ignored or not
 * @param  {Object} method
 * @return {Boolean} true if the method is not private nor must be ignored
 */
exports.shouldPass = function(method){
  if(method.isPrivate){return false;}
  if(method.ignore){return false;}

  return method.tags.filter(function(tag){
    return tag.type === "private" || tag.type === "ignore";
  }).length === 0;
};

/*
 * Create an array of all the right files in the source dir
 */
exports.collectFiles = function(source, options, callback) {
  var dirtyFiles = require('findit').findSync(source), // tee hee!
      ignore  = options.ignore || [],
      files   = [];

  dirtyFiles.forEach(function(file){
    file = path.relative(source, file);

    var doNotIgnore = _.all(ignore, function(d){
      // return true if no part of the path is in the ignore list
      return (file.indexOf(d) === -1);
    })

    if ((file.substr(-2) === 'js') && doNotIgnore) {
      files.push(file);
    }
  })

  return files;
};

/*
 * Make sure the folder structure in target mirrors source
 */
exports.createTargetFolders = function(target, files) {
  var folders = [];

  files.forEach(function(file){
    var folder = file.substr(0, file.lastIndexOf('/'))

    if ((folder !== '') && (folders.indexOf(folder) === -1)) {
      folders.push(folder);
      mkdirp.sync(target + '/' + folder);
    }
  })
};

/*
 * Dox all the files found by collectFiles
 */
exports.doxFiles = function(source, target, options, files) {
  files = files.map(function(file) {
    try {
      var content = fs.readFileSync(source + '/' + file).toString();
      return {
        sourceFile: file,
        targetFile: file.replace(source, target) + '.html',
        dox:        dox.parseComments(content, options)
      };
    } catch(e) { console.log(e); }
  });

  return files;
};
