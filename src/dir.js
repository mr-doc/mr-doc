'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _walkdir = require('walkdir');

var _walkdir2 = _interopRequireDefault(_walkdir);

var _osenv = require('osenv');

var _osenv2 = _interopRequireDefault(_osenv);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

require('source-map-support/register');

/**
 * The class that manages directories.
 * @class Dir  
 */

var Dir = (function () {
  function Dir() {
    _classCallCheck(this, Dir);
  }

  _createClass(Dir, null, [{
    key: 'collectFiles',

    /**
     * Create an array of all the right files in the source dir    
     * @param  {String}   source source path    
     * @param  {Object}   options option object    
     * @return {Array}    
     */
    value: function collectFiles(source, options) {
      var dirtyFiles = _walkdir2['default'].sync(source),
          // tee hee!      
      ignore = options.ignore || [],
          files = [];
      dirtyFiles.forEach(function (file) {
        // Parse the file's path
        file = _path2['default'].parse(file);
        // Get the file name or subdirectories + file name
        file = file.dir.replace(source, '') + _path2['default'].sep + file.base;
        // Remove the first path seperator
        file = file.replace(file[0], '');
        if (!ignore.some(function (folder) {
          return file.indexOf(folder) >= 0;
        }) && _path2['default'].parse(file).ext === '.js') {
          files.push(file);
        }
      });
      return files;
    }

    /**
     * Locates the home directory for the    
     * current operating system.
     * Credits to @cliftonc
     * @return {String} The home directory path    
     */
  }, {
    key: 'getHomeDir',
    value: function getHomeDir() {
      return _osenv2['default'].home() || process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
    }

    /**
     * Determines if the directory exists      
     * @param  {String} path The path to the directory     
     * @return {Boolean}      The truth value      
     */
  }, {
    key: 'exists',
    value: function exists(path) {
      try {
        _fs2['default'].statSync(_path2['default'].normalize(path));
        return true;
      } catch (err) {
        return !(err && err.code === 'ENOENT');
      }
    }

    /**
     * Returns a list of directories from a given path
     * @param {String} path The path to parse.
     * @return {Array} The list of directories.
     */
  }, {
    key: 'getDirs',
    value: function getDirs(path) {
      return _fs2['default'].readdirSync(path).filter(function (file) {
        return _fs2['default'].statSync(_path2['default'].join(path, file)).isDirectory();
      });
    }
  }]);

  return Dir;
})();

exports['default'] = Dir;
module.exports = exports['default'];
//# sourceMappingURL=source maps/dir.js.map
