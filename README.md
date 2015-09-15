# Doxx [![Deps](https://david-dm.org/FGRibreau/doxx.png)](https://david-dm.org/FGRibreau/doxx) [![Version](http://badge.fury.io/js/doxx.png)](https://david-dm.org/FGRibreau/doxx) [![Version](https://travis-ci.org/FGRibreau/doxx.svg)](https://travis-ci.org/FGRibreau/doxx)

Doxx is a total refactoring of [dox-foundation](https://github.com/punkave/dox-foundation/)  written in ES6, tranformed to ES5 with [Babel](https://babeljs.io/), and is based on [dox](https://github.com/visionmedia/dox). It can automatically generate beautiful documentations and can further spice up your documentations using themes.

By default, Doxx uses [doxx-theme-default](https://www.github.com/iwatakeshi/doxx-theme-default) which uses 
[Twitter Bootstrap](https://twitter.github.com/bootstrap/) for the frontend framework and [Prism.js](http://prismjs.com/)
for syntax highlighting.

## Docs

The beautifully documentation can be found at [GitHub](http://fgribreau.github.io/doxx/docs/).


## Installation

```bash
# Install the module globally
$ npm i -g doxx
```

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

***Notes***

* Doxx supports the following variations of `@return` and `@jsFiddle`:
  * `@return`, `@returns`
  * `@jsfiddle`, `@jsFiddle`, `@JSFiddle`


## CLI
```bash
$ doxx --help

  Usage: doxx [options]

  Commands:
    cache                         Manages the Doxx cache. The available commands are clean and remove.

  Options:

    -h, --help                    Outputs usage information.
    -V, --version                 Outputs the version number.
    -r, --raw                     Outputs "raw" comments, leaving the markdown intact.
    -d, --debug                   Outputs parsed comments for debugging.
    -t, --title <string>          The title for the page produced.
    -s, --source <source>         The folder which should get parsed.
    -i, --ignore <directories>    Comma seperated list of directories to ignore. Default: test, public, static, view, views, templates.
    -T, --target <target>         The folder which will contain the results. Default: <CWD>/docs
    -e, --extension <extension>   Target files extension. Default: html
    -j, --template <template>     The Jade template file to use.
    -b, --theme <theme>           The name of the theme. e.g. doxx-theme-cayman or cayman.
  Examples:

    # parse a whole folder
    $ doxx --source lib --target docs

    # parse a whole folder and use a specific template
    $ doxx --template ./view/myowntpl.jade --source lib --target docs
```

## Themes

### Usage

With the release of **2.1.0**, you are able to use different themes to ***spice*** up your documentations. To install a theme,
simply use the `--theme` option followed by the name of the theme:

```bash
$ doxx --source lib --target docs --theme cayman
# or
$ doxx --source lib --target docs --theme doxx-theme-cayman
```

***Notes***

  * The prefix `doxx-theme-` is not necessary except when
publishing your own themes.
  * While it is still possible to use templates, I would advise you
to use themes instead.

### Creating Themes

If you would like to create your own themes, see
[doxx-theme-starter-kit](https://github.com/iwatakeshi/doxx-theme-starter-kit).


## Related

* [grunt-doxx](https://github.com/evertton/grunt-doxx) - Doxx grunt plugin automatically generates the documentation for your project.
* [gulp-doxx](https://github.com/filipovskii/gulp-doxx) - Doxx documentation generator for gulp.

## Roadmap

### 3.0.0

* Switch the backend from bower to npm for themes. [#79](https://github.com/FGRibreau/doxx/issues/79)
* Re-introduce Doxx with a new name. [#83](https://github.com/FGRibreau/doxx/issues/83)

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [gulp](https://github.com/gulpjs/gulp) and [mocha](https://github.com/mochajs/mocha).

## Changelog

The changes can be viewed [here](/CHANGELOG.md).

## Donate

* [Donate Bitcoins](https://coinbase.com/checkouts/fc3041b9d8116e0b98e7d243c4727a30)
* [Gratipay (gittip)](https://gratipay.com/FGRibreau/)

## License

MIT License

Copyright (c) 2013 Francois-Guillaume Ribreau
