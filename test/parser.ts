// import parsener from '../src/parsener';
import parser from '../src/parser';
import * as Node from '../src/ast';
import * as AST from '../src/ast';
import * as _ from 'lodash';
import * as FS from 'fs';
import * as Path from 'path';
import * as OS from 'os';
import { assert } from 'chai';
import { TokenKind, getTokenName } from "../src/token/";
const { NodeType, } = AST;

function readComment(version: number, ext?: string) {
  return FS.readFileSync(Path.resolve(__dirname, './fixtures') + `/comments/${version}${ext ? '.' + ext : '.txt'}`, 'utf8');
}
function remove(obj, property: string | string[]) {
  for (let prop in obj) {
    if (prop === property) delete obj[prop];
    else if (typeof obj[prop] === 'object')
      remove(obj[prop], property);
  }
}

function test(source: string, match?: any) {
  const array = [];
  const result = parser(source).parse();
  remove(result, 'range');
  // console.dir(result, { depth: null, colors: true });
  assert.deepEqual(result, match)
}


function createNode(flag: AST.NodeType, kind: TokenKind) {
  return { flag, kind, flagName: AST.getNodeTypeName(flag), kindName: getTokenName(kind) }
}
function createComment(comments: any[]) {
  return _.assign({ comments }, createNode(NodeType.Comment, TokenKind.None));
}
function createDescriptionComment(description: string) {
  return _.assign({ description }, createNode(NodeType.DescriptionComment, TokenKind.Description));
}
function createMarkdownComment(markdown: string) {
  return _.assign({ markdown }, createNode(NodeType.MarkdownComment, TokenKind.Markdown));
}
function createTag(tag: string, parameter?: any, description?: any, type?: any) {
  return _.assign({ tag }, parameter ? { parameter } : {}, description ? { description } : {}, type ? { type } : {}, createNode(NodeType.TagComment, TokenKind.Tag));
}
function createFormalParameter(identifier: string, type?: any, initializer?: any, isOptional = false) {
  return _.assign({ identifier, isOptional }, type ? { type } : {}, initializer ? { initializer } : {}, createNode(NodeType.FormalParameter, TokenKind.None))
}
function createArrowFunction(parameters: any[], type: any) {
  return _.assign({ type }, parameters ? { parameters } : {}, createNode(NodeType.ArrowFunctionType, TokenKind.None));
}
function createUnionType(type: any[]) {
  return _.assign({ type }, createNode(NodeType.UnionType, TokenKind.Pipe));
}
function createIntersectionType(type: any[]) {
  return _.assign({ type }, createNode(NodeType.IntersectionType, TokenKind.Ampersand));
}

function createAnyType(type: string) {
  return _.assign({ type }, createNode(NodeType.Type, TokenKind.Any));
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

  it('should parse @tag id = (id: any, id) => any', () =>
    test('@tag id = (id: any, id) => any', createComment([
      createTag('@tag', createFormalParameter('id', null, createArrowFunction([
        createFormalParameter('id', createAnyType('any')),
        createFormalParameter('id')
      ], createAnyType('any'))))
    ])));

  it('should parse @tag id = (id: any, id) => (any | any) & any', () =>
    test('@tag id = (id: any, id) => (any | any) & any', createComment([
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

  it('should parse @tag id = (id: any | any, id) => any & any', () =>
    test('@tag id = (id: any | any, id) => any & any', createComment([
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

  it('should parse @tag id = (id?: any, id) => any | any', () =>
    test('@tag id = (id?: any, id) => any | any', createComment([
      createTag('@tag', createFormalParameter('id', null, createArrowFunction([
        createFormalParameter('id', createAnyType('any'), null, true),
        createFormalParameter('id')
      ], createUnionType([
        createAnyType('any'),
        createAnyType('any')
      ]))))
    ])));

  it('should parse @tag id = (id?: any, ...id: any[]) => any | any', () =>
    test('@tag id = (id?: any, ...id: any[]) => any | any', createComment([
      createTag('@tag', createFormalParameter('id', null, createArrowFunction([
        createFormalParameter('id', createAnyType('any'), null, true),
        createFormalParameter('...id', createAnyType('any[]'))
      ], createUnionType([
        createAnyType('any'),
        createAnyType('any')
      ]))))
    ])));

  it('should parse @tag id = (id?: any, id = 1) => any | any', () =>
    test('@tag id = (id?: any, id = 1) => any | any', createComment([
      createTag('@tag', createFormalParameter('id', null, createArrowFunction([
        createFormalParameter('id', createAnyType('any'), null, true),
        createFormalParameter('id', null, '1')
      ], createUnionType([
        createAnyType('any'),
        createAnyType('any')
      ]))))
    ])));
  it('should parse @tag id = (id?: any, id = init, id = init) => any', () =>
    test('@tag id = (id?: any, id = init, id = init) => any', createComment([
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
  ])))

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
    ]))
  });
  describe('Real-world parse', () => {
    // From http://usejsdoc.org/howto-es2015-classes.html#documenting-a-simple-class
    const s0 = readComment(0);

    it(`should parse: ${s0}`, () => test(s0, createComment([
      createDescriptionComment('Create a point.'),
      createTag('@param',
        createFormalParameter('x', createAnyType('number')),
        createDescriptionComment('The x value.')
      ),
      createTag('@param',
        createFormalParameter('y', createAnyType('number')),
        createDescriptionComment('The y value.')
      )
    ])));

    const s1 = readComment(1);

    it(`should parse ${OS.EOL}${s1}`, () => test(s1, createComment([
      createTag('@param',
        createFormalParameter('x', createAnyType('number')),
        createDescriptionComment('The x value.')
      ),
      createTag('@param',
        createFormalParameter('y', createAnyType('number')),
        createDescriptionComment('The y value.')
      ),
      createDescriptionComment('Create a point.'),
    ])));

    const s2 = readComment(2);

    it(`should parse: ${OS.EOL}${s2}`, () => test(s2, createComment([
      createDescriptionComment('Convert a string containing two comma-separated numbers into a point.'),
      createTag('@param',
        createFormalParameter('str', createAnyType('string')),
        createDescriptionComment('The string containing two comma-separated numbers.')
      ),
      createTag('@return', null,
        createDescriptionComment('A Point object.'),
        createAnyType('Point')
      )
    ])));

    const s3 = readComment(3);

    it(`should parse ${OS.EOL}${s3}`, () => test(s3, createComment([
      createDescriptionComment('Create a dot.'),
      createTag('@param', 
        createFormalParameter('x', createAnyType('number')),
        createDescriptionComment('The x value.')
      ),
      createTag('@param',
        createFormalParameter('y', createAnyType('number')),
        createDescriptionComment('The y value.')
      ),
      createTag('@param',
        createFormalParameter('width', createAnyType('number')),
        createDescriptionComment('The width of the dot, in pixels.')
      ),
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