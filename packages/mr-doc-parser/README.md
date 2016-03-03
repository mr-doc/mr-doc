# mr-doc-parser

This is a monolithic repo containing Mr. Doc's comment parser.

### Purpose

Parses the source and returns an array containing the parsed comments.

### Parsers

The parser is using the Factory Pattern to simply the task of creating a language agnostic parser. By simply passing the parser's options such as the `language` and `version`, the factory will create an instance of a parser based on those criteria. This instance will have a unified `parse` method.

Currently supported parsers:

* JavaScript
  * Acorn
  * Babylon
  * Espree
    * JSX
* Typescript (Experimental)

### Contribute

Creating a parser is simple. Because the source is written in TypeScript, you can use the parser interface (`interface.ts`) and implement the members of the interface. Then take a look at the parser for JavaScript and see how it's done!

#### Example

```ts

import IParser = require('../interface');
import Option = require('../option');

class MyParser implements IParser {
 // A parser may support different engine (optional)
 engine: string,
 // A parser may have different versions i.e. ES3 - ES7 (optional)
 version: string
 // A constructor that takes an option (required)
 constructor(options: Option.Parser);
 // A parse function to parse the source and comments (required)
 parse (file: Option.File) : any;
}
```
