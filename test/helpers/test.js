"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function redefine(object) {
    Object.keys(object).forEach(key => object[key] === undefined && delete object[key]);
    return object;
}
function tag(name, id, type, value, description) {
    return redefine({
        name,
        id,
        type,
        value,
        description,
    });
}
exports.tag = tag;
function description(text, inlines = []) {
    return redefine({
        text,
        inlines
    });
}
exports.description = description;
function value(type, value) {
    return {
        [type]: value
    };
}
exports.value = value;
function number(n) {
    return {
        "number": n
    };
}
exports.number = number;
function type(type) {
    return redefine({ type });
}
exports.type = type;
function primary(type) {
    return redefine({ "primary": type });
}
exports.primary = primary;
function identifier(id) {
    return { "identifier": id };
}
exports.identifier = identifier;
//# sourceMappingURL=test.js.map