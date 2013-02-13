var parser = require('../lib/parser');


exports['._mapSymbol with alone statement'] = function(t){
  var symbol = {
    "tags": [{
      "type": "type",
      "types": ["Boolean"]
    }],
    "description": {
      "full": "<p>Keyboard navigation</p>",
      "summary": "<p>Keyboard navigation</p>",
      "body": ""
    },
    "isPrivate": false,
    "ignore": false,
    "code": "keyboard: true,"
  };

  var mapped = parser._mapSymbol(symbol);

  t.deepEqual(mapped.type, "Boolean");
  t.deepEqual(mapped.gtype, undefined);
  t.deepEqual(mapped['return'], undefined);

  t.done();
};

exports['._compact'] = function(t){
  var symbol = {
    "tags": [{
      "type": "description",
      "string": "a"
    },
    {"type": "","string": "b"},
    {"type": "","string": "c"},
    {"type": "","string": "d"},
    {"type": "param","name":"cl","types":["String"],"description": "a Css class"},
    {
      "type": "param",
      "name": "options",
      "types": ["Object"],
      "description": "d"
    },
    {"type": "","string": "c"},
    {"type": "","string": "b"},
    {"type": "","string": "a"},
    {
      "type": "type",
      "types": ["String"]
    }],
    "description": {
      "full": "<p>Css class to add to the .popover element</p>",
      "summary": "<p>Css class to add to the .popover element</p>",
      "body": ""
    },
    "isPrivate": false,
    "ignore": false,
    "code": "addClass: \"\",",
    "ctx": {},
    "type": "String"
  };

  var compacted = parser._compact(symbol.tags);
  t.equal(compacted.length, 4);
  t.equal(compacted[0].string, "a b c d");
  t.equal(compacted[2].description, "d c b a");

  t.done();
};
// exports['._mapSymbol should add @description to .description full'] = function(t){
//   var symbol = {"tags":[{"type":"description","string":"Note: if `addClass` is defined at the step level, the two defined `addClass` will be taken into account in the popover"},{"type":"type","types":["String"]}],"description":{"full":"<p>Css class to add to the .popover element</p>","summary":"<p>Css class to add to the .popover element</p>","body":""},"isPrivate":false,"ignore":false,"code":"addClass: \"\",","ctx":{},"type":"String"};

//   var mapped = parser._mapSymbol(symbol);

//   t.deepEqual(mapped.description, "Boolean");
//   t.deepEqual(mapped.gtype, undefined);
//   t.deepEqual(mapped['return'], undefined);

//   t.done();
// };
