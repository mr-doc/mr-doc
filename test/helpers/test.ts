import * as _ from 'lodash';

/*
  Removes undefined keys from an object.
  
  # API
  ```
  @param object: object - The object that contains undefined keys.
  @return object
  ```

  # Example

  ```javascript
  var obj { a: undefined, b: "hello" }
  redefine(obj) // => { b: "hello" }
  ```

 */
function redefine(object: object) {
  Object.keys(object).forEach(key => object[key] === undefined && delete object[key])
  return object;
}

export function tag(name: string, id?: string, type?: {}, value?: {}, description?: {}) {
  return redefine({
    name,
    id,
    type,
    value,
    description,
  });
}

export function description(text: string, inlines = []) {
  return redefine({
    text,
    inlines
  });
}

export function value(type: string, value: any) {
  return {
    [type]: value
  }
}

export function number(n: string) {
  return {
    "number": n
  }
}

export function type(type) {
  return redefine({ type });
}

export function primary(type) {
  return redefine({ "primary": type })
}



export function identifier(id: string) {
  return { "identifier": id }
}