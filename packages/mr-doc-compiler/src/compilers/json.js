"use strict";
const Stringify = require('json-stringify-safe');
const Promise = require('bluebird');
class JSON {
    constructor(config) {
        this.options = config;
    }
    compile(result, path) {
        this.walk(result, function (comments) {
            delete comments.errors;
        });
        return Stringify(result, null, 2);
    }
    compileAsync(result, path) {
        return new Promise((resolve) => {
            this.walk(result, function (comments) {
                delete comments.errors;
            });
            resolve(Stringify(result, null, 2));
        });
    }
    walk(comments, fn, options) {
        comments.forEach(function (comment) {
            fn(comment, options);
            for (let scope in comment.members) {
                if (comment.members.hasOwnProperty(scope)) {
                    this.walk(comment.members[scope], fn, options);
                }
            }
        });
    }
}
module.exports = JSON;
//# sourceMappingURL=json.js.map