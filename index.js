const Parser = require('./packages/mr-doc-parser');
const parser = (new Parser({language:'javascript', parser:'espree'})).factory();
const Compiler = require('./packages/mr-doc-compiler');
const compiler = (new Compiler({format: 'json'})).factory();

const _ = require('lodash');
const Symbol = require('./src/symbol');

var results = parser.parse({
  source:`
 /**
  * Creates a new instance of a car.
  * @class Car
  * @example
  * let honda = new Car('Honda');
  */
  class Car {

  }
  /**
   * Greets the user
   * @return {string} The greeting messsage
   */
  function greet(user) {
    return \`Hello \${user}!\`;
  }

 `,
 path: './',
 name: 'test'
});

console.log(compiler.compile(results, __dirname));

// results.forEach(i => console.log(i.tags));
// console.log();
// results.forEach(i => (i.tags = _.flattenDeep(i.tags)));
// results.forEach(i => console.log(i.tags));
