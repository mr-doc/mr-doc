// Generated from TomParser.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { TomParserListener } from './TomParserListener';
import { TomParserVisitor } from './TomParserVisitor';


export class TomParser extends Parser {
	public static readonly IntegerLiteral=1;
	public static readonly FloatingPointLiteral=2;
	public static readonly BooleanLiteral=3;
	public static readonly CharacterLiteral=4;
	public static readonly StringLiteral=5;
	public static readonly NullLiteral=6;
	public static readonly ID=7;
	public static readonly NEWLINE=8;
	public static readonly SPACE=9;
	public static readonly TEXT_CONTENT=10;
	public static readonly AT=11;
	public static readonly PLUS=12;
	public static readonly MINUS=13;
	public static readonly STAR=14;
	public static readonly FORWARD_SLASH=15;
	public static readonly COLON=16;
	public static readonly PERIOD=17;
	public static readonly COMMA=18;
	public static readonly EQUAL=19;
	public static readonly QUESTION=20;
	public static readonly AMP=21;
	public static readonly PIPE=22;
	public static readonly ARROW=23;
	public static readonly EXCLAMATION=24;
	public static readonly INLINE_TAG_START=25;
	public static readonly BRACE_OPEN=26;
	public static readonly BRACE_CLOSE=27;
	public static readonly PAREN_OPEN=28;
	public static readonly PAREN_CLOSE=29;
	public static readonly BRACKET_OPEN=30;
	public static readonly BRACKET_CLOSE=31;
	public static readonly LESSTHAN=32;
	public static readonly GREATERTHAN=33;
	public static readonly RULE_documentation = 0;
	public static readonly RULE_body = 1;
	public static readonly RULE_whitespace = 2;
	public static readonly RULE_annotations = 3;
	public static readonly RULE_tag = 4;
	public static readonly RULE_tagName = 5;
	public static readonly RULE_tagID = 6;
	public static readonly RULE_optionalTagID = 7;
	public static readonly RULE_propertyTagID = 8;
	public static readonly RULE_optionalTagOrIdentifier = 9;
	public static readonly RULE_type = 10;
	public static readonly RULE_tupleType = 11;
	public static readonly RULE_tupleTypeList = 12;
	public static readonly RULE_primaryType = 13;
	public static readonly RULE_parenthesizedType = 14;
	public static readonly RULE_lambdaType = 15;
	public static readonly RULE_formalParameterSequence = 16;
	public static readonly RULE_parameter = 17;
	public static readonly RULE_arrayType = 18;
	public static readonly RULE_objectType = 19;
	public static readonly RULE_objectPairTypeList = 20;
	public static readonly RULE_objectPairType = 21;
	public static readonly RULE_optionalType = 22;
	public static readonly RULE_propertyType = 23;
	public static readonly RULE_value = 24;
	public static readonly RULE_description = 25;
	public static readonly RULE_descriptionLine = 26;
	public static readonly RULE_descriptionLineStart = 27;
	public static readonly RULE_descriptionText = 28;
	public static readonly RULE_descriptionLineElement = 29;
	public static readonly RULE_descriptionLineText = 30;
	public static readonly RULE_inlineTag = 31;
	public static readonly RULE_inlineTagName = 32;
	public static readonly RULE_inlineTagBody = 33;
	public static readonly RULE_braceExpression = 34;
	public static readonly RULE_braceBody = 35;
	public static readonly RULE_braceText = 36;
	public static readonly RULE_expression = 37;
	public static readonly RULE_unaryExpression = 38;
	public static readonly RULE_arrayExpression = 39;
	public static readonly RULE_objectExpression = 40;
	public static readonly RULE_objectPairExpressionList = 41;
	public static readonly RULE_objectPair = 42;
	public static readonly RULE_literal = 43;
	public static readonly RULE_parenthesizedExpression = 44;
	public static readonly RULE_identifier = 45;
	public static readonly ruleNames: string[] = [
		"documentation", "body", "whitespace", "annotations", "tag", "tagName", 
		"tagID", "optionalTagID", "propertyTagID", "optionalTagOrIdentifier", 
		"type", "tupleType", "tupleTypeList", "primaryType", "parenthesizedType", 
		"lambdaType", "formalParameterSequence", "parameter", "arrayType", "objectType", 
		"objectPairTypeList", "objectPairType", "optionalType", "propertyType", 
		"value", "description", "descriptionLine", "descriptionLineStart", "descriptionText", 
		"descriptionLineElement", "descriptionLineText", "inlineTag", "inlineTagName", 
		"inlineTagBody", "braceExpression", "braceBody", "braceText", "expression", 
		"unaryExpression", "arrayExpression", "objectExpression", "objectPairExpressionList", 
		"objectPair", "literal", "parenthesizedExpression", "identifier"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'@'", "'+'", "'-'", "'*'", 
		"'/'", "':'", "'.'", "','", "'='", "'?'", "'&'", "'|'", undefined, "'!'", 
		"'{@'", "'{'", "'}'", "'('", "')'", "'['", "']'", "'<'", "'>'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "IntegerLiteral", "FloatingPointLiteral", "BooleanLiteral", 
		"CharacterLiteral", "StringLiteral", "NullLiteral", "ID", "NEWLINE", "SPACE", 
		"TEXT_CONTENT", "AT", "PLUS", "MINUS", "STAR", "FORWARD_SLASH", "COLON", 
		"PERIOD", "COMMA", "EQUAL", "QUESTION", "AMP", "PIPE", "ARROW", "EXCLAMATION", 
		"INLINE_TAG_START", "BRACE_OPEN", "BRACE_CLOSE", "PAREN_OPEN", "PAREN_CLOSE", 
		"BRACKET_OPEN", "BRACKET_CLOSE", "LESSTHAN", "GREATERTHAN"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TomParser._LITERAL_NAMES, TomParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return TomParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "TomParser.g4"; }

	@Override
	public get ruleNames(): string[] { return TomParser.ruleNames; }

	@Override
	public get serializedATN(): string { return TomParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(TomParser._ATN, this);
	}
	
	public documentation(): DocumentationContext {
		let _localctx: DocumentationContext = new DocumentationContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TomParser.RULE_documentation);
		let _la: number;
		try {
			this.state = 99;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TomParser.EOF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 92;
				this.match(TomParser.EOF);
				}
				break;
			case TomParser.NEWLINE:
			case TomParser.SPACE:
			case TomParser.AT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 93;
				this.body();
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.NEWLINE) {
					{
					this.state = 94;
					this.match(TomParser.NEWLINE);
					}
				}

				this.state = 97;
				this.match(TomParser.EOF);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, TomParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===TomParser.NEWLINE || _la===TomParser.SPACE) {
				{
				{
				this.state = 101;
				this.whitespace();
				}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 107;
			this.annotations();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public whitespace(): WhitespaceContext {
		let _localctx: WhitespaceContext = new WhitespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TomParser.RULE_whitespace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			_la = this._input.LA(1);
			if ( !(_la===TomParser.NEWLINE || _la===TomParser.SPACE) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public annotations(): AnnotationsContext {
		let _localctx: AnnotationsContext = new AnnotationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TomParser.RULE_annotations);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.tag();
			this.state = 116;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,3,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 112;
					this.match(TomParser.NEWLINE);
					this.state = 113;
					this.tag();
					}
					} 
				}
				this.state = 118;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,3,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public tag(): TagContext {
		let _localctx: TagContext = new TagContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, TomParser.RULE_tag);
		let _la: number;
		try {
			this.state = 248;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,19,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 119;
				this.tagName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 120;
				this.tagName();
				this.state = 121;
				this.match(TomParser.SPACE);
				this.state = 122;
				this.type(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 124;
				this.tagName();
				this.state = 125;
				this.match(TomParser.SPACE);
				this.state = 126;
				this.type(0);
				this.state = 127;
				this.match(TomParser.SPACE);
				this.state = 128;
				this.match(TomParser.MINUS);
				this.state = 129;
				this.match(TomParser.SPACE);
				this.state = 130;
				this.description();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 132;
				this.tagName();
				this.state = 133;
				this.match(TomParser.SPACE);
				this.state = 134;
				this.match(TomParser.MINUS);
				this.state = 135;
				this.match(TomParser.SPACE);
				this.state = 136;
				this.description();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 138;
				this.tagName();
				this.state = 139;
				this.match(TomParser.SPACE);
				this.state = 140;
				this.tagID();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 142;
				this.tagName();
				this.state = 143;
				this.match(TomParser.SPACE);
				this.state = 144;
				this.tagID();
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 145;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 148;
				this.match(TomParser.EQUAL);
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 149;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 152;
				this.value();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 154;
				this.tagName();
				this.state = 155;
				this.match(TomParser.SPACE);
				this.state = 156;
				this.tagID();
				this.state = 157;
				this.match(TomParser.SPACE);
				this.state = 158;
				this.match(TomParser.MINUS);
				this.state = 159;
				this.match(TomParser.SPACE);
				this.state = 160;
				this.description();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 162;
				this.tagName();
				this.state = 163;
				this.match(TomParser.SPACE);
				this.state = 164;
				this.tagID();
				this.state = 165;
				this.match(TomParser.SPACE);
				this.state = 166;
				this.match(TomParser.EQUAL);
				this.state = 168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 167;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 170;
				this.value();
				this.state = 171;
				this.match(TomParser.SPACE);
				this.state = 172;
				this.match(TomParser.MINUS);
				this.state = 173;
				this.match(TomParser.SPACE);
				this.state = 174;
				this.description();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 176;
				this.tagName();
				this.state = 177;
				this.match(TomParser.SPACE);
				this.state = 178;
				this.tagID();
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 179;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 182;
				this.match(TomParser.COLON);
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 183;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 186;
				this.type(0);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 188;
				this.tagName();
				this.state = 189;
				this.match(TomParser.SPACE);
				this.state = 190;
				this.tagID();
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 191;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 194;
				this.match(TomParser.COLON);
				this.state = 196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 195;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 198;
				this.type(0);
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 199;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 202;
				this.match(TomParser.EQUAL);
				this.state = 204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 203;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 206;
				this.value();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 208;
				this.tagName();
				this.state = 209;
				this.match(TomParser.SPACE);
				this.state = 210;
				this.tagID();
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 211;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 214;
				this.match(TomParser.COLON);
				this.state = 216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 215;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 218;
				this.type(0);
				this.state = 219;
				this.match(TomParser.SPACE);
				this.state = 220;
				this.match(TomParser.MINUS);
				this.state = 221;
				this.match(TomParser.SPACE);
				this.state = 222;
				this.description();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 224;
				this.tagName();
				this.state = 225;
				this.match(TomParser.SPACE);
				this.state = 226;
				this.tagID();
				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 227;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 230;
				this.match(TomParser.COLON);
				this.state = 232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 231;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 234;
				this.type(0);
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 235;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 238;
				this.match(TomParser.EQUAL);
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 239;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 242;
				this.value();
				this.state = 243;
				this.match(TomParser.SPACE);
				this.state = 244;
				this.match(TomParser.MINUS);
				this.state = 245;
				this.match(TomParser.SPACE);
				this.state = 246;
				this.description();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public tagName(): TagNameContext {
		let _localctx: TagNameContext = new TagNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, TomParser.RULE_tagName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this.match(TomParser.AT);
			this.state = 251;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public tagID(): TagIDContext {
		let _localctx: TagIDContext = new TagIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, TomParser.RULE_tagID);
		try {
			this.state = 256;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,20,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 253;
				this.propertyTagID();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 254;
				this.optionalTagID();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 255;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public optionalTagID(): OptionalTagIDContext {
		let _localctx: OptionalTagIDContext = new OptionalTagIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, TomParser.RULE_optionalTagID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.identifier();
			this.state = 259;
			this.match(TomParser.QUESTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public propertyTagID(): PropertyTagIDContext {
		let _localctx: PropertyTagIDContext = new PropertyTagIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, TomParser.RULE_propertyTagID);
		let _la: number;
		try {
			this.state = 277;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,23,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 261;
				this.optionalTagID();
				this.state = 266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===TomParser.PERIOD) {
					{
					{
					this.state = 262;
					this.match(TomParser.PERIOD);
					this.state = 263;
					this.optionalTagOrIdentifier();
					}
					}
					this.state = 268;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 269;
				this.identifier();
				this.state = 274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===TomParser.PERIOD) {
					{
					{
					this.state = 270;
					this.match(TomParser.PERIOD);
					this.state = 271;
					this.optionalTagOrIdentifier();
					}
					}
					this.state = 276;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public optionalTagOrIdentifier(): OptionalTagOrIdentifierContext {
		let _localctx: OptionalTagOrIdentifierContext = new OptionalTagOrIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, TomParser.RULE_optionalTagOrIdentifier);
		try {
			this.state = 281;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,24,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 279;
				this.optionalTagID();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 280;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public type(): TypeContext;
	public type(_p: number): TypeContext;
	
	public type(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
		let _prevctx: TypeContext = _localctx;
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, TomParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,25,this._ctx) ) {
			case 1:
				{
				this.state = 284;
				this.lambdaType();
				}
				break;

			case 2:
				{
				this.state = 285;
				this.tupleType();
				}
				break;

			case 3:
				{
				this.state = 286;
				this.primaryType();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 300;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,28,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_type);
					this.state = 289;
					if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
					this.state = 291;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===TomParser.SPACE) {
						{
						this.state = 290;
						this.match(TomParser.SPACE);
						}
					}

					this.state = 293;
					_la = this._input.LA(1);
					if ( !(_la===TomParser.AMP || _la===TomParser.PIPE) ) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 295;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===TomParser.SPACE) {
						{
						this.state = 294;
						this.match(TomParser.SPACE);
						}
					}

					this.state = 297;
					this.type(5);
					}
					} 
				}
				this.state = 302;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,28,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	
	public tupleType(): TupleTypeContext {
		let _localctx: TupleTypeContext = new TupleTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, TomParser.RULE_tupleType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.ID) {
				{
				this.state = 303;
				this.identifier();
				}
			}

			this.state = 306;
			this.match(TomParser.LESSTHAN);
			this.state = 308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 307;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 310;
			this.tupleTypeList();
			this.state = 312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 311;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 314;
			this.match(TomParser.GREATERTHAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public tupleTypeList(): TupleTypeListContext {
		let _localctx: TupleTypeListContext = new TupleTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, TomParser.RULE_tupleTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this.type(0);
			this.state = 318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 317;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 325; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 320;
				this.match(TomParser.COMMA);
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 321;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 324;
				this.type(0);
				}
				}
				this.state = 327; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===TomParser.COMMA );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public primaryType(): PrimaryTypeContext {
		let _localctx: PrimaryTypeContext = new PrimaryTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, TomParser.RULE_primaryType);
		try {
			this.state = 338;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,36,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 329;
				this.parenthesizedType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 330;
				this.objectType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 331;
				this.arrayType(0);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 332;
				this.propertyType();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 333;
				this.optionalType();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 334;
				this.identifier();
				this.state = 336;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,35,this._ctx) ) {
				case 1:
					{
					this.state = 335;
					this.match(TomParser.QUESTION);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public parenthesizedType(): ParenthesizedTypeContext {
		let _localctx: ParenthesizedTypeContext = new ParenthesizedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, TomParser.RULE_parenthesizedType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this.match(TomParser.PAREN_OPEN);
			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 341;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 344;
			this.type(0);
			this.state = 346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 345;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 348;
			this.match(TomParser.PAREN_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public lambdaType(): LambdaTypeContext {
		let _localctx: LambdaTypeContext = new LambdaTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, TomParser.RULE_lambdaType);
		let _la: number;
		try {
			this.state = 378;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TomParser.PAREN_OPEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 350;
				this.match(TomParser.PAREN_OPEN);
				this.state = 352;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 351;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 354;
				this.formalParameterSequence();
				this.state = 356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 355;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 358;
				this.match(TomParser.PAREN_CLOSE);
				this.state = 360;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 359;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 362;
				this.match(TomParser.ARROW);
				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 363;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 366;
				this.type(0);
				}
				break;
			case TomParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 368;
				this.parameter();
				this.state = 370;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 369;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 372;
				this.match(TomParser.ARROW);
				this.state = 374;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 373;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 376;
				this.type(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public formalParameterSequence(): FormalParameterSequenceContext {
		let _localctx: FormalParameterSequenceContext = new FormalParameterSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, TomParser.RULE_formalParameterSequence);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this.parameter();
			this.state = 388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===TomParser.COMMA) {
				{
				{
				this.state = 381;
				this.match(TomParser.COMMA);
				this.state = 383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 382;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 385;
				this.parameter();
				}
				}
				this.state = 390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, TomParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 391;
			this.identifier();
			this.state = 400;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,50,this._ctx) ) {
			case 1:
				{
				this.state = 393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 392;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 395;
				this.match(TomParser.COLON);
				this.state = 397;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 396;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 399;
				this.type(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public arrayType(): ArrayTypeContext;
	public arrayType(_p: number): ArrayTypeContext;
	
	public arrayType(_p?: number): ArrayTypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, _parentState);
		let _prevctx: ArrayTypeContext = _localctx;
		let _startState: number = 36;
		this.enterRecursionRule(_localctx, 36, TomParser.RULE_arrayType, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TomParser.BRACKET_OPEN:
				{
				this.state = 403;
				this.match(TomParser.BRACKET_OPEN);
				this.state = 405;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,51,this._ctx) ) {
				case 1:
					{
					this.state = 404;
					this.match(TomParser.SPACE);
					}
					break;
				}
				this.state = 408;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (TomParser.ID - 7)) | (1 << (TomParser.BRACE_OPEN - 7)) | (1 << (TomParser.PAREN_OPEN - 7)) | (1 << (TomParser.BRACKET_OPEN - 7)) | (1 << (TomParser.LESSTHAN - 7)))) !== 0)) {
					{
					this.state = 407;
					this.type(0);
					}
				}

				this.state = 417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===TomParser.COMMA) {
					{
					{
					this.state = 410;
					this.match(TomParser.COMMA);
					this.state = 412;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===TomParser.SPACE) {
						{
						this.state = 411;
						this.match(TomParser.SPACE);
						}
					}

					this.state = 414;
					this.type(0);
					}
					}
					this.state = 419;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 420;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 423;
				this.match(TomParser.BRACKET_CLOSE);
				}
				break;
			case TomParser.ID:
				{
				this.state = 424;
				this.identifier();
				this.state = 425;
				this.match(TomParser.BRACKET_OPEN);
				this.state = 426;
				this.match(TomParser.BRACKET_CLOSE);
				}
				break;
			case TomParser.BRACE_OPEN:
				{
				this.state = 428;
				this.objectType();
				this.state = 429;
				this.match(TomParser.BRACKET_OPEN);
				this.state = 430;
				this.match(TomParser.BRACKET_CLOSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 442;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,58,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ArrayTypeContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_arrayType);
					this.state = 434;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 435;
					this.match(TomParser.BRACKET_OPEN);
					this.state = 437;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (TomParser.ID - 7)) | (1 << (TomParser.BRACE_OPEN - 7)) | (1 << (TomParser.PAREN_OPEN - 7)) | (1 << (TomParser.BRACKET_OPEN - 7)) | (1 << (TomParser.LESSTHAN - 7)))) !== 0)) {
						{
						this.state = 436;
						this.type(0);
						}
					}

					this.state = 439;
					this.match(TomParser.BRACKET_CLOSE);
					}
					} 
				}
				this.state = 444;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,58,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	
	public objectType(): ObjectTypeContext {
		let _localctx: ObjectTypeContext = new ObjectTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, TomParser.RULE_objectType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this.match(TomParser.BRACE_OPEN);
			this.state = 447;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,59,this._ctx) ) {
			case 1:
				{
				this.state = 446;
				this.match(TomParser.SPACE);
				}
				break;
			}
			this.state = 450;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,60,this._ctx) ) {
			case 1:
				{
				this.state = 449;
				this.match(TomParser.NEWLINE);
				}
				break;
			}
			this.state = 453;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,61,this._ctx) ) {
			case 1:
				{
				this.state = 452;
				this.match(TomParser.SPACE);
				}
				break;
			}
			this.state = 456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (TomParser.ID - 7)) | (1 << (TomParser.BRACE_OPEN - 7)) | (1 << (TomParser.PAREN_OPEN - 7)) | (1 << (TomParser.BRACKET_OPEN - 7)) | (1 << (TomParser.LESSTHAN - 7)))) !== 0)) {
				{
				this.state = 455;
				this.objectPairTypeList();
				}
			}

			this.state = 459;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,63,this._ctx) ) {
			case 1:
				{
				this.state = 458;
				this.match(TomParser.SPACE);
				}
				break;
			}
			this.state = 462;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.NEWLINE) {
				{
				this.state = 461;
				this.match(TomParser.NEWLINE);
				}
			}

			this.state = 465;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 464;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 467;
			this.match(TomParser.BRACE_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public objectPairTypeList(): ObjectPairTypeListContext {
		let _localctx: ObjectPairTypeListContext = new ObjectPairTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, TomParser.RULE_objectPairTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			this.objectPairType();
			this.state = 471;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,66,this._ctx) ) {
			case 1:
				{
				this.state = 470;
				this.match(TomParser.SPACE);
				}
				break;
			}
			this.state = 486;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===TomParser.COMMA) {
				{
				{
				this.state = 473;
				this.match(TomParser.COMMA);
				this.state = 475;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,67,this._ctx) ) {
				case 1:
					{
					this.state = 474;
					this.match(TomParser.SPACE);
					}
					break;
				}
				this.state = 478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.NEWLINE) {
					{
					this.state = 477;
					this.match(TomParser.NEWLINE);
					}
				}

				this.state = 481;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 480;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 483;
				this.objectPairType();
				}
				}
				this.state = 488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public objectPairType(): ObjectPairTypeContext {
		let _localctx: ObjectPairTypeContext = new ObjectPairTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, TomParser.RULE_objectPairType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.type(0);
			this.state = 491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.QUESTION) {
				{
				this.state = 490;
				this.match(TomParser.QUESTION);
				}
			}

			this.state = 494;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 493;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 496;
			this.match(TomParser.COLON);
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 497;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 500;
			this.type(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public optionalType(): OptionalTypeContext {
		let _localctx: OptionalTypeContext = new OptionalTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, TomParser.RULE_optionalType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 502;
			this.identifier();
			this.state = 503;
			this.match(TomParser.QUESTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public propertyType(): PropertyTypeContext {
		let _localctx: PropertyTypeContext = new PropertyTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, TomParser.RULE_propertyType);
		try {
			let _alt: number;
			this.state = 527;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,78,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 505;
				this.identifier();
				this.state = 513;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,75,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 506;
						this.match(TomParser.PERIOD);
						this.state = 509;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input,74,this._ctx) ) {
						case 1:
							{
							this.state = 507;
							this.identifier();
							}
							break;

						case 2:
							{
							this.state = 508;
							this.optionalType();
							}
							break;
						}
						}
						} 
					}
					this.state = 515;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,75,this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 516;
				this.optionalType();
				this.state = 524;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,77,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 517;
						this.match(TomParser.PERIOD);
						this.state = 520;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input,76,this._ctx) ) {
						case 1:
							{
							this.state = 518;
							this.optionalTagID();
							}
							break;

						case 2:
							{
							this.state = 519;
							this.identifier();
							}
							break;
						}
						}
						} 
					}
					this.state = 526;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,77,this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, TomParser.RULE_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public description(): DescriptionContext {
		let _localctx: DescriptionContext = new DescriptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, TomParser.RULE_description);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 531;
			this.descriptionLine();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public descriptionLine(): DescriptionLineContext {
		let _localctx: DescriptionLineContext = new DescriptionLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, TomParser.RULE_descriptionLine);
		let _la: number;
		try {
			this.state = 547;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TomParser.IntegerLiteral:
			case TomParser.FloatingPointLiteral:
			case TomParser.BooleanLiteral:
			case TomParser.CharacterLiteral:
			case TomParser.StringLiteral:
			case TomParser.NullLiteral:
			case TomParser.ID:
			case TomParser.SPACE:
			case TomParser.TEXT_CONTENT:
			case TomParser.MINUS:
			case TomParser.FORWARD_SLASH:
			case TomParser.COLON:
			case TomParser.PERIOD:
			case TomParser.BRACE_OPEN:
			case TomParser.BRACE_CLOSE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 533;
				this.descriptionLineStart();
				this.state = 537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral) | (1 << TomParser.ID) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.AT) | (1 << TomParser.MINUS) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.COLON) | (1 << TomParser.PERIOD) | (1 << TomParser.INLINE_TAG_START) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.BRACE_CLOSE))) !== 0)) {
					{
					{
					this.state = 534;
					this.descriptionLineElement();
					}
					}
					this.state = 539;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case TomParser.INLINE_TAG_START:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 540;
				this.inlineTag();
				this.state = 544;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral) | (1 << TomParser.ID) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.AT) | (1 << TomParser.MINUS) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.COLON) | (1 << TomParser.PERIOD) | (1 << TomParser.INLINE_TAG_START) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.BRACE_CLOSE))) !== 0)) {
					{
					{
					this.state = 541;
					this.descriptionLineElement();
					}
					}
					this.state = 546;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public descriptionLineStart(): DescriptionLineStartContext {
		let _localctx: DescriptionLineStartContext = new DescriptionLineStartContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, TomParser.RULE_descriptionLineStart);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 549;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 553; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 552;
					this.descriptionText();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 555; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,83,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			this.state = 562;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,85,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					this.state = 560;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case TomParser.IntegerLiteral:
					case TomParser.FloatingPointLiteral:
					case TomParser.BooleanLiteral:
					case TomParser.CharacterLiteral:
					case TomParser.StringLiteral:
					case TomParser.NullLiteral:
					case TomParser.ID:
					case TomParser.TEXT_CONTENT:
					case TomParser.MINUS:
					case TomParser.FORWARD_SLASH:
					case TomParser.COLON:
					case TomParser.PERIOD:
					case TomParser.BRACE_OPEN:
					case TomParser.BRACE_CLOSE:
						{
						this.state = 557;
						this.descriptionText();
						}
						break;
					case TomParser.SPACE:
						{
						this.state = 558;
						this.match(TomParser.SPACE);
						}
						break;
					case TomParser.AT:
						{
						this.state = 559;
						this.match(TomParser.AT);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				this.state = 564;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,85,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public descriptionText(): DescriptionTextContext {
		let _localctx: DescriptionTextContext = new DescriptionTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, TomParser.RULE_descriptionText);
		try {
			this.state = 574;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TomParser.TEXT_CONTENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 565;
				this.match(TomParser.TEXT_CONTENT);
				}
				break;
			case TomParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 566;
				this.match(TomParser.ID);
				}
				break;
			case TomParser.FORWARD_SLASH:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 567;
				this.match(TomParser.FORWARD_SLASH);
				}
				break;
			case TomParser.BRACE_OPEN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 568;
				this.match(TomParser.BRACE_OPEN);
				}
				break;
			case TomParser.BRACE_CLOSE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 569;
				this.match(TomParser.BRACE_CLOSE);
				}
				break;
			case TomParser.COLON:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 570;
				this.match(TomParser.COLON);
				}
				break;
			case TomParser.MINUS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 571;
				this.match(TomParser.MINUS);
				}
				break;
			case TomParser.PERIOD:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 572;
				this.match(TomParser.PERIOD);
				}
				break;
			case TomParser.IntegerLiteral:
			case TomParser.FloatingPointLiteral:
			case TomParser.BooleanLiteral:
			case TomParser.CharacterLiteral:
			case TomParser.StringLiteral:
			case TomParser.NullLiteral:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 573;
				this.literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public descriptionLineElement(): DescriptionLineElementContext {
		let _localctx: DescriptionLineElementContext = new DescriptionLineElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, TomParser.RULE_descriptionLineElement);
		try {
			this.state = 578;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TomParser.INLINE_TAG_START:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 576;
				this.inlineTag();
				}
				break;
			case TomParser.IntegerLiteral:
			case TomParser.FloatingPointLiteral:
			case TomParser.BooleanLiteral:
			case TomParser.CharacterLiteral:
			case TomParser.StringLiteral:
			case TomParser.NullLiteral:
			case TomParser.ID:
			case TomParser.SPACE:
			case TomParser.TEXT_CONTENT:
			case TomParser.AT:
			case TomParser.MINUS:
			case TomParser.FORWARD_SLASH:
			case TomParser.COLON:
			case TomParser.PERIOD:
			case TomParser.BRACE_OPEN:
			case TomParser.BRACE_CLOSE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 577;
				this.descriptionLineText();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public descriptionLineText(): DescriptionLineTextContext {
		let _localctx: DescriptionLineTextContext = new DescriptionLineTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, TomParser.RULE_descriptionLineText);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 583; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 583;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case TomParser.IntegerLiteral:
					case TomParser.FloatingPointLiteral:
					case TomParser.BooleanLiteral:
					case TomParser.CharacterLiteral:
					case TomParser.StringLiteral:
					case TomParser.NullLiteral:
					case TomParser.ID:
					case TomParser.TEXT_CONTENT:
					case TomParser.MINUS:
					case TomParser.FORWARD_SLASH:
					case TomParser.COLON:
					case TomParser.PERIOD:
					case TomParser.BRACE_OPEN:
					case TomParser.BRACE_CLOSE:
						{
						this.state = 580;
						this.descriptionText();
						}
						break;
					case TomParser.SPACE:
						{
						this.state = 581;
						this.match(TomParser.SPACE);
						}
						break;
					case TomParser.AT:
						{
						this.state = 582;
						this.match(TomParser.AT);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 585; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,89,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public inlineTag(): InlineTagContext {
		let _localctx: InlineTagContext = new InlineTagContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, TomParser.RULE_inlineTag);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 587;
			this.match(TomParser.INLINE_TAG_START);
			this.state = 588;
			this.inlineTagName();
			this.state = 589;
			this.match(TomParser.SPACE);
			this.state = 591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.NEWLINE) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.PERIOD) | (1 << TomParser.BRACE_OPEN))) !== 0)) {
				{
				this.state = 590;
				this.inlineTagBody();
				}
			}

			this.state = 593;
			this.match(TomParser.BRACE_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public inlineTagName(): InlineTagNameContext {
		let _localctx: InlineTagNameContext = new InlineTagNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, TomParser.RULE_inlineTagName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 595;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public inlineTagBody(): InlineTagBodyContext {
		let _localctx: InlineTagBodyContext = new InlineTagBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, TomParser.RULE_inlineTagBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 598; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 597;
				this.braceBody();
				}
				}
				this.state = 600; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.NEWLINE) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.PERIOD) | (1 << TomParser.BRACE_OPEN))) !== 0) );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public braceExpression(): BraceExpressionContext {
		let _localctx: BraceExpressionContext = new BraceExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, TomParser.RULE_braceExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 602;
			this.match(TomParser.BRACE_OPEN);
			this.state = 606;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.NEWLINE) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.PERIOD) | (1 << TomParser.BRACE_OPEN))) !== 0)) {
				{
				{
				this.state = 603;
				this.braceBody();
				}
				}
				this.state = 608;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 609;
			this.match(TomParser.BRACE_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public braceBody(): BraceBodyContext {
		let _localctx: BraceBodyContext = new BraceBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, TomParser.RULE_braceBody);
		try {
			let _alt: number;
			this.state = 620;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TomParser.BRACE_OPEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 611;
				this.braceExpression();
				}
				break;
			case TomParser.ID:
			case TomParser.NEWLINE:
			case TomParser.SPACE:
			case TomParser.TEXT_CONTENT:
			case TomParser.FORWARD_SLASH:
			case TomParser.PERIOD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 612;
				this.braceText();
				this.state = 617;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,93,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 613;
						this.match(TomParser.NEWLINE);
						this.state = 614;
						this.braceText();
						}
						} 
					}
					this.state = 619;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,93,this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public braceText(): BraceTextContext {
		let _localctx: BraceTextContext = new BraceTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, TomParser.RULE_braceText);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 622;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.NEWLINE) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.PERIOD))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 74;
		this.enterRecursionRule(_localctx, 74, TomParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 630;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TomParser.PLUS:
			case TomParser.MINUS:
				{
				this.state = 625;
				this.unaryExpression();
				}
				break;
			case TomParser.BRACKET_OPEN:
				{
				this.state = 626;
				this.arrayExpression();
				}
				break;
			case TomParser.BRACE_OPEN:
				{
				this.state = 627;
				this.objectExpression();
				}
				break;
			case TomParser.IntegerLiteral:
			case TomParser.FloatingPointLiteral:
			case TomParser.BooleanLiteral:
			case TomParser.CharacterLiteral:
			case TomParser.StringLiteral:
			case TomParser.NullLiteral:
				{
				this.state = 628;
				this.literal();
				}
				break;
			case TomParser.PAREN_OPEN:
				{
				this.state = 629;
				this.parenthesizedExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 652;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,101,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 650;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,100,this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_expression);
						this.state = 632;
						if (!(this.precpred(this._ctx, 6))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						this.state = 634;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===TomParser.SPACE) {
							{
							this.state = 633;
							this.match(TomParser.SPACE);
							}
						}

						this.state = 636;
						_la = this._input.LA(1);
						if ( !(_la===TomParser.STAR || _la===TomParser.FORWARD_SLASH) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 638;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===TomParser.SPACE) {
							{
							this.state = 637;
							this.match(TomParser.SPACE);
							}
						}

						this.state = 640;
						this.expression(7);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_expression);
						this.state = 641;
						if (!(this.precpred(this._ctx, 5))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						this.state = 643;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===TomParser.SPACE) {
							{
							this.state = 642;
							this.match(TomParser.SPACE);
							}
						}

						this.state = 645;
						_la = this._input.LA(1);
						if ( !(_la===TomParser.PLUS || _la===TomParser.MINUS) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 647;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===TomParser.SPACE) {
							{
							this.state = 646;
							this.match(TomParser.SPACE);
							}
						}

						this.state = 649;
						this.expression(6);
						}
						break;
					}
					} 
				}
				this.state = 654;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,101,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, TomParser.RULE_unaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 655;
			_la = this._input.LA(1);
			if ( !(_la===TomParser.PLUS || _la===TomParser.MINUS) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 656;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public arrayExpression(): ArrayExpressionContext {
		let _localctx: ArrayExpressionContext = new ArrayExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, TomParser.RULE_arrayExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 658;
			this.match(TomParser.BRACKET_OPEN);
			this.state = 660;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral) | (1 << TomParser.PLUS) | (1 << TomParser.MINUS) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.PAREN_OPEN) | (1 << TomParser.BRACKET_OPEN))) !== 0)) {
				{
				this.state = 659;
				this.expression(0);
				}
			}

			this.state = 669;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===TomParser.COMMA) {
				{
				{
				this.state = 662;
				this.match(TomParser.COMMA);
				this.state = 664;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 663;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 666;
				this.expression(0);
				}
				}
				this.state = 671;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 672;
			this.match(TomParser.BRACKET_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public objectExpression(): ObjectExpressionContext {
		let _localctx: ObjectExpressionContext = new ObjectExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, TomParser.RULE_objectExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 674;
			this.match(TomParser.BRACE_OPEN);
			this.state = 676;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,105,this._ctx) ) {
			case 1:
				{
				this.state = 675;
				this.match(TomParser.SPACE);
				}
				break;
			}
			this.state = 679;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,106,this._ctx) ) {
			case 1:
				{
				this.state = 678;
				this.match(TomParser.NEWLINE);
				}
				break;
			}
			this.state = 682;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,107,this._ctx) ) {
			case 1:
				{
				this.state = 681;
				this.match(TomParser.SPACE);
				}
				break;
			}
			this.state = 685;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral))) !== 0)) {
				{
				this.state = 684;
				this.objectPairExpressionList();
				}
			}

			this.state = 688;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,109,this._ctx) ) {
			case 1:
				{
				this.state = 687;
				this.match(TomParser.SPACE);
				}
				break;
			}
			this.state = 691;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.NEWLINE) {
				{
				this.state = 690;
				this.match(TomParser.NEWLINE);
				}
			}

			this.state = 694;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 693;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 696;
			this.match(TomParser.BRACE_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public objectPairExpressionList(): ObjectPairExpressionListContext {
		let _localctx: ObjectPairExpressionListContext = new ObjectPairExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, TomParser.RULE_objectPairExpressionList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 698;
			this.objectPair();
			this.state = 715;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,116,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 700;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===TomParser.SPACE) {
						{
						this.state = 699;
						this.match(TomParser.SPACE);
						}
					}

					this.state = 702;
					this.match(TomParser.COMMA);
					this.state = 704;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,113,this._ctx) ) {
					case 1:
						{
						this.state = 703;
						this.match(TomParser.SPACE);
						}
						break;
					}
					this.state = 707;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===TomParser.NEWLINE) {
						{
						this.state = 706;
						this.match(TomParser.NEWLINE);
						}
					}

					this.state = 710;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===TomParser.SPACE) {
						{
						this.state = 709;
						this.match(TomParser.SPACE);
						}
					}

					this.state = 712;
					this.objectPair();
					}
					} 
				}
				this.state = 717;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,116,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public objectPair(): ObjectPairContext {
		let _localctx: ObjectPairContext = new ObjectPairContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, TomParser.RULE_objectPair);
		let _la: number;
		try {
			this.state = 738;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,121,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 718;
				this.literal();
				this.state = 720;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 719;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 722;
				this.match(TomParser.COLON);
				this.state = 724;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 723;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 726;
				this.objectExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 728;
				this.literal();
				this.state = 730;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 729;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 732;
				this.match(TomParser.COLON);
				this.state = 734;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 733;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 736;
				this.literal();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, TomParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 740;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public parenthesizedExpression(): ParenthesizedExpressionContext {
		let _localctx: ParenthesizedExpressionContext = new ParenthesizedExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, TomParser.RULE_parenthesizedExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 742;
			this.match(TomParser.PAREN_OPEN);
			this.state = 744;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 743;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 746;
			this.expression(0);
			this.state = 748;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 747;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 750;
			this.match(TomParser.PAREN_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, TomParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 752;
			this.match(TomParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 10:
			return this.type_sempred(_localctx as TypeContext, predIndex);

		case 18:
			return this.arrayType_sempred(_localctx as ArrayTypeContext, predIndex);

		case 37:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private arrayType_sempred(_localctx: ArrayTypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 6);

		case 3:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03#\u02F5\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04"+
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04"+
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#"+
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+"+
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x03\x02\x03\x02\x03\x02\x05\x02b\n\x02"+
		"\x03\x02\x03\x02\x05\x02f\n\x02\x03\x03\x07\x03i\n\x03\f\x03\x0E\x03l"+
		"\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x07\x05"+
		"u\n\x05\f\x05\x0E\x05x\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x05\x06\x95\n\x06\x03\x06\x03\x06\x05\x06"+
		"\x99\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05"+
		"\x06\xAB\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06"+
		"\x03\x06\x03\x06\x03\x06\x05\x06\xB7\n\x06\x03\x06\x03\x06\x05\x06\xBB"+
		"\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xC3\n\x06"+
		"\x03\x06\x03\x06\x05\x06\xC7\n\x06\x03\x06\x03\x06\x05\x06\xCB\n\x06\x03"+
		"\x06\x03\x06\x05\x06\xCF\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06"+
		"\x03\x06\x05\x06\xD7\n\x06\x03\x06\x03\x06\x05\x06\xDB\n\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05"+
		"\x06\xE7\n\x06\x03\x06\x03\x06\x05\x06\xEB\n\x06\x03\x06\x03\x06\x05\x06"+
		"\xEF\n\x06\x03\x06\x03\x06\x05\x06\xF3\n\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x05\x06\xFB\n\x06\x03\x07\x03\x07\x03\x07\x03\b\x03"+
		"\b\x03\b\x05\b\u0103\n\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x07\n\u010B"+
		"\n\n\f\n\x0E\n\u010E\v\n\x03\n\x03\n\x03\n\x07\n\u0113\n\n\f\n\x0E\n\u0116"+
		"\v\n\x05\n\u0118\n\n\x03\v\x03\v\x05\v\u011C\n\v\x03\f\x03\f\x03\f\x03"+
		"\f\x05\f\u0122\n\f\x03\f\x03\f\x05\f\u0126\n\f\x03\f\x03\f\x05\f\u012A"+
		"\n\f\x03\f\x07\f\u012D\n\f\f\f\x0E\f\u0130\v\f\x03\r\x05\r\u0133\n\r\x03"+
		"\r\x03\r\x05\r\u0137\n\r\x03\r\x03\r\x05\r\u013B\n\r\x03\r\x03\r\x03\x0E"+
		"\x03\x0E\x05\x0E\u0141\n\x0E\x03\x0E\x03\x0E\x05\x0E\u0145\n\x0E\x03\x0E"+
		"\x06\x0E\u0148\n\x0E\r\x0E\x0E\x0E\u0149\x03\x0F\x03\x0F\x03\x0F\x03\x0F"+
		"\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0153\n\x0F\x05\x0F\u0155\n\x0F\x03\x10"+
		"\x03\x10\x05\x10\u0159\n\x10\x03\x10\x03\x10\x05\x10\u015D\n\x10\x03\x10"+
		"\x03\x10\x03\x11\x03\x11\x05\x11\u0163\n\x11\x03\x11\x03\x11\x05\x11\u0167"+
		"\n\x11\x03\x11\x03\x11\x05\x11\u016B\n\x11\x03\x11\x03\x11\x05\x11\u016F"+
		"\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0175\n\x11\x03\x11\x03"+
		"\x11\x05\x11\u0179\n\x11\x03\x11\x03\x11\x05\x11\u017D\n\x11\x03\x12\x03"+
		"\x12\x03\x12\x05\x12\u0182\n\x12\x03\x12\x07\x12\u0185\n\x12\f\x12\x0E"+
		"\x12\u0188\v\x12\x03\x13\x03\x13\x05\x13\u018C\n\x13\x03\x13\x03\x13\x05"+
		"\x13\u0190\n\x13\x03\x13\x05\x13\u0193\n\x13\x03\x14\x03\x14\x03\x14\x05"+
		"\x14\u0198\n\x14\x03\x14\x05\x14\u019B\n\x14\x03\x14\x03\x14\x05\x14\u019F"+
		"\n\x14\x03\x14\x07\x14\u01A2\n\x14\f\x14\x0E\x14\u01A5\v\x14\x03\x14\x05"+
		"\x14\u01A8\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14"+
		"\x03\x14\x03\x14\x05\x14\u01B3\n\x14\x03\x14\x03\x14\x03\x14\x05\x14\u01B8"+
		"\n\x14\x03\x14\x07\x14\u01BB\n\x14\f\x14\x0E\x14\u01BE\v\x14\x03\x15\x03"+
		"\x15\x05\x15\u01C2\n\x15\x03\x15\x05\x15\u01C5\n\x15\x03\x15\x05\x15\u01C8"+
		"\n\x15\x03\x15\x05\x15\u01CB\n\x15\x03\x15\x05\x15\u01CE\n\x15\x03\x15"+
		"\x05\x15\u01D1\n\x15\x03\x15\x05\x15\u01D4\n\x15\x03\x15\x03\x15\x03\x16"+
		"\x03\x16\x05\x16\u01DA\n\x16\x03\x16\x03\x16\x05\x16\u01DE\n\x16\x03\x16"+
		"\x05\x16\u01E1\n\x16\x03\x16\x05\x16\u01E4\n\x16\x03\x16\x07\x16\u01E7"+
		"\n\x16\f\x16\x0E\x16\u01EA\v\x16\x03\x17\x03\x17\x05\x17\u01EE\n\x17\x03"+
		"\x17\x05\x17\u01F1\n\x17\x03\x17\x03\x17\x05\x17\u01F5\n\x17\x03\x17\x03"+
		"\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0200"+
		"\n\x19\x07\x19\u0202\n\x19\f\x19\x0E\x19\u0205\v\x19\x03\x19\x03\x19\x03"+
		"\x19\x03\x19\x05\x19\u020B\n\x19\x07\x19\u020D\n\x19\f\x19\x0E\x19\u0210"+
		"\v\x19\x05\x19\u0212\n\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03"+
		"\x1C\x07\x1C\u021A\n\x1C\f\x1C\x0E\x1C\u021D\v\x1C\x03\x1C\x03\x1C\x07"+
		"\x1C\u0221\n\x1C\f\x1C\x0E\x1C\u0224\v\x1C\x05\x1C\u0226\n\x1C\x03\x1D"+
		"\x05\x1D\u0229\n\x1D\x03\x1D\x06\x1D\u022C\n\x1D\r\x1D\x0E\x1D\u022D\x03"+
		"\x1D\x03\x1D\x03\x1D\x07\x1D\u0233\n\x1D\f\x1D\x0E\x1D\u0236\v\x1D\x03"+
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05"+
		"\x1E\u0241\n\x1E\x03\x1F\x03\x1F\x05\x1F\u0245\n\x1F\x03 \x03 \x03 \x06"+
		" \u024A\n \r \x0E \u024B\x03!\x03!\x03!\x03!\x05!\u0252\n!\x03!\x03!\x03"+
		"\"\x03\"\x03#\x06#\u0259\n#\r#\x0E#\u025A\x03$\x03$\x07$\u025F\n$\f$\x0E"+
		"$\u0262\v$\x03$\x03$\x03%\x03%\x03%\x03%\x07%\u026A\n%\f%\x0E%\u026D\v"+
		"%\x05%\u026F\n%\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0279"+
		"\n\'\x03\'\x03\'\x05\'\u027D\n\'\x03\'\x03\'\x05\'\u0281\n\'\x03\'\x03"+
		"\'\x03\'\x05\'\u0286\n\'\x03\'\x03\'\x05\'\u028A\n\'\x03\'\x07\'\u028D"+
		"\n\'\f\'\x0E\'\u0290\v\'\x03(\x03(\x03(\x03)\x03)\x05)\u0297\n)\x03)\x03"+
		")\x05)\u029B\n)\x03)\x07)\u029E\n)\f)\x0E)\u02A1\v)\x03)\x03)\x03*\x03"+
		"*\x05*\u02A7\n*\x03*\x05*\u02AA\n*\x03*\x05*\u02AD\n*\x03*\x05*\u02B0"+
		"\n*\x03*\x05*\u02B3\n*\x03*\x05*\u02B6\n*\x03*\x05*\u02B9\n*\x03*\x03"+
		"*\x03+\x03+\x05+\u02BF\n+\x03+\x03+\x05+\u02C3\n+\x03+\x05+\u02C6\n+\x03"+
		"+\x05+\u02C9\n+\x03+\x07+\u02CC\n+\f+\x0E+\u02CF\v+\x03,\x03,\x05,\u02D3"+
		"\n,\x03,\x03,\x05,\u02D7\n,\x03,\x03,\x03,\x03,\x05,\u02DD\n,\x03,\x03"+
		",\x05,\u02E1\n,\x03,\x03,\x05,\u02E5\n,\x03-\x03-\x03.\x03.\x05.\u02EB"+
		"\n.\x03.\x03.\x05.\u02EF\n.\x03.\x03.\x03/\x03/\x03/\x02\x02\x05\x16&"+
		"L0\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14"+
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02"+
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02"+
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02\x02\b\x03"+
		"\x02\n\v\x03\x02\x17\x18\x05\x02\t\f\x11\x11\x13\x13\x03\x02\x10\x11\x03"+
		"\x02\x0E\x0F\x03\x02\x03\b\u035F\x02e\x03\x02\x02\x02\x04j\x03\x02\x02"+
		"\x02\x06o\x03\x02\x02\x02\bq\x03\x02\x02\x02\n\xFA\x03\x02\x02\x02\f\xFC"+
		"\x03\x02\x02\x02\x0E\u0102\x03\x02\x02\x02\x10\u0104\x03\x02\x02\x02\x12"+
		"\u0117\x03\x02\x02\x02\x14\u011B\x03\x02\x02\x02\x16\u0121\x03\x02\x02"+
		"\x02\x18\u0132\x03\x02\x02\x02\x1A\u013E\x03\x02\x02\x02\x1C\u0154\x03"+
		"\x02\x02\x02\x1E\u0156\x03\x02\x02\x02 \u017C\x03\x02\x02\x02\"\u017E"+
		"\x03\x02\x02\x02$\u0189\x03\x02\x02\x02&\u01B2\x03\x02\x02\x02(\u01BF"+
		"\x03\x02\x02\x02*\u01D7\x03\x02\x02\x02,\u01EB\x03\x02\x02\x02.\u01F8"+
		"\x03\x02\x02\x020\u0211\x03\x02\x02\x022\u0213\x03\x02\x02\x024\u0215"+
		"\x03\x02\x02\x026\u0225\x03\x02\x02\x028\u0228\x03\x02\x02\x02:\u0240"+
		"\x03\x02\x02\x02<\u0244\x03\x02\x02\x02>\u0249\x03\x02\x02\x02@\u024D"+
		"\x03\x02\x02\x02B\u0255\x03\x02\x02\x02D\u0258\x03\x02\x02\x02F\u025C"+
		"\x03\x02\x02\x02H\u026E\x03\x02\x02\x02J\u0270\x03\x02\x02\x02L\u0278"+
		"\x03\x02\x02\x02N\u0291\x03\x02\x02\x02P\u0294\x03\x02\x02\x02R\u02A4"+
		"\x03\x02\x02\x02T\u02BC\x03\x02\x02\x02V\u02E4\x03\x02\x02\x02X\u02E6"+
		"\x03\x02\x02\x02Z\u02E8\x03\x02\x02\x02\\\u02F2\x03\x02\x02\x02^f\x07"+
		"\x02\x02\x03_a\x05\x04\x03\x02`b\x07\n\x02\x02a`\x03\x02\x02\x02ab\x03"+
		"\x02\x02\x02bc\x03\x02\x02\x02cd\x07\x02\x02\x03df\x03\x02\x02\x02e^\x03"+
		"\x02\x02\x02e_\x03\x02\x02\x02f\x03\x03\x02\x02\x02gi\x05\x06\x04\x02"+
		"hg\x03\x02\x02\x02il\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02"+
		"km\x03\x02\x02\x02lj\x03\x02\x02\x02mn\x05\b\x05\x02n\x05\x03\x02\x02"+
		"\x02op\t\x02\x02\x02p\x07\x03\x02\x02\x02qv\x05\n\x06\x02rs\x07\n\x02"+
		"\x02su\x05\n\x06\x02tr\x03\x02\x02\x02ux\x03\x02\x02\x02vt\x03\x02\x02"+
		"\x02vw\x03\x02\x02\x02w\t\x03\x02\x02\x02xv\x03\x02\x02\x02y\xFB\x05\f"+
		"\x07\x02z{\x05\f\x07\x02{|\x07\v\x02\x02|}\x05\x16\f\x02}\xFB\x03\x02"+
		"\x02\x02~\x7F\x05\f\x07\x02\x7F\x80\x07\v\x02\x02\x80\x81\x05\x16\f\x02"+
		"\x81\x82\x07\v\x02\x02\x82\x83\x07\x0F\x02\x02\x83\x84\x07\v\x02\x02\x84"+
		"\x85\x054\x1B\x02\x85\xFB\x03\x02\x02\x02\x86\x87\x05\f\x07\x02\x87\x88"+
		"\x07\v\x02\x02\x88\x89\x07\x0F\x02\x02\x89\x8A\x07\v\x02\x02\x8A\x8B\x05"+
		"4\x1B\x02\x8B\xFB\x03\x02\x02\x02\x8C\x8D\x05\f\x07\x02\x8D\x8E\x07\v"+
		"\x02\x02\x8E\x8F\x05\x0E\b\x02\x8F\xFB\x03\x02\x02\x02\x90\x91\x05\f\x07"+
		"\x02\x91\x92\x07\v\x02\x02\x92\x94\x05\x0E\b\x02\x93\x95\x07\v\x02\x02"+
		"\x94\x93\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02"+
		"\x96\x98\x07\x15\x02\x02\x97\x99\x07\v\x02\x02\x98\x97\x03\x02\x02\x02"+
		"\x98\x99\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9B\x052\x1A\x02"+
		"\x9B\xFB\x03\x02\x02\x02\x9C\x9D\x05\f\x07\x02\x9D\x9E\x07\v\x02\x02\x9E"+
		"\x9F\x05\x0E\b\x02\x9F\xA0\x07\v\x02\x02\xA0\xA1\x07\x0F\x02\x02\xA1\xA2"+
		"\x07\v\x02\x02\xA2\xA3\x054\x1B\x02\xA3\xFB\x03\x02\x02\x02\xA4\xA5\x05"+
		"\f\x07\x02\xA5\xA6\x07\v\x02\x02\xA6\xA7\x05\x0E\b\x02\xA7\xA8\x07\v\x02"+
		"\x02\xA8\xAA\x07\x15\x02\x02\xA9\xAB\x07\v\x02\x02\xAA\xA9\x03\x02\x02"+
		"\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAD\x052\x1A"+
		"\x02\xAD\xAE\x07\v\x02\x02\xAE\xAF\x07\x0F\x02\x02\xAF\xB0\x07\v\x02\x02"+
		"\xB0\xB1\x054\x1B\x02\xB1\xFB\x03\x02\x02\x02\xB2\xB3\x05\f\x07\x02\xB3"+
		"\xB4\x07\v\x02\x02\xB4\xB6\x05\x0E\b\x02\xB5\xB7\x07\v\x02\x02\xB6\xB5"+
		"\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xBA"+
		"\x07\x12\x02\x02\xB9\xBB\x07\v\x02\x02\xBA\xB9\x03\x02\x02\x02\xBA\xBB"+
		"\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x05\x16\f\x02\xBD\xFB"+
		"\x03\x02\x02\x02\xBE\xBF\x05\f\x07\x02\xBF\xC0\x07\v\x02\x02\xC0\xC2\x05"+
		"\x0E\b\x02\xC1\xC3\x07\v\x02\x02\xC2\xC1\x03\x02\x02\x02\xC2\xC3\x03\x02"+
		"\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC6\x07\x12\x02\x02\xC5\xC7\x07\v"+
		"\x02\x02\xC6\xC5\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC8\x03\x02"+
		"\x02\x02\xC8\xCA\x05\x16\f\x02\xC9\xCB\x07\v\x02\x02\xCA\xC9\x03\x02\x02"+
		"\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCE\x07\x15\x02"+
		"\x02\xCD\xCF\x07\v\x02\x02\xCE\xCD\x03\x02\x02\x02\xCE\xCF\x03\x02\x02"+
		"\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x052\x1A\x02\xD1\xFB\x03\x02\x02"+
		"\x02\xD2\xD3\x05\f\x07\x02\xD3\xD4\x07\v\x02\x02\xD4\xD6\x05\x0E\b\x02"+
		"\xD5\xD7\x07\v\x02\x02\xD6\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02"+
		"\xD7\xD8\x03\x02\x02\x02\xD8\xDA\x07\x12\x02\x02\xD9\xDB\x07\v\x02\x02"+
		"\xDA\xD9\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02"+
		"\xDC\xDD\x05\x16\f\x02\xDD\xDE\x07\v\x02\x02\xDE\xDF\x07\x0F\x02\x02\xDF"+
		"\xE0\x07\v\x02\x02\xE0\xE1\x054\x1B\x02\xE1\xFB\x03\x02\x02\x02\xE2\xE3"+
		"\x05\f\x07\x02\xE3\xE4\x07\v\x02\x02\xE4\xE6\x05\x0E\b\x02\xE5\xE7\x07"+
		"\v\x02\x02\xE6\xE5\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x03"+
		"\x02\x02\x02\xE8\xEA\x07\x12\x02\x02\xE9\xEB\x07\v\x02\x02\xEA\xE9\x03"+
		"\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEE\x05"+
		"\x16\f\x02\xED\xEF\x07\v\x02\x02\xEE\xED\x03\x02\x02\x02\xEE\xEF\x03\x02"+
		"\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF2\x07\x15\x02\x02\xF1\xF3\x07\v"+
		"\x02\x02\xF2\xF1\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF4\x03\x02"+
		"\x02\x02\xF4\xF5\x052\x1A\x02\xF5\xF6\x07\v\x02\x02\xF6\xF7\x07\x0F\x02"+
		"\x02\xF7\xF8\x07\v\x02\x02\xF8\xF9\x054\x1B\x02\xF9\xFB\x03\x02\x02\x02"+
		"\xFAy\x03\x02\x02\x02\xFAz\x03\x02\x02\x02\xFA~\x03\x02\x02\x02\xFA\x86"+
		"\x03\x02\x02\x02\xFA\x8C\x03\x02\x02\x02\xFA\x90\x03\x02\x02\x02\xFA\x9C"+
		"\x03\x02\x02\x02\xFA\xA4\x03\x02\x02\x02\xFA\xB2\x03\x02\x02\x02\xFA\xBE"+
		"\x03\x02\x02\x02\xFA\xD2\x03\x02\x02\x02\xFA\xE2\x03\x02\x02\x02\xFB\v"+
		"\x03\x02\x02\x02\xFC\xFD\x07\r\x02\x02\xFD\xFE\x05\\/\x02\xFE\r\x03\x02"+
		"\x02\x02\xFF\u0103\x05\x12\n\x02\u0100\u0103\x05\x10\t\x02\u0101\u0103"+
		"\x05\\/\x02\u0102\xFF\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0102"+
		"\u0101\x03\x02\x02\x02\u0103\x0F\x03\x02\x02\x02\u0104\u0105\x05\\/\x02"+
		"\u0105\u0106\x07\x16\x02\x02\u0106\x11\x03\x02\x02\x02\u0107\u010C\x05"+
		"\x10\t\x02\u0108\u0109\x07\x13\x02\x02\u0109\u010B\x05\x14\v\x02\u010A"+
		"\u0108\x03\x02\x02\x02\u010B\u010E\x03\x02\x02\x02\u010C\u010A\x03\x02"+
		"\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u0118\x03\x02\x02\x02\u010E"+
		"\u010C\x03\x02\x02\x02\u010F\u0114\x05\\/\x02\u0110\u0111\x07\x13\x02"+
		"\x02\u0111\u0113\x05\x14\v\x02\u0112\u0110\x03\x02\x02\x02\u0113\u0116"+
		"\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02"+
		"\u0115\u0118\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0117\u0107\x03"+
		"\x02\x02\x02\u0117\u010F\x03\x02\x02\x02\u0118\x13\x03\x02\x02\x02\u0119"+
		"\u011C\x05\x10\t\x02\u011A\u011C\x05\\/\x02\u011B\u0119\x03\x02\x02\x02"+
		"\u011B\u011A\x03\x02\x02\x02\u011C\x15\x03\x02\x02\x02\u011D\u011E\b\f"+
		"\x01\x02\u011E\u0122\x05 \x11\x02\u011F\u0122\x05\x18\r\x02\u0120\u0122"+
		"\x05\x1C\x0F\x02\u0121\u011D\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02"+
		"\u0121\u0120\x03\x02\x02\x02\u0122\u012E\x03\x02\x02\x02\u0123\u0125\f"+
		"\x06\x02\x02\u0124\u0126\x07\v\x02\x02\u0125\u0124\x03\x02\x02\x02\u0125"+
		"\u0126\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127\u0129\t\x03\x02"+
		"\x02\u0128\u012A\x07\v\x02\x02\u0129\u0128\x03\x02\x02\x02\u0129\u012A"+
		"\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u012D\x05\x16\f\x07"+
		"\u012C\u0123\x03\x02\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E\u012C\x03"+
		"\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\x17\x03\x02\x02\x02\u0130"+
		"\u012E\x03\x02\x02\x02\u0131\u0133\x05\\/\x02\u0132\u0131\x03\x02\x02"+
		"\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0136"+
		"\x07\"\x02\x02\u0135\u0137\x07\v\x02\x02\u0136\u0135\x03\x02\x02\x02\u0136"+
		"\u0137\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u013A\x05\x1A"+
		"\x0E\x02\u0139\u013B\x07\v\x02\x02\u013A\u0139\x03\x02\x02\x02\u013A\u013B"+
		"\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013D\x07#\x02\x02"+
		"\u013D\x19\x03\x02\x02\x02\u013E\u0140\x05\x16\f\x02\u013F\u0141\x07\v"+
		"\x02\x02\u0140\u013F\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141"+
		"\u0147\x03\x02\x02\x02\u0142\u0144\x07\x14\x02\x02\u0143\u0145\x07\v\x02"+
		"\x02\u0144\u0143\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0146"+
		"\x03\x02\x02\x02\u0146\u0148\x05\x16\f\x02\u0147\u0142\x03\x02\x02\x02"+
		"\u0148\u0149\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149\u014A\x03"+
		"\x02\x02\x02\u014A\x1B\x03\x02\x02\x02\u014B\u0155\x05\x1E\x10\x02\u014C"+
		"\u0155\x05(\x15\x02\u014D\u0155\x05&\x14\x02\u014E\u0155\x050\x19\x02"+
		"\u014F\u0155\x05.\x18\x02\u0150\u0152\x05\\/\x02\u0151\u0153\x07\x16\x02"+
		"\x02\u0152\u0151\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0155"+
		"\x03\x02\x02\x02\u0154\u014B\x03\x02\x02\x02\u0154\u014C\x03\x02\x02\x02"+
		"\u0154\u014D\x03\x02\x02\x02\u0154\u014E\x03\x02\x02\x02\u0154\u014F\x03"+
		"\x02\x02\x02\u0154\u0150\x03\x02\x02\x02\u0155\x1D\x03\x02\x02\x02\u0156"+
		"\u0158\x07\x1E\x02\x02\u0157\u0159\x07\v\x02\x02\u0158\u0157\x03\x02\x02"+
		"\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015C"+
		"\x05\x16\f\x02\u015B\u015D\x07\v\x02\x02\u015C\u015B\x03\x02\x02\x02\u015C"+
		"\u015D\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u015F\x07\x1F"+
		"\x02\x02\u015F\x1F\x03\x02\x02\x02\u0160\u0162\x07\x1E\x02\x02\u0161\u0163"+
		"\x07\v\x02\x02\u0162\u0161\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02"+
		"\u0163\u0164\x03\x02\x02\x02\u0164\u0166\x05\"\x12\x02\u0165\u0167\x07"+
		"\v\x02\x02\u0166\u0165\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167"+
		"\u0168\x03\x02\x02\x02\u0168\u016A\x07\x1F\x02\x02\u0169\u016B\x07\v\x02"+
		"\x02\u016A\u0169\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016C"+
		"\x03\x02\x02\x02\u016C\u016E\x07\x19\x02\x02\u016D\u016F\x07\v\x02\x02"+
		"\u016E\u016D\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0170\x03"+
		"\x02\x02\x02\u0170\u0171\x05\x16\f\x02\u0171\u017D\x03\x02\x02\x02\u0172"+
		"\u0174\x05$\x13\x02\u0173\u0175\x07\v\x02\x02\u0174\u0173\x03\x02\x02"+
		"\x02\u0174\u0175\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176\u0178"+
		"\x07\x19\x02\x02\u0177\u0179\x07\v\x02\x02\u0178\u0177\x03\x02\x02\x02"+
		"\u0178\u0179\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017B\x05"+
		"\x16\f\x02\u017B\u017D\x03\x02\x02\x02\u017C\u0160\x03\x02\x02\x02\u017C"+
		"\u0172\x03\x02\x02\x02\u017D!\x03\x02\x02\x02\u017E\u0186\x05$\x13\x02"+
		"\u017F\u0181\x07\x14\x02\x02\u0180\u0182\x07\v\x02\x02\u0181\u0180\x03"+
		"\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183"+
		"\u0185\x05$\x13\x02\u0184\u017F\x03\x02\x02\x02\u0185\u0188\x03\x02\x02"+
		"\x02\u0186\u0184\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187#\x03"+
		"\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0189\u0192\x05\\/\x02\u018A"+
		"\u018C\x07\v\x02\x02\u018B\u018A\x03\x02\x02\x02\u018B\u018C\x03\x02\x02"+
		"\x02\u018C\u018D\x03\x02\x02\x02\u018D\u018F\x07\x12\x02\x02\u018E\u0190"+
		"\x07\v\x02\x02\u018F\u018E\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02"+
		"\u0190\u0191\x03\x02\x02\x02\u0191\u0193\x05\x16\f\x02\u0192\u018B\x03"+
		"\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193%\x03\x02\x02\x02\u0194"+
		"\u0195\b\x14\x01\x02\u0195\u0197\x07 \x02\x02\u0196\u0198\x07\v\x02\x02"+
		"\u0197\u0196\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u019A\x03"+
		"\x02\x02\x02\u0199\u019B\x05\x16\f\x02\u019A\u0199\x03\x02\x02\x02\u019A"+
		"\u019B\x03\x02\x02\x02\u019B\u01A3\x03\x02\x02\x02\u019C\u019E\x07\x14"+
		"\x02\x02\u019D\u019F\x07\v\x02\x02\u019E\u019D\x03\x02\x02\x02\u019E\u019F"+
		"\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A2\x05\x16\f\x02"+
		"\u01A1\u019C\x03\x02\x02\x02\u01A2\u01A5\x03\x02\x02\x02\u01A3\u01A1\x03"+
		"\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01A7\x03\x02\x02\x02\u01A5"+
		"\u01A3\x03\x02\x02\x02\u01A6\u01A8\x07\v\x02\x02\u01A7\u01A6\x03\x02\x02"+
		"\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01B3"+
		"\x07!\x02\x02\u01AA\u01AB\x05\\/\x02\u01AB\u01AC\x07 \x02\x02\u01AC\u01AD"+
		"\x07!\x02\x02\u01AD\u01B3\x03\x02\x02\x02\u01AE\u01AF\x05(\x15\x02\u01AF"+
		"\u01B0\x07 \x02\x02\u01B0\u01B1\x07!\x02\x02\u01B1\u01B3\x03\x02\x02\x02"+
		"\u01B2\u0194\x03\x02\x02\x02\u01B2\u01AA\x03\x02\x02\x02\u01B2\u01AE\x03"+
		"\x02\x02\x02\u01B3\u01BC\x03\x02\x02\x02\u01B4\u01B5\f\x03\x02\x02\u01B5"+
		"\u01B7\x07 \x02\x02\u01B6\u01B8\x05\x16\f\x02\u01B7\u01B6\x03\x02\x02"+
		"\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01BB"+
		"\x07!\x02\x02\u01BA\u01B4\x03\x02\x02\x02\u01BB\u01BE\x03\x02\x02\x02"+
		"\u01BC\u01BA\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\'\x03\x02"+
		"\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BF\u01C1\x07\x1C\x02\x02\u01C0"+
		"\u01C2\x07\v\x02\x02\u01C1\u01C0\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02"+
		"\x02\u01C2\u01C4\x03\x02\x02\x02\u01C3\u01C5\x07\n\x02\x02\u01C4\u01C3"+
		"\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C7\x03\x02\x02\x02"+
		"\u01C6\u01C8\x07\v\x02\x02\u01C7\u01C6\x03\x02\x02\x02\u01C7\u01C8\x03"+
		"\x02\x02\x02\u01C8\u01CA\x03\x02\x02\x02\u01C9\u01CB\x05*\x16\x02\u01CA"+
		"\u01C9\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01CD\x03\x02"+
		"\x02\x02\u01CC\u01CE\x07\v\x02\x02\u01CD\u01CC\x03\x02\x02\x02\u01CD\u01CE"+
		"\x03\x02\x02\x02\u01CE\u01D0\x03\x02\x02\x02\u01CF\u01D1\x07\n\x02\x02"+
		"\u01D0\u01CF\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D3\x03"+
		"\x02\x02\x02\u01D2\u01D4\x07\v\x02\x02\u01D3\u01D2\x03\x02\x02\x02\u01D3"+
		"\u01D4\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D6\x07\x1D"+
		"\x02\x02\u01D6)\x03\x02\x02\x02\u01D7\u01D9\x05,\x17\x02\u01D8\u01DA\x07"+
		"\v\x02\x02\u01D9\u01D8\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA"+
		"\u01E8\x03\x02\x02\x02\u01DB\u01DD\x07\x14\x02\x02\u01DC\u01DE\x07\v\x02"+
		"\x02\u01DD\u01DC\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01E0"+
		"\x03\x02\x02\x02\u01DF\u01E1\x07\n\x02\x02\u01E0\u01DF\x03\x02\x02\x02"+
		"\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E3\x03\x02\x02\x02\u01E2\u01E4\x07"+
		"\v\x02\x02\u01E3\u01E2\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4"+
		"\u01E5\x03\x02\x02\x02\u01E5\u01E7\x05,\x17\x02\u01E6\u01DB\x03\x02\x02"+
		"\x02\u01E7\u01EA\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E9"+
		"\x03\x02\x02\x02\u01E9+\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EB"+
		"\u01ED\x05\x16\f\x02\u01EC\u01EE\x07\x16\x02\x02\u01ED\u01EC\x03\x02\x02"+
		"\x02";
	private static readonly _serializedATNSegment1: string =
		"\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01F0\x03\x02\x02\x02\u01EF\u01F1\x07"+
		"\v\x02\x02\u01F0\u01EF\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1"+
		"\u01F2\x03\x02\x02\x02\u01F2\u01F4\x07\x12\x02\x02\u01F3\u01F5\x07\v\x02"+
		"\x02\u01F4\u01F3\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F6"+
		"\x03\x02\x02\x02\u01F6\u01F7\x05\x16\f\x02\u01F7-\x03\x02\x02\x02\u01F8"+
		"\u01F9\x05\\/\x02\u01F9\u01FA\x07\x16\x02\x02\u01FA/\x03\x02\x02\x02\u01FB"+
		"\u0203\x05\\/\x02\u01FC\u01FF\x07\x13\x02\x02\u01FD\u0200\x05\\/\x02\u01FE"+
		"\u0200\x05.\x18\x02\u01FF\u01FD\x03\x02\x02\x02\u01FF\u01FE\x03\x02\x02"+
		"\x02\u0200\u0202\x03\x02\x02\x02\u0201\u01FC\x03\x02\x02\x02\u0202\u0205"+
		"\x03\x02\x02\x02\u0203\u0201\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02"+
		"\u0204\u0212\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0206\u020E\x05"+
		".\x18\x02\u0207\u020A\x07\x13\x02\x02\u0208\u020B\x05\x10\t\x02\u0209"+
		"\u020B\x05\\/\x02\u020A\u0208\x03\x02\x02\x02\u020A\u0209\x03\x02\x02"+
		"\x02\u020B\u020D\x03\x02\x02\x02\u020C\u0207\x03\x02\x02\x02\u020D\u0210"+
		"\x03\x02\x02\x02\u020E\u020C\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02"+
		"\u020F\u0212\x03\x02\x02\x02\u0210\u020E\x03\x02\x02\x02\u0211\u01FB\x03"+
		"\x02\x02\x02\u0211\u0206\x03\x02\x02\x02\u02121\x03\x02\x02\x02\u0213"+
		"\u0214\x05L\'\x02\u02143\x03\x02\x02\x02\u0215\u0216\x056\x1C\x02\u0216"+
		"5\x03\x02\x02\x02\u0217\u021B\x058\x1D\x02\u0218\u021A\x05<\x1F\x02\u0219"+
		"\u0218\x03\x02\x02\x02\u021A\u021D\x03\x02\x02\x02\u021B\u0219\x03\x02"+
		"\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C\u0226\x03\x02\x02\x02\u021D"+
		"\u021B\x03\x02\x02\x02\u021E\u0222\x05@!\x02\u021F\u0221\x05<\x1F\x02"+
		"\u0220\u021F\x03\x02\x02\x02\u0221\u0224\x03\x02\x02\x02\u0222\u0220\x03"+
		"\x02\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223\u0226\x03\x02\x02\x02\u0224"+
		"\u0222\x03\x02\x02\x02\u0225\u0217\x03\x02\x02\x02\u0225\u021E\x03\x02"+
		"\x02\x02\u02267\x03\x02\x02\x02\u0227\u0229\x07\v\x02\x02\u0228\u0227"+
		"\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229\u022B\x03\x02\x02\x02"+
		"\u022A\u022C\x05:\x1E\x02\u022B\u022A\x03\x02\x02\x02\u022C\u022D\x03"+
		"\x02\x02\x02\u022D\u022B\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E"+
		"\u0234\x03\x02\x02\x02\u022F\u0233\x05:\x1E\x02\u0230\u0233\x07\v\x02"+
		"\x02\u0231\u0233\x07\r\x02\x02\u0232\u022F\x03\x02\x02\x02\u0232\u0230"+
		"\x03\x02\x02\x02\u0232\u0231\x03\x02\x02\x02\u0233\u0236\x03\x02\x02\x02"+
		"\u0234\u0232\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02\u02359\x03\x02"+
		"\x02\x02\u0236\u0234\x03\x02\x02\x02\u0237\u0241\x07\f\x02\x02\u0238\u0241"+
		"\x07\t\x02\x02\u0239\u0241\x07\x11\x02\x02\u023A\u0241\x07\x1C\x02\x02"+
		"\u023B\u0241\x07\x1D\x02\x02\u023C\u0241\x07\x12\x02\x02\u023D\u0241\x07"+
		"\x0F\x02\x02\u023E\u0241\x07\x13\x02\x02\u023F\u0241\x05X-\x02\u0240\u0237"+
		"\x03\x02\x02\x02\u0240\u0238\x03\x02\x02\x02\u0240\u0239\x03\x02\x02\x02"+
		"\u0240\u023A\x03\x02\x02\x02\u0240\u023B\x03\x02\x02\x02\u0240\u023C\x03"+
		"\x02\x02\x02\u0240\u023D\x03\x02\x02\x02\u0240\u023E\x03\x02\x02\x02\u0240"+
		"\u023F\x03\x02\x02\x02\u0241;\x03\x02\x02\x02\u0242\u0245\x05@!\x02\u0243"+
		"\u0245\x05> \x02\u0244\u0242\x03\x02\x02\x02\u0244\u0243\x03\x02\x02\x02"+
		"\u0245=\x03\x02\x02\x02\u0246\u024A\x05:\x1E\x02\u0247\u024A\x07\v\x02"+
		"\x02\u0248\u024A\x07\r\x02\x02\u0249\u0246\x03\x02\x02\x02\u0249\u0247"+
		"\x03\x02\x02\x02\u0249\u0248\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02"+
		"\u024B\u0249\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C?\x03\x02"+
		"\x02\x02\u024D\u024E\x07\x1B\x02\x02\u024E\u024F\x05B\"\x02\u024F\u0251"+
		"\x07\v\x02\x02\u0250\u0252\x05D#\x02\u0251\u0250\x03\x02\x02\x02\u0251"+
		"\u0252\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0254\x07\x1D"+
		"\x02\x02\u0254A\x03\x02\x02\x02\u0255\u0256\x05\\/\x02\u0256C\x03\x02"+
		"\x02\x02\u0257\u0259\x05H%\x02\u0258\u0257\x03\x02\x02\x02\u0259\u025A"+
		"\x03\x02\x02\x02\u025A\u0258\x03\x02\x02\x02\u025A\u025B\x03\x02\x02\x02"+
		"\u025BE\x03\x02\x02\x02\u025C\u0260\x07\x1C\x02\x02\u025D\u025F\x05H%"+
		"\x02\u025E\u025D\x03\x02\x02\x02\u025F\u0262\x03\x02\x02\x02\u0260\u025E"+
		"\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261\u0263\x03\x02\x02\x02"+
		"\u0262\u0260\x03\x02\x02\x02\u0263\u0264\x07\x1D\x02\x02\u0264G\x03\x02"+
		"\x02\x02\u0265\u026F\x05F$\x02\u0266\u026B\x05J&\x02\u0267\u0268\x07\n"+
		"\x02\x02\u0268\u026A\x05J&\x02\u0269\u0267\x03\x02\x02\x02\u026A\u026D"+
		"\x03\x02\x02\x02\u026B\u0269\x03\x02\x02\x02\u026B\u026C\x03\x02\x02\x02"+
		"\u026C\u026F\x03\x02\x02\x02\u026D\u026B\x03\x02\x02\x02\u026E\u0265\x03"+
		"\x02\x02\x02\u026E\u0266\x03\x02\x02\x02\u026FI\x03\x02\x02\x02\u0270"+
		"\u0271\t\x04\x02\x02\u0271K\x03\x02\x02\x02\u0272\u0273\b\'\x01\x02\u0273"+
		"\u0279\x05N(\x02\u0274\u0279\x05P)\x02\u0275\u0279\x05R*\x02\u0276\u0279"+
		"\x05X-\x02\u0277\u0279\x05Z.\x02\u0278\u0272\x03\x02\x02\x02\u0278\u0274"+
		"\x03\x02\x02\x02\u0278\u0275\x03\x02\x02\x02\u0278\u0276\x03\x02\x02\x02"+
		"\u0278\u0277\x03\x02\x02\x02\u0279\u028E\x03\x02\x02\x02\u027A\u027C\f"+
		"\b\x02\x02\u027B\u027D\x07\v\x02\x02\u027C\u027B\x03\x02\x02\x02\u027C"+
		"\u027D\x03\x02\x02\x02\u027D\u027E\x03\x02\x02\x02\u027E\u0280\t\x05\x02"+
		"\x02\u027F\u0281\x07\v\x02\x02\u0280\u027F\x03\x02\x02\x02\u0280\u0281"+
		"\x03\x02\x02\x02\u0281\u0282\x03\x02\x02\x02\u0282\u028D\x05L\'\t\u0283"+
		"\u0285\f\x07\x02\x02\u0284\u0286\x07\v\x02\x02\u0285\u0284\x03\x02\x02"+
		"\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02\u0287\u0289"+
		"\t\x06\x02\x02\u0288\u028A\x07\v\x02\x02\u0289\u0288\x03\x02\x02\x02\u0289"+
		"\u028A\x03\x02\x02\x02\u028A\u028B\x03\x02\x02\x02\u028B\u028D\x05L\'"+
		"\b\u028C\u027A\x03\x02\x02\x02\u028C\u0283\x03\x02\x02\x02\u028D\u0290"+
		"\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028E\u028F\x03\x02\x02\x02"+
		"\u028FM\x03\x02\x02\x02\u0290\u028E\x03\x02\x02\x02\u0291\u0292\t\x06"+
		"\x02\x02\u0292\u0293\x05L\'\x02\u0293O\x03\x02\x02\x02\u0294\u0296\x07"+
		" \x02\x02\u0295\u0297\x05L\'\x02\u0296\u0295\x03\x02\x02\x02\u0296\u0297"+
		"\x03\x02\x02\x02\u0297\u029F\x03\x02\x02\x02\u0298\u029A\x07\x14\x02\x02"+
		"\u0299\u029B\x07\v\x02\x02\u029A\u0299\x03\x02\x02\x02\u029A\u029B\x03"+
		"\x02\x02\x02\u029B\u029C\x03\x02\x02\x02\u029C\u029E\x05L\'\x02\u029D"+
		"\u0298\x03\x02\x02\x02\u029E\u02A1\x03\x02\x02\x02\u029F\u029D\x03\x02"+
		"\x02\x02\u029F\u02A0\x03\x02\x02\x02\u02A0\u02A2\x03\x02\x02\x02\u02A1"+
		"\u029F\x03\x02\x02\x02\u02A2\u02A3\x07!\x02\x02\u02A3Q\x03\x02\x02\x02"+
		"\u02A4\u02A6\x07\x1C\x02\x02\u02A5\u02A7\x07\v\x02\x02\u02A6\u02A5\x03"+
		"\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02A9\x03\x02\x02\x02\u02A8"+
		"\u02AA\x07\n\x02\x02\u02A9\u02A8\x03\x02\x02\x02\u02A9\u02AA\x03\x02\x02"+
		"\x02\u02AA\u02AC\x03\x02\x02\x02\u02AB\u02AD\x07\v\x02\x02\u02AC\u02AB"+
		"\x03\x02\x02\x02\u02AC\u02AD\x03\x02\x02\x02\u02AD\u02AF\x03\x02\x02\x02"+
		"\u02AE\u02B0\x05T+\x02\u02AF\u02AE\x03\x02\x02\x02\u02AF\u02B0\x03\x02"+
		"\x02\x02\u02B0\u02B2\x03\x02\x02\x02\u02B1\u02B3\x07\v\x02\x02\u02B2\u02B1"+
		"\x03\x02\x02\x02\u02B2\u02B3\x03\x02\x02\x02\u02B3\u02B5\x03\x02\x02\x02"+
		"\u02B4\u02B6\x07\n\x02\x02\u02B5\u02B4\x03\x02\x02\x02\u02B5\u02B6\x03"+
		"\x02\x02\x02\u02B6\u02B8\x03\x02\x02\x02\u02B7\u02B9\x07\v\x02\x02\u02B8"+
		"\u02B7\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BA\x03\x02"+
		"\x02\x02\u02BA\u02BB\x07\x1D\x02\x02\u02BBS\x03\x02\x02\x02\u02BC\u02CD"+
		"\x05V,\x02\u02BD\u02BF\x07\v\x02\x02\u02BE\u02BD\x03\x02\x02\x02\u02BE"+
		"\u02BF\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0\u02C2\x07\x14"+
		"\x02\x02\u02C1\u02C3\x07\v\x02\x02\u02C2\u02C1\x03\x02\x02\x02\u02C2\u02C3"+
		"\x03\x02\x02\x02\u02C3\u02C5\x03\x02\x02\x02\u02C4\u02C6\x07\n\x02\x02"+
		"\u02C5\u02C4\x03\x02\x02\x02\u02C5\u02C6\x03\x02\x02\x02\u02C6\u02C8\x03"+
		"\x02\x02\x02\u02C7\u02C9\x07\v\x02\x02\u02C8\u02C7\x03\x02\x02\x02\u02C8"+
		"\u02C9\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02\u02CA\u02CC\x05V,\x02"+
		"\u02CB\u02BE\x03\x02\x02\x02\u02CC\u02CF\x03\x02\x02\x02\u02CD\u02CB\x03"+
		"\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CEU\x03\x02\x02\x02\u02CF"+
		"\u02CD\x03\x02\x02\x02\u02D0\u02D2\x05X-\x02\u02D1\u02D3\x07\v\x02\x02"+
		"\u02D2\u02D1\x03\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3\u02D4\x03"+
		"\x02\x02\x02\u02D4\u02D6\x07\x12\x02\x02\u02D5\u02D7\x07\v\x02\x02\u02D6"+
		"\u02D5\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02D8\x03\x02"+
		"\x02\x02\u02D8\u02D9\x05R*\x02\u02D9\u02E5\x03\x02\x02\x02\u02DA\u02DC"+
		"\x05X-\x02\u02DB\u02DD\x07\v\x02\x02\u02DC\u02DB\x03\x02\x02\x02\u02DC"+
		"\u02DD\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE\u02E0\x07\x12"+
		"\x02\x02\u02DF\u02E1\x07\v\x02\x02\u02E0\u02DF\x03\x02\x02\x02\u02E0\u02E1"+
		"\x03\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2\u02E3\x05X-\x02\u02E3"+
		"\u02E5\x03\x02\x02\x02\u02E4\u02D0\x03\x02\x02\x02\u02E4\u02DA\x03\x02"+
		"\x02\x02\u02E5W\x03\x02\x02\x02\u02E6\u02E7\t\x07\x02\x02\u02E7Y\x03\x02"+
		"\x02\x02\u02E8\u02EA\x07\x1E\x02\x02\u02E9\u02EB\x07\v\x02\x02\u02EA\u02E9"+
		"\x03\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB\u02EC\x03\x02\x02\x02"+
		"\u02EC\u02EE\x05L\'\x02\u02ED\u02EF\x07\v\x02\x02\u02EE\u02ED\x03\x02"+
		"\x02\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0"+
		"\u02F1\x07\x1F\x02\x02\u02F1[\x03\x02\x02\x02\u02F2\u02F3\x07\t\x02\x02"+
		"\u02F3]\x03\x02\x02\x02~aejv\x94\x98\xAA\xB6\xBA\xC2\xC6\xCA\xCE\xD6\xDA"+
		"\xE6\xEA\xEE\xF2\xFA\u0102\u010C\u0114\u0117\u011B\u0121\u0125\u0129\u012E"+
		"\u0132\u0136\u013A\u0140\u0144\u0149\u0152\u0154\u0158\u015C\u0162\u0166"+
		"\u016A\u016E\u0174\u0178\u017C\u0181\u0186\u018B\u018F\u0192\u0197\u019A"+
		"\u019E\u01A3\u01A7\u01B2\u01B7\u01BC\u01C1\u01C4\u01C7\u01CA\u01CD\u01D0"+
		"\u01D3\u01D9\u01DD\u01E0\u01E3\u01E8\u01ED\u01F0\u01F4\u01FF\u0203\u020A"+
		"\u020E\u0211\u021B\u0222\u0225\u0228\u022D\u0232\u0234\u0240\u0244\u0249"+
		"\u024B\u0251\u025A\u0260\u026B\u026E\u0278\u027C\u0280\u0285\u0289\u028C"+
		"\u028E\u0296\u029A\u029F\u02A6\u02A9\u02AC\u02AF\u02B2\u02B5\u02B8\u02BE"+
		"\u02C2\u02C5\u02C8\u02CD\u02D2\u02D6\u02DC\u02E0\u02E4\u02EA\u02EE";
	public static readonly _serializedATN: string = Utils.join(
		[
			TomParser._serializedATNSegment0,
			TomParser._serializedATNSegment1
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TomParser.__ATN) {
			TomParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TomParser._serializedATN));
		}

		return TomParser.__ATN;
	}

}

export class DocumentationContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(TomParser.EOF, 0); }
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(TomParser.NEWLINE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_documentation; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterDocumentation) listener.enterDocumentation(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitDocumentation) listener.exitDocumentation(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitDocumentation) return visitor.visitDocumentation(this);
		else return visitor.visitChildren(this);
	}
}


export class BodyContext extends ParserRuleContext {
	public annotations(): AnnotationsContext {
		return this.getRuleContext(0, AnnotationsContext);
	}
	public whitespace(): WhitespaceContext[];
	public whitespace(i: number): WhitespaceContext;
	public whitespace(i?: number): WhitespaceContext | WhitespaceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhitespaceContext);
		} else {
			return this.getRuleContext(i, WhitespaceContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_body; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterBody) listener.enterBody(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitBody) listener.exitBody(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitBody) return visitor.visitBody(this);
		else return visitor.visitChildren(this);
	}
}


export class WhitespaceContext extends ParserRuleContext {
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(TomParser.SPACE, 0); }
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(TomParser.NEWLINE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_whitespace; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterWhitespace) listener.enterWhitespace(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitWhitespace) listener.exitWhitespace(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitWhitespace) return visitor.visitWhitespace(this);
		else return visitor.visitChildren(this);
	}
}


export class AnnotationsContext extends ParserRuleContext {
	public tag(): TagContext[];
	public tag(i: number): TagContext;
	public tag(i?: number): TagContext | TagContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagContext);
		} else {
			return this.getRuleContext(i, TagContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.NEWLINE);
		} else {
			return this.getToken(TomParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_annotations; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterAnnotations) listener.enterAnnotations(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitAnnotations) listener.exitAnnotations(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitAnnotations) return visitor.visitAnnotations(this);
		else return visitor.visitChildren(this);
	}
}


export class TagContext extends ParserRuleContext {
	public tagName(): TagNameContext {
		return this.getRuleContext(0, TagNameContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.SPACE);
		} else {
			return this.getToken(TomParser.SPACE, i);
		}
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(TomParser.MINUS, 0); }
	public description(): DescriptionContext | undefined {
		return this.tryGetRuleContext(0, DescriptionContext);
	}
	public tagID(): TagIDContext | undefined {
		return this.tryGetRuleContext(0, TagIDContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(TomParser.EQUAL, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(TomParser.COLON, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_tag; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterTag) listener.enterTag(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitTag) listener.exitTag(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitTag) return visitor.visitTag(this);
		else return visitor.visitChildren(this);
	}
}


export class TagNameContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(TomParser.AT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_tagName; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterTagName) listener.enterTagName(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitTagName) listener.exitTagName(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitTagName) return visitor.visitTagName(this);
		else return visitor.visitChildren(this);
	}
}


export class TagIDContext extends ParserRuleContext {
	public propertyTagID(): PropertyTagIDContext | undefined {
		return this.tryGetRuleContext(0, PropertyTagIDContext);
	}
	public optionalTagID(): OptionalTagIDContext | undefined {
		return this.tryGetRuleContext(0, OptionalTagIDContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_tagID; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterTagID) listener.enterTagID(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitTagID) listener.exitTagID(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitTagID) return visitor.visitTagID(this);
		else return visitor.visitChildren(this);
	}
}


export class OptionalTagIDContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public QUESTION(): TerminalNode { return this.getToken(TomParser.QUESTION, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_optionalTagID; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterOptionalTagID) listener.enterOptionalTagID(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitOptionalTagID) listener.exitOptionalTagID(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitOptionalTagID) return visitor.visitOptionalTagID(this);
		else return visitor.visitChildren(this);
	}
}


export class PropertyTagIDContext extends ParserRuleContext {
	public optionalTagID(): OptionalTagIDContext | undefined {
		return this.tryGetRuleContext(0, OptionalTagIDContext);
	}
	public PERIOD(): TerminalNode[];
	public PERIOD(i: number): TerminalNode;
	public PERIOD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.PERIOD);
		} else {
			return this.getToken(TomParser.PERIOD, i);
		}
	}
	public optionalTagOrIdentifier(): OptionalTagOrIdentifierContext[];
	public optionalTagOrIdentifier(i: number): OptionalTagOrIdentifierContext;
	public optionalTagOrIdentifier(i?: number): OptionalTagOrIdentifierContext | OptionalTagOrIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionalTagOrIdentifierContext);
		} else {
			return this.getRuleContext(i, OptionalTagOrIdentifierContext);
		}
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_propertyTagID; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterPropertyTagID) listener.enterPropertyTagID(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitPropertyTagID) listener.exitPropertyTagID(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitPropertyTagID) return visitor.visitPropertyTagID(this);
		else return visitor.visitChildren(this);
	}
}


export class OptionalTagOrIdentifierContext extends ParserRuleContext {
	public optionalTagID(): OptionalTagIDContext | undefined {
		return this.tryGetRuleContext(0, OptionalTagIDContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_optionalTagOrIdentifier; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterOptionalTagOrIdentifier) listener.enterOptionalTagOrIdentifier(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitOptionalTagOrIdentifier) listener.exitOptionalTagOrIdentifier(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitOptionalTagOrIdentifier) return visitor.visitOptionalTagOrIdentifier(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public PIPE(): TerminalNode | undefined { return this.tryGetToken(TomParser.PIPE, 0); }
	public AMP(): TerminalNode | undefined { return this.tryGetToken(TomParser.AMP, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.SPACE);
		} else {
			return this.getToken(TomParser.SPACE, i);
		}
	}
	public lambdaType(): LambdaTypeContext | undefined {
		return this.tryGetRuleContext(0, LambdaTypeContext);
	}
	public tupleType(): TupleTypeContext | undefined {
		return this.tryGetRuleContext(0, TupleTypeContext);
	}
	public primaryType(): PrimaryTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimaryTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_type; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterType) listener.enterType(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitType) listener.exitType(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitType) return visitor.visitType(this);
		else return visitor.visitChildren(this);
	}
}


export class TupleTypeContext extends ParserRuleContext {
	public LESSTHAN(): TerminalNode { return this.getToken(TomParser.LESSTHAN, 0); }
	public tupleTypeList(): TupleTypeListContext {
		return this.getRuleContext(0, TupleTypeListContext);
	}
	public GREATERTHAN(): TerminalNode { return this.getToken(TomParser.GREATERTHAN, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.SPACE);
		} else {
			return this.getToken(TomParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_tupleType; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterTupleType) listener.enterTupleType(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitTupleType) listener.exitTupleType(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitTupleType) return visitor.visitTupleType(this);
		else return visitor.visitChildren(this);
	}
}


export class TupleTypeListContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.SPACE);
		} else {
			return this.getToken(TomParser.SPACE, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.COMMA);
		} else {
			return this.getToken(TomParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_tupleTypeList; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterTupleTypeList) listener.enterTupleTypeList(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitTupleTypeList) listener.exitTupleTypeList(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitTupleTypeList) return visitor.visitTupleTypeList(this);
		else return visitor.visitChildren(this);
	}
}


export class PrimaryTypeContext extends ParserRuleContext {
	public parenthesizedType(): ParenthesizedTypeContext | undefined {
		return this.tryGetRuleContext(0, ParenthesizedTypeContext);
	}
	public objectType(): ObjectTypeContext | undefined {
		return this.tryGetRuleContext(0, ObjectTypeContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	public propertyType(): PropertyTypeContext | undefined {
		return this.tryGetRuleContext(0, PropertyTypeContext);
	}
	public optionalType(): OptionalTypeContext | undefined {
		return this.tryGetRuleContext(0, OptionalTypeContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(TomParser.QUESTION, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_primaryType; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterPrimaryType) listener.enterPrimaryType(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitPrimaryType) listener.exitPrimaryType(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitPrimaryType) return visitor.visitPrimaryType(this);
		else return visitor.visitChildren(this);
	}
}


export class ParenthesizedTypeContext extends ParserRuleContext {
	public PAREN_OPEN(): TerminalNode { return this.getToken(TomParser.PAREN_OPEN, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public PAREN_CLOSE(): TerminalNode { return this.getToken(TomParser.PAREN_CLOSE, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.SPACE);
		} else {
			return this.getToken(TomParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_parenthesizedType; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterParenthesizedType) listener.enterParenthesizedType(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitParenthesizedType) listener.exitParenthesizedType(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedType) return visitor.visitParenthesizedType(this);
		else return visitor.visitChildren(this);
	}
}


export class LambdaTypeContext extends ParserRuleContext {
	public PAREN_OPEN(): TerminalNode | undefined { return this.tryGetToken(TomParser.PAREN_OPEN, 0); }
	public formalParameterSequence(): FormalParameterSequenceContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterSequenceContext);
	}
	public PAREN_CLOSE(): TerminalNode | undefined { return this.tryGetToken(TomParser.PAREN_CLOSE, 0); }
	public ARROW(): TerminalNode { return this.getToken(TomParser.ARROW, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.SPACE);
		} else {
			return this.getToken(TomParser.SPACE, i);
		}
	}
	public parameter(): ParameterContext | undefined {
		return this.tryGetRuleContext(0, ParameterContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_lambdaType; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterLambdaType) listener.enterLambdaType(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitLambdaType) listener.exitLambdaType(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitLambdaType) return visitor.visitLambdaType(this);
		else return visitor.visitChildren(this);
	}
}


export class FormalParameterSequenceContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.COMMA);
		} else {
			return this.getToken(TomParser.COMMA, i);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.SPACE);
		} else {
			return this.getToken(TomParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_formalParameterSequence; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterFormalParameterSequence) listener.enterFormalParameterSequence(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitFormalParameterSequence) listener.exitFormalParameterSequence(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterSequence) return visitor.visitFormalParameterSequence(this);
		else return visitor.visitChildren(this);
	}
}


export class ParameterContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(TomParser.COLON, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.SPACE);
		} else {
			return this.getToken(TomParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_parameter; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterParameter) listener.enterParameter(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitParameter) listener.exitParameter(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitParameter) return visitor.visitParameter(this);
		else return visitor.visitChildren(this);
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public BRACKET_OPEN(): TerminalNode { return this.getToken(TomParser.BRACKET_OPEN, 0); }
	public BRACKET_CLOSE(): TerminalNode { return this.getToken(TomParser.BRACKET_CLOSE, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.SPACE);
		} else {
			return this.getToken(TomParser.SPACE, i);
		}
	}
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.COMMA);
		} else {
			return this.getToken(TomParser.COMMA, i);
		}
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public objectType(): ObjectTypeContext | undefined {
		return this.tryGetRuleContext(0, ObjectTypeContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_arrayType; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterArrayType) listener.enterArrayType(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitArrayType) listener.exitArrayType(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitArrayType) return visitor.visitArrayType(this);
		else return visitor.visitChildren(this);
	}
}


export class ObjectTypeContext extends ParserRuleContext {
	public BRACE_OPEN(): TerminalNode { return this.getToken(TomParser.BRACE_OPEN, 0); }
	public BRACE_CLOSE(): TerminalNode { return this.getToken(TomParser.BRACE_CLOSE, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.SPACE);
		} else {
			return this.getToken(TomParser.SPACE, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.NEWLINE);
		} else {
			return this.getToken(TomParser.NEWLINE, i);
		}
	}
	public objectPairTypeList(): ObjectPairTypeListContext | undefined {
		return this.tryGetRuleContext(0, ObjectPairTypeListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_objectType; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterObjectType) listener.enterObjectType(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitObjectType) listener.exitObjectType(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitObjectType) return visitor.visitObjectType(this);
		else return visitor.visitChildren(this);
	}
}


export class ObjectPairTypeListContext extends ParserRuleContext {
	public objectPairType(): ObjectPairTypeContext[];
	public objectPairType(i: number): ObjectPairTypeContext;
	public objectPairType(i?: number): ObjectPairTypeContext | ObjectPairTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectPairTypeContext);
		} else {
			return this.getRuleContext(i, ObjectPairTypeContext);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.SPACE);
		} else {
			return this.getToken(TomParser.SPACE, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.COMMA);
		} else {
			return this.getToken(TomParser.COMMA, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.NEWLINE);
		} else {
			return this.getToken(TomParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_objectPairTypeList; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterObjectPairTypeList) listener.enterObjectPairTypeList(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitObjectPairTypeList) listener.exitObjectPairTypeList(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitObjectPairTypeList) return visitor.visitObjectPairTypeList(this);
		else return visitor.visitChildren(this);
	}
}


export class ObjectPairTypeContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(TomParser.COLON, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(TomParser.QUESTION, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.SPACE);
		} else {
			return this.getToken(TomParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_objectPairType; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterObjectPairType) listener.enterObjectPairType(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitObjectPairType) listener.exitObjectPairType(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitObjectPairType) return visitor.visitObjectPairType(this);
		else return visitor.visitChildren(this);
	}
}


export class OptionalTypeContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public QUESTION(): TerminalNode { return this.getToken(TomParser.QUESTION, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_optionalType; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterOptionalType) listener.enterOptionalType(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitOptionalType) listener.exitOptionalType(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitOptionalType) return visitor.visitOptionalType(this);
		else return visitor.visitChildren(this);
	}
}


export class PropertyTypeContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public PERIOD(): TerminalNode[];
	public PERIOD(i: number): TerminalNode;
	public PERIOD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.PERIOD);
		} else {
			return this.getToken(TomParser.PERIOD, i);
		}
	}
	public optionalType(): OptionalTypeContext[];
	public optionalType(i: number): OptionalTypeContext;
	public optionalType(i?: number): OptionalTypeContext | OptionalTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionalTypeContext);
		} else {
			return this.getRuleContext(i, OptionalTypeContext);
		}
	}
	public optionalTagID(): OptionalTagIDContext[];
	public optionalTagID(i: number): OptionalTagIDContext;
	public optionalTagID(i?: number): OptionalTagIDContext | OptionalTagIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionalTagIDContext);
		} else {
			return this.getRuleContext(i, OptionalTagIDContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_propertyType; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterPropertyType) listener.enterPropertyType(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitPropertyType) listener.exitPropertyType(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitPropertyType) return visitor.visitPropertyType(this);
		else return visitor.visitChildren(this);
	}
}


export class ValueContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_value; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterValue) listener.enterValue(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitValue) listener.exitValue(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitValue) return visitor.visitValue(this);
		else return visitor.visitChildren(this);
	}
}


export class DescriptionContext extends ParserRuleContext {
	public descriptionLine(): DescriptionLineContext {
		return this.getRuleContext(0, DescriptionLineContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_description; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterDescription) listener.enterDescription(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitDescription) listener.exitDescription(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitDescription) return visitor.visitDescription(this);
		else return visitor.visitChildren(this);
	}
}


export class DescriptionLineContext extends ParserRuleContext {
	public descriptionLineStart(): DescriptionLineStartContext | undefined {
		return this.tryGetRuleContext(0, DescriptionLineStartContext);
	}
	public descriptionLineElement(): DescriptionLineElementContext[];
	public descriptionLineElement(i: number): DescriptionLineElementContext;
	public descriptionLineElement(i?: number): DescriptionLineElementContext | DescriptionLineElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DescriptionLineElementContext);
		} else {
			return this.getRuleContext(i, DescriptionLineElementContext);
		}
	}
	public inlineTag(): InlineTagContext | undefined {
		return this.tryGetRuleContext(0, InlineTagContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_descriptionLine; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterDescriptionLine) listener.enterDescriptionLine(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitDescriptionLine) listener.exitDescriptionLine(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitDescriptionLine) return visitor.visitDescriptionLine(this);
		else return visitor.visitChildren(this);
	}
}


export class DescriptionLineStartContext extends ParserRuleContext {
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.SPACE);
		} else {
			return this.getToken(TomParser.SPACE, i);
		}
	}
	public descriptionText(): DescriptionTextContext[];
	public descriptionText(i: number): DescriptionTextContext;
	public descriptionText(i?: number): DescriptionTextContext | DescriptionTextContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DescriptionTextContext);
		} else {
			return this.getRuleContext(i, DescriptionTextContext);
		}
	}
	public AT(): TerminalNode[];
	public AT(i: number): TerminalNode;
	public AT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.AT);
		} else {
			return this.getToken(TomParser.AT, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_descriptionLineStart; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterDescriptionLineStart) listener.enterDescriptionLineStart(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitDescriptionLineStart) listener.exitDescriptionLineStart(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitDescriptionLineStart) return visitor.visitDescriptionLineStart(this);
		else return visitor.visitChildren(this);
	}
}


export class DescriptionTextContext extends ParserRuleContext {
	public TEXT_CONTENT(): TerminalNode | undefined { return this.tryGetToken(TomParser.TEXT_CONTENT, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(TomParser.ID, 0); }
	public FORWARD_SLASH(): TerminalNode | undefined { return this.tryGetToken(TomParser.FORWARD_SLASH, 0); }
	public BRACE_OPEN(): TerminalNode | undefined { return this.tryGetToken(TomParser.BRACE_OPEN, 0); }
	public BRACE_CLOSE(): TerminalNode | undefined { return this.tryGetToken(TomParser.BRACE_CLOSE, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(TomParser.COLON, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(TomParser.MINUS, 0); }
	public PERIOD(): TerminalNode | undefined { return this.tryGetToken(TomParser.PERIOD, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_descriptionText; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterDescriptionText) listener.enterDescriptionText(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitDescriptionText) listener.exitDescriptionText(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitDescriptionText) return visitor.visitDescriptionText(this);
		else return visitor.visitChildren(this);
	}
}


export class DescriptionLineElementContext extends ParserRuleContext {
	public inlineTag(): InlineTagContext | undefined {
		return this.tryGetRuleContext(0, InlineTagContext);
	}
	public descriptionLineText(): DescriptionLineTextContext | undefined {
		return this.tryGetRuleContext(0, DescriptionLineTextContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_descriptionLineElement; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterDescriptionLineElement) listener.enterDescriptionLineElement(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitDescriptionLineElement) listener.exitDescriptionLineElement(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitDescriptionLineElement) return visitor.visitDescriptionLineElement(this);
		else return visitor.visitChildren(this);
	}
}


export class DescriptionLineTextContext extends ParserRuleContext {
	public descriptionText(): DescriptionTextContext[];
	public descriptionText(i: number): DescriptionTextContext;
	public descriptionText(i?: number): DescriptionTextContext | DescriptionTextContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DescriptionTextContext);
		} else {
			return this.getRuleContext(i, DescriptionTextContext);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.SPACE);
		} else {
			return this.getToken(TomParser.SPACE, i);
		}
	}
	public AT(): TerminalNode[];
	public AT(i: number): TerminalNode;
	public AT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.AT);
		} else {
			return this.getToken(TomParser.AT, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_descriptionLineText; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterDescriptionLineText) listener.enterDescriptionLineText(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitDescriptionLineText) listener.exitDescriptionLineText(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitDescriptionLineText) return visitor.visitDescriptionLineText(this);
		else return visitor.visitChildren(this);
	}
}


export class InlineTagContext extends ParserRuleContext {
	public INLINE_TAG_START(): TerminalNode { return this.getToken(TomParser.INLINE_TAG_START, 0); }
	public inlineTagName(): InlineTagNameContext {
		return this.getRuleContext(0, InlineTagNameContext);
	}
	public SPACE(): TerminalNode { return this.getToken(TomParser.SPACE, 0); }
	public BRACE_CLOSE(): TerminalNode { return this.getToken(TomParser.BRACE_CLOSE, 0); }
	public inlineTagBody(): InlineTagBodyContext | undefined {
		return this.tryGetRuleContext(0, InlineTagBodyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_inlineTag; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterInlineTag) listener.enterInlineTag(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitInlineTag) listener.exitInlineTag(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitInlineTag) return visitor.visitInlineTag(this);
		else return visitor.visitChildren(this);
	}
}


export class InlineTagNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_inlineTagName; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterInlineTagName) listener.enterInlineTagName(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitInlineTagName) listener.exitInlineTagName(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitInlineTagName) return visitor.visitInlineTagName(this);
		else return visitor.visitChildren(this);
	}
}


export class InlineTagBodyContext extends ParserRuleContext {
	public braceBody(): BraceBodyContext[];
	public braceBody(i: number): BraceBodyContext;
	public braceBody(i?: number): BraceBodyContext | BraceBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BraceBodyContext);
		} else {
			return this.getRuleContext(i, BraceBodyContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_inlineTagBody; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterInlineTagBody) listener.enterInlineTagBody(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitInlineTagBody) listener.exitInlineTagBody(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitInlineTagBody) return visitor.visitInlineTagBody(this);
		else return visitor.visitChildren(this);
	}
}


export class BraceExpressionContext extends ParserRuleContext {
	public BRACE_OPEN(): TerminalNode { return this.getToken(TomParser.BRACE_OPEN, 0); }
	public BRACE_CLOSE(): TerminalNode { return this.getToken(TomParser.BRACE_CLOSE, 0); }
	public braceBody(): BraceBodyContext[];
	public braceBody(i: number): BraceBodyContext;
	public braceBody(i?: number): BraceBodyContext | BraceBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BraceBodyContext);
		} else {
			return this.getRuleContext(i, BraceBodyContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_braceExpression; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterBraceExpression) listener.enterBraceExpression(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitBraceExpression) listener.exitBraceExpression(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitBraceExpression) return visitor.visitBraceExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class BraceBodyContext extends ParserRuleContext {
	public braceExpression(): BraceExpressionContext | undefined {
		return this.tryGetRuleContext(0, BraceExpressionContext);
	}
	public braceText(): BraceTextContext[];
	public braceText(i: number): BraceTextContext;
	public braceText(i?: number): BraceTextContext | BraceTextContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BraceTextContext);
		} else {
			return this.getRuleContext(i, BraceTextContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.NEWLINE);
		} else {
			return this.getToken(TomParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_braceBody; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterBraceBody) listener.enterBraceBody(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitBraceBody) listener.exitBraceBody(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitBraceBody) return visitor.visitBraceBody(this);
		else return visitor.visitChildren(this);
	}
}


export class BraceTextContext extends ParserRuleContext {
	public TEXT_CONTENT(): TerminalNode | undefined { return this.tryGetToken(TomParser.TEXT_CONTENT, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(TomParser.ID, 0); }
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(TomParser.SPACE, 0); }
	public FORWARD_SLASH(): TerminalNode | undefined { return this.tryGetToken(TomParser.FORWARD_SLASH, 0); }
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(TomParser.NEWLINE, 0); }
	public PERIOD(): TerminalNode | undefined { return this.tryGetToken(TomParser.PERIOD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_braceText; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterBraceText) listener.enterBraceText(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitBraceText) listener.exitBraceText(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitBraceText) return visitor.visitBraceText(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionContext extends ParserRuleContext {
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(TomParser.STAR, 0); }
	public FORWARD_SLASH(): TerminalNode | undefined { return this.tryGetToken(TomParser.FORWARD_SLASH, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.SPACE);
		} else {
			return this.getToken(TomParser.SPACE, i);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(TomParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(TomParser.MINUS, 0); }
	public arrayExpression(): ArrayExpressionContext | undefined {
		return this.tryGetRuleContext(0, ArrayExpressionContext);
	}
	public objectExpression(): ObjectExpressionContext | undefined {
		return this.tryGetRuleContext(0, ObjectExpressionContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public parenthesizedExpression(): ParenthesizedExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParenthesizedExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_expression; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterExpression) listener.enterExpression(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitExpression) listener.exitExpression(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitExpression) return visitor.visitExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(TomParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(TomParser.MINUS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_unaryExpression; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterUnaryExpression) listener.enterUnaryExpression(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitUnaryExpression) listener.exitUnaryExpression(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) return visitor.visitUnaryExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ArrayExpressionContext extends ParserRuleContext {
	public BRACKET_OPEN(): TerminalNode { return this.getToken(TomParser.BRACKET_OPEN, 0); }
	public BRACKET_CLOSE(): TerminalNode { return this.getToken(TomParser.BRACKET_CLOSE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.COMMA);
		} else {
			return this.getToken(TomParser.COMMA, i);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.SPACE);
		} else {
			return this.getToken(TomParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_arrayExpression; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterArrayExpression) listener.enterArrayExpression(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitArrayExpression) listener.exitArrayExpression(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitArrayExpression) return visitor.visitArrayExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ObjectExpressionContext extends ParserRuleContext {
	public BRACE_OPEN(): TerminalNode { return this.getToken(TomParser.BRACE_OPEN, 0); }
	public BRACE_CLOSE(): TerminalNode { return this.getToken(TomParser.BRACE_CLOSE, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.SPACE);
		} else {
			return this.getToken(TomParser.SPACE, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.NEWLINE);
		} else {
			return this.getToken(TomParser.NEWLINE, i);
		}
	}
	public objectPairExpressionList(): ObjectPairExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ObjectPairExpressionListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_objectExpression; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterObjectExpression) listener.enterObjectExpression(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitObjectExpression) listener.exitObjectExpression(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitObjectExpression) return visitor.visitObjectExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ObjectPairExpressionListContext extends ParserRuleContext {
	public objectPair(): ObjectPairContext[];
	public objectPair(i: number): ObjectPairContext;
	public objectPair(i?: number): ObjectPairContext | ObjectPairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectPairContext);
		} else {
			return this.getRuleContext(i, ObjectPairContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.COMMA);
		} else {
			return this.getToken(TomParser.COMMA, i);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.SPACE);
		} else {
			return this.getToken(TomParser.SPACE, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.NEWLINE);
		} else {
			return this.getToken(TomParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_objectPairExpressionList; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterObjectPairExpressionList) listener.enterObjectPairExpressionList(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitObjectPairExpressionList) listener.exitObjectPairExpressionList(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitObjectPairExpressionList) return visitor.visitObjectPairExpressionList(this);
		else return visitor.visitChildren(this);
	}
}


export class ObjectPairContext extends ParserRuleContext {
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(TomParser.COLON, 0); }
	public objectExpression(): ObjectExpressionContext | undefined {
		return this.tryGetRuleContext(0, ObjectExpressionContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.SPACE);
		} else {
			return this.getToken(TomParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_objectPair; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterObjectPair) listener.enterObjectPair(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitObjectPair) listener.exitObjectPair(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitObjectPair) return visitor.visitObjectPair(this);
		else return visitor.visitChildren(this);
	}
}


export class LiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(TomParser.IntegerLiteral, 0); }
	public FloatingPointLiteral(): TerminalNode | undefined { return this.tryGetToken(TomParser.FloatingPointLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(TomParser.BooleanLiteral, 0); }
	public CharacterLiteral(): TerminalNode | undefined { return this.tryGetToken(TomParser.CharacterLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(TomParser.StringLiteral, 0); }
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(TomParser.NullLiteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_literal; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterLiteral) listener.enterLiteral(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitLiteral) listener.exitLiteral(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitLiteral) return visitor.visitLiteral(this);
		else return visitor.visitChildren(this);
	}
}


export class ParenthesizedExpressionContext extends ParserRuleContext {
	public PAREN_OPEN(): TerminalNode { return this.getToken(TomParser.PAREN_OPEN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public PAREN_CLOSE(): TerminalNode { return this.getToken(TomParser.PAREN_CLOSE, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.SPACE);
		} else {
			return this.getToken(TomParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_parenthesizedExpression; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterParenthesizedExpression) listener.enterParenthesizedExpression(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitParenthesizedExpression) listener.exitParenthesizedExpression(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) return visitor.visitParenthesizedExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class IdentifierContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(TomParser.ID, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_identifier; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterIdentifier) listener.enterIdentifier(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitIdentifier) listener.exitIdentifier(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) return visitor.visitIdentifier(this);
		else return visitor.visitChildren(this);
	}
}


