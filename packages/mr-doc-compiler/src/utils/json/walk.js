"use strict";
function walk(comments, fn, options) {
    comments.forEach(function (comment) {
        fn(comment, options);
        for (var scope in comment.members) {
            walk(comment.members[scope], fn, options);
        }
    });
    return comments;
}
exports.walk = walk;
//# sourceMappingURL=walk.js.map