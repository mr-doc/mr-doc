<img src="http://cl.ly/image/0x3g3I3c460q/content" width="40%" alt="Mr. Doc by Ben Matsuya">

Artwork by [Ben Matsuya](http://www.matsuyacreative.com/about/).

[![Deps](https://david-dm.org/mr-doc/mr-doc.svg)](https://david-dm.org/mr-doc/mr-doc)
[![npm](https://img.shields.io/npm/v/mr-doc.svg)](https://www.npmjs.com/package/mr-doc)
[![Build](https://travis-ci.org/mr-doc/mr-doc.svg)](https://travis-ci.org/mr-doc/mr-doc)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/mr-doc/mr-doc/master/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/mr-doc.svg)](https://www.npmjs.com/package/mr-doc)


# Mr. Doc 4.0.0 (Work In Progress)

Mr. Doc is an active and a "work in progress" project that seeks to improve the way we document our code. 4.0.0 is starting point for Mr. Doc to become a language agnostic documenter.

## So what's going on?

The parser will depart from dox and become even more modular than before as well as the compiler become somewhat un-opinionated.

Both the parser and compiler will use the factory pattern and will be written in Typescript. Thanks to Typescript, we can implement a simple interface and create different parsers and compilers.

So far, there is a Javascript parser that can use different backends (acorn, espree, bablyon) and a Compiler that writes to JSON. Both are in a working state, however, they need your help to become better.

Specifically, there is no standard on how the array of parsed source/comments should look like to support different compilers. Most of the code is refactored version of [document.js](https://github.com/documentationjs/documentation)'s and the credit goes towards them for an awesome project.

By no means does Mr. Doc want to be the same as [document.js](https://github.com/documentationjs/documentation). Mr. Doc will be unique, experiment to improvement, and serve developers in it's best possible way.

## Cool! How can I help?

Mr. Doc is nothing without you. If you would like to contribute, I (@iwatakeshi) will be willing take suggestions, pull requests, and any form of contributions that may improve Mr. Doc.

At the moment, discussions will be most helpful to get Mr. Doc into the right path. Just check out the issues that are flagged as `4.0.0` or `help wanted`.

Finally, thank you. It means a lot to receive your contributions. :)

### Notes:

* Mr. Doc is a monolithic repo
  * The parsers and compilers are located under `packages/`
  * None of the packages have been published on npm...*yet*
* Technically, a Typescript parser does exist
  * It's using ESlint's typescript parser and the output does not seem correct.
    * If you're a typescript AST guru, please [contribute](https://github.com/eslint/typescript-eslint-parser) to improve it! I would like to support TypeScript!
* There other parsers I would like to support such as CoffeScript
  * Please start a discussion about creating a parser for CoffeeScript if interested.

~~Mr. Doc is a total refactoring of [dox-foundation](https://github.com/punkave/dox-foundation/)  written in ES6, transformed to ES5 with [Babel](https://babeljs.io/), and is based on [dox](https://github.com/visionmedia/dox). He can automatically generate beautiful documentations and can further spice up your documentations using themes.~~

~~By default, Mr. Doc uses [mr-doc-theme-default](https://www.github.com/mr-doc/mr-doc-theme-default) which uses
[Twitter Bootstrap](https://twitter.github.com/bootstrap/) for the frontend framework and [Prism.js](http://prismjs.com/)
for syntax highlighting.~~

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
    -p, --private <private>      Marks the theme as private and located relative to the project.
```

## Related

* [grunt-mrdoc](https://github.com/evertton/grunt-mrdoc) - mr-doc grunt plugin automatically generates the documentation for your project.
* [gulp-doxx](https://github.com/filipovskii/gulp-doxx) - mr-doc documentation generator for gulp.

## Roadmap

### Next

See issue [#94](https://github.com/mr-doc/mr-doc/issues/94).

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [gulp](https://github.com/gulpjs/gulp) and [mocha](https://github.com/mochajs/mocha).

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

Copyright (c) 2016 Francois-Guillaume Ribreau
