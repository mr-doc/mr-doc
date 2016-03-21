"use strict";
const Utils = require('../utils/javascript/index');
const _ = require('lodash');
const Babylon = require('babylon');
const BabelTraverse = require('babel-traverse');
const Acorn = require('acorn');
const Espree = require('espree');
const ESCodeGen = require('escodegen');
const ESTraverse = require('estraverse');
const Doctrine = require('doctrine');
const traverse = BabelTraverse.default;
class JavaScript {
    constructor(options) {
        this.options = options;
        this.file = {};
        this.visited = {};
    }
    parse(file) {
        this.file = file;
        let results = [];
        let ast = this.getAST(file);
        this.walkComments(ast, 'leadingComments', true, results);
        this.walkComments(ast, 'innerComments', false, results);
        this.walkComments(ast, 'trailingComments', false, results);
        return results;
    }
    getAST(file) {
        switch (this.options.engine) {
            case 'babylon': {
                return Babylon.parse(file.source, {
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
                });
            }
            case 'acorn': {
                let comments = [], tokens = [], ast = Acorn.parse(file.source, {
                    ecmaVersion: parseInt(this.options.version, 10),
                    locations: true,
                    onComment: comments,
                    onToken: tokens,
                    ranges: true,
                });
                ESCodeGen.attachComments(ast, comments, tokens);
                return ast;
            }
            case 'espree': {
                let ast = Espree.parse(file.source, {
                    attachComment: true,
                    comment: true,
                    ecmaFeatures: {
                        experimentalObjectRestSpread: true,
                        globalReturn: true,
                        impliedStrict: true,
                        jsx: true,
                    },
                    ecmaVersion: parseInt(this.options.version, 10),
                    loc: true,
                    range: true,
                    sourceType: 'module',
                    tokens: true,
                });
                return ast;
            }
        }
    }
    walkComments(ast, type, includeContext, results) {
        switch (this.options.engine) {
            case 'babylon':
                traverse(ast, {
                    enter: (path) => {
                        let node = path.node;
                        (node[type] || [])
                            .filter(this.isJSDocComment)
                            .forEach(this.parseComment(node, results, includeContext, this.file));
                    }, });
                break;
            default:
                ESTraverse.traverse(ast, {
                    enter: (node) => {
                        if (node.type === 'Program') {
                            node = node.body[0];
                        }
                        (node[type] || [])
                            .filter(this.isJSDocComment)
                            .forEach(this.parseComment(node, results, includeContext, this.file));
                    }, });
                break;
        }
        return results;
    }
    parseComment(node, results, includeContext, file) {
        let range = (node.parent && node.parent) ? node.parent.range : [node.start, node.end];
        range = !range ? node.range : range;
        range = !range ? [node.start, node.end] : range;
        let context = {
            code: null,
            file: file,
            loc: _.extend({}, JSON.parse(JSON.stringify(node.loc))),
            range: {
                column: [node.loc.start.column, node.loc.end.column],
                line: [node.loc.start.line, node.loc.end.line],
            },
        };
        return (comment) => {
            let key = JSON.stringify({ loc: comment.loc, range: comment.range });
            if (!this.visited[key]) {
                this.visited[key] = true;
                if (includeContext) {
                    Object.defineProperty(context, 'ast', {
                        enumerable: false,
                        value: node,
                    });
                    context.code = file.source.substring.apply(file.source, range);
                }
                results.push(this.parseJSDoc(comment.value, comment.loc, context));
            }
        };
    }
    parseJSDoc(comment, loc, context) {
        let result = Doctrine.parse(comment, {
            lineNumbers: true,
            recoverable: true,
            sloppy: true,
            unwrap: true,
        });
        result.loc = loc;
        result.context = context;
        result.errors = [];
        let i = 0;
        while (i < result.tags.length) {
            let tag = result.tags[i];
            if (tag.errors) {
                for (let j = 0; j < tag.errors.length; j++) {
                    result.errors.push({ message: tag.errors[j] });
                }
                result.tags.splice(i, 1);
            }
            else {
                i++;
            }
        }
        return Utils.normalize(result);
    }
    isJSDocComment(comment) {
        let asterisks = comment.value.match(/^(\*+)/);
        return (comment.type === 'CommentBlock' ||
            comment.type === 'Block')
            && asterisks && asterisks[1].length === 1;
    }
}
module.exports = JavaScript;
//# sourceMappingURL=javascript.js.map