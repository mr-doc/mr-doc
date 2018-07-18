"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const Lexer = require("./TomLexer");
const Parser = require("./TomParser");
const _ = require("lodash");
class XDoc {
    constructor(source) {
        this.parser = new Parser.TomParser(new antlr4ts_1.CommonTokenStream(new Lexer.TomLexer(new antlr4ts_1.ANTLRInputStream(source))));
    }
    parse() {
        return this.parser.documentation();
    }
    static toJSON(ast) {
        return parseDocumentation(ast);
    }
}
exports.XDoc = XDoc;
exports.default = (source) => {
    // Get the input stream
    return new XDoc(source).parse();
};
/*! Documentation */
/*
  Parses the Documentation production.
  
  # API

  ```
  @param node: Parser.DocumentationContext - The documentation context node.
  @return Parser.BodyContext[] - The body context nodes.
  ```

  # Remark

  Documentation is the root node.
  A documentation node has a body as its child.

 */
function parseDocumentation(node) {
    if (node.body()) {
        return parseBody(node.body());
    }
}
/*
  Parses the Body production.
  
  # API

  ```
  @param node: Parser.BodyContext - The body context node.
  @return Parser.Annotations[] - The body context nodes.
  ```

  # Remark

  A body node has an array of annotation nodes.

 */
function parseBody(node) {
    if (node.annotations()) {
        return parseAnnotations(node.annotations());
    }
}
/*
  Parses the Annotations production.
  
  # API

  ```
  @param node: Parser.AnnotationsContext - The annotation context node.
  @return Parser.TagContext[] - The body context nodes.
  ```

  # Remark

  An annotation node has an array of tag nodes.

 */
function parseAnnotations(node) {
    return node.tag()
        .map(parseTag)
        .filter(x => x !== undefined);
}
/*
  Parses the Tag production.
  
  # API

  ```
  @param node: Parser.TagContext - The annotation context node.
  @return { name?: string, id?: {}, value?: {}, type?: {}, description?: {} } | undefined - The tagID object or undefined if no leaf exists.
  ```

  # Remark

  A TagContext node has a tag name, tag id, value, type, and description.


 */
function parseTag(node) {
    let tag = {};
    if (node.tagName()) {
        _.assign(tag, { name: node.tagName().identifier().text });
    }
    if (node.tagID()) {
        _.assign(tag, { id: parseTagID(node.tagID()) });
    }
    if (node.value()) {
        _.assign(tag, { value: parseValue(node.value()) });
    }
    if (node.type()) {
        _.assign(tag, { type: parseType(node.type()) });
    }
    if (node.description()) {
        _.assign(tag, { description: parseTagBody(node.description()) });
    }
    return _.isEqual(tag, {}) ? undefined : tag;
}
/*
  Parses the TagID production.
  
  # API

  ```
  @param node: Parser.TagIDContext - The tagID context node.
  @return { id?: {}, optional: boolean, property?: {} } - The body context nodes.
  ```
  # Remark

  A TagId node is an object with an 'id', 'property', and 'optional'.

 */
function parseTagID(node) {
    let tag = { id: undefined, optional: false, property: undefined };
    if (node.identifier()) {
        tag.id = node.identifier().ID().text;
    }
    if (node.optionalTagID()) {
        tag.id = node.optionalTagID().identifier().ID().text;
        tag.optional = true;
    }
    if (node.propertyTagID()) {
        return parsePropertyTagID(node.propertyTagID());
    }
    return tag;
}
/*
  Parses the PropertyTagID production.
  
  # API

  ```
  @param node: Parser.PropertyTagIDContext - The annotation context node.
  @return Parser.TagContext[] - The body context nodes.
  ```
  # Remark

  An annotation node has an array of tag nodes.

 */
function parsePropertyTagID(node) {
    let tag = { id: undefined, optional: false, property: undefined };
    if (node.identifier()) {
        tag.id = node.identifier().ID().text;
    }
    if (node.optionalTagID()) {
        tag.id = node.identifier().ID().text;
        tag.optional = true;
    }
    if (node.optionalTagOrIdentifier()) {
        tag.property = node.optionalTagOrIdentifier()
            .map(parseOptionalOrIdentifer)
            .unshift({ id: tag.id, optional: tag.optional });
        tag.id = tag.optional = undefined;
    }
    return tag;
}
function parseOptionalOrIdentifer(node) {
    let id, optional;
    if (node.identifier()) {
        id = node.identifier().ID().text;
    }
    if (node.optionalTagID()) {
        id = node.optionalTagID().identifier().ID().text;
        optional = true;
    }
    return { id, optional };
}
/*! Type */
function parseType(node) {
    if (node.PIPE()) {
        return {
            intersect: { left: parseType(node.type(0)), right: parseType(node.type(1)) }
        };
    }
    else if (node.AMP()) {
        return {
            union: { left: parseType(node.type(0)), right: parseType(node.type(1)) }
        };
    }
    else if (node.lambdaType()) {
        return {
            lambda: parseLambdaType(node.lambdaType())
        };
    }
    else if (node.primaryType()) {
        return { primary: parsePrimaryType(node.primaryType()) };
    }
}
function parsePrimaryType(node) {
    if (node.parenthesizedType()) {
        return {
            parenthesized: parseParenthesizedType(node.parenthesizedType())
        };
    }
    if (node.objectType()) {
        return {
            object: parseObjectType(node.objectType())
        };
    }
    if (node.arrayType()) {
        return {
            array: parseArrayType(node.arrayType())
        };
    }
    if (node.identifier()) {
        return { id: node.identifier().ID().text };
    }
}
function parseParenthesizedType(node) {
    if (node.type()) {
        return parseType(node.type());
    }
}
function parseObjectType(node) {
    return {
        key: parseType(node.objectPairType().type(0)),
        value: parseType(node.objectPairType().type(1))
    };
}
function parseArrayType(node) {
    if (node.type()) {
        return {
            type: node.type().map(type => parseType(type))
        };
    }
    if (node.identifier()) {
        return {
            identifer: node.identifier().ID().text + '[]'
        };
    }
}
/*! Lambda */
function parseLambdaType(node) {
    let obj = {};
    if (node.formalParameterSequence()) {
        _.assign(obj, { parameters: parseLambdaFormalParameterSequence(node.formalParameterSequence()) });
    }
    else if (node.parameter()) {
        _.assign(obj, { parameters: [parseParameter(node.parameter())] });
    }
    if (node.type()) {
        _.assign(obj, { 'return': { type: parseType(node.type()) } });
    }
    return obj;
}
function parseLambdaFormalParameterSequence(node) {
    return parseParameters(node.parameter());
}
function parseParameters(nodes) {
    return nodes.map(node => {
        return parseParameter(node);
    });
}
function parseParameter(node) {
    let id = node.identifier().ID().text;
    if (node.type()) {
        return {
            id,
            type: parseType(node.type())
        };
    }
    return { id };
}
/*! Expression */
function parseExpression(node) {
    if (node.unaryExpression()) {
        return { unary: parseUnaryExpression(node.unaryExpression()) };
    }
    if (node.expression()) {
        if (node.PLUS() || node.MINUS()) {
            return { binary: parseAdditionExpression(node) };
        }
        if (node.STAR() || node.FORWARD_SLASH()) {
            return { binary: parseMultiplicationExpression(node) };
        }
    }
    if (node.arrayExpression()) {
        return { array: parseArrayExpression(node.arrayExpression()) };
    }
    if (node.objectExpression()) {
        return { object: parseObjectExpression(node.objectExpression()) };
    }
    if (node.literal()) {
        return { literal: parseLiteralExpression(node.literal()) };
    }
    if (node.parenthesizedExpression()) {
        return { parenthesized: parseParenthesizedExpression(node.parenthesizedExpression()) };
    }
    return {};
}
function parseUnaryExpression(node) {
    return {
        left: (node.PLUS() || node.MINUS()).text,
        right: parseExpression(node.expression())
    };
}
function parseAdditionExpression(node) {
    if (node.PLUS()) {
        return {
            plus: {
                left: parseExpression(node.expression(0)),
                right: parseExpression(node.expression(1))
            }
        };
    }
    if (node.MINUS()) {
        return {
            minus: {
                left: parseExpression(node.expression(0)),
                right: parseExpression(node.expression(1))
            }
        };
    }
}
function parseMultiplicationExpression(node) {
    if (node.STAR()) {
        return {
            times: {
                left: parseExpression(node.expression(0)),
                right: parseExpression(node.expression(1))
            }
        };
    }
    if (node.FORWARD_SLASH()) {
        return {
            divide: {
                left: parseExpression(node.expression(0)),
                right: parseExpression(node.expression(1))
            }
        };
    }
}
function parseArrayExpression(node) {
    if (node.expression()) {
        return node.expression().map(expression => {
            return parseExpression(expression);
        });
    }
    return [];
}
function parseObjectExpression(node) {
    if (node.objectPair()) {
        return parseObjectPair(node.objectPair());
    }
}
function parseObjectPair(node) {
    return {
        key: parseLiteralExpression(node.literal(0)),
        value: parseLiteralExpression(node.literal(1))
    };
}
function parseParenthesizedExpression(node) {
    return parseExpression(node.expression());
}
function parseLiteralExpression(node) {
    if (node.IntegerLiteral() || node.FloatingPointLiteral()) {
        return { number: (node.IntegerLiteral() || node.FloatingPointLiteral()).text };
    }
    if (node.BooleanLiteral()) {
        return { boolean: node.BooleanLiteral().text };
    }
    if (node.CharacterLiteral()) {
        return { character: node.CharacterLiteral().text };
    }
    if (node.StringLiteral()) {
        return { string: node.StringLiteral().text };
    }
    if (node.StringLiteral()) {
        return { null: node.StringLiteral().text };
    }
}
/*! Description */
function parseTagBody(node) {
    return parseDescription(node.description());
}
function parseDescription(node) {
    return {
        text: node.text,
        inlines: parseDescriptionLine(node.descriptionLine())
    };
}
function parseDescriptionLine(node) {
    return parseDescriptionLineElement(node.descriptionLineElement());
}
function parseDescriptionLineElement(node) {
    return node.map(element => {
        return element.inlineTag() ? parseInlineTag(element.inlineTag()) : undefined;
    }).filter(element => element !== undefined);
}
function parseInlineTag(node) {
    return {
        id: node.inlineTagName().identifier().ID().text,
        body: parseInlineTagBody(node.inlineTagBody())
    };
}
function parseInlineTagBody(node) {
    return node.braceBody().map(body => body.text).join('');
}
//# sourceMappingURL=index.js.map