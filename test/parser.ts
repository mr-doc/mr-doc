import xdoc, { XDoc } from "../src/tom/index";
// import * as readline from 'readline';
import { assert } from 'chai';

const equal = assert.deepEqual;
const parse = (source: string) => XDoc.toJSON(xdoc(source));

describe('Tom parser', () => {
  
  // Parse a tag
  it('should parse @tag', () => equal(parse('@tag'), [
    {
      name: 'tag'
    }
  ]));
  
  // Parse a tag with a description
  it('should parse @tag - description', () => equal(parse('@tag - description'), [
    {
      name: 'tag',
      description: {
        inlines: [],
        text: 'description'
      }
    }
  ]));

  // Parse a tag with an id
  it('should parse @tag id', () => equal(parse('@tag id'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      }
    }
  ]));

  // Parse a tag with and id and description
  it('should parse @tag id - description', () => equal(parse('@tag id - description'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      description: {
        inlines: [],
        text: 'description'
      }
    }
  ]));

  // Parse a tag, id, and value
  it('should parse @tag id = 1', () => equal(parse('@tag id = 1'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      value: {
        literal: {
          number: "1"
        }
      }
    }
  ]));

  // Parse a tag, id, value, and description
  it('should parse @tag id = 1 - description', () => equal(parse('@tag id = 1 - description'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      value: {
        literal: {
          number: '1'
        }
      },
      description: {
        inlines: [],
        text: 'description'
      }
    }
  ]));

  // Parse a string value
  it('should parse @tag id = \'hello\'', () => equal(parse('@tag id = \'hello\''), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      value: {
        literal: {
          string: "'hello'"
        }
      }
    }
  ]));

  it('should parse @tag id = \'hello\' - description', () => equal(parse('@tag id = \'hello\' - description'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      value: {
        literal: {
          string: "'hello'"
        }
      },
      description: {
        inlines: [],
        text: 'description'
      }
    }
  ]));

  // Parse a lambda value
  it('should parse @tag id = () => type', () => equal(parse('@tag id = () => type'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      value: {
        lambda: {
          parameter: [],
          type: {
            primary: {
              id: 'type'
            },
            optional: false
          }
        }
      }
    }
  ]));

  // Parse a lambda value
  it('should parse @tag id = () => type - description', () => equal(parse('@tag id = () => type - description'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      value: {
        lambda: {
          parameter: [],
          type: {
            primary: {
              id: 'type'
            },
            optional: false
          }
        }
      },
      description: {
        inlines: [],
        text: 'description'
      }
    }
  ]));

  // Parse a lambda value
  it('should parse @tag id: type = () => type', () => equal(parse('@tag id: type = () => type'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      value: {
        lambda: {
          parameter: [],
          type: {
            primary: {
              id: 'type'
            },
            optional: false
          }
        }
      },
      type: {
        primary: {
          id: 'type'
        }
      }
    }
  ]));

  // Parse a lambda value
  it('should parse @tag id: type = () => type - description', () => equal(parse('@tag id: type = () => type - description'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      value: {
        lambda: {
          parameter: [],
          type: {
            primary: {
              id: 'type'
            },
            optional: false
          }
        }
      },
      type: {
        primary: {
          id: 'type'
        }
      },
      description: {
        inlines: [],
        text: 'description'
      }
    }
  ]));
});