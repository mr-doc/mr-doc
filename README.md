<img src="https://cl.ly/image/0x3g3I3c460q/content" width="40%" alt="Mr. Doc by Ben Matsuya">

Artwork by [Ben Matsuya](https://www.matsuyacreative.com/freelance-artist-ben-matsuya-comics-illustrator/).

[![Deps](https://david-dm.org/mr-doc/mr-doc.svg)](https://david-dm.org/mr-doc/mr-doc)
[![npm](https://img.shields.io/npm/v/mr-doc.svg)](https://www.npmjs.com/package/mr-doc)
[![Build](https://travis-ci.org/mr-doc/mr-doc.svg)](https://travis-ci.org/mr-doc/mr-doc)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/mr-doc/mr-doc/master/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/mr-doc.svg)](https://www.npmjs.com/package/mr-doc)

Mr. Doc
====================

A personal source documenter at your service.

# Updates

See [UPDATES.md](./UPDATES.md) for recents updates about this project.

# Architecture

## 1. Core Components

* Berman (dependency generator/engine)
* Tom (documentation syntax scanner and parser)
* Mr. Doc (documentation generator)

## 2. Process

The goal of Mr. Doc is to simply generate documentation from a source. In addition, we want to make sure that only sources that are not listed as private are generated. As mentioned in the README, Mr. Doc will be using a familiar syntax for documenting your code. 

To do so, we will use Berman to generate a dependecy graph and check whether a certain file should be included. This will also help us generate the hyperlinks between sources as well as generating a visual graph if needed. Once the graph is complete, we then proceed to Tom. 

Tom will then generate an array of ASTs from the documentation syntax in the source codes and will pass that information to Mr. Doc. 

Mr. Doc will have a compiler that will parse the source (i.e. Javascript) and will output the documentation (i.e. HTML). Note that the parser in Mr. Doc. is not the same as Tom. Tom only parses the documentation syntax which we can call it XDoc for now. Mr. Doc parses the actual source code and trims the code in question.

![Mr. Doc](img/arch.png "Mr. Doc Process")

## Berman

The logic behind Berman is to look each source file's import statements and determine which files does the source depend on. Using the dependency graph allows us to generate links between files.

## Tom

### Background

The concept of `@` remains but the syntax will be a little different from JSDoc.

I've seen some pretty confusing (in my opinion) syntax such as `@type {Array.<MyClass>}`  or `@param {*} somebody` and thought that there should be a natural way to express a type of array containing the instances of `MyClass` or a parameter named `somebody` that is a type of "whatever", respectively. So, I eventually came up with a syntax inspired by TypeScript and Swift, which is to define a type after a colon. Basically, adding the notion of a type-denoter to JSDoc/JavaDoc. Thus, we can convert our JSDoc comments to the following format:

```
/*
  @param {Array.<string>} names         → @param names: string[]
  @param {*} name                       → @param name: any
  @param {(any|string)} name            → @param name: any | string
  @param {string} [name]                → @param name?: string
  @param {???} [name = "Joe"]           → @param somebody: any | (string & number) = "Joe"
*/
```

### Writing Documentation

The way documentation is written is mostly inspired by [Rust](https://doc.rust-lang.org/book/second-edition/ch14-02-publishing-to-crates-io.html#making-useful-documentation-comments). Proper and consistent documentation leads to better understanding of one's code and the purpose of the code. In Mr. Doc, we will follow Rust's concept of writing the documentation using Markdown. The documentation must begin with a summary or a short description of the code. It should also be punctuated properly.

```javascript
[Use a single star block comment]
/*
    A car class.
    
    # API
    
    ```

    @class Car.
    @param make?: string - The maker of the car.
    @param year?: string - The year of the car.
    ```

    # Examples

    ```
    const car = new Car();
    car.honk();
    ```

*/

class Car {
    constructor(make, year) {
        this.make = make ? make : "";
        this.year = year ? year : "";
    }
    /*
        Moves the car toward a certain direction.

        # API
        
        ```
        @method run
        @param x: Number - The distance towards "x".
        @param y: Number - The distance towards "y".
        @param speed: Number - The speed of the car.
        ```
        
        # Examples

        ```
        car.run(10, 10, 50);
        ```

    */
    run (x, y, speed) {
        // ...
    }
    /*
      Slows down the car.

      # API

      ```
      @method brake
      @param pressure?: Number - The pressure to apply on the brake.
      ```

      # Examples

      ```
      car.brake(10)
      ```

      # Remark

      When no argument is passed, the default brake pressure is 5.
    */

   brake(pressure) {
     // ...
   }

}


/*
    An improved version of Car.
*/
class MySuperCar extends Car {

}

```


### Grammar (Rough Draft)

See [TomLexer.g4](./src/tom/grammar/TomLexer.g4) and [TomParser.g4](./src/tom/grammar/TomParser.g4) for a complete grammar.