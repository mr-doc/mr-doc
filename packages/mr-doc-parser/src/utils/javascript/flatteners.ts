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

function flattenName(result:any, tag:any) {
  result[tag.title] = tag.name;
}

function flattenDescription(result:any, tag:any) {
  result[tag.title] = tag.description;
}

function flattenTypedName(result:any, tag:any) {
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
  'kind': function (result: any, tag: any) {
    result.kind = tag.kind;
  },
  'property': function (result: any, tag: any) {
    if (!result.properties) {
      result.properties = [];
    }
    result.properties.push(tag);
  },
  'param': function (result: any, tag: any) {
    if (!result.params) {
      result.params = [];
    }
    result.params.push(tag);
  },
  'throws': function (result: any, tag: any) {
    if (!result.throws) {
      result.throws = [];
    }
    result.throws.push(tag);
  },
  'returns': function (result: any, tag: any) {
    if (!result.returns) {
      result.returns = [];
    }
    result.returns.push(tag);
  },
  'augments': function (result: any, tag: any) {
    if (!result.augments) {
      result.augments = [];
    }
    result.augments.push(tag);
  },
  'example': function (result: any, tag: any) {
    if (!result.examples) {
      result.examples = [];
    }
    result.examples.push(tag);
  },
  'global': function (result: any) {
    result.scope = 'global';
  },
  'static': function (result: any) {
    result.scope = 'static';
  },
  'instance': function (result: any) {
    result.scope = 'instance';
  },
  'inner': function (result: any) {
    result.scope = 'inner';
  },
  'access': function (result:any, tag:any) {
    result.access = tag.access;
  },
  'public': function (result: any) {
    result.access = 'public';
  },
  'protected': function (result: any) {
    result.access = 'protected';
  },
  'private': function (result: any) {
    result.access = 'private';
  }
};


export = flatteners;
