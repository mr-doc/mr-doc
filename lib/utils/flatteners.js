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
"use strict";
function flattenName(result, tag) {
    result[tag.title] = tag.name;
}
function flattenDescription(result, tag) {
    result[tag.title] = tag.description;
}
function flattenTypedName(result, tag) {
    result[tag.title] = {
        name: tag.name
    };
    if (tag.type) {
        result[tag.title].type = tag.type;
    }
}
var flatteners = {
    'name': flattenName,
    'function': flattenName,
    'mixin': flattenName,
    'alias': flattenName,
    'memberof': flattenDescription,
    'version': flattenDescription,
    'since': flattenDescription,
    'copyright': flattenDescription,
    'author': flattenDescription,
    'license': flattenDescription,
    'classdesc': flattenDescription,
    'lends': flattenDescription,
    'event': flattenDescription,
    'external': flattenDescription,
    'file': flattenDescription,
    'callback': flattenDescription,
    'class': flattenTypedName,
    'constant': flattenTypedName,
    'member': flattenTypedName,
    'module': flattenTypedName,
    'namespace': flattenTypedName,
    'typedef': flattenTypedName,
    'kind': function (result, tag) {
        result.kind = tag.kind;
    },
    'property': function (result, tag) {
        if (!result.properties) {
            result.properties = [];
        }
        result.properties.push(tag);
    },
    'param': function (result, tag) {
        if (!result.params) {
            result.params = [];
        }
        result.params.push(tag);
    },
    'throws': function (result, tag) {
        if (!result.throws) {
            result.throws = [];
        }
        result.throws.push(tag);
    },
    'returns': function (result, tag) {
        if (!result.returns) {
            result.returns = [];
        }
        result.returns.push(tag);
    },
    'augments': function (result, tag) {
        if (!result.augments) {
            result.augments = [];
        }
        result.augments.push(tag);
    },
    'example': function (result, tag) {
        if (!result.examples) {
            result.examples = [];
        }
        result.examples.push(tag);
    },
    'global': function (result) {
        result.scope = 'global';
    },
    'static': function (result) {
        result.scope = 'static';
    },
    'instance': function (result) {
        result.scope = 'instance';
    },
    'inner': function (result) {
        result.scope = 'inner';
    },
    'access': function (result, tag) {
        result.access = tag.access;
    },
    'public': function (result) {
        result.access = 'public';
    },
    'protected': function (result) {
        result.access = 'protected';
    },
    'private': function (result) {
        result.access = 'private';
    }
};
module.exports = flatteners;
