"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import parsener from '../src/parsener';
const parser_1 = require("../src/parser");
const AST = require("../src/ast");
const _ = require("lodash");
const FS = require("fs");
const Path = require("path");
const OS = require("os");
const chai_1 = require("chai");
const _1 = require("../src/token/");
const { NodeType, } = AST;
function readComment(version, ext) {
    return FS.readFileSync(Path.resolve(__dirname, './fixtures') + `/comments/${version}${ext ? '.' + ext : '.txt'}`, 'utf8');
}
function remove(obj, property) {
    for (let prop in obj) {
        if (prop === property)
            delete obj[prop];
        else if (typeof obj[prop] === 'object')
            remove(obj[prop], property);
    }
}
function test(source, match) {
    const array = [];
    const result = parser_1.default(source).parse();
    remove(result, 'range');
    // console.dir(result, { depth: null, colors: true });
    chai_1.assert.deepEqual(result, match);
}
function createNode(flag, kind) {
    return { flag, kind, flagName: AST.getNodeTypeName(flag), kindName: _1.getTokenName(kind) };
}
function createComment(comments) {
    return _.assign({ comments }, createNode(1 /* Comment */, _1.TokenKind.None));
}
function createDescriptionComment(description) {
    return _.assign({ description }, createNode(2 /* DescriptionComment */, _1.TokenKind.Description));
}
function createMarkdownComment(markdown) {
    return _.assign({ markdown }, createNode(4 /* MarkdownComment */, _1.TokenKind.Markdown));
}
function createTag(tag, parameter, description, type) {
    return _.assign({ tag }, parameter ? { parameter } : {}, description ? { description } : {}, type ? { type } : {}, createNode(3 /* TagComment */, _1.TokenKind.Tag));
}
function createFormalParameter(identifier, type, initializer, isOptional = false) {
    return _.assign({ identifier, isOptional }, type ? { type } : {}, initializer ? { initializer } : {}, createNode(5 /* FormalParameter */, _1.TokenKind.None));
}
function createArrowFunction(parameters, type) {
    return _.assign({ type }, parameters ? { parameters } : {}, createNode(12 /* ArrowFunctionType */, _1.TokenKind.None));
}
function createUnionType(type) {
    return _.assign({ type }, createNode(10 /* UnionType */, _1.TokenKind.Pipe));
}
function createIntersectionType(type) {
    return _.assign({ type }, createNode(11 /* IntersectionType */, _1.TokenKind.Ampersand));
}
function createAnyType(type) {
    return _.assign({ type }, createNode(9 /* Type */, _1.TokenKind.Any));
}
describe('Parser', () => {
    /* Parse tags */
    it('should parse @tag', () => test('@tag', createComment([createTag('@tag')])));
    /* Parse tags with identifiers */
    it('should parse @tag id', () => test('@tag id', createComment([
        createTag('@tag', createFormalParameter('id'))
    ])));
    it('should parse @tag id', () => test('@tag ...id', createComment([
        createTag('@tag', createFormalParameter('...id'))
    ])));
    /* Parse tags with initializers */
    it('should parse @tag id = \'init\'', () => test('@tag id = \'init\'', createComment([
        createTag('@tag', createFormalParameter('id', null, "'init'"))
    ])));
    it('should parse @tag id = 1', () => test('@tag id = 1', createComment([
        createTag('@tag', createFormalParameter('id', null, "1"))
    ])));
    it('should parse @tag id = []', () => test('@tag id = []', createComment([
        createTag('@tag', createFormalParameter('id', null, "[]"))
    ])));
    it('should parse @tag id = {}', () => test('@tag id = {}', createComment([
        createTag('@tag', createFormalParameter('id', null, "{}"))
    ])));
    it('should parse @tag id = init', () => test('@tag id = init', createComment([
        createTag('@tag', createFormalParameter('id', null, "init"))
    ])));
    it('should parse @tag id = () => any', () => test('@tag id = () => any', createComment([
        createTag('@tag', createFormalParameter('id', null, createArrowFunction(null, createAnyType('any'))))
    ])));
    it('should parse @tag id = (id) => any', () => test('@tag id = (id) => any', createComment([
        createTag('@tag', createFormalParameter('id', null, createArrowFunction([
            createFormalParameter('id')
        ], createAnyType('any'))))
    ])));
    it('should parse @tag id = (id, id) => any', () => test('@tag id = (id, id) => any', createComment([
        createTag('@tag', createFormalParameter('id', null, createArrowFunction([
            createFormalParameter('id'),
            createFormalParameter('id')
        ], createAnyType('any'))))
    ])));
    it('should parse @tag id = (id: any, id) => any', () => test('@tag id = (id: any, id) => any', createComment([
        createTag('@tag', createFormalParameter('id', null, createArrowFunction([
            createFormalParameter('id', createAnyType('any')),
            createFormalParameter('id')
        ], createAnyType('any'))))
    ])));
    it('should parse @tag id = (id: any, id) => (any | any) & any', () => test('@tag id = (id: any, id) => (any | any) & any', createComment([
        createTag('@tag', createFormalParameter('id', null, createArrowFunction([
            createFormalParameter('id', createAnyType('any')),
            createFormalParameter('id'),
        ], createIntersectionType([
            createUnionType([
                createAnyType('any'),
                createAnyType('any')
            ]),
            createAnyType('any')
        ]))))
    ])));
    it('should parse @tag id = (id: any | any, id) => any & any', () => test('@tag id = (id: any | any, id) => any & any', createComment([
        createTag('@tag', createFormalParameter('id', null, createArrowFunction([
            createFormalParameter('id', createUnionType([
                createAnyType('any'),
                createAnyType('any')
            ])),
            createFormalParameter('id')
        ], createIntersectionType([
            createAnyType('any'),
            createAnyType('any')
        ]))))
    ])));
    it('should parse @tag id = (id?: any, id) => any | any', () => test('@tag id = (id?: any, id) => any | any', createComment([
        createTag('@tag', createFormalParameter('id', null, createArrowFunction([
            createFormalParameter('id', createAnyType('any'), null, true),
            createFormalParameter('id')
        ], createUnionType([
            createAnyType('any'),
            createAnyType('any')
        ]))))
    ])));
    it('should parse @tag id = (id?: any, ...id: any[]) => any | any', () => test('@tag id = (id?: any, ...id: any[]) => any | any', createComment([
        createTag('@tag', createFormalParameter('id', null, createArrowFunction([
            createFormalParameter('id', createAnyType('any'), null, true),
            createFormalParameter('...id', createAnyType('any[]'))
        ], createUnionType([
            createAnyType('any'),
            createAnyType('any')
        ]))))
    ])));
    it('should parse @tag id = (id?: any, id = 1) => any | any', () => test('@tag id = (id?: any, id = 1) => any | any', createComment([
        createTag('@tag', createFormalParameter('id', null, createArrowFunction([
            createFormalParameter('id', createAnyType('any'), null, true),
            createFormalParameter('id', null, '1')
        ], createUnionType([
            createAnyType('any'),
            createAnyType('any')
        ]))))
    ])));
    it('should parse @tag id = (id?: any, id = init, id = init) => any', () => test('@tag id = (id?: any, id = init, id = init) => any', createComment([
        createTag('@tag', createFormalParameter('id', null, createArrowFunction([
            createFormalParameter('id', createAnyType('any'), null, true),
            createFormalParameter('id', null, 'init'),
            createFormalParameter('id', null, 'init')
        ], createAnyType('any'))))
    ])));
    /* Parse tags with types (special words) */
    it('should parse @tag id: any', () => test('@tag id: any', createComment([
        createTag('@tag', createFormalParameter('id', createAnyType('any')))
    ])));
    it('should parse @tag id?: any', () => test('@tag id?: any', createComment([
        createTag('@tag', createFormalParameter('id', createAnyType('any'), null, true))
    ])));
    it('should parse @tag id: any | any', () => test('@tag id: any | any', createComment([
        createTag('@tag', createFormalParameter('id', createUnionType([
            createAnyType('any'),
            createAnyType('any')
        ])))
    ])));
    it('should parse @tag id: any & any', () => test('@tag id: any & any', createComment([
        createTag('@tag', createFormalParameter('id', createIntersectionType([
            createAnyType('any'),
            createAnyType('any')
        ])))
    ])));
    it('should parse @tag id: (any | any | any[])', () => test('@tag id: (any | any | any[])', createComment([
        createTag('@tag', createFormalParameter('id', createUnionType([
            createAnyType('any'),
            createUnionType([
                createAnyType('any'),
                createAnyType('any[]')
            ])
        ])))
    ])));
    it('should parse @tag id : (id: any & (any | any), id: any) => any', () => {
        test('@tag id : (id: any & (any | any), id: any) => any', createComment([
            createTag('@tag', createFormalParameter('id', createArrowFunction([
                createFormalParameter('id', createIntersectionType([
                    createAnyType('any'),
                    createUnionType([
                        createAnyType('any'),
                        createAnyType('any')
                    ])
                ])),
                createFormalParameter('id', createAnyType('any'))
            ], createAnyType('any'))))
        ]));
    });
    describe('Real-world parse', () => {
        // From http://usejsdoc.org/howto-es2015-classes.html#documenting-a-simple-class
        const s0 = readComment(0);
        it(`should parse: ${s0}`, () => test(s0, createComment([
            createDescriptionComment('Create a point.'),
            createTag('@param', createFormalParameter('x', createAnyType('number')), createDescriptionComment('The x value.')),
            createTag('@param', createFormalParameter('y', createAnyType('number')), createDescriptionComment('The y value.'))
        ])));
        const s1 = readComment(1);
        it(`should parse ${OS.EOL}${s1}`, () => test(s1, createComment([
            createTag('@param', createFormalParameter('x', createAnyType('number')), createDescriptionComment('The x value.')),
            createTag('@param', createFormalParameter('y', createAnyType('number')), createDescriptionComment('The y value.')),
            createDescriptionComment('Create a point.'),
        ])));
        const s2 = readComment(2);
        it(`should parse: ${OS.EOL}${s2}`, () => test(s2, createComment([
            createDescriptionComment('Convert a string containing two comma-separated numbers into a point.'),
            createTag('@param', createFormalParameter('str', createAnyType('string')), createDescriptionComment('The string containing two comma-separated numbers.')),
            createTag('@return', null, createDescriptionComment('A Point object.'), createAnyType('Point'))
        ])));
        const s3 = readComment(3);
        it(`should parse ${OS.EOL}${s3}`, () => test(s3, createComment([
            createDescriptionComment('Create a dot.'),
            createTag('@param', createFormalParameter('x', createAnyType('number')), createDescriptionComment('The x value.')),
            createTag('@param', createFormalParameter('y', createAnyType('number')), createDescriptionComment('The y value.')),
            createTag('@param', createFormalParameter('width', createAnyType('number')), createDescriptionComment('The width of the dot, in pixels.')),
            createMarkdownComment(`+--${OS.EOL}# Create a dot${OS.EOL}${OS.EOL}Example usage${OS.EOL}\`\`\`${OS.EOL}const dot = new Dot();${OS.EOL}\`\`\`${OS.EOL}+--`)
        ])));
    });
});
// const actual = parser(readComment(2)).parse();
// remove(actual, 'range');
// let ordered = {};
// Object.keys(actual).sort().forEach(function (key) {
//   ordered[key] = actual[key];
// });
// console.dir(ordered, { depth: null, colors: true })
// // console.log(JSON.stringify(ordered));
// ordered = {}
// const expected = createComment([
//   createDescriptionComment('Convert a string containing two comma-separated numbers into a point.'),
//   createTag('@param',
//     createFormalParameter('str', createAnyType('string')),
//     createDescriptionComment('The string containing two comma-separated numbers.')
//   ),
//   createTag('@return', null,
//     createDescriptionComment('A Point object.'),
//     createAnyType('Point')
//   )
// ]);
// Object.keys(expected).sort().forEach(function (key) {
//   ordered[key] = expected[key];
// });
// console.dir(ordered, { depth: null, colors: true })
// console.log(JSON.stringify(ordered)) 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMENBQTBDO0FBQzFDLDBDQUFtQztBQUVuQyxrQ0FBa0M7QUFDbEMsNEJBQTRCO0FBQzVCLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCLCtCQUE4QjtBQUM5QixvQ0FBd0Q7QUFDeEQsTUFBTSxFQUFFLFFBQVEsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUUxQixxQkFBcUIsT0FBZSxFQUFFLEdBQVk7SUFDaEQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUcsYUFBYSxPQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDNUgsQ0FBQztBQUNELGdCQUFnQixHQUFHLEVBQUUsUUFBMkI7SUFDOUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDO1lBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsQ0FBQztZQUNyQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7QUFDSCxDQUFDO0FBRUQsY0FBYyxNQUFjLEVBQUUsS0FBVztJQUN2QyxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDakIsTUFBTSxNQUFNLEdBQUcsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0QyxNQUFNLENBQUMsTUFBTSxFQUFF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