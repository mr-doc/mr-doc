parser grammar TomParser;

options {
    tokenVocab = TomLexer;
}

documentation
	: EOF
	| body NEWLINE? EOF
	;

body
	: whitespace* annotations
	;

whitespace
	: SPACE
	| NEWLINE
	;

annotations
	: tag (NEWLINE tag)*

	;

tag
	: tagName // i.e. @tag
  | tagName SPACE MINUS SPACE description// i.e. @tag - description
	| tagName SPACE tagID// i.e. @tag x
	| tagName SPACE tagID SPACE? EQUAL SPACE? value // i.e. @tag x = expression
	| tagName SPACE tagID SPACE MINUS SPACE description // i.e. @tag x - description
	| tagName SPACE tagID SPACE EQUAL SPACE? value SPACE MINUS SPACE description // i.e. @tag x = value - description
	| tagName SPACE tagID SPACE? COLON SPACE? type // i.e. @tag x: type
	| tagName SPACE tagID SPACE? COLON SPACE? type SPACE? EQUAL SPACE? value // i.e. @tag x: type = value
	| tagName SPACE tagID SPACE? COLON SPACE? type SPACE MINUS SPACE description // i.e. @tag x: type - description
	| tagName SPACE tagID SPACE? COLON SPACE? type SPACE? EQUAL SPACE? value SPACE MINUS SPACE description // i.e. @tag x: type = value - description
  | tagName SPACE? COLON SPACE? type // i.e. @tag type (@return {...})
	| tagName SPACE? COLON SPACE? type SPACE MINUS SPACE description // i.e @tag type - description
	;

/* Tags */
tagName
	: AT identifier
	;

tagID
  : propertyTagID
  | optionalTagID
  | identifier
  ;

optionalTagID
  : identifier QUESTION
  ;

propertyTagID
  : optionalTagID (PERIOD optionalTagOrIdentifier)+
  | identifier (PERIOD optionalTagOrIdentifier)+
  ;

optionalTagOrIdentifier
  : optionalTagID
  | identifier
  ;

/* Types */

type
  : type SPACE? (PIPE | AMP) SPACE? type
  | lambdaType
  | tupleType
  | primaryType
  ;

tupleType
  : identifier? LESSTHAN SPACE? tupleTypeList SPACE? GREATERTHAN
  ;

tupleTypeList
  : type SPACE? (COMMA SPACE? type)+
  ;


primaryType
  : parenthesizedType
  | objectType
  | arrayType
  | propertyType
  | optionalType
  | identifierOrKeyword
  ;


identifierOrKeyword
  : identifier
  | NullLiteral
  ;

parenthesizedType
  : PAREN_OPEN SPACE? type SPACE? PAREN_CLOSE
  ;


lambdaType
  : PAREN_OPEN SPACE? formalParameterSequence? SPACE? PAREN_CLOSE SPACE? ARROW SPACE? type
  | parameter SPACE? ARROW SPACE? type
  ;

formalParameterSequence
  : parameter (COMMA SPACE? parameter)*
  ;

parameter
  : identifier (SPACE? COLON SPACE? type)?
  ;

arrayType
  : BRACKET_OPEN NEWLINE? SPACE? NEWLINE? type? (COMMA NEWLINE? SPACE? NEWLINE? type)* NEWLINE? SPACE? NEWLINE? BRACKET_CLOSE
  | identifier BRACKET_OPEN BRACKET_CLOSE
  | objectType BRACKET_OPEN BRACKET_CLOSE
  | arrayType BRACKET_OPEN type? BRACKET_CLOSE
  ;

objectType
  : BRACE_OPEN SPACE? NEWLINE? SPACE? objectPairTypeList? SPACE? NEWLINE? SPACE? BRACE_CLOSE
  ;

objectPairTypeList
  : objectPairType SPACE? (COMMA SPACE? NEWLINE? SPACE? objectPairType)*
  ;

objectPairType
  : type QUESTION? SPACE? COLON SPACE? type
  ;

optionalType
  : identifier QUESTION
  ;

propertyType
  : identifier (PERIOD optionalTypeOrIdentifer)+
  | optionalType (PERIOD optionalTypeOrIdentifer)+
  ;

optionalTypeOrIdentifer
  : identifier
  | optionalType
  ;

/* Value */
value
  : expression
  ;

/* Expressions */

expression
  : unaryExpression
  | expression SPACE? (STAR | FORWARD_SLASH) SPACE? expression
  | expression  SPACE? (PLUS | MINUS) SPACE? expression
  | arrayExpression
  | objectExpression
  | lambdaExpression
  | literal
  | parenthesizedExpression
  ;

unaryExpression
  : (PLUS | MINUS /*EXCLAMATION*/) expression
  ;

arrayExpression
  : BRACKET_OPEN NEWLINE? SPACE? NEWLINE? expression? (COMMA NEWLINE? SPACE? NEWLINE? expression)* NEWLINE? SPACE? NEWLINE? BRACKET_CLOSE
  ;

objectExpression
  : BRACE_OPEN SPACE? NEWLINE? SPACE? objectPairExpressionList? SPACE? NEWLINE? SPACE? BRACE_CLOSE;

objectPairExpressionList
  : objectPairExpression (SPACE? COMMA SPACE? NEWLINE? SPACE? objectPairExpression)*
  ;

objectPairExpression
  : literal SPACE? COLON SPACE? objectExpression
  | literal SPACE? COLON SPACE? literal
  ;

lambdaExpression
  :  PAREN_OPEN SPACE? formalParameterSequence? SPACE? PAREN_CLOSE SPACE? ARROW SPACE? type
  | parameter SPACE? ARROW SPACE? type QUESTION?
  ;

literal
  : IntegerLiteral
  |	FloatingPointLiteral
  |	BooleanLiteral
  |	CharacterLiteral
  |	StringLiteral
  |	NullLiteral
  ;

parenthesizedExpression
  : PAREN_OPEN SPACE? expression SPACE? PAREN_CLOSE
  ;

/* Descriptions */

description
	: descriptionLine /*(*//*descriptionNewline+ *//* descriptionLine)**/
	;

descriptionLine
	: descriptionLineStart descriptionLineElement*
	| inlineTag descriptionLineElement*
	;

descriptionLineStart
	: SPACE? descriptionText+ (descriptionText | SPACE | AT)*
	;

descriptionText
	: TEXT_CONTENT
	| ID
	| FORWARD_SLASH
	| BRACE_OPEN
	| BRACE_CLOSE
	| COLON
  | MINUS
  | PERIOD
  | literal
  ;

descriptionLineElement
	: inlineTag
	| descriptionLineText
	;

descriptionLineText
	: (descriptionText | SPACE | AT)+
	;

inlineTag
	: INLINE_TAG_START inlineTagName SPACE inlineTagBody? BRACE_CLOSE
	;

inlineTagName
	: identifier
	;

inlineTagBody
	: braceBody+
	;

braceExpression
	: BRACE_OPEN braceBody* BRACE_CLOSE
	;

braceBody
	: braceExpression
	| braceText (NEWLINE braceText)*
	;

braceText
	: TEXT_CONTENT
	| ID
	| SPACE
	| FORWARD_SLASH
	| NEWLINE
	| PERIOD
	;


identifier
  : ID
  ;
