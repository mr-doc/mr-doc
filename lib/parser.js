/// <reference path="../typings/acorn/acorn" />
/// <reference path="../typings/escodegen/escodegen" />
/// <reference path="../typings/extend/extend" />
"use strict";
var Acorn = require('acorn');
var ESCodeGen = require('escodegen');
var ESTraverse = require('estraverse');
var Extend = require('extend');
var Doctrine = require('doctrine');
var Flatten = require('./utils/flatten');
var Normalize = require('./utils/normalize');
/**
 * JavaScript parser
 */
var JavaScript = (function () {
    function JavaScript(version) {
        this.version = version;
        this.comments = [];
        this.tokens = [];
        this.file = {};
        this.results = [];
    }
    JavaScript.prototype.parse = function (file) {
        this.file = file;
        var results = [];
        var ast = Acorn.parse(file.source, {
            // collect ranges for each node
            ranges: true,
            // collect comments in Esprima's format
            onComment: this.comments,
            // collect token ranges
            onToken: this.tokens
        });
        ESCodeGen.attachComments(ast, this.comments, this.tokens);
        this.walkComments(ast, 'leadingComments', true, result);
        this.walkComments(ast, 'innerComments', false, result);
        this.walkComments(ast, 'trailingComments', false, results);
        return results;
    };
    JavaScript.prototype.walkComments = function (ast, type, includeContext, results) {
        ESTraverse.traverse(ast, {
            enter: function (node, parent) {
                console.log(parent);
                // (node.body || [])
                //   .filter(this.isJSDocComment)
                //   .forEach(this.parseComment(node, results, includeContext, this.file));
            }
        });
    };
    JavaScript.prototype.parseComment = function (node, results, includeContext, file) {
        var _this = this;
        var visited = {};
        /**
            * Parse a comment with doctrine and decorate the result with file position and code context.
            *
            * @param {Object} comment the current state of the parsed JSDoc comment
            * @return {undefined} this emits data
            */
        var context = {
            loc: Extend({}, JSON.parse(JSON.stringify(node.range))),
            file: file
        };
        return function (comment) {
            // Avoid visiting the same comment twice as a leading
            // and trailing node
            var key = JSON.stringify(comment.loc);
            if (!visited[key]) {
                visited[key] = true;
                if (includeContext) {
                    // This is non-enumerable so that it doesn't get stringified in
                    // output; e.g. by the documentation binary.
                    Object.defineProperty(context, 'ast', {
                        enumerable: false,
                        value: node
                    });
                    if (node.parent && node.parent.node) {
                        context.code = file.source.substring
                            .apply(file.source, node.parent.node.range);
                    }
                }
                results.push(_this.parseJSDoc(comment.value, comment.loc, context));
            }
        };
    };
    JavaScript.prototype.parseJSDoc = function (comment, loc, context) {
        var result = Doctrine.parse(comment, {
            // have doctrine itself remove the comment asterisks from content
            unwrap: true,
            // enable parsing of optional parameters in brackets, JSDoc3 style
            sloppy: true,
            // `recoverable: true` is the only way to get error information out
            recoverable: true,
            // include line numbers
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
        return Flatten(Normalize(result));
    };
    JavaScript.prototype.isJSDocComment = function (comment) {
        var asterisks = comment.value.match(/^(\*+)/);
        return (comment.type === 'CommentBlock' ||
            comment.type === 'Block') // get-comments / traditional
            && asterisks && asterisks[1].length === 1;
    };
    return JavaScript;
}());
/**
 * Parser
 */
var Parser = (function () {
    function Parser(config) {
        this.config = config;
    }
    Parser.prototype.factory = function () {
        switch (this.config.language) {
            case 'javascript':
                return new JavaScript(this.config.version);
        }
    };
    return Parser;
}());
var parser = (new Parser({ language: 'javascript' })).factory();
var result = parser.parse({
    name: 'index',
    path: 'lib/',
    source: 'var x = 42; // answer\n /* Hello */'
});
console.log(result);
module.exports = Parser;
