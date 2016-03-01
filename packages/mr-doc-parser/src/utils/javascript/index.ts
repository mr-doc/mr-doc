/*
 * Copyright (c)
 * 2016, mr-doc
 * 2015, documentationjs <>
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

import _ = require('lodash');
import flatteners = require('./flatteners');
import synonyms = require('./synonyms');

module Utils {
  /**
 * Flattens tags in an opinionated way.
 *
 * The following tags are assumed to be singletons, and are flattened
 * to a top-level property on the result whose value is extracted from
 * the tag:
 *
 *  * `@name`
 *  * `@memberof`
 *  * `@classdesc`
 *  * `@kind`
 *  * `@class`
 *  * `@constant`
 *  * `@event`
 *  * `@external`
 *  * `@file`
 *  * `@function`
 *  * `@member`
 *  * `@mixin`
 *  * `@module`
 *  * `@namespace`
 *  * `@typedef`
 *  * `@access`
 *  * `@lends`
 *
 * The following tags are flattened to a top-level array-valued property:
 *
 *  * `@param` (to `params` property)
 *  * `@property` (to `properties` property)
 *  * `@returns` (to `returns` property)
 *  * `@augments` (to `augments` property)
 *  * `@example` (to `examples` property)
 *  * `@throws` (to `throws` property)
 *
 * The `@global`, `@static`, `@instance`, and `@inner` tags are flattened
 * to a `scope` property whose value is `"global"`, `"static"`, `"instance"`,
 * or `"inner"`.
 *
 * The `@access`, `@public`, `@protected`, and `@private` tags are flattened
 * to an `access` property whose value is `"protected"` or `"private"`.
 * The assumed default value is `"public"`, so `@access public` or `@public`
 * tags result in no `access` property.
 *
 * @name flatten
 * @param {Object} comment a parsed comment
 * @return {Object} comment with tags flattened
 */
  export function flatten(comment: any): any {
    let result = _.extend({}, comment);

    comment.tags.forEach(function(tag: any) {
      (flatteners[tag.title] || function() { })(result, tag);
    });

    return result;
  };

  /**
 * Normalizes synonymous tags to the canonical tag type listed on http://usejsdoc.org/.
 *
 * For example, given the input object:
 *
 *     { tags: [
 *       { title: "virtual" },
 *       { title: "return", ... }
 *     ]}
 *
 * The output object will be:
 *
 *     { tags: [
 *       { title: "abstract" },
 *       { title: "returns", ... }
 *     ]}
 *
 * The following synonyms are normalized:
 *
 *  * virtual -> abstract
 *  * extends -> augments
 *  * constructor -> class
 *  * const -> constant
 *  * defaultvalue -> default
 *  * desc -> description
 *  * host -> external
 *  * fileoverview, overview -> file
 *  * emits -> fires
 *  * func, method -> function
 *  * var -> member
 *  * arg, argument -> param
 *  * prop -> property
 *  * return -> returns
 *  * exception -> throws
 *  * linkcode, linkplain -> link
 *
 * @name normalize
 * @param {Object} comment parsed comment
 * @return {Object} comment with normalized properties
 */
  export function normalize(comment:any) {
    return _.assignIn({}, comment, {
      tags: comment.tags.map((tag:any) => {
        let canonical = synonyms[tag.title];
        return canonical ? _.extend({}, tag, { title: canonical }) : tag;
      })
    });
  };
}

export = Utils;
