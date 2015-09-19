# Mr. Doc [![Deps](https://david-dm.org/mr-doc/mr-doc.png)](https://david-dm.org/mr-doc/mr-doc) [![Version](http://badge.fury.io/js/mr-doc.png)](https://david-dm.org/mr-doc/mr-doc) [![Version](https://travis-ci.org/mr-doc/mr-doc.svg)](https://travis-ci.org/mr-doc/mr-doc)

Mr. Doc is a total refactoring of [dox-foundation](https://github.com/punkave/dox-foundation/)  written in ES6, tranformed to ES5 with [Babel](https://babeljs.io/), and is based on [dox](https://github.com/visionmedia/dox). He can automatically generate beautiful documentations and can further spice up your documentations using themes.

By default, Mr. Doc uses [mr-doc-theme-default](https://www.github.com/mr-doc/mr-doc-theme-default) which uses 
[Twitter Bootstrap](https://twitter.github.com/bootstrap/) for the frontend framework and [Prism.js](http://prismjs.com/)
for syntax highlighting.

## Docs

The beautifully documentation can be found at [GitHub](http://fgribreau.github.io/doxx/docs/).


## Installation

```bash
# Install the module globally
$ npm i -g mr-doc
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
    -r, --raw                     Outputs "raw" comments, leaving the markdown intact.
    -d, --debug                   Outputs parsed comments for debugging.
    -t, --title <string>          The title for the page produced.
    -s, --source <source>         The folder which should get parsed.
    -i, --ignore <directories>    Comma seperated list of directories to ignore. Default: test, public, static, view, views, templates.
    -T, --target <target>         The folder which will contain the results. Default: <CWD>/docs
    -e, --extension <extension>   Target files extension. Default: html
    -j, --template <template>     The Jade template file to use.
    -b, --theme <theme>           The name of the theme. e.g. mr-doc-theme-cayman or cayman.
  Examples:

    # parse a whole folder
    $ mr-doc --source lib --target docs

    # parse a whole folder and use a specific template
    $ mr-doc --template ./view/myowntpl.jade --source lib --target docs
```

## Themes

### Usage

With the release of **2.1.0**, you are able to use different themes to ***spice*** up your documentations. To use a specific theme, simply use the `--theme` option followed by the name of the theme:

```bash
$ mr-doc --source lib --target docs --theme cayman
# or
$ mr-doc --source lib --target docs --theme mr-doc-theme-cayman
```

### Installing Themes

Themes are just npm modules that can be installed in your application, there is a default theme included with mr-doc.

Current available themes:

- [https://github.com/mr-doc/mr-doc-theme-default](mr-doc-theme-default)
- [https://github.com/mr-doc/mr-doc-theme-cayman](mr-doc-theme-cayman)

To install into your project to use as part of the build step, simply:

```
npm install mr-doc-theme-cayman --save-dev
```

***Notes***

  * The prefix `mr-doc-theme-` is not necessary except when
publishing your own themes.
  * While it is still possible to use templates, I would advise you
to use themes instead.

### Creating Themes

If you would like to create your own themes, see
[mr-doc-theme-starter-kit](https://github.com/mr-doc/mr-doc-theme-starter-kit).


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

```
gulp docs
git checkout gh-pages
git push origin gh-pages
```

## Changelog

The changes can be viewed [here](/CHANGELOG.md).

## Donate

* [Donate Bitcoins](https://coinbase.com/checkouts/fc3041b9d8116e0b98e7d243c4727a30)
* [Gratipay (gittip)](https://gratipay.com/FGRibreau/)

## License

MIT License

Copyright (c) 2013 Francois-Guillaume Ribreau
