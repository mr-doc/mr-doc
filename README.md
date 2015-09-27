# Mr. Doc 

[![Deps](https://david-dm.org/mr-doc/mr-doc.svg)](https://david-dm.org/mr-doc/mr-doc) 
[![npm](https://img.shields.io/npm/v/mr-doc.svg)](https://www.npmjs.com/package/mr-doc)
[![Build](https://travis-ci.org/mr-doc/mr-doc.svg)](https://travis-ci.org/mr-doc/mr-doc)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/mr-doc/mr-doc/master/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/mr-doc.svg)](https://www.npmjs.com/package/mr-doc)

Mr. Doc is a total refactoring of [dox-foundation](https://github.com/punkave/dox-foundation/)  written in ES6, tranformed to ES5 with [Babel](https://babeljs.io/), and is based on [dox](https://github.com/visionmedia/dox). He can automatically generate beautiful documentations and can further spice up your documentations using themes.

By default, Mr. Doc uses [mr-doc-theme-default](https://www.github.com/mr-doc/mr-doc-theme-default) which uses 
[Twitter Bootstrap](https://twitter.github.com/bootstrap/) for the frontend framework and [Prism.js](http://prismjs.com/)
for syntax highlighting.

Visit the [official site](https://mr-doc.github.io/) for instructions to install Mr. Doc and other themes.


## Documentation Style

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

***Notes***

* Mr. Doc supports the following variations of `@return` and `@jsFiddle`:
  * `@return`, `@returns`
  * `@jsfiddle`, `@jsFiddle`, `@JSFiddle`


## CLI
```bash
$ mr-doc --help

  Usage: mr-doc [options]

  Options:

    -h, --help                    Outputs usage information.
    -V, --version                 Outputs the version number.
    -e, --extension <extension>  The output files extension. Default: html
    -i, --ignore <directories>   The comma seperated list of directories to ignore. Default: test,public,static,view,views,template,templates
    -j, --template <template>    The Jade template file to use.
    -k, --kit [kit]              Marks the template as a starter-kit with a 'yes' or 'no' (optional).
    -n, --name <name>            The name of your project.
    -o, --output <output>        The directory for the generated docs. Default: <CWD>/docs
    -r, --readme <file>          The markdown file to use on the main page of the documentations. Checks the current directory for a package.json or README.md by default
    -s, --source <source>        The directory to your source.
    -t, --theme <theme>          The name of the theme to select. e.g. mr-doc-theme-cayman or cayman.
```

## Related

* [grunt-doxx](https://github.com/evertton/grunt-doxx) - mr-doc grunt plugin automatically generates the documentation for your project.
* [gulp-doxx](https://github.com/filipovskii/gulp-doxx) - mr-doc documentation generator for gulp.

## Roadmap

### 3.0.0

* Switch the backend from bower to npm for themes. [#79](https://github.com/mr-doc/mr-doc/issues/79)
* Introduce Mr. Doc. [#83](https://github.com/mr-doc/mr-doc/issues/83)

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [gulp](https://github.com/gulpjs/gulp) and [mocha](https://github.com/mochajs/mocha).

## Updating Docs

To update the docs on the gh-pages branch:

```bash
gulp docs
```

## Changelog

The changes can be viewed [here](/CHANGELOG.md).

## Donate

* [Donate Bitcoins](https://coinbase.com/checkouts/fc3041b9d8116e0b98e7d243c4727a30)
* [Gratipay (gittip)](https://gratipay.com/FGRibreau/)

## License

MIT License

Copyright (c) 2013 Francois-Guillaume Ribreau
