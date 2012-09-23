# dox-foundation

Use dox to automatically generate beautiful html documentation.

Outputted HTML is based on templates and css from [ZURB's Foundation](http://foundation.zurb.com/) and syntax highlighting is done by [Prism.js](http://prismjs.com/). 

## Installation
Install the module with: `npm install dox-foundation -g`

## Documentation
```
$dox-foundation --help

  Usage: dox-foundation [options]

  Options:

    -h, --help            output usage information
    -V, --version         output the version number
    -r, --raw             output "raw" comments, leaving the markdown intact
    -d, --debug           output parsed comments for debugging
    -t, --title <string>  The title for the page produced

  Examples:

    # stdin
    $ dox-foundation > myfile.html

    # operates over stdio
    $ dox-foundation < myfile.js > myfile.html
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

## Release History
* *0.0.1* - Initial release

## License
Copyright (c) 2012 Matt McManus  
Licensed under the MIT license.
