"use strict";
const Utils = require('../utils/javascript/index');
const _ = require('lodash');
const TS = require('typescript-eslint-parser');
const ESTraverse = require('estraverse');
const Doctrine = require('doctrine');
class TypeScript {
    constructor(options) {
        this.version = (options.version === "" ? "6" : options.version);
        this.file = {};
        this.visited = {};
    }
    parse(file) {
        this.file = file;
        var results = [];
        var ast = this.getAST(file);
        console.log(ast);
        this.walkComments(ast, 'leadingComments', true, results);
        this.walkComments(ast, 'innerComments', false, results);
        this.walkComments(ast, 'trailingComments', false, results);
        return results;
    }
    getAST(file) {
        let comments = [], tokens = [], ast = TS.parse(file.source, {
            range: true,
            loc: true,
            comment: true,
            attachComment: true,
            tokens: true,
            ecmaVersion: parseInt(this.version),
            sourceType: "module",
            ecmaFeatures: {
                jsx: true,
                globalReturn: true,
                impliedStrict: true,
                experimentalObjectRestSpread: true
            }
        });
        return ast;
    }
    walkComments(ast, type, includeContext, results) {
        ESTraverse.traverse(ast, {
            enter: (node) => {
                if (node.type === 'Program') {
                    node = node.body[0];
                }
                console.log('node', node);
                if (node && node[type])
                    node[type]
                        .filter(this.isJSDocComment)
                        .forEach(this.parseComment(node, results, includeContext, this.file));
            }
        });
    }
    parseComment(node, results, includeContext, file) {
        var context = {
            loc: _.extend({}, JSON.parse(JSON.stringify(node.loc))),
            file: file,
            code: undefined
        };
        return (comment) => {
            var key = JSON.stringify({ loc: comment.loc, range: comment.range });
            if (!this.visited[key]) {
                this.visited[key] = true;
                if (includeContext) {
                    Object.defineProperty(context, 'ast', {
                        enumerable: false,
                        value: node
                    });
                    let range = (node.parent && node.parent) ? node.parent.range : [node.start, node.end];
                    range = !range ? node.range : range;
                    range = !range ? [node.start, node.end] : range;
                    context.code = file.source.substring.apply(file.source, range);
                }
                results.push(this.parseJSDoc(comment.value, comment.loc, context));
            }
        };
    }
    parseJSDoc(comment, loc, context) {
        var result = Doctrine.parse(comment, {
            unwrap: true,
            sloppy: true,
            recoverable: true,
            lineNumbers: true
        });
        result.loc = loc;
        result.context = context;
        result.errors = [];
        var i = 0;
        while (i < result.tags.length) {
            var tag = result.tags[i];
            if (tag.errors) {
                for (var j = 0; j < tag.errors.length; j++) {
                    result.errors.push({ message: tag.errors[j] });
                }
                result.tags.splice(i, 1);
            }
            else {
                i++;
            }
        }
        return Utils.flatten(Utils.normalize(result));
    }
    isJSDocComment(comment) {
        var asterisks = comment.value.match(/^(\*+)/);
        return (comment.type === 'CommentBlock' ||
            comment.type === 'Block')
            && asterisks && asterisks[1].length === 1;
    }
}
module.exports = TypeScript;
//# sourceMappingURL=typescript.js.map