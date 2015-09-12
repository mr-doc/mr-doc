/*! global process */
'use strict';

import File from 'fs';
import Path from 'path';
import _ from 'lodash';
import Compiler from './compiler';
import parser from './parser';
import Markdown from 'markdown-it';
import mkdirp from 'mkdirp';
import theme from './theme';
import 'source-map-support/register';

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
      // The locals stack
      this.locals = [];
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
      readMeFile = Path.resolve(process.cwd(), this.options.readme ||
        (pkg && pkg.readmeFileName) || 'README.md');

    if (!readme && File.existsSync(readMeFile)) {
      readme = File.readFileSync(readMeFile).toString();
    } else {
      console.log(new Error('No README.md file found at ' + readMeFile));
    }

    if (!readme) {
      console.log(new Error('Empty README.md ' + readMeFile));
      readme = '';
    }

    var md = new Markdown();
    md = md.render.bind(md);

    // Get readme data
    this.files.unshift({
      name: 'Main',
      targetName: 'index.html',
      readme: md(readme),
      dox: [],
      symbols: []
    });

    // Make sure the folder structure in target mirrors source
    var folders = [];

    this.files.forEach(file => {
      var folder = file.targetName
        .substr(0, file.targetName.lastIndexOf(Path.sep));

      if ((folder !== '') && (folders.indexOf(folder) === -1)) {
        folders.push(folder);
        mkdirp.sync(this.options.target + '/' + folder);
      }
    });

    // Render and write each file
    this.files.forEach(file => {

      // Set each files relName in relation 
      // to where this file is in the directory tree

      // Count how deep the current file is in relation to base
      var count = file.name.split('/');
      count = count === null ? 0 : count.length - 1;

      // relName is equal to targetName at the base dir
      file.relName = file.targetName;
      file.relPath = './';
      // For each directory in depth of current file 
      // add a ../ to the relative filename of this link
      while (count > 0) {
        file.relName = '../' + file.relName;
        file.relPath += '../';
        count--;
      }

      // Set title
      var title = this.options.title ? this.options.title :
        pkg && pkg.name ? pkg.name :
        (this.options.title = 'Doxx Generated Documentation');

      // Set description
      var description = pkg && pkg.description ?
        pkg.description : '';

      // Set URLs
      var url = {
        github: pkg && pkg.homepage ?
          pkg.homepage.indexOf('github') > -1 ?
          pkg.homepage : false : false,
        npm: pkg && pkg.name ?
          'https://npmjs.com/package/' + pkg.name : false,
        homepage: pkg && pkg.homepage ?
          pkg.homepage.indexOf('github') === -1 ?
          pkg.homepage : false : false
      };

      // Push locals into stack
      this.locals.push(_.extend({}, file, {
        project: {
          title, description, url
        },
        allSymbols: allSymbols,
        files: this.files,
        currentName: file.name,
        path: file.relPath
      }));

    });

    // Install theme
    theme(this.options).install().then((result) => {
      console.info(
        'doxx: Successfully installed theme: ' + result.theme + '!');
      _.forEach(this.files, (file, index) => {
        // Set template
        this.setTemplate(result.template);
        // Compile the template
        let compiled = this.compile(this.locals[index]);
        // Write files
        mkdirp(this.options.target, error => {
          if (error) return;
          else
            File.writeFileSync(Path.join(
                this.options.target, file.targetName),
              compiled);
        });
      });
    }, console.error);
  }
}
export default function (options) {
  return new Doxx(options);
}