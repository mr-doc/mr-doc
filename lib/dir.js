'use strict';
import Path from 'path';
import walkdir from 'walkdir';
import osenv from 'osenv';
import fs from 'fs';
import 'source-map-support/register';
/**
 * The class that manages directories.
 * @class Dir  
 */
class Dir {
  /**
   * Create an array of all the right files in the source dir    
   * @param  {String}   source source path    
   * @param  {Object}   options option object    
   * @return {Array}    
   */
  static collectFiles(source, options) {
      var dirtyFiles = walkdir.sync(source), // tee hee!       
        ignore = options.ignore || [],
        files = [];
      dirtyFiles.forEach(function(file) {
        // Parse the file's path
        file = Path.parse(file);
        // Get the file name or subdirectories + file name
        file = file.dir
          .replace(source, '') + Path.sep + file.base;
        // Remove the first path seperator
        file = file.replace(file[0], '');
        if (!ignore.some(folder => file.indexOf(folder) >= 0) && Path.parse(file).ext === '.js') {
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
  static getHomeDir() {
      return osenv.home() ||
        process.env.HOME ||
        process.env.HOMEPATH ||
        process.env.USERPROFILE;
    }
    /**
     * Determines if the directory exists      
     * @param  {String} path The path to the directory     
     * @return {Boolean}      The truth value      
     */
  static exists(path) {
      try {
        fs.statSync(Path.normalize(path));
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
  static getDirs(path) {
    return fs.readdirSync(path)
      .filter(file => fs.statSync(Path.join(path, file)).isDirectory());
  }
}
export default Dir;