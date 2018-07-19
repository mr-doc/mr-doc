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
	public static readonly RULE_unaryType = 11;
	public static readonly RULE_tupleType = 12;
	public static readonly RULE_tupleTypeList = 13;
	public static readonly RULE_primaryType = 14;
	public static readonly RULE_identifierOrKeyword = 15;
	public static readonly RULE_parenthesizedType = 16;
	public static readonly RULE_lambdaType = 17;
	public static readonly RULE_formalParameterSequence = 18;
	public static readonly RULE_parameter = 19;
	public static readonly RULE_arrayType = 20;
	public static readonly RULE_objectType = 21;
	public static readonly RULE_objectPairTypeList = 22;
	public static readonly RULE_objectPairType = 23;
	public static readonly RULE_optionalType = 24;
	public static readonly RULE_propertyType = 25;
	public static readonly RULE_optionalTypeOrIdentifer = 26;
	public static readonly RULE_value = 27;
	public static readonly RULE_expression = 28;
	public static readonly RULE_unaryExpression = 29;
	public static readonly RULE_arrayExpression = 30;
	public static readonly RULE_objectExpression = 31;
	public static readonly RULE_objectPairExpressionList = 32;
	public static readonly RULE_objectPairExpression = 33;
	public static readonly RULE_lambdaExpression = 34;
	public static readonly RULE_literal = 35;
	public static readonly RULE_parenthesizedExpression = 36;
	public static readonly RULE_description = 37;
	public static readonly RULE_descriptionLine = 38;
	public static readonly RULE_descriptionLineStart = 39;
	public static readonly RULE_descriptionText = 40;
	public static readonly RULE_descriptionLineElement = 41;
	public static readonly RULE_descriptionLineText = 42;
	public static readonly RULE_inlineTag = 43;
	public static readonly RULE_inlineTagName = 44;
	public static readonly RULE_inlineTagBody = 45;
	public static readonly RULE_braceExpression = 46;
	public static readonly RULE_braceBody = 47;
	public static readonly RULE_braceText = 48;
	public static readonly RULE_identifier = 49;
	public static readonly ruleNames: string[] = [
		"documentation", "body", "whitespace", "annotations", "tag", "tagName", 
		"tagID", "optionalTagID", "propertyTagID", "optionalTagOrIdentifier", 
		"type", "unaryType", "tupleType", "tupleTypeList", "primaryType", "identifierOrKeyword", 
		"parenthesizedType", "lambdaType", "formalParameterSequence", "parameter", 
		"arrayType", "objectType", "objectPairTypeList", "objectPairType", "optionalType", 
		"propertyType", "optionalTypeOrIdentifer", "value", "expression", "unaryExpression", 
		"arrayExpression", "objectExpression", "objectPairExpressionList", "objectPairExpression", 
		"lambdaExpression", "literal", "parenthesizedExpression", "description", 
		"descriptionLine", "descriptionLineStart", "descriptionText", "descriptionLineElement", 
		"descriptionLineText", "inlineTag", "inlineTagName", "inlineTagBody", 
		"braceExpression", "braceBody", "braceText", "identifier"
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
			this.state = 107;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TomParser.EOF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 100;
				this.match(TomParser.EOF);
				}
				break;
			case TomParser.NEWLINE:
			case TomParser.SPACE:
			case TomParser.AT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 101;
				this.body();
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.NEWLINE) {
					{
					this.state = 102;
					this.match(TomParser.NEWLINE);
					}
				}

				this.state = 105;
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
			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===TomParser.NEWLINE || _la===TomParser.SPACE) {
				{
				{
				this.state = 109;
				this.whitespace();
				}
				}
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 115;
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
			this.state = 117;
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
			this.state = 119;
			this.tag();
			this.state = 124;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,3,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 120;
					this.match(TomParser.NEWLINE);
					this.state = 121;
					this.tag();
					}
					} 
				}
				this.state = 126;
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
			this.state = 268;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,23,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 127;
				this.tagName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 128;
				this.tagName();
				this.state = 129;
				this.match(TomParser.SPACE);
				this.state = 130;
				this.match(TomParser.MINUS);
				this.state = 131;
				this.match(TomParser.SPACE);
				this.state = 132;
				this.description();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 134;
				this.tagName();
				this.state = 135;
				this.match(TomParser.SPACE);
				this.state = 136;
				this.tagID();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 138;
				this.tagName();
				this.state = 139;
				this.match(TomParser.SPACE);
				this.state = 140;
				this.tagID();
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 141;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 144;
				this.match(TomParser.EQUAL);
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
				this.value();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 150;
				this.tagName();
				this.state = 151;
				this.match(TomParser.SPACE);
				this.state = 152;
				this.tagID();
				this.state = 153;
				this.match(TomParser.SPACE);
				this.state = 154;
				this.match(TomParser.MINUS);
				this.state = 155;
				this.match(TomParser.SPACE);
				this.state = 156;
				this.description();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 158;
				this.tagName();
				this.state = 159;
				this.match(TomParser.SPACE);
				this.state = 160;
				this.tagID();
				this.state = 161;
				this.match(TomParser.SPACE);
				this.state = 162;
				this.match(TomParser.EQUAL);
				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 163;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 166;
				this.value();
				this.state = 167;
				this.match(TomParser.SPACE);
				this.state = 168;
				this.match(TomParser.MINUS);
				this.state = 169;
				this.match(TomParser.SPACE);
				this.state = 170;
				this.description();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 172;
				this.tagName();
				this.state = 173;
				this.match(TomParser.SPACE);
				this.state = 174;
				this.tagID();
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 175;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 178;
				this.match(TomParser.COLON);
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
				this.type(0);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 184;
				this.tagName();
				this.state = 185;
				this.match(TomParser.SPACE);
				this.state = 186;
				this.tagID();
				this.state = 188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 187;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 190;
				this.match(TomParser.COLON);
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
				this.type(0);
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
				this.match(TomParser.EQUAL);
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
				this.value();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 204;
				this.tagName();
				this.state = 205;
				this.match(TomParser.SPACE);
				this.state = 206;
				this.tagID();
				this.state = 208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 207;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 210;
				this.match(TomParser.COLON);
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
				this.type(0);
				this.state = 215;
				this.match(TomParser.SPACE);
				this.state = 216;
				this.match(TomParser.MINUS);
				this.state = 217;
				this.match(TomParser.SPACE);
				this.state = 218;
				this.description();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 220;
				this.tagName();
				this.state = 221;
				this.match(TomParser.SPACE);
				this.state = 222;
				this.tagID();
				this.state = 224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 223;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 226;
				this.match(TomParser.COLON);
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
				this.type(0);
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
				this.match(TomParser.EQUAL);
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
				this.value();
				this.state = 239;
				this.match(TomParser.SPACE);
				this.state = 240;
				this.match(TomParser.MINUS);
				this.state = 241;
				this.match(TomParser.SPACE);
				this.state = 242;
				this.description();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 244;
				this.tagName();
				this.state = 246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 245;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 248;
				this.match(TomParser.COLON);
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 249;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 252;
				this.type(0);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 254;
				this.tagName();
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 255;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 258;
				this.match(TomParser.COLON);
				this.state = 260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 259;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 262;
				this.type(0);
				this.state = 263;
				this.match(TomParser.SPACE);
				this.state = 264;
				this.match(TomParser.MINUS);
				this.state = 265;
				this.match(TomParser.SPACE);
				this.state = 266;
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
			this.state = 270;
			this.match(TomParser.AT);
			this.state = 271;
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
			this.state = 276;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,24,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 273;
				this.propertyTagID();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 274;
				this.optionalTagID();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 275;
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
			this.state = 278;
			this.identifier();
			this.state = 279;
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
			this.state = 295;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,27,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 281;
				this.optionalTagID();
				this.state = 284; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 282;
					this.match(TomParser.PERIOD);
					this.state = 283;
					this.optionalTagOrIdentifier();
					}
					}
					this.state = 286; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( _la===TomParser.PERIOD );
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 288;
				this.identifier();
				this.state = 291; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 289;
					this.match(TomParser.PERIOD);
					this.state = 290;
					this.optionalTagOrIdentifier();
					}
					}
					this.state = 293; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( _la===TomParser.PERIOD );
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
			this.state = 299;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,28,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 297;
				this.optionalTagID();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 298;
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
			this.state = 310;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,29,this._ctx) ) {
			case 1:
				{
				this.state = 302;
				this.lambdaType();
				}
				break;

			case 2:
				{
				this.state = 303;
				this.tupleType();
				}
				break;

			case 3:
				{
				this.state = 304;
				this.primaryType();
				}
				break;

			case 4:
				{
				this.state = 305;
				this.parenthesizedType();
				}
				break;

			case 5:
				{
				this.state = 306;
				this.unaryType();
				}
				break;

			case 6:
				{
				this.state = 307;
				this.objectType();
				}
				break;

			case 7:
				{
				this.state = 308;
				this.arrayType(0);
				}
				break;

			case 8:
				{
				this.state = 309;
				this.propertyType();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 323;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,32,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_type);
					this.state = 312;
					if (!(this.precpred(this._ctx, 9))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
					this.state = 314;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===TomParser.SPACE) {
						{
						this.state = 313;
						this.match(TomParser.SPACE);
						}
					}

					this.state = 316;
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
					this.state = 318;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===TomParser.SPACE) {
						{
						this.state = 317;
						this.match(TomParser.SPACE);
						}
					}

					this.state = 320;
					this.type(10);
					}
					} 
				}
				this.state = 325;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,32,this._ctx);
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
	
	public unaryType(): UnaryTypeContext {
		let _localctx: UnaryTypeContext = new UnaryTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, TomParser.RULE_unaryType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326;
			_la = this._input.LA(1);
			if ( !(_la===TomParser.STAR || _la===TomParser.AMP) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 327;
			this.primaryType();
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
	
	public tupleType(): TupleTypeContext {
		let _localctx: TupleTypeContext = new TupleTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, TomParser.RULE_tupleType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.ID) {
				{
				this.state = 329;
				this.identifier();
				}
			}

			this.state = 332;
			this.match(TomParser.LESSTHAN);
			this.state = 334;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 333;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 336;
			this.tupleTypeList();
			this.state = 338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 337;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 340;
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
		this.enterRule(_localctx, 26, TomParser.RULE_tupleTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 342;
			this.type(0);
			this.state = 344;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 343;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 351; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 346;
				this.match(TomParser.COMMA);
				this.state = 348;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 347;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 350;
				this.type(0);
				}
				}
				this.state = 353; 
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
		this.enterRule(_localctx, 28, TomParser.RULE_primaryType);
		try {
			this.state = 357;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,39,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 355;
				this.optionalType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 356;
				this.identifierOrKeyword();
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
	
	public identifierOrKeyword(): IdentifierOrKeywordContext {
		let _localctx: IdentifierOrKeywordContext = new IdentifierOrKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, TomParser.RULE_identifierOrKeyword);
		try {
			this.state = 361;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TomParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 359;
				this.identifier();
				}
				break;
			case TomParser.NullLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 360;
				this.match(TomParser.NullLiteral);
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
	
	public parenthesizedType(): ParenthesizedTypeContext {
		let _localctx: ParenthesizedTypeContext = new ParenthesizedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, TomParser.RULE_parenthesizedType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 363;
			this.match(TomParser.PAREN_OPEN);
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 364;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 367;
			this.type(0);
			this.state = 369;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 368;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 371;
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
		this.enterRule(_localctx, 34, TomParser.RULE_lambdaType);
		let _la: number;
		try {
			this.state = 402;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TomParser.PAREN_OPEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 373;
				this.match(TomParser.PAREN_OPEN);
				this.state = 375;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,43,this._ctx) ) {
				case 1:
					{
					this.state = 374;
					this.match(TomParser.SPACE);
					}
					break;
				}
				this.state = 378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.ID) {
					{
					this.state = 377;
					this.formalParameterSequence();
					}
				}

				this.state = 381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 380;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 383;
				this.match(TomParser.PAREN_CLOSE);
				this.state = 385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 384;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 387;
				this.match(TomParser.ARROW);
				this.state = 389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 388;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 391;
				this.type(0);
				}
				break;
			case TomParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 392;
				this.parameter();
				this.state = 394;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 393;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 396;
				this.match(TomParser.ARROW);
				this.state = 398;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 397;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 400;
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
		this.enterRule(_localctx, 36, TomParser.RULE_formalParameterSequence);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 404;
			this.parameter();
			this.state = 412;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===TomParser.COMMA) {
				{
				{
				this.state = 405;
				this.match(TomParser.COMMA);
				this.state = 407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 406;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 409;
				this.parameter();
				}
				}
				this.state = 414;
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
		this.enterRule(_localctx, 38, TomParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this.identifier();
			this.state = 424;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,55,this._ctx) ) {
			case 1:
				{
				this.state = 417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 416;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 419;
				this.match(TomParser.COLON);
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
		let _startState: number = 40;
		this.enterRecursionRule(_localctx, 40, TomParser.RULE_arrayType, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 474;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TomParser.BRACKET_OPEN:
				{
				this.state = 427;
				this.match(TomParser.BRACKET_OPEN);
				this.state = 429;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,56,this._ctx) ) {
				case 1:
					{
					this.state = 428;
					this.match(TomParser.NEWLINE);
					}
					break;
				}
				this.state = 432;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,57,this._ctx) ) {
				case 1:
					{
					this.state = 431;
					this.match(TomParser.SPACE);
					}
					break;
				}
				this.state = 435;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,58,this._ctx) ) {
				case 1:
					{
					this.state = 434;
					this.match(TomParser.NEWLINE);
					}
					break;
				}
				this.state = 438;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (TomParser.NullLiteral - 6)) | (1 << (TomParser.ID - 6)) | (1 << (TomParser.STAR - 6)) | (1 << (TomParser.AMP - 6)) | (1 << (TomParser.BRACE_OPEN - 6)) | (1 << (TomParser.PAREN_OPEN - 6)) | (1 << (TomParser.BRACKET_OPEN - 6)) | (1 << (TomParser.LESSTHAN - 6)))) !== 0)) {
					{
					this.state = 437;
					this.type(0);
					}
				}

				this.state = 453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===TomParser.COMMA) {
					{
					{
					this.state = 440;
					this.match(TomParser.COMMA);
					this.state = 442;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,60,this._ctx) ) {
					case 1:
						{
						this.state = 441;
						this.match(TomParser.NEWLINE);
						}
						break;
					}
					this.state = 445;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===TomParser.SPACE) {
						{
						this.state = 444;
						this.match(TomParser.SPACE);
						}
					}

					this.state = 448;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===TomParser.NEWLINE) {
						{
						this.state = 447;
						this.match(TomParser.NEWLINE);
						}
					}

					this.state = 450;
					this.type(0);
					}
					}
					this.state = 455;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 457;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,64,this._ctx) ) {
				case 1:
					{
					this.state = 456;
					this.match(TomParser.NEWLINE);
					}
					break;
				}
				this.state = 460;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 459;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 463;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.NEWLINE) {
					{
					this.state = 462;
					this.match(TomParser.NEWLINE);
					}
				}

				this.state = 465;
				this.match(TomParser.BRACKET_CLOSE);
				}
				break;
			case TomParser.ID:
				{
				this.state = 466;
				this.identifier();
				this.state = 467;
				this.match(TomParser.BRACKET_OPEN);
				this.state = 468;
				this.match(TomParser.BRACKET_CLOSE);
				}
				break;
			case TomParser.BRACE_OPEN:
				{
				this.state = 470;
				this.objectType();
				this.state = 471;
				this.match(TomParser.BRACKET_OPEN);
				this.state = 472;
				this.match(TomParser.BRACKET_CLOSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 484;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,69,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ArrayTypeContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_arrayType);
					this.state = 476;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 477;
					this.match(TomParser.BRACKET_OPEN);
					this.state = 479;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (TomParser.NullLiteral - 6)) | (1 << (TomParser.ID - 6)) | (1 << (TomParser.STAR - 6)) | (1 << (TomParser.AMP - 6)) | (1 << (TomParser.BRACE_OPEN - 6)) | (1 << (TomParser.PAREN_OPEN - 6)) | (1 << (TomParser.BRACKET_OPEN - 6)) | (1 << (TomParser.LESSTHAN - 6)))) !== 0)) {
						{
						this.state = 478;
						this.type(0);
						}
					}

					this.state = 481;
					this.match(TomParser.BRACKET_CLOSE);
					}
					} 
				}
				this.state = 486;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,69,this._ctx);
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
		this.enterRule(_localctx, 42, TomParser.RULE_objectType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this.match(TomParser.BRACE_OPEN);
			this.state = 489;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,70,this._ctx) ) {
			case 1:
				{
				this.state = 488;
				this.match(TomParser.SPACE);
				}
				break;
			}
			this.state = 492;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,71,this._ctx) ) {
			case 1:
				{
				this.state = 491;
				this.match(TomParser.NEWLINE);
				}
				break;
			}
			this.state = 495;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,72,this._ctx) ) {
			case 1:
				{
				this.state = 494;
				this.match(TomParser.SPACE);
				}
				break;
			}
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (TomParser.NullLiteral - 6)) | (1 << (TomParser.ID - 6)) | (1 << (TomParser.STAR - 6)) | (1 << (TomParser.AMP - 6)) | (1 << (TomParser.BRACE_OPEN - 6)) | (1 << (TomParser.PAREN_OPEN - 6)) | (1 << (TomParser.BRACKET_OPEN - 6)) | (1 << (TomParser.LESSTHAN - 6)))) !== 0)) {
				{
				this.state = 497;
				this.objectPairTypeList();
				}
			}

			this.state = 501;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,74,this._ctx) ) {
			case 1:
				{
				this.state = 500;
				this.match(TomParser.SPACE);
				}
				break;
			}
			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.NEWLINE) {
				{
				this.state = 503;
				this.match(TomParser.NEWLINE);
				}
			}

			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 506;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 509;
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
		this.enterRule(_localctx, 44, TomParser.RULE_objectPairTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this.objectPairType();
			this.state = 513;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,77,this._ctx) ) {
			case 1:
				{
				this.state = 512;
				this.match(TomParser.SPACE);
				}
				break;
			}
			this.state = 528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===TomParser.COMMA) {
				{
				{
				this.state = 515;
				this.match(TomParser.COMMA);
				this.state = 517;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,78,this._ctx) ) {
				case 1:
					{
					this.state = 516;
					this.match(TomParser.SPACE);
					}
					break;
				}
				this.state = 520;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.NEWLINE) {
					{
					this.state = 519;
					this.match(TomParser.NEWLINE);
					}
				}

				this.state = 523;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 522;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 525;
				this.objectPairType();
				}
				}
				this.state = 530;
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
		this.enterRule(_localctx, 46, TomParser.RULE_objectPairType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 531;
			this.type(0);
			this.state = 533;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.QUESTION) {
				{
				this.state = 532;
				this.match(TomParser.QUESTION);
				}
			}

			this.state = 536;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 535;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 538;
			this.match(TomParser.COLON);
			this.state = 540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 539;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 542;
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
		this.enterRule(_localctx, 48, TomParser.RULE_optionalType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 544;
			this.identifier();
			this.state = 545;
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
		this.enterRule(_localctx, 50, TomParser.RULE_propertyType);
		try {
			let _alt: number;
			this.state = 561;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,87,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 547;
				this.identifier();
				this.state = 550; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 548;
						this.match(TomParser.PERIOD);
						this.state = 549;
						this.optionalTypeOrIdentifer();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 552; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,85,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 554;
				this.optionalType();
				this.state = 557; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 555;
						this.match(TomParser.PERIOD);
						this.state = 556;
						this.optionalTypeOrIdentifer();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 559; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,86,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
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
	
	public optionalTypeOrIdentifer(): OptionalTypeOrIdentiferContext {
		let _localctx: OptionalTypeOrIdentiferContext = new OptionalTypeOrIdentiferContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, TomParser.RULE_optionalTypeOrIdentifer);
		try {
			this.state = 565;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,88,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 563;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 564;
				this.optionalType();
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
		this.enterRule(_localctx, 54, TomParser.RULE_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 567;
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
		let _startState: number = 56;
		this.enterRecursionRule(_localctx, 56, TomParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 576;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,89,this._ctx) ) {
			case 1:
				{
				this.state = 570;
				this.unaryExpression();
				}
				break;

			case 2:
				{
				this.state = 571;
				this.arrayExpression();
				}
				break;

			case 3:
				{
				this.state = 572;
				this.objectExpression();
				}
				break;

			case 4:
				{
				this.state = 573;
				this.lambdaExpression();
				}
				break;

			case 5:
				{
				this.state = 574;
				this.literal();
				}
				break;

			case 6:
				{
				this.state = 575;
				this.parenthesizedExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 598;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,95,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 596;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,94,this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_expression);
						this.state = 578;
						if (!(this.precpred(this._ctx, 7))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						this.state = 580;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===TomParser.SPACE) {
							{
							this.state = 579;
							this.match(TomParser.SPACE);
							}
						}

						this.state = 582;
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
						this.state = 584;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===TomParser.SPACE) {
							{
							this.state = 583;
							this.match(TomParser.SPACE);
							}
						}

						this.state = 586;
						this.expression(8);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_expression);
						this.state = 587;
						if (!(this.precpred(this._ctx, 6))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						this.state = 589;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===TomParser.SPACE) {
							{
							this.state = 588;
							this.match(TomParser.SPACE);
							}
						}

						this.state = 591;
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
						this.state = 593;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===TomParser.SPACE) {
							{
							this.state = 592;
							this.match(TomParser.SPACE);
							}
						}

						this.state = 595;
						this.expression(7);
						}
						break;
					}
					} 
				}
				this.state = 600;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,95,this._ctx);
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
		this.enterRule(_localctx, 58, TomParser.RULE_unaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 601;
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
			this.state = 602;
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
		this.enterRule(_localctx, 60, TomParser.RULE_arrayExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 604;
			this.match(TomParser.BRACKET_OPEN);
			this.state = 606;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,96,this._ctx) ) {
			case 1:
				{
				this.state = 605;
				this.match(TomParser.NEWLINE);
				}
				break;
			}
			this.state = 609;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,97,this._ctx) ) {
			case 1:
				{
				this.state = 608;
				this.match(TomParser.SPACE);
				}
				break;
			}
			this.state = 612;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,98,this._ctx) ) {
			case 1:
				{
				this.state = 611;
				this.match(TomParser.NEWLINE);
				}
				break;
			}
			this.state = 615;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral) | (1 << TomParser.ID) | (1 << TomParser.PLUS) | (1 << TomParser.MINUS) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.PAREN_OPEN) | (1 << TomParser.BRACKET_OPEN))) !== 0)) {
				{
				this.state = 614;
				this.expression(0);
				}
			}

			this.state = 630;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===TomParser.COMMA) {
				{
				{
				this.state = 617;
				this.match(TomParser.COMMA);
				this.state = 619;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,100,this._ctx) ) {
				case 1:
					{
					this.state = 618;
					this.match(TomParser.NEWLINE);
					}
					break;
				}
				this.state = 622;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 621;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 625;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.NEWLINE) {
					{
					this.state = 624;
					this.match(TomParser.NEWLINE);
					}
				}

				this.state = 627;
				this.expression(0);
				}
				}
				this.state = 632;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 634;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,104,this._ctx) ) {
			case 1:
				{
				this.state = 633;
				this.match(TomParser.NEWLINE);
				}
				break;
			}
			this.state = 637;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 636;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 640;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.NEWLINE) {
				{
				this.state = 639;
				this.match(TomParser.NEWLINE);
				}
			}

			this.state = 642;
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
		this.enterRule(_localctx, 62, TomParser.RULE_objectExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 644;
			this.match(TomParser.BRACE_OPEN);
			this.state = 646;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,107,this._ctx) ) {
			case 1:
				{
				this.state = 645;
				this.match(TomParser.SPACE);
				}
				break;
			}
			this.state = 649;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,108,this._ctx) ) {
			case 1:
				{
				this.state = 648;
				this.match(TomParser.NEWLINE);
				}
				break;
			}
			this.state = 652;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,109,this._ctx) ) {
			case 1:
				{
				this.state = 651;
				this.match(TomParser.SPACE);
				}
				break;
			}
			this.state = 655;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral))) !== 0)) {
				{
				this.state = 654;
				this.objectPairExpressionList();
				}
			}

			this.state = 658;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,111,this._ctx) ) {
			case 1:
				{
				this.state = 657;
				this.match(TomParser.SPACE);
				}
				break;
			}
			this.state = 661;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.NEWLINE) {
				{
				this.state = 660;
				this.match(TomParser.NEWLINE);
				}
			}

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
		this.enterRule(_localctx, 64, TomParser.RULE_objectPairExpressionList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 668;
			this.objectPairExpression();
			this.state = 685;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,118,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 670;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===TomParser.SPACE) {
						{
						this.state = 669;
						this.match(TomParser.SPACE);
						}
					}

					this.state = 672;
					this.match(TomParser.COMMA);
					this.state = 674;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,115,this._ctx) ) {
					case 1:
						{
						this.state = 673;
						this.match(TomParser.SPACE);
						}
						break;
					}
					this.state = 677;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===TomParser.NEWLINE) {
						{
						this.state = 676;
						this.match(TomParser.NEWLINE);
						}
					}

					this.state = 680;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===TomParser.SPACE) {
						{
						this.state = 679;
						this.match(TomParser.SPACE);
						}
					}

					this.state = 682;
					this.objectPairExpression();
					}
					} 
				}
				this.state = 687;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,118,this._ctx);
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
	
	public objectPairExpression(): ObjectPairExpressionContext {
		let _localctx: ObjectPairExpressionContext = new ObjectPairExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, TomParser.RULE_objectPairExpression);
		let _la: number;
		try {
			this.state = 708;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,123,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 688;
				this.literal();
				this.state = 690;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 689;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 692;
				this.match(TomParser.COLON);
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
				this.objectExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 698;
				this.literal();
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
				this.match(TomParser.COLON);
				this.state = 704;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 703;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 706;
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
	
	public lambdaExpression(): LambdaExpressionContext {
		let _localctx: LambdaExpressionContext = new LambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, TomParser.RULE_lambdaExpression);
		let _la: number;
		try {
			this.state = 741;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TomParser.PAREN_OPEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 710;
				this.match(TomParser.PAREN_OPEN);
				this.state = 712;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,124,this._ctx) ) {
				case 1:
					{
					this.state = 711;
					this.match(TomParser.SPACE);
					}
					break;
				}
				this.state = 715;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.ID) {
					{
					this.state = 714;
					this.formalParameterSequence();
					}
				}

				this.state = 718;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 717;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 720;
				this.match(TomParser.PAREN_CLOSE);
				this.state = 722;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 721;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 724;
				this.match(TomParser.ARROW);
				this.state = 726;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 725;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 728;
				this.type(0);
				}
				break;
			case TomParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 729;
				this.parameter();
				this.state = 731;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 730;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 733;
				this.match(TomParser.ARROW);
				this.state = 735;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===TomParser.SPACE) {
					{
					this.state = 734;
					this.match(TomParser.SPACE);
					}
				}

				this.state = 737;
				this.type(0);
				this.state = 739;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,131,this._ctx) ) {
				case 1:
					{
					this.state = 738;
					this.match(TomParser.QUESTION);
					}
					break;
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
	
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, TomParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 743;
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
		this.enterRule(_localctx, 72, TomParser.RULE_parenthesizedExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 745;
			this.match(TomParser.PAREN_OPEN);
			this.state = 747;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 746;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 749;
			this.expression(0);
			this.state = 751;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 750;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 753;
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
	
	public description(): DescriptionContext {
		let _localctx: DescriptionContext = new DescriptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, TomParser.RULE_description);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 755;
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
		this.enterRule(_localctx, 76, TomParser.RULE_descriptionLine);
		let _la: number;
		try {
			this.state = 771;
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
				this.state = 757;
				this.descriptionLineStart();
				this.state = 761;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral) | (1 << TomParser.ID) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.AT) | (1 << TomParser.MINUS) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.COLON) | (1 << TomParser.PERIOD) | (1 << TomParser.INLINE_TAG_START) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.BRACE_CLOSE))) !== 0)) {
					{
					{
					this.state = 758;
					this.descriptionLineElement();
					}
					}
					this.state = 763;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case TomParser.INLINE_TAG_START:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 764;
				this.inlineTag();
				this.state = 768;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral) | (1 << TomParser.ID) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.AT) | (1 << TomParser.MINUS) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.COLON) | (1 << TomParser.PERIOD) | (1 << TomParser.INLINE_TAG_START) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.BRACE_CLOSE))) !== 0)) {
					{
					{
					this.state = 765;
					this.descriptionLineElement();
					}
					}
					this.state = 770;
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
		this.enterRule(_localctx, 78, TomParser.RULE_descriptionLineStart);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 774;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===TomParser.SPACE) {
				{
				this.state = 773;
				this.match(TomParser.SPACE);
				}
			}

			this.state = 777; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 776;
					this.descriptionText();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 779; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,139,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			this.state = 786;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,141,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					this.state = 784;
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
						this.state = 781;
						this.descriptionText();
						}
						break;
					case TomParser.SPACE:
						{
						this.state = 782;
						this.match(TomParser.SPACE);
						}
						break;
					case TomParser.AT:
						{
						this.state = 783;
						this.match(TomParser.AT);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				this.state = 788;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,141,this._ctx);
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
		this.enterRule(_localctx, 80, TomParser.RULE_descriptionText);
		try {
			this.state = 798;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TomParser.TEXT_CONTENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 789;
				this.match(TomParser.TEXT_CONTENT);
				}
				break;
			case TomParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 790;
				this.match(TomParser.ID);
				}
				break;
			case TomParser.FORWARD_SLASH:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 791;
				this.match(TomParser.FORWARD_SLASH);
				}
				break;
			case TomParser.BRACE_OPEN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 792;
				this.match(TomParser.BRACE_OPEN);
				}
				break;
			case TomParser.BRACE_CLOSE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 793;
				this.match(TomParser.BRACE_CLOSE);
				}
				break;
			case TomParser.COLON:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 794;
				this.match(TomParser.COLON);
				}
				break;
			case TomParser.MINUS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 795;
				this.match(TomParser.MINUS);
				}
				break;
			case TomParser.PERIOD:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 796;
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
				this.state = 797;
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
		this.enterRule(_localctx, 82, TomParser.RULE_descriptionLineElement);
		try {
			this.state = 802;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TomParser.INLINE_TAG_START:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 800;
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
				this.state = 801;
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
		this.enterRule(_localctx, 84, TomParser.RULE_descriptionLineText);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 807; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 807;
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
						this.state = 804;
						this.descriptionText();
						}
						break;
					case TomParser.SPACE:
						{
						this.state = 805;
						this.match(TomParser.SPACE);
						}
						break;
					case TomParser.AT:
						{
						this.state = 806;
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
				this.state = 809; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,145,this._ctx);
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
		this.enterRule(_localctx, 86, TomParser.RULE_inlineTag);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 811;
			this.match(TomParser.INLINE_TAG_START);
			this.state = 812;
			this.inlineTagName();
			this.state = 813;
			this.match(TomParser.SPACE);
			this.state = 815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.NEWLINE) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.PERIOD) | (1 << TomParser.BRACE_OPEN))) !== 0)) {
				{
				this.state = 814;
				this.inlineTagBody();
				}
			}

			this.state = 817;
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
		this.enterRule(_localctx, 88, TomParser.RULE_inlineTagName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 819;
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
		this.enterRule(_localctx, 90, TomParser.RULE_inlineTagBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 822; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 821;
				this.braceBody();
				}
				}
				this.state = 824; 
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
		this.enterRule(_localctx, 92, TomParser.RULE_braceExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 826;
			this.match(TomParser.BRACE_OPEN);
			this.state = 830;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.NEWLINE) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.PERIOD) | (1 << TomParser.BRACE_OPEN))) !== 0)) {
				{
				{
				this.state = 827;
				this.braceBody();
				}
				}
				this.state = 832;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 833;
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
		this.enterRule(_localctx, 94, TomParser.RULE_braceBody);
		try {
			let _alt: number;
			this.state = 844;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TomParser.BRACE_OPEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 835;
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
				this.state = 836;
				this.braceText();
				this.state = 841;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,149,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 837;
						this.match(TomParser.NEWLINE);
						this.state = 838;
						this.braceText();
						}
						} 
					}
					this.state = 843;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,149,this._ctx);
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
		this.enterRule(_localctx, 96, TomParser.RULE_braceText);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 846;
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
	
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, TomParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 848;
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

		case 20:
			return this.arrayType_sempred(_localctx as ArrayTypeContext, predIndex);

		case 28:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);
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
			return this.precpred(this._ctx, 7);

		case 3:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03#\u0355\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04"+
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04"+
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#"+
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+"+
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x03\x02"+
		"\x03\x02\x03\x02\x05\x02j\n\x02\x03\x02\x03\x02\x05\x02n\n\x02\x03\x03"+
		"\x07\x03q\n\x03\f\x03\x0E\x03t\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03"+
		"\x05\x03\x05\x03\x05\x07\x05}\n\x05\f\x05\x0E\x05\x80\v\x05\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x91\n\x06\x03\x06\x03\x06"+
		"\x05\x06\x95\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x05\x06\xA7\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06"+
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xB3\n\x06\x03\x06\x03\x06\x05"+
		"\x06\xB7\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06"+
		"\xBF\n\x06\x03\x06\x03\x06\x05\x06\xC3\n\x06\x03\x06\x03\x06\x05\x06\xC7"+
		"\n\x06\x03\x06\x03\x06\x05\x06\xCB\n\x06\x03\x06\x03\x06\x03\x06\x03\x06"+
		"\x03\x06\x03\x06\x05\x06\xD3\n\x06\x03\x06\x03\x06\x05\x06\xD7\n\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x05\x06\xE3\n\x06\x03\x06\x03\x06\x05\x06\xE7\n\x06\x03\x06\x03\x06"+
		"\x05\x06\xEB\n\x06\x03\x06\x03\x06\x05\x06\xEF\n\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xF9\n\x06\x03\x06"+
		"\x03\x06\x05\x06\xFD\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0103"+
		"\n\x06\x03\x06\x03\x06\x05\x06\u0107\n\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x05\x06\u010F\n\x06\x03\x07\x03\x07\x03\x07\x03\b"+
		"\x03\b\x03\b\x05\b\u0117\n\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x06\n"+
		"\u011F\n\n\r\n\x0E\n\u0120\x03\n\x03\n\x03\n\x06\n\u0126\n\n\r\n\x0E\n"+
		"\u0127\x05\n\u012A\n\n\x03\v\x03\v\x05\v\u012E\n\v\x03\f\x03\f\x03\f\x03"+
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0139\n\f\x03\f\x03\f\x05\f\u013D"+
		"\n\f\x03\f\x03\f\x05\f\u0141\n\f\x03\f\x07\f\u0144\n\f\f\f\x0E\f\u0147"+
		"\v\f\x03\r\x03\r\x03\r\x03\x0E\x05\x0E\u014D\n\x0E\x03\x0E\x03\x0E\x05"+
		"\x0E\u0151\n\x0E\x03\x0E\x03\x0E\x05\x0E\u0155\n\x0E\x03\x0E\x03\x0E\x03"+
		"\x0F\x03\x0F\x05\x0F\u015B\n\x0F\x03\x0F\x03\x0F\x05\x0F\u015F\n\x0F\x03"+
		"\x0F\x06\x0F\u0162\n\x0F\r\x0F\x0E\x0F\u0163\x03\x10\x03\x10\x05\x10\u0168"+
		"\n\x10\x03\x11\x03\x11\x05\x11\u016C\n\x11\x03\x12\x03\x12\x05\x12\u0170"+
		"\n\x12\x03\x12\x03\x12\x05\x12\u0174\n\x12\x03\x12\x03\x12\x03\x13\x03"+
		"\x13\x05\x13\u017A\n\x13\x03\x13\x05\x13\u017D\n\x13\x03\x13\x05\x13\u0180"+
		"\n\x13\x03\x13\x03\x13\x05\x13\u0184\n\x13\x03\x13\x03\x13\x05\x13\u0188"+
		"\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\u018D\n\x13\x03\x13\x03\x13\x05"+
		"\x13\u0191\n\x13\x03\x13\x03\x13\x05\x13\u0195\n\x13\x03\x14\x03\x14\x03"+
		"\x14\x05\x14\u019A\n\x14\x03\x14\x07\x14\u019D\n\x14\f\x14\x0E\x14\u01A0"+
		"\v\x14\x03\x15\x03\x15\x05\x15\u01A4\n\x15\x03\x15\x03\x15\x05\x15\u01A8"+
		"\n\x15\x03\x15\x05\x15\u01AB\n\x15\x03\x16\x03\x16\x03\x16\x05\x16\u01B0"+
		"\n\x16\x03\x16\x05\x16\u01B3\n\x16\x03\x16\x05\x16\u01B6\n\x16\x03\x16"+
		"\x05\x16\u01B9\n\x16\x03\x16\x03\x16\x05\x16\u01BD\n\x16\x03\x16\x05\x16"+
		"\u01C0\n\x16\x03\x16\x05\x16\u01C3\n\x16\x03\x16\x07\x16\u01C6\n\x16\f"+
		"\x16\x0E\x16\u01C9\v\x16\x03\x16\x05\x16\u01CC\n\x16\x03\x16\x05\x16\u01CF"+
		"\n\x16\x03\x16\x05\x16\u01D2\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03"+
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01DD\n\x16\x03\x16\x03\x16"+
		"\x03\x16\x05\x16\u01E2\n\x16\x03\x16\x07\x16\u01E5\n\x16\f\x16\x0E\x16"+
		"\u01E8\v\x16\x03\x17\x03\x17\x05\x17\u01EC\n\x17\x03\x17\x05\x17\u01EF"+
		"\n\x17\x03\x17\x05\x17\u01F2\n\x17\x03\x17\x05\x17\u01F5\n\x17\x03\x17"+
		"\x05\x17\u01F8\n\x17\x03\x17\x05\x17\u01FB\n\x17\x03\x17\x05\x17\u01FE"+
		"\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x05\x18\u0204\n\x18\x03\x18\x03"+
		"\x18\x05\x18\u0208\n\x18\x03\x18\x05\x18\u020B\n\x18\x03\x18\x05\x18\u020E"+
		"\n\x18\x03\x18\x07\x18\u0211\n\x18\f\x18\x0E\x18\u0214\v\x18\x03\x19\x03"+
		"\x19\x05\x19\u0218\n\x19\x03\x19\x05\x19\u021B\n\x19\x03\x19\x03\x19\x05"+
		"\x19\u021F\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B"+
		"\x03\x1B\x06\x1B\u0229\n\x1B\r\x1B\x0E\x1B\u022A\x03\x1B\x03\x1B\x03\x1B"+
		"\x06\x1B\u0230\n\x1B\r\x1B\x0E\x1B\u0231\x05\x1B\u0234\n\x1B\x03\x1C\x03"+
		"\x1C\x05\x1C\u0238\n\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E"+
		"\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0243\n\x1E\x03\x1E\x03\x1E\x05\x1E\u0247"+
		"\n\x1E\x03\x1E\x03\x1E\x05\x1E\u024B\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05"+
		"\x1E\u0250\n\x1E\x03\x1E\x03\x1E\x05\x1E\u0254\n\x1E\x03\x1E\x07\x1E\u0257"+
		"\n\x1E\f\x1E\x0E\x1E\u025A\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x05"+
		" \u0261\n \x03 \x05 \u0264\n \x03 \x05 \u0267\n \x03 \x05 \u026A\n \x03"+
		" \x03 \x05 \u026E\n \x03 \x05 \u0271\n \x03 \x05 \u0274\n \x03 \x07 \u0277"+
		"\n \f \x0E \u027A\v \x03 \x05 \u027D\n \x03 \x05 \u0280\n \x03 \x05 \u0283"+
		"\n \x03 \x03 \x03!\x03!\x05!\u0289\n!\x03!\x05!\u028C\n!\x03!\x05!\u028F"+
		"\n!\x03!\x05!\u0292\n!\x03!\x05!\u0295\n!\x03!\x05!\u0298\n!\x03!\x05"+
		"!\u029B\n!\x03!\x03!\x03\"\x03\"\x05\"\u02A1\n\"\x03\"\x03\"\x05\"\u02A5"+
		"\n\"\x03\"\x05\"\u02A8\n\"\x03\"\x05\"\u02AB\n\"\x03\"\x07\"\u02AE\n\""+
		"\f\"\x0E\"\u02B1\v\"\x03#\x03#\x05#\u02B5\n#\x03#\x03#\x05#\u02B9\n#\x03"+
		"#\x03#\x03#\x03#\x05#\u02BF\n#\x03#\x03#\x05#\u02C3\n#\x03#\x03#\x05#"+
		"\u02C7\n#\x03$\x03$\x05$\u02CB\n$\x03$\x05$\u02CE\n$\x03$\x05$\u02D1\n"+
		"$\x03$\x03$\x05$\u02D5\n$\x03$\x03$\x05$\u02D9\n$\x03$\x03$\x03$\x05$"+
		"\u02DE\n$\x03$\x03$\x05$\u02E2\n$\x03$\x03$\x05$\u02E6\n$\x05$\u02E8\n"+
		"$\x03%\x03%\x03&\x03&\x05&\u02EE\n&\x03&\x03&\x05&\u02F2\n&\x03&\x03&"+
		"\x03\'\x03\'\x03(\x03(\x07(\u02FA\n(\f(\x0E(\u02FD\v(\x03(\x03(\x07(\u0301"+
		"\n(\f(\x0E(\u0304\v(\x05(\u0306\n(\x03)\x05)\u0309\n)\x03)\x06)\u030C"+
		"\n)\r)\x0E)\u030D\x03)\x03)\x03)\x07)\u0313\n)\f)\x0E)\u0316\v)\x03*\x03"+
		"*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u0321\n*\x03+\x03+\x05+\u0325"+
		"\n+\x03,\x03,\x03,\x06,\u032A\n,\r,\x0E,\u032B\x03-\x03-\x03-\x03-\x05"+
		"-\u0332\n-\x03-\x03-\x03.\x03.\x03/\x06/\u0339\n/\r/\x0E/\u033A\x030\x03"+
		"0\x070\u033F\n0\f0\x0E0\u0342\v0\x030\x030\x031\x031\x031\x031\x071\u034A"+
		"\n1\f1\x0E1\u034D\v1\x051\u034F\n1\x032\x032\x033\x033\x033\x02\x02\x05"+
		"\x16*:4\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12"+
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&"+
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02"+
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02"+
		"^\x02`\x02b\x02d\x02\x02\t\x03\x02\n\v\x03\x02\x17\x18\x04\x02\x10\x10"+
		"\x17\x17\x03\x02\x10\x11\x03\x02\x0E\x0F\x03\x02\x03\b\x05\x02\t\f\x11"+
		"\x11\x13\x13\u03D8\x02m\x03\x02\x02\x02\x04r\x03\x02\x02\x02\x06w\x03"+
		"\x02\x02\x02\by\x03\x02\x02\x02\n\u010E\x03\x02\x02\x02\f\u0110\x03\x02"+
		"\x02\x02\x0E\u0116\x03\x02\x02\x02\x10\u0118\x03\x02\x02\x02\x12\u0129"+
		"\x03\x02\x02\x02\x14\u012D\x03\x02\x02\x02\x16\u0138\x03\x02\x02\x02\x18"+
		"\u0148\x03\x02\x02\x02\x1A\u014C\x03\x02\x02\x02\x1C\u0158\x03\x02\x02"+
		"\x02\x1E\u0167\x03\x02\x02\x02 \u016B\x03\x02\x02\x02\"\u016D\x03\x02"+
		"\x02\x02$\u0194\x03\x02\x02\x02&\u0196\x03\x02\x02\x02(\u01A1\x03\x02"+
		"\x02\x02*\u01DC\x03\x02\x02\x02,\u01E9\x03\x02\x02\x02.\u0201\x03\x02"+
		"\x02\x020\u0215\x03\x02\x02\x022\u0222\x03\x02\x02\x024\u0233\x03\x02"+
		"\x02\x026\u0237\x03\x02\x02\x028\u0239\x03\x02\x02\x02:\u0242\x03\x02"+
		"\x02\x02<\u025B\x03\x02\x02\x02>\u025E\x03\x02\x02\x02@\u0286\x03\x02"+
		"\x02\x02B\u029E\x03\x02\x02\x02D\u02C6\x03\x02\x02\x02F\u02E7\x03\x02"+
		"\x02\x02H\u02E9\x03\x02\x02\x02J\u02EB\x03\x02\x02\x02L\u02F5\x03\x02"+
		"\x02\x02N\u0305\x03\x02\x02\x02P\u0308\x03\x02\x02\x02R\u0320\x03\x02"+
		"\x02\x02T\u0324\x03\x02\x02\x02V\u0329\x03\x02\x02\x02X\u032D\x03\x02"+
		"\x02\x02Z\u0335\x03\x02\x02\x02\\\u0338\x03\x02\x02\x02^\u033C\x03\x02"+
		"\x02\x02`\u034E\x03\x02\x02\x02b\u0350\x03\x02\x02\x02d\u0352\x03\x02"+
		"\x02\x02fn\x07\x02\x02\x03gi\x05\x04\x03\x02hj\x07\n\x02\x02ih\x03\x02"+
		"\x02\x02ij\x03\x02\x02\x02jk\x03\x02\x02\x02kl\x07\x02\x02\x03ln\x03\x02"+
		"\x02\x02mf\x03\x02\x02\x02mg\x03\x02\x02\x02n\x03\x03\x02\x02\x02oq\x05"+
		"\x06\x04\x02po\x03\x02\x02\x02qt\x03\x02\x02\x02rp\x03\x02\x02\x02rs\x03"+
		"\x02\x02\x02su\x03\x02\x02\x02tr\x03\x02\x02\x02uv\x05\b\x05\x02v\x05"+
		"\x03\x02\x02\x02wx\t\x02\x02\x02x\x07\x03\x02\x02\x02y~\x05\n\x06\x02"+
		"z{\x07\n\x02\x02{}\x05\n\x06\x02|z\x03\x02\x02\x02}\x80\x03\x02\x02\x02"+
		"~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\t\x03\x02\x02\x02\x80~\x03"+
		"\x02\x02\x02\x81\u010F\x05\f\x07\x02\x82\x83\x05\f\x07\x02\x83\x84\x07"+
		"\v\x02\x02\x84\x85\x07\x0F\x02\x02\x85\x86\x07\v\x02\x02\x86\x87\x05L"+
		"\'\x02\x87\u010F\x03\x02\x02\x02\x88\x89\x05\f\x07\x02\x89\x8A\x07\v\x02"+
		"\x02\x8A\x8B\x05\x0E\b\x02\x8B\u010F\x03\x02\x02\x02\x8C\x8D\x05\f\x07"+
		"\x02\x8D\x8E\x07\v\x02\x02\x8E\x90\x05\x0E\b\x02\x8F\x91\x07\v\x02\x02"+
		"\x90\x8F\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02"+
		"\x92\x94\x07\x15\x02\x02\x93\x95\x07\v\x02\x02\x94\x93\x03\x02\x02\x02"+
		"\x94\x95\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x97\x058\x1D\x02"+
		"\x97\u010F\x03\x02\x02\x02\x98\x99\x05\f\x07\x02\x99\x9A\x07\v\x02\x02"+
		"\x9A\x9B\x05\x0E\b\x02\x9B\x9C\x07\v\x02\x02\x9C\x9D\x07\x0F\x02\x02\x9D"+
		"\x9E\x07\v\x02\x02\x9E\x9F\x05L\'\x02\x9F\u010F\x03\x02\x02\x02\xA0\xA1"+
		"\x05\f\x07\x02\xA1\xA2\x07\v\x02\x02\xA2\xA3\x05\x0E\b\x02\xA3\xA4\x07"+
		"\v\x02\x02\xA4\xA6\x07\x15\x02\x02\xA5\xA7\x07\v\x02\x02\xA6\xA5\x03\x02"+
		"\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xA9\x058"+
		"\x1D\x02\xA9\xAA\x07\v\x02\x02\xAA\xAB\x07\x0F\x02\x02\xAB\xAC\x07\v\x02"+
		"\x02\xAC\xAD\x05L\'\x02\xAD\u010F\x03\x02\x02\x02\xAE\xAF\x05\f\x07\x02"+
		"\xAF\xB0\x07\v\x02\x02\xB0\xB2\x05\x0E\b\x02\xB1\xB3\x07\v\x02\x02\xB2"+
		"\xB1\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4"+
		"\xB6\x07\x12\x02\x02\xB5\xB7\x07\v\x02\x02\xB6\xB5\x03\x02\x02\x02\xB6"+
		"\xB7\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x05\x16\f\x02\xB9"+
		"\u010F\x03\x02\x02\x02\xBA\xBB\x05\f\x07\x02\xBB\xBC\x07\v\x02\x02\xBC"+
		"\xBE\x05\x0E\b\x02\xBD\xBF\x07\v\x02\x02\xBE\xBD\x03\x02\x02\x02\xBE\xBF"+
		"\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC2\x07\x12\x02\x02\xC1\xC3"+
		"\x07\v\x02\x02\xC2\xC1\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4"+
		"\x03\x02\x02\x02\xC4\xC6\x05\x16\f\x02\xC5\xC7\x07\v\x02\x02\xC6\xC5\x03"+
		"\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xCA\x07"+
		"\x15\x02\x02\xC9\xCB\x07\v\x02\x02\xCA\xC9\x03\x02\x02\x02\xCA\xCB\x03"+
		"\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCD\x058\x1D\x02\xCD\u010F\x03"+
		"\x02\x02\x02\xCE\xCF\x05\f\x07\x02\xCF\xD0\x07\v\x02\x02\xD0\xD2\x05\x0E"+
		"\b\x02\xD1\xD3\x07\v\x02\x02\xD2\xD1\x03\x02\x02\x02\xD2\xD3\x03\x02\x02"+
		"\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD6\x07\x12\x02\x02\xD5\xD7\x07\v\x02"+
		"\x02\xD6\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8\x03\x02\x02"+
		"\x02\xD8\xD9\x05\x16\f\x02\xD9\xDA\x07\v\x02\x02\xDA\xDB\x07\x0F\x02\x02"+
		"\xDB\xDC\x07\v\x02\x02\xDC\xDD\x05L\'\x02\xDD\u010F\x03\x02\x02\x02\xDE"+
		"\xDF\x05\f\x07\x02\xDF\xE0\x07\v\x02\x02\xE0\xE2\x05\x0E\b\x02\xE1\xE3"+
		"\x07\v\x02\x02\xE2\xE1\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE4"+
		"\x03\x02\x02\x02\xE4\xE6\x07\x12\x02\x02\xE5\xE7\x07\v\x02\x02\xE6\xE5"+
		"\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xEA"+
		"\x05\x16\f\x02\xE9\xEB\x07\v\x02\x02\xEA\xE9\x03\x02\x02\x02\xEA\xEB\x03"+
		"\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEE\x07\x15\x02\x02\xED\xEF\x07"+
		"\v\x02\x02\xEE\xED\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF0\x03"+
		"\x02\x02\x02\xF0\xF1\x058\x1D\x02\xF1\xF2\x07\v\x02\x02\xF2\xF3\x07\x0F"+
		"\x02\x02\xF3\xF4\x07\v\x02\x02\xF4\xF5\x05L\'\x02\xF5\u010F\x03\x02\x02"+
		"\x02\xF6\xF8\x05\f\x07\x02\xF7\xF9\x07\v\x02\x02\xF8\xF7\x03\x02\x02\x02"+
		"\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFC\x07\x12\x02\x02"+
		"\xFB\xFD\x07\v\x02\x02\xFC\xFB\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02"+
		"\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x05\x16\f\x02\xFF\u010F\x03\x02\x02\x02"+
		"\u0100\u0102\x05\f\x07\x02\u0101\u0103\x07\v\x02\x02\u0102\u0101\x03\x02"+
		"\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104"+
		"\u0106\x07\x12\x02\x02\u0105\u0107\x07\v\x02\x02\u0106\u0105\x03\x02\x02"+
		"\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u0109"+
		"\x05\x16\f\x02\u0109\u010A\x07\v\x02\x02\u010A\u010B\x07\x0F\x02\x02\u010B"+
		"\u010C\x07\v\x02\x02\u010C\u010D\x05L\'\x02\u010D\u010F\x03\x02\x02\x02"+
		"\u010E\x81\x03\x02\x02\x02\u010E\x82\x03\x02\x02\x02\u010E\x88\x03\x02"+
		"\x02\x02\u010E\x8C\x03\x02\x02\x02\u010E\x98\x03\x02\x02\x02\u010E\xA0"+
		"\x03\x02\x02\x02\u010E\xAE\x03\x02\x02\x02\u010E\xBA\x03\x02\x02\x02\u010E"+
		"\xCE\x03\x02\x02\x02\u010E\xDE\x03\x02\x02\x02\u010E\xF6\x03\x02\x02\x02"+
		"\u010E\u0100\x03\x02\x02\x02\u010F\v\x03\x02\x02\x02\u0110\u0111\x07\r"+
		"\x02\x02\u0111\u0112\x05d3\x02\u0112\r\x03\x02\x02\x02\u0113\u0117\x05"+
		"\x12\n\x02\u0114\u0117\x05\x10\t\x02\u0115\u0117\x05d3\x02\u0116\u0113"+
		"\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0115\x03\x02\x02\x02"+
		"\u0117\x0F\x03\x02\x02\x02\u0118\u0119\x05d3\x02\u0119\u011A\x07\x16\x02"+
		"\x02\u011A\x11\x03\x02\x02\x02\u011B\u011E\x05\x10\t\x02\u011C\u011D\x07"+
		"\x13\x02\x02\u011D\u011F\x05\x14\v\x02\u011E\u011C\x03\x02\x02\x02\u011F"+
		"\u0120\x03\x02\x02\x02\u0120\u011E\x03\x02\x02\x02\u0120\u0121\x03\x02"+
		"\x02\x02\u0121\u012A\x03\x02\x02\x02\u0122\u0125\x05d3\x02\u0123\u0124"+
		"\x07\x13\x02\x02\u0124\u0126\x05\x14\v\x02\u0125\u0123\x03\x02\x02\x02"+
		"\u0126\u0127\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03"+
		"\x02\x02\x02\u0128\u012A\x03\x02\x02\x02\u0129\u011B\x03\x02\x02\x02\u0129"+
		"\u0122\x03\x02\x02\x02\u012A\x13\x03\x02\x02\x02\u012B\u012E\x05\x10\t"+
		"\x02\u012C\u012E\x05d3\x02\u012D\u012B\x03\x02\x02\x02\u012D\u012C\x03"+
		"\x02\x02\x02\u012E\x15\x03\x02\x02\x02\u012F\u0130\b\f\x01\x02\u0130\u0139"+
		"\x05$\x13\x02\u0131\u0139\x05\x1A\x0E\x02\u0132\u0139\x05\x1E\x10\x02"+
		"\u0133\u0139\x05\"\x12\x02\u0134\u0139\x05\x18\r\x02\u0135\u0139\x05,"+
		"\x17\x02\u0136\u0139\x05*\x16\x02\u0137\u0139\x054\x1B\x02\u0138\u012F"+
		"\x03\x02\x02\x02\u0138\u0131\x03\x02\x02\x02\u0138\u0132\x03\x02\x02\x02"+
		"\u0138\u0133\x03\x02\x02\x02\u0138\u0134\x03\x02\x02\x02\u0138\u0135\x03"+
		"\x02\x02\x02\u0138\u0136\x03\x02\x02\x02\u0138\u0137\x03\x02\x02\x02\u0139"+
		"\u0145\x03\x02\x02\x02\u013A\u013C\f\v\x02\x02\u013B\u013D\x07\v\x02\x02"+
		"\u013C\u013B\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013E\x03"+
		"\x02\x02\x02\u013E\u0140\t\x03\x02\x02\u013F\u0141\x07\v\x02\x02\u0140"+
		"\u013F\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0142\x03\x02"+
		"\x02\x02\u0142\u0144\x05\x16\f\f\u0143\u013A\x03\x02\x02\x02\u0144\u0147"+
		"\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02"+
		"\u0146\x17\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02\u0148\u0149\t\x04"+
		"\x02\x02\u0149\u014A\x05\x1E\x10\x02\u014A\x19\x03\x02\x02\x02\u014B\u014D"+
		"\x05d3\x02\u014C\u014B\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D"+
		"\u014E\x03\x02\x02\x02\u014E\u0150\x07\"\x02\x02\u014F\u0151\x07\v\x02"+
		"\x02\u0150\u014F\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0152"+
		"\x03\x02\x02\x02\u0152\u0154\x05\x1C\x0F\x02\u0153\u0155\x07\v\x02\x02"+
		"\u0154\u0153\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0156\x03"+
		"\x02\x02\x02\u0156\u0157\x07#\x02\x02\u0157\x1B\x03\x02\x02\x02\u0158"+
		"\u015A\x05\x16\f\x02\u0159\u015B\x07\v\x02\x02\u015A\u0159\x03\x02\x02"+
		"\x02\u015A\u015B\x03\x02\x02\x02\u015B\u0161\x03\x02\x02\x02\u015C\u015E"+
		"\x07\x14\x02\x02\u015D\u015F\x07\v\x02\x02\u015E\u015D\x03\x02\x02\x02"+
		"\u015E\u015F\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0162\x05"+
		"\x16\f\x02\u0161\u015C\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163"+
		"\u0161\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\x1D\x03\x02\x02"+
		"\x02\u0165\u0168\x052\x1A\x02\u0166\u0168\x05 \x11\x02\u0167\u0165\x03"+
		"\x02\x02\x02\u0167\u0166\x03\x02\x02\x02\u0168\x1F\x03\x02\x02\x02\u0169"+
		"\u016C\x05d3\x02\u016A\u016C\x07\b\x02\x02\u016B\u0169\x03\x02\x02\x02"+
		"\u016B\u016A\x03\x02\x02\x02\u016C!\x03\x02\x02\x02\u016D\u016F\x07\x1E"+
		"\x02\x02\u016E\u0170\x07\v\x02\x02\u016F\u016E\x03\x02\x02\x02\u016F\u0170"+
		"\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0173\x05\x16\f\x02"+
		"\u0172\u0174\x07\v\x02\x02\u0173\u0172\x03\x02\x02\x02\u0173\u0174\x03"+
		"\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\u0176\x07\x1F\x02\x02\u0176"+
		"#\x03\x02\x02\x02\u0177\u0179\x07\x1E\x02\x02\u0178\u017A\x07\v\x02\x02"+
		"\u0179\u0178\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017C\x03"+
		"\x02\x02\x02\u017B\u017D\x05&\x14\x02\u017C\u017B\x03\x02\x02\x02\u017C"+
		"\u017D\x03\x02\x02\x02\u017D\u017F\x03\x02\x02\x02\u017E\u0180\x07\v\x02"+
		"\x02\u017F\u017E\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0181"+
		"\x03\x02\x02\x02\u0181\u0183\x07\x1F\x02\x02\u0182\u0184\x07\v\x02\x02"+
		"\u0183\u0182\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0185\x03"+
		"\x02\x02\x02\u0185\u0187\x07\x19\x02\x02\u0186\u0188\x07\v\x02\x02\u0187"+
		"\u0186\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u0189\x03\x02"+
		"\x02\x02\u0189\u0195\x05\x16\f\x02\u018A\u018C\x05(\x15\x02\u018B\u018D"+
		"\x07\v\x02\x02\u018C\u018B\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02"+
		"\u018D\u018E\x03\x02\x02\x02\u018E\u0190\x07\x19\x02\x02\u018F\u0191\x07"+
		"\v\x02\x02\u0190\u018F\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191"+
		"\u0192\x03\x02\x02\x02\u0192\u0193\x05\x16\f\x02\u0193\u0195\x03\x02\x02"+
		"\x02\u0194\u0177\x03\x02\x02\x02\u0194\u018A\x03\x02\x02\x02\u0195%\x03"+
		"\x02\x02\x02\u0196\u019E\x05(\x15\x02\u0197\u0199\x07\x14\x02\x02\u0198"+
		"\u019A\x07\v\x02\x02\u0199\u0198\x03\x02\x02\x02\u0199\u019A\x03\x02\x02"+
		"\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019D\x05(\x15\x02\u019C\u0197"+
		"\x03\x02\x02\x02\u019D\u01A0\x03\x02\x02\x02\u019E\u019C\x03\x02\x02\x02"+
		"\u019E\u019F\x03\x02\x02\x02\u019F\'\x03\x02\x02\x02\u01A0\u019E\x03\x02"+
		"\x02\x02\u01A1\u01AA\x05d3\x02\u01A2\u01A4\x07\v\x02\x02\u01A3\u01A2\x03"+
		"\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5"+
		"\u01A7\x07\x12\x02\x02\u01A6\u01A8\x07\v\x02\x02\u01A7\u01A6\x03\x02\x02"+
		"\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB"+
		"\x05\x16\f\x02\u01AA\u01A3\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02"+
		"\u01AB)\x03\x02\x02\x02\u01AC\u01AD\b\x16\x01\x02\u01AD\u01AF\x07 \x02"+
		"\x02\u01AE\u01B0\x07\n\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01AF\u01B0"+
		"\x03\x02\x02\x02\u01B0\u01B2\x03\x02\x02\x02\u01B1\u01B3\x07\v\x02\x02"+
		"\u01B2\u01B1\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B5\x03"+
		"\x02\x02\x02\u01B4\u01B6\x07\n\x02\x02\u01B5\u01B4\x03\x02\x02\x02\u01B5"+
		"\u01B6\x03\x02\x02\x02\u01B6\u01B8\x03\x02\x02\x02\u01B7\u01B9\x05\x16"+
		"\f\x02\u01B8\u01B7\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01C7"+
		"\x03\x02\x02\x02\u01BA\u01BC\x07\x14\x02\x02\u01BB\u01BD\x07\n\x02\x02"+
		"\u01BC\u01BB\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BF\x03"+
		"\x02\x02\x02\u01BE\u01C0\x07\v\x02\x02\u01BF\u01BE\x03\x02\x02\x02\u01BF"+
		"\u01C0\x03\x02\x02\x02\u01C0\u01C2\x03\x02\x02\x02\u01C1\u01C3\x07\n\x02"+
		"\x02\u01C2\u01C1\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C4"+
		"\x03\x02\x02\x02\u01C4\u01C6\x05\x16\f\x02\u01C5\u01BA\x03\x02\x02\x02"+
		"\u01C6\u01C9\x03\x02\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C8\x03"+
		"\x02\x02\x02\u01C8\u01CB\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01CA"+
		"\u01CC\x07\n\x02\x02\u01CB\u01CA\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02"+
		"\x02\u01CC\u01CE\x03\x02\x02\x02\u01CD\u01CF\x07\v\x02\x02\u01CE\u01CD"+
		"\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D1\x03\x02\x02\x02"+
		"\u01D0";
	private static readonly _serializedATNSegment1: string =
		"\u01D2\x07\n\x02\x02\u01D1\u01D0\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02"+
		"\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01DD\x07!\x02\x02\u01D4\u01D5"+
		"\x05d3\x02\u01D5\u01D6\x07 \x02\x02\u01D6\u01D7\x07!\x02\x02\u01D7\u01DD"+
		"\x03\x02\x02\x02\u01D8\u01D9\x05,\x17\x02\u01D9\u01DA\x07 \x02\x02\u01DA"+
		"\u01DB\x07!\x02\x02\u01DB\u01DD\x03\x02\x02\x02\u01DC\u01AC\x03\x02\x02"+
		"\x02\u01DC\u01D4\x03\x02\x02\x02\u01DC\u01D8\x03\x02\x02\x02\u01DD\u01E6"+
		"\x03\x02\x02\x02\u01DE\u01DF\f\x03\x02\x02\u01DF\u01E1\x07 \x02\x02\u01E0"+
		"\u01E2\x05\x16\f\x02\u01E1\u01E0\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02"+
		"\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E5\x07!\x02\x02\u01E4\u01DE"+
		"\x03\x02\x02\x02\u01E5\u01E8\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02"+
		"\u01E6\u01E7\x03\x02\x02\x02\u01E7+\x03\x02\x02\x02\u01E8\u01E6\x03\x02"+
		"\x02\x02\u01E9\u01EB\x07\x1C\x02\x02\u01EA\u01EC\x07\v\x02\x02\u01EB\u01EA"+
		"\x03\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01EE\x03\x02\x02\x02"+
		"\u01ED\u01EF\x07\n\x02\x02\u01EE\u01ED\x03\x02\x02\x02\u01EE\u01EF\x03"+
		"\x02\x02\x02\u01EF\u01F1\x03\x02\x02\x02\u01F0\u01F2\x07\v\x02\x02\u01F1"+
		"\u01F0\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F4\x03\x02"+
		"\x02\x02\u01F3\u01F5\x05.\x18\x02\u01F4\u01F3\x03\x02\x02\x02\u01F4\u01F5"+
		"\x03\x02\x02\x02\u01F5\u01F7\x03\x02\x02\x02\u01F6\u01F8\x07\v\x02\x02"+
		"\u01F7\u01F6\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\u01FA\x03"+
		"\x02\x02\x02\u01F9\u01FB\x07\n\x02\x02\u01FA\u01F9\x03\x02\x02\x02\u01FA"+
		"\u01FB\x03\x02\x02\x02\u01FB\u01FD\x03\x02\x02\x02\u01FC\u01FE\x07\v\x02"+
		"\x02\u01FD\u01FC\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE\u01FF"+
		"\x03\x02\x02\x02\u01FF\u0200\x07\x1D\x02\x02\u0200-\x03\x02\x02\x02\u0201"+
		"\u0203\x050\x19\x02\u0202\u0204\x07\v\x02\x02\u0203\u0202\x03\x02\x02"+
		"\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0212\x03\x02\x02\x02\u0205\u0207"+
		"\x07\x14\x02\x02\u0206\u0208\x07\v\x02\x02\u0207\u0206\x03\x02\x02\x02"+
		"\u0207\u0208\x03\x02\x02\x02\u0208\u020A\x03\x02\x02\x02\u0209\u020B\x07"+
		"\n\x02\x02\u020A\u0209\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B"+
		"\u020D\x03\x02\x02\x02\u020C\u020E\x07\v\x02\x02\u020D\u020C\x03\x02\x02"+
		"\x02\u020D\u020E\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020F\u0211"+
		"\x050\x19\x02\u0210\u0205\x03\x02\x02\x02\u0211\u0214\x03\x02\x02\x02"+
		"\u0212\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213/\x03\x02"+
		"\x02\x02\u0214\u0212\x03\x02\x02\x02\u0215\u0217\x05\x16\f\x02\u0216\u0218"+
		"\x07\x16\x02\x02\u0217\u0216\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02"+
		"\u0218\u021A\x03\x02\x02\x02\u0219\u021B\x07\v\x02\x02\u021A\u0219\x03"+
		"\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C"+
		"\u021E\x07\x12\x02\x02\u021D\u021F\x07\v\x02\x02\u021E\u021D\x03\x02\x02"+
		"\x02\u021E\u021F\x03\x02\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220\u0221"+
		"\x05\x16\f\x02\u02211\x03\x02\x02\x02\u0222\u0223\x05d3\x02\u0223\u0224"+
		"\x07\x16\x02\x02\u02243\x03\x02\x02\x02\u0225\u0228\x05d3\x02\u0226\u0227"+
		"\x07\x13\x02\x02\u0227\u0229\x056\x1C\x02\u0228\u0226\x03\x02\x02\x02"+
		"\u0229\u022A\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022A\u022B\x03"+
		"\x02\x02\x02\u022B\u0234\x03\x02\x02\x02\u022C\u022F\x052\x1A\x02\u022D"+
		"\u022E\x07\x13\x02\x02\u022E\u0230\x056\x1C\x02\u022F\u022D\x03\x02\x02"+
		"\x02\u0230\u0231\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0232"+
		"\x03\x02\x02\x02\u0232\u0234\x03\x02\x02\x02\u0233\u0225\x03\x02\x02\x02"+
		"\u0233\u022C\x03\x02\x02\x02\u02345\x03\x02\x02\x02\u0235\u0238\x05d3"+
		"\x02\u0236\u0238\x052\x1A\x02\u0237\u0235\x03\x02\x02\x02\u0237\u0236"+
		"\x03\x02\x02\x02\u02387\x03\x02\x02\x02\u0239\u023A\x05:\x1E\x02\u023A"+
		"9\x03\x02\x02\x02\u023B\u023C\b\x1E\x01\x02\u023C\u0243\x05<\x1F\x02\u023D"+
		"\u0243\x05> \x02\u023E\u0243\x05@!\x02\u023F\u0243\x05F$\x02\u0240\u0243"+
		"\x05H%\x02\u0241\u0243\x05J&\x02\u0242\u023B\x03\x02\x02\x02\u0242\u023D"+
		"\x03\x02\x02\x02\u0242\u023E\x03\x02\x02\x02\u0242\u023F\x03\x02\x02\x02"+
		"\u0242\u0240\x03\x02\x02\x02\u0242\u0241\x03\x02\x02\x02\u0243\u0258\x03"+
		"\x02\x02\x02\u0244\u0246\f\t\x02\x02\u0245\u0247\x07\v\x02\x02\u0246\u0245"+
		"\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247\u0248\x03\x02\x02\x02"+
		"\u0248\u024A\t\x05\x02\x02\u0249\u024B\x07\v\x02\x02\u024A\u0249\x03\x02"+
		"\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C"+
		"\u0257\x05:\x1E\n\u024D\u024F\f\b\x02\x02\u024E\u0250\x07\v\x02\x02\u024F"+
		"\u024E\x03\x02\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250\u0251\x03\x02"+
		"\x02\x02\u0251\u0253\t\x06\x02\x02\u0252\u0254\x07\v\x02\x02\u0253\u0252"+
		"\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254\u0255\x03\x02\x02\x02"+
		"\u0255\u0257\x05:\x1E\t\u0256\u0244\x03\x02\x02\x02\u0256\u024D\x03\x02"+
		"\x02\x02\u0257\u025A\x03\x02\x02\x02\u0258\u0256\x03\x02\x02\x02\u0258"+
		"\u0259\x03\x02\x02\x02\u0259;\x03\x02\x02\x02\u025A\u0258\x03\x02\x02"+
		"\x02\u025B\u025C\t\x06\x02\x02\u025C\u025D\x05:\x1E\x02\u025D=\x03\x02"+
		"\x02\x02\u025E\u0260\x07 \x02\x02\u025F\u0261\x07\n\x02\x02\u0260\u025F"+
		"\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261\u0263\x03\x02\x02\x02"+
		"\u0262\u0264\x07\v\x02\x02\u0263\u0262\x03\x02\x02\x02\u0263\u0264\x03"+
		"\x02\x02\x02\u0264\u0266\x03\x02\x02\x02\u0265\u0267\x07\n\x02\x02\u0266"+
		"\u0265\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267\u0269\x03\x02"+
		"\x02\x02\u0268\u026A\x05:\x1E\x02\u0269\u0268\x03\x02\x02\x02\u0269\u026A"+
		"\x03\x02\x02\x02\u026A\u0278\x03\x02\x02\x02\u026B\u026D\x07\x14\x02\x02"+
		"\u026C\u026E\x07\n\x02\x02\u026D\u026C\x03\x02\x02\x02\u026D\u026E\x03"+
		"\x02\x02\x02\u026E\u0270\x03\x02\x02\x02\u026F\u0271\x07\v\x02\x02\u0270"+
		"\u026F\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271\u0273\x03\x02"+
		"\x02\x02\u0272\u0274\x07\n\x02\x02\u0273\u0272\x03\x02\x02\x02\u0273\u0274"+
		"\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\u0277\x05:\x1E\x02"+
		"\u0276\u026B\x03\x02\x02\x02\u0277\u027A\x03\x02\x02\x02\u0278\u0276\x03"+
		"\x02\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279\u027C\x03\x02\x02\x02\u027A"+
		"\u0278\x03\x02\x02\x02\u027B\u027D\x07\n\x02\x02\u027C\u027B\x03\x02\x02"+
		"\x02\u027C\u027D\x03\x02\x02\x02\u027D\u027F\x03\x02\x02\x02\u027E\u0280"+
		"\x07\v\x02\x02\u027F\u027E\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02"+
		"\u0280\u0282\x03\x02\x02\x02\u0281\u0283\x07\n\x02\x02\u0282\u0281\x03"+
		"\x02\x02\x02\u0282\u0283\x03\x02\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284"+
		"\u0285\x07!\x02\x02\u0285?\x03\x02\x02\x02\u0286\u0288\x07\x1C\x02\x02"+
		"\u0287\u0289\x07\v\x02\x02\u0288\u0287\x03\x02\x02\x02\u0288\u0289\x03"+
		"\x02\x02\x02\u0289\u028B\x03\x02\x02\x02\u028A\u028C\x07\n\x02\x02\u028B"+
		"\u028A\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\u028E\x03\x02"+
		"\x02\x02\u028D\u028F\x07\v\x02\x02\u028E\u028D\x03\x02\x02\x02\u028E\u028F"+
		"\x03\x02\x02\x02\u028F\u0291\x03\x02\x02\x02\u0290\u0292\x05B\"\x02\u0291"+
		"\u0290\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292\u0294\x03\x02"+
		"\x02\x02\u0293\u0295\x07\v\x02\x02\u0294\u0293\x03\x02\x02\x02\u0294\u0295"+
		"\x03\x02\x02\x02\u0295\u0297\x03\x02\x02\x02\u0296\u0298\x07\n\x02\x02"+
		"\u0297\u0296\x03\x02\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298\u029A\x03"+
		"\x02\x02\x02\u0299\u029B\x07\v\x02\x02\u029A\u0299\x03\x02\x02\x02\u029A"+
		"\u029B\x03\x02\x02\x02\u029B\u029C\x03\x02\x02\x02\u029C\u029D\x07\x1D"+
		"\x02\x02\u029DA\x03\x02\x02\x02\u029E\u02AF\x05D#\x02\u029F\u02A1\x07"+
		"\v\x02\x02\u02A0\u029F\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1"+
		"\u02A2\x03\x02\x02\x02\u02A2\u02A4\x07\x14\x02\x02\u02A3\u02A5\x07\v\x02"+
		"\x02\u02A4\u02A3\x03\x02\x02\x02\u02A4\u02A5\x03\x02\x02\x02\u02A5\u02A7"+
		"\x03\x02\x02\x02\u02A6\u02A8\x07\n\x02\x02\u02A7\u02A6\x03\x02\x02\x02"+
		"\u02A7\u02A8\x03\x02\x02\x02\u02A8\u02AA\x03\x02\x02\x02\u02A9\u02AB\x07"+
		"\v\x02\x02\u02AA\u02A9\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB"+
		"\u02AC\x03\x02\x02\x02\u02AC\u02AE\x05D#\x02\u02AD\u02A0\x03\x02\x02\x02"+
		"\u02AE\u02B1\x03\x02\x02\x02\u02AF\u02AD\x03\x02\x02\x02\u02AF\u02B0\x03"+
		"\x02\x02\x02\u02B0C\x03\x02\x02\x02\u02B1\u02AF\x03\x02\x02\x02\u02B2"+
		"\u02B4\x05H%\x02\u02B3\u02B5\x07\v\x02\x02\u02B4\u02B3\x03\x02\x02\x02"+
		"\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02B8\x07"+
		"\x12\x02\x02\u02B7\u02B9\x07\v\x02\x02\u02B8\u02B7\x03\x02\x02\x02\u02B8"+
		"\u02B9\x03\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02BB\x05@!\x02"+
		"\u02BB\u02C7\x03\x02\x02\x02\u02BC\u02BE\x05H%\x02\u02BD\u02BF\x07\v\x02"+
		"\x02\u02BE\u02BD\x03\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF\u02C0"+
		"\x03\x02\x02\x02\u02C0\u02C2\x07\x12\x02\x02\u02C1\u02C3\x07\v\x02\x02"+
		"\u02C2\u02C1\x03\x02\x02\x02\u02C2\u02C3\x03\x02\x02\x02\u02C3\u02C4\x03"+
		"\x02\x02\x02\u02C4\u02C5\x05H%\x02\u02C5\u02C7\x03\x02\x02\x02\u02C6\u02B2"+
		"\x03\x02\x02\x02\u02C6\u02BC\x03\x02\x02\x02\u02C7E\x03\x02\x02\x02\u02C8"+
		"\u02CA\x07\x1E\x02\x02\u02C9\u02CB\x07\v\x02\x02\u02CA\u02C9\x03\x02\x02"+
		"\x02\u02CA\u02CB\x03\x02\x02\x02\u02CB\u02CD\x03\x02\x02\x02\u02CC\u02CE"+
		"\x05&\x14\x02\u02CD\u02CC\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02"+
		"\u02CE\u02D0\x03\x02\x02\x02\u02CF\u02D1\x07\v\x02\x02\u02D0\u02CF\x03"+
		"\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2"+
		"\u02D4\x07\x1F\x02\x02\u02D3\u02D5\x07\v\x02\x02\u02D4\u02D3\x03\x02\x02"+
		"\x02\u02D4\u02D5\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02\u02D6\u02D8"+
		"\x07\x19\x02\x02\u02D7\u02D9\x07\v\x02\x02\u02D8\u02D7\x03\x02\x02\x02"+
		"\u02D8\u02D9\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA\u02E8\x05"+
		"\x16\f\x02\u02DB\u02DD\x05(\x15\x02\u02DC\u02DE\x07\v\x02\x02\u02DD\u02DC"+
		"\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02"+
		"\u02DF\u02E1\x07\x19\x02\x02\u02E0\u02E2\x07\v\x02\x02\u02E1\u02E0\x03"+
		"\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2\u02E3\x03\x02\x02\x02\u02E3"+
		"\u02E5\x05\x16\f\x02\u02E4\u02E6\x07\x16\x02\x02\u02E5\u02E4\x03\x02\x02"+
		"\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02E8\x03\x02\x02\x02\u02E7\u02C8"+
		"\x03\x02\x02\x02\u02E7\u02DB\x03\x02\x02\x02\u02E8G\x03\x02\x02\x02\u02E9"+
		"\u02EA\t\x07\x02\x02\u02EAI\x03\x02\x02\x02\u02EB\u02ED\x07\x1E\x02\x02"+
		"\u02EC\u02EE\x07\v\x02\x02\u02ED\u02EC\x03\x02\x02\x02\u02ED\u02EE\x03"+
		"\x02\x02\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF\u02F1\x05:\x1E\x02\u02F0"+
		"\u02F2\x07\v\x02\x02\u02F1\u02F0\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02"+
		"\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3\u02F4\x07\x1F\x02\x02\u02F4K\x03"+
		"\x02\x02\x02\u02F5\u02F6\x05N(\x02\u02F6M\x03\x02\x02\x02\u02F7\u02FB"+
		"\x05P)\x02\u02F8\u02FA\x05T+\x02\u02F9\u02F8\x03\x02\x02\x02\u02FA\u02FD"+
		"\x03\x02\x02\x02\u02FB\u02F9\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02"+
		"\u02FC\u0306\x03\x02\x02\x02\u02FD\u02FB\x03\x02\x02\x02\u02FE\u0302\x05"+
		"X-\x02\u02FF\u0301\x05T+\x02\u0300\u02FF\x03\x02\x02\x02\u0301\u0304\x03"+
		"\x02\x02\x02\u0302\u0300\x03\x02\x02\x02\u0302\u0303\x03\x02\x02\x02\u0303"+
		"\u0306\x03\x02\x02\x02\u0304\u0302\x03\x02\x02\x02\u0305\u02F7\x03\x02"+
		"\x02\x02\u0305\u02FE\x03\x02\x02\x02\u0306O\x03\x02\x02\x02\u0307\u0309"+
		"\x07\v\x02\x02\u0308\u0307\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02"+
		"\u0309\u030B\x03\x02\x02\x02\u030A\u030C\x05R*\x02\u030B\u030A\x03\x02"+
		"\x02\x02\u030C\u030D\x03\x02\x02\x02\u030D\u030B\x03\x02\x02\x02\u030D"+
		"\u030E\x03\x02\x02\x02\u030E\u0314\x03\x02\x02\x02\u030F\u0313\x05R*\x02"+
		"\u0310\u0313\x07\v\x02\x02\u0311\u0313\x07\r\x02\x02\u0312\u030F\x03\x02"+
		"\x02\x02\u0312\u0310\x03\x02\x02\x02\u0312\u0311\x03\x02\x02\x02\u0313"+
		"\u0316\x03\x02\x02\x02\u0314\u0312\x03\x02\x02\x02\u0314\u0315\x03\x02"+
		"\x02\x02\u0315Q\x03\x02\x02\x02\u0316\u0314\x03\x02\x02\x02\u0317\u0321"+
		"\x07\f\x02\x02\u0318\u0321\x07\t\x02\x02\u0319\u0321\x07\x11\x02\x02\u031A"+
		"\u0321\x07\x1C\x02\x02\u031B\u0321\x07\x1D\x02\x02\u031C\u0321\x07\x12"+
		"\x02\x02\u031D\u0321\x07\x0F\x02\x02\u031E\u0321\x07\x13\x02\x02\u031F"+
		"\u0321\x05H%\x02\u0320\u0317\x03\x02\x02\x02\u0320\u0318\x03\x02\x02\x02"+
		"\u0320\u0319\x03\x02\x02\x02\u0320\u031A\x03\x02\x02\x02\u0320\u031B\x03"+
		"\x02\x02\x02\u0320\u031C\x03\x02\x02\x02\u0320\u031D\x03\x02\x02\x02\u0320"+
		"\u031E\x03\x02\x02\x02\u0320\u031F\x03\x02\x02\x02\u0321S\x03\x02\x02"+
		"\x02\u0322\u0325\x05X-\x02\u0323\u0325\x05V,\x02\u0324\u0322\x03\x02\x02"+
		"\x02\u0324\u0323\x03\x02\x02\x02\u0325U\x03\x02\x02\x02\u0326\u032A\x05"+
		"R*\x02\u0327\u032A\x07\v\x02\x02\u0328\u032A\x07\r\x02\x02\u0329\u0326"+
		"\x03\x02\x02\x02\u0329\u0327\x03\x02\x02\x02\u0329\u0328\x03\x02\x02\x02"+
		"\u032A\u032B\x03\x02\x02\x02\u032B\u0329\x03\x02\x02\x02\u032B\u032C\x03"+
		"\x02\x02\x02\u032CW\x03\x02\x02\x02\u032D\u032E\x07\x1B\x02\x02\u032E"+
		"\u032F\x05Z.\x02\u032F\u0331\x07\v\x02\x02\u0330\u0332\x05\\/\x02\u0331"+
		"\u0330\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332\u0333\x03\x02"+
		"\x02\x02\u0333\u0334\x07\x1D\x02\x02\u0334Y\x03\x02\x02\x02\u0335\u0336"+
		"\x05d3\x02\u0336[\x03\x02\x02\x02\u0337\u0339\x05`1\x02\u0338\u0337\x03"+
		"\x02\x02\x02\u0339\u033A\x03\x02\x02\x02\u033A\u0338\x03\x02\x02\x02\u033A"+
		"\u033B\x03\x02\x02\x02\u033B]\x03\x02\x02\x02\u033C\u0340\x07\x1C\x02"+
		"\x02\u033D\u033F\x05`1\x02\u033E\u033D\x03\x02\x02\x02\u033F\u0342\x03"+
		"\x02\x02\x02\u0340\u033E\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02\u0341"+
		"\u0343\x03\x02\x02\x02\u0342\u0340\x03\x02\x02\x02\u0343\u0344\x07\x1D"+
		"\x02\x02\u0344_\x03\x02\x02\x02\u0345\u034F\x05^0\x02\u0346\u034B\x05"+
		"b2\x02\u0347\u0348\x07\n\x02\x02\u0348\u034A\x05b2\x02\u0349\u0347\x03"+
		"\x02\x02\x02\u034A\u034D\x03\x02\x02\x02\u034B\u0349\x03\x02\x02\x02\u034B"+
		"\u034C\x03\x02\x02\x02\u034C\u034F\x03\x02\x02\x02\u034D\u034B\x03\x02"+
		"\x02\x02\u034E\u0345\x03\x02\x02\x02\u034E\u0346\x03\x02\x02\x02\u034F"+
		"a\x03\x02\x02\x02\u0350\u0351\t\b\x02\x02\u0351c\x03\x02\x02\x02\u0352"+
		"\u0353\x07\t\x02\x02\u0353e\x03\x02\x02\x02\x99imr~\x90\x94\xA6\xB2\xB6"+
		"\xBE\xC2\xC6\xCA\xD2\xD6\xE2\xE6\xEA\xEE\xF8\xFC\u0102\u0106\u010E\u0116"+
		"\u0120\u0127\u0129\u012D\u0138\u013C\u0140\u0145\u014C\u0150\u0154\u015A"+
		"\u015E\u0163\u0167\u016B\u016F\u0173\u0179\u017C\u017F\u0183\u0187\u018C"+
		"\u0190\u0194\u0199\u019E\u01A3\u01A7\u01AA\u01AF\u01B2\u01B5\u01B8\u01BC"+
		"\u01BF\u01C2\u01C7\u01CB\u01CE\u01D1\u01DC\u01E1\u01E6\u01EB\u01EE\u01F1"+
		"\u01F4\u01F7\u01FA\u01FD\u0203\u0207\u020A\u020D\u0212\u0217\u021A\u021E"+
		"\u022A\u0231\u0233\u0237\u0242\u0246\u024A\u024F\u0253\u0256\u0258\u0260"+
		"\u0263\u0266\u0269\u026D\u0270\u0273\u0278\u027C\u027F\u0282\u0288\u028B"+
		"\u028E\u0291\u0294\u0297\u029A\u02A0\u02A4\u02A7\u02AA\u02AF\u02B4\u02B8"+
		"\u02BE\u02C2\u02C6\u02CA\u02CD\u02D0\u02D4\u02D8\u02DD\u02E1\u02E5\u02E7"+
		"\u02ED\u02F1\u02FB\u0302\u0305\u0308\u030D\u0312\u0314\u0320\u0324\u0329"+
		"\u032B\u0331\u033A\u0340\u034B\u034E";
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
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
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
	public parenthesizedType(): ParenthesizedTypeContext | undefined {
		return this.tryGetRuleContext(0, ParenthesizedTypeContext);
	}
	public unaryType(): UnaryTypeContext | undefined {
		return this.tryGetRuleContext(0, UnaryTypeContext);
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


export class UnaryTypeContext extends ParserRuleContext {
	public primaryType(): PrimaryTypeContext {
		return this.getRuleContext(0, PrimaryTypeContext);
	}
	public AMP(): TerminalNode | undefined { return this.tryGetToken(TomParser.AMP, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(TomParser.STAR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_unaryType; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterUnaryType) listener.enterUnaryType(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitUnaryType) listener.exitUnaryType(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitUnaryType) return visitor.visitUnaryType(this);
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
	public optionalType(): OptionalTypeContext | undefined {
		return this.tryGetRuleContext(0, OptionalTypeContext);
	}
	public identifierOrKeyword(): IdentifierOrKeywordContext | undefined {
		return this.tryGetRuleContext(0, IdentifierOrKeywordContext);
	}
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


export class IdentifierOrKeywordContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(TomParser.NullLiteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_identifierOrKeyword; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterIdentifierOrKeyword) listener.enterIdentifierOrKeyword(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitIdentifierOrKeyword) listener.exitIdentifierOrKeyword(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitIdentifierOrKeyword) return visitor.visitIdentifierOrKeyword(this);
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
	public formalParameterSequence(): FormalParameterSequenceContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterSequenceContext);
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
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.NEWLINE);
		} else {
			return this.getToken(TomParser.NEWLINE, i);
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
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
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
	public optionalTypeOrIdentifer(): OptionalTypeOrIdentiferContext[];
	public optionalTypeOrIdentifer(i: number): OptionalTypeOrIdentiferContext;
	public optionalTypeOrIdentifer(i?: number): OptionalTypeOrIdentiferContext | OptionalTypeOrIdentiferContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionalTypeOrIdentiferContext);
		} else {
			return this.getRuleContext(i, OptionalTypeOrIdentiferContext);
		}
	}
	public optionalType(): OptionalTypeContext | undefined {
		return this.tryGetRuleContext(0, OptionalTypeContext);
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


export class OptionalTypeOrIdentiferContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public optionalType(): OptionalTypeContext | undefined {
		return this.tryGetRuleContext(0, OptionalTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_optionalTypeOrIdentifer; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterOptionalTypeOrIdentifer) listener.enterOptionalTypeOrIdentifer(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitOptionalTypeOrIdentifer) listener.exitOptionalTypeOrIdentifer(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitOptionalTypeOrIdentifer) return visitor.visitOptionalTypeOrIdentifer(this);
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
	public lambdaExpression(): LambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaExpressionContext);
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
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TomParser.NEWLINE);
		} else {
			return this.getToken(TomParser.NEWLINE, i);
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
	public objectPairExpression(): ObjectPairExpressionContext[];
	public objectPairExpression(i: number): ObjectPairExpressionContext;
	public objectPairExpression(i?: number): ObjectPairExpressionContext | ObjectPairExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectPairExpressionContext);
		} else {
			return this.getRuleContext(i, ObjectPairExpressionContext);
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


export class ObjectPairExpressionContext extends ParserRuleContext {
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
	@Override public get ruleIndex(): number { return TomParser.RULE_objectPairExpression; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterObjectPairExpression) listener.enterObjectPairExpression(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitObjectPairExpression) listener.exitObjectPairExpression(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitObjectPairExpression) return visitor.visitObjectPairExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class LambdaExpressionContext extends ParserRuleContext {
	public PAREN_OPEN(): TerminalNode | undefined { return this.tryGetToken(TomParser.PAREN_OPEN, 0); }
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
	public formalParameterSequence(): FormalParameterSequenceContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterSequenceContext);
	}
	public parameter(): ParameterContext | undefined {
		return this.tryGetRuleContext(0, ParameterContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(TomParser.QUESTION, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return TomParser.RULE_lambdaExpression; }
	@Override
	public enterRule(listener: TomParserListener): void {
		if (listener.enterLambdaExpression) listener.enterLambdaExpression(this);
	}
	@Override
	public exitRule(listener: TomParserListener): void {
		if (listener.exitLambdaExpression) listener.exitLambdaExpression(this);
	}
	@Override
	public accept<Result>(visitor: TomParserVisitor<Result>): Result {
		if (visitor.visitLambdaExpression) return visitor.visitLambdaExpression(this);
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


