## Status

This master branch is in work in progress. ~Please see #108, #109, #110 for progress.~

### 7 / 11 / 2018

While it was a good learning experience, I've decided that my original parser, Tom, had some limitations when it came to matching complex productions in my inteded grammar. Also, my knowledge about grammar was limited at the time. Now, I think I have a much better understanding about grammar after reading Terence Parr's book, The Definitive Anltr 4 Reference.

Today, I introduce two grammar files, [TomLexer.g4](./src/tom/grammar/TomLexer.g4) and [TomParser.g4](./src/tom/grammar/TomParser.g4). Named after my professor who taught my class language processing,
Tom is powerful enough to support most "expressions" for documentations. Of course, optimizations
might be needed. Thus, feel free to create pull requests to enhance the grammar.

Finally, you may have noticed that the README shows a better way to write documentions. I don't have an official name yet, but I think I would call it XDoc. 'X' because it is very generic, which is perfect for a documentation parser that isn't picky about what programming language you use. So, you can now shout, "Markdown For The Win!". What this means is that I will be using a markdown parser and simply parse only the code blocks that contain XDoc. For now, this may sound easy but we'll see how it goes in practice.

### Can't recall / 2017

To whom it may concern,

Yes, I am still working on this. 

Before the year 2017 concludes, I wanted to let you know the thoughts I had and the progress I've made for Mr. Doc:

1.  **Mr. Doc is taking a different approach from JSDoc.**

The concept of `@` remains but the syntax will be a little different.

I've seen some pretty confusing (in my opinion) syntax such as `@type {Array.<MyClass>}`  or `@param {*} somebody` and thought that there should be a natural way to express a type of array containing the instances of `MyClass` or a parameter named `somebody` that is a type of "whatever", respectively. So, I eventually came up with a syntax inspired by TypeScript and Swift, which is to define a type after a colon. Basically, adding the notion of a type-denoter to JSDoc/JavaDoc. Thus, we can convert our JSDoc comments to the following format:

```
  @param {Array.<string>} names         → @param names: string[]
  @param {*} name                       → @param name: any
  @param {(any|string)} name            → @param name: any | string
  @param {string} [name]                → @param name?: string
  @param {???} [name = "Joe"]           → @param somebody: any | (string & number) = "Joe"
```

There a few things to keep in mind:

 - Tom, the main parser that generates an AST from the comments, has no notion of types. It does not know what a string, number, object, any, etc is. 
 - It also does not understand the JSDoc specific tags, except for `@return` since the scanner needs to know if there is a type/identifier after the tag.
 - At the moment, Tom's capabilities are limited. Concepts such as functions or closures as parameters are encountered in many languages today, however, Tom cannot parse a syntax such as `@param my_awesome_func: (string, number) => number`. In the mean time, you can define a parameter as a function like so: `@param my_awesome_func: function`.
 - Tom can scan a single star comment but will try its best to scan a double star comment.
 - Tom can parse descriptions (with caveats) and markdown comments (using the `+--` delimiters)
   - Descriptions are scanned from the beginning of the first character until a new line is reached. Thus,
   you may have multiple descriptions in a single comment even if your intent was to have a single description
   that contained more that one sentence (i.e. a paragraph). Of course, PR's are welcomed to fix this if it's an issue to you.

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
    
  - [ ] Backend (Language Parser)
    - [ ] Focus on JavaScript for now and only use babel as the JavaScript parser.
  
  - [ ] Backend (Documentation Generator)
    - [ ] Look into next.js which can generate static pages using React.
    - [ ] Mimic Rust's documentation generator where we can generate and serve the doc immediately.
  
  - [ ] Backend (Tom: Comment Parser)
    - [ ] Add support for closures and closure-expressions (PRs welcomed).
    - [ ] Add support for labels (maybe; PRs welcomed). For example, `@param [async, throws] my_awesome_func: function`
 
 I will be updating the readme as time goes on. 
 
 Apart from the update, Happy New Years!
 
 \- [Takeshi](https://github.com/iwatakeshi)
