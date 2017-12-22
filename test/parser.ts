// import parsener from '../src/parsener';

import { TokenType, getTokenName } from "../src/token/";
import Test from './helpers/test';
import read from './helpers/read';
import indent from './helpers/indent';
const {
  test,
  comment, tag, param, init, description, markdown, union, intersect, any, group
} = Test.Parser;


describe('Parser', () => {
  /* Parse Description */
  it('should parse a description', () => test('description', comment(description('description'))))
  /* Parse Markdown */
  it('should parse a markdown code', () => test('+-- markdown +--', comment(markdown('+-- markdown +--'))))
  
  /* Parse tags */
  it('should parse @tag', () => test('@tag', comment(tag('@tag'))));

  /* Parse tags with identifiers */
  it('should parse @tag id', () => test('@tag id', comment(
    tag('@tag', param('id'))
  )));

  it('should parse @tag ...id', () => test('@tag ...id', comment(
    tag('@tag', param('...id'))
  )));

  /* Parse tags with initializers */
  it('should parse @tag id = \'init\'', () => test('@tag id = \'init\'', comment(
    tag('@tag', param('id', init("'init'")))
  )));
  it('should parse @tag id = 1', () => test('@tag id = 1', comment(
    tag('@tag', param('id', init("1")))
  )));
  it('should parse @tag id = []', () => test('@tag id = []', comment(
    tag('@tag', param('id', init("[]")))
  )));
  it('should parse @tag id = {}', () => test('@tag id = {}', comment(
    tag('@tag', param('id', init("{}")))
  )));
  it('should parse @tag id = init', () => test('@tag id = init', comment(
    tag('@tag', param('id', init("init")))
  )));

  /* Parse optional tags */
  it('should parse @tag id?', () => test('@tag id?', comment(
    tag('@tag', param('id', null, null, true))
  )));

  it('should parse @tag id?: any', () => test('@tag id?: any', comment(
    tag('@tag', param('id', null, any('any'), true))
  )))

  it('should parse @tag id?: (any)', () => test('@tag id?: (any)', comment(
    tag('@tag', param('id', null, group(any('any')), true))
  )));
  
  /* Parse tag with union/intersection types */
  it('should parse @tag id: any | any', () => test('@tag id: any | any', comment(
    tag('@tag', param('id', null, union([
      any('any'),
      any('any')
    ])))
  )));

  it('should parse @tag id: any & any', () => test('@tag id: any & any', comment(
    tag('@tag', param('id', null, intersect([
      any('any'),
      any('any')
    ])))
  )));

  it('should parse @tag id: (any | any) | any', () => test('@tag id: (any | any) | any', comment(
    tag('@tag', param('id', null, union([
      group(union([
        any('any'),
        any('any')
      ])),
      any('any')
    ])))
  )));

  it('should parse @tag id: (any & any) & any', () => test('@tag id: (any & any) & any', comment(
    tag('@tag', param('id', null, intersect([
      group(intersect([
        any('any'),
        any('any')
      ])),
      any('any')
    ])))
  )));

  it('should parse @tag id: any & any | any', () => test('@tag id: any & any | any', comment(
    tag('@tag', param('id', null, intersect([
      any('any'),
      union([
        any('any'),
        any('any')
      ])
    ])))
  )));

  it('should parse @tag id: any | any & any', () => test('@tag id: any | any & any', comment(
    tag('@tag', param('id', null, union([
      any('any'),
      intersect([
        any('any'),
        any('any')
      ])
    ])))
  )));

  it('should parse @tag id: any | any & any = 1', () => test('@tag id: any | any & any = 1', comment(
    tag('@tag', param('id', init('1'), union([
      any('any'),
      intersect([
        any('any'),
        any('any')
      ])
    ])))
  )));

  it('should parse @tag id: any | (any & any) = 1', () => test('@tag id: any | (any & any) = 1', comment(
    tag('@tag', param('id', init('1'), union([
      any('any'),
      group(intersect([
        any('any'),
        any('any')
      ]))
    ])))
  )));

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