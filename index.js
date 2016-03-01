const Parser = require('./packages/mr-doc-parser');
const parser = (new Parser({language:'javascript', parser:'babylon'})).factory();
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
 `,
 path: './',
 name: 'index'
});
 
results.forEach(console.log);