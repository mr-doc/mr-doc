/*!
 * Load Dependancies
 */
var fs = require('fs'),
    path = require('path'),
    jade = require('jade'),
    template = fs.readFileSync(path.resolve(__dirname,'../views/template.jade')).toString(),
    walk = require('walk'),
    dox = require('dox'),
    _ = require('underscore');

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
            result += "<li><h6>" + title + "</h6>" + options.generateFolderStructure(structure[title]) + "</li>"
          }
        }
      }

      return result + '</ul>'
    }

    return jade.compile(template)(options);
};

exports.collectFiles = function(path, options, callback) {
  var walker  = walk.walk(path, { followLinks: false })
    , ignore  = options.ignore || []
    , files   = []
    , folders = []

  walker.on('file', function(root, stat, next) {
    // Ignore iterator
    var notInIgnored = function(d){
      return (root.indexOf(d) === -1)
    }

    // If the file is a JS file and not in an ignored dir continue
    if ((stat.name.substr(-2) === 'js') && _.all(ignore, notInIgnored)) {
      var folder = root.replace(path, '').trim()

      if ((folder !== '') && (folders.indexOf(folder) === -1)) {
        folders.push(folder)
      }

      files.push(root + '/' + stat.name)
    }

    next()
  });

  walker.on('end', function() {
    callback && callback(files, folders)
  })
}

exports.createFolders = function(folders) {
  folders.forEach(function(folder) {
    try { fs.mkdirSync(target + '/' + folder) } catch(e) {}
  })
}

exports.readFileContents = function(source, target, options, files) {
  var data = []

  files.forEach(function(file) {
    try {
      var content = fs.readFileSync(file).toString()
      var dataObj = {
        sourceFile: file,
        targetFile: file.replace(source, target) + '.html',
        dox:        dox.parseComments(content, options)
      }

      data.push(dataObj)
    } catch(e) { console.log(e) }
  })

  return data
}

exports.getFolderStructure = function(source, data) {
  var structure = data.reduce(function(structure, data) {
    var _source = data.sourceFile.replace(source, '')

    var addFragmentToHash = function(hash, fragment) {
      var match = fragment.match(/^(.*?\/)/)

      if (!!match) {
        var key = match[1].replace('/', '')
        hash[key] = hash[key] || {}
        addFragmentToHash(hash[key], fragment.substr(match[1].length))
      } else {
        hash[fragment] = data.targetFile
      }
    }

    if (_source.charAt(0) === '/') {
      _source = _source.substr(1)
    }

    addFragmentToHash(structure, _source)

    return structure
  }, {})

  var finalStructure = {}

  for (var key in structure) {
    if (structure.hasOwnProperty(key)) {
      var value = structure[key]

      if (typeof value === 'string') {
        finalStructure['/'] = finalStructure['/'] || {}
        finalStructure['/'][key] = value
      } else {
        finalStructure[key] = value
      }
    }
  }

  return finalStructure
}
