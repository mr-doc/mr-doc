"use strict";
// import parsener from '../src/parsener';
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("./helpers/test");
const { test, comment, tag, param, init, description, markdown, union, intersect, any, group } = test_1.default.Parser;
describe('Parser', () => {
    /* Parse Description */
    it('should parse a description', () => test('description', comment(description('description'))));
    /* Parse Markdown */
    it('should parse a markdown code', () => test('+-- markdown +--', comment(markdown('+-- markdown +--'))));
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
    /* Parse optional tags */
    it('should parse @tag id?', () => test('@tag id?', comment(tag('@tag', param('id', null, null, true)))));
    it('should parse @tag id?: any', () => test('@tag id?: any', comment(tag('@tag', param('id', null, any('any'), true)))));
    it('should parse @tag id?: (any)', () => test('@tag id?: (any)', comment(tag('@tag', param('id', null, group(any('any')), true)))));
    /* Parse tag with union/intersection types */
    it('should parse @tag id: any | any', () => test('@tag id: any | any', comment(tag('@tag', param('id', null, union([
        any('any'),
        any('any')
    ]))))));
    it('should parse @tag id: any & any', () => test('@tag id: any & any', comment(tag('@tag', param('id', null, intersect([
        any('any'),
        any('any')
    ]))))));
    it('should parse @tag id: (any | any) | any', () => test('@tag id: (any | any) | any', comment(tag('@tag', param('id', null, union([
        group(union([
            any('any'),
            any('any')
        ])),
        any('any')
    ]))))));
    it('should parse @tag id: (any & any) & any', () => test('@tag id: (any & any) & any', comment(tag('@tag', param('id', null, intersect([
        group(intersect([
            any('any'),
            any('any')
        ])),
        any('any')
    ]))))));
    it('should parse @tag id: any & any | any', () => test('@tag id: any & any | any', comment(tag('@tag', param('id', null, intersect([
        any('any'),
        union([
            any('any'),
            any('any')
        ])
    ]))))));
    it('should parse @tag id: any | any & any', () => test('@tag id: any | any & any', comment(tag('@tag', param('id', null, union([
        any('any'),
        intersect([
            any('any'),
            any('any')
        ])
    ]))))));
    it('should parse @tag id: any | any & any = 1', () => test('@tag id: any | any & any = 1', comment(tag('@tag', param('id', init('1'), union([
        any('any'),
        intersect([
            any('any'),
            any('any')
        ])
    ]))))));
    it('should parse @tag id: any | (any & any) = 1', () => test('@tag id: any | (any & any) = 1', comment(tag('@tag', param('id', init('1'), union([
        any('any'),
        group(intersect([
            any('any'),
            any('any')
        ]))
    ]))))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQ0FBMEM7O0FBRzFDLHlDQUFrQztBQUdsQyxNQUFNLEVBQ0osSUFBSSxFQUNKLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFDL0UsR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBR2hCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQ3RCLHVCQUF1QjtJQUN2QixFQUFFLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2hHLG9CQUFvQjtJQUNwQixFQUFFLENBQUMsOEJBQThCLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUV6RyxnQkFBZ0I7SUFDaEIsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVsRSxpQ0FBaUM7SUFDakMsRUFBRSxDQUFDLHNCQUFzQixFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUN0RCxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUN6QixDQUFDLENBQUMsQ0FBQztJQUVKLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFB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