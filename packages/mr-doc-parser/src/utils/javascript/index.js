"use strict";
const _ = require('lodash');
const synonyms = require('./synonyms');
function normalize(comment) {
    return _.assignIn({}, comment, {
        tags: comment.tags.map((tag) => {
            let title = tag.title.toLowerCase();
            let canonical = synonyms[title];
            if (!canonical) {
                switch (title[0]) {
                    case 'e':
                        if (title === 'extend')
                            title = 'extends';
                        break;
                    case 'j':
                        if (title === 'jsfiddles')
                            title = 'jsfiddle';
                        break;
                }
            }
            return canonical ? _.extend({}, tag, { title: canonical }) : tag;
        }),
    });
}
exports.normalize = normalize;
;
//# sourceMappingURL=index.js.map