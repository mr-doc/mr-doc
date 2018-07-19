import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import * as Lexer from './TomLexer';
import * as Parser from './TomParser';
import * as _ from 'lodash';

export class XDoc {
  private parser: Parser.TomParser
  constructor(source: string) {
    this.parser = new Parser.TomParser(new CommonTokenStream(
      new Lexer.TomLexer(
        new ANTLRInputStream(source)
      )
    ));
  }
  parse() {
    return this.parser.documentation();
  }

  static toJSON(ast: Parser.DocumentationContext) {
    return parseDocumentation(ast);
  }
}


export default (source: string) => {
  // Get the input stream
  return new XDoc(source).parse();
}

/*! Documentation */

/*
  Parses the Documentation production.
  
  # API

  ```
  @function parseDocumentation
  @param node: Parser.DocumentationContext - The documentation context node.
  @return Parser.BodyContext[] - The body context nodes.
  ```

  # Remark

  Documentation is the root node. 
  A documentation node has a body as its child.

 */
function parseDocumentation(node: Parser.DocumentationContext) {
  if (node.body()) {
    return parseBody(node.body());
  }
}

/*
  Parses the Body production.
  
  # API

  ```
  @function parseBody
  @param node: Parser.BodyContext - The body context node.
  @return Parser.Annotations[] - The body context nodes.
  ```

  # Remark

  A body node has an array of annotation nodes.

 */
function parseBody(node: Parser.BodyContext) {
  if (node.annotations()) {
    return parseAnnotations(node.annotations());
  }
}

/*
  Parses the Annotations production.
  
  # API

  ```
  @function parseAnnotations
  @param node: Parser.AnnotationsContext - The annotation context node.
  @return Parser.TagContext[] - The tag context nodes.
  ```

  # Remark

  An annotation node has an array of tag nodes.

 */
function parseAnnotations(node: Parser.AnnotationsContext) {
  return node.tag()
    .map(parseTag)
    .filter(x => x !== undefined);
}

/*
  Parses the Tag production.
  
  # API

  ```
  @function parseTag
  @param node: Parser.TagContext - The annotation context node.
  @return { 
    name?: string, 
    id?: {}, 
    value?: {}, 
    type?: {}, 
    description?: {} 
  } | undefined - The tag object or undefined if no leaf exists.
  ```

  # Remark

  A TagContext node may have a tag name, tag id, value, type, and description.


 */
function parseTag(node: Parser.TagContext) {
  let tag = {};

  if (node.tagName()) {
    _.assign(tag, {
      name: node.tagName().identifier().ID().text
    });
  }

  if (node.type()) {
    _.assign(tag, { type: parseType(node.type()) });
  }

  if (node.tagID()) {
    _.assign(tag, { identifier: parseTagID(node.tagID()) })
  }

  if (node.value()) {
    _.assign(tag, { value: parseValue(node.value()) })
  }

  if (node.description()) {
    _.assign(tag, { description: parseDescription(node.description()) });
  }

  return _.isEqual(tag, {}) ? undefined : tag;
}

/*
  Parses the TagID production.
  
  # API

  ```
  @function parseTagID
  @param node: Parser.TagIDContext - The tagID context node.
  @return { 
    id?: {}, 
    optional: boolean, 
    property?: {} 
  } - The tagID object or undefined if no leaf exists.
  ```
  # Remark

  A TagId node is an object.

 */
function parseTagID(node: Parser.TagIDContext) {
  let tag = { id: undefined, optional: false, property: [] };

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
  @function parsePropertyTagID
  @param node: Parser.PropertyTagIDContext - The annotation context node.
  @return {
    id: any,
    optional: any,
    property: any
  } - The PropertyTagId object .
  ```
  # Remark

  A propertyTagID is an object with an 'id', 'property', and 'optional' keys.

 */
function parsePropertyTagID(node: Parser.PropertyTagIDContext) {
  let tag: any = {};

  if (node.identifier()) {
    _.assign(tag, { id: node.identifier().ID().text });
  }

  if (node.optionalTagID()) {
    _.assign(tag, { id: node.identifier().ID().text, optional: true });
  }

  if (node.optionalTagOrIdentifier()) {
    let property = node.optionalTagOrIdentifier()
      .map(parseOptionalTagOrIdentifier);
    property.unshift({ id: tag.id, optional: tag.optional });
    property = property.filter(p => p.id !== undefined && p !== undefined);
    _.assign(tag, { property });
  }
  return tag;
}


/*
  Parses the OptionalOrIdentifier production.
  
  # API

  ```
  @function parseOptionalTagOrIdentifier
  @param node: Parser.OptionalTagOrIdentifierContext - The OptionalTagOrIdentifier context node.
  @return {
    id?: string,
    optional?: boolean
  } - The OptionalTagOrIdentifierContext object.
  ```
  # Remark

  An propertyTagID is an object with an 'id', 'property', and 'optional' keys.
  
 */
function parseOptionalTagOrIdentifier(node: Parser.OptionalTagOrIdentifierContext) {
  let id, optional = false;
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

/*
  Parses the Type production.

  # API

  ```
  @function parseType
  @param node: Parse.TypeContext - The Type context node.
  @return {
    intersect?: {},
    union?: {},
    lambda?: {},
    tuple?: {},
    primary?: {}
  } - The type object.

  # Remark
  A type is an object with 'intersection', 'union', 'lambda', 'tuple', or primary.
  ```
*/
function parseType(node: Parser.TypeContext) {

  if (node.PIPE()) { // Intersections
    return {
      intersect: { left: parseType(node.type(0)), right: parseType(node.type(1)) }
    };
  } else if (node.AMP()) { // Unions
    return {
      union: { left: parseType(node.type(0)), right: parseType(node.type(1)) }
    };
  } else if (node.lambdaType()) { // Lambda functions i.e. (id) => type
    return {
      lambda: parseLambdaType(node.lambdaType())
    };
  } else if (node.tupleType()) {
    return { tuple: parseTuple(node.tupleType()) }
  } else if (node.primaryType()) { // Primary
    return { primary: parsePrimaryType(node.primaryType()) };
  }
}

/*! Lambda */

function parseLambdaType(node: Parser.LambdaTypeContext) {
  let obj = {};
  if (node.formalParameterSequence()) {
    _.assign(obj, { parameters: parseLambdaFormalParameterSequence(node.formalParameterSequence()) })
  } else if (node.parameter()) {
    _.assign(obj, { parameters: [parseParameter(node.parameter())] })
  }

  if (node.type()) {
    _.assign(obj, { 'return': { type: parseType(node.type()) } })
  }
  return obj;
}

function parseLambdaFormalParameterSequence(node: Parser.FormalParameterSequenceContext) {
  return parseParameters(node.parameter())
}

function parseParameters(nodes: Parser.ParameterContext[]) {
  return nodes.map(node => {
    return parseParameter(node);
  })
}

function parseParameter(node: Parser.ParameterContext) {
  let id = node.identifier().ID().text;
  if (node.type()) {
    return {
      id,
      type: parseType(node.type())
    }
  }
  return { id };
}

function parseTuple(node: Parser.TupleTypeContext) {
  let type = {};
  if (node.identifier()) {
    _.assign(type, { id: node.identifier().ID().text });
  }

  if (node.tupleTypeList()) {
    _.assign(type, { types: parseTupleTypeList(node.tupleTypeList()) })
  }

  return type;
}

function parseTupleTypeList(node: Parser.TupleTypeListContext) {
  return node.type() ? node.type().map(type => parseType(type)) : [];
}

function parsePrimaryType(node: Parser.PrimaryTypeContext) {
  if (node.parenthesizedType()) { // (expression)
    return {
      parenthesized: parseParenthesizedType(node.parenthesizedType())
    }
  }

  if (node.objectType()) { // { ... }
    return {
      object: parseObjectType(node.objectType())
    }
  }

  if (node.arrayType()) { // [ ... ]
    return {
      array: parseArrayType(node.arrayType())
    }
  }

  if (node.propertyType()) {
    return {
      property: parsePropertyType(node.propertyType())
    }
  }

  if (node.identifierOrKeyword()) {
    return { id: parseIdentifierOrKeyword(node.identifierOrKeyword()) }
  }

}

function parseParenthesizedType(node: Parser.ParenthesizedTypeContext) {
  if (node.type()) {
    return parseType(node.type());
  }
}

function parseObjectType(node: Parser.ObjectTypeContext) {
  return node.objectPairTypeList() ? parseObjectPairTypeList(node.objectPairTypeList()) : []
}

function parseObjectPairTypeList(node: Parser.ObjectPairTypeListContext) {
  return node.objectPairType().map(pair => {
    return {
      key: parseType(pair.type(0)),
      value: parseType(pair.type(1))
    }
  });
}

function parseArrayType(node: Parser.ArrayTypeContext) {
  if (node.type()) {
    return {
      type: node.type().map(type => parseType(type))
    }
  }

  if (node.identifier()) {
    return {
      identifer: node.identifier().ID().text + '[]'
    }
  }
}

/*
  Parses the PropertyTagID production.
  
  # API

  ```
  @function parsePropertyTagID
  @param node: Parser.PropertyTagIDContext - The annotation context node.
  @return {
    id: any,
    optional: any,
    property: any
  } - The PropertyTagId object .
  ```
  # Remark

  A propertyTagID is an object with an 'id', 'property', and 'optional' keys.

 */
function parsePropertyType(node: Parser.PropertyTypeContext) {
  let tag: any = {};

  if (node.identifier()) {
    _.assign(tag, { id: node.identifier().ID().text });
  }

  if (node.optionalType()) {
    _.assign(tag, { id: node.identifier().ID().text });
    _.assign(tag, { optional: true });
  }

  if (node.optionalTypeOrIdentifer()) {
    _.assign(tag, {
      property: node.optionalTypeOrIdentifer()
        .map(parseOptionalTypeOrIdentifer)
    });

    tag.property.unshift({ id: tag.id, optional: tag.optional });
    tag.property = tag.property.filter(x => x.id !== undefined && x !== undefined);
    tag.id = tag.optional = undefined;
  }
  return tag;
}

/*
  Parses the parseOptionalTypeOrIdentifer production.
  
  # API

  ```
  @function OptionalTypeOrIdentiferContext
  @param node: Parser.OptionalTypeOrIdentiferContext - The OptionalTypeOrIdentifer context node.
  @return {
    id?: string,
    optional?: boolean
  } - The OptionalTypeOrIdentiferContext object.
  ```
  # Remark

  An propertyType is an object with an 'id', 'property', and 'optional' keys.
  
 */
function parseOptionalTypeOrIdentifer(node: Parser.OptionalTypeOrIdentiferContext) {
  let id: string, optional: boolean;
  if (node.identifier()) {
    id = node.identifier().ID().text;
  }

  if (node.optionalType()) {
    id = node.optionalType().identifier().ID().text;
    optional = true;
  }
  return { id, optional };
}

function parseIdentifierOrKeyword(node: Parser.IdentifierOrKeywordContext) {
  if (node.identifier()) {
    return node.identifier().ID().text;
  }

  if (node.NullLiteral()) {
    return node.NullLiteral().text;
  }
}
/*! Value */

/*
  Parses the Value production.

  # API

  ```
  @function parseValue
  @param node: Parser.ValueContext
  @return Parser.ValueContext - See {@link #parseExpression(node: Parser.ExpressionContext) }.
  ```
  # Remark

  A value is an expression.
*/
function parseValue(node: Parser.ValueContext) {
  if (node.expression()) {
    return parseExpression(node.expression());
  }
}

/*! Expression */

/*
  Parses the Expression production.

  # API
  
  ```
  @function parseExpression
  @param node: Parser.ExpressionContext
  @return {
    unary?: {},
    binary?: {},
    array?: {},
    object?: {},
    literal?: {},
    parenthesized?: {}
  }
  ```
*/
function parseExpression(node: Parser.ExpressionContext) {
  if (node.unaryExpression()) {
    return { unary: parseUnaryExpression(node.unaryExpression()) }
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
    return { array: parseArrayExpression(node.arrayExpression()) }
  }

  if (node.objectExpression()) {
    return { object: parseObjectExpression(node.objectExpression()) }
  }

  if (node.literal()) {
    return { literal: parseLiteralExpression(node.literal()) }
  }

  if (node.parenthesizedExpression()) {
    return { parenthesized: parseParenthesizedExpression(node.parenthesizedExpression()) }
  }

  return {}
}

/*
  
*/
function parseUnaryExpression(node: Parser.UnaryExpressionContext) {
  return {
    left: (node.PLUS() || node.MINUS()).text,
    right: parseExpression(node.expression())
  };
}

function parseAdditionExpression(node: Parser.ExpressionContext) {
  if (node.PLUS()) {
    return {
      plus: {
        left: parseExpression(node.expression(0)),
        right: parseExpression(node.expression(1))
      }
    }
  }

  if (node.MINUS()) {
    return {
      minus: {
        left: parseExpression(node.expression(0)),
        right: parseExpression(node.expression(1))
      }
    }
  }
}

function parseMultiplicationExpression(node: Parser.ExpressionContext) {
  if (node.STAR()) {
    return {
      times: {
        left: parseExpression(node.expression(0)),
        right: parseExpression(node.expression(1))
      }
    }
  }

  if (node.FORWARD_SLASH()) {
    return {
      divide: {
        left: parseExpression(node.expression(0)),
        right: parseExpression(node.expression(1))
      }
    }
  }
}

function parseArrayExpression(node: Parser.ArrayExpressionContext) {
  if (node.expression()) {
    return node.expression().map(expression => {
      return parseExpression(expression)
    });
  }
  return []
}

function parseObjectExpression(node: Parser.ObjectExpressionContext) {
  if (node.objectPairExpressionList()) {
    return parseObjectPairExpressionList(node.objectPairExpressionList());
  }
}


function parseObjectPairExpressionList(node: Parser.ObjectPairExpressionListContext) {
  return node.objectPairExpression().map(pair => {
    return {
      key: parseLiteralExpression(pair.literal(0)),
      value: pair.objectExpression() ?
        parseObjectExpression(pair.objectExpression()) :
        parseLiteralExpression(pair.literal(1))
    }
  });
}


function parseParenthesizedExpression(node: Parser.ParenthesizedExpressionContext) {
  return parseExpression(node.expression());
}

function parseLiteralExpression(node: Parser.LiteralContext) {
  if (node.IntegerLiteral() || node.FloatingPointLiteral()) {
    return { number: (node.IntegerLiteral() || node.FloatingPointLiteral()).text }
  }
  if (node.BooleanLiteral()) {
    return { boolean: node.BooleanLiteral().text }
  }
  if (node.CharacterLiteral()) {
    return { character: node.CharacterLiteral().text }
  }
  if (node.StringLiteral()) {
    return { string: node.StringLiteral().text }
  }
  if (node.StringLiteral()) {
    return { null: node.StringLiteral().text }
  }
}

/*! Description */

function parseDescription(node: Parser.DescriptionContext) {
  return {
    text: node.text,
    inlines: parseDescriptionLine(node.descriptionLine())
  }
}

function parseDescriptionLine(node: Parser.DescriptionLineContext) {
  return parseDescriptionLineElement(node.descriptionLineElement());
}

function parseDescriptionLineElement(node: Parser.DescriptionLineElementContext[]) {
  return node.map(element => {
    return element.inlineTag() ? parseInlineTag(element.inlineTag()) : undefined
  }).filter(element => element !== undefined);
}

function parseInlineTag(node: Parser.InlineTagContext) {
  return {
    id: node.inlineTagName().identifier().ID().text,
    body: parseInlineTagBody(node.inlineTagBody())
  }
}

function parseInlineTagBody(node: Parser.InlineTagBodyContext) {
  return node.braceBody().map(body => body.text).join('');
}