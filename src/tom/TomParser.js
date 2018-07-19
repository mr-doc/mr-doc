"use strict";
// Generated from TomParser.g4 by ANTLR 4.6-SNAPSHOT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const Decorators_1 = require("antlr4ts/Decorators");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Decorators_2 = require("antlr4ts/Decorators");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class TomParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(TomParser._ATN, this);
    }
    get vocabulary() {
        return TomParser.VOCABULARY;
    }
    get grammarFileName() { return "TomParser.g4"; }
    get ruleNames() { return TomParser.ruleNames; }
    get serializedATN() { return TomParser._serializedATN; }
    documentation() {
        let _localctx = new DocumentationContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, TomParser.RULE_documentation);
        let _la;
        try {
            this.state = 103;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.EOF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 96;
                        this.match(TomParser.EOF);
                    }
                    break;
                case TomParser.NEWLINE:
                case TomParser.SPACE:
                case TomParser.AT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 97;
                        this.body();
                        this.state = 99;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.NEWLINE) {
                            {
                                this.state = 98;
                                this.match(TomParser.NEWLINE);
                            }
                        }
                        this.state = 101;
                        this.match(TomParser.EOF);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    body() {
        let _localctx = new BodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, TomParser.RULE_body);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 108;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TomParser.NEWLINE || _la === TomParser.SPACE) {
                    {
                        {
                            this.state = 105;
                            this.whitespace();
                        }
                    }
                    this.state = 110;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 111;
                this.annotations();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    whitespace() {
        let _localctx = new WhitespaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, TomParser.RULE_whitespace);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 113;
                _la = this._input.LA(1);
                if (!(_la === TomParser.NEWLINE || _la === TomParser.SPACE)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    annotations() {
        let _localctx = new AnnotationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, TomParser.RULE_annotations);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 115;
                this.tag();
                this.state = 120;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 116;
                                this.match(TomParser.NEWLINE);
                                this.state = 117;
                                this.tag();
                            }
                        }
                    }
                    this.state = 122;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    tag() {
        let _localctx = new TagContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, TomParser.RULE_tag);
        let _la;
        try {
            this.state = 264;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 123;
                        this.tagName();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 124;
                        this.tagName();
                        this.state = 125;
                        this.match(TomParser.SPACE);
                        this.state = 126;
                        this.match(TomParser.MINUS);
                        this.state = 127;
                        this.match(TomParser.SPACE);
                        this.state = 128;
                        this.description();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 130;
                        this.tagName();
                        this.state = 131;
                        this.match(TomParser.SPACE);
                        this.state = 132;
                        this.tagID();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 134;
                        this.tagName();
                        this.state = 135;
                        this.match(TomParser.SPACE);
                        this.state = 136;
                        this.tagID();
                        this.state = 138;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 137;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 140;
                        this.match(TomParser.EQUAL);
                        this.state = 142;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 141;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 144;
                        this.value();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 146;
                        this.tagName();
                        this.state = 147;
                        this.match(TomParser.SPACE);
                        this.state = 148;
                        this.tagID();
                        this.state = 149;
                        this.match(TomParser.SPACE);
                        this.state = 150;
                        this.match(TomParser.MINUS);
                        this.state = 151;
                        this.match(TomParser.SPACE);
                        this.state = 152;
                        this.description();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
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
                        this.match(TomParser.EQUAL);
                        this.state = 160;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 159;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 162;
                        this.value();
                        this.state = 163;
                        this.match(TomParser.SPACE);
                        this.state = 164;
                        this.match(TomParser.MINUS);
                        this.state = 165;
                        this.match(TomParser.SPACE);
                        this.state = 166;
                        this.description();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 168;
                        this.tagName();
                        this.state = 169;
                        this.match(TomParser.SPACE);
                        this.state = 170;
                        this.tagID();
                        this.state = 172;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 171;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 174;
                        this.match(TomParser.COLON);
                        this.state = 176;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 175;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 178;
                        this.type(0);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 180;
                        this.tagName();
                        this.state = 181;
                        this.match(TomParser.SPACE);
                        this.state = 182;
                        this.tagID();
                        this.state = 184;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 183;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 186;
                        this.match(TomParser.COLON);
                        this.state = 188;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 187;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 190;
                        this.type(0);
                        this.state = 192;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 191;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 194;
                        this.match(TomParser.EQUAL);
                        this.state = 196;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 195;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 198;
                        this.value();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 200;
                        this.tagName();
                        this.state = 201;
                        this.match(TomParser.SPACE);
                        this.state = 202;
                        this.tagID();
                        this.state = 204;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 203;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 206;
                        this.match(TomParser.COLON);
                        this.state = 208;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 207;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 210;
                        this.type(0);
                        this.state = 211;
                        this.match(TomParser.SPACE);
                        this.state = 212;
                        this.match(TomParser.MINUS);
                        this.state = 213;
                        this.match(TomParser.SPACE);
                        this.state = 214;
                        this.description();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 216;
                        this.tagName();
                        this.state = 217;
                        this.match(TomParser.SPACE);
                        this.state = 218;
                        this.tagID();
                        this.state = 220;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 219;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 222;
                        this.match(TomParser.COLON);
                        this.state = 224;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 223;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 226;
                        this.type(0);
                        this.state = 228;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 227;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 230;
                        this.match(TomParser.EQUAL);
                        this.state = 232;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 231;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 234;
                        this.value();
                        this.state = 235;
                        this.match(TomParser.SPACE);
                        this.state = 236;
                        this.match(TomParser.MINUS);
                        this.state = 237;
                        this.match(TomParser.SPACE);
                        this.state = 238;
                        this.description();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 240;
                        this.tagName();
                        this.state = 242;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 241;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 244;
                        this.match(TomParser.COLON);
                        this.state = 246;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 245;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 248;
                        this.type(0);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 250;
                        this.tagName();
                        this.state = 252;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 251;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 254;
                        this.match(TomParser.COLON);
                        this.state = 256;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 255;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 258;
                        this.type(0);
                        this.state = 259;
                        this.match(TomParser.SPACE);
                        this.state = 260;
                        this.match(TomParser.MINUS);
                        this.state = 261;
                        this.match(TomParser.SPACE);
                        this.state = 262;
                        this.description();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    tagName() {
        let _localctx = new TagNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, TomParser.RULE_tagName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 266;
                this.match(TomParser.AT);
                this.state = 267;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    tagID() {
        let _localctx = new TagIDContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, TomParser.RULE_tagID);
        try {
            this.state = 272;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 269;
                        this.propertyTagID();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 270;
                        this.optionalTagID();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 271;
                        this.identifier();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    optionalTagID() {
        let _localctx = new OptionalTagIDContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, TomParser.RULE_optionalTagID);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 274;
                this.identifier();
                this.state = 275;
                this.match(TomParser.QUESTION);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    propertyTagID() {
        let _localctx = new PropertyTagIDContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, TomParser.RULE_propertyTagID);
        let _la;
        try {
            this.state = 291;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 277;
                        this.optionalTagID();
                        this.state = 280;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 278;
                                    this.match(TomParser.PERIOD);
                                    this.state = 279;
                                    this.optionalTagOrIdentifier();
                                }
                            }
                            this.state = 282;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === TomParser.PERIOD);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 284;
                        this.identifier();
                        this.state = 287;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 285;
                                    this.match(TomParser.PERIOD);
                                    this.state = 286;
                                    this.optionalTagOrIdentifier();
                                }
                            }
                            this.state = 289;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === TomParser.PERIOD);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    optionalTagOrIdentifier() {
        let _localctx = new OptionalTagOrIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, TomParser.RULE_optionalTagOrIdentifier);
        try {
            this.state = 295;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 293;
                        this.optionalTagID();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 294;
                        this.identifier();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    type(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new TypeContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 20;
        this.enterRecursionRule(_localctx, 20, TomParser.RULE_type, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 301;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                    case 1:
                        {
                            this.state = 298;
                            this.lambdaType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 299;
                            this.tupleType();
                        }
                        break;
                    case 3:
                        {
                            this.state = 300;
                            this.primaryType();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 314;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new TypeContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_type);
                                this.state = 303;
                                if (!(this.precpred(this._ctx, 4)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                this.state = 305;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === TomParser.SPACE) {
                                    {
                                        this.state = 304;
                                        this.match(TomParser.SPACE);
                                    }
                                }
                                this.state = 307;
                                _la = this._input.LA(1);
                                if (!(_la === TomParser.AMP || _la === TomParser.PIPE)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 309;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === TomParser.SPACE) {
                                    {
                                        this.state = 308;
                                        this.match(TomParser.SPACE);
                                    }
                                }
                                this.state = 311;
                                this.type(5);
                            }
                        }
                    }
                    this.state = 316;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    tupleType() {
        let _localctx = new TupleTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, TomParser.RULE_tupleType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 318;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.ID) {
                    {
                        this.state = 317;
                        this.identifier();
                    }
                }
                this.state = 320;
                this.match(TomParser.LESSTHAN);
                this.state = 322;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 321;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 324;
                this.tupleTypeList();
                this.state = 326;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 325;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 328;
                this.match(TomParser.GREATERTHAN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    tupleTypeList() {
        let _localctx = new TupleTypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, TomParser.RULE_tupleTypeList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 330;
                this.type(0);
                this.state = 332;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 331;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 339;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 334;
                            this.match(TomParser.COMMA);
                            this.state = 336;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 335;
                                    this.match(TomParser.SPACE);
                                }
                            }
                            this.state = 338;
                            this.type(0);
                        }
                    }
                    this.state = 341;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === TomParser.COMMA);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    primaryType() {
        let _localctx = new PrimaryTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, TomParser.RULE_primaryType);
        try {
            this.state = 349;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 343;
                        this.parenthesizedType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 344;
                        this.objectType();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 345;
                        this.arrayType(0);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 346;
                        this.propertyType();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 347;
                        this.optionalType();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 348;
                        this.identifierOrKeyword();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    identifierOrKeyword() {
        let _localctx = new IdentifierOrKeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, TomParser.RULE_identifierOrKeyword);
        try {
            this.state = 353;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.ID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 351;
                        this.identifier();
                    }
                    break;
                case TomParser.NullLiteral:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 352;
                        this.match(TomParser.NullLiteral);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    parenthesizedType() {
        let _localctx = new ParenthesizedTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, TomParser.RULE_parenthesizedType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 355;
                this.match(TomParser.PAREN_OPEN);
                this.state = 357;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 356;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 359;
                this.type(0);
                this.state = 361;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 360;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 363;
                this.match(TomParser.PAREN_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    lambdaType() {
        let _localctx = new LambdaTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, TomParser.RULE_lambdaType);
        let _la;
        try {
            this.state = 393;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.PAREN_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 365;
                        this.match(TomParser.PAREN_OPEN);
                        this.state = 367;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 366;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 369;
                        this.formalParameterSequence();
                        this.state = 371;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 370;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 373;
                        this.match(TomParser.PAREN_CLOSE);
                        this.state = 375;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 374;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 377;
                        this.match(TomParser.ARROW);
                        this.state = 379;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 378;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 381;
                        this.type(0);
                    }
                    break;
                case TomParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 383;
                        this.parameter();
                        this.state = 385;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
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
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 388;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 391;
                        this.type(0);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    formalParameterSequence() {
        let _localctx = new FormalParameterSequenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, TomParser.RULE_formalParameterSequence);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 395;
                this.parameter();
                this.state = 403;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TomParser.COMMA) {
                    {
                        {
                            this.state = 396;
                            this.match(TomParser.COMMA);
                            this.state = 398;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 397;
                                    this.match(TomParser.SPACE);
                                }
                            }
                            this.state = 400;
                            this.parameter();
                        }
                    }
                    this.state = 405;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    parameter() {
        let _localctx = new ParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, TomParser.RULE_parameter);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 406;
                this.identifier();
                this.state = 415;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 54, this._ctx)) {
                    case 1:
                        {
                            this.state = 408;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 407;
                                    this.match(TomParser.SPACE);
                                }
                            }
                            this.state = 410;
                            this.match(TomParser.COLON);
                            this.state = 412;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 411;
                                    this.match(TomParser.SPACE);
                                }
                            }
                            this.state = 414;
                            this.type(0);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    arrayType(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ArrayTypeContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 38;
        this.enterRecursionRule(_localctx, 38, TomParser.RULE_arrayType, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 447;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TomParser.BRACKET_OPEN:
                        {
                            this.state = 418;
                            this.match(TomParser.BRACKET_OPEN);
                            this.state = 420;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 419;
                                        this.match(TomParser.SPACE);
                                    }
                                    break;
                            }
                            this.state = 423;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (TomParser.NullLiteral - 6)) | (1 << (TomParser.ID - 6)) | (1 << (TomParser.BRACE_OPEN - 6)) | (1 << (TomParser.PAREN_OPEN - 6)) | (1 << (TomParser.BRACKET_OPEN - 6)) | (1 << (TomParser.LESSTHAN - 6)))) !== 0)) {
                                {
                                    this.state = 422;
                                    this.type(0);
                                }
                            }
                            this.state = 432;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === TomParser.COMMA) {
                                {
                                    {
                                        this.state = 425;
                                        this.match(TomParser.COMMA);
                                        this.state = 427;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 426;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 429;
                                        this.type(0);
                                    }
                                }
                                this.state = 434;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 436;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 435;
                                    this.match(TomParser.SPACE);
                                }
                            }
                            this.state = 438;
                            this.match(TomParser.BRACKET_CLOSE);
                        }
                        break;
                    case TomParser.ID:
                        {
                            this.state = 439;
                            this.identifier();
                            this.state = 440;
                            this.match(TomParser.BRACKET_OPEN);
                            this.state = 441;
                            this.match(TomParser.BRACKET_CLOSE);
                        }
                        break;
                    case TomParser.BRACE_OPEN:
                        {
                            this.state = 443;
                            this.objectType();
                            this.state = 444;
                            this.match(TomParser.BRACKET_OPEN);
                            this.state = 445;
                            this.match(TomParser.BRACKET_CLOSE);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 457;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ArrayTypeContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_arrayType);
                                this.state = 449;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 450;
                                this.match(TomParser.BRACKET_OPEN);
                                this.state = 452;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (TomParser.NullLiteral - 6)) | (1 << (TomParser.ID - 6)) | (1 << (TomParser.BRACE_OPEN - 6)) | (1 << (TomParser.PAREN_OPEN - 6)) | (1 << (TomParser.BRACKET_OPEN - 6)) | (1 << (TomParser.LESSTHAN - 6)))) !== 0)) {
                                    {
                                        this.state = 451;
                                        this.type(0);
                                    }
                                }
                                this.state = 454;
                                this.match(TomParser.BRACKET_CLOSE);
                            }
                        }
                    }
                    this.state = 459;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    objectType() {
        let _localctx = new ObjectTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, TomParser.RULE_objectType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 460;
                this.match(TomParser.BRACE_OPEN);
                this.state = 462;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                    case 1:
                        {
                            this.state = 461;
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 465;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                    case 1:
                        {
                            this.state = 464;
                            this.match(TomParser.NEWLINE);
                        }
                        break;
                }
                this.state = 468;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 65, this._ctx)) {
                    case 1:
                        {
                            this.state = 467;
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 471;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (TomParser.NullLiteral - 6)) | (1 << (TomParser.ID - 6)) | (1 << (TomParser.BRACE_OPEN - 6)) | (1 << (TomParser.PAREN_OPEN - 6)) | (1 << (TomParser.BRACKET_OPEN - 6)) | (1 << (TomParser.LESSTHAN - 6)))) !== 0)) {
                    {
                        this.state = 470;
                        this.objectPairTypeList();
                    }
                }
                this.state = 474;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 67, this._ctx)) {
                    case 1:
                        {
                            this.state = 473;
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 477;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.NEWLINE) {
                    {
                        this.state = 476;
                        this.match(TomParser.NEWLINE);
                    }
                }
                this.state = 480;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 479;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 482;
                this.match(TomParser.BRACE_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    objectPairTypeList() {
        let _localctx = new ObjectPairTypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, TomParser.RULE_objectPairTypeList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 484;
                this.objectPairType();
                this.state = 486;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
                    case 1:
                        {
                            this.state = 485;
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 501;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TomParser.COMMA) {
                    {
                        {
                            this.state = 488;
                            this.match(TomParser.COMMA);
                            this.state = 490;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 71, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 489;
                                        this.match(TomParser.SPACE);
                                    }
                                    break;
                            }
                            this.state = 493;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.NEWLINE) {
                                {
                                    this.state = 492;
                                    this.match(TomParser.NEWLINE);
                                }
                            }
                            this.state = 496;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 495;
                                    this.match(TomParser.SPACE);
                                }
                            }
                            this.state = 498;
                            this.objectPairType();
                        }
                    }
                    this.state = 503;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    objectPairType() {
        let _localctx = new ObjectPairTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, TomParser.RULE_objectPairType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 504;
                this.type(0);
                this.state = 506;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.QUESTION) {
                    {
                        this.state = 505;
                        this.match(TomParser.QUESTION);
                    }
                }
                this.state = 509;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 508;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 511;
                this.match(TomParser.COLON);
                this.state = 513;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 512;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 515;
                this.type(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    optionalType() {
        let _localctx = new OptionalTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, TomParser.RULE_optionalType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 517;
                this.identifier();
                this.state = 518;
                this.match(TomParser.QUESTION);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    propertyType() {
        let _localctx = new PropertyTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, TomParser.RULE_propertyType);
        try {
            let _alt;
            this.state = 534;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 80, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 520;
                        this.identifier();
                        this.state = 523;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 521;
                                            this.match(TomParser.PERIOD);
                                            this.state = 522;
                                            this.optionalTypeOrIdentifer();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 525;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 527;
                        this.optionalType();
                        this.state = 530;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 528;
                                            this.match(TomParser.PERIOD);
                                            this.state = 529;
                                            this.optionalTypeOrIdentifer();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 532;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    optionalTypeOrIdentifer() {
        let _localctx = new OptionalTypeOrIdentiferContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, TomParser.RULE_optionalTypeOrIdentifer);
        try {
            this.state = 538;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 81, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 536;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 537;
                        this.optionalType();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    value() {
        let _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, TomParser.RULE_value);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 540;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 54;
        this.enterRecursionRule(_localctx, 54, TomParser.RULE_expression, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 548;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TomParser.PLUS:
                    case TomParser.MINUS:
                        {
                            this.state = 543;
                            this.unaryExpression();
                        }
                        break;
                    case TomParser.BRACKET_OPEN:
                        {
                            this.state = 544;
                            this.arrayExpression();
                        }
                        break;
                    case TomParser.BRACE_OPEN:
                        {
                            this.state = 545;
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
                            this.state = 546;
                            this.literal();
                        }
                        break;
                    case TomParser.PAREN_OPEN:
                        {
                            this.state = 547;
                            this.parenthesizedExpression();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 570;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 568;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_expression);
                                        this.state = 550;
                                        if (!(this.precpred(this._ctx, 6)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        this.state = 552;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 551;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 554;
                                        _la = this._input.LA(1);
                                        if (!(_la === TomParser.STAR || _la === TomParser.FORWARD_SLASH)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 556;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 555;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 558;
                                        this.expression(7);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_expression);
                                        this.state = 559;
                                        if (!(this.precpred(this._ctx, 5)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        this.state = 561;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 560;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 563;
                                        _la = this._input.LA(1);
                                        if (!(_la === TomParser.PLUS || _la === TomParser.MINUS)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 565;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 564;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 567;
                                        this.expression(6);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 572;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    unaryExpression() {
        let _localctx = new UnaryExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, TomParser.RULE_unaryExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 573;
                _la = this._input.LA(1);
                if (!(_la === TomParser.PLUS || _la === TomParser.MINUS)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 574;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    arrayExpression() {
        let _localctx = new ArrayExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, TomParser.RULE_arrayExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 576;
                this.match(TomParser.BRACKET_OPEN);
                this.state = 578;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral) | (1 << TomParser.PLUS) | (1 << TomParser.MINUS) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.PAREN_OPEN) | (1 << TomParser.BRACKET_OPEN))) !== 0)) {
                    {
                        this.state = 577;
                        this.expression(0);
                    }
                }
                this.state = 587;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TomParser.COMMA) {
                    {
                        {
                            this.state = 580;
                            this.match(TomParser.COMMA);
                            this.state = 582;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 581;
                                    this.match(TomParser.SPACE);
                                }
                            }
                            this.state = 584;
                            this.expression(0);
                        }
                    }
                    this.state = 589;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 590;
                this.match(TomParser.BRACKET_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    objectExpression() {
        let _localctx = new ObjectExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, TomParser.RULE_objectExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 592;
                this.match(TomParser.BRACE_OPEN);
                this.state = 594;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 92, this._ctx)) {
                    case 1:
                        {
                            this.state = 593;
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 597;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
                    case 1:
                        {
                            this.state = 596;
                            this.match(TomParser.NEWLINE);
                        }
                        break;
                }
                this.state = 600;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 94, this._ctx)) {
                    case 1:
                        {
                            this.state = 599;
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 603;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral))) !== 0)) {
                    {
                        this.state = 602;
                        this.objectPairExpressionList();
                    }
                }
                this.state = 606;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
                    case 1:
                        {
                            this.state = 605;
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 609;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.NEWLINE) {
                    {
                        this.state = 608;
                        this.match(TomParser.NEWLINE);
                    }
                }
                this.state = 612;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 611;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 614;
                this.match(TomParser.BRACE_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    objectPairExpressionList() {
        let _localctx = new ObjectPairExpressionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, TomParser.RULE_objectPairExpressionList);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 616;
                this.objectPairExpression();
                this.state = 633;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 618;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === TomParser.SPACE) {
                                    {
                                        this.state = 617;
                                        this.match(TomParser.SPACE);
                                    }
                                }
                                this.state = 620;
                                this.match(TomParser.COMMA);
                                this.state = 622;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 100, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 621;
                                            this.match(TomParser.SPACE);
                                        }
                                        break;
                                }
                                this.state = 625;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === TomParser.NEWLINE) {
                                    {
                                        this.state = 624;
                                        this.match(TomParser.NEWLINE);
                                    }
                                }
                                this.state = 628;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === TomParser.SPACE) {
                                    {
                                        this.state = 627;
                                        this.match(TomParser.SPACE);
                                    }
                                }
                                this.state = 630;
                                this.objectPairExpression();
                            }
                        }
                    }
                    this.state = 635;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    objectPairExpression() {
        let _localctx = new ObjectPairExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, TomParser.RULE_objectPairExpression);
        let _la;
        try {
            this.state = 656;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 636;
                        this.literal();
                        this.state = 638;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 637;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 640;
                        this.match(TomParser.COLON);
                        this.state = 642;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 641;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 644;
                        this.objectExpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 646;
                        this.literal();
                        this.state = 648;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 647;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 650;
                        this.match(TomParser.COLON);
                        this.state = 652;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 651;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 654;
                        this.literal();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    literal() {
        let _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, TomParser.RULE_literal);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 658;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    parenthesizedExpression() {
        let _localctx = new ParenthesizedExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, TomParser.RULE_parenthesizedExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 660;
                this.match(TomParser.PAREN_OPEN);
                this.state = 662;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 661;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 664;
                this.expression(0);
                this.state = 666;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 665;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 668;
                this.match(TomParser.PAREN_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    description() {
        let _localctx = new DescriptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, TomParser.RULE_description);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 670;
                this.descriptionLine();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    descriptionLine() {
        let _localctx = new DescriptionLineContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, TomParser.RULE_descriptionLine);
        let _la;
        try {
            this.state = 686;
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
                        this.state = 672;
                        this.descriptionLineStart();
                        this.state = 676;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral) | (1 << TomParser.ID) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.AT) | (1 << TomParser.MINUS) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.COLON) | (1 << TomParser.PERIOD) | (1 << TomParser.INLINE_TAG_START) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.BRACE_CLOSE))) !== 0)) {
                            {
                                {
                                    this.state = 673;
                                    this.descriptionLineElement();
                                }
                            }
                            this.state = 678;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case TomParser.INLINE_TAG_START:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 679;
                        this.inlineTag();
                        this.state = 683;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral) | (1 << TomParser.ID) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.AT) | (1 << TomParser.MINUS) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.COLON) | (1 << TomParser.PERIOD) | (1 << TomParser.INLINE_TAG_START) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.BRACE_CLOSE))) !== 0)) {
                            {
                                {
                                    this.state = 680;
                                    this.descriptionLineElement();
                                }
                            }
                            this.state = 685;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    descriptionLineStart() {
        let _localctx = new DescriptionLineStartContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, TomParser.RULE_descriptionLineStart);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 689;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 688;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 692;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 691;
                                    this.descriptionText();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 694;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 701;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 699;
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
                                        this.state = 696;
                                        this.descriptionText();
                                    }
                                    break;
                                case TomParser.SPACE:
                                    {
                                        this.state = 697;
                                        this.match(TomParser.SPACE);
                                    }
                                    break;
                                case TomParser.AT:
                                    {
                                        this.state = 698;
                                        this.match(TomParser.AT);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 703;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    descriptionText() {
        let _localctx = new DescriptionTextContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, TomParser.RULE_descriptionText);
        try {
            this.state = 713;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.TEXT_CONTENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 704;
                        this.match(TomParser.TEXT_CONTENT);
                    }
                    break;
                case TomParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 705;
                        this.match(TomParser.ID);
                    }
                    break;
                case TomParser.FORWARD_SLASH:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 706;
                        this.match(TomParser.FORWARD_SLASH);
                    }
                    break;
                case TomParser.BRACE_OPEN:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 707;
                        this.match(TomParser.BRACE_OPEN);
                    }
                    break;
                case TomParser.BRACE_CLOSE:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 708;
                        this.match(TomParser.BRACE_CLOSE);
                    }
                    break;
                case TomParser.COLON:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 709;
                        this.match(TomParser.COLON);
                    }
                    break;
                case TomParser.MINUS:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 710;
                        this.match(TomParser.MINUS);
                    }
                    break;
                case TomParser.PERIOD:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 711;
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
                        this.state = 712;
                        this.literal();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    descriptionLineElement() {
        let _localctx = new DescriptionLineElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, TomParser.RULE_descriptionLineElement);
        try {
            this.state = 717;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.INLINE_TAG_START:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 715;
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
                        this.state = 716;
                        this.descriptionLineText();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    descriptionLineText() {
        let _localctx = new DescriptionLineTextContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, TomParser.RULE_descriptionLineText);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 722;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 722;
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
                                            this.state = 719;
                                            this.descriptionText();
                                        }
                                        break;
                                    case TomParser.SPACE:
                                        {
                                            this.state = 720;
                                            this.match(TomParser.SPACE);
                                        }
                                        break;
                                    case TomParser.AT:
                                        {
                                            this.state = 721;
                                            this.match(TomParser.AT);
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 724;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    inlineTag() {
        let _localctx = new InlineTagContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, TomParser.RULE_inlineTag);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 726;
                this.match(TomParser.INLINE_TAG_START);
                this.state = 727;
                this.inlineTagName();
                this.state = 728;
                this.match(TomParser.SPACE);
                this.state = 730;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.NEWLINE) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.PERIOD) | (1 << TomParser.BRACE_OPEN))) !== 0)) {
                    {
                        this.state = 729;
                        this.inlineTagBody();
                    }
                }
                this.state = 732;
                this.match(TomParser.BRACE_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    inlineTagName() {
        let _localctx = new InlineTagNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, TomParser.RULE_inlineTagName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 734;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    inlineTagBody() {
        let _localctx = new InlineTagBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, TomParser.RULE_inlineTagBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 737;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 736;
                            this.braceBody();
                        }
                    }
                    this.state = 739;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.NEWLINE) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.PERIOD) | (1 << TomParser.BRACE_OPEN))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    braceExpression() {
        let _localctx = new BraceExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, TomParser.RULE_braceExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 741;
                this.match(TomParser.BRACE_OPEN);
                this.state = 745;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.NEWLINE) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.PERIOD) | (1 << TomParser.BRACE_OPEN))) !== 0)) {
                    {
                        {
                            this.state = 742;
                            this.braceBody();
                        }
                    }
                    this.state = 747;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 748;
                this.match(TomParser.BRACE_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    braceBody() {
        let _localctx = new BraceBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, TomParser.RULE_braceBody);
        try {
            let _alt;
            this.state = 759;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.BRACE_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 750;
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
                        this.state = 751;
                        this.braceText();
                        this.state = 756;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 752;
                                        this.match(TomParser.NEWLINE);
                                        this.state = 753;
                                        this.braceText();
                                    }
                                }
                            }
                            this.state = 758;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    braceText() {
        let _localctx = new BraceTextContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, TomParser.RULE_braceText);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 761;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.NEWLINE) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.PERIOD))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    identifier() {
        let _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, TomParser.RULE_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 763;
                this.match(TomParser.ID);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 10:
                return this.type_sempred(_localctx, predIndex);
            case 19:
                return this.arrayType_sempred(_localctx, predIndex);
            case 27:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    }
    type_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 4);
        }
        return true;
    }
    arrayType_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 2:
                return this.precpred(this._ctx, 6);
            case 3:
                return this.precpred(this._ctx, 5);
        }
        return true;
    }
    static get _ATN() {
        if (!TomParser.__ATN) {
            TomParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(TomParser._serializedATN));
        }
        return TomParser.__ATN;
    }
}
TomParser.IntegerLiteral = 1;
TomParser.FloatingPointLiteral = 2;
TomParser.BooleanLiteral = 3;
TomParser.CharacterLiteral = 4;
TomParser.StringLiteral = 5;
TomParser.NullLiteral = 6;
TomParser.ID = 7;
TomParser.NEWLINE = 8;
TomParser.SPACE = 9;
TomParser.TEXT_CONTENT = 10;
TomParser.AT = 11;
TomParser.PLUS = 12;
TomParser.MINUS = 13;
TomParser.STAR = 14;
TomParser.FORWARD_SLASH = 15;
TomParser.COLON = 16;
TomParser.PERIOD = 17;
TomParser.COMMA = 18;
TomParser.EQUAL = 19;
TomParser.QUESTION = 20;
TomParser.AMP = 21;
TomParser.PIPE = 22;
TomParser.ARROW = 23;
TomParser.EXCLAMATION = 24;
TomParser.INLINE_TAG_START = 25;
TomParser.BRACE_OPEN = 26;
TomParser.BRACE_CLOSE = 27;
TomParser.PAREN_OPEN = 28;
TomParser.PAREN_CLOSE = 29;
TomParser.BRACKET_OPEN = 30;
TomParser.BRACKET_CLOSE = 31;
TomParser.LESSTHAN = 32;
TomParser.GREATERTHAN = 33;
TomParser.RULE_documentation = 0;
TomParser.RULE_body = 1;
TomParser.RULE_whitespace = 2;
TomParser.RULE_annotations = 3;
TomParser.RULE_tag = 4;
TomParser.RULE_tagName = 5;
TomParser.RULE_tagID = 6;
TomParser.RULE_optionalTagID = 7;
TomParser.RULE_propertyTagID = 8;
TomParser.RULE_optionalTagOrIdentifier = 9;
TomParser.RULE_type = 10;
TomParser.RULE_tupleType = 11;
TomParser.RULE_tupleTypeList = 12;
TomParser.RULE_primaryType = 13;
TomParser.RULE_identifierOrKeyword = 14;
TomParser.RULE_parenthesizedType = 15;
TomParser.RULE_lambdaType = 16;
TomParser.RULE_formalParameterSequence = 17;
TomParser.RULE_parameter = 18;
TomParser.RULE_arrayType = 19;
TomParser.RULE_objectType = 20;
TomParser.RULE_objectPairTypeList = 21;
TomParser.RULE_objectPairType = 22;
TomParser.RULE_optionalType = 23;
TomParser.RULE_propertyType = 24;
TomParser.RULE_optionalTypeOrIdentifer = 25;
TomParser.RULE_value = 26;
TomParser.RULE_expression = 27;
TomParser.RULE_unaryExpression = 28;
TomParser.RULE_arrayExpression = 29;
TomParser.RULE_objectExpression = 30;
TomParser.RULE_objectPairExpressionList = 31;
TomParser.RULE_objectPairExpression = 32;
TomParser.RULE_literal = 33;
TomParser.RULE_parenthesizedExpression = 34;
TomParser.RULE_description = 35;
TomParser.RULE_descriptionLine = 36;
TomParser.RULE_descriptionLineStart = 37;
TomParser.RULE_descriptionText = 38;
TomParser.RULE_descriptionLineElement = 39;
TomParser.RULE_descriptionLineText = 40;
TomParser.RULE_inlineTag = 41;
TomParser.RULE_inlineTagName = 42;
TomParser.RULE_inlineTagBody = 43;
TomParser.RULE_braceExpression = 44;
TomParser.RULE_braceBody = 45;
TomParser.RULE_braceText = 46;
TomParser.RULE_identifier = 47;
TomParser.ruleNames = [
    "documentation", "body", "whitespace", "annotations", "tag", "tagName",
    "tagID", "optionalTagID", "propertyTagID", "optionalTagOrIdentifier",
    "type", "tupleType", "tupleTypeList", "primaryType", "identifierOrKeyword",
    "parenthesizedType", "lambdaType", "formalParameterSequence", "parameter",
    "arrayType", "objectType", "objectPairTypeList", "objectPairType", "optionalType",
    "propertyType", "optionalTypeOrIdentifer", "value", "expression", "unaryExpression",
    "arrayExpression", "objectExpression", "objectPairExpressionList", "objectPairExpression",
    "literal", "parenthesizedExpression", "description", "descriptionLine",
    "descriptionLineStart", "descriptionText", "descriptionLineElement", "descriptionLineText",
    "inlineTag", "inlineTagName", "inlineTagBody", "braceExpression", "braceBody",
    "braceText", "identifier"
];
TomParser._LITERAL_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, "'@'", "'+'", "'-'", "'*'",
    "'/'", "':'", "'.'", "','", "'='", "'?'", "'&'", "'|'", undefined, "'!'",
    "'{@'", "'{'", "'}'", "'('", "')'", "'['", "']'", "'<'", "'>'"
];
TomParser._SYMBOLIC_NAMES = [
    undefined, "IntegerLiteral", "FloatingPointLiteral", "BooleanLiteral",
    "CharacterLiteral", "StringLiteral", "NullLiteral", "ID", "NEWLINE", "SPACE",
    "TEXT_CONTENT", "AT", "PLUS", "MINUS", "STAR", "FORWARD_SLASH", "COLON",
    "PERIOD", "COMMA", "EQUAL", "QUESTION", "AMP", "PIPE", "ARROW", "EXCLAMATION",
    "INLINE_TAG_START", "BRACE_OPEN", "BRACE_CLOSE", "PAREN_OPEN", "PAREN_CLOSE",
    "BRACKET_OPEN", "BRACKET_CLOSE", "LESSTHAN", "GREATERTHAN"
];
TomParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(TomParser._LITERAL_NAMES, TomParser._SYMBOLIC_NAMES, []);
TomParser._serializedATNSegments = 2;
TomParser._serializedATNSegment0 = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03#\u0300\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
    "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x03\x02\x03\x02\x03\x02" +
    "\x05\x02f\n\x02\x03\x02\x03\x02\x05\x02j\n\x02\x03\x03\x07\x03m\n\x03" +
    "\f\x03\x0E\x03p\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05" +
    "\x03\x05\x07\x05y\n\x05\f\x05\x0E\x05|\v\x05\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x05\x06\x8D\n\x06\x03\x06\x03\x06\x05\x06\x91\n\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xA3\n" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x05\x06\xAF\n\x06\x03\x06\x03\x06\x05\x06\xB3\n\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xBB\n\x06\x03\x06\x03" +
    "\x06\x05\x06\xBF\n\x06\x03\x06\x03\x06\x05\x06\xC3\n\x06\x03\x06\x03\x06" +
    "\x05\x06\xC7\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05" +
    "\x06\xCF\n\x06\x03\x06\x03\x06\x05\x06\xD3\n\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xDF\n" +
    "\x06\x03\x06\x03\x06\x05\x06\xE3\n\x06\x03\x06\x03\x06\x05\x06\xE7\n\x06" +
    "\x03\x06\x03\x06\x05\x06\xEB\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x05\x06\xF5\n\x06\x03\x06\x03\x06\x05\x06" +
    "\xF9\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xFF\n\x06\x03\x06\x03" +
    "\x06\x05\x06\u0103\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x05\x06\u010B\n\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x05\b\u0113" +
    "\n\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x06\n\u011B\n\n\r\n\x0E\n\u011C" +
    "\x03\n\x03\n\x03\n\x06\n\u0122\n\n\r\n\x0E\n\u0123\x05\n\u0126\n\n\x03" +
    "\v\x03\v\x05\v\u012A\n\v\x03\f\x03\f\x03\f\x03\f\x05\f\u0130\n\f\x03\f" +
    "\x03\f\x05\f\u0134\n\f\x03\f\x03\f\x05\f\u0138\n\f\x03\f\x07\f\u013B\n" +
    "\f\f\f\x0E\f\u013E\v\f\x03\r\x05\r\u0141\n\r\x03\r\x03\r\x05\r\u0145\n" +
    "\r\x03\r\x03\r\x05\r\u0149\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x05\x0E\u014F" +
    "\n\x0E\x03\x0E\x03\x0E\x05\x0E\u0153\n\x0E\x03\x0E\x06\x0E\u0156\n\x0E" +
    "\r\x0E\x0E\x0E\u0157\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05" +
    "\x0F\u0160\n\x0F\x03\x10\x03\x10\x05\x10\u0164\n\x10\x03\x11\x03\x11\x05" +
    "\x11\u0168\n\x11\x03\x11\x03\x11\x05\x11\u016C\n\x11\x03\x11\x03\x11\x03" +
    "\x12\x03\x12\x05\x12\u0172\n\x12\x03\x12\x03\x12\x05\x12\u0176\n\x12\x03" +
    "\x12\x03\x12\x05\x12\u017A\n\x12\x03\x12\x03\x12\x05\x12\u017E\n\x12\x03" +
    "\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0184\n\x12\x03\x12\x03\x12\x05\x12" +
    "\u0188\n\x12\x03\x12\x03\x12\x05\x12\u018C\n\x12\x03\x13\x03\x13\x03\x13" +
    "\x05\x13\u0191\n\x13\x03\x13\x07\x13\u0194\n\x13\f\x13\x0E\x13\u0197\v" +
    "\x13\x03\x14\x03\x14\x05\x14\u019B\n\x14\x03\x14\x03\x14\x05\x14\u019F" +
    "\n\x14\x03\x14\x05\x14\u01A2\n\x14\x03\x15\x03\x15\x03\x15\x05\x15\u01A7" +
    "\n\x15\x03\x15\x05\x15\u01AA\n\x15\x03\x15\x03\x15\x05\x15\u01AE\n\x15" +
    "\x03\x15\x07\x15\u01B1\n\x15\f\x15\x0E\x15\u01B4\v\x15\x03\x15\x05\x15" +
    "\u01B7\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
    "\x15\x03\x15\x05\x15\u01C2\n\x15\x03\x15\x03\x15\x03\x15\x05\x15\u01C7" +
    "\n\x15\x03\x15\x07\x15\u01CA\n\x15\f\x15\x0E\x15\u01CD\v\x15\x03\x16\x03" +
    "\x16\x05\x16\u01D1\n\x16\x03\x16\x05\x16\u01D4\n\x16\x03\x16\x05\x16\u01D7" +
    "\n\x16\x03\x16\x05\x16\u01DA\n\x16\x03\x16\x05\x16\u01DD\n\x16\x03\x16" +
    "\x05\x16\u01E0\n\x16\x03\x16\x05\x16\u01E3\n\x16\x03\x16\x03\x16\x03\x17" +
    "\x03\x17\x05\x17\u01E9\n\x17\x03\x17\x03\x17\x05\x17\u01ED\n\x17\x03\x17" +
    "\x05\x17\u01F0\n\x17\x03\x17\x05\x17\u01F3\n\x17\x03\x17\x07\x17\u01F6" +
    "\n\x17\f\x17\x0E\x17\u01F9\v\x17\x03\x18\x03\x18\x05\x18\u01FD\n\x18\x03" +
    "\x18\x05\x18\u0200\n\x18\x03\x18\x03\x18\x05\x18\u0204\n\x18\x03\x18\x03" +
    "\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x06\x1A\u020E\n\x1A" +
    "\r\x1A\x0E\x1A\u020F\x03\x1A\x03\x1A\x03\x1A\x06\x1A\u0215\n\x1A\r\x1A" +
    "\x0E\x1A\u0216\x05\x1A\u0219\n\x1A\x03\x1B\x03\x1B\x05\x1B\u021D\n\x1B" +
    "\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D" +
    "\u0227\n\x1D\x03\x1D\x03\x1D\x05\x1D\u022B\n\x1D\x03\x1D\x03\x1D\x05\x1D" +
    "\u022F\n\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0234\n\x1D\x03\x1D\x03\x1D" +
    "\x05\x1D\u0238\n\x1D\x03\x1D\x07\x1D\u023B\n\x1D\f\x1D\x0E\x1D\u023E\v" +
    "\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05\x1F\u0245\n\x1F\x03\x1F" +
    "\x03\x1F\x05\x1F\u0249\n\x1F\x03\x1F\x07\x1F\u024C\n\x1F\f\x1F\x0E\x1F" +
    "\u024F\v\x1F\x03\x1F\x03\x1F\x03 \x03 \x05 \u0255\n \x03 \x05 \u0258\n" +
    " \x03 \x05 \u025B\n \x03 \x05 \u025E\n \x03 \x05 \u0261\n \x03 \x05 \u0264" +
    "\n \x03 \x05 \u0267\n \x03 \x03 \x03!\x03!\x05!\u026D\n!\x03!\x03!\x05" +
    "!\u0271\n!\x03!\x05!\u0274\n!\x03!\x05!\u0277\n!\x03!\x07!\u027A\n!\f" +
    "!\x0E!\u027D\v!\x03\"\x03\"\x05\"\u0281\n\"\x03\"\x03\"\x05\"\u0285\n" +
    "\"\x03\"\x03\"\x03\"\x03\"\x05\"\u028B\n\"\x03\"\x03\"\x05\"\u028F\n\"" +
    "\x03\"\x03\"\x05\"\u0293\n\"\x03#\x03#\x03$\x03$\x05$\u0299\n$\x03$\x03" +
    "$\x05$\u029D\n$\x03$\x03$\x03%\x03%\x03&\x03&\x07&\u02A5\n&\f&\x0E&\u02A8" +
    "\v&\x03&\x03&\x07&\u02AC\n&\f&\x0E&\u02AF\v&\x05&\u02B1\n&\x03\'\x05\'" +
    "\u02B4\n\'\x03\'\x06\'\u02B7\n\'\r\'\x0E\'\u02B8\x03\'\x03\'\x03\'\x07" +
    "\'\u02BE\n\'\f\'\x0E\'\u02C1\v\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
    "(\x03(\x05(\u02CC\n(\x03)\x03)\x05)\u02D0\n)\x03*\x03*\x03*\x06*\u02D5" +
    "\n*\r*\x0E*\u02D6\x03+\x03+\x03+\x03+\x05+\u02DD\n+\x03+\x03+\x03,\x03" +
    ",\x03-\x06-\u02E4\n-\r-\x0E-\u02E5\x03.\x03.\x07.\u02EA\n.\f.\x0E.\u02ED" +
    "\v.\x03.\x03.\x03/\x03/\x03/\x03/\x07/\u02F5\n/\f/\x0E/\u02F8\v/\x05/" +
    "\u02FA\n/\x030\x030\x031\x031\x031\x02\x02\x05\x16(82\x02\x02\x04\x02" +
    "\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
    "\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
    "0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02" +
    "L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02\x02\b\x03\x02" +
    "\n\v\x03\x02\x17\x18\x03\x02\x10\x11\x03\x02\x0E\x0F\x03\x02\x03\b\x05" +
    "\x02\t\f\x11\x11\x13\x13\u036B\x02i\x03\x02\x02\x02\x04n\x03\x02\x02\x02" +
    "\x06s\x03\x02\x02\x02\bu\x03\x02\x02\x02\n\u010A\x03\x02\x02\x02\f\u010C" +
    "\x03\x02\x02\x02\x0E\u0112\x03\x02\x02\x02\x10\u0114\x03\x02\x02\x02\x12" +
    "\u0125\x03\x02\x02\x02\x14\u0129\x03\x02\x02\x02\x16\u012F\x03\x02\x02" +
    "\x02\x18\u0140\x03\x02\x02\x02\x1A\u014C\x03\x02\x02\x02\x1C\u015F\x03" +
    "\x02\x02\x02\x1E\u0163\x03\x02\x02\x02 \u0165\x03\x02\x02\x02\"\u018B" +
    "\x03\x02\x02\x02$\u018D\x03\x02\x02\x02&\u0198\x03\x02\x02\x02(\u01C1" +
    "\x03\x02\x02\x02*\u01CE\x03\x02\x02\x02,\u01E6\x03\x02\x02\x02.\u01FA" +
    "\x03\x02\x02\x020\u0207\x03\x02\x02\x022\u0218\x03\x02\x02\x024\u021C" +
    "\x03\x02\x02\x026\u021E\x03\x02\x02\x028\u0226\x03\x02\x02\x02:\u023F" +
    "\x03\x02\x02\x02<\u0242\x03\x02\x02\x02>\u0252\x03\x02\x02\x02@\u026A" +
    "\x03\x02\x02\x02B\u0292\x03\x02\x02\x02D\u0294\x03\x02\x02\x02F\u0296" +
    "\x03\x02\x02\x02H\u02A0\x03\x02\x02\x02J\u02B0\x03\x02\x02\x02L\u02B3" +
    "\x03\x02\x02\x02N\u02CB\x03\x02\x02\x02P\u02CF\x03\x02\x02\x02R\u02D4" +
    "\x03\x02\x02\x02T\u02D8\x03\x02\x02\x02V\u02E0\x03\x02\x02\x02X\u02E3" +
    "\x03\x02\x02\x02Z\u02E7\x03\x02\x02\x02\\\u02F9\x03\x02\x02\x02^\u02FB" +
    "\x03\x02\x02\x02`\u02FD\x03\x02\x02\x02bj\x07\x02\x02\x03ce\x05\x04\x03" +
    "\x02df\x07\n\x02\x02ed\x03\x02\x02\x02ef\x03\x02\x02\x02fg\x03\x02\x02" +
    "\x02gh\x07\x02\x02\x03hj\x03\x02\x02\x02ib\x03\x02\x02\x02ic\x03\x02\x02" +
    "\x02j\x03\x03\x02\x02\x02km\x05\x06\x04\x02lk\x03\x02\x02\x02mp\x03\x02" +
    "\x02\x02nl\x03\x02\x02\x02no\x03\x02\x02\x02oq\x03\x02\x02\x02pn\x03\x02" +
    "\x02\x02qr\x05\b\x05\x02r\x05\x03\x02\x02\x02st\t\x02\x02\x02t\x07\x03" +
    "\x02\x02\x02uz\x05\n\x06\x02vw\x07\n\x02\x02wy\x05\n\x06\x02xv\x03\x02" +
    "\x02\x02y|\x03\x02\x02\x02zx\x03\x02\x02\x02z{\x03\x02\x02\x02{\t\x03" +
    "\x02\x02\x02|z\x03\x02\x02\x02}\u010B\x05\f\x07\x02~\x7F\x05\f\x07\x02" +
    "\x7F\x80\x07\v\x02\x02\x80\x81\x07\x0F\x02\x02\x81\x82\x07\v\x02\x02\x82" +
    "\x83\x05H%\x02\x83\u010B\x03\x02\x02\x02\x84\x85\x05\f\x07\x02\x85\x86" +
    "\x07\v\x02\x02\x86\x87\x05\x0E\b\x02\x87\u010B\x03\x02\x02\x02\x88\x89" +
    "\x05\f\x07\x02\x89\x8A\x07\v\x02\x02\x8A\x8C\x05\x0E\b\x02\x8B\x8D\x07" +
    "\v\x02\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x03" +
    "\x02\x02\x02\x8E\x90\x07\x15\x02\x02\x8F\x91\x07\v\x02\x02\x90\x8F\x03" +
    "\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x93\x05" +
    "6\x1C\x02\x93\u010B\x03\x02\x02\x02\x94\x95\x05\f\x07\x02\x95\x96\x07" +
    "\v\x02\x02\x96\x97\x05\x0E\b\x02\x97\x98\x07\v\x02\x02\x98\x99\x07\x0F" +
    "\x02\x02\x99\x9A\x07\v\x02\x02\x9A\x9B\x05H%\x02\x9B\u010B\x03\x02\x02" +
    "\x02\x9C\x9D\x05\f\x07\x02\x9D\x9E\x07\v\x02\x02\x9E\x9F\x05\x0E\b\x02" +
    "\x9F\xA0\x07\v\x02\x02\xA0\xA2\x07\x15\x02\x02\xA1\xA3\x07\v\x02\x02\xA2" +
    "\xA1\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4" +
    "\xA5\x056\x1C\x02\xA5\xA6\x07\v\x02\x02\xA6\xA7\x07\x0F\x02\x02\xA7\xA8" +
    "\x07\v\x02\x02\xA8\xA9\x05H%\x02\xA9\u010B\x03\x02\x02\x02\xAA\xAB\x05" +
    "\f\x07\x02\xAB\xAC\x07\v\x02\x02\xAC\xAE\x05\x0E\b\x02\xAD\xAF\x07\v\x02" +
    "\x02\xAE\xAD\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB0\x03\x02\x02" +
    "\x02\xB0\xB2\x07\x12\x02\x02\xB1\xB3\x07\v\x02\x02\xB2\xB1\x03\x02\x02" +
    "\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB5\x05\x16\f" +
    "\x02\xB5\u010B\x03\x02\x02\x02\xB6\xB7\x05\f\x07\x02\xB7\xB8\x07\v\x02" +
    "\x02\xB8\xBA\x05\x0E\b\x02\xB9\xBB\x07\v\x02\x02\xBA\xB9\x03\x02\x02\x02" +
    "\xBA\xBB\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBE\x07\x12\x02\x02" +
    "\xBD\xBF\x07\v\x02\x02\xBE\xBD\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02" +
    "\xBF\xC0\x03\x02\x02\x02\xC0\xC2\x05\x16\f\x02\xC1\xC3\x07\v\x02\x02\xC2" +
    "\xC1\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4" +
    "\xC6\x07\x15\x02\x02\xC5\xC7\x07\v\x02\x02\xC6\xC5\x03\x02\x02\x02\xC6" +
    "\xC7\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC9\x056\x1C\x02\xC9" +
    "\u010B\x03\x02\x02\x02\xCA\xCB\x05\f\x07\x02\xCB\xCC\x07\v\x02\x02\xCC" +
    "\xCE\x05\x0E\b\x02\xCD\xCF\x07\v\x02\x02\xCE\xCD\x03\x02\x02\x02\xCE\xCF" +
    "\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD2\x07\x12\x02\x02\xD1\xD3" +
    "\x07\v\x02\x02\xD2\xD1\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD4" +
    "\x03\x02\x02\x02\xD4\xD5\x05\x16\f\x02\xD5\xD6\x07\v\x02\x02\xD6\xD7\x07" +
    "\x0F\x02\x02\xD7\xD8\x07\v\x02\x02\xD8\xD9\x05H%\x02\xD9\u010B\x03\x02" +
    "\x02\x02\xDA\xDB\x05\f\x07\x02\xDB\xDC\x07\v\x02\x02\xDC\xDE\x05\x0E\b" +
    "\x02\xDD\xDF\x07\v\x02\x02\xDE\xDD\x03\x02\x02\x02\xDE\xDF\x03\x02\x02" +
    "\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE2\x07\x12\x02\x02\xE1\xE3\x07\v\x02" +
    "\x02\xE2\xE1\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE4\x03\x02\x02" +
    "\x02\xE4\xE6\x05\x16\f\x02\xE5\xE7\x07\v\x02\x02\xE6\xE5\x03\x02\x02\x02" +
    "\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xEA\x07\x15\x02\x02" +
    "\xE9\xEB\x07\v\x02\x02\xEA\xE9\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02" +
    "\xEB\xEC\x03\x02\x02\x02\xEC\xED\x056\x1C\x02\xED\xEE\x07\v\x02\x02\xEE" +
    "\xEF\x07\x0F\x02\x02\xEF\xF0\x07\v\x02\x02\xF0\xF1\x05H%\x02\xF1\u010B" +
    "\x03\x02\x02\x02\xF2\xF4\x05\f\x07\x02\xF3\xF5\x07\v\x02\x02\xF4\xF3\x03" +
    "\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF8\x07" +
    "\x12\x02\x02\xF7\xF9\x07\v\x02\x02\xF8\xF7\x03\x02\x02\x02\xF8\xF9\x03" +
    "\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFB\x05\x16\f\x02\xFB\u010B\x03" +
    "\x02\x02\x02\xFC\xFE\x05\f\x07\x02\xFD\xFF\x07\v\x02\x02\xFE\xFD\x03\x02" +
    "\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0102" +
    "\x07\x12\x02\x02\u0101\u0103\x07\v\x02\x02\u0102\u0101\x03\x02\x02\x02" +
    "\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0105\x05" +
    "\x16\f\x02\u0105\u0106\x07\v\x02\x02\u0106\u0107\x07\x0F\x02\x02\u0107" +
    "\u0108\x07\v\x02\x02\u0108\u0109\x05H%\x02\u0109\u010B\x03\x02\x02\x02" +
    "\u010A}\x03\x02\x02\x02\u010A~\x03\x02\x02\x02\u010A\x84\x03\x02\x02\x02" +
    "\u010A\x88\x03\x02\x02\x02\u010A\x94\x03\x02\x02\x02\u010A\x9C\x03\x02" +
    "\x02\x02\u010A\xAA\x03\x02\x02\x02\u010A\xB6\x03\x02\x02\x02\u010A\xCA" +
    "\x03\x02\x02\x02\u010A\xDA\x03\x02\x02\x02\u010A\xF2\x03\x02\x02\x02\u010A" +
    "\xFC\x03\x02\x02\x02\u010B\v\x03\x02\x02\x02\u010C\u010D\x07\r\x02\x02" +
    "\u010D\u010E\x05`1\x02\u010E\r\x03\x02\x02\x02\u010F\u0113\x05\x12\n\x02" +
    "\u0110\u0113\x05\x10\t\x02\u0111\u0113\x05`1\x02\u0112\u010F\x03\x02\x02" +
    "\x02\u0112\u0110\x03\x02\x02\x02\u0112\u0111\x03\x02\x02\x02\u0113\x0F" +
    "\x03\x02\x02\x02\u0114\u0115\x05`1\x02\u0115\u0116\x07\x16\x02\x02\u0116" +
    "\x11\x03\x02\x02\x02\u0117\u011A\x05\x10\t\x02\u0118\u0119\x07\x13\x02" +
    "\x02\u0119\u011B\x05\x14\v\x02\u011A\u0118\x03\x02\x02\x02\u011B\u011C" +
    "\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02" +
    "\u011D\u0126\x03\x02\x02\x02\u011E\u0121\x05`1\x02\u011F\u0120\x07\x13" +
    "\x02\x02\u0120\u0122\x05\x14\v\x02\u0121\u011F\x03\x02\x02\x02\u0122\u0123" +
    "\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02" +
    "\u0124\u0126\x03\x02\x02\x02\u0125\u0117\x03\x02\x02\x02\u0125\u011E\x03" +
    "\x02\x02\x02\u0126\x13\x03\x02\x02\x02\u0127\u012A\x05\x10\t\x02\u0128" +
    "\u012A\x05`1\x02\u0129\u0127\x03\x02\x02\x02\u0129\u0128\x03\x02\x02\x02" +
    "\u012A\x15\x03\x02\x02\x02\u012B\u012C\b\f\x01\x02\u012C\u0130\x05\"\x12" +
    "\x02\u012D\u0130\x05\x18\r\x02\u012E\u0130\x05\x1C\x0F\x02\u012F\u012B" +
    "\x03\x02\x02\x02\u012F\u012D\x03\x02\x02\x02\u012F\u012E\x03\x02\x02\x02" +
    "\u0130\u013C\x03\x02\x02\x02\u0131\u0133\f\x06\x02\x02\u0132\u0134\x07" +
    "\v\x02\x02\u0133\u0132\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134" +
    "\u0135\x03\x02\x02\x02\u0135\u0137\t\x03\x02\x02\u0136\u0138\x07\v\x02" +
    "\x02\u0137\u0136\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u0139" +
    "\x03\x02\x02\x02\u0139\u013B\x05\x16\f\x07\u013A\u0131\x03\x02\x02\x02" +
    "\u013B\u013E\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013C\u013D\x03" +
    "\x02\x02\x02\u013D\x17\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013F" +
    "\u0141\x05`1\x02\u0140\u013F\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02" +
    "\u0141\u0142\x03\x02\x02\x02\u0142\u0144\x07\"\x02\x02\u0143\u0145\x07" +
    "\v\x02\x02\u0144\u0143\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145" +
    "\u0146\x03\x02\x02\x02\u0146\u0148\x05\x1A\x0E\x02\u0147\u0149\x07\v\x02" +
    "\x02\u0148\u0147\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014A" +
    "\x03\x02\x02\x02\u014A\u014B\x07#\x02\x02\u014B\x19\x03\x02\x02\x02\u014C" +
    "\u014E\x05\x16\f\x02\u014D\u014F\x07\v\x02\x02\u014E\u014D\x03\x02\x02" +
    "\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0155\x03\x02\x02\x02\u0150\u0152" +
    "\x07\x14\x02\x02\u0151\u0153\x07\v\x02\x02\u0152\u0151\x03\x02\x02\x02" +
    "\u0152\u0153\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0156\x05" +
    "\x16\f\x02\u0155\u0150\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157" +
    "\u0155\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\x1B\x03\x02\x02" +
    "\x02\u0159\u0160\x05 \x11\x02\u015A\u0160\x05*\x16\x02\u015B\u0160\x05" +
    "(\x15\x02\u015C\u0160\x052\x1A\x02\u015D\u0160\x050\x19\x02\u015E\u0160" +
    "\x05\x1E\x10\x02\u015F\u0159\x03\x02\x02\x02\u015F\u015A\x03\x02\x02\x02" +
    "\u015F\u015B\x03\x02\x02\x02\u015F\u015C\x03\x02\x02\x02\u015F\u015D\x03" +
    "\x02\x02\x02\u015F\u015E\x03\x02\x02\x02\u0160\x1D\x03\x02\x02\x02\u0161" +
    "\u0164\x05`1\x02\u0162\u0164\x07\b\x02\x02\u0163\u0161\x03\x02\x02\x02" +
    "\u0163\u0162\x03\x02\x02\x02\u0164\x1F\x03\x02\x02\x02\u0165\u0167\x07" +
    "\x1E\x02\x02\u0166\u0168\x07\v\x02\x02\u0167\u0166\x03\x02\x02\x02\u0167" +
    "\u0168\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016B\x05\x16" +
    "\f\x02\u016A\u016C\x07\v\x02\x02\u016B\u016A\x03\x02\x02\x02\u016B\u016C" +
    "\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\x07\x1F\x02\x02" +
    "\u016E!\x03\x02\x02\x02\u016F\u0171\x07\x1E\x02\x02\u0170\u0172\x07\v" +
    "\x02\x02\u0171\u0170\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172" +
    "\u0173\x03\x02\x02\x02\u0173\u0175\x05$\x13\x02\u0174\u0176\x07\v\x02" +
    "\x02\u0175\u0174\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176\u0177" +
    "\x03\x02\x02\x02\u0177\u0179\x07\x1F\x02\x02\u0178\u017A\x07\v\x02\x02" +
    "\u0179\u0178\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017B\x03" +
    "\x02\x02\x02\u017B\u017D\x07\x19\x02\x02\u017C\u017E\x07\v\x02\x02\u017D" +
    "\u017C\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u017F\x03\x02" +
    "\x02\x02\u017F\u0180\x05\x16\f\x02\u0180\u018C\x03\x02\x02\x02\u0181\u0183" +
    "\x05&\x14\x02\u0182\u0184\x07\v\x02\x02\u0183\u0182\x03\x02\x02\x02\u0183" +
    "\u0184\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0187\x07\x19" +
    "\x02\x02\u0186\u0188\x07\v\x02\x02\u0187\u0186\x03\x02\x02\x02\u0187\u0188" +
    "\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189\u018A\x05\x16\f\x02" +
    "\u018A\u018C\x03\x02\x02\x02\u018B\u016F\x03\x02\x02\x02\u018B\u0181\x03" +
    "\x02\x02\x02\u018C#\x03\x02\x02\x02\u018D\u0195\x05&\x14\x02\u018E\u0190" +
    "\x07\x14\x02\x02\u018F\u0191\x07\v\x02\x02\u0190\u018F\x03\x02\x02\x02" +
    "\u0190\u0191\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0194\x05" +
    "&\x14\x02\u0193\u018E\x03\x02\x02\x02\u0194\u0197\x03\x02\x02\x02\u0195" +
    "\u0193\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196%\x03\x02\x02" +
    "\x02\u0197\u0195\x03\x02\x02\x02\u0198\u01A1\x05`1\x02\u0199\u019B\x07" +
    "\v\x02\x02\u019A\u0199\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B" +
    "\u019C\x03\x02\x02\x02\u019C\u019E\x07\x12\x02\x02\u019D\u019F\x07\v\x02" +
    "\x02\u019E\u019D\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A0" +
    "\x03\x02\x02\x02\u01A0\u01A2\x05\x16\f\x02\u01A1\u019A\x03\x02\x02\x02" +
    "\u01A1\u01A2\x03\x02\x02\x02\u01A2\'\x03\x02\x02\x02\u01A3\u01A4\b\x15" +
    "\x01\x02\u01A4\u01A6\x07 \x02\x02\u01A5\u01A7\x07\v\x02\x02\u01A6\u01A5" +
    "\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A9\x03\x02\x02\x02" +
    "\u01A8\u01AA\x05\x16\f\x02\u01A9\u01A8\x03\x02\x02\x02\u01A9\u01AA\x03" +
    "\x02\x02\x02\u01AA\u01B2\x03\x02\x02\x02\u01AB\u01AD\x07\x14\x02\x02\u01AC" +
    "\u01AE\x07\v\x02\x02\u01AD\u01AC\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02" +
    "\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B1\x05\x16\f\x02\u01B0\u01AB" +
    "\x03\x02\x02\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02" +
    "\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B6\x03\x02\x02\x02\u01B4\u01B2\x03" +
    "\x02\x02\x02\u01B5\u01B7\x07\v\x02\x02\u01B6\u01B5\x03\x02\x02\x02\u01B6" +
    "\u01B7\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01C2\x07!\x02" +
    "\x02\u01B9\u01BA\x05`1\x02\u01BA\u01BB\x07 \x02\x02\u01BB\u01BC\x07!\x02" +
    "\x02\u01BC\u01C2\x03\x02\x02\x02\u01BD\u01BE\x05*\x16\x02\u01BE\u01BF" +
    "\x07 \x02\x02\u01BF\u01C0\x07!\x02\x02\u01C0\u01C2\x03\x02\x02\x02\u01C1" +
    "\u01A3\x03\x02\x02\x02\u01C1\u01B9\x03\x02\x02\x02\u01C1\u01BD\x03\x02" +
    "\x02\x02\u01C2\u01CB\x03\x02\x02\x02\u01C3\u01C4\f\x03\x02\x02\u01C4\u01C6" +
    "\x07 \x02\x02\u01C5\u01C7\x05\x16\f\x02\u01C6\u01C5\x03\x02\x02\x02\u01C6" +
    "\u01C7\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01CA\x07!\x02" +
    "\x02\u01C9\u01C3\x03\x02\x02\x02\u01CA\u01CD\x03\x02\x02\x02\u01CB\u01C9" +
    "\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC)\x03\x02\x02\x02\u01CD" +
    "\u01CB\x03\x02\x02\x02\u01CE\u01D0\x07\x1C\x02\x02\u01CF\u01D1\x07\v\x02" +
    "\x02\u01D0\u01CF\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D3" +
    "\x03\x02\x02\x02\u01D2\u01D4\x07\n\x02\x02\u01D3\u01D2\x03\x02\x02\x02" +
    "\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D6\x03\x02\x02\x02\u01D5\u01D7\x07" +
    "\v\x02\x02\u01D6\u01D5\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7" +
    "\u01D9\x03\x02\x02\x02\u01D8\u01DA\x05,\x17\x02\u01D9\u01D8\x03\x02\x02" +
    "\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DC\x03\x02\x02\x02\u01DB\u01DD" +
    "\x07\v\x02\x02\u01DC\u01DB\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02" +
    "\u01DD\u01DF\x03\x02\x02\x02\u01DE\u01E0\x07\n\x02\x02\u01DF\u01DE\x03" +
    "\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E2\x03\x02\x02\x02\u01E1" +
    "\u01E3\x07\v\x02\x02\u01E2\u01E1\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02" +
    "\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4\u01E5\x07\x1D\x02\x02\u01E5+\x03" +
    "\x02\x02\x02\u01E6\u01E8\x05.\x18\x02\u01E7\u01E9\x07\v\x02\x02\u01E8" +
    "\u01E7\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01F7\x03\x02" +
    "\x02\x02\u01EA\u01EC\x07\x14\x02\x02\u01EB";
TomParser._serializedATNSegment1 = "\u01ED\x07\v\x02\x02\u01EC\u01EB\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02" +
    "\x02\u01ED\u01EF\x03\x02\x02\x02\u01EE\u01F0\x07\n\x02\x02\u01EF\u01EE" +
    "\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F2\x03\x02\x02\x02" +
    "\u01F1\u01F3\x07\v\x02\x02\u01F2\u01F1\x03\x02\x02\x02\u01F2\u01F3\x03" +
    "\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\u01F6\x05.\x18\x02\u01F5" +
    "\u01EA\x03\x02\x02\x02\u01F6\u01F9\x03\x02\x02\x02\u01F7\u01F5\x03\x02" +
    "\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8-\x03\x02\x02\x02\u01F9\u01F7" +
    "\x03\x02\x02\x02\u01FA\u01FC\x05\x16\f\x02\u01FB\u01FD\x07\x16\x02\x02" +
    "\u01FC\u01FB\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD\u01FF\x03" +
    "\x02\x02\x02\u01FE\u0200\x07\v\x02\x02\u01FF\u01FE\x03\x02\x02\x02\u01FF" +
    "\u0200\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0203\x07\x12" +
    "\x02\x02\u0202\u0204\x07\v\x02\x02\u0203\u0202\x03\x02\x02\x02\u0203\u0204" +
    "\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0206\x05\x16\f\x02" +
    "\u0206/\x03\x02\x02\x02\u0207\u0208\x05`1\x02\u0208\u0209\x07\x16\x02" +
    "\x02\u02091\x03\x02\x02\x02\u020A\u020D\x05`1\x02\u020B\u020C\x07\x13" +
    "\x02\x02\u020C\u020E\x054\x1B\x02\u020D\u020B\x03\x02\x02\x02\u020E\u020F" +
    "\x03\x02\x02\x02\u020F\u020D\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02" +
    "\u0210\u0219\x03\x02\x02\x02\u0211\u0214\x050\x19\x02\u0212\u0213\x07" +
    "\x13\x02\x02\u0213\u0215\x054\x1B\x02\u0214\u0212\x03\x02\x02\x02\u0215" +
    "\u0216\x03\x02\x02\x02\u0216\u0214\x03\x02\x02\x02\u0216\u0217\x03\x02" +
    "\x02\x02\u0217\u0219\x03\x02\x02\x02\u0218\u020A\x03\x02\x02\x02\u0218" +
    "\u0211\x03\x02\x02\x02\u02193\x03\x02\x02\x02\u021A\u021D\x05`1\x02\u021B" +
    "\u021D\x050\x19\x02\u021C\u021A\x03\x02\x02\x02\u021C\u021B\x03\x02\x02" +
    "\x02\u021D5\x03\x02\x02\x02\u021E\u021F\x058\x1D\x02\u021F7\x03\x02\x02" +
    "\x02\u0220\u0221\b\x1D\x01\x02\u0221\u0227\x05:\x1E\x02\u0222\u0227\x05" +
    "<\x1F\x02\u0223\u0227\x05> \x02\u0224\u0227\x05D#\x02\u0225\u0227\x05" +
    "F$\x02\u0226\u0220\x03\x02\x02\x02\u0226\u0222\x03\x02\x02\x02\u0226\u0223" +
    "\x03\x02\x02\x02\u0226\u0224\x03\x02\x02\x02\u0226\u0225\x03\x02\x02\x02" +
    "\u0227\u023C\x03\x02\x02\x02\u0228\u022A\f\b\x02\x02\u0229\u022B\x07\v" +
    "\x02\x02\u022A\u0229\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B" +
    "\u022C\x03\x02\x02\x02\u022C\u022E\t\x04\x02\x02\u022D\u022F\x07\v\x02" +
    "\x02\u022E\u022D\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F\u0230" +
    "\x03\x02\x02\x02\u0230\u023B\x058\x1D\t\u0231\u0233\f\x07\x02\x02\u0232" +
    "\u0234\x07\v\x02\x02\u0233\u0232\x03\x02\x02\x02\u0233\u0234\x03\x02\x02" +
    "\x02\u0234\u0235\x03\x02\x02\x02\u0235\u0237\t\x05\x02\x02\u0236\u0238" +
    "\x07\v\x02\x02\u0237\u0236\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02" +
    "\u0238\u0239\x03\x02\x02\x02\u0239\u023B\x058\x1D\b\u023A\u0228\x03\x02" +
    "\x02\x02\u023A\u0231\x03\x02\x02\x02\u023B\u023E\x03\x02\x02\x02\u023C" +
    "\u023A\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D9\x03\x02\x02" +
    "\x02\u023E\u023C\x03\x02\x02\x02\u023F\u0240\t\x05\x02\x02\u0240\u0241" +
    "\x058\x1D\x02\u0241;\x03\x02\x02\x02\u0242\u0244\x07 \x02\x02\u0243\u0245" +
    "\x058\x1D\x02\u0244\u0243\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02" +
    "\u0245\u024D\x03\x02\x02\x02\u0246\u0248\x07\x14\x02\x02\u0247\u0249\x07" +
    "\v\x02\x02\u0248\u0247\x03\x02\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249" +
    "\u024A\x03\x02\x02\x02\u024A\u024C\x058\x1D\x02\u024B\u0246\x03\x02\x02" +
    "\x02\u024C\u024F\x03\x02\x02\x02\u024D\u024B\x03\x02\x02\x02\u024D\u024E" +
    "\x03\x02\x02\x02\u024E\u0250\x03\x02\x02\x02\u024F\u024D\x03\x02\x02\x02" +
    "\u0250\u0251\x07!\x02\x02\u0251=\x03\x02\x02\x02\u0252\u0254\x07\x1C\x02" +
    "\x02\u0253\u0255\x07\v\x02\x02\u0254\u0253\x03\x02\x02\x02\u0254\u0255" +
    "\x03\x02\x02\x02\u0255\u0257\x03\x02\x02\x02\u0256\u0258\x07\n\x02\x02" +
    "\u0257\u0256\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u025A\x03" +
    "\x02\x02\x02\u0259\u025B\x07\v\x02\x02\u025A\u0259\x03\x02\x02\x02\u025A" +
    "\u025B\x03\x02\x02\x02\u025B\u025D\x03\x02\x02\x02\u025C\u025E\x05@!\x02" +
    "\u025D\u025C\x03\x02\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E\u0260\x03" +
    "\x02\x02\x02\u025F\u0261\x07\v\x02\x02\u0260\u025F\x03\x02\x02\x02\u0260" +
    "\u0261\x03\x02\x02\x02\u0261\u0263\x03\x02\x02\x02\u0262\u0264\x07\n\x02" +
    "\x02\u0263\u0262\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0266" +
    "\x03\x02\x02\x02\u0265\u0267\x07\v\x02\x02\u0266\u0265\x03\x02\x02\x02" +
    "\u0266\u0267\x03\x02\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268\u0269\x07" +
    "\x1D\x02\x02\u0269?\x03\x02\x02\x02\u026A\u027B\x05B\"\x02\u026B\u026D" +
    "\x07\v\x02\x02\u026C\u026B\x03\x02\x02\x02\u026C\u026D\x03\x02\x02\x02" +
    "\u026D\u026E\x03\x02\x02\x02\u026E\u0270\x07\x14\x02\x02\u026F\u0271\x07" +
    "\v\x02\x02\u0270\u026F\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271" +
    "\u0273\x03\x02\x02\x02\u0272\u0274\x07\n\x02\x02\u0273\u0272\x03\x02\x02" +
    "\x02\u0273\u0274\x03\x02\x02\x02\u0274\u0276\x03\x02\x02\x02\u0275\u0277" +
    "\x07\v\x02\x02\u0276\u0275\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02" +
    "\u0277\u0278\x03\x02\x02\x02\u0278\u027A\x05B\"\x02\u0279\u026C\x03\x02" +
    "\x02\x02\u027A\u027D\x03\x02\x02\x02\u027B\u0279\x03\x02\x02\x02\u027B" +
    "\u027C\x03\x02\x02\x02\u027CA\x03\x02\x02\x02\u027D\u027B\x03\x02\x02" +
    "\x02\u027E\u0280\x05D#\x02\u027F\u0281\x07\v\x02\x02\u0280\u027F\x03\x02" +
    "\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u0282\x03\x02\x02\x02\u0282" +
    "\u0284\x07\x12\x02\x02\u0283\u0285\x07\v\x02\x02\u0284\u0283\x03\x02\x02" +
    "\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0287" +
    "\x05> \x02\u0287\u0293\x03\x02\x02\x02\u0288\u028A\x05D#\x02\u0289\u028B" +
    "\x07\v\x02\x02\u028A\u0289\x03\x02\x02\x02\u028A\u028B\x03\x02\x02\x02" +
    "\u028B\u028C\x03\x02\x02\x02\u028C\u028E\x07\x12\x02\x02\u028D\u028F\x07" +
    "\v\x02\x02\u028E\u028D\x03\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F" +
    "\u0290\x03\x02\x02\x02\u0290\u0291\x05D#\x02\u0291\u0293\x03\x02\x02\x02" +
    "\u0292\u027E\x03\x02\x02\x02\u0292\u0288\x03\x02\x02\x02\u0293C\x03\x02" +
    "\x02\x02\u0294\u0295\t\x06\x02\x02\u0295E\x03\x02\x02\x02\u0296\u0298" +
    "\x07\x1E\x02\x02\u0297\u0299\x07\v\x02\x02\u0298\u0297\x03\x02\x02\x02" +
    "\u0298\u0299\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u029C\x05" +
    "8\x1D\x02\u029B\u029D\x07\v\x02\x02\u029C\u029B\x03\x02\x02\x02\u029C" +
    "\u029D\x03\x02\x02\x02\u029D\u029E\x03\x02\x02\x02\u029E\u029F\x07\x1F" +
    "\x02\x02\u029FG\x03\x02\x02\x02\u02A0\u02A1\x05J&\x02\u02A1I\x03\x02\x02" +
    "\x02\u02A2\u02A6\x05L\'\x02\u02A3\u02A5\x05P)\x02\u02A4\u02A3\x03\x02" +
    "\x02\x02\u02A5\u02A8\x03\x02\x02\x02\u02A6\u02A4\x03\x02\x02\x02\u02A6" +
    "\u02A7\x03\x02\x02\x02\u02A7\u02B1\x03\x02\x02\x02\u02A8\u02A6\x03\x02" +
    "\x02\x02\u02A9\u02AD\x05T+\x02\u02AA\u02AC\x05P)\x02\u02AB\u02AA\x03\x02" +
    "\x02\x02\u02AC\u02AF\x03\x02\x02\x02\u02AD\u02AB\x03\x02\x02\x02\u02AD" +
    "\u02AE\x03\x02\x02\x02\u02AE\u02B1\x03\x02\x02\x02\u02AF\u02AD\x03\x02" +
    "\x02\x02\u02B0\u02A2\x03\x02\x02\x02\u02B0\u02A9\x03\x02\x02\x02\u02B1" +
    "K\x03\x02\x02\x02\u02B2\u02B4\x07\v\x02\x02\u02B3\u02B2\x03\x02\x02\x02" +
    "\u02B3\u02B4\x03\x02\x02\x02\u02B4\u02B6\x03\x02\x02\x02\u02B5\u02B7\x05" +
    "N(\x02\u02B6\u02B5\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02\u02B8\u02B6" +
    "\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BF\x03\x02\x02\x02" +
    "\u02BA\u02BE\x05N(\x02\u02BB\u02BE\x07\v\x02\x02\u02BC\u02BE\x07\r\x02" +
    "\x02\u02BD\u02BA\x03\x02\x02\x02\u02BD\u02BB\x03\x02\x02\x02\u02BD\u02BC" +
    "\x03\x02\x02\x02\u02BE\u02C1\x03\x02\x02\x02\u02BF\u02BD\x03\x02\x02\x02" +
    "\u02BF\u02C0\x03\x02\x02\x02\u02C0M\x03\x02\x02\x02\u02C1\u02BF\x03\x02" +
    "\x02\x02\u02C2\u02CC\x07\f\x02\x02\u02C3\u02CC\x07\t\x02\x02\u02C4\u02CC" +
    "\x07\x11\x02\x02\u02C5\u02CC\x07\x1C\x02\x02\u02C6\u02CC\x07\x1D\x02\x02" +
    "\u02C7\u02CC\x07\x12\x02\x02\u02C8\u02CC\x07\x0F\x02\x02\u02C9\u02CC\x07" +
    "\x13\x02\x02\u02CA\u02CC\x05D#\x02\u02CB\u02C2\x03\x02\x02\x02\u02CB\u02C3" +
    "\x03\x02\x02\x02\u02CB\u02C4\x03\x02\x02\x02\u02CB\u02C5\x03\x02\x02\x02" +
    "\u02CB\u02C6\x03\x02\x02\x02\u02CB\u02C7\x03\x02\x02\x02\u02CB\u02C8\x03" +
    "\x02\x02\x02\u02CB\u02C9\x03\x02\x02\x02\u02CB\u02CA\x03\x02\x02\x02\u02CC" +
    "O\x03\x02\x02\x02\u02CD\u02D0\x05T+\x02\u02CE\u02D0\x05R*\x02\u02CF\u02CD" +
    "\x03\x02\x02\x02\u02CF\u02CE\x03\x02\x02\x02\u02D0Q\x03\x02\x02\x02\u02D1" +
    "\u02D5\x05N(\x02\u02D2\u02D5\x07\v\x02\x02\u02D3\u02D5\x07\r\x02\x02\u02D4" +
    "\u02D1\x03\x02\x02\x02\u02D4\u02D2\x03\x02\x02\x02\u02D4\u02D3\x03\x02" +
    "\x02\x02\u02D5\u02D6\x03\x02\x02\x02\u02D6\u02D4\x03\x02\x02\x02\u02D6" +
    "\u02D7\x03\x02\x02\x02\u02D7S\x03\x02\x02\x02\u02D8\u02D9\x07\x1B\x02" +
    "\x02\u02D9\u02DA\x05V,\x02\u02DA\u02DC\x07\v\x02\x02\u02DB\u02DD\x05X" +
    "-\x02\u02DC\u02DB\x03\x02\x02\x02\u02DC\u02DD\x03\x02\x02\x02\u02DD\u02DE" +
    "\x03\x02\x02\x02\u02DE\u02DF\x07\x1D\x02\x02\u02DFU\x03\x02\x02\x02\u02E0" +
    "\u02E1\x05`1\x02\u02E1W\x03\x02\x02\x02\u02E2\u02E4\x05\\/\x02\u02E3\u02E2" +
    "\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02E3\x03\x02\x02\x02" +
    "\u02E5\u02E6\x03\x02\x02\x02\u02E6Y\x03\x02\x02\x02\u02E7\u02EB\x07\x1C" +
    "\x02\x02\u02E8\u02EA\x05\\/\x02\u02E9\u02E8\x03\x02\x02\x02\u02EA\u02ED" +
    "\x03\x02\x02\x02\u02EB\u02E9\x03\x02\x02\x02\u02EB\u02EC\x03\x02\x02\x02" +
    "\u02EC\u02EE\x03\x02\x02\x02\u02ED\u02EB\x03\x02\x02\x02\u02EE\u02EF\x07" +
    "\x1D\x02\x02\u02EF[\x03\x02\x02\x02\u02F0\u02FA\x05Z.\x02\u02F1\u02F6" +
    "\x05^0\x02\u02F2\u02F3\x07\n\x02\x02\u02F3\u02F5\x05^0\x02\u02F4\u02F2" +
    "\x03\x02\x02\x02\u02F5\u02F8\x03\x02\x02\x02\u02F6\u02F4\x03\x02\x02\x02" +
    "\u02F6\u02F7\x03\x02\x02\x02\u02F7\u02FA\x03\x02\x02\x02\u02F8\u02F6\x03" +
    "\x02\x02\x02\u02F9\u02F0\x03\x02\x02\x02\u02F9\u02F1\x03\x02\x02\x02\u02FA" +
    "]\x03\x02\x02\x02\u02FB\u02FC\t\x07\x02\x02\u02FC_\x03\x02\x02\x02\u02FD" +
    "\u02FE\x07\t\x02\x02\u02FEa\x03\x02\x02\x02\x81einz\x8C\x90\xA2\xAE\xB2" +
    "\xBA\xBE\xC2\xC6\xCE\xD2\xDE\xE2\xE6\xEA\xF4\xF8\xFE\u0102\u010A\u0112" +
    "\u011C\u0123\u0125\u0129\u012F\u0133\u0137\u013C\u0140\u0144\u0148\u014E" +
    "\u0152\u0157\u015F\u0163\u0167\u016B\u0171\u0175\u0179\u017D\u0183\u0187" +
    "\u018B\u0190\u0195\u019A\u019E\u01A1\u01A6\u01A9\u01AD\u01B2\u01B6\u01C1" +
    "\u01C6\u01CB\u01D0\u01D3\u01D6\u01D9\u01DC\u01DF\u01E2\u01E8\u01EC\u01EF" +
    "\u01F2\u01F7\u01FC\u01FF\u0203\u020F\u0216\u0218\u021C\u0226\u022A\u022E" +
    "\u0233\u0237\u023A\u023C\u0244\u0248\u024D\u0254\u0257\u025A\u025D\u0260" +
    "\u0263\u0266\u026C\u0270\u0273\u0276\u027B\u0280\u0284\u028A\u028E\u0292" +
    "\u0298\u029C\u02A6\u02AD\u02B0\u02B3\u02B8\u02BD\u02BF\u02CB\u02CF\u02D4" +
    "\u02D6\u02DC\u02E5\u02EB\u02F6\u02F9";
TomParser._serializedATN = Utils.join([
    TomParser._serializedATNSegment0,
    TomParser._serializedATNSegment1
], "");
__decorate([
    Decorators_2.Override,
    Decorators_1.NotNull
], TomParser.prototype, "vocabulary", null);
__decorate([
    Decorators_2.Override
], TomParser.prototype, "grammarFileName", null);
__decorate([
    Decorators_2.Override
], TomParser.prototype, "ruleNames", null);
__decorate([
    Decorators_2.Override
], TomParser.prototype, "serializedATN", null);
exports.TomParser = TomParser;
class DocumentationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EOF() { return this.getToken(TomParser.EOF, 0); }
    body() {
        return this.tryGetRuleContext(0, BodyContext);
    }
    NEWLINE() { return this.tryGetToken(TomParser.NEWLINE, 0); }
    get ruleIndex() { return TomParser.RULE_documentation; }
    enterRule(listener) {
        if (listener.enterDocumentation)
            listener.enterDocumentation(this);
    }
    exitRule(listener) {
        if (listener.exitDocumentation)
            listener.exitDocumentation(this);
    }
    accept(visitor) {
        if (visitor.visitDocumentation)
            return visitor.visitDocumentation(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DocumentationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DocumentationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DocumentationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DocumentationContext.prototype, "accept", null);
exports.DocumentationContext = DocumentationContext;
class BodyContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    annotations() {
        return this.getRuleContext(0, AnnotationsContext);
    }
    whitespace(i) {
        if (i === undefined) {
            return this.getRuleContexts(WhitespaceContext);
        }
        else {
            return this.getRuleContext(i, WhitespaceContext);
        }
    }
    get ruleIndex() { return TomParser.RULE_body; }
    enterRule(listener) {
        if (listener.enterBody)
            listener.enterBody(this);
    }
    exitRule(listener) {
        if (listener.exitBody)
            listener.exitBody(this);
    }
    accept(visitor) {
        if (visitor.visitBody)
            return visitor.visitBody(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BodyContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BodyContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BodyContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BodyContext.prototype, "accept", null);
exports.BodyContext = BodyContext;
class WhitespaceContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SPACE() { return this.tryGetToken(TomParser.SPACE, 0); }
    NEWLINE() { return this.tryGetToken(TomParser.NEWLINE, 0); }
    get ruleIndex() { return TomParser.RULE_whitespace; }
    enterRule(listener) {
        if (listener.enterWhitespace)
            listener.enterWhitespace(this);
    }
    exitRule(listener) {
        if (listener.exitWhitespace)
            listener.exitWhitespace(this);
    }
    accept(visitor) {
        if (visitor.visitWhitespace)
            return visitor.visitWhitespace(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], WhitespaceContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], WhitespaceContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], WhitespaceContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], WhitespaceContext.prototype, "accept", null);
exports.WhitespaceContext = WhitespaceContext;
class AnnotationsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    tag(i) {
        if (i === undefined) {
            return this.getRuleContexts(TagContext);
        }
        else {
            return this.getRuleContext(i, TagContext);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.NEWLINE);
        }
        else {
            return this.getToken(TomParser.NEWLINE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_annotations; }
    enterRule(listener) {
        if (listener.enterAnnotations)
            listener.enterAnnotations(this);
    }
    exitRule(listener) {
        if (listener.exitAnnotations)
            listener.exitAnnotations(this);
    }
    accept(visitor) {
        if (visitor.visitAnnotations)
            return visitor.visitAnnotations(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AnnotationsContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AnnotationsContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AnnotationsContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AnnotationsContext.prototype, "accept", null);
exports.AnnotationsContext = AnnotationsContext;
class TagContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    tagName() {
        return this.getRuleContext(0, TagNameContext);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    MINUS() { return this.tryGetToken(TomParser.MINUS, 0); }
    description() {
        return this.tryGetRuleContext(0, DescriptionContext);
    }
    tagID() {
        return this.tryGetRuleContext(0, TagIDContext);
    }
    EQUAL() { return this.tryGetToken(TomParser.EQUAL, 0); }
    value() {
        return this.tryGetRuleContext(0, ValueContext);
    }
    COLON() { return this.tryGetToken(TomParser.COLON, 0); }
    type() {
        return this.tryGetRuleContext(0, TypeContext);
    }
    get ruleIndex() { return TomParser.RULE_tag; }
    enterRule(listener) {
        if (listener.enterTag)
            listener.enterTag(this);
    }
    exitRule(listener) {
        if (listener.exitTag)
            listener.exitTag(this);
    }
    accept(visitor) {
        if (visitor.visitTag)
            return visitor.visitTag(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TagContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TagContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TagContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TagContext.prototype, "accept", null);
exports.TagContext = TagContext;
class TagNameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    AT() { return this.getToken(TomParser.AT, 0); }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    get ruleIndex() { return TomParser.RULE_tagName; }
    enterRule(listener) {
        if (listener.enterTagName)
            listener.enterTagName(this);
    }
    exitRule(listener) {
        if (listener.exitTagName)
            listener.exitTagName(this);
    }
    accept(visitor) {
        if (visitor.visitTagName)
            return visitor.visitTagName(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TagNameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TagNameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TagNameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TagNameContext.prototype, "accept", null);
exports.TagNameContext = TagNameContext;
class TagIDContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    propertyTagID() {
        return this.tryGetRuleContext(0, PropertyTagIDContext);
    }
    optionalTagID() {
        return this.tryGetRuleContext(0, OptionalTagIDContext);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    get ruleIndex() { return TomParser.RULE_tagID; }
    enterRule(listener) {
        if (listener.enterTagID)
            listener.enterTagID(this);
    }
    exitRule(listener) {
        if (listener.exitTagID)
            listener.exitTagID(this);
    }
    accept(visitor) {
        if (visitor.visitTagID)
            return visitor.visitTagID(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TagIDContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TagIDContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TagIDContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TagIDContext.prototype, "accept", null);
exports.TagIDContext = TagIDContext;
class OptionalTagIDContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    QUESTION() { return this.getToken(TomParser.QUESTION, 0); }
    get ruleIndex() { return TomParser.RULE_optionalTagID; }
    enterRule(listener) {
        if (listener.enterOptionalTagID)
            listener.enterOptionalTagID(this);
    }
    exitRule(listener) {
        if (listener.exitOptionalTagID)
            listener.exitOptionalTagID(this);
    }
    accept(visitor) {
        if (visitor.visitOptionalTagID)
            return visitor.visitOptionalTagID(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], OptionalTagIDContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], OptionalTagIDContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], OptionalTagIDContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], OptionalTagIDContext.prototype, "accept", null);
exports.OptionalTagIDContext = OptionalTagIDContext;
class PropertyTagIDContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    optionalTagID() {
        return this.tryGetRuleContext(0, OptionalTagIDContext);
    }
    PERIOD(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.PERIOD);
        }
        else {
            return this.getToken(TomParser.PERIOD, i);
        }
    }
    optionalTagOrIdentifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(OptionalTagOrIdentifierContext);
        }
        else {
            return this.getRuleContext(i, OptionalTagOrIdentifierContext);
        }
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    get ruleIndex() { return TomParser.RULE_propertyTagID; }
    enterRule(listener) {
        if (listener.enterPropertyTagID)
            listener.enterPropertyTagID(this);
    }
    exitRule(listener) {
        if (listener.exitPropertyTagID)
            listener.exitPropertyTagID(this);
    }
    accept(visitor) {
        if (visitor.visitPropertyTagID)
            return visitor.visitPropertyTagID(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PropertyTagIDContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PropertyTagIDContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PropertyTagIDContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PropertyTagIDContext.prototype, "accept", null);
exports.PropertyTagIDContext = PropertyTagIDContext;
class OptionalTagOrIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    optionalTagID() {
        return this.tryGetRuleContext(0, OptionalTagIDContext);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    get ruleIndex() { return TomParser.RULE_optionalTagOrIdentifier; }
    enterRule(listener) {
        if (listener.enterOptionalTagOrIdentifier)
            listener.enterOptionalTagOrIdentifier(this);
    }
    exitRule(listener) {
        if (listener.exitOptionalTagOrIdentifier)
            listener.exitOptionalTagOrIdentifier(this);
    }
    accept(visitor) {
        if (visitor.visitOptionalTagOrIdentifier)
            return visitor.visitOptionalTagOrIdentifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], OptionalTagOrIdentifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], OptionalTagOrIdentifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], OptionalTagOrIdentifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], OptionalTagOrIdentifierContext.prototype, "accept", null);
exports.OptionalTagOrIdentifierContext = OptionalTagOrIdentifierContext;
class TypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    type(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    }
    PIPE() { return this.tryGetToken(TomParser.PIPE, 0); }
    AMP() { return this.tryGetToken(TomParser.AMP, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    lambdaType() {
        return this.tryGetRuleContext(0, LambdaTypeContext);
    }
    tupleType() {
        return this.tryGetRuleContext(0, TupleTypeContext);
    }
    primaryType() {
        return this.tryGetRuleContext(0, PrimaryTypeContext);
    }
    get ruleIndex() { return TomParser.RULE_type; }
    enterRule(listener) {
        if (listener.enterType)
            listener.enterType(this);
    }
    exitRule(listener) {
        if (listener.exitType)
            listener.exitType(this);
    }
    accept(visitor) {
        if (visitor.visitType)
            return visitor.visitType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TypeContext.prototype, "accept", null);
exports.TypeContext = TypeContext;
class TupleTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LESSTHAN() { return this.getToken(TomParser.LESSTHAN, 0); }
    tupleTypeList() {
        return this.getRuleContext(0, TupleTypeListContext);
    }
    GREATERTHAN() { return this.getToken(TomParser.GREATERTHAN, 0); }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_tupleType; }
    enterRule(listener) {
        if (listener.enterTupleType)
            listener.enterTupleType(this);
    }
    exitRule(listener) {
        if (listener.exitTupleType)
            listener.exitTupleType(this);
    }
    accept(visitor) {
        if (visitor.visitTupleType)
            return visitor.visitTupleType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TupleTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TupleTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TupleTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TupleTypeContext.prototype, "accept", null);
exports.TupleTypeContext = TupleTypeContext;
class TupleTypeListContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    type(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.COMMA);
        }
        else {
            return this.getToken(TomParser.COMMA, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_tupleTypeList; }
    enterRule(listener) {
        if (listener.enterTupleTypeList)
            listener.enterTupleTypeList(this);
    }
    exitRule(listener) {
        if (listener.exitTupleTypeList)
            listener.exitTupleTypeList(this);
    }
    accept(visitor) {
        if (visitor.visitTupleTypeList)
            return visitor.visitTupleTypeList(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TupleTypeListContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TupleTypeListContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TupleTypeListContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TupleTypeListContext.prototype, "accept", null);
exports.TupleTypeListContext = TupleTypeListContext;
class PrimaryTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    parenthesizedType() {
        return this.tryGetRuleContext(0, ParenthesizedTypeContext);
    }
    objectType() {
        return this.tryGetRuleContext(0, ObjectTypeContext);
    }
    arrayType() {
        return this.tryGetRuleContext(0, ArrayTypeContext);
    }
    propertyType() {
        return this.tryGetRuleContext(0, PropertyTypeContext);
    }
    optionalType() {
        return this.tryGetRuleContext(0, OptionalTypeContext);
    }
    identifierOrKeyword() {
        return this.tryGetRuleContext(0, IdentifierOrKeywordContext);
    }
    get ruleIndex() { return TomParser.RULE_primaryType; }
    enterRule(listener) {
        if (listener.enterPrimaryType)
            listener.enterPrimaryType(this);
    }
    exitRule(listener) {
        if (listener.exitPrimaryType)
            listener.exitPrimaryType(this);
    }
    accept(visitor) {
        if (visitor.visitPrimaryType)
            return visitor.visitPrimaryType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PrimaryTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PrimaryTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PrimaryTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PrimaryTypeContext.prototype, "accept", null);
exports.PrimaryTypeContext = PrimaryTypeContext;
class IdentifierOrKeywordContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    NullLiteral() { return this.tryGetToken(TomParser.NullLiteral, 0); }
    get ruleIndex() { return TomParser.RULE_identifierOrKeyword; }
    enterRule(listener) {
        if (listener.enterIdentifierOrKeyword)
            listener.enterIdentifierOrKeyword(this);
    }
    exitRule(listener) {
        if (listener.exitIdentifierOrKeyword)
            listener.exitIdentifierOrKeyword(this);
    }
    accept(visitor) {
        if (visitor.visitIdentifierOrKeyword)
            return visitor.visitIdentifierOrKeyword(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], IdentifierOrKeywordContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], IdentifierOrKeywordContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], IdentifierOrKeywordContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], IdentifierOrKeywordContext.prototype, "accept", null);
exports.IdentifierOrKeywordContext = IdentifierOrKeywordContext;
class ParenthesizedTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    PAREN_OPEN() { return this.getToken(TomParser.PAREN_OPEN, 0); }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    PAREN_CLOSE() { return this.getToken(TomParser.PAREN_CLOSE, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_parenthesizedType; }
    enterRule(listener) {
        if (listener.enterParenthesizedType)
            listener.enterParenthesizedType(this);
    }
    exitRule(listener) {
        if (listener.exitParenthesizedType)
            listener.exitParenthesizedType(this);
    }
    accept(visitor) {
        if (visitor.visitParenthesizedType)
            return visitor.visitParenthesizedType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ParenthesizedTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ParenthesizedTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ParenthesizedTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ParenthesizedTypeContext.prototype, "accept", null);
exports.ParenthesizedTypeContext = ParenthesizedTypeContext;
class LambdaTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    PAREN_OPEN() { return this.tryGetToken(TomParser.PAREN_OPEN, 0); }
    formalParameterSequence() {
        return this.tryGetRuleContext(0, FormalParameterSequenceContext);
    }
    PAREN_CLOSE() { return this.tryGetToken(TomParser.PAREN_CLOSE, 0); }
    ARROW() { return this.getToken(TomParser.ARROW, 0); }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    parameter() {
        return this.tryGetRuleContext(0, ParameterContext);
    }
    get ruleIndex() { return TomParser.RULE_lambdaType; }
    enterRule(listener) {
        if (listener.enterLambdaType)
            listener.enterLambdaType(this);
    }
    exitRule(listener) {
        if (listener.exitLambdaType)
            listener.exitLambdaType(this);
    }
    accept(visitor) {
        if (visitor.visitLambdaType)
            return visitor.visitLambdaType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LambdaTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LambdaTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LambdaTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LambdaTypeContext.prototype, "accept", null);
exports.LambdaTypeContext = LambdaTypeContext;
class FormalParameterSequenceContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    parameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(ParameterContext);
        }
        else {
            return this.getRuleContext(i, ParameterContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.COMMA);
        }
        else {
            return this.getToken(TomParser.COMMA, i);
        }
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_formalParameterSequence; }
    enterRule(listener) {
        if (listener.enterFormalParameterSequence)
            listener.enterFormalParameterSequence(this);
    }
    exitRule(listener) {
        if (listener.exitFormalParameterSequence)
            listener.exitFormalParameterSequence(this);
    }
    accept(visitor) {
        if (visitor.visitFormalParameterSequence)
            return visitor.visitFormalParameterSequence(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FormalParameterSequenceContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FormalParameterSequenceContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FormalParameterSequenceContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FormalParameterSequenceContext.prototype, "accept", null);
exports.FormalParameterSequenceContext = FormalParameterSequenceContext;
class ParameterContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    COLON() { return this.tryGetToken(TomParser.COLON, 0); }
    type() {
        return this.tryGetRuleContext(0, TypeContext);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_parameter; }
    enterRule(listener) {
        if (listener.enterParameter)
            listener.enterParameter(this);
    }
    exitRule(listener) {
        if (listener.exitParameter)
            listener.exitParameter(this);
    }
    accept(visitor) {
        if (visitor.visitParameter)
            return visitor.visitParameter(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ParameterContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ParameterContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ParameterContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ParameterContext.prototype, "accept", null);
exports.ParameterContext = ParameterContext;
class ArrayTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BRACKET_OPEN() { return this.getToken(TomParser.BRACKET_OPEN, 0); }
    BRACKET_CLOSE() { return this.getToken(TomParser.BRACKET_CLOSE, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    type(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.COMMA);
        }
        else {
            return this.getToken(TomParser.COMMA, i);
        }
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    objectType() {
        return this.tryGetRuleContext(0, ObjectTypeContext);
    }
    arrayType() {
        return this.tryGetRuleContext(0, ArrayTypeContext);
    }
    get ruleIndex() { return TomParser.RULE_arrayType; }
    enterRule(listener) {
        if (listener.enterArrayType)
            listener.enterArrayType(this);
    }
    exitRule(listener) {
        if (listener.exitArrayType)
            listener.exitArrayType(this);
    }
    accept(visitor) {
        if (visitor.visitArrayType)
            return visitor.visitArrayType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ArrayTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ArrayTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ArrayTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ArrayTypeContext.prototype, "accept", null);
exports.ArrayTypeContext = ArrayTypeContext;
class ObjectTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BRACE_OPEN() { return this.getToken(TomParser.BRACE_OPEN, 0); }
    BRACE_CLOSE() { return this.getToken(TomParser.BRACE_CLOSE, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.NEWLINE);
        }
        else {
            return this.getToken(TomParser.NEWLINE, i);
        }
    }
    objectPairTypeList() {
        return this.tryGetRuleContext(0, ObjectPairTypeListContext);
    }
    get ruleIndex() { return TomParser.RULE_objectType; }
    enterRule(listener) {
        if (listener.enterObjectType)
            listener.enterObjectType(this);
    }
    exitRule(listener) {
        if (listener.exitObjectType)
            listener.exitObjectType(this);
    }
    accept(visitor) {
        if (visitor.visitObjectType)
            return visitor.visitObjectType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ObjectTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ObjectTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ObjectTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ObjectTypeContext.prototype, "accept", null);
exports.ObjectTypeContext = ObjectTypeContext;
class ObjectPairTypeListContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    objectPairType(i) {
        if (i === undefined) {
            return this.getRuleContexts(ObjectPairTypeContext);
        }
        else {
            return this.getRuleContext(i, ObjectPairTypeContext);
        }
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.COMMA);
        }
        else {
            return this.getToken(TomParser.COMMA, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.NEWLINE);
        }
        else {
            return this.getToken(TomParser.NEWLINE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_objectPairTypeList; }
    enterRule(listener) {
        if (listener.enterObjectPairTypeList)
            listener.enterObjectPairTypeList(this);
    }
    exitRule(listener) {
        if (listener.exitObjectPairTypeList)
            listener.exitObjectPairTypeList(this);
    }
    accept(visitor) {
        if (visitor.visitObjectPairTypeList)
            return visitor.visitObjectPairTypeList(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ObjectPairTypeListContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ObjectPairTypeListContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairTypeListContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairTypeListContext.prototype, "accept", null);
exports.ObjectPairTypeListContext = ObjectPairTypeListContext;
class ObjectPairTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    type(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    }
    COLON() { return this.getToken(TomParser.COLON, 0); }
    QUESTION() { return this.tryGetToken(TomParser.QUESTION, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_objectPairType; }
    enterRule(listener) {
        if (listener.enterObjectPairType)
            listener.enterObjectPairType(this);
    }
    exitRule(listener) {
        if (listener.exitObjectPairType)
            listener.exitObjectPairType(this);
    }
    accept(visitor) {
        if (visitor.visitObjectPairType)
            return visitor.visitObjectPairType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ObjectPairTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ObjectPairTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairTypeContext.prototype, "accept", null);
exports.ObjectPairTypeContext = ObjectPairTypeContext;
class OptionalTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    QUESTION() { return this.getToken(TomParser.QUESTION, 0); }
    get ruleIndex() { return TomParser.RULE_optionalType; }
    enterRule(listener) {
        if (listener.enterOptionalType)
            listener.enterOptionalType(this);
    }
    exitRule(listener) {
        if (listener.exitOptionalType)
            listener.exitOptionalType(this);
    }
    accept(visitor) {
        if (visitor.visitOptionalType)
            return visitor.visitOptionalType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], OptionalTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], OptionalTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], OptionalTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], OptionalTypeContext.prototype, "accept", null);
exports.OptionalTypeContext = OptionalTypeContext;
class PropertyTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    PERIOD(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.PERIOD);
        }
        else {
            return this.getToken(TomParser.PERIOD, i);
        }
    }
    optionalTypeOrIdentifer(i) {
        if (i === undefined) {
            return this.getRuleContexts(OptionalTypeOrIdentiferContext);
        }
        else {
            return this.getRuleContext(i, OptionalTypeOrIdentiferContext);
        }
    }
    optionalType() {
        return this.tryGetRuleContext(0, OptionalTypeContext);
    }
    get ruleIndex() { return TomParser.RULE_propertyType; }
    enterRule(listener) {
        if (listener.enterPropertyType)
            listener.enterPropertyType(this);
    }
    exitRule(listener) {
        if (listener.exitPropertyType)
            listener.exitPropertyType(this);
    }
    accept(visitor) {
        if (visitor.visitPropertyType)
            return visitor.visitPropertyType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PropertyTypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PropertyTypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PropertyTypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PropertyTypeContext.prototype, "accept", null);
exports.PropertyTypeContext = PropertyTypeContext;
class OptionalTypeOrIdentiferContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    optionalType() {
        return this.tryGetRuleContext(0, OptionalTypeContext);
    }
    get ruleIndex() { return TomParser.RULE_optionalTypeOrIdentifer; }
    enterRule(listener) {
        if (listener.enterOptionalTypeOrIdentifer)
            listener.enterOptionalTypeOrIdentifer(this);
    }
    exitRule(listener) {
        if (listener.exitOptionalTypeOrIdentifer)
            listener.exitOptionalTypeOrIdentifer(this);
    }
    accept(visitor) {
        if (visitor.visitOptionalTypeOrIdentifer)
            return visitor.visitOptionalTypeOrIdentifer(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], OptionalTypeOrIdentiferContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], OptionalTypeOrIdentiferContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], OptionalTypeOrIdentiferContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], OptionalTypeOrIdentiferContext.prototype, "accept", null);
exports.OptionalTypeOrIdentiferContext = OptionalTypeOrIdentiferContext;
class ValueContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() { return TomParser.RULE_value; }
    enterRule(listener) {
        if (listener.enterValue)
            listener.enterValue(this);
    }
    exitRule(listener) {
        if (listener.exitValue)
            listener.exitValue(this);
    }
    accept(visitor) {
        if (visitor.visitValue)
            return visitor.visitValue(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ValueContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ValueContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ValueContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ValueContext.prototype, "accept", null);
exports.ValueContext = ValueContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unaryExpression() {
        return this.tryGetRuleContext(0, UnaryExpressionContext);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    STAR() { return this.tryGetToken(TomParser.STAR, 0); }
    FORWARD_SLASH() { return this.tryGetToken(TomParser.FORWARD_SLASH, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    PLUS() { return this.tryGetToken(TomParser.PLUS, 0); }
    MINUS() { return this.tryGetToken(TomParser.MINUS, 0); }
    arrayExpression() {
        return this.tryGetRuleContext(0, ArrayExpressionContext);
    }
    objectExpression() {
        return this.tryGetRuleContext(0, ObjectExpressionContext);
    }
    literal() {
        return this.tryGetRuleContext(0, LiteralContext);
    }
    parenthesizedExpression() {
        return this.tryGetRuleContext(0, ParenthesizedExpressionContext);
    }
    get ruleIndex() { return TomParser.RULE_expression; }
    enterRule(listener) {
        if (listener.enterExpression)
            listener.enterExpression(this);
    }
    exitRule(listener) {
        if (listener.exitExpression)
            listener.exitExpression(this);
    }
    accept(visitor) {
        if (visitor.visitExpression)
            return visitor.visitExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "accept", null);
exports.ExpressionContext = ExpressionContext;
class UnaryExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    PLUS() { return this.tryGetToken(TomParser.PLUS, 0); }
    MINUS() { return this.tryGetToken(TomParser.MINUS, 0); }
    get ruleIndex() { return TomParser.RULE_unaryExpression; }
    enterRule(listener) {
        if (listener.enterUnaryExpression)
            listener.enterUnaryExpression(this);
    }
    exitRule(listener) {
        if (listener.exitUnaryExpression)
            listener.exitUnaryExpression(this);
    }
    accept(visitor) {
        if (visitor.visitUnaryExpression)
            return visitor.visitUnaryExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], UnaryExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], UnaryExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], UnaryExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], UnaryExpressionContext.prototype, "accept", null);
exports.UnaryExpressionContext = UnaryExpressionContext;
class ArrayExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BRACKET_OPEN() { return this.getToken(TomParser.BRACKET_OPEN, 0); }
    BRACKET_CLOSE() { return this.getToken(TomParser.BRACKET_CLOSE, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.COMMA);
        }
        else {
            return this.getToken(TomParser.COMMA, i);
        }
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_arrayExpression; }
    enterRule(listener) {
        if (listener.enterArrayExpression)
            listener.enterArrayExpression(this);
    }
    exitRule(listener) {
        if (listener.exitArrayExpression)
            listener.exitArrayExpression(this);
    }
    accept(visitor) {
        if (visitor.visitArrayExpression)
            return visitor.visitArrayExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ArrayExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ArrayExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ArrayExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ArrayExpressionContext.prototype, "accept", null);
exports.ArrayExpressionContext = ArrayExpressionContext;
class ObjectExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BRACE_OPEN() { return this.getToken(TomParser.BRACE_OPEN, 0); }
    BRACE_CLOSE() { return this.getToken(TomParser.BRACE_CLOSE, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.NEWLINE);
        }
        else {
            return this.getToken(TomParser.NEWLINE, i);
        }
    }
    objectPairExpressionList() {
        return this.tryGetRuleContext(0, ObjectPairExpressionListContext);
    }
    get ruleIndex() { return TomParser.RULE_objectExpression; }
    enterRule(listener) {
        if (listener.enterObjectExpression)
            listener.enterObjectExpression(this);
    }
    exitRule(listener) {
        if (listener.exitObjectExpression)
            listener.exitObjectExpression(this);
    }
    accept(visitor) {
        if (visitor.visitObjectExpression)
            return visitor.visitObjectExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ObjectExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ObjectExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ObjectExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ObjectExpressionContext.prototype, "accept", null);
exports.ObjectExpressionContext = ObjectExpressionContext;
class ObjectPairExpressionListContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    objectPairExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ObjectPairExpressionContext);
        }
        else {
            return this.getRuleContext(i, ObjectPairExpressionContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.COMMA);
        }
        else {
            return this.getToken(TomParser.COMMA, i);
        }
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.NEWLINE);
        }
        else {
            return this.getToken(TomParser.NEWLINE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_objectPairExpressionList; }
    enterRule(listener) {
        if (listener.enterObjectPairExpressionList)
            listener.enterObjectPairExpressionList(this);
    }
    exitRule(listener) {
        if (listener.exitObjectPairExpressionList)
            listener.exitObjectPairExpressionList(this);
    }
    accept(visitor) {
        if (visitor.visitObjectPairExpressionList)
            return visitor.visitObjectPairExpressionList(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ObjectPairExpressionListContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ObjectPairExpressionListContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairExpressionListContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairExpressionListContext.prototype, "accept", null);
exports.ObjectPairExpressionListContext = ObjectPairExpressionListContext;
class ObjectPairExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    literal(i) {
        if (i === undefined) {
            return this.getRuleContexts(LiteralContext);
        }
        else {
            return this.getRuleContext(i, LiteralContext);
        }
    }
    COLON() { return this.getToken(TomParser.COLON, 0); }
    objectExpression() {
        return this.tryGetRuleContext(0, ObjectExpressionContext);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_objectPairExpression; }
    enterRule(listener) {
        if (listener.enterObjectPairExpression)
            listener.enterObjectPairExpression(this);
    }
    exitRule(listener) {
        if (listener.exitObjectPairExpression)
            listener.exitObjectPairExpression(this);
    }
    accept(visitor) {
        if (visitor.visitObjectPairExpression)
            return visitor.visitObjectPairExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ObjectPairExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ObjectPairExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairExpressionContext.prototype, "accept", null);
exports.ObjectPairExpressionContext = ObjectPairExpressionContext;
class LiteralContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IntegerLiteral() { return this.tryGetToken(TomParser.IntegerLiteral, 0); }
    FloatingPointLiteral() { return this.tryGetToken(TomParser.FloatingPointLiteral, 0); }
    BooleanLiteral() { return this.tryGetToken(TomParser.BooleanLiteral, 0); }
    CharacterLiteral() { return this.tryGetToken(TomParser.CharacterLiteral, 0); }
    StringLiteral() { return this.tryGetToken(TomParser.StringLiteral, 0); }
    NullLiteral() { return this.tryGetToken(TomParser.NullLiteral, 0); }
    get ruleIndex() { return TomParser.RULE_literal; }
    enterRule(listener) {
        if (listener.enterLiteral)
            listener.enterLiteral(this);
    }
    exitRule(listener) {
        if (listener.exitLiteral)
            listener.exitLiteral(this);
    }
    accept(visitor) {
        if (visitor.visitLiteral)
            return visitor.visitLiteral(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LiteralContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LiteralContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LiteralContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LiteralContext.prototype, "accept", null);
exports.LiteralContext = LiteralContext;
class ParenthesizedExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    PAREN_OPEN() { return this.getToken(TomParser.PAREN_OPEN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    PAREN_CLOSE() { return this.getToken(TomParser.PAREN_CLOSE, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_parenthesizedExpression; }
    enterRule(listener) {
        if (listener.enterParenthesizedExpression)
            listener.enterParenthesizedExpression(this);
    }
    exitRule(listener) {
        if (listener.exitParenthesizedExpression)
            listener.exitParenthesizedExpression(this);
    }
    accept(visitor) {
        if (visitor.visitParenthesizedExpression)
            return visitor.visitParenthesizedExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ParenthesizedExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ParenthesizedExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ParenthesizedExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ParenthesizedExpressionContext.prototype, "accept", null);
exports.ParenthesizedExpressionContext = ParenthesizedExpressionContext;
class DescriptionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    descriptionLine() {
        return this.getRuleContext(0, DescriptionLineContext);
    }
    get ruleIndex() { return TomParser.RULE_description; }
    enterRule(listener) {
        if (listener.enterDescription)
            listener.enterDescription(this);
    }
    exitRule(listener) {
        if (listener.exitDescription)
            listener.exitDescription(this);
    }
    accept(visitor) {
        if (visitor.visitDescription)
            return visitor.visitDescription(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DescriptionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DescriptionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DescriptionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DescriptionContext.prototype, "accept", null);
exports.DescriptionContext = DescriptionContext;
class DescriptionLineContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    descriptionLineStart() {
        return this.tryGetRuleContext(0, DescriptionLineStartContext);
    }
    descriptionLineElement(i) {
        if (i === undefined) {
            return this.getRuleContexts(DescriptionLineElementContext);
        }
        else {
            return this.getRuleContext(i, DescriptionLineElementContext);
        }
    }
    inlineTag() {
        return this.tryGetRuleContext(0, InlineTagContext);
    }
    get ruleIndex() { return TomParser.RULE_descriptionLine; }
    enterRule(listener) {
        if (listener.enterDescriptionLine)
            listener.enterDescriptionLine(this);
    }
    exitRule(listener) {
        if (listener.exitDescriptionLine)
            listener.exitDescriptionLine(this);
    }
    accept(visitor) {
        if (visitor.visitDescriptionLine)
            return visitor.visitDescriptionLine(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DescriptionLineContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DescriptionLineContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DescriptionLineContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DescriptionLineContext.prototype, "accept", null);
exports.DescriptionLineContext = DescriptionLineContext;
class DescriptionLineStartContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    descriptionText(i) {
        if (i === undefined) {
            return this.getRuleContexts(DescriptionTextContext);
        }
        else {
            return this.getRuleContext(i, DescriptionTextContext);
        }
    }
    AT(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.AT);
        }
        else {
            return this.getToken(TomParser.AT, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_descriptionLineStart; }
    enterRule(listener) {
        if (listener.enterDescriptionLineStart)
            listener.enterDescriptionLineStart(this);
    }
    exitRule(listener) {
        if (listener.exitDescriptionLineStart)
            listener.exitDescriptionLineStart(this);
    }
    accept(visitor) {
        if (visitor.visitDescriptionLineStart)
            return visitor.visitDescriptionLineStart(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DescriptionLineStartContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DescriptionLineStartContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DescriptionLineStartContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DescriptionLineStartContext.prototype, "accept", null);
exports.DescriptionLineStartContext = DescriptionLineStartContext;
class DescriptionTextContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    TEXT_CONTENT() { return this.tryGetToken(TomParser.TEXT_CONTENT, 0); }
    ID() { return this.tryGetToken(TomParser.ID, 0); }
    FORWARD_SLASH() { return this.tryGetToken(TomParser.FORWARD_SLASH, 0); }
    BRACE_OPEN() { return this.tryGetToken(TomParser.BRACE_OPEN, 0); }
    BRACE_CLOSE() { return this.tryGetToken(TomParser.BRACE_CLOSE, 0); }
    COLON() { return this.tryGetToken(TomParser.COLON, 0); }
    MINUS() { return this.tryGetToken(TomParser.MINUS, 0); }
    PERIOD() { return this.tryGetToken(TomParser.PERIOD, 0); }
    literal() {
        return this.tryGetRuleContext(0, LiteralContext);
    }
    get ruleIndex() { return TomParser.RULE_descriptionText; }
    enterRule(listener) {
        if (listener.enterDescriptionText)
            listener.enterDescriptionText(this);
    }
    exitRule(listener) {
        if (listener.exitDescriptionText)
            listener.exitDescriptionText(this);
    }
    accept(visitor) {
        if (visitor.visitDescriptionText)
            return visitor.visitDescriptionText(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DescriptionTextContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DescriptionTextContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DescriptionTextContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DescriptionTextContext.prototype, "accept", null);
exports.DescriptionTextContext = DescriptionTextContext;
class DescriptionLineElementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    inlineTag() {
        return this.tryGetRuleContext(0, InlineTagContext);
    }
    descriptionLineText() {
        return this.tryGetRuleContext(0, DescriptionLineTextContext);
    }
    get ruleIndex() { return TomParser.RULE_descriptionLineElement; }
    enterRule(listener) {
        if (listener.enterDescriptionLineElement)
            listener.enterDescriptionLineElement(this);
    }
    exitRule(listener) {
        if (listener.exitDescriptionLineElement)
            listener.exitDescriptionLineElement(this);
    }
    accept(visitor) {
        if (visitor.visitDescriptionLineElement)
            return visitor.visitDescriptionLineElement(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DescriptionLineElementContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DescriptionLineElementContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DescriptionLineElementContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DescriptionLineElementContext.prototype, "accept", null);
exports.DescriptionLineElementContext = DescriptionLineElementContext;
class DescriptionLineTextContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    descriptionText(i) {
        if (i === undefined) {
            return this.getRuleContexts(DescriptionTextContext);
        }
        else {
            return this.getRuleContext(i, DescriptionTextContext);
        }
    }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    AT(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.AT);
        }
        else {
            return this.getToken(TomParser.AT, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_descriptionLineText; }
    enterRule(listener) {
        if (listener.enterDescriptionLineText)
            listener.enterDescriptionLineText(this);
    }
    exitRule(listener) {
        if (listener.exitDescriptionLineText)
            listener.exitDescriptionLineText(this);
    }
    accept(visitor) {
        if (visitor.visitDescriptionLineText)
            return visitor.visitDescriptionLineText(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DescriptionLineTextContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DescriptionLineTextContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DescriptionLineTextContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DescriptionLineTextContext.prototype, "accept", null);
exports.DescriptionLineTextContext = DescriptionLineTextContext;
class InlineTagContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    INLINE_TAG_START() { return this.getToken(TomParser.INLINE_TAG_START, 0); }
    inlineTagName() {
        return this.getRuleContext(0, InlineTagNameContext);
    }
    SPACE() { return this.getToken(TomParser.SPACE, 0); }
    BRACE_CLOSE() { return this.getToken(TomParser.BRACE_CLOSE, 0); }
    inlineTagBody() {
        return this.tryGetRuleContext(0, InlineTagBodyContext);
    }
    get ruleIndex() { return TomParser.RULE_inlineTag; }
    enterRule(listener) {
        if (listener.enterInlineTag)
            listener.enterInlineTag(this);
    }
    exitRule(listener) {
        if (listener.exitInlineTag)
            listener.exitInlineTag(this);
    }
    accept(visitor) {
        if (visitor.visitInlineTag)
            return visitor.visitInlineTag(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], InlineTagContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], InlineTagContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], InlineTagContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], InlineTagContext.prototype, "accept", null);
exports.InlineTagContext = InlineTagContext;
class InlineTagNameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    get ruleIndex() { return TomParser.RULE_inlineTagName; }
    enterRule(listener) {
        if (listener.enterInlineTagName)
            listener.enterInlineTagName(this);
    }
    exitRule(listener) {
        if (listener.exitInlineTagName)
            listener.exitInlineTagName(this);
    }
    accept(visitor) {
        if (visitor.visitInlineTagName)
            return visitor.visitInlineTagName(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], InlineTagNameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], InlineTagNameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], InlineTagNameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], InlineTagNameContext.prototype, "accept", null);
exports.InlineTagNameContext = InlineTagNameContext;
class InlineTagBodyContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    braceBody(i) {
        if (i === undefined) {
            return this.getRuleContexts(BraceBodyContext);
        }
        else {
            return this.getRuleContext(i, BraceBodyContext);
        }
    }
    get ruleIndex() { return TomParser.RULE_inlineTagBody; }
    enterRule(listener) {
        if (listener.enterInlineTagBody)
            listener.enterInlineTagBody(this);
    }
    exitRule(listener) {
        if (listener.exitInlineTagBody)
            listener.exitInlineTagBody(this);
    }
    accept(visitor) {
        if (visitor.visitInlineTagBody)
            return visitor.visitInlineTagBody(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], InlineTagBodyContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], InlineTagBodyContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], InlineTagBodyContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], InlineTagBodyContext.prototype, "accept", null);
exports.InlineTagBodyContext = InlineTagBodyContext;
class BraceExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BRACE_OPEN() { return this.getToken(TomParser.BRACE_OPEN, 0); }
    BRACE_CLOSE() { return this.getToken(TomParser.BRACE_CLOSE, 0); }
    braceBody(i) {
        if (i === undefined) {
            return this.getRuleContexts(BraceBodyContext);
        }
        else {
            return this.getRuleContext(i, BraceBodyContext);
        }
    }
    get ruleIndex() { return TomParser.RULE_braceExpression; }
    enterRule(listener) {
        if (listener.enterBraceExpression)
            listener.enterBraceExpression(this);
    }
    exitRule(listener) {
        if (listener.exitBraceExpression)
            listener.exitBraceExpression(this);
    }
    accept(visitor) {
        if (visitor.visitBraceExpression)
            return visitor.visitBraceExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BraceExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BraceExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BraceExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BraceExpressionContext.prototype, "accept", null);
exports.BraceExpressionContext = BraceExpressionContext;
class BraceBodyContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    braceExpression() {
        return this.tryGetRuleContext(0, BraceExpressionContext);
    }
    braceText(i) {
        if (i === undefined) {
            return this.getRuleContexts(BraceTextContext);
        }
        else {
            return this.getRuleContext(i, BraceTextContext);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.NEWLINE);
        }
        else {
            return this.getToken(TomParser.NEWLINE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_braceBody; }
    enterRule(listener) {
        if (listener.enterBraceBody)
            listener.enterBraceBody(this);
    }
    exitRule(listener) {
        if (listener.exitBraceBody)
            listener.exitBraceBody(this);
    }
    accept(visitor) {
        if (visitor.visitBraceBody)
            return visitor.visitBraceBody(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BraceBodyContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BraceBodyContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BraceBodyContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BraceBodyContext.prototype, "accept", null);
exports.BraceBodyContext = BraceBodyContext;
class BraceTextContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    TEXT_CONTENT() { return this.tryGetToken(TomParser.TEXT_CONTENT, 0); }
    ID() { return this.tryGetToken(TomParser.ID, 0); }
    SPACE() { return this.tryGetToken(TomParser.SPACE, 0); }
    FORWARD_SLASH() { return this.tryGetToken(TomParser.FORWARD_SLASH, 0); }
    NEWLINE() { return this.tryGetToken(TomParser.NEWLINE, 0); }
    PERIOD() { return this.tryGetToken(TomParser.PERIOD, 0); }
    get ruleIndex() { return TomParser.RULE_braceText; }
    enterRule(listener) {
        if (listener.enterBraceText)
            listener.enterBraceText(this);
    }
    exitRule(listener) {
        if (listener.exitBraceText)
            listener.exitBraceText(this);
    }
    accept(visitor) {
        if (visitor.visitBraceText)
            return visitor.visitBraceText(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BraceTextContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BraceTextContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BraceTextContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BraceTextContext.prototype, "accept", null);
exports.BraceTextContext = BraceTextContext;
class IdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ID() { return this.getToken(TomParser.ID, 0); }
    get ruleIndex() { return TomParser.RULE_identifier; }
    enterRule(listener) {
        if (listener.enterIdentifier)
            listener.enterIdentifier(this);
    }
    exitRule(listener) {
        if (listener.exitIdentifier)
            listener.exitIdentifier(this);
    }
    accept(visitor) {
        if (visitor.visitIdentifier)
            return visitor.visitIdentifier(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], IdentifierContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], IdentifierContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], IdentifierContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], IdentifierContext.prototype, "accept", null);
exports.IdentifierContext = IdentifierContext;
//# sourceMappingURL=TomParser.js.map