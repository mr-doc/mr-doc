"use strict";
const Stringify = require('json-stringify-safe');
const File = require('fs-extra');
const _ = require('lodash');
const Path = require('path');
class JSON {
    constructor(config) {
        this.config = config;
    }
    compile(result, path) {
        this.path = path;
        this.file = result.length > 0 ? result[0].context.file : {};
        this.walk(result, function (comments) {
            delete comments.errors;
        });
        return Stringify(result, null, 2);
    }
    walk(comments, fn, options) {
        let name = _.isEmpty(this.file.name) ? '' : this.file.name;
        comments.forEach(function (comment) {
            fn(comment, options);
            for (let scope in comment.members) {
                if (comment.members.hasOwnProperty(scope)) {
                    this.walk(comment.members[scope], fn, options);
                }
            }
        });
        return _.isEmpty(this.path) ? comments : File.writeJSONSync(Path.join(this.path, name + '.json'), comments);
    }
}
module.exports = JSON;
//# sourceMappingURL=json.js.map