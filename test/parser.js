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
function readComment(file, ext) {
    return FS.readFileSync(Path.resolve(__dirname, './fixtures') + `/comments/${file}${ext ? '.' + ext : '.txt'}`, 'utf8');
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
            createMarkdownComment(`+--\n${readComment(3, 'md')}\n+--`)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMENBQTBDO0FBQzFDLDBDQUFtQztBQUVuQyxrQ0FBa0M7QUFDbEMsNEJBQTRCO0FBQzVCLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCLCtCQUE4QjtBQUM5QixvQ0FBd0Q7QUFDeEQsTUFBTSxFQUFFLFFBQVEsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUUxQixxQkFBcUIsSUFBcUIsRUFBRSxHQUFZO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLGFBQWEsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3pILENBQUM7QUFFRCxnQkFBZ0IsR0FBRyxFQUFFLFFBQTJCO0lBQzlDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckIsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQztZQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxRQUFRLENBQUM7WUFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0FBQ0gsQ0FBQztBQUVELGNBQWMsTUFBYyxFQUFFLEtBQVc7SUFDdkMsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLE1BQU0sTUFBTSxHQUFHLGdCQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEMsTUFBTSxDQUFDLE1BQU0sRUFB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