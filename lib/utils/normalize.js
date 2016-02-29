"use strict";
var Extend = require('extend');
var synonyms = {
    'virtual': 'abstract',
    'extends': 'augments',
    'constructor': 'class',
    'const': 'constant',
    'defaultvalue': 'default',
    'desc': 'description',
    'host': 'external',
    'fileoverview': 'file',
    'overview': 'file',
    'emits': 'fires',
    'func': 'function',
    'method': 'function',
    'var': 'member',
    'arg': 'param',
    'argument': 'param',
    'prop': 'property',
    'return': 'returns',
    'exception': 'throws',
    'linkcode': 'link',
    'linkplain': 'link'
};
function normalize(tag) {
    var canonical = synonyms[tag.title];
    return canonical ? Extend({}, tag, { title: canonical }) : tag;
}
module.exports = function (comment) {
    return Extend({}, comment, {
        tags: comment.tags.map(normalize)
    });
};
