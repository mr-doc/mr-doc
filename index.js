const Parser = require('./lib/parsers/');
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
 `,
 path: './',
 name: 'index'
});
 
results.forEach(console.log);