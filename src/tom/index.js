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
    return new XDoc(source);
};
/*! Documentation */
function parseDocumentation(node) {
    if (node.body()) {
        return parseBody(node.body());
    }
}
function parseBody(node) {
    if (node.annotations()) {
        return parseAnnotations(node.annotations());
    }
}
function parseAnnotations(node) {
    return node.tag().map(tag => {
        let obj = {};
        if (tag.tagName()) {
            _.assign(obj, { name: tag.tagName().identifier().text });
        }
        if (tag.tagID()) {
            _.assign(obj, { id: tag.tagID().text });
        }
        if (tag.type()) {
            _.assign(obj, { type: parseType(tag.type()) });
        }
        if (tag.expression()) {
            _.assign(obj, { value: parseExpression(tag.expression()) });
        }
        if (tag.tagBody()) {
            _.assign(obj, { description: parseTagBody(tag.tagBody()) });
        }
        return obj;
    });
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