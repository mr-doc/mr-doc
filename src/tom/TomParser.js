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
            this.state = 89;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.EOF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 82;
                        this.match(TomParser.EOF);
                    }
                    break;
                case TomParser.NEWLINE:
                case TomParser.SPACE:
                case TomParser.AT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 83;
                        this.body();
                        this.state = 85;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.NEWLINE) {
                            {
                                this.state = 84;
                                this.match(TomParser.NEWLINE);
                            }
                        }
                        this.state = 87;
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
                this.state = 94;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TomParser.NEWLINE || _la === TomParser.SPACE) {
                    {
                        {
                            this.state = 91;
                            this.whitespace();
                        }
                    }
                    this.state = 96;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 97;
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
                this.state = 99;
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
                this.state = 101;
                this.tag();
                this.state = 106;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 102;
                                this.match(TomParser.NEWLINE);
                                this.state = 103;
                                this.tag();
                            }
                        }
                    }
                    this.state = 108;
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
            this.state = 226;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 109;
                        this.tagName();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 110;
                        this.tagName();
                        this.state = 111;
                        this.match(TomParser.SPACE);
                        this.state = 112;
                        this.tagID();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 114;
                        this.tagName();
                        this.state = 115;
                        this.match(TomParser.SPACE);
                        this.state = 116;
                        this.descriptionDelimiter();
                        this.state = 117;
                        this.match(TomParser.SPACE);
                        this.state = 118;
                        this.tagBody();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 120;
                        this.tagName();
                        this.state = 121;
                        this.match(TomParser.SPACE);
                        this.state = 122;
                        this.tagID();
                        this.state = 124;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 123;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 126;
                        this.assignmentDelimiter();
                        this.state = 128;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 127;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 130;
                        this.expression(0);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 132;
                        this.tagName();
                        this.state = 133;
                        this.match(TomParser.SPACE);
                        this.state = 134;
                        this.tagID();
                        this.state = 135;
                        this.match(TomParser.SPACE);
                        this.state = 136;
                        this.descriptionDelimiter();
                        this.state = 137;
                        this.match(TomParser.SPACE);
                        this.state = 138;
                        this.tagBody();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 140;
                        this.tagName();
                        this.state = 141;
                        this.match(TomParser.SPACE);
                        this.state = 142;
                        this.tagID();
                        this.state = 143;
                        this.match(TomParser.SPACE);
                        this.state = 144;
                        this.assignmentDelimiter();
                        this.state = 146;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 145;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 148;
                        this.expression(0);
                        this.state = 149;
                        this.match(TomParser.SPACE);
                        this.state = 150;
                        this.descriptionDelimiter();
                        this.state = 151;
                        this.match(TomParser.SPACE);
                        this.state = 152;
                        this.tagBody();
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
                        this.state = 158;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 157;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 160;
                        this.typeDelimiter();
                        this.state = 162;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 161;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 164;
                        this.type(0);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 166;
                        this.tagName();
                        this.state = 167;
                        this.match(TomParser.SPACE);
                        this.state = 168;
                        this.tagID();
                        this.state = 170;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 169;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 172;
                        this.typeDelimiter();
                        this.state = 174;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 173;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 176;
                        this.type(0);
                        this.state = 178;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 177;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 180;
                        this.assignmentDelimiter();
                        this.state = 182;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 181;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 184;
                        this.expression(0);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 186;
                        this.tagName();
                        this.state = 187;
                        this.match(TomParser.SPACE);
                        this.state = 188;
                        this.tagID();
                        this.state = 190;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 189;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 192;
                        this.typeDelimiter();
                        this.state = 194;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 193;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 196;
                        this.type(0);
                        this.state = 197;
                        this.match(TomParser.SPACE);
                        this.state = 198;
                        this.descriptionDelimiter();
                        this.state = 199;
                        this.match(TomParser.SPACE);
                        this.state = 200;
                        this.tagBody();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 202;
                        this.tagName();
                        this.state = 203;
                        this.match(TomParser.SPACE);
                        this.state = 204;
                        this.tagID();
                        this.state = 206;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 205;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 208;
                        this.typeDelimiter();
                        this.state = 210;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 209;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 212;
                        this.type(0);
                        this.state = 214;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 213;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 216;
                        this.assignmentDelimiter();
                        this.state = 218;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 217;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 220;
                        this.expression(0);
                        this.state = 221;
                        this.match(TomParser.SPACE);
                        this.state = 222;
                        this.descriptionDelimiter();
                        this.state = 223;
                        this.match(TomParser.SPACE);
                        this.state = 224;
                        this.tagBody();
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
                this.state = 228;
                this.match(TomParser.AT);
                this.state = 229;
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
            this.state = 233;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 231;
                        this.optionalTagID();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 232;
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
                this.state = 235;
                this.identifier();
                this.state = 236;
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
    tagBody() {
        let _localctx = new TagBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, TomParser.RULE_tagBody);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
                this.description();
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
    assignmentDelimiter() {
        let _localctx = new AssignmentDelimiterContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, TomParser.RULE_assignmentDelimiter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 240;
                this.match(TomParser.EQUAL);
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
    typeDelimiter() {
        let _localctx = new TypeDelimiterContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, TomParser.RULE_typeDelimiter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 242;
                this.match(TomParser.COLON);
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
        let _startState = 22;
        this.enterRecursionRule(_localctx, 22, TomParser.RULE_type, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 247;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
                    case 1:
                        {
                            this.state = 245;
                            this.lambdaType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 246;
                            this.primaryType();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 260;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new TypeContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_type);
                                this.state = 249;
                                if (!(this.precpred(this._ctx, 3)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                this.state = 251;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === TomParser.SPACE) {
                                    {
                                        this.state = 250;
                                        this.match(TomParser.SPACE);
                                    }
                                }
                                this.state = 253;
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
                                this.state = 255;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === TomParser.SPACE) {
                                    {
                                        this.state = 254;
                                        this.match(TomParser.SPACE);
                                    }
                                }
                                this.state = 257;
                                this.type(4);
                            }
                        }
                    }
                    this.state = 262;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
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
    primaryType() {
        let _localctx = new PrimaryTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, TomParser.RULE_primaryType);
        try {
            this.state = 267;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 263;
                        this.parenthesizedType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 264;
                        this.objectType();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 265;
                        this.arrayType();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 266;
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
    parenthesizedType() {
        let _localctx = new ParenthesizedTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, TomParser.RULE_parenthesizedType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 269;
                this.match(TomParser.PAREN_OPEN);
                this.state = 271;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 270;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 273;
                this.type(0);
                this.state = 275;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 274;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 277;
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
        this.enterRule(_localctx, 28, TomParser.RULE_lambdaType);
        let _la;
        try {
            this.state = 307;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.PAREN_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 279;
                        this.match(TomParser.PAREN_OPEN);
                        this.state = 281;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 280;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 283;
                        this.formalParameterSequence();
                        this.state = 285;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 284;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 287;
                        this.match(TomParser.PAREN_CLOSE);
                        this.state = 289;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 288;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 291;
                        this.match(TomParser.ARROW);
                        this.state = 293;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 292;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 295;
                        this.type(0);
                    }
                    break;
                case TomParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 297;
                        this.parameter();
                        this.state = 299;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 298;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 301;
                        this.match(TomParser.ARROW);
                        this.state = 303;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 302;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 305;
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
        this.enterRule(_localctx, 30, TomParser.RULE_formalParameterSequence);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 309;
                this.parameter();
                this.state = 317;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TomParser.COMMA) {
                    {
                        {
                            this.state = 310;
                            this.match(TomParser.COMMA);
                            this.state = 312;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 311;
                                    this.match(TomParser.SPACE);
                                }
                            }
                            this.state = 314;
                            this.parameter();
                        }
                    }
                    this.state = 319;
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
        this.enterRule(_localctx, 32, TomParser.RULE_parameter);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 320;
                this.identifier();
                this.state = 329;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                    case 1:
                        {
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
                            this.match(TomParser.COLON);
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
    arrayType() {
        let _localctx = new ArrayTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, TomParser.RULE_arrayType);
        let _la;
        try {
            this.state = 356;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.BRACKET_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 331;
                        this.match(TomParser.BRACKET_OPEN);
                        this.state = 333;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                            case 1:
                                {
                                    this.state = 332;
                                    this.match(TomParser.SPACE);
                                }
                                break;
                        }
                        this.state = 336;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.PAREN_OPEN) | (1 << TomParser.BRACKET_OPEN))) !== 0)) {
                            {
                                this.state = 335;
                                this.type(0);
                            }
                        }
                        this.state = 345;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === TomParser.COMMA) {
                            {
                                {
                                    this.state = 338;
                                    this.match(TomParser.COMMA);
                                    this.state = 340;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === TomParser.SPACE) {
                                        {
                                            this.state = 339;
                                            this.match(TomParser.SPACE);
                                        }
                                    }
                                    this.state = 342;
                                    this.type(0);
                                }
                            }
                            this.state = 347;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 349;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 348;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 351;
                        this.match(TomParser.BRACKET_CLOSE);
                    }
                    break;
                case TomParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 352;
                        this.identifier();
                        this.state = 353;
                        this.match(TomParser.BRACKET_OPEN);
                        this.state = 354;
                        this.match(TomParser.BRACKET_CLOSE);
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
    objectType() {
        let _localctx = new ObjectTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, TomParser.RULE_objectType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 358;
                this.match(TomParser.BRACE_OPEN);
                this.state = 360;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                    case 1:
                        {
                            this.state = 359;
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 363;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.PAREN_OPEN) | (1 << TomParser.BRACKET_OPEN))) !== 0)) {
                    {
                        this.state = 362;
                        this.objectPairType();
                    }
                }
                this.state = 366;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 365;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 368;
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
    objectPairType() {
        let _localctx = new ObjectPairTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, TomParser.RULE_objectPairType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 370;
                this.type(0);
                this.state = 372;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 371;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 374;
                this.match(TomParser.COLON);
                this.state = 376;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 375;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 378;
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
    descriptionDelimiter() {
        let _localctx = new DescriptionDelimiterContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, TomParser.RULE_descriptionDelimiter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 380;
                this.match(TomParser.MINUS);
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
        this.enterRule(_localctx, 42, TomParser.RULE_description);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 382;
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
        this.enterRule(_localctx, 44, TomParser.RULE_descriptionLine);
        let _la;
        try {
            this.state = 398;
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
                        this.state = 384;
                        this.descriptionLineStart();
                        this.state = 388;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral) | (1 << TomParser.ID) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.AT) | (1 << TomParser.MINUS) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.COLON) | (1 << TomParser.PERIOD) | (1 << TomParser.INLINE_TAG_START) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.BRACE_CLOSE))) !== 0)) {
                            {
                                {
                                    this.state = 385;
                                    this.descriptionLineElement();
                                }
                            }
                            this.state = 390;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case TomParser.INLINE_TAG_START:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 391;
                        this.inlineTag();
                        this.state = 395;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral) | (1 << TomParser.ID) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.AT) | (1 << TomParser.MINUS) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.COLON) | (1 << TomParser.PERIOD) | (1 << TomParser.INLINE_TAG_START) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.BRACE_CLOSE))) !== 0)) {
                            {
                                {
                                    this.state = 392;
                                    this.descriptionLineElement();
                                }
                            }
                            this.state = 397;
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
        this.enterRule(_localctx, 46, TomParser.RULE_descriptionLineStart);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 401;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 400;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 404;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 403;
                                    this.descriptionText();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 406;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 413;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 411;
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
                                        this.state = 408;
                                        this.descriptionText();
                                    }
                                    break;
                                case TomParser.SPACE:
                                    {
                                        this.state = 409;
                                        this.match(TomParser.SPACE);
                                    }
                                    break;
                                case TomParser.AT:
                                    {
                                        this.state = 410;
                                        this.match(TomParser.AT);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 415;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
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
        this.enterRule(_localctx, 48, TomParser.RULE_descriptionText);
        try {
            this.state = 425;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.TEXT_CONTENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 416;
                        this.match(TomParser.TEXT_CONTENT);
                    }
                    break;
                case TomParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 417;
                        this.match(TomParser.ID);
                    }
                    break;
                case TomParser.FORWARD_SLASH:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 418;
                        this.match(TomParser.FORWARD_SLASH);
                    }
                    break;
                case TomParser.BRACE_OPEN:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 419;
                        this.match(TomParser.BRACE_OPEN);
                    }
                    break;
                case TomParser.BRACE_CLOSE:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 420;
                        this.match(TomParser.BRACE_CLOSE);
                    }
                    break;
                case TomParser.COLON:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 421;
                        this.match(TomParser.COLON);
                    }
                    break;
                case TomParser.MINUS:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 422;
                        this.match(TomParser.MINUS);
                    }
                    break;
                case TomParser.PERIOD:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 423;
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
                        this.state = 424;
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
        this.enterRule(_localctx, 50, TomParser.RULE_descriptionLineElement);
        try {
            this.state = 429;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.INLINE_TAG_START:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 427;
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
                        this.state = 428;
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
        this.enterRule(_localctx, 52, TomParser.RULE_descriptionLineText);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 434;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 434;
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
                                            this.state = 431;
                                            this.descriptionText();
                                        }
                                        break;
                                    case TomParser.SPACE:
                                        {
                                            this.state = 432;
                                            this.match(TomParser.SPACE);
                                        }
                                        break;
                                    case TomParser.AT:
                                        {
                                            this.state = 433;
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
                    this.state = 436;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
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
        this.enterRule(_localctx, 54, TomParser.RULE_inlineTag);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 438;
                this.match(TomParser.INLINE_TAG_START);
                this.state = 439;
                this.inlineTagName();
                this.state = 440;
                this.match(TomParser.SPACE);
                this.state = 442;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.NEWLINE) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.PERIOD) | (1 << TomParser.BRACE_OPEN))) !== 0)) {
                    {
                        this.state = 441;
                        this.inlineTagBody();
                    }
                }
                this.state = 444;
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
        this.enterRule(_localctx, 56, TomParser.RULE_inlineTagName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 446;
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
        this.enterRule(_localctx, 58, TomParser.RULE_inlineTagBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 449;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 448;
                            this.braceBody();
                        }
                    }
                    this.state = 451;
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
        this.enterRule(_localctx, 60, TomParser.RULE_braceExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 453;
                this.match(TomParser.BRACE_OPEN);
                this.state = 457;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.NEWLINE) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.PERIOD) | (1 << TomParser.BRACE_OPEN))) !== 0)) {
                    {
                        {
                            this.state = 454;
                            this.braceBody();
                        }
                    }
                    this.state = 459;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 460;
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
        this.enterRule(_localctx, 62, TomParser.RULE_braceBody);
        try {
            let _alt;
            this.state = 471;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.BRACE_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 462;
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
                        this.state = 463;
                        this.braceText();
                        this.state = 468;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 464;
                                        this.match(TomParser.NEWLINE);
                                        this.state = 465;
                                        this.braceText();
                                    }
                                }
                            }
                            this.state = 470;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
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
        this.enterRule(_localctx, 64, TomParser.RULE_braceText);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 473;
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
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 66;
        this.enterRecursionRule(_localctx, 66, TomParser.RULE_expression, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 481;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TomParser.PLUS:
                    case TomParser.MINUS:
                        {
                            this.state = 476;
                            this.unaryExpression();
                        }
                        break;
                    case TomParser.BRACKET_OPEN:
                        {
                            this.state = 477;
                            this.arrayExpression();
                        }
                        break;
                    case TomParser.BRACE_OPEN:
                        {
                            this.state = 478;
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
                            this.state = 479;
                            this.literal();
                        }
                        break;
                    case TomParser.PAREN_OPEN:
                        {
                            this.state = 480;
                            this.parenthesizedExpression();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 503;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 501;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_expression);
                                        this.state = 483;
                                        if (!(this.precpred(this._ctx, 6)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        this.state = 485;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 484;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 487;
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
                                        this.state = 489;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 488;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 491;
                                        this.expression(7);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_expression);
                                        this.state = 492;
                                        if (!(this.precpred(this._ctx, 5)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        this.state = 494;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 493;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 496;
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
                                        this.state = 498;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 497;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 500;
                                        this.expression(6);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 505;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
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
        this.enterRule(_localctx, 68, TomParser.RULE_unaryExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 506;
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
                this.state = 507;
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
        this.enterRule(_localctx, 70, TomParser.RULE_arrayExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 509;
                this.match(TomParser.BRACKET_OPEN);
                this.state = 511;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral) | (1 << TomParser.PLUS) | (1 << TomParser.MINUS) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.PAREN_OPEN) | (1 << TomParser.BRACKET_OPEN))) !== 0)) {
                    {
                        this.state = 510;
                        this.expression(0);
                    }
                }
                this.state = 520;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TomParser.COMMA) {
                    {
                        {
                            this.state = 513;
                            this.match(TomParser.COMMA);
                            this.state = 515;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 514;
                                    this.match(TomParser.SPACE);
                                }
                            }
                            this.state = 517;
                            this.expression(0);
                        }
                    }
                    this.state = 522;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 523;
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
        this.enterRule(_localctx, 72, TomParser.RULE_objectExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 525;
                this.match(TomParser.BRACE_OPEN);
                this.state = 527;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 77, this._ctx)) {
                    case 1:
                        {
                            this.state = 526;
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 530;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral))) !== 0)) {
                    {
                        this.state = 529;
                        this.objectPair();
                    }
                }
                this.state = 533;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 532;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 535;
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
    objectPair() {
        let _localctx = new ObjectPairContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, TomParser.RULE_objectPair);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 537;
                this.literal();
                this.state = 539;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 538;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 541;
                this.match(TomParser.COLON);
                this.state = 543;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 542;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 545;
                this.literal();
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
        this.enterRule(_localctx, 76, TomParser.RULE_literal);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 547;
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
        this.enterRule(_localctx, 78, TomParser.RULE_parenthesizedExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 549;
                this.match(TomParser.PAREN_OPEN);
                this.state = 551;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 550;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 553;
                this.expression(0);
                this.state = 555;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 554;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 557;
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
    identifier() {
        let _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, TomParser.RULE_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 559;
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
            case 11:
                return this.type_sempred(_localctx, predIndex);
            case 33:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    }
    type_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 3);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this._ctx, 6);
            case 2:
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
TomParser.RULE_documentation = 0;
TomParser.RULE_body = 1;
TomParser.RULE_whitespace = 2;
TomParser.RULE_annotations = 3;
TomParser.RULE_tag = 4;
TomParser.RULE_tagName = 5;
TomParser.RULE_tagID = 6;
TomParser.RULE_optionalTagID = 7;
TomParser.RULE_tagBody = 8;
TomParser.RULE_assignmentDelimiter = 9;
TomParser.RULE_typeDelimiter = 10;
TomParser.RULE_type = 11;
TomParser.RULE_primaryType = 12;
TomParser.RULE_parenthesizedType = 13;
TomParser.RULE_lambdaType = 14;
TomParser.RULE_formalParameterSequence = 15;
TomParser.RULE_parameter = 16;
TomParser.RULE_arrayType = 17;
TomParser.RULE_objectType = 18;
TomParser.RULE_objectPairType = 19;
TomParser.RULE_descriptionDelimiter = 20;
TomParser.RULE_description = 21;
TomParser.RULE_descriptionLine = 22;
TomParser.RULE_descriptionLineStart = 23;
TomParser.RULE_descriptionText = 24;
TomParser.RULE_descriptionLineElement = 25;
TomParser.RULE_descriptionLineText = 26;
TomParser.RULE_inlineTag = 27;
TomParser.RULE_inlineTagName = 28;
TomParser.RULE_inlineTagBody = 29;
TomParser.RULE_braceExpression = 30;
TomParser.RULE_braceBody = 31;
TomParser.RULE_braceText = 32;
TomParser.RULE_expression = 33;
TomParser.RULE_unaryExpression = 34;
TomParser.RULE_arrayExpression = 35;
TomParser.RULE_objectExpression = 36;
TomParser.RULE_objectPair = 37;
TomParser.RULE_literal = 38;
TomParser.RULE_parenthesizedExpression = 39;
TomParser.RULE_identifier = 40;
TomParser.ruleNames = [
    "documentation", "body", "whitespace", "annotations", "tag", "tagName",
    "tagID", "optionalTagID", "tagBody", "assignmentDelimiter", "typeDelimiter",
    "type", "primaryType", "parenthesizedType", "lambdaType", "formalParameterSequence",
    "parameter", "arrayType", "objectType", "objectPairType", "descriptionDelimiter",
    "description", "descriptionLine", "descriptionLineStart", "descriptionText",
    "descriptionLineElement", "descriptionLineText", "inlineTag", "inlineTagName",
    "inlineTagBody", "braceExpression", "braceBody", "braceText", "expression",
    "unaryExpression", "arrayExpression", "objectExpression", "objectPair",
    "literal", "parenthesizedExpression", "identifier"
];
TomParser._LITERAL_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, "'@'", "'+'", "'-'", "'*'",
    "'/'", "':'", "'.'", "','", "'='", "'?'", "'&'", "'|'", undefined, "'!'",
    "'{@'", "'{'", "'}'", "'('", "')'", "'['", "']'"
];
TomParser._SYMBOLIC_NAMES = [
    undefined, "IntegerLiteral", "FloatingPointLiteral", "BooleanLiteral",
    "CharacterLiteral", "StringLiteral", "NullLiteral", "ID", "NEWLINE", "SPACE",
    "TEXT_CONTENT", "AT", "PLUS", "MINUS", "STAR", "FORWARD_SLASH", "COLON",
    "PERIOD", "COMMA", "EQUAL", "QUESTION", "AMP", "PIPE", "ARROW", "EXCLAMATION",
    "INLINE_TAG_START", "BRACE_OPEN", "BRACE_CLOSE", "PAREN_OPEN", "PAREN_CLOSE",
    "BRACKET_OPEN", "BRACKET_CLOSE"
];
TomParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(TomParser._LITERAL_NAMES, TomParser._SYMBOLIC_NAMES, []);
TomParser._serializedATNSegments = 2;
TomParser._serializedATNSegment0 = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03!\u0234\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x03\x02" +
    "\x03\x02\x03\x02\x05\x02X\n\x02\x03\x02\x03\x02\x05\x02\\\n\x02\x03\x03" +
    "\x07\x03_\n\x03\f\x03\x0E\x03b\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
    "\x05\x03\x05\x03\x05\x07\x05k\n\x05\f\x05\x0E\x05n\v\x05\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x7F\n\x06\x03\x06\x03\x06\x05" +
    "\x06\x83\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x05\x06\x95\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x05\x06\xA1\n\x06\x03\x06\x03\x06\x05\x06" +
    "\xA5\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xAD" +
    "\n\x06\x03\x06\x03\x06\x05\x06\xB1\n\x06\x03\x06\x03\x06\x05\x06\xB5\n" +
    "\x06\x03\x06\x03\x06\x05\x06\xB9\n\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x05\x06\xC1\n\x06\x03\x06\x03\x06\x05\x06\xC5\n\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x05\x06\xD1\n\x06\x03\x06\x03\x06\x05\x06\xD5\n\x06\x03\x06\x03\x06" +
    "\x05\x06\xD9\n\x06\x03\x06\x03\x06\x05\x06\xDD\n\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x05\x06\xE5\n\x06\x03\x07\x03\x07\x03\x07" +
    "\x03\b\x03\b\x05\b\xEC\n\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03" +
    "\f\x03\f\x03\r\x03\r\x03\r\x05\r\xFA\n\r\x03\r\x03\r\x05\r\xFE\n\r\x03" +
    "\r\x03\r\x05\r\u0102\n\r\x03\r\x07\r\u0105\n\r\f\r\x0E\r\u0108\v\r\x03" +
    "\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u010E\n\x0E\x03\x0F\x03\x0F\x05\x0F" +
    "\u0112\n\x0F\x03\x0F\x03\x0F\x05\x0F\u0116\n\x0F\x03\x0F\x03\x0F\x03\x10" +
    "\x03\x10\x05\x10\u011C\n\x10\x03\x10\x03\x10\x05\x10\u0120\n\x10\x03\x10" +
    "\x03\x10\x05\x10\u0124\n\x10\x03\x10\x03\x10\x05\x10\u0128\n\x10\x03\x10" +
    "\x03\x10\x03\x10\x03\x10\x05\x10\u012E\n\x10\x03\x10\x03\x10\x05\x10\u0132" +
    "\n\x10\x03\x10\x03\x10\x05\x10\u0136\n\x10\x03\x11\x03\x11\x03\x11\x05" +
    "\x11\u013B\n\x11\x03\x11\x07\x11\u013E\n\x11\f\x11\x0E\x11\u0141\v\x11" +
    "\x03\x12\x03\x12\x05\x12\u0145\n\x12\x03\x12\x03\x12\x05\x12\u0149\n\x12" +
    "\x03\x12\x05\x12\u014C\n\x12\x03\x13\x03\x13\x05\x13\u0150\n\x13\x03\x13" +
    "\x05\x13\u0153\n\x13\x03\x13\x03\x13\x05\x13\u0157\n\x13\x03\x13\x07\x13" +
    "\u015A\n\x13\f\x13\x0E\x13\u015D\v\x13\x03\x13\x05\x13\u0160\n\x13\x03" +
    "\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0167\n\x13\x03\x14\x03\x14" +
    "\x05\x14\u016B\n\x14\x03\x14\x05\x14\u016E\n\x14\x03\x14\x05\x14\u0171" +
    "\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x05\x15\u0177\n\x15\x03\x15\x03" +
    "\x15\x05\x15\u017B\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17" +
    "\x03\x18\x03\x18\x07\x18\u0185\n\x18\f\x18\x0E\x18\u0188\v\x18\x03\x18" +
    "\x03\x18\x07\x18\u018C\n\x18\f\x18\x0E\x18\u018F\v\x18\x05\x18\u0191\n" +
    "\x18\x03\x19\x05\x19\u0194\n\x19\x03\x19\x06\x19\u0197\n\x19\r\x19\x0E" +
    "\x19\u0198\x03\x19\x03\x19\x03\x19\x07\x19\u019E\n\x19\f\x19\x0E\x19\u01A1" +
    "\v\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
    "\x03\x1A\x05\x1A\u01AC\n\x1A\x03\x1B\x03\x1B\x05\x1B\u01B0\n\x1B\x03\x1C" +
    "\x03\x1C\x03\x1C\x06\x1C\u01B5\n\x1C\r\x1C\x0E\x1C\u01B6\x03\x1D\x03\x1D" +
    "\x03\x1D\x03\x1D\x05\x1D\u01BD\n\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03" +
    "\x1F\x06\x1F\u01C4\n\x1F\r\x1F\x0E\x1F\u01C5\x03 \x03 \x07 \u01CA\n \f" +
    " \x0E \u01CD\v \x03 \x03 \x03!\x03!\x03!\x03!\x07!\u01D5\n!\f!\x0E!\u01D8" +
    "\v!\x05!\u01DA\n!\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u01E4" +
    "\n#\x03#\x03#\x05#\u01E8\n#\x03#\x03#\x05#\u01EC\n#\x03#\x03#\x03#\x05" +
    "#\u01F1\n#\x03#\x03#\x05#\u01F5\n#\x03#\x07#\u01F8\n#\f#\x0E#\u01FB\v" +
    "#\x03$\x03$\x03$\x03%\x03%\x05%\u0202\n%\x03%\x03%\x05%\u0206\n%\x03%" +
    "\x07%\u0209\n%\f%\x0E%\u020C\v%\x03%\x03%\x03&\x03&\x05&\u0212\n&\x03" +
    "&\x05&\u0215\n&\x03&\x05&\u0218\n&\x03&\x03&\x03\'\x03\'\x05\'\u021E\n" +
    "\'\x03\'\x03\'\x05\'\u0222\n\'\x03\'\x03\'\x03(\x03(\x03)\x03)\x05)\u022A" +
    "\n)\x03)\x03)\x05)\u022E\n)\x03)\x03)\x03*\x03*\x03*\x02\x02\x04\x18D" +
    "+\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
    "\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
    "*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
    "F\x02H\x02J\x02L\x02N\x02P\x02R\x02\x02\b\x03\x02\n\v\x03\x02\x17\x18" +
    "\x05\x02\t\f\x11\x11\x13\x13\x03\x02\x10\x11\x03\x02\x0E\x0F\x03\x02\x03" +
    "\b\u0274\x02[\x03\x02\x02\x02\x04`\x03\x02\x02\x02\x06e\x03\x02\x02\x02" +
    "\bg\x03\x02\x02\x02\n\xE4\x03\x02\x02\x02\f\xE6\x03\x02\x02\x02\x0E\xEB" +
    "\x03\x02\x02\x02\x10\xED\x03\x02\x02\x02\x12\xF0\x03\x02\x02\x02\x14\xF2" +
    "\x03\x02\x02\x02\x16\xF4\x03\x02\x02\x02\x18\xF9\x03\x02\x02\x02\x1A\u010D" +
    "\x03\x02\x02\x02\x1C\u010F\x03\x02\x02\x02\x1E\u0135\x03\x02\x02\x02 " +
    "\u0137\x03\x02\x02\x02\"\u0142\x03\x02\x02\x02$\u0166\x03\x02\x02\x02" +
    "&\u0168\x03\x02\x02\x02(\u0174\x03\x02\x02\x02*\u017E\x03\x02\x02\x02" +
    ",\u0180\x03\x02\x02\x02.\u0190\x03\x02\x02\x020\u0193\x03\x02\x02\x02" +
    "2\u01AB\x03\x02\x02\x024\u01AF\x03\x02\x02\x026\u01B4\x03\x02\x02\x02" +
    "8\u01B8\x03\x02\x02\x02:\u01C0\x03\x02\x02\x02<\u01C3\x03\x02\x02\x02" +
    ">\u01C7\x03\x02\x02\x02@\u01D9\x03\x02\x02\x02B\u01DB\x03\x02\x02\x02" +
    "D\u01E3\x03\x02\x02\x02F\u01FC\x03\x02\x02\x02H\u01FF\x03\x02\x02\x02" +
    "J\u020F\x03\x02\x02\x02L\u021B\x03\x02\x02\x02N\u0225\x03\x02\x02\x02" +
    "P\u0227\x03\x02\x02\x02R\u0231\x03\x02\x02\x02T\\\x07\x02\x02\x03UW\x05" +
    "\x04\x03\x02VX\x07\n\x02\x02WV\x03\x02\x02\x02WX\x03\x02\x02\x02XY\x03" +
    "\x02\x02\x02YZ\x07\x02\x02\x03Z\\\x03\x02\x02\x02[T\x03\x02\x02\x02[U" +
    "\x03\x02\x02\x02\\\x03\x03\x02\x02\x02]_\x05\x06\x04\x02^]\x03\x02\x02" +
    "\x02_b\x03\x02\x02\x02`^\x03\x02\x02\x02`a\x03\x02\x02\x02ac\x03\x02\x02" +
    "\x02b`\x03\x02\x02\x02cd\x05\b\x05\x02d\x05\x03\x02\x02\x02ef\t\x02\x02" +
    "\x02f\x07\x03\x02\x02\x02gl\x05\n\x06\x02hi\x07\n\x02\x02ik\x05\n\x06" +
    "\x02jh\x03\x02\x02\x02kn\x03\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02" +
    "\x02m\t\x03\x02\x02\x02nl\x03\x02\x02\x02o\xE5\x05\f\x07\x02pq\x05\f\x07" +
    "\x02qr\x07\v\x02\x02rs\x05\x0E\b\x02s\xE5\x03\x02\x02\x02tu\x05\f\x07" +
    "\x02uv\x07\v\x02\x02vw\x05*\x16\x02wx\x07\v\x02\x02xy\x05\x12\n\x02y\xE5" +
    "\x03\x02\x02\x02z{\x05\f\x07\x02{|\x07\v\x02\x02|~\x05\x0E\b\x02}\x7F" +
    "\x07\v\x02\x02~}\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x80\x03\x02" +
    "\x02\x02\x80\x82\x05\x14\v\x02\x81\x83\x07\v\x02\x02\x82\x81\x03\x02\x02" +
    "\x02\x82\x83\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x85\x05D#\x02" +
    "\x85\xE5\x03\x02\x02\x02\x86\x87\x05\f\x07\x02\x87\x88\x07\v\x02\x02\x88" +
    "\x89\x05\x0E\b\x02\x89\x8A\x07\v\x02\x02\x8A\x8B\x05*\x16\x02\x8B\x8C" +
    "\x07\v\x02\x02\x8C\x8D\x05\x12\n\x02\x8D\xE5\x03\x02\x02\x02\x8E\x8F\x05" +
    "\f\x07\x02\x8F\x90\x07\v\x02\x02\x90\x91\x05\x0E\b\x02\x91\x92\x07\v\x02" +
    "\x02\x92\x94\x05\x14\v\x02\x93\x95\x07\v\x02\x02\x94\x93\x03\x02\x02\x02" +
    "\x94\x95\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x97\x05D#\x02\x97" +
    "\x98\x07\v\x02\x02\x98\x99\x05*\x16\x02\x99\x9A\x07\v\x02\x02\x9A\x9B" +
    "\x05\x12\n\x02\x9B\xE5\x03\x02\x02\x02\x9C\x9D\x05\f\x07\x02\x9D\x9E\x07" +
    "\v\x02\x02\x9E\xA0\x05\x0E\b\x02\x9F\xA1\x07\v\x02\x02\xA0\x9F\x03\x02" +
    "\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA4\x05\x16" +
    "\f\x02\xA3\xA5\x07\v\x02\x02\xA4\xA3\x03\x02\x02\x02\xA4\xA5\x03\x02\x02" +
    "\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA7\x05\x18\r\x02\xA7\xE5\x03\x02\x02" +
    "\x02\xA8\xA9\x05\f\x07\x02\xA9\xAA\x07\v\x02\x02\xAA\xAC\x05\x0E\b\x02" +
    "\xAB\xAD\x07\v\x02\x02\xAC\xAB\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02" +
    "\xAD\xAE\x03\x02\x02\x02\xAE\xB0\x05\x16\f\x02\xAF\xB1\x07\v\x02\x02\xB0" +
    "\xAF\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2" +
    "\xB4\x05\x18\r\x02\xB3\xB5\x07\v\x02\x02\xB4\xB3\x03\x02\x02\x02\xB4\xB5" +
    "\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB8\x05\x14\v\x02\xB7\xB9" +
    "\x07\v\x02\x02\xB8\xB7\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBA" +
    "\x03\x02\x02\x02\xBA\xBB\x05D#\x02\xBB\xE5\x03\x02\x02\x02\xBC\xBD\x05" +
    "\f\x07\x02\xBD\xBE\x07\v\x02\x02\xBE\xC0\x05\x0E\b\x02\xBF\xC1\x07\v\x02" +
    "\x02\xC0\xBF\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC2\x03\x02\x02" +
    "\x02\xC2\xC4\x05\x16\f\x02\xC3\xC5\x07\v\x02\x02\xC4\xC3\x03\x02\x02\x02" +
    "\xC4\xC5\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC7\x05\x18\r\x02" +
    "\xC7\xC8\x07\v\x02\x02\xC8\xC9\x05*\x16\x02\xC9\xCA\x07\v\x02\x02\xCA" +
    "\xCB\x05\x12\n\x02\xCB\xE5\x03\x02\x02\x02\xCC\xCD\x05\f\x07\x02\xCD\xCE" +
    "\x07\v\x02\x02\xCE\xD0\x05\x0E\b\x02\xCF\xD1\x07\v\x02\x02\xD0\xCF\x03" +
    "\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD4\x05" +
    "\x16\f\x02\xD3\xD5\x07\v\x02\x02\xD4\xD3\x03\x02\x02\x02\xD4\xD5\x03\x02" +
    "\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD8\x05\x18\r\x02\xD7\xD9\x07\v\x02" +
    "\x02\xD8\xD7\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDA\x03\x02\x02" +
    "\x02\xDA\xDC\x05\x14\v\x02\xDB\xDD\x07\v\x02\x02\xDC\xDB\x03\x02\x02\x02" +
    "\xDC\xDD\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDF\x05D#\x02\xDF" +
    "\xE0\x07\v\x02\x02\xE0\xE1\x05*\x16\x02\xE1\xE2\x07\v\x02\x02\xE2\xE3" +
    "\x05\x12\n\x02\xE3\xE5\x03\x02\x02\x02\xE4o\x03\x02\x02\x02\xE4p\x03\x02" +
    "\x02\x02\xE4t\x03\x02\x02\x02\xE4z\x03\x02\x02\x02\xE4\x86\x03\x02\x02" +
    "\x02\xE4\x8E\x03\x02\x02\x02\xE4\x9C\x03\x02\x02\x02\xE4\xA8\x03\x02\x02" +
    "\x02\xE4\xBC\x03\x02\x02\x02\xE4\xCC\x03\x02\x02\x02\xE5\v\x03\x02\x02" +
    "\x02\xE6\xE7\x07\r\x02\x02\xE7\xE8\x05R*\x02\xE8\r\x03\x02\x02\x02\xE9" +
    "\xEC\x05\x10\t\x02\xEA\xEC\x05R*\x02\xEB\xE9\x03\x02\x02\x02\xEB\xEA\x03" +
    "\x02\x02\x02\xEC\x0F\x03\x02\x02\x02\xED\xEE\x05R*\x02\xEE\xEF\x07\x16" +
    "\x02\x02\xEF\x11\x03\x02\x02\x02\xF0\xF1\x05,\x17\x02\xF1\x13\x03\x02" +
    "\x02\x02\xF2\xF3\x07\x15\x02\x02\xF3\x15\x03\x02\x02\x02\xF4\xF5\x07\x12" +
    "\x02\x02\xF5\x17\x03\x02\x02\x02\xF6\xF7\b\r\x01\x02\xF7\xFA\x05\x1E\x10" +
    "\x02\xF8\xFA\x05\x1A\x0E\x02\xF9\xF6\x03\x02\x02\x02\xF9\xF8\x03\x02\x02" +
    "\x02\xFA\u0106\x03\x02\x02\x02\xFB\xFD\f\x05\x02\x02\xFC\xFE\x07\v\x02" +
    "\x02\xFD\xFC\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x03\x02\x02" +
    "\x02\xFF\u0101\t\x03\x02\x02\u0100\u0102\x07\v\x02\x02\u0101\u0100\x03" +
    "\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103" +
    "\u0105\x05\x18\r\x06\u0104\xFB\x03\x02\x02\x02\u0105\u0108\x03\x02\x02" +
    "\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\x19" +
    "\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0109\u010E\x05\x1C\x0F\x02" +
    "\u010A\u010E\x05&\x14\x02\u010B\u010E\x05$\x13\x02\u010C\u010E\x05R*\x02" +
    "\u010D\u0109\x03\x02\x02\x02\u010D\u010A\x03\x02\x02\x02\u010D\u010B\x03" +
    "\x02\x02\x02\u010D\u010C\x03\x02\x02\x02\u010E\x1B\x03\x02\x02\x02\u010F" +
    "\u0111\x07\x1E\x02\x02\u0110\u0112\x07\v\x02\x02\u0111\u0110\x03\x02\x02" +
    "\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0115" +
    "\x05\x18\r\x02\u0114\u0116\x07\v\x02\x02\u0115\u0114\x03\x02\x02\x02\u0115" +
    "\u0116\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0118\x07\x1F" +
    "\x02\x02\u0118\x1D\x03\x02\x02\x02\u0119\u011B\x07\x1E\x02\x02\u011A\u011C" +
    "\x07\v\x02\x02\u011B\u011A\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02" +
    "\u011C\u011D\x03\x02\x02\x02\u011D\u011F\x05 \x11\x02\u011E\u0120\x07" +
    "\v\x02\x02\u011F\u011E\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120" +
    "\u0121\x03\x02\x02\x02\u0121\u0123\x07\x1F\x02\x02\u0122\u0124\x07\v\x02" +
    "\x02\u0123\u0122\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u0125" +
    "\x03\x02\x02\x02\u0125\u0127\x07\x19\x02\x02\u0126\u0128\x07\v\x02\x02" +
    "\u0127\u0126\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u0129\x03" +
    "\x02\x02\x02\u0129\u012A\x05\x18\r\x02\u012A\u0136\x03\x02\x02\x02\u012B" +
    "\u012D\x05\"\x12\x02\u012C\u012E\x07\v\x02\x02\u012D\u012C\x03\x02\x02" +
    "\x02\u012D\u012E\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0131" +
    "\x07\x19\x02\x02\u0130\u0132\x07\v\x02\x02\u0131\u0130\x03\x02\x02\x02" +
    "\u0131\u0132\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0134\x05" +
    "\x18\r\x02\u0134\u0136\x03\x02\x02\x02\u0135\u0119\x03\x02\x02\x02\u0135" +
    "\u012B\x03\x02\x02\x02\u0136\x1F\x03\x02\x02\x02\u0137\u013F\x05\"\x12" +
    "\x02\u0138\u013A\x07\x14\x02\x02\u0139\u013B\x07\v\x02\x02\u013A\u0139" +
    "\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02" +
    "\u013C\u013E\x05\"\x12\x02\u013D\u0138\x03\x02\x02\x02\u013E\u0141\x03" +
    "\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140" +
    "!\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0142\u014B\x05R*\x02\u0143" +
    "\u0145\x07\v\x02\x02\u0144\u0143\x03\x02\x02\x02\u0144\u0145\x03\x02\x02" +
    "\x02\u0145\u0146\x03\x02\x02\x02\u0146\u0148\x07\x12\x02\x02\u0147\u0149" +
    "\x07\v\x02\x02\u0148\u0147\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02" +
    "\u0149\u014A\x03\x02\x02\x02\u014A\u014C\x05\x18\r\x02\u014B\u0144\x03" +
    "\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C#\x03\x02\x02\x02\u014D" +
    "\u014F\x07 \x02\x02\u014E\u0150\x07\v\x02\x02\u014F\u014E\x03\x02\x02" +
    "\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0152\x03\x02\x02\x02\u0151\u0153" +
    "\x05\x18\r\x02\u0152\u0151\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02" +
    "\u0153\u015B\x03\x02\x02\x02\u0154\u0156\x07\x14\x02\x02\u0155\u0157\x07" +
    "\v\x02\x02\u0156\u0155\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157" +
    "\u0158\x03\x02\x02\x02\u0158\u015A\x05\x18\r\x02\u0159\u0154\x03\x02\x02" +
    "\x02\u015A\u015D\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015B\u015C" +
    "\x03\x02\x02\x02\u015C\u015F\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02" +
    "\u015E\u0160\x07\v\x02\x02\u015F\u015E\x03\x02\x02\x02\u015F\u0160\x03" +
    "\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0167\x07!\x02\x02\u0162" +
    "\u0163\x05R*\x02\u0163\u0164\x07 \x02\x02\u0164\u0165\x07!\x02\x02\u0165" +
    "\u0167\x03\x02\x02\x02\u0166\u014D\x03\x02\x02\x02\u0166\u0162\x03\x02" +
    "\x02\x02\u0167%\x03\x02\x02\x02\u0168\u016A\x07\x1C\x02\x02\u0169\u016B" +
    "\x07\v\x02\x02\u016A\u0169\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02" +
    "\u016B\u016D\x03\x02\x02\x02\u016C\u016E\x05(\x15\x02\u016D\u016C\x03" +
    "\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u0170\x03\x02\x02\x02\u016F" +
    "\u0171\x07\v\x02\x02\u0170\u016F\x03\x02\x02\x02\u0170\u0171\x03\x02\x02" +
    "\x02\u0171\u0172\x03\x02\x02\x02\u0172\u0173\x07\x1D\x02\x02\u0173\'\x03" +
    "\x02\x02\x02\u0174\u0176\x05\x18\r\x02\u0175\u0177\x07\v\x02\x02\u0176" +
    "\u0175\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0178\x03\x02" +
    "\x02\x02\u0178\u017A\x07\x12\x02\x02\u0179\u017B\x07\v\x02\x02\u017A\u0179" +
    "\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02" +
    "\u017C\u017D\x05\x18\r\x02\u017D)\x03\x02\x02\x02\u017E\u017F\x07\x0F" +
    "\x02\x02\u017F+\x03\x02\x02\x02\u0180\u0181\x05.\x18\x02\u0181-\x03\x02" +
    "\x02\x02\u0182\u0186\x050\x19\x02\u0183\u0185\x054\x1B\x02\u0184\u0183" +
    "\x03\x02\x02\x02\u0185\u0188\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02" +
    "\u0186\u0187\x03\x02\x02\x02\u0187\u0191\x03\x02\x02\x02\u0188\u0186\x03" +
    "\x02\x02\x02\u0189\u018D\x058\x1D\x02\u018A\u018C\x054\x1B\x02\u018B\u018A" +
    "\x03\x02\x02\x02\u018C\u018F\x03\x02\x02\x02\u018D\u018B\x03\x02\x02\x02" +
    "\u018D\u018E\x03\x02\x02\x02\u018E\u0191\x03\x02\x02\x02\u018F\u018D\x03" +
    "\x02\x02\x02\u0190\u0182\x03\x02\x02\x02\u0190\u0189\x03\x02\x02\x02\u0191" +
    "/\x03\x02\x02\x02\u0192\u0194\x07\v\x02\x02\u0193\u0192\x03\x02\x02\x02" +
    "\u0193\u0194\x03\x02\x02\x02\u0194\u0196\x03\x02\x02\x02\u0195\u0197\x05" +
    "2\x1A\x02\u0196\u0195\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198" +
    "\u0196\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019F\x03\x02" +
    "\x02\x02\u019A\u019E\x052\x1A\x02\u019B\u019E\x07\v\x02\x02\u019C\u019E" +
    "\x07\r\x02\x02\u019D\u019A\x03\x02\x02\x02\u019D\u019B\x03\x02\x02\x02" +
    "\u019D\u019C\x03\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F\u019D\x03" +
    "\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A01\x03\x02\x02\x02\u01A1" +
    "\u019F\x03\x02\x02\x02\u01A2\u01AC\x07\f\x02\x02\u01A3\u01AC\x07\t\x02" +
    "\x02\u01A4\u01AC\x07\x11\x02\x02\u01A5\u01AC\x07\x1C\x02\x02\u01A6\u01AC" +
    "\x07\x1D\x02\x02\u01A7\u01AC\x07\x12\x02\x02\u01A8\u01AC\x07\x0F\x02\x02" +
    "\u01A9\u01AC\x07\x13\x02\x02\u01AA\u01AC\x05N(\x02\u01AB\u01A2\x03\x02" +
    "\x02\x02\u01AB\u01A3\x03\x02\x02\x02\u01AB\u01A4\x03\x02\x02\x02\u01AB" +
    "\u01A5\x03\x02\x02\x02\u01AB\u01A6\x03\x02\x02\x02\u01AB\u01A7\x03\x02" +
    "\x02\x02\u01AB\u01A8\x03\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AB" +
    "\u01AA\x03\x02\x02\x02\u01AC3\x03\x02\x02\x02\u01AD\u01B0\x058\x1D\x02" +
    "\u01AE\u01B0\x056\x1C\x02\u01AF\u01AD\x03\x02\x02\x02\u01AF\u01AE\x03" +
    "\x02\x02\x02\u01B05\x03\x02\x02\x02\u01B1\u01B5\x052\x1A\x02\u01B2\u01B5" +
    "\x07\v\x02\x02\u01B3\u01B5\x07\r\x02\x02\u01B4\u01B1\x03\x02\x02\x02\u01B4" +
    "\u01B2\x03\x02\x02\x02\u01B4\u01B3\x03\x02\x02\x02\u01B5\u01B6\x03\x02" +
    "\x02\x02\u01B6\u01B4\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7" +
    "7\x03\x02\x02\x02\u01B8\u01B9\x07\x1B\x02\x02\u01B9\u01BA\x05:\x1E\x02" +
    "\u01BA\u01BC\x07\v\x02\x02\u01BB\u01BD\x05<\x1F\x02\u01BC\u01BB\x03\x02" +
    "\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE" +
    "\u01BF\x07\x1D\x02\x02\u01BF9\x03\x02\x02\x02\u01C0\u01C1\x05R*\x02\u01C1" +
    ";\x03\x02\x02\x02\u01C2\u01C4\x05@!\x02\u01C3\u01C2\x03\x02\x02\x02\u01C4" +
    "\u01C5\x03\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C5\u01C6\x03\x02" +
    "\x02\x02\u01C6=\x03\x02\x02\x02\u01C7\u01CB\x07\x1C\x02\x02\u01C8\u01CA" +
    "\x05@!\x02\u01C9\u01C8\x03\x02\x02\x02\u01CA\u01CD\x03\x02\x02\x02\u01CB" +
    "\u01C9\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01CE\x03\x02" +
    "\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CE\u01CF\x07\x1D\x02\x02\u01CF" +
    "?\x03\x02\x02\x02\u01D0\u01DA\x05> \x02\u01D1\u01D6\x05B\"\x02\u01D2\u01D3" +
    "\x07\n\x02\x02\u01D3\u01D5\x05B\"\x02\u01D4\u01D2\x03\x02\x02\x02\u01D5" +
    "\u01D8\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D7\x03\x02" +
    "\x02\x02\u01D7\u01DA\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D9" +
    "\u01D0\x03\x02\x02\x02\u01D9\u01D1\x03\x02\x02\x02\u01DAA\x03\x02\x02" +
    "\x02\u01DB\u01DC\t\x04\x02\x02\u01DCC\x03\x02\x02\x02\u01DD\u01DE\b#\x01" +
    "\x02\u01DE\u01E4\x05F$\x02\u01DF\u01E4\x05H%\x02\u01E0\u01E4\x05J&\x02" +
    "\u01E1\u01E4\x05N(\x02\u01E2\u01E4\x05P)\x02\u01E3\u01DD\x03\x02\x02\x02" +
    "\u01E3\u01DF\x03\x02\x02\x02\u01E3\u01E0\x03\x02\x02\x02\u01E3\u01E1\x03" +
    "\x02\x02\x02\u01E3\u01E2\x03\x02\x02\x02\u01E4\u01F9\x03\x02\x02\x02\u01E5" +
    "\u01E7\f\b\x02\x02\u01E6\u01E8\x07\v\x02\x02\u01E7\u01E6\x03\x02\x02\x02" +
    "\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01EB\t" +
    "\x05\x02\x02\u01EA\u01EC\x07\v\x02\x02\u01EB\u01EA\x03\x02\x02\x02\u01EB" +
    "\u01EC\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01F8\x05D#\t" +
    "\u01EE\u01F0\f\x07\x02\x02\u01EF\u01F1\x07\v\x02\x02\u01F0\u01EF\x03\x02" +
    "\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2" +
    "\u01F4\t\x06\x02\x02\u01F3\u01F5\x07\v\x02\x02\u01F4\u01F3\x03\x02\x02" +
    "\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F8" +
    "\x05D#\b\u01F7\u01E5\x03\x02\x02\x02\u01F7\u01EE\x03\x02\x02\x02\u01F8" +
    "\u01FB\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03\x02" +
    "\x02\x02\u01FAE\x03\x02\x02\x02\u01FB\u01F9\x03\x02\x02\x02\u01FC\u01FD" +
    "\t\x06\x02\x02\u01FD\u01FE\x05D#\x02\u01FEG\x03\x02\x02\x02\u01FF\u0201" +
    "\x07 \x02\x02\u0200\u0202\x05D#\x02\u0201\u0200\x03\x02\x02\x02\u0201" +
    "\u0202\x03\x02\x02\x02\u0202\u020A\x03\x02\x02\x02\u0203\u0205\x07\x14" +
    "\x02\x02\u0204\u0206\x07\v\x02\x02\u0205\u0204\x03\x02\x02\x02\u0205\u0206" +
    "\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02\u0207\u0209\x05D#\x02\u0208" +
    "\u0203\x03\x02\x02\x02\u0209\u020C\x03\x02\x02\x02\u020A\u0208\x03\x02" +
    "\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B\u020D\x03\x02\x02\x02\u020C" +
    "\u020A\x03\x02\x02\x02\u020D\u020E\x07!\x02\x02\u020EI\x03\x02\x02\x02" +
    "\u020F\u0211\x07\x1C\x02\x02\u0210\u0212\x07\v\x02\x02\u0211\u0210\x03" +
    "\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0214\x03\x02\x02\x02\u0213" +
    "\u0215\x05L\'\x02\u0214\u0213\x03\x02\x02\x02\u0214\u0215\x03\x02\x02" +
    "\x02\u0215\u0217\x03\x02\x02\x02\u0216\u0218\x07\v\x02\x02\u0217\u0216" +
    "\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02" +
    "\u0219\u021A\x07\x1D\x02\x02\u021AK\x03\x02\x02\x02\u021B\u021D\x05N(" +
    "\x02\u021C\u021E\x07\v\x02\x02\u021D\u021C\x03\x02\x02\x02\u021D\u021E" +
    "\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F\u0221\x07\x12\x02\x02" +
    "\u0220\u0222\x07\v\x02\x02\u0221\u0220\x03\x02\x02\x02\u0221\u0222\x03" +
    "\x02\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223";
TomParser._serializedATNSegment1 = "\u0224\x05N(\x02\u0224M\x03\x02\x02\x02\u0225\u0226\t\x07\x02\x02\u0226" +
    "O\x03\x02\x02\x02\u0227\u0229\x07\x1E\x02\x02\u0228\u022A\x07\v\x02\x02" +
    "\u0229\u0228\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A\u022B\x03" +
    "\x02\x02\x02\u022B\u022D\x05D#\x02\u022C\u022E\x07\v\x02\x02\u022D\u022C" +
    "\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02" +
    "\u022F\u0230\x07\x1F\x02\x02\u0230Q\x03\x02\x02\x02\u0231\u0232\x07\t" +
    "\x02\x02\u0232S\x03\x02\x02\x02VW[`l~\x82\x94\xA0\xA4\xAC\xB0\xB4\xB8" +
    "\xC0\xC4\xD0\xD4\xD8\xDC\xE4\xEB\xF9\xFD\u0101\u0106\u010D\u0111\u0115" +
    "\u011B\u011F\u0123\u0127\u012D\u0131\u0135\u013A\u013F\u0144\u0148\u014B" +
    "\u014F\u0152\u0156\u015B\u015F\u0166\u016A\u016D\u0170\u0176\u017A\u0186" +
    "\u018D\u0190\u0193\u0198\u019D\u019F\u01AB\u01AF\u01B4\u01B6\u01BC\u01C5" +
    "\u01CB\u01D6\u01D9\u01E3\u01E7\u01EB\u01F0\u01F4\u01F7\u01F9\u0201\u0205" +
    "\u020A\u0211\u0214\u0217\u021D\u0221\u0229\u022D";
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
    tagID() {
        return this.tryGetRuleContext(0, TagIDContext);
    }
    descriptionDelimiter() {
        return this.tryGetRuleContext(0, DescriptionDelimiterContext);
    }
    tagBody() {
        return this.tryGetRuleContext(0, TagBodyContext);
    }
    assignmentDelimiter() {
        return this.tryGetRuleContext(0, AssignmentDelimiterContext);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    typeDelimiter() {
        return this.tryGetRuleContext(0, TypeDelimiterContext);
    }
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
class TagBodyContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    description() {
        return this.getRuleContext(0, DescriptionContext);
    }
    get ruleIndex() { return TomParser.RULE_tagBody; }
    enterRule(listener) {
        if (listener.enterTagBody)
            listener.enterTagBody(this);
    }
    exitRule(listener) {
        if (listener.exitTagBody)
            listener.exitTagBody(this);
    }
    accept(visitor) {
        if (visitor.visitTagBody)
            return visitor.visitTagBody(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TagBodyContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TagBodyContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TagBodyContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TagBodyContext.prototype, "accept", null);
exports.TagBodyContext = TagBodyContext;
class AssignmentDelimiterContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EQUAL() { return this.getToken(TomParser.EQUAL, 0); }
    get ruleIndex() { return TomParser.RULE_assignmentDelimiter; }
    enterRule(listener) {
        if (listener.enterAssignmentDelimiter)
            listener.enterAssignmentDelimiter(this);
    }
    exitRule(listener) {
        if (listener.exitAssignmentDelimiter)
            listener.exitAssignmentDelimiter(this);
    }
    accept(visitor) {
        if (visitor.visitAssignmentDelimiter)
            return visitor.visitAssignmentDelimiter(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AssignmentDelimiterContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AssignmentDelimiterContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AssignmentDelimiterContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AssignmentDelimiterContext.prototype, "accept", null);
exports.AssignmentDelimiterContext = AssignmentDelimiterContext;
class TypeDelimiterContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    COLON() { return this.getToken(TomParser.COLON, 0); }
    get ruleIndex() { return TomParser.RULE_typeDelimiter; }
    enterRule(listener) {
        if (listener.enterTypeDelimiter)
            listener.enterTypeDelimiter(this);
    }
    exitRule(listener) {
        if (listener.exitTypeDelimiter)
            listener.exitTypeDelimiter(this);
    }
    accept(visitor) {
        if (visitor.visitTypeDelimiter)
            return visitor.visitTypeDelimiter(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TypeDelimiterContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TypeDelimiterContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TypeDelimiterContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TypeDelimiterContext.prototype, "accept", null);
exports.TypeDelimiterContext = TypeDelimiterContext;
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
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
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
    objectPairType() {
        return this.tryGetRuleContext(0, ObjectPairTypeContext);
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
class DescriptionDelimiterContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    MINUS() { return this.getToken(TomParser.MINUS, 0); }
    get ruleIndex() { return TomParser.RULE_descriptionDelimiter; }
    enterRule(listener) {
        if (listener.enterDescriptionDelimiter)
            listener.enterDescriptionDelimiter(this);
    }
    exitRule(listener) {
        if (listener.exitDescriptionDelimiter)
            listener.exitDescriptionDelimiter(this);
    }
    accept(visitor) {
        if (visitor.visitDescriptionDelimiter)
            return visitor.visitDescriptionDelimiter(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DescriptionDelimiterContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DescriptionDelimiterContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DescriptionDelimiterContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DescriptionDelimiterContext.prototype, "accept", null);
exports.DescriptionDelimiterContext = DescriptionDelimiterContext;
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
    objectPair() {
        return this.tryGetRuleContext(0, ObjectPairContext);
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
class ObjectPairContext extends ParserRuleContext_1.ParserRuleContext {
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
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
    get ruleIndex() { return TomParser.RULE_objectPair; }
    enterRule(listener) {
        if (listener.enterObjectPair)
            listener.enterObjectPair(this);
    }
    exitRule(listener) {
        if (listener.exitObjectPair)
            listener.exitObjectPair(this);
    }
    accept(visitor) {
        if (visitor.visitObjectPair)
            return visitor.visitObjectPair(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ObjectPairContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ObjectPairContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ObjectPairContext.prototype, "accept", null);
exports.ObjectPairContext = ObjectPairContext;
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