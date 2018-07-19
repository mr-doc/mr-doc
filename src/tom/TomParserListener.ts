// Generated from TomParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { DocumentationContext } from './TomParser';
import { BodyContext } from './TomParser';
import { WhitespaceContext } from './TomParser';
import { AnnotationsContext } from './TomParser';
import { TagContext } from './TomParser';
import { TagNameContext } from './TomParser';
import { TagIDContext } from './TomParser';
import { OptionalTagIDContext } from './TomParser';
import { PropertyTagIDContext } from './TomParser';
import { OptionalTagOrIdentifierContext } from './TomParser';
import { TypeContext } from './TomParser';
import { UnaryTypeContext } from './TomParser';
import { TupleTypeContext } from './TomParser';
import { TupleTypeListContext } from './TomParser';
import { PrimaryTypeContext } from './TomParser';
import { IdentifierOrKeywordContext } from './TomParser';
import { ParenthesizedTypeContext } from './TomParser';
import { LambdaTypeContext } from './TomParser';
import { FormalParameterSequenceContext } from './TomParser';
import { ParameterContext } from './TomParser';
import { ArrayTypeContext } from './TomParser';
import { ObjectTypeContext } from './TomParser';
import { ObjectPairTypeListContext } from './TomParser';
import { ObjectPairTypeContext } from './TomParser';
import { OptionalTypeContext } from './TomParser';
import { PropertyTypeContext } from './TomParser';
import { OptionalTypeOrIdentiferContext } from './TomParser';
import { ValueContext } from './TomParser';
import { ExpressionContext } from './TomParser';
import { UnaryExpressionContext } from './TomParser';
import { ArrayExpressionContext } from './TomParser';
import { ObjectExpressionContext } from './TomParser';
import { ObjectPairExpressionListContext } from './TomParser';
import { ObjectPairExpressionContext } from './TomParser';
import { LambdaExpressionContext } from './TomParser';
import { LiteralContext } from './TomParser';
import { ParenthesizedExpressionContext } from './TomParser';
import { DescriptionContext } from './TomParser';
import { DescriptionLineContext } from './TomParser';
import { DescriptionLineStartContext } from './TomParser';
import { DescriptionTextContext } from './TomParser';
import { DescriptionLineElementContext } from './TomParser';
import { DescriptionLineTextContext } from './TomParser';
import { InlineTagContext } from './TomParser';
import { InlineTagNameContext } from './TomParser';
import { InlineTagBodyContext } from './TomParser';
import { BraceExpressionContext } from './TomParser';
import { BraceBodyContext } from './TomParser';
import { BraceTextContext } from './TomParser';
import { IdentifierContext } from './TomParser';


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TomParser`.
 */
export interface TomParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `TomParser.documentation`.
	 * @param ctx the parse tree
	 */
	enterDocumentation?: (ctx: DocumentationContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.documentation`.
	 * @param ctx the parse tree
	 */
	exitDocumentation?: (ctx: DocumentationContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.body`.
	 * @param ctx the parse tree
	 */
	enterBody?: (ctx: BodyContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.body`.
	 * @param ctx the parse tree
	 */
	exitBody?: (ctx: BodyContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.whitespace`.
	 * @param ctx the parse tree
	 */
	enterWhitespace?: (ctx: WhitespaceContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.whitespace`.
	 * @param ctx the parse tree
	 */
	exitWhitespace?: (ctx: WhitespaceContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.annotations`.
	 * @param ctx the parse tree
	 */
	enterAnnotations?: (ctx: AnnotationsContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.annotations`.
	 * @param ctx the parse tree
	 */
	exitAnnotations?: (ctx: AnnotationsContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.tag`.
	 * @param ctx the parse tree
	 */
	enterTag?: (ctx: TagContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.tag`.
	 * @param ctx the parse tree
	 */
	exitTag?: (ctx: TagContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.tagName`.
	 * @param ctx the parse tree
	 */
	enterTagName?: (ctx: TagNameContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.tagName`.
	 * @param ctx the parse tree
	 */
	exitTagName?: (ctx: TagNameContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.tagID`.
	 * @param ctx the parse tree
	 */
	enterTagID?: (ctx: TagIDContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.tagID`.
	 * @param ctx the parse tree
	 */
	exitTagID?: (ctx: TagIDContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.optionalTagID`.
	 * @param ctx the parse tree
	 */
	enterOptionalTagID?: (ctx: OptionalTagIDContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.optionalTagID`.
	 * @param ctx the parse tree
	 */
	exitOptionalTagID?: (ctx: OptionalTagIDContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.propertyTagID`.
	 * @param ctx the parse tree
	 */
	enterPropertyTagID?: (ctx: PropertyTagIDContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.propertyTagID`.
	 * @param ctx the parse tree
	 */
	exitPropertyTagID?: (ctx: PropertyTagIDContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.optionalTagOrIdentifier`.
	 * @param ctx the parse tree
	 */
	enterOptionalTagOrIdentifier?: (ctx: OptionalTagOrIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.optionalTagOrIdentifier`.
	 * @param ctx the parse tree
	 */
	exitOptionalTagOrIdentifier?: (ctx: OptionalTagOrIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.unaryType`.
	 * @param ctx the parse tree
	 */
	enterUnaryType?: (ctx: UnaryTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.unaryType`.
	 * @param ctx the parse tree
	 */
	exitUnaryType?: (ctx: UnaryTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.tupleType`.
	 * @param ctx the parse tree
	 */
	enterTupleType?: (ctx: TupleTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.tupleType`.
	 * @param ctx the parse tree
	 */
	exitTupleType?: (ctx: TupleTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.tupleTypeList`.
	 * @param ctx the parse tree
	 */
	enterTupleTypeList?: (ctx: TupleTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.tupleTypeList`.
	 * @param ctx the parse tree
	 */
	exitTupleTypeList?: (ctx: TupleTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterPrimaryType?: (ctx: PrimaryTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitPrimaryType?: (ctx: PrimaryTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.identifierOrKeyword`.
	 * @param ctx the parse tree
	 */
	enterIdentifierOrKeyword?: (ctx: IdentifierOrKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.identifierOrKeyword`.
	 * @param ctx the parse tree
	 */
	exitIdentifierOrKeyword?: (ctx: IdentifierOrKeywordContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.parenthesizedType`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedType?: (ctx: ParenthesizedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.parenthesizedType`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedType?: (ctx: ParenthesizedTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.lambdaType`.
	 * @param ctx the parse tree
	 */
	enterLambdaType?: (ctx: LambdaTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.lambdaType`.
	 * @param ctx the parse tree
	 */
	exitLambdaType?: (ctx: LambdaTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.formalParameterSequence`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterSequence?: (ctx: FormalParameterSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.formalParameterSequence`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterSequence?: (ctx: FormalParameterSequenceContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.arrayType`.
	 * @param ctx the parse tree
	 */
	enterArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.arrayType`.
	 * @param ctx the parse tree
	 */
	exitArrayType?: (ctx: ArrayTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.objectType`.
	 * @param ctx the parse tree
	 */
	enterObjectType?: (ctx: ObjectTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.objectType`.
	 * @param ctx the parse tree
	 */
	exitObjectType?: (ctx: ObjectTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.objectPairTypeList`.
	 * @param ctx the parse tree
	 */
	enterObjectPairTypeList?: (ctx: ObjectPairTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.objectPairTypeList`.
	 * @param ctx the parse tree
	 */
	exitObjectPairTypeList?: (ctx: ObjectPairTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.objectPairType`.
	 * @param ctx the parse tree
	 */
	enterObjectPairType?: (ctx: ObjectPairTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.objectPairType`.
	 * @param ctx the parse tree
	 */
	exitObjectPairType?: (ctx: ObjectPairTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.optionalType`.
	 * @param ctx the parse tree
	 */
	enterOptionalType?: (ctx: OptionalTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.optionalType`.
	 * @param ctx the parse tree
	 */
	exitOptionalType?: (ctx: OptionalTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.propertyType`.
	 * @param ctx the parse tree
	 */
	enterPropertyType?: (ctx: PropertyTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.propertyType`.
	 * @param ctx the parse tree
	 */
	exitPropertyType?: (ctx: PropertyTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.optionalTypeOrIdentifer`.
	 * @param ctx the parse tree
	 */
	enterOptionalTypeOrIdentifer?: (ctx: OptionalTypeOrIdentiferContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.optionalTypeOrIdentifer`.
	 * @param ctx the parse tree
	 */
	exitOptionalTypeOrIdentifer?: (ctx: OptionalTypeOrIdentiferContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.arrayExpression`.
	 * @param ctx the parse tree
	 */
	enterArrayExpression?: (ctx: ArrayExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.arrayExpression`.
	 * @param ctx the parse tree
	 */
	exitArrayExpression?: (ctx: ArrayExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.objectExpression`.
	 * @param ctx the parse tree
	 */
	enterObjectExpression?: (ctx: ObjectExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.objectExpression`.
	 * @param ctx the parse tree
	 */
	exitObjectExpression?: (ctx: ObjectExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.objectPairExpressionList`.
	 * @param ctx the parse tree
	 */
	enterObjectPairExpressionList?: (ctx: ObjectPairExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.objectPairExpressionList`.
	 * @param ctx the parse tree
	 */
	exitObjectPairExpressionList?: (ctx: ObjectPairExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.objectPairExpression`.
	 * @param ctx the parse tree
	 */
	enterObjectPairExpression?: (ctx: ObjectPairExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.objectPairExpression`.
	 * @param ctx the parse tree
	 */
	exitObjectPairExpression?: (ctx: ObjectPairExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.lambdaExpression`.
	 * @param ctx the parse tree
	 */
	enterLambdaExpression?: (ctx: LambdaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.lambdaExpression`.
	 * @param ctx the parse tree
	 */
	exitLambdaExpression?: (ctx: LambdaExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.parenthesizedExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.parenthesizedExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.description`.
	 * @param ctx the parse tree
	 */
	enterDescription?: (ctx: DescriptionContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.description`.
	 * @param ctx the parse tree
	 */
	exitDescription?: (ctx: DescriptionContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.descriptionLine`.
	 * @param ctx the parse tree
	 */
	enterDescriptionLine?: (ctx: DescriptionLineContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.descriptionLine`.
	 * @param ctx the parse tree
	 */
	exitDescriptionLine?: (ctx: DescriptionLineContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.descriptionLineStart`.
	 * @param ctx the parse tree
	 */
	enterDescriptionLineStart?: (ctx: DescriptionLineStartContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.descriptionLineStart`.
	 * @param ctx the parse tree
	 */
	exitDescriptionLineStart?: (ctx: DescriptionLineStartContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.descriptionText`.
	 * @param ctx the parse tree
	 */
	enterDescriptionText?: (ctx: DescriptionTextContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.descriptionText`.
	 * @param ctx the parse tree
	 */
	exitDescriptionText?: (ctx: DescriptionTextContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.descriptionLineElement`.
	 * @param ctx the parse tree
	 */
	enterDescriptionLineElement?: (ctx: DescriptionLineElementContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.descriptionLineElement`.
	 * @param ctx the parse tree
	 */
	exitDescriptionLineElement?: (ctx: DescriptionLineElementContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.descriptionLineText`.
	 * @param ctx the parse tree
	 */
	enterDescriptionLineText?: (ctx: DescriptionLineTextContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.descriptionLineText`.
	 * @param ctx the parse tree
	 */
	exitDescriptionLineText?: (ctx: DescriptionLineTextContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.inlineTag`.
	 * @param ctx the parse tree
	 */
	enterInlineTag?: (ctx: InlineTagContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.inlineTag`.
	 * @param ctx the parse tree
	 */
	exitInlineTag?: (ctx: InlineTagContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.inlineTagName`.
	 * @param ctx the parse tree
	 */
	enterInlineTagName?: (ctx: InlineTagNameContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.inlineTagName`.
	 * @param ctx the parse tree
	 */
	exitInlineTagName?: (ctx: InlineTagNameContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.inlineTagBody`.
	 * @param ctx the parse tree
	 */
	enterInlineTagBody?: (ctx: InlineTagBodyContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.inlineTagBody`.
	 * @param ctx the parse tree
	 */
	exitInlineTagBody?: (ctx: InlineTagBodyContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.braceExpression`.
	 * @param ctx the parse tree
	 */
	enterBraceExpression?: (ctx: BraceExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.braceExpression`.
	 * @param ctx the parse tree
	 */
	exitBraceExpression?: (ctx: BraceExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.braceBody`.
	 * @param ctx the parse tree
	 */
	enterBraceBody?: (ctx: BraceBodyContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.braceBody`.
	 * @param ctx the parse tree
	 */
	exitBraceBody?: (ctx: BraceBodyContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.braceText`.
	 * @param ctx the parse tree
	 */
	enterBraceText?: (ctx: BraceTextContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.braceText`.
	 * @param ctx the parse tree
	 */
	exitBraceText?: (ctx: BraceTextContext) => void;

	/**
	 * Enter a parse tree produced by `TomParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `TomParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}

