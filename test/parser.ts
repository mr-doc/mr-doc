import xdoc, { XDoc } from "../src/tom/index";
// import * as readline from 'readline';
import { assert } from 'chai';

const equal = assert.deepEqual;
const parse = (source: string) => XDoc.toJSON(xdoc(source));

describe('XDoc Parser (Tom)', () => {

  it('should parse @tag', () => equal(parse('@tag'), [
    {
      name: 'tag'
    }
  ]));

  it('should parse @tag - description', () => equal(parse('@tag - description'), [
    {
      name: 'tag',
      description: {
        inlines: [],
        text: 'description'
      }
    }
  ]));

  /* Parse tags with identifiers */
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

  it('should parse @tag id?', () => equal(parse('@tag id?'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: true,
        property: []
      }
    }
  ]));

  it('should parse @tag id? - description', () => equal(parse('@tag id? - description'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: true,
        property: []
      },
      description: {
        inlines: [],
        text: 'description'
      }
    }
  ]));

  /* Parse tags with initializers */
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

  it('should parse @tag id = -1', () => equal(parse('@tag id = -1'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      value: {
        unary: {
          left: "-",
          right: {
            literal: {
              number: "1"
            }
          }
        }
      }
    }
  ]));

  it('should parse @tag id = -1 - description', () => equal(parse('@tag id = -1 - description'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      value: {
        unary: {
          left: "-",
          right: {
            literal: {
              number: "1"
            }
          }
        }
      },
      description: {
        inlines: [],
        text: 'description'
      }
    }
  ]));

  it('should parse @tag id = 3.14', () => equal(parse('@tag id = 3.14'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      value: {
        literal: {
          number: "3.14"
        }
      }
    }
  ]));

  it('should parse @tag id = 3.14 - description', () => equal(parse('@tag id = 3.14 - description'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      value: {
        literal: {
          number: '3.14'
        }
      },
      description: {
        inlines: [],
        text: 'description'
      }
    }
  ]));

  it('should parse @tag id = []', () => equal(parse('@tag id = []'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      value: {
        array: []
      }
    }
  ]));

  it('should parse @tag id = [] - description', () => equal(parse('@tag id = [] - description'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      value: {
        array: []
      },
      description: {
        inlines: [],
        text: 'description'
      }
    }
  ]));

  it('should parse @tag id = {}', () => equal(parse('@tag id = {}'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      value: {
        object: []
      }
    }
  ]));

  it('should parse @tag id = {} - description', () => equal(parse('@tag id = {} - description'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      value: {
        object: []
      },
      description: {
        inlines: [],
        text: 'description'
      }
    }
  ]));

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

  it('should parse @tag id: type', () => equal(parse('@tag id: type'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      type: {
        primary: {
          id: 'type',
          optional: false
        }
      },
    }
  ]));

  it('should parse @tag id: type - description', () => equal(parse('@tag id: type - description'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      type: {
        primary: {
          id: 'type',
          optional: false
        }
      },
      description: {
        inlines: [],
        text: 'description'
      }
    }
  ]));

  it('should parse @tag id: &type', () => equal(parse('@tag id: &type'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      type: {
        unary: {
          left: "&",
          right: {
            primary: {
              id: 'type',
              optional: false
            }
          }
        }
      },
    }
  ]));

  it('should parse @tag id: &type - description', () => equal(parse('@tag id: &type - description'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      type: {
        unary: {
          left: "&",
          right: {
            primary: {
              id: 'type',
              optional: false
            }
          }
        }
      },
      description: {
        inlines: [],
        text: 'description'
      }
    }
  ]));

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
              id: 'type',
              optional: false
            },
            optional: false
          }
        }
      }
    }
  ]));

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
              id: 'type',
              optional: false
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

  it('should parse @tag id: type', () => equal(parse('@tag id: type'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      type: {
        primary: {
          id: 'type',
          optional: false
        }
      }
    }
  ]));

  it('should parse @tag id: type - description', () => equal(parse('@tag id: type - description'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      type: {
        primary: {
          id: 'type',
          optional: false
        }
      },
      description: {
        inlines: [],
        text: 'description'
      }
    }
  ]));

  it('should parse @tag id: (type)', () => equal(parse('@tag id: (type)'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      type: {
        parenthesized: {
          primary: {
            id: 'type',
            optional: false
          }
        }
      }
    }
  ]));

  it('should parse @tag id: (type) - description', () => equal(parse('@tag id: (type) - description'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      type: {
        parenthesized: {
          primary: {
            id: 'type',
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

  it('should parse @tag id: type & type', () => equal(parse('@tag id: type & type'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      type: {
        union: {
          left: {
            primary: {
              id: 'type',
              optional: false
            }
          },
          right: {
            primary: {
              id: 'type',
              optional: false
            }
          }
        }
      }
    }
  ]));

  it('should parse @tag id: type & type - description', () => equal(parse('@tag id: type & type - description'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      type: {
        union: {
          left: {
            primary: {
              id: 'type',
              optional: false
            }
          },
          right: {
            primary: {
              id: 'type',
              optional: false
            }
          }
        }
      },
      description: {
        inlines: [],
        text: 'description'
      }
    }
  ]));

  it('should parse @tag id: type | type', () => equal(parse('@tag id: type | type'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      type: {
        intersect: {
          left: {
            primary: {
              id: 'type',
              optional: false
            }
          },
          right: {
            primary: {
              id: 'type',
              optional: false
            }
          }
        }
      }
    }
  ]));

  it('should parse @tag id: type | type - description', () => equal(parse('@tag id: type | type - description'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      type: {
        intersect: {
          left: {
            primary: {
              id: 'type',
              optional: false
            }
          },
          right: {
            primary: {
              id: 'type',
              optional: false
            }
          }
        }
      },
      description: {
        inlines: [],
        text: 'description'
      }
    }
  ]));

  it('should parse @tag id: (type | type) & type', () => equal(parse('@tag id: (type | type) & type'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      type: {
        union: {
          left: {
            parenthesized: {
              intersect: {
                left: {
                  primary: {
                    id: 'type',
                    optional: false
                  }
                },
                right: {
                  primary: {
                    id: 'type',
                    optional: false
                  }
                }
              }
            }
          },
          right: {
            primary: {
              id: 'type',
              optional: false
            }
          }
        }
      }
    }
  ]));

  it('should parse @tag id: (type | type) & type - description', () => equal(parse('@tag id: (type | type) & type - description'), [
    {
      name: 'tag',
      identifier: {
        id: 'id',
        optional: false,
        property: []
      },
      type: {
        union: {
          left: {
            parenthesized: {
              intersect: {
                left: {
                  primary: {
                    id: 'type',
                    optional: false
                  }
                },
                right: {
                  primary: {
                    id: 'type',
                    optional: false
                  }
                }
              }
            }
          },
          right: {
            primary: {
              id: 'type',
              optional: false
            }
          }
        }
      },
      description: {
        inlines: [],
        text: 'description'
      }
    }
  ]));

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
              id: 'type',
              optional: false
            },
            optional: false
          }
        }
      },
      type: {
        primary: {
          id: 'type',
          optional: false
        }
      }
    }
  ]));

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
              id: 'type',
              optional: false
            },
            optional: false
          }
        }
      },
      type: {
        primary: {
          id: 'type',
          optional: false
        }
      },
      description: {
        inlines: [],
        text: 'description'
      }
    }
  ]));
});