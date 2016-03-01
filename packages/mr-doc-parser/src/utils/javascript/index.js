"use strict";
const _ = require('lodash');
const flatteners = require('./flatteners');
const synonyms = require('./synonyms');
var Utils;
(function (Utils) {
    function flatten(comment) {
        let result = _.extend({}, comment);
        comment.tags.forEach(function (tag) {
            (flatteners[tag.title] || function () { })(result, tag);
        });
        return result;
    }
    Utils.flatten = flatten;
    ;
    function normalize(comment) {
        return _.assignIn({}, comment, {
            tags: comment.tags.map((tag) => {
                let canonical = synonyms[tag.title];
                return canonical ? _.extend({}, tag, { title: canonical }) : tag;
            })
        });
    }
    Utils.normalize = normalize;
    ;
})(Utils || (Utils = {}));
module.exports = Utils;
//# sourceMappingURL=index.js.map