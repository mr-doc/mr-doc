# mr-doc-compiler

This is a monolithic repo containing Mr. Doc's comment parser.

### Purpose

Takes the parsed comments and returns viewable output.

### Compiler

The compiler is using the Factory Pattern to simply the task of creating a front-end agnostic documenter. By simply passing the compiler's options such as the `format` and `template`, the factory will create an instance of a compiler based on those criteria. This instance will have a unified `compile` method.

Currently supported compilers:

* JSON

### Contribute

Creating a compiler is simple. Because the source is written in TypeScript, you can use the compiler interface (`interface.ts`) and implement the members of the interface. Then take a look at the compiler for JSON (or others) and see how it's done!

#### Example

```ts

import ICompiler = require('../interface');
import Option = require('../option');

class MyCompiler implements ICompiler {
 // A compiler may support different format i.e. JSON, HTML, etc (optional)
 format?: string,
 // A parser may have different templates i.e. Jade, Mustache, etc (optional)
 template?: string
 // A constructor that takes an option (required)
 constructor(options: Option.Compiler);
 // A compile function that compiles the comments (required)
 compile (comments: any[], path:string) : any;
 // A asynchronous version of compile() (optional)
 compileAsync ?(comments: any[], path:string) : any;
}
```
