/*! global process */
'use strict';

import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import Compiler from './compiler';
import parser from './parser';
import marked from 'marked';
import mkdirp from 'mkdirp';
/**
 * The main class that creates beautiful documentations.
 * @class Doxx
 * @extend Compiler
 */
class Doxx extends Compiler {
  // Initialize the compiler
  // and pass the parser.
  constructor(options) {
      super(parser(options));
    }
    /**
     * Generates the documentations.
     */
  generate() {
    // Compute all symboles
    var allSymbols = this.files.reduce(function (m, a) {
      m = m.concat(a.symbols || []);
      return m;
    }, []);

    var pkg;
    // Get package.json
    try {
      pkg = require(process.cwd() + '/package');
    } catch (err) {}

    var readme = pkg && pkg.readme,
      readMeFile = path.resolve(process.cwd(), this.options.readme ||
        (pkg && pkg.readmeFileName) || 'README.md');

    if (!readme && fs.existsSync(readMeFile)) {
      readme = fs.readFileSync(readMeFile).toString();
    } else {
      console.warn(new Error('No README.md file found at ' + readMeFile));
    }

    if (!readme) {
      console.warn(new Error('Empty README.md ' + readMeFile));
      readme = '';
    }

    // Enable line-breaks ala github markdown
    marked.setOptions({
      breaks: true,
      smartLists: true
    });

    // Get readme data
    this.files.unshift({
      name: 'Main',
      targetName: 'index.html',
      readme: marked(readme),
      dox: [],
      symbols: []
    });

    // Make sure the folder structure in target mirrors source
    var folders = [];

    this.files.forEach(file => {
      var folder = file.targetName
        .substr(0, file.targetName.lastIndexOf(path.sep));

      if ((folder !== '') && (folders.indexOf(folder) === -1)) {
        folders.push(folder);
        mkdirp.sync(this.options.target + '/' + folder);
      }
    });

    // Render and write each file
    this.files.forEach(file => {

      // Set each files relName in relation 
      // to where this file is in the directory tree
      this.files.forEach(function (f) {

        // Count how deep the current file is in relation to base
        var count = file.name.split('/');
        count = count === null ? 0 : count.length - 1;

        // relName is equal to targetName at the base dir
        f.relName = f.targetName;

        // For each directory in depth of current file 
        // add a ../ to the relative filename of this link
        while (count > 0) {
          f.relName = '../' + f.relName;
          count--;
        }
      });

      // Set title
      var title = pkg && pkg.name ? pkg.name :
        this.options.title;

      // Set description
      var description = pkg && pkg.description ?
        pkg.description : '';

      // Set locals
      var locals = _.extend({}, file, {
        project: {
          title, description
        },
        allSymbols: allSymbols,
        files: this.files,
        currentName: file.name
      });

      // Compile
      var compiled = this.compile(locals);

      // Write files
      mkdirp(this.options.target, err => {
        if (err) return;
        else
          fs.writeFileSync(path.join(
              this.options.target, file.targetName),
            compiled);
      });
    });
  }
}
export default function (options) {
  return new Doxx(options);
}