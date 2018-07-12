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
	| tagName SPACE tagID// i.e. @tag x
	| tagName SPACE descriptionDelimiter SPACE tagBody// i.e. @tag - description
	| tagName SPACE tagID SPACE? assignmentDelimiter SPACE? expression // i.e. @tag x = expression
	| tagName SPACE tagID SPACE descriptionDelimiter SPACE tagBody // i.e. @tag x - description
	| tagName SPACE tagID SPACE assignmentDelimiter SPACE? expression SPACE descriptionDelimiter SPACE tagBody // i.e. @tag x = expression - description
	| tagName SPACE tagID SPACE? typeDelimiter SPACE? type // i.e. @tag x: type
	| tagName SPACE tagID SPACE? typeDelimiter SPACE? type SPACE? assignmentDelimiter SPACE? expression // i.e. @tag x: type = expression
	| tagName SPACE tagID SPACE? typeDelimiter SPACE? type SPACE descriptionDelimiter SPACE tagBody // i.e. @tag x: type - description
	| tagName SPACE tagID SPACE? typeDelimiter SPACE? type SPACE? assignmentDelimiter SPACE? expression SPACE descriptionDelimiter SPACE tagBody // i.e. @tag x: type = expression - description
	;

/* Tags */
tagName
	: AT identifier
	;

tagID
  : optionalTagID
  | identifier
  ;

optionalTagID
  : identifier QUESTION
  ;

tagBody
	: description
	| inlineTag
	;

/* Assignments */
assignmentDelimiter
  : EQUAL
  ;

/* Types */

typeDelimiter
  : COLON
  ;

type
  : identifier
  | identifier (SPACE? (AMP | PIPE) SPACE? type)*
  | PAREN_OPEN SPACE? type SPACE? PAREN_CLOSE
  | lambdaType
  | arrayType
  | objectType
  ;

lambdaType
  : PAREN_OPEN SPACE? formalParameterSequence SPACE? PAREN_CLOSE SPACE? ARROW SPACE? type
  ;

formalParameterSequence
  : parameter (COMMA SPACE? parameter)*
  ;

parameter
  : identifier (SPACE? COLON SPACE? type)?
  ;

arrayType
  : BRACKET_OPEN SPACE? type? (COMMA SPACE? type)* SPACE? BRACKET_CLOSE
  ;

objectType
  : BRACE_OPEN SPACE? objectPairType? SPACE? BRACE_CLOSE
  ;

objectPairType
  : type SPACE? COLON SPACE? type
  ;

/* Descriptions */
descriptionDelimiter
  : MINUS
  ;

description
	: descriptionLine (/*descriptionNewline+ */ descriptionLine)*
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
  ;

descriptionLineElement
	: inlineTag
	| descriptionLineText
	;

descriptionLineText
	: (descriptionText | SPACE | AT)+
	;

inlineTag
	: INLINE_TAG_START inlineTagID SPACE* inlineTagBody? BRACE_CLOSE
	;

inlineTagID
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
	| braceText (NEWLINE* braceText)*
	;

braceText
	: TEXT_CONTENT
	| ID
	| SPACE
	| FORWARD_SLASH
	| NEWLINE
	| PERIOD
	;

/* Expressions */

expression
  : unaryExpression
  | expression SPACE? (STAR | FORWARD_SLASH) SPACE? expression
  | expression  SPACE? (PLUS | MINUS) SPACE? expression
  | arrayExpression
  | objectExpression
  | literal
  ;

unaryExpression
  : (PLUS | MINUS | EXCLAMATION) expression
  ;

arrayExpression
  : BRACKET_OPEN expression? (COMMA SPACE? expression)* BRACKET_CLOSE;

objectExpression
  : BRACE_OPEN SPACE? objectPair? SPACE? BRACE_CLOSE;

objectPair
  : literal SPACE? COLON SPACE? literal;

number
  : IntegerLiteral
  | FloatingPointLiteral
  ;

literal
  : IntegerLiteral
  |	FloatingPointLiteral
  |	BooleanLiteral
  |	CharacterLiteral
  |	StringLiteral
  |	NullLiteral
  ;


identifier
  : ID
  ;
