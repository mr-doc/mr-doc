"use strict";
// import parsener from '../src/parsener';
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("./helpers/test");
const { test, comment, tag, param, init, description, markdown } = test_1.default.Parser;
describe('Parser', () => {
    /* Parse Description */
    it('should parse a description', () => test('description', comment(description('description'))));
    /* Parse Markdown */
    it('should scan a markdown code', () => test('+-- markdown +--', comment(markdown('+-- markdown +--'))));
    /* Parse tags */
    it('should parse @tag', () => test('@tag', comment(tag('@tag'))));
    /* Parse tags with identifiers */
    it('should parse @tag id', () => test('@tag id', comment(tag('@tag', param('id')))));
    it('should parse @tag ...id', () => test('@tag ...id', comment(tag('@tag', param('...id')))));
    /* Parse tags with initializers */
    it('should parse @tag id = \'init\'', () => test('@tag id = \'init\'', comment(tag('@tag', param('id', init("'init'"))))));
    it('should parse @tag id = 1', () => test('@tag id = 1', comment(tag('@tag', param('id', init("1"))))));
    it('should parse @tag id = []', () => test('@tag id = []', comment(tag('@tag', param('id', init("[]"))))));
    it('should parse @tag id = {}', () => test('@tag id = {}', comment(tag('@tag', param('id', init("{}"))))));
    it('should parse @tag id = init', () => test('@tag id = init', comment(tag('@tag', param('id', init("init"))))));
    // it('should parse @tag id = () => any', () => test('@tag id = () => any', comment([
    //   tag('@tag', param('id', null, arrowfunc(null, anytype('any'))))
    // ])));
    // it('should parse @tag id = (id) => any', () => test('@tag id = (id) => any', comment([
    //   tag('@tag', param('id', null, arrowfunc([
    //     param('id')
    //   ], anytype('any'))))
    // ])));
    // it('should parse @tag id = (id, id) => any', () => test('@tag id = (id, id) => any', comment([
    //   tag('@tag', param('id', null, arrowfunc([
    //     param('id'),
    //     param('id')
    //   ], anytype('any'))))
    // ])));
    // it('should parse @tag id = (id: any, id) => any', () =>
    //   test('@tag id = (id: any, id) => any', comment([
    //     tag('@tag', param('id', null, arrowfunc([
    //       param('id', anytype('any')),
    //       param('id')
    //     ], anytype('any'))))
    //   ])));
    // it('should parse @tag id = (id: any, id) => (any | any) & any', () =>
    //   test('@tag id = (id: any, id) => (any | any) & any', comment([
    //     tag('@tag', param('id', null, arrowfunc([
    //       param('id', anytype('any')),
    //       param('id'),
    //     ], intersect([
    //       union([
    //         anytype('any'),
    //         anytype('any')
    //       ]),
    //       anytype('any')
    //     ]))))
    //   ])));
    // it('should parse @tag id = (id: any | any, id) => any & any', () =>
    //   test('@tag id = (id: any | any, id) => any & any', comment([
    //     tag('@tag', param('id', null, arrowfunc([
    //       param('id', union([
    //         anytype('any'),
    //         anytype('any')
    //       ])),
    //       param('id')
    //     ], intersect([
    //       anytype('any'),
    //       anytype('any')
    //     ]))))
    //   ])));
    // it('should parse @tag id = (id?: any, id) => any | any', () =>
    //   test('@tag id = (id?: any, id) => any | any', comment([
    //     tag('@tag', param('id', null, arrowfunc([
    //       param('id', anytype('any'), null, true),
    //       param('id')
    //     ], union([
    //       anytype('any'),
    //       anytype('any')
    //     ]))))
    //   ])));
    // it('should parse @tag id = (id?: any, ...id: any[]) => any | any', () =>
    //   test('@tag id = (id?: any, ...id: any[]) => any | any', comment([
    //     tag('@tag', param('id', null, arrowfunc([
    //       param('id', anytype('any'), null, true),
    //       param('...id', anytype('any[]'))
    //     ], union([
    //       anytype('any'),
    //       anytype('any')
    //     ]))))
    //   ])));
    // it('should parse @tag id = (id?: any, id = 1) => any | any', () =>
    //   test('@tag id = (id?: any, id = 1) => any | any', comment([
    //     tag('@tag', param('id', null, arrowfunc([
    //       param('id', anytype('any'), null, true),
    //       param('id', null, '1')
    //     ], union([
    //       anytype('any'),
    //       anytype('any')
    //     ]))))
    //   ])));
    // it('should parse @tag id = (id?: any, id = init, id = init) => any', () =>
    //   test('@tag id = (id?: any, id = init, id = init) => any', comment([
    //     tag('@tag', param('id', null, arrowfunc([
    //       param('id', anytype('any'), null, true),
    //       param('id', null, 'init'),
    //       param('id', null, 'init')
    //     ], anytype('any'))))
    //   ])));
    // /* Parse tags with types (special words) */
    // it('should parse @tag id: any', () => test('@tag id: any', comment([
    //   tag('@tag', param('id', anytype('any')))
    // ])));
    // it('should parse @tag id?: any', () => test('@tag id?: any', comment([
    //   tag('@tag', param('id', anytype('any'), null, true))
    // ])));
    // it('should parse @tag id: any | any', () => test('@tag id: any | any', comment([
    //   tag('@tag', param('id', union([
    //     anytype('any'),
    //     anytype('any')
    //   ])))
    // ])));
    // it('should parse @tag id: any & any', () => test('@tag id: any & any', comment([
    //   tag('@tag', param('id', intersect([
    //     anytype('any'),
    //     anytype('any')
    //   ])))
    // ])));
    // it('should parse @tag id: (any | any | any[])', () => test('@tag id: (any | any | any[])', comment([
    //   tag('@tag', param('id', union([
    //     anytype('any'),
    //     union([
    //       anytype('any'),
    //       anytype('any[]')
    //     ])
    //   ])))
    // ])))
    // it('should parse @tag id : (id: any & (any | any), id: any) => any', () => {
    //   test('@tag id : (id: any & (any | any), id: any) => any', comment([
    //     tag('@tag', param('id', arrowfunc([
    //       param('id', intersect([
    //         anytype('any'),
    //         union([
    //           anytype('any'),
    //           anytype('any')
    //         ])
    //       ])),
    //       param('id', anytype('any'))
    //     ], anytype('any'))))
    //   ]))
    // });
    // describe('Real-world parse', () => {
    //   // From http://usejsdoc.org/howto-es2015-classes.html#documenting-a-simple-class
    //   const s0 = read(0);
    //   it(`should parse: \n${indent(s0, 2)}`, () => test(s0, comment([
    //     description('Create a point.'),
    //     tag('@param',
    //       param('x', anytype('number')),
    //       description('The x value.')
    //     ),
    //     tag('@param',
    //       param('y', anytype('number')),
    //       description('The y value.')
    //     )
    //   ])));
    //   const s1 = read(1);
    //   it(`should parse \n${indent(s1, 2)}`, () => test(s1, comment([
    //     tag('@param',
    //       param('x', anytype('number')),
    //       description('The x value.')
    //     ),
    //     tag('@param',
    //       param('y', anytype('number')),
    //       description('The y value.')
    //     ),
    //     description('Create a point.'),
    //   ])));
    //   const s2 = read(2);
    //   it(`should parse: \n${indent(s2, 2)}`, () => test(s2, comment([
    //     description('Convert a string containing two comma-separated numbers into a point.'),
    //     tag('@param',
    //       param('str', anytype('string')),
    //       description('The string containing two comma-separated numbers.')
    //     ),
    //     tag('@return', null,
    //       description('A Point object.'),
    //       anytype('Point')
    //     )
    //   ])));
    //   const s3 = read(3);
    //   it(`should parse \n${indent(s3, 2)}`, () => test(s3, comment([
    //     description('Create a dot.'),
    //     tag('@param', 
    //       param('x', anytype('number')),
    //       description('The x value.')
    //     ),
    //     tag('@param',
    //       param('y', anytype('number')),
    //       description('The y value.')
    //     ),
    //     tag('@param',
    //       param('width', anytype('number')),
    //       description('The width of the dot, in pixels.')
    //     ),
    //     markdown(`+--\n${read(3, 'md')}\n+--`)
    //   ])));
});
// }); 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQ0FBMEM7O0FBRzFDLHlDQUFrQztBQUdsQyxNQUFNLEVBQ0osSUFBSSxFQUNKLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUNqRCxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFHaEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDdEIsdUJBQXVCO0lBQ3ZCLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDaEcsb0JBQW9CO0lBQ3BCLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBRXhHLGdCQUFnQjtJQUNoQixFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWxFLGlDQUFpQztJQUNqQyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQ3RELEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUosRUFBRSxDQUFDLHlCQUF5QixFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUM1RCxHQUFHLENBQUMsTUFBTSxFQUFFLEtB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