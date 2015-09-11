# Doxx [![Deps](https://david-dm.org/FGRibreau/doxx.png)](https://david-dm.org/FGRibreau/doxx) [![Version](http://badge.fury.io/js/doxx.png)](https://david-dm.org/FGRibreau/doxx) [![Version](https://travis-ci.org/FGRibreau/doxx.svg)](https://travis-ci.org/FGRibreau/doxx) [![Downloads](http://img.shields.io/npm/dm/doxx.svg)](https://www.npmjs.com/package/doxx)

Use [dox](https://github.com/visionmedia/dox) to automatically generate beautiful html documentation. **Doxx is a total refactoring of [dox-foundation](https://github.com/punkave/dox-foundation/)**.

Outputted HTML is by default based on templates and css from [Twitter Bootstrap](twitter.github.com/bootstrap/) and syntax highlighting is done by [Prism.js](http://prismjs.com/).

Doxx was written in ES6, tranformed to ES5 with [babel](https://babeljs.io/), and tested with [mocha](https://github.com/mochajs/mocha).

## Demo
* [doxx/docs/compile.js](http://fgribreau.github.com/doxx/docs/compile.js.html)
* [doxx/docs/dir.js](http://fgribreau.github.com/doxx/docs/dir.js.html)
* [doxx/docs/parser.js](http://fgribreau.github.com/doxx/docs/parser.js.html)


## Usage

JavaScript JavaDoc style

```javascript
/**
 * Create an array of all the right files in the source dir
 * @param      {String}   source path
 * @param      {Object}   options
 * @param      {Function} callback
 * @jsFiddle   A jsFiddle embed URL
 * @return     {Array} an array of string path
 */
function collectFiles(source, options, callback) {
  ...
}

```

CoffeeScript JavaDoc style

```coffeescript
###*
 * Create an array of all the right files in the source dir
 * @param      {String}   source path
 * @param      {Object}   options
 * @param      {Function} callback
 * @jsFiddle   A jsFiddle embed URL
 * @return     {Array} an array of string path
###
collectFiles = (source, options, callback) ->
  ...

```

## Installation

```bash
# Install the module globally
$ npm i -g doxx
```

## CLI
```bash
$ doxx --help

  Usage: doxx [options]

  Options:

    -h, --help                                 Outputs usage information.
    -V, --version                              Outputs the version number.
    -r, --raw                                  Outputs "raw" comments, leaving the markdown intact.
    -d, --debug                                Outputs parsed comments for debugging.
    -t, --title <string>                       The title for the page produced.
    -s, --source <source>                      The folder which should get parsed.
    -i, --ignore <directories>                 Comma seperated list of directories to ignore. Default: test,public,static, view, view, views, templates
    -T, --target <target>                      The folder which will contain the results. Default: <CWD>/docs
    -e, --extension <extension>                Target files extension. Default: html
    -j, --template <template>                  The Jade template file to use

  Examples:

    # parse a whole folder
    $ doxx --source lib --target docs

    # parse a whole folder and use a specific template
    $ doxx --template ./view/myowntpl.jade --source lib --target docs
```

## Related

* [grunt-doxx](https://github.com/evertton/grunt-doxx) - Doxx grunt plugin automatically generates the documentation for your project.
* [gulp-doxx](https://github.com/filipovskii/gulp-doxx) - Doxx documentation generator for gulp

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [gulp](https://github.com/gulpjs/gulp) and [mocha](https://github.com/mochajs/mocha).

## [Changelog](/CHANGELOG.md)

## Donate

* [Donate Bitcoins](https://coinbase.com/checkouts/fc3041b9d8116e0b98e7d243c4727a30)
* [Gratipay (gittip)](https://gratipay.com/FGRibreau/)

## License
Copyright (c) 2013 Francois-Guillaume Ribreau
MIT License
