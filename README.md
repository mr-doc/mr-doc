# Doxx [![Build Status](https://travis-ci.org/FGRibreau/doxx.png)](https://travis-ci.org/FGRibreau/doxx) [![Gittip](http://badgr.co/gittip/fgribreau.png)](https://www.gittip.com/fgribreau/) [![Deps](https://david-dm.org/FGRibreau/doxx.png)](https://david-dm.org/FGRibreau/doxx)

Use [dox](https://github.com/visionmedia/dox) to automatically generate beautiful html documentation. **Doxx is a total refactoring of [dox-foundation](https://github.com/punkave/dox-foundation/)**.

Outputted HTML is by default based on templates and css from [Twitter Bootstrap](twitter.github.com/bootstrap/) and syntax highlighting is done by [Prism.js](http://prismjs.com/).

Doxx was tested with **JavaScript** as well as generated JavaScript from **CoffeeScript**.

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
Install the module with: `npm install doxx -g`

## CLI
```
$ doxx --help

  Usage: doxx [options]

  Options:

    -h, --help                                 output usage information
    -V, --version                              output the version number
    -r, --raw                                  output "raw" comments, leaving the markdown intact
    -d, --debug                                output parsed comments for debugging
    -t, --title <string>                       The title for the page produced
    -s, --source <source>                      The folder which should get parsed
    -i, --ignore <directories>                 Comma seperated list of directories to ignore. Default: test,public,static,views,templates
    -T, --target <target>                      The folder which will contain the results. Default: <process.cwd()>/docs
    -e, --target_extension <target_extension>  Target files extension. Default: html
    --template <jade template>                 The jade template file to use

  Examples:

    # parse a whole folder
    $ doxx --source lib --target docs

    # parse a whole folder and use a specific template
    $ doxx --template ./view/myowntpl.jade --source lib --target docs
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

## Release History
* *0.0.1* - (dox-foundation) Initial release
* *0.2.0* - (dox-foundation) Readable output
* *0.3.0* - (dox-foundation) Support for folder parsing
* *0.4.0* - (dox-foundation) Improved project navigation, major refactor of folder code
* *0.5.0* - Initial release of doxx
* *0.7.0* - Merge pull requests #16 #17 #19 #20
* *0.7.1* - Merge pull request #25 - Add target_extension option
* *0.7.2* - Upgrade dox to ~0.4.4
* *0.7.4* - Merge pull requests #29 #30

## Donate
[Donate Bitcoins](https://coinbase.com/checkouts/fc3041b9d8116e0b98e7d243c4727a30)

## License
Copyright (c) 2013 Francois-Guillaume Ribreau
MIT License
