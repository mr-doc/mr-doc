// import parsener from '../src/parsener';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("./helpers/test");
const read_1 = require("./helpers/read");
const indent_1 = require("./helpers/indent");
const { test, comment, tag, param, markdown, anytype, description, arrowfunc, intersect, union } = test_1.default.Parser;
describe('Parser', () => {
    /* Parse tags */
    it('should parse @tag', () => test('@tag', comment([tag('@tag')])));
    /* Parse tags with identifiers */
    it('should parse @tag id', () => test('@tag id', comment([
        tag('@tag', param('id'))
    ])));
    it('should parse @tag id', () => test('@tag ...id', comment([
        tag('@tag', param('...id'))
    ])));
    /* Parse tags with initializers */
    it('should parse @tag id = \'init\'', () => test('@tag id = \'init\'', comment([
        tag('@tag', param('id', null, "'init'"))
    ])));
    it('should parse @tag id = 1', () => test('@tag id = 1', comment([
        tag('@tag', param('id', null, "1"))
    ])));
    it('should parse @tag id = []', () => test('@tag id = []', comment([
        tag('@tag', param('id', null, "[]"))
    ])));
    it('should parse @tag id = {}', () => test('@tag id = {}', comment([
        tag('@tag', param('id', null, "{}"))
    ])));
    it('should parse @tag id = init', () => test('@tag id = init', comment([
        tag('@tag', param('id', null, "init"))
    ])));
    it('should parse @tag id = () => any', () => test('@tag id = () => any', comment([
        tag('@tag', param('id', null, arrowfunc(null, anytype('any'))))
    ])));
    it('should parse @tag id = (id) => any', () => test('@tag id = (id) => any', comment([
        tag('@tag', param('id', null, arrowfunc([
            param('id')
        ], anytype('any'))))
    ])));
    it('should parse @tag id = (id, id) => any', () => test('@tag id = (id, id) => any', comment([
        tag('@tag', param('id', null, arrowfunc([
            param('id'),
            param('id')
        ], anytype('any'))))
    ])));
    it('should parse @tag id = (id: any, id) => any', () => test('@tag id = (id: any, id) => any', comment([
        tag('@tag', param('id', null, arrowfunc([
            param('id', anytype('any')),
            param('id')
        ], anytype('any'))))
    ])));
    it('should parse @tag id = (id: any, id) => (any | any) & any', () => test('@tag id = (id: any, id) => (any | any) & any', comment([
        tag('@tag', param('id', null, arrowfunc([
            param('id', anytype('any')),
            param('id'),
        ], intersect([
            union([
                anytype('any'),
                anytype('any')
            ]),
            anytype('any')
        ]))))
    ])));
    it('should parse @tag id = (id: any | any, id) => any & any', () => test('@tag id = (id: any | any, id) => any & any', comment([
        tag('@tag', param('id', null, arrowfunc([
            param('id', union([
                anytype('any'),
                anytype('any')
            ])),
            param('id')
        ], intersect([
            anytype('any'),
            anytype('any')
        ]))))
    ])));
    it('should parse @tag id = (id?: any, id) => any | any', () => test('@tag id = (id?: any, id) => any | any', comment([
        tag('@tag', param('id', null, arrowfunc([
            param('id', anytype('any'), null, true),
            param('id')
        ], union([
            anytype('any'),
            anytype('any')
        ]))))
    ])));
    it('should parse @tag id = (id?: any, ...id: any[]) => any | any', () => test('@tag id = (id?: any, ...id: any[]) => any | any', comment([
        tag('@tag', param('id', null, arrowfunc([
            param('id', anytype('any'), null, true),
            param('...id', anytype('any[]'))
        ], union([
            anytype('any'),
            anytype('any')
        ]))))
    ])));
    it('should parse @tag id = (id?: any, id = 1) => any | any', () => test('@tag id = (id?: any, id = 1) => any | any', comment([
        tag('@tag', param('id', null, arrowfunc([
            param('id', anytype('any'), null, true),
            param('id', null, '1')
        ], union([
            anytype('any'),
            anytype('any')
        ]))))
    ])));
    it('should parse @tag id = (id?: any, id = init, id = init) => any', () => test('@tag id = (id?: any, id = init, id = init) => any', comment([
        tag('@tag', param('id', null, arrowfunc([
            param('id', anytype('any'), null, true),
            param('id', null, 'init'),
            param('id', null, 'init')
        ], anytype('any'))))
    ])));
    /* Parse tags with types (special words) */
    it('should parse @tag id: any', () => test('@tag id: any', comment([
        tag('@tag', param('id', anytype('any')))
    ])));
    it('should parse @tag id?: any', () => test('@tag id?: any', comment([
        tag('@tag', param('id', anytype('any'), null, true))
    ])));
    it('should parse @tag id: any | any', () => test('@tag id: any | any', comment([
        tag('@tag', param('id', union([
            anytype('any'),
            anytype('any')
        ])))
    ])));
    it('should parse @tag id: any & any', () => test('@tag id: any & any', comment([
        tag('@tag', param('id', intersect([
            anytype('any'),
            anytype('any')
        ])))
    ])));
    it('should parse @tag id: (any | any | any[])', () => test('@tag id: (any | any | any[])', comment([
        tag('@tag', param('id', union([
            anytype('any'),
            union([
                anytype('any'),
                anytype('any[]')
            ])
        ])))
    ])));
    it('should parse @tag id : (id: any & (any | any), id: any) => any', () => {
        test('@tag id : (id: any & (any | any), id: any) => any', comment([
            tag('@tag', param('id', arrowfunc([
                param('id', intersect([
                    anytype('any'),
                    union([
                        anytype('any'),
                        anytype('any')
                    ])
                ])),
                param('id', anytype('any'))
            ], anytype('any'))))
        ]));
    });
    describe('Real-world parse', () => {
        // From http://usejsdoc.org/howto-es2015-classes.html#documenting-a-simple-class
        const s0 = read_1.default(0);
        it(`should parse: \n${indent_1.default(s0, 2)}`, () => test(s0, comment([
            description('Create a point.'),
            tag('@param', param('x', anytype('number')), description('The x value.')),
            tag('@param', param('y', anytype('number')), description('The y value.'))
        ])));
        const s1 = read_1.default(1);
        it(`should parse \n${indent_1.default(s1, 2)}`, () => test(s1, comment([
            tag('@param', param('x', anytype('number')), description('The x value.')),
            tag('@param', param('y', anytype('number')), description('The y value.')),
            description('Create a point.'),
        ])));
        const s2 = read_1.default(2);
        it(`should parse: \n${indent_1.default(s2, 2)}`, () => test(s2, comment([
            description('Convert a string containing two comma-separated numbers into a point.'),
            tag('@param', param('str', anytype('string')), description('The string containing two comma-separated numbers.')),
            tag('@return', null, description('A Point object.'), anytype('Point'))
        ])));
        const s3 = read_1.default(3);
        it(`should parse \n${indent_1.default(s3, 2)}`, () => test(s3, comment([
            description('Create a dot.'),
            tag('@param', param('x', anytype('number')), description('The x value.')),
            tag('@param', param('y', anytype('number')), description('The y value.')),
            tag('@param', param('width', anytype('number')), description('The width of the dot, in pixels.')),
            markdown(`+--\n${read_1.default(3, 'md')}\n+--`)
        ])));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBDQUEwQzs7O0FBRzFDLHlDQUFrQztBQUNsQyx5Q0FBa0M7QUFDbEMsNkNBQXNDO0FBQ3RDLE1BQU0sRUFDSixJQUFJLEVBQ0osT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQ2pGLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUdoQixRQUFRLENBQUMsUUFBUSxFQUFFO0lBRWpCLGdCQUFnQjtJQUNoQixFQUFFLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXBFLGlDQUFpQztJQUNqQyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsTUFBTSxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQztRQUN2RCxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRUwsRUFBRSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUM7UUFDMUQsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVMLGtDQUFrQztJQUNsQyxFQUFFLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDO1FBQzdFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDekMsQ0FBQyxDQUFDLENB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