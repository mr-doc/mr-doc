<img src="http://cl.ly/image/0x3g3I3c460q/content" width="40%" alt="Mr. Doc by Ben Matsuya">

Artwork by [Ben Matsuya](http://www.matsuyacreative.com/about/).

[![Deps](https://david-dm.org/mr-doc/mr-doc.svg)](https://david-dm.org/mr-doc/mr-doc)
[![npm](https://img.shields.io/npm/v/mr-doc.svg)](https://www.npmjs.com/package/mr-doc)
[![Build](https://travis-ci.org/mr-doc/mr-doc.svg)](https://travis-ci.org/mr-doc/mr-doc)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/mr-doc/mr-doc/master/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/mr-doc.svg)](https://www.npmjs.com/package/mr-doc)


## Status

This master branch is in work in progress. ~Please see #108, #109, #110 for progress.~

To whom it may concern,

Yes, I am still working on this. 

Before the year 2017 concludes, I wanted to let you know the thoughts I had and the progress I've made for Mr. Doc:

1.  **Mr. Doc is taking a different approach from JSDoc.**

The concept of `@` remains but the syntax will be a little different.

I've seen some pretty confusing (in my opinion) syntax such as `@type {Array.<MyClass>}`  or `@param {*} somebody` and thought that there should be a natural way to express a type of array containing the instances of `MyClass` or a parameter named `somebody` that is a type of "whatever", respectively. So, I eventually came up with a syntax inspired by TypeScript and Swift, which is to define a type after a colon. Basically, adding the notion of a type-denoter to JSDoc/JavaDoc. Thus, convert our jsdoc comment docs to the following format:

```
/*
  @param {Array.<string>} names         → @param names: string[]
  @param {*} name                       → @param name: any
  @param {(any|string)} name            → @param name: any | string
  @param {string} [name]                → @param name?: string
  @param {???} [name = "Joe"]           → @param somebody: any | (string & number) = "Joe"
*/
```

There a few things to keep in mind:

 - Tom, the main parser that generates an AST from the comments, has no notion of types. It does not know what a string, number, object, any, etc is. 
 - It also does not understand the JSDoc specific tags, except for `@return` since the scanner needs to know if there is a type/identifier after the tag.
 - At the moment, Tom's capabilities are limited. Concepts such as functions or closures as parameters are encountered in many languages today, however, Tom cannot parse a syntax such as `@param my_awesome_func: (string, number) => number`. In the mean time, you can define a parameter as a function like so: `@param my_awesome_func: function`.
 - Tom can scan a single star comment but will try its best to scan a double star comment.

2. **Mr. Doc is starting anew.**

As I try to complete v4.0.0, I will not focus on backward compatibility. Consider the next version to be a complete change or even the new 1.0.0. For example, options that you've used in the past may not exist (but could be re-introduced as Mr. Doc stabilizes). Themes that currently exist **will not work with v4 and beyond**. Even the theming system will not be available in v4. Again, the focus is on building the basics first to get Mr. Doc back up and running.

3. **The progess made so far and additional thoughts:**

Since [December of last year](https://github.com/mr-doc/mr-doc/pull/127/commits/130bc64974bba1a77d96a3b4f1fc75eb52435ee0), I've been working on Tom and finally completed the first version. It took a long time since 
  - I am a full-time student & part-timer 
  - I'm still not familiar with the rapidly changing tech such as next.js, lerna, etc. 
  - I seem to be the only one working on this.

That being said, here's what I plan to work on next:

  - [ ] Frontend
    - [ ] Figure out the interface and what to expect from the user.
          For example, maybe introduce a config file that let's mr-doc 
          know which files to include or exclude for the generation process.
    
  - [ ] Backend (Language-Parser)
    - [ ] Focus on JavaScript for now and only use babel as the JavaScript parser.
  
  - [ ] Backend (Documentation Generator)
    - [ ] Look into next.js which can generate static pages using React.
    - [ ] Mimic Rust's documentation generator where we can generate and serve the doc immediately.
  
  - [ ] Backend (Comment Parser)
    - [ ] Add support for closures and closure-expressions (PRs accepted).
    - [ ] Add support for labels (maybe; PRs accepted). For example, `@param [async, throws] my_awesome_func: function`
 
 I will be updating the readme as time goes on. 
 
 Apart from the update, Happy New Years!
 
 \- [Takeshi](https://github.com/iwatakeshi)
