const Parser = require('./packages/mr-doc-parser');
const parser = (new Parser({language:'javascript', engine:'espree'})).factory();
const Compiler = require('./packages/mr-doc-compiler');
const compiler = (new Compiler({format: 'json'})).factory();

const _ = require('lodash');
const Symbol = require('./src/symbol');

var results = parser.parse({
  source:`
/**
 * @header
 * @file Does something
 * @module Vehicles
 * @version \${version}
 */

 /**
  * @interface Vehicle
  * @class Vehicle
  */
  class Vehicle {

  }

 /**
  * Creates a new instance of a car.
  * @class Car
  * @extends vehicle
  * @example
  * let honda = new Car('Honda');
  */
  class Car extends Vehicle {

  }
  /**
   * Greets the user
   * @jsfiddles greet
   * @return {string} The greeting messsage
   */
  export function greet(user) {
    return 'hello' + user;
  }
 `,
 path: './',
 name: 'test'
});

// compiler.compile(results, __dirname);

// Shows the class Honda tags and it's method tags. i.e.
// @class, @example, @returns
//
results.forEach(i => console.log(Object.keys(i)));
console.log();
var count = 0;
results.forEach(i => {
 console.log(`Index: ${count++}`);
 console.log();
  console.log('description: ', i.description);
  console.log('range: ', i.context.range);
  console.log('tags: ', i.tags);
  console.log('context.code:\n', i.context.code);
  console.log();

  if(i.class) console.log(i.class);
  if(i.returns) console.log(i.returns);
  if(i.examples) console.log(i.examples);
});
