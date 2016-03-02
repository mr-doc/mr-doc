const Parser = require('./packages/mr-doc-parser');
const parser = (new Parser({language:'javascript', parser:'acorn'})).factory();
var results = parser.parse({
  source:`
 /**
  * @class Car
  * @desc Creates a new instance of a car
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
 name: 'index'
});

console.log(results.length);
