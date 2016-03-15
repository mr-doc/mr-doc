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
import synonyms = require('./synonyms');

 /**
  * Normalizes synonymous tags to the canonical tag type listed on http://usejsdoc.org/
  * and transforms a few plural tags to singular form and visa-versa.
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
  export function normalize(comment: any) {
    return _.assignIn({}, comment, {
      tags: comment.tags.map((tag: any) => {
       let title = tag.title.toLowerCase();
        let canonical = synonyms[title];
        if (!canonical) {
         switch (title[0]) {
          case 'e':
           if (title === 'extend') title = 'extends';
          break;
          case 'j':
           if (title === 'jsfiddles') title = 'jsfiddle';
          break;
         }
        }
        return canonical ? _.extend({}, tag, { title: canonical }) : tag;
      }),
    });
  };
