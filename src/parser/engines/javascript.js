'use strict';

const Babylon = require('babylon');
const Acorn = require('acorn');
const Espree = require('espree');
const ESCodeGen = require('escodegen');
const ESTraverse = require('estraverse');
const traverse = require('babel-traverse').default;

const opts = {
  acorn: (version, comments, tokens) => ({
    ecmaVersion: version,
    locations: true,
    onComment: comments,
    onToken: tokens,
    ranges: true,
  }),
  babylon: () => ({
    allowImportExportEverywhere: true,
    plugins: [
      'jsx',
      'flow',
      'asyncFunctions',
      'classConstructorCall',
      'doExpressions',
      'trailingFunctionCommas',
      'objectRestSpread',
      'decorators',
      'classProperties',
      'exportExtensions',
      'exponentiationOperator',
      'asyncGenerators',
      'functionBind',
      'functionSent',
    ],
    sourceType: 'module',
  }),
  espree: (version) => ({
    attachComment: true,
    comment: true,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      globalReturn: true,
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: version,
    loc: true,
    range: true,
    sourceType: 'module',
    tokens: true,
  }),
};

class Engine {
  constructor(options) {
    this.options = options;
    switch (this.options.engine) {
      case 'acorn':
        this.engine = Acorn;
        break;
      case 'espree':
        this.engine = Espree;
        break;
      default:
        this.engine = Babylon;
        break;
    }
  }
  parse(file) {
    const comments = [];
    const tokens = [];
    try {
      switch (this.options.engine) {
        case 'acorn':
          return ESCodeGen
          .attachComments(this.engine.parse(file.source,
            opts.acorn(this.options.version, comments, tokens)), comments, tokens);
        case 'espree':
          return this.engine.parse(file.source, opts.espree(this.options.version));
        default:
          return this.engine.parse(file.source, opts.babylon());
      }
    } catch (error) {
      throw (new Error(error));
    }
  }
  static traverse(options, ast, callback) {
    switch (options.engine) {
      case 'babylon':
        traverse(ast, {
          enter: (path) => {
            const node = path.node;
            callback(node);
          } });
        break;
      default:
        ESTraverse.traverse(ast, {
          /* eslint-disable no-param-reassign */
          enter: (node) => {
            if (node.type === 'Program') {
              node = node.body[0];
            }
            callback(node);
          } });
          /* eslint-enable no-param-reassign */
        break;
    }
  }
}
module.exports = Engine;
