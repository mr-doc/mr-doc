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
const RuleVersion_1 = require("antlr4ts/RuleVersion");
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
            this.state = 91;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.EOF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 84;
                        this.match(TomParser.EOF);
                    }
                    break;
                case TomParser.NEWLINE:
                case TomParser.SPACE:
                case TomParser.AT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 85;
                        this.body();
                        this.state = 87;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.NEWLINE) {
                            {
                                this.state = 86;
                                this.match(TomParser.NEWLINE);
                            }
                        }
                        this.state = 89;
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
                this.state = 96;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TomParser.NEWLINE || _la === TomParser.SPACE) {
                    {
                        {
                            this.state = 93;
                            this.whitespace();
                        }
                    }
                    this.state = 98;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 99;
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
                this.state = 101;
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
                this.state = 103;
                this.tag();
                this.state = 108;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 104;
                                this.match(TomParser.NEWLINE);
                                this.state = 105;
                                this.tag();
                            }
                        }
                    }
                    this.state = 110;
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
            this.state = 228;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 111;
                        this.tagName();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 112;
                        this.tagName();
                        this.state = 113;
                        this.match(TomParser.SPACE);
                        this.state = 114;
                        this.tagID();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 116;
                        this.tagName();
                        this.state = 117;
                        this.match(TomParser.SPACE);
                        this.state = 118;
                        this.match(TomParser.MINUS);
                        this.state = 119;
                        this.match(TomParser.SPACE);
                        this.state = 120;
                        this.description();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 122;
                        this.tagName();
                        this.state = 123;
                        this.match(TomParser.SPACE);
                        this.state = 124;
                        this.tagID();
                        this.state = 126;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 125;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 128;
                        this.match(TomParser.EQUAL);
                        this.state = 130;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 129;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 132;
                        this.expression(0);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 134;
                        this.tagName();
                        this.state = 135;
                        this.match(TomParser.SPACE);
                        this.state = 136;
                        this.tagID();
                        this.state = 137;
                        this.match(TomParser.SPACE);
                        this.state = 138;
                        this.match(TomParser.MINUS);
                        this.state = 139;
                        this.match(TomParser.SPACE);
                        this.state = 140;
                        this.description();
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
                        this.state = 145;
                        this.match(TomParser.SPACE);
                        this.state = 146;
                        this.match(TomParser.EQUAL);
                        this.state = 148;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 147;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 150;
                        this.expression(0);
                        this.state = 151;
                        this.match(TomParser.SPACE);
                        this.state = 152;
                        this.match(TomParser.MINUS);
                        this.state = 153;
                        this.match(TomParser.SPACE);
                        this.state = 154;
                        this.description();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 156;
                        this.tagName();
                        this.state = 157;
                        this.match(TomParser.SPACE);
                        this.state = 158;
                        this.tagID();
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
                        this.match(TomParser.COLON);
                        this.state = 164;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 163;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 166;
                        this.type(0);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
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
                        this.state = 180;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 179;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 182;
                        this.match(TomParser.EQUAL);
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
                        this.expression(0);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
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
                        if (_la === TomParser.SPACE) {
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
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 195;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 198;
                        this.type(0);
                        this.state = 199;
                        this.match(TomParser.SPACE);
                        this.state = 200;
                        this.match(TomParser.MINUS);
                        this.state = 201;
                        this.match(TomParser.SPACE);
                        this.state = 202;
                        this.description();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
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
                        if (_la === TomParser.SPACE) {
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
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 211;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 214;
                        this.type(0);
                        this.state = 216;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 215;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 218;
                        this.match(TomParser.EQUAL);
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
                        this.expression(0);
                        this.state = 223;
                        this.match(TomParser.SPACE);
                        this.state = 224;
                        this.match(TomParser.MINUS);
                        this.state = 225;
                        this.match(TomParser.SPACE);
                        this.state = 226;
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
                this.state = 230;
                this.match(TomParser.AT);
                this.state = 231;
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
            this.state = 236;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 233;
                        this.propertyTagID();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 234;
                        this.optionalTagID();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 235;
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
                this.state = 238;
                this.identifier();
                this.state = 239;
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
            this.state = 263;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 241;
                        this.optionalTagID();
                        this.state = 249;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === TomParser.PERIOD) {
                            {
                                {
                                    this.state = 242;
                                    this.match(TomParser.PERIOD);
                                    this.state = 245;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 243;
                                                this.optionalTagID();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 244;
                                                this.identifier();
                                            }
                                            break;
                                    }
                                }
                            }
                            this.state = 251;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 252;
                        this.identifier();
                        this.state = 260;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === TomParser.PERIOD) {
                            {
                                {
                                    this.state = 253;
                                    this.match(TomParser.PERIOD);
                                    this.state = 256;
                                    this._errHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 254;
                                                this.optionalTagID();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 255;
                                                this.identifier();
                                            }
                                            break;
                                    }
                                }
                            }
                            this.state = 262;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
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
        let _startState = 18;
        this.enterRecursionRule(_localctx, 18, TomParser.RULE_type, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 269;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                    case 1:
                        {
                            this.state = 266;
                            this.lambdaType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 267;
                            this.tupleType();
                        }
                        break;
                    case 3:
                        {
                            this.state = 268;
                            this.primaryType();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 282;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new TypeContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_type);
                                this.state = 271;
                                if (!(this.precpred(this._ctx, 4)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                this.state = 273;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === TomParser.SPACE) {
                                    {
                                        this.state = 272;
                                        this.match(TomParser.SPACE);
                                    }
                                }
                                this.state = 275;
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
                                this.state = 277;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === TomParser.SPACE) {
                                    {
                                        this.state = 276;
                                        this.match(TomParser.SPACE);
                                    }
                                }
                                this.state = 279;
                                this.type(5);
                            }
                        }
                    }
                    this.state = 284;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
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
        this.enterRule(_localctx, 20, TomParser.RULE_tupleType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 286;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.ID) {
                    {
                        this.state = 285;
                        this.identifier();
                    }
                }
                this.state = 288;
                this.match(TomParser.LESSTHAN);
                this.state = 290;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 289;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 292;
                this.tupleTypeList();
                this.state = 294;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 293;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 296;
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
        this.enterRule(_localctx, 22, TomParser.RULE_tupleTypeList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 298;
                this.type(0);
                this.state = 300;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 299;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 307;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 302;
                            this.match(TomParser.COMMA);
                            this.state = 304;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 303;
                                    this.match(TomParser.SPACE);
                                }
                            }
                            this.state = 306;
                            this.type(0);
                        }
                    }
                    this.state = 309;
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
        this.enterRule(_localctx, 24, TomParser.RULE_primaryType);
        try {
            this.state = 320;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 311;
                        this.parenthesizedType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 312;
                        this.objectType();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 313;
                        this.arrayType(0);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 314;
                        this.propertyType();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 315;
                        this.optionalType();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 316;
                        this.identifier();
                        this.state = 318;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                            case 1:
                                {
                                    this.state = 317;
                                    this.match(TomParser.QUESTION);
                                }
                                break;
                        }
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
                this.state = 322;
                this.match(TomParser.PAREN_OPEN);
                this.state = 324;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 323;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 326;
                this.type(0);
                this.state = 328;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 327;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 330;
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
            this.state = 360;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.PAREN_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 332;
                        this.match(TomParser.PAREN_OPEN);
                        this.state = 334;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 333;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 336;
                        this.formalParameterSequence();
                        this.state = 338;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 337;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 340;
                        this.match(TomParser.PAREN_CLOSE);
                        this.state = 342;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 341;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 344;
                        this.match(TomParser.ARROW);
                        this.state = 346;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 345;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 348;
                        this.type(0);
                    }
                    break;
                case TomParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 350;
                        this.parameter();
                        this.state = 352;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 351;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 354;
                        this.match(TomParser.ARROW);
                        this.state = 356;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 355;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 358;
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
                this.state = 362;
                this.parameter();
                this.state = 370;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TomParser.COMMA) {
                    {
                        {
                            this.state = 363;
                            this.match(TomParser.COMMA);
                            this.state = 365;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 364;
                                    this.match(TomParser.SPACE);
                                }
                            }
                            this.state = 367;
                            this.parameter();
                        }
                    }
                    this.state = 372;
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
                this.state = 373;
                this.identifier();
                this.state = 382;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                    case 1:
                        {
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
                            this.match(TomParser.COLON);
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
        let _startState = 34;
        this.enterRecursionRule(_localctx, 34, TomParser.RULE_arrayType, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 414;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TomParser.BRACKET_OPEN:
                        {
                            this.state = 385;
                            this.match(TomParser.BRACKET_OPEN);
                            this.state = 387;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 386;
                                        this.match(TomParser.SPACE);
                                    }
                                    break;
                            }
                            this.state = 390;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (TomParser.ID - 7)) | (1 << (TomParser.BRACE_OPEN - 7)) | (1 << (TomParser.PAREN_OPEN - 7)) | (1 << (TomParser.BRACKET_OPEN - 7)) | (1 << (TomParser.LESSTHAN - 7)))) !== 0)) {
                                {
                                    this.state = 389;
                                    this.type(0);
                                }
                            }
                            this.state = 399;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === TomParser.COMMA) {
                                {
                                    {
                                        this.state = 392;
                                        this.match(TomParser.COMMA);
                                        this.state = 394;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 393;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 396;
                                        this.type(0);
                                    }
                                }
                                this.state = 401;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 403;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 402;
                                    this.match(TomParser.SPACE);
                                }
                            }
                            this.state = 405;
                            this.match(TomParser.BRACKET_CLOSE);
                        }
                        break;
                    case TomParser.ID:
                        {
                            this.state = 406;
                            this.identifier();
                            this.state = 407;
                            this.match(TomParser.BRACKET_OPEN);
                            this.state = 408;
                            this.match(TomParser.BRACKET_CLOSE);
                        }
                        break;
                    case TomParser.BRACE_OPEN:
                        {
                            this.state = 410;
                            this.objectType();
                            this.state = 411;
                            this.match(TomParser.BRACKET_OPEN);
                            this.state = 412;
                            this.match(TomParser.BRACKET_CLOSE);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 424;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ArrayTypeContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_arrayType);
                                this.state = 416;
                                if (!(this.precpred(this._ctx, 1)))
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                this.state = 417;
                                this.match(TomParser.BRACKET_OPEN);
                                this.state = 419;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (TomParser.ID - 7)) | (1 << (TomParser.BRACE_OPEN - 7)) | (1 << (TomParser.PAREN_OPEN - 7)) | (1 << (TomParser.BRACKET_OPEN - 7)) | (1 << (TomParser.LESSTHAN - 7)))) !== 0)) {
                                    {
                                        this.state = 418;
                                        this.type(0);
                                    }
                                }
                                this.state = 421;
                                this.match(TomParser.BRACKET_CLOSE);
                            }
                        }
                    }
                    this.state = 426;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
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
        this.enterRule(_localctx, 36, TomParser.RULE_objectType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 427;
                this.match(TomParser.BRACE_OPEN);
                this.state = 429;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                    case 1:
                        {
                            this.state = 428;
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 432;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (TomParser.ID - 7)) | (1 << (TomParser.BRACE_OPEN - 7)) | (1 << (TomParser.PAREN_OPEN - 7)) | (1 << (TomParser.BRACKET_OPEN - 7)) | (1 << (TomParser.LESSTHAN - 7)))) !== 0)) {
                    {
                        this.state = 431;
                        this.objectPairType();
                    }
                }
                this.state = 435;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 434;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 437;
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
                this.state = 439;
                this.type(0);
                this.state = 441;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 440;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 443;
                this.match(TomParser.COLON);
                this.state = 445;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 444;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 447;
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
        this.enterRule(_localctx, 40, TomParser.RULE_optionalType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 449;
                this.identifier();
                this.state = 450;
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
        this.enterRule(_localctx, 42, TomParser.RULE_propertyType);
        try {
            let _alt;
            this.state = 474;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 452;
                        this.identifier();
                        this.state = 460;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 453;
                                        this.match(TomParser.PERIOD);
                                        this.state = 456;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 65, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 454;
                                                    this.identifier();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 455;
                                                    this.optionalType();
                                                }
                                                break;
                                        }
                                    }
                                }
                            }
                            this.state = 462;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 463;
                        this.optionalType();
                        this.state = 471;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 464;
                                        this.match(TomParser.PERIOD);
                                        this.state = 467;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 67, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 465;
                                                    this.optionalTagID();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 466;
                                                    this.identifier();
                                                }
                                                break;
                                        }
                                    }
                                }
                            }
                            this.state = 473;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
                        }
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
    description() {
        let _localctx = new DescriptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, TomParser.RULE_description);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 476;
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
        this.enterRule(_localctx, 46, TomParser.RULE_descriptionLine);
        let _la;
        try {
            this.state = 492;
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
                        this.state = 478;
                        this.descriptionLineStart();
                        this.state = 482;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral) | (1 << TomParser.ID) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.AT) | (1 << TomParser.MINUS) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.COLON) | (1 << TomParser.PERIOD) | (1 << TomParser.INLINE_TAG_START) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.BRACE_CLOSE))) !== 0)) {
                            {
                                {
                                    this.state = 479;
                                    this.descriptionLineElement();
                                }
                            }
                            this.state = 484;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case TomParser.INLINE_TAG_START:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 485;
                        this.inlineTag();
                        this.state = 489;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral) | (1 << TomParser.ID) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.AT) | (1 << TomParser.MINUS) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.COLON) | (1 << TomParser.PERIOD) | (1 << TomParser.INLINE_TAG_START) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.BRACE_CLOSE))) !== 0)) {
                            {
                                {
                                    this.state = 486;
                                    this.descriptionLineElement();
                                }
                            }
                            this.state = 491;
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
        this.enterRule(_localctx, 48, TomParser.RULE_descriptionLineStart);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 495;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 494;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 498;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 497;
                                    this.descriptionText();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 500;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 507;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 505;
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
                                        this.state = 502;
                                        this.descriptionText();
                                    }
                                    break;
                                case TomParser.SPACE:
                                    {
                                        this.state = 503;
                                        this.match(TomParser.SPACE);
                                    }
                                    break;
                                case TomParser.AT:
                                    {
                                        this.state = 504;
                                        this.match(TomParser.AT);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 509;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
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
        this.enterRule(_localctx, 50, TomParser.RULE_descriptionText);
        try {
            this.state = 519;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.TEXT_CONTENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 510;
                        this.match(TomParser.TEXT_CONTENT);
                    }
                    break;
                case TomParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 511;
                        this.match(TomParser.ID);
                    }
                    break;
                case TomParser.FORWARD_SLASH:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 512;
                        this.match(TomParser.FORWARD_SLASH);
                    }
                    break;
                case TomParser.BRACE_OPEN:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 513;
                        this.match(TomParser.BRACE_OPEN);
                    }
                    break;
                case TomParser.BRACE_CLOSE:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 514;
                        this.match(TomParser.BRACE_CLOSE);
                    }
                    break;
                case TomParser.COLON:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 515;
                        this.match(TomParser.COLON);
                    }
                    break;
                case TomParser.MINUS:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 516;
                        this.match(TomParser.MINUS);
                    }
                    break;
                case TomParser.PERIOD:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 517;
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
                        this.state = 518;
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
        this.enterRule(_localctx, 52, TomParser.RULE_descriptionLineElement);
        try {
            this.state = 523;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.INLINE_TAG_START:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 521;
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
                        this.state = 522;
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
        this.enterRule(_localctx, 54, TomParser.RULE_descriptionLineText);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 528;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 528;
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
                                            this.state = 525;
                                            this.descriptionText();
                                        }
                                        break;
                                    case TomParser.SPACE:
                                        {
                                            this.state = 526;
                                            this.match(TomParser.SPACE);
                                        }
                                        break;
                                    case TomParser.AT:
                                        {
                                            this.state = 527;
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
                    this.state = 530;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
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
        this.enterRule(_localctx, 56, TomParser.RULE_inlineTag);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 532;
                this.match(TomParser.INLINE_TAG_START);
                this.state = 533;
                this.inlineTagName();
                this.state = 534;
                this.match(TomParser.SPACE);
                this.state = 536;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.NEWLINE) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.PERIOD) | (1 << TomParser.BRACE_OPEN))) !== 0)) {
                    {
                        this.state = 535;
                        this.inlineTagBody();
                    }
                }
                this.state = 538;
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
        this.enterRule(_localctx, 58, TomParser.RULE_inlineTagName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 540;
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
        this.enterRule(_localctx, 60, TomParser.RULE_inlineTagBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 543;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 542;
                            this.braceBody();
                        }
                    }
                    this.state = 545;
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
        this.enterRule(_localctx, 62, TomParser.RULE_braceExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 547;
                this.match(TomParser.BRACE_OPEN);
                this.state = 551;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.NEWLINE) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.PERIOD) | (1 << TomParser.BRACE_OPEN))) !== 0)) {
                    {
                        {
                            this.state = 548;
                            this.braceBody();
                        }
                    }
                    this.state = 553;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 554;
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
        this.enterRule(_localctx, 64, TomParser.RULE_braceBody);
        try {
            let _alt;
            this.state = 565;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.BRACE_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 556;
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
                        this.state = 557;
                        this.braceText();
                        this.state = 562;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 558;
                                        this.match(TomParser.NEWLINE);
                                        this.state = 559;
                                        this.braceText();
                                    }
                                }
                            }
                            this.state = 564;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
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
        this.enterRule(_localctx, 66, TomParser.RULE_braceText);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 567;
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
        let _startState = 68;
        this.enterRecursionRule(_localctx, 68, TomParser.RULE_expression, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 575;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TomParser.PLUS:
                    case TomParser.MINUS:
                        {
                            this.state = 570;
                            this.unaryExpression();
                        }
                        break;
                    case TomParser.BRACKET_OPEN:
                        {
                            this.state = 571;
                            this.arrayExpression();
                        }
                        break;
                    case TomParser.BRACE_OPEN:
                        {
                            this.state = 572;
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
                            this.state = 573;
                            this.literal();
                        }
                        break;
                    case TomParser.PAREN_OPEN:
                        {
                            this.state = 574;
                            this.parenthesizedExpression();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 597;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 595;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 91, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_expression);
                                        this.state = 577;
                                        if (!(this.precpred(this._ctx, 6)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        this.state = 579;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 578;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 581;
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
                                        this.state = 583;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 582;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 585;
                                        this.expression(7);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_expression);
                                        this.state = 586;
                                        if (!(this.precpred(this._ctx, 5)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        this.state = 588;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 587;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 590;
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
                                        this.state = 592;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 591;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 594;
                                        this.expression(6);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 599;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
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
        this.enterRule(_localctx, 70, TomParser.RULE_unaryExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 600;
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
                this.state = 601;
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
        this.enterRule(_localctx, 72, TomParser.RULE_arrayExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 603;
                this.match(TomParser.BRACKET_OPEN);
                this.state = 605;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral) | (1 << TomParser.PLUS) | (1 << TomParser.MINUS) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.PAREN_OPEN) | (1 << TomParser.BRACKET_OPEN))) !== 0)) {
                    {
                        this.state = 604;
                        this.expression(0);
                    }
                }
                this.state = 614;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TomParser.COMMA) {
                    {
                        {
                            this.state = 607;
                            this.match(TomParser.COMMA);
                            this.state = 609;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 608;
                                    this.match(TomParser.SPACE);
                                }
                            }
                            this.state = 611;
                            this.expression(0);
                        }
                    }
                    this.state = 616;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 617;
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
        this.enterRule(_localctx, 74, TomParser.RULE_objectExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 619;
                this.match(TomParser.BRACE_OPEN);
                this.state = 621;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
                    case 1:
                        {
                            this.state = 620;
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 624;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral))) !== 0)) {
                    {
                        this.state = 623;
                        this.objectPair();
                    }
                }
                this.state = 627;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 626;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 629;
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
        this.enterRule(_localctx, 76, TomParser.RULE_objectPair);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 631;
                this.literal();
                this.state = 633;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 632;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 635;
                this.match(TomParser.COLON);
                this.state = 637;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 636;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 639;
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
        this.enterRule(_localctx, 78, TomParser.RULE_literal);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 641;
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
        this.enterRule(_localctx, 80, TomParser.RULE_parenthesizedExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 643;
                this.match(TomParser.PAREN_OPEN);
                this.state = 645;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 644;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 647;
                this.expression(0);
                this.state = 649;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 648;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 651;
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
        this.enterRule(_localctx, 82, TomParser.RULE_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 653;
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
            case 9:
                return this.type_sempred(_localctx, predIndex);
            case 17:
                return this.arrayType_sempred(_localctx, predIndex);
            case 34:
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
TomParser.RULE_type = 9;
TomParser.RULE_tupleType = 10;
TomParser.RULE_tupleTypeList = 11;
TomParser.RULE_primaryType = 12;
TomParser.RULE_parenthesizedType = 13;
TomParser.RULE_lambdaType = 14;
TomParser.RULE_formalParameterSequence = 15;
TomParser.RULE_parameter = 16;
TomParser.RULE_arrayType = 17;
TomParser.RULE_objectType = 18;
TomParser.RULE_objectPairType = 19;
TomParser.RULE_optionalType = 20;
TomParser.RULE_propertyType = 21;
TomParser.RULE_description = 22;
TomParser.RULE_descriptionLine = 23;
TomParser.RULE_descriptionLineStart = 24;
TomParser.RULE_descriptionText = 25;
TomParser.RULE_descriptionLineElement = 26;
TomParser.RULE_descriptionLineText = 27;
TomParser.RULE_inlineTag = 28;
TomParser.RULE_inlineTagName = 29;
TomParser.RULE_inlineTagBody = 30;
TomParser.RULE_braceExpression = 31;
TomParser.RULE_braceBody = 32;
TomParser.RULE_braceText = 33;
TomParser.RULE_expression = 34;
TomParser.RULE_unaryExpression = 35;
TomParser.RULE_arrayExpression = 36;
TomParser.RULE_objectExpression = 37;
TomParser.RULE_objectPair = 38;
TomParser.RULE_literal = 39;
TomParser.RULE_parenthesizedExpression = 40;
TomParser.RULE_identifier = 41;
TomParser.ruleNames = [
    "documentation", "body", "whitespace", "annotations", "tag", "tagName",
    "tagID", "optionalTagID", "propertyTagID", "type", "tupleType", "tupleTypeList",
    "primaryType", "parenthesizedType", "lambdaType", "formalParameterSequence",
    "parameter", "arrayType", "objectType", "objectPairType", "optionalType",
    "propertyType", "description", "descriptionLine", "descriptionLineStart",
    "descriptionText", "descriptionLineElement", "descriptionLineText", "inlineTag",
    "inlineTagName", "inlineTagBody", "braceExpression", "braceBody", "braceText",
    "expression", "unaryExpression", "arrayExpression", "objectExpression",
    "objectPair", "literal", "parenthesizedExpression", "identifier"
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
TomParser._serializedATNSegment0 = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03#\u0292\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
    "\x03\x02\x03\x02\x03\x02\x05\x02Z\n\x02\x03\x02\x03\x02\x05\x02^\n\x02" +
    "\x03\x03\x07\x03a\n\x03\f\x03\x0E\x03d\v\x03\x03\x03\x03\x03\x03\x04\x03" +
    "\x04\x03\x05\x03\x05\x03\x05\x07\x05m\n\x05\f\x05\x0E\x05p\v\x05\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x81\n\x06\x03\x06\x03" +
    "\x06\x05\x06\x85\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x05\x06\x97\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xA3\n\x06\x03\x06\x03\x06" +
    "\x05\x06\xA7\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05" +
    "\x06\xAF\n\x06\x03\x06\x03\x06\x05\x06\xB3\n\x06\x03\x06\x03\x06\x05\x06" +
    "\xB7\n\x06\x03\x06\x03\x06\x05\x06\xBB\n\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x05\x06\xC3\n\x06\x03\x06\x03\x06\x05\x06\xC7\n\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x05\x06\xD3\n\x06\x03\x06\x03\x06\x05\x06\xD7\n\x06\x03\x06\x03" +
    "\x06\x05\x06\xDB\n\x06\x03\x06\x03\x06\x05\x06\xDF\n\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xE7\n\x06\x03\x07\x03\x07\x03" +
    "\x07\x03\b\x03\b\x03\b\x05\b\xEF\n\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03" +
    "\n\x03\n\x05\n\xF8\n\n\x07\n\xFA\n\n\f\n\x0E\n\xFD\v\n\x03\n\x03\n\x03" +
    "\n\x03\n\x05\n\u0103\n\n\x07\n\u0105\n\n\f\n\x0E\n\u0108\v\n\x05\n\u010A" +
    "\n\n\x03\v\x03\v\x03\v\x03\v\x05\v\u0110\n\v\x03\v\x03\v\x05\v\u0114\n" +
    "\v\x03\v\x03\v\x05\v\u0118\n\v\x03\v\x07\v\u011B\n\v\f\v\x0E\v\u011E\v" +
    "\v\x03\f\x05\f\u0121\n\f\x03\f\x03\f\x05\f\u0125\n\f\x03\f\x03\f\x05\f" +
    "\u0129\n\f\x03\f\x03\f\x03\r\x03\r\x05\r\u012F\n\r\x03\r\x03\r\x05\r\u0133" +
    "\n\r\x03\r\x06\r\u0136\n\r\r\r\x0E\r\u0137\x03\x0E\x03\x0E\x03\x0E\x03" +
    "\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0141\n\x0E\x05\x0E\u0143\n\x0E\x03" +
    "\x0F\x03\x0F\x05\x0F\u0147\n\x0F\x03\x0F\x03\x0F\x05\x0F\u014B\n\x0F\x03" +
    "\x0F\x03\x0F\x03\x10\x03\x10\x05\x10\u0151\n\x10\x03\x10\x03\x10\x05\x10" +
    "\u0155\n\x10\x03\x10\x03\x10\x05\x10\u0159\n\x10\x03\x10\x03\x10\x05\x10" +
    "\u015D\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0163\n\x10\x03\x10" +
    "\x03\x10\x05\x10\u0167\n\x10\x03\x10\x03\x10\x05\x10\u016B\n\x10\x03\x11" +
    "\x03\x11\x03\x11\x05\x11\u0170\n\x11\x03\x11\x07\x11\u0173\n\x11\f\x11" +
    "\x0E\x11\u0176\v\x11\x03\x12\x03\x12\x05\x12\u017A\n\x12\x03\x12\x03\x12" +
    "\x05\x12\u017E\n\x12\x03\x12\x05\x12\u0181\n\x12\x03\x13\x03\x13\x03\x13" +
    "\x05\x13\u0186\n\x13\x03\x13\x05\x13\u0189\n\x13\x03\x13\x03\x13\x05\x13" +
    "\u018D\n\x13\x03\x13\x07\x13\u0190\n\x13\f\x13\x0E\x13\u0193\v\x13\x03" +
    "\x13\x05\x13\u0196\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
    "\x03\x13\x03\x13\x03\x13\x05\x13\u01A1\n\x13\x03\x13\x03\x13\x03\x13\x05" +
    "\x13\u01A6\n\x13\x03\x13\x07\x13\u01A9\n\x13\f\x13\x0E\x13\u01AC\v\x13" +
    "\x03\x14\x03\x14\x05\x14\u01B0\n\x14\x03\x14\x05\x14\u01B3\n\x14\x03\x14" +
    "\x05\x14\u01B6\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x05\x15\u01BC\n\x15" +
    "\x03\x15\x03\x15\x05\x15\u01C0\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03" +
    "\x16\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u01CB\n\x17\x07\x17\u01CD" +
    "\n\x17\f\x17\x0E\x17\u01D0\v\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17" +
    "\u01D6\n\x17\x07\x17\u01D8\n\x17\f\x17\x0E\x17\u01DB\v\x17\x05\x17\u01DD" +
    "\n\x17\x03\x18\x03\x18\x03\x19\x03\x19\x07\x19\u01E3\n\x19\f\x19\x0E\x19" +
    "\u01E6\v\x19\x03\x19\x03\x19\x07\x19\u01EA\n\x19\f\x19\x0E\x19\u01ED\v" +
    "\x19\x05\x19\u01EF\n\x19\x03\x1A\x05\x1A\u01F2\n\x1A\x03\x1A\x06\x1A\u01F5" +
    "\n\x1A\r\x1A\x0E\x1A\u01F6\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u01FC\n\x1A" +
    "\f\x1A\x0E\x1A\u01FF\v\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
    "\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u020A\n\x1B\x03\x1C\x03\x1C\x05\x1C" +
    "\u020E\n\x1C\x03\x1D\x03\x1D\x03\x1D\x06\x1D\u0213\n\x1D\r\x1D\x0E\x1D" +
    "\u0214\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u021B\n\x1E\x03\x1E\x03" +
    "\x1E\x03\x1F\x03\x1F\x03 \x06 \u0222\n \r \x0E \u0223\x03!\x03!\x07!\u0228" +
    "\n!\f!\x0E!\u022B\v!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x07\"\u0233\n\"" +
    "\f\"\x0E\"\u0236\v\"\x05\"\u0238\n\"\x03#\x03#\x03$\x03$\x03$\x03$\x03" +
    "$\x03$\x05$\u0242\n$\x03$\x03$\x05$\u0246\n$\x03$\x03$\x05$\u024A\n$\x03" +
    "$\x03$\x03$\x05$\u024F\n$\x03$\x03$\x05$\u0253\n$\x03$\x07$\u0256\n$\f" +
    "$\x0E$\u0259\v$\x03%\x03%\x03%\x03&\x03&\x05&\u0260\n&\x03&\x03&\x05&" +
    "\u0264\n&\x03&\x07&\u0267\n&\f&\x0E&\u026A\v&\x03&\x03&\x03\'\x03\'\x05" +
    "\'\u0270\n\'\x03\'\x05\'\u0273\n\'\x03\'\x05\'\u0276\n\'\x03\'\x03\'\x03" +
    "(\x03(\x05(\u027C\n(\x03(\x03(\x05(\u0280\n(\x03(\x03(\x03)\x03)\x03*" +
    "\x03*\x05*\u0288\n*\x03*\x03*\x05*\u028C\n*\x03*\x03*\x03+\x03+\x03+\x02" +
    "\x02\x05\x14$F,\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
    "\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
    "$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
    "@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02\x02\b\x03\x02" +
    "\n\v\x03\x02\x17\x18\x05\x02\t\f\x11\x11\x13\x13\x03\x02\x10\x11\x03\x02" +
    "\x0E\x0F\x03\x02\x03\b\u02E9\x02]\x03\x02\x02\x02\x04b\x03\x02\x02\x02" +
    "\x06g\x03\x02\x02\x02\bi\x03\x02\x02\x02\n\xE6\x03\x02\x02\x02\f\xE8\x03" +
    "\x02\x02\x02\x0E\xEE\x03\x02\x02\x02\x10\xF0\x03\x02\x02\x02\x12\u0109" +
    "\x03\x02\x02\x02\x14\u010F\x03\x02\x02\x02\x16\u0120\x03\x02\x02\x02\x18" +
    "\u012C\x03\x02\x02\x02\x1A\u0142\x03\x02\x02\x02\x1C\u0144\x03\x02\x02" +
    "\x02\x1E\u016A\x03\x02\x02\x02 \u016C\x03\x02\x02\x02\"\u0177\x03\x02" +
    "\x02\x02$\u01A0\x03\x02\x02\x02&\u01AD\x03\x02\x02\x02(\u01B9\x03\x02" +
    "\x02\x02*\u01C3\x03\x02\x02\x02,\u01DC\x03\x02\x02\x02.\u01DE\x03\x02" +
    "\x02\x020\u01EE\x03\x02\x02\x022\u01F1\x03\x02\x02\x024\u0209\x03\x02" +
    "\x02\x026\u020D\x03\x02\x02\x028\u0212\x03\x02\x02\x02:\u0216\x03\x02" +
    "\x02\x02<\u021E\x03\x02\x02\x02>\u0221\x03\x02\x02\x02@\u0225\x03\x02" +
    "\x02\x02B\u0237\x03\x02\x02\x02D\u0239\x03\x02\x02\x02F\u0241\x03\x02" +
    "\x02\x02H\u025A\x03\x02\x02\x02J\u025D\x03\x02\x02\x02L\u026D\x03\x02" +
    "\x02\x02N\u0279\x03\x02\x02\x02P\u0283\x03\x02\x02\x02R\u0285\x03\x02" +
    "\x02\x02T\u028F\x03\x02\x02\x02V^\x07\x02\x02\x03WY\x05\x04\x03\x02XZ" +
    "\x07\n\x02\x02YX\x03\x02\x02\x02YZ\x03\x02\x02\x02Z[\x03\x02\x02\x02[" +
    "\\\x07\x02\x02\x03\\^\x03\x02\x02\x02]V\x03\x02\x02\x02]W\x03\x02\x02" +
    "\x02^\x03\x03\x02\x02\x02_a\x05\x06\x04\x02`_\x03\x02\x02\x02ad\x03\x02" +
    "\x02\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02ce\x03\x02\x02\x02db\x03\x02" +
    "\x02\x02ef\x05\b\x05\x02f\x05\x03\x02\x02\x02gh\t\x02\x02\x02h\x07\x03" +
    "\x02\x02\x02in\x05\n\x06\x02jk\x07\n\x02\x02km\x05\n\x06\x02lj\x03\x02" +
    "\x02\x02mp\x03\x02\x02\x02nl\x03\x02\x02\x02no\x03\x02\x02\x02o\t\x03" +
    "\x02\x02\x02pn\x03\x02\x02\x02q\xE7\x05\f\x07\x02rs\x05\f\x07\x02st\x07" +
    "\v\x02\x02tu\x05\x0E\b\x02u\xE7\x03\x02\x02\x02vw\x05\f\x07\x02wx\x07" +
    "\v\x02\x02xy\x07\x0F\x02\x02yz\x07\v\x02\x02z{\x05.\x18\x02{\xE7\x03\x02" +
    "\x02\x02|}\x05\f\x07\x02}~\x07\v\x02\x02~\x80\x05\x0E\b\x02\x7F\x81\x07" +
    "\v\x02\x02\x80\x7F\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x82\x03" +
    "\x02\x02\x02\x82\x84\x07\x15\x02\x02\x83\x85\x07\v\x02\x02\x84\x83\x03" +
    "\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x87\x05" +
    "F$\x02\x87\xE7\x03\x02\x02\x02\x88\x89\x05\f\x07\x02\x89\x8A\x07\v\x02" +
    "\x02\x8A\x8B\x05\x0E\b\x02\x8B\x8C\x07\v\x02\x02\x8C\x8D\x07\x0F\x02\x02" +
    "\x8D\x8E\x07\v\x02\x02\x8E\x8F\x05.\x18\x02\x8F\xE7\x03\x02\x02\x02\x90" +
    "\x91\x05\f\x07\x02\x91\x92\x07\v\x02\x02\x92\x93\x05\x0E\b\x02\x93\x94" +
    "\x07\v\x02\x02\x94\x96\x07\x15\x02\x02\x95\x97\x07\v\x02\x02\x96\x95\x03" +
    "\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x99\x05" +
    "F$\x02\x99\x9A\x07\v\x02\x02\x9A\x9B\x07\x0F\x02\x02\x9B\x9C\x07\v\x02" +
    "\x02\x9C\x9D\x05.\x18\x02\x9D\xE7\x03\x02\x02\x02\x9E\x9F\x05\f\x07\x02" +
    "\x9F\xA0\x07\v\x02\x02\xA0\xA2\x05\x0E\b\x02\xA1\xA3\x07\v\x02\x02\xA2" +
    "\xA1\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4" +
    "\xA6\x07\x12\x02\x02\xA5\xA7\x07\v\x02\x02\xA6\xA5\x03\x02\x02\x02\xA6" +
    "\xA7\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xA9\x05\x14\v\x02\xA9" +
    "\xE7\x03\x02\x02\x02\xAA\xAB\x05\f\x07\x02\xAB\xAC\x07\v\x02\x02\xAC\xAE" +
    "\x05\x0E\b\x02\xAD\xAF\x07\v\x02\x02\xAE\xAD\x03\x02\x02\x02\xAE\xAF\x03" +
    "\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB2\x07\x12\x02\x02\xB1\xB3\x07" +
    "\v\x02\x02\xB2\xB1\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB4\x03" +
    "\x02\x02\x02\xB4\xB6\x05\x14\v\x02\xB5\xB7\x07\v\x02\x02\xB6\xB5\x03\x02" +
    "\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xBA\x07\x15" +
    "\x02\x02\xB9\xBB\x07\v\x02\x02\xBA\xB9\x03\x02\x02\x02\xBA\xBB\x03\x02" +
    "\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x05F$\x02\xBD\xE7\x03\x02\x02" +
    "\x02\xBE\xBF\x05\f\x07\x02\xBF\xC0\x07\v\x02\x02\xC0\xC2\x05\x0E\b\x02" +
    "\xC1\xC3\x07\v\x02\x02\xC2\xC1\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02" +
    "\xC3\xC4\x03\x02\x02\x02\xC4\xC6\x07\x12\x02\x02\xC5\xC7\x07\v\x02\x02" +
    "\xC6\xC5\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02" +
    "\xC8\xC9\x05\x14\v\x02\xC9\xCA\x07\v\x02\x02\xCA\xCB\x07\x0F\x02\x02\xCB" +
    "\xCC\x07\v\x02\x02\xCC\xCD\x05.\x18\x02\xCD\xE7\x03\x02\x02\x02\xCE\xCF" +
    "\x05\f\x07\x02\xCF\xD0\x07\v\x02\x02\xD0\xD2\x05\x0E\b\x02\xD1\xD3\x07" +
    "\v\x02\x02\xD2\xD1\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD4\x03" +
    "\x02\x02\x02\xD4\xD6\x07\x12\x02\x02\xD5\xD7\x07\v\x02\x02\xD6\xD5\x03" +
    "\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xDA\x05" +
    "\x14\v\x02\xD9\xDB\x07\v\x02\x02\xDA\xD9\x03\x02\x02\x02\xDA\xDB\x03\x02" +
    "\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDE\x07\x15\x02\x02\xDD\xDF\x07\v" +
    "\x02\x02\xDE\xDD\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x03\x02" +
    "\x02\x02\xE0\xE1\x05F$\x02\xE1\xE2\x07\v\x02\x02\xE2\xE3\x07\x0F\x02\x02" +
    "\xE3\xE4\x07\v\x02\x02\xE4\xE5\x05.\x18\x02\xE5\xE7\x03\x02\x02\x02\xE6" +
    "q\x03\x02\x02\x02\xE6r\x03\x02\x02\x02\xE6v\x03\x02\x02\x02\xE6|\x03\x02" +
    "\x02\x02\xE6\x88\x03\x02\x02\x02\xE6\x90\x03\x02\x02\x02\xE6\x9E\x03\x02" +
    "\x02\x02\xE6\xAA\x03\x02\x02\x02\xE6\xBE\x03\x02\x02\x02\xE6\xCE\x03\x02" +
    "\x02\x02\xE7\v\x03\x02\x02\x02\xE8\xE9\x07\r\x02\x02\xE9\xEA\x05T+\x02" +
    "\xEA\r\x03\x02\x02\x02\xEB\xEF\x05\x12\n\x02\xEC\xEF\x05\x10\t\x02\xED" +
    "\xEF\x05T+\x02\xEE\xEB\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEE\xED" +
    "\x03\x02\x02\x02\xEF\x0F\x03\x02\x02\x02\xF0\xF1\x05T+\x02\xF1\xF2\x07" +
    "\x16\x02\x02\xF2\x11\x03\x02\x02\x02\xF3\xFB\x05\x10\t\x02\xF4\xF7\x07" +
    "\x13\x02\x02\xF5\xF8\x05\x10\t\x02\xF6\xF8\x05T+\x02\xF7\xF5\x03\x02\x02" +
    "\x02\xF7\xF6\x03\x02\x02\x02\xF8\xFA\x03\x02\x02\x02\xF9\xF4\x03\x02\x02" +
    "\x02\xFA\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02" +
    "\x02\xFC\u010A\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\u0106\x05T" +
    "+\x02\xFF\u0102\x07\x13\x02\x02\u0100\u0103\x05\x10\t\x02\u0101\u0103" +
    "\x05T+\x02\u0102\u0100\x03\x02\x02\x02\u0102\u0101\x03\x02\x02\x02\u0103" +
    "\u0105\x03\x02\x02\x02\u0104\xFF\x03\x02\x02\x02\u0105\u0108\x03\x02\x02" +
    "\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u010A" +
    "\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0109\xF3\x03\x02\x02\x02" +
    "\u0109\xFE\x03\x02\x02\x02\u010A\x13\x03\x02\x02\x02\u010B\u010C\b\v\x01" +
    "\x02\u010C\u0110\x05\x1E\x10\x02\u010D\u0110\x05\x16\f\x02\u010E\u0110" +
    "\x05\x1A\x0E\x02\u010F\u010B\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02" +
    "\u010F\u010E\x03\x02\x02\x02\u0110\u011C\x03\x02\x02\x02\u0111\u0113\f" +
    "\x06\x02\x02\u0112\u0114\x07\v\x02\x02\u0113\u0112\x03\x02\x02\x02\u0113" +
    "\u0114\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0117\t\x03\x02" +
    "\x02\u0116\u0118\x07\v\x02\x02\u0117\u0116\x03\x02\x02\x02\u0117\u0118" +
    "\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011B\x05\x14\v\x07" +
    "\u011A\u0111\x03\x02\x02\x02\u011B\u011E\x03\x02\x02\x02\u011C\u011A\x03" +
    "\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\x15\x03\x02\x02\x02\u011E" +
    "\u011C\x03\x02\x02\x02\u011F\u0121\x05T+\x02\u0120\u011F\x03\x02\x02\x02" +
    "\u0120\u0121\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0124\x07" +
    "\"\x02\x02\u0123\u0125\x07\v\x02\x02\u0124\u0123\x03\x02\x02\x02\u0124" +
    "\u0125\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u0128\x05\x18" +
    "\r\x02\u0127\u0129\x07\v\x02\x02\u0128\u0127\x03\x02\x02\x02\u0128\u0129" +
    "\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012B\x07#\x02\x02" +
    "\u012B\x17\x03\x02\x02\x02\u012C\u012E\x05\x14\v\x02\u012D\u012F\x07\v" +
    "\x02\x02\u012E\u012D\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F" +
    "\u0135\x03\x02\x02\x02\u0130\u0132\x07\x14\x02\x02\u0131\u0133\x07\v\x02" +
    "\x02\u0132\u0131\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0134" +
    "\x03\x02\x02\x02\u0134\u0136\x05\x14\v\x02\u0135\u0130\x03\x02\x02\x02" +
    "\u0136\u0137\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0138\x03" +
    "\x02\x02\x02\u0138\x19\x03\x02\x02\x02\u0139\u0143\x05\x1C\x0F\x02\u013A" +
    "\u0143\x05&\x14\x02\u013B\u0143\x05$\x13\x02\u013C\u0143\x05,\x17\x02" +
    "\u013D\u0143\x05*\x16\x02\u013E\u0140\x05T+\x02\u013F\u0141\x07\x16\x02" +
    "\x02\u0140\u013F\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0143" +
    "\x03\x02\x02\x02\u0142\u0139\x03\x02\x02\x02\u0142\u013A\x03\x02\x02\x02" +
    "\u0142\u013B\x03\x02\x02\x02\u0142\u013C\x03\x02\x02\x02\u0142\u013D\x03" +
    "\x02\x02\x02\u0142\u013E\x03\x02\x02\x02\u0143\x1B\x03\x02\x02\x02\u0144" +
    "\u0146\x07\x1E\x02\x02\u0145\u0147\x07\v\x02\x02\u0146\u0145\x03\x02\x02" +
    "\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u014A" +
    "\x05\x14\v\x02\u0149\u014B\x07\v\x02\x02\u014A\u0149\x03\x02\x02\x02\u014A" +
    "\u014B\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014D\x07\x1F" +
    "\x02\x02\u014D\x1D\x03\x02\x02\x02\u014E\u0150\x07\x1E\x02\x02\u014F\u0151" +
    "\x07\v\x02\x02\u0150\u014F\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02" +
    "\u0151\u0152\x03\x02\x02\x02\u0152\u0154\x05 \x11\x02\u0153\u0155\x07" +
    "\v\x02\x02\u0154\u0153\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155" +
    "\u0156\x03\x02\x02\x02\u0156\u0158\x07\x1F\x02\x02\u0157\u0159\x07\v\x02" +
    "\x02\u0158\u0157\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015A" +
    "\x03\x02\x02\x02\u015A\u015C\x07\x19\x02\x02\u015B\u015D\x07\v\x02\x02" +
    "\u015C\u015B\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D\u015E\x03" +
    "\x02\x02\x02\u015E\u015F\x05\x14\v\x02\u015F\u016B\x03\x02\x02\x02\u0160" +
    "\u0162\x05\"\x12\x02\u0161\u0163\x07\v\x02\x02\u0162\u0161\x03\x02\x02" +
    "\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0166" +
    "\x07\x19\x02\x02\u0165\u0167\x07\v\x02\x02\u0166\u0165\x03\x02\x02\x02" +
    "\u0166\u0167\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168\u0169\x05" +
    "\x14\v\x02\u0169\u016B\x03\x02\x02\x02\u016A\u014E\x03\x02\x02\x02\u016A" +
    "\u0160\x03\x02\x02\x02\u016B\x1F\x03\x02\x02\x02\u016C\u0174\x05\"\x12" +
    "\x02\u016D\u016F\x07\x14\x02\x02\u016E\u0170\x07\v\x02\x02\u016F\u016E" +
    "\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02" +
    "\u0171\u0173\x05\"\x12\x02\u0172\u016D\x03\x02\x02\x02\u0173\u0176\x03" +
    "\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175" +
    "!\x03\x02\x02\x02\u0176\u0174\x03\x02\x02\x02\u0177\u0180\x05T+\x02\u0178" +
    "\u017A\x07\v\x02\x02\u0179\u0178\x03\x02\x02\x02\u0179\u017A\x03\x02\x02" +
    "\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017D\x07\x12\x02\x02\u017C\u017E" +
    "\x07\v\x02\x02\u017D\u017C\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02" +
    "\u017E\u017F\x03\x02\x02\x02\u017F\u0181\x05\x14\v\x02\u0180\u0179\x03" +
    "\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181#\x03\x02\x02\x02\u0182" +
    "\u0183\b\x13\x01\x02\u0183\u0185\x07 \x02\x02\u0184\u0186\x07\v\x02\x02" +
    "\u0185\u0184\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0188\x03" +
    "\x02\x02\x02\u0187\u0189\x05\x14\v\x02\u0188\u0187\x03\x02\x02\x02\u0188" +
    "\u0189\x03\x02\x02\x02\u0189\u0191\x03\x02\x02\x02\u018A\u018C\x07\x14" +
    "\x02\x02\u018B\u018D\x07\v\x02\x02\u018C\u018B\x03\x02\x02\x02\u018C\u018D" +
    "\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E\u0190\x05\x14\v\x02" +
    "\u018F\u018A\x03\x02\x02\x02\u0190\u0193\x03\x02\x02\x02\u0191\u018F\x03" +
    "\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0195\x03\x02\x02\x02\u0193" +
    "\u0191\x03\x02\x02\x02\u0194\u0196\x07\v\x02\x02\u0195\u0194\x03\x02\x02" +
    "\x02\u0195\u0196\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u01A1" +
    "\x07!\x02\x02\u0198\u0199\x05T+\x02\u0199\u019A\x07 \x02\x02\u019A\u019B" +
    "\x07!\x02\x02\u019B\u01A1\x03\x02\x02\x02\u019C\u019D\x05&\x14\x02\u019D" +
    "\u019E\x07 \x02\x02\u019E\u019F\x07!\x02\x02\u019F\u01A1\x03\x02\x02\x02" +
    "\u01A0\u0182\x03\x02\x02\x02\u01A0\u0198\x03\x02\x02\x02\u01A0\u019C\x03" +
    "\x02\x02\x02\u01A1\u01AA\x03\x02\x02\x02\u01A2\u01A3\f\x03\x02\x02\u01A3" +
    "\u01A5\x07 \x02\x02\u01A4\u01A6\x05\x14\v\x02\u01A5\u01A4\x03\x02\x02" +
    "\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A9" +
    "\x07!\x02\x02\u01A8\u01A2\x03\x02\x02\x02\u01A9\u01AC\x03\x02\x02\x02" +
    "\u01AA\u01A8\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB%\x03\x02" +
    "\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AD\u01AF\x07\x1C\x02\x02\u01AE" +
    "\u01B0\x07\v\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02" +
    "\x02\u01B0\u01B2\x03\x02\x02\x02\u01B1\u01B3\x05(\x15\x02\u01B2\u01B1" +
    "\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B5\x03\x02\x02\x02" +
    "\u01B4\u01B6\x07\v\x02\x02\u01B5\u01B4\x03\x02\x02\x02\u01B5\u01B6\x03" +
    "\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B8\x07\x1D\x02\x02\u01B8" +
    "\'\x03\x02\x02\x02\u01B9\u01BB\x05\x14\v\x02\u01BA\u01BC\x07\v\x02\x02" +
    "\u01BB\u01BA\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC\u01BD\x03" +
    "\x02\x02\x02\u01BD\u01BF\x07\x12\x02\x02\u01BE\u01C0\x07\v\x02\x02\u01BF" +
    "\u01BE\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C1\x03\x02" +
    "\x02\x02\u01C1\u01C2\x05\x14\v\x02\u01C2)\x03\x02\x02\x02\u01C3\u01C4" +
    "\x05T+\x02\u01C4\u01C5\x07\x16\x02\x02\u01C5+\x03\x02\x02\x02\u01C6\u01CE" +
    "\x05T+\x02\u01C7\u01CA\x07\x13\x02\x02\u01C8\u01CB\x05T+\x02\u01C9\u01CB" +
    "\x05*\x16\x02\u01CA\u01C8\x03\x02\x02\x02\u01CA\u01C9\x03\x02\x02\x02" +
    "\u01CB\u01CD\x03\x02\x02\x02\u01CC\u01C7\x03\x02\x02\x02\u01CD\u01D0\x03" +
    "\x02\x02\x02\u01CE\u01CC\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF" +
    "\u01DD\x03\x02\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D1\u01D9\x05*\x16" +
    "\x02\u01D2\u01D5\x07\x13\x02\x02\u01D3\u01D6\x05\x10\t\x02\u01D4\u01D6" +
    "\x05T+\x02\u01D5\u01D3\x03\x02\x02\x02\u01D5\u01D4\x03\x02\x02\x02\u01D6" +
    "\u01D8\x03\x02\x02\x02\u01D7\u01D2\x03\x02\x02\x02\u01D8\u01DB\x03\x02" +
    "\x02\x02\u01D9\u01D7\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA" +
    "\u01DD\x03\x02\x02\x02\u01DB\u01D9\x03\x02\x02\x02\u01DC\u01C6\x03\x02" +
    "\x02\x02\u01DC\u01D1\x03\x02\x02\x02\u01DD-\x03\x02\x02\x02\u01DE\u01DF" +
    "\x050\x19\x02\u01DF/\x03\x02\x02\x02\u01E0\u01E4\x052\x1A\x02\u01E1\u01E3" +
    "\x056\x1C\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3\u01E6\x03\x02\x02\x02" +
    "\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01EF\x03" +
    "\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E7\u01EB\x05:\x1E\x02\u01E8" +
    "\u01EA\x056\x1C\x02\u01E9\u01E8\x03\x02\x02\x02\u01EA\u01ED\x03\x02\x02" +
    "\x02\u01EB\u01E9\x03\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01EF" +
    "\x03\x02\x02\x02\u01ED\u01EB\x03\x02\x02\x02\u01EE\u01E0\x03\x02\x02\x02" +
    "\u01EE\u01E7\x03\x02\x02\x02\u01EF1\x03\x02\x02\x02\u01F0\u01F2\x07\v" +
    "\x02\x02\u01F1\u01F0\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2" +
    "\u01F4\x03\x02\x02\x02\u01F3\u01F5\x054\x1B\x02\u01F4\u01F3\x03\x02\x02" +
    "\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F6\u01F7" +
    "\x03\x02\x02\x02\u01F7\u01FD\x03\x02\x02\x02\u01F8\u01FC\x054\x1B\x02" +
    "\u01F9\u01FC\x07\v\x02\x02\u01FA\u01FC\x07\r\x02\x02\u01FB\u01F8\x03\x02" +
    "\x02\x02\u01FB\u01F9\x03\x02\x02\x02\u01FB\u01FA\x03\x02\x02\x02\u01FC" +
    "\u01FF\x03\x02\x02\x02\u01FD\u01FB\x03\x02\x02\x02\u01FD\u01FE\x03\x02" +
    "\x02\x02\u01FE3\x03\x02\x02\x02\u01FF\u01FD\x03\x02\x02\x02\u0200\u020A" +
    "\x07\f\x02\x02\u0201\u020A\x07\t\x02\x02\u0202\u020A\x07\x11\x02\x02\u0203" +
    "\u020A\x07\x1C\x02\x02\u0204\u020A\x07\x1D\x02\x02\u0205\u020A\x07\x12" +
    "\x02\x02\u0206\u020A\x07\x0F\x02\x02\u0207\u020A\x07\x13\x02\x02\u0208" +
    "\u020A\x05P)\x02\u0209\u0200\x03\x02\x02\x02\u0209\u0201\x03\x02\x02\x02" +
    "\u0209";
TomParser._serializedATNSegment1 = "\u0202\x03\x02\x02\x02\u0209\u0203\x03\x02\x02\x02\u0209\u0204\x03\x02" +
    "\x02\x02\u0209\u0205\x03\x02\x02\x02\u0209\u0206\x03\x02\x02\x02\u0209" +
    "\u0207\x03\x02\x02\x02\u0209\u0208\x03\x02\x02\x02\u020A5\x03\x02\x02" +
    "\x02\u020B\u020E\x05:\x1E\x02\u020C\u020E\x058\x1D\x02\u020D\u020B\x03" +
    "\x02\x02\x02\u020D\u020C\x03\x02\x02\x02\u020E7\x03\x02\x02\x02\u020F" +
    "\u0213\x054\x1B\x02\u0210\u0213\x07\v\x02\x02\u0211\u0213\x07\r\x02\x02" +
    "\u0212\u020F\x03\x02\x02\x02\u0212\u0210\x03\x02\x02\x02\u0212\u0211\x03" +
    "\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0212\x03\x02\x02\x02\u0214" +
    "\u0215\x03\x02\x02\x02\u02159\x03\x02\x02\x02\u0216\u0217\x07\x1B\x02" +
    "\x02\u0217\u0218\x05<\x1F\x02\u0218\u021A\x07\v\x02\x02\u0219\u021B\x05" +
    "> \x02\u021A\u0219\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u021C" +
    "\x03\x02\x02\x02\u021C\u021D\x07\x1D\x02\x02\u021D;\x03\x02\x02\x02\u021E" +
    "\u021F\x05T+\x02\u021F=\x03\x02\x02\x02\u0220\u0222\x05B\"\x02\u0221\u0220" +
    "\x03\x02\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223\u0221\x03\x02\x02\x02" +
    "\u0223\u0224\x03\x02\x02\x02\u0224?\x03\x02\x02\x02\u0225\u0229\x07\x1C" +
    "\x02\x02\u0226\u0228\x05B\"\x02\u0227\u0226\x03\x02\x02\x02\u0228\u022B" +
    "\x03\x02\x02\x02\u0229\u0227\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02" +
    "\u022A\u022C\x03\x02\x02\x02\u022B\u0229\x03\x02\x02\x02\u022C\u022D\x07" +
    "\x1D\x02\x02\u022DA\x03\x02\x02\x02\u022E\u0238\x05@!\x02\u022F\u0234" +
    "\x05D#\x02\u0230\u0231\x07\n\x02\x02\u0231\u0233\x05D#\x02\u0232\u0230" +
    "\x03\x02\x02\x02\u0233\u0236\x03\x02\x02\x02\u0234\u0232\x03\x02\x02\x02" +
    "\u0234\u0235\x03\x02\x02\x02\u0235\u0238\x03\x02\x02\x02\u0236\u0234\x03" +
    "\x02\x02\x02\u0237\u022E\x03\x02\x02\x02\u0237\u022F\x03\x02\x02\x02\u0238" +
    "C\x03\x02\x02\x02\u0239\u023A\t\x04\x02\x02\u023AE\x03\x02\x02\x02\u023B" +
    "\u023C\b$\x01\x02\u023C\u0242\x05H%\x02\u023D\u0242\x05J&\x02\u023E\u0242" +
    "\x05L\'\x02\u023F\u0242\x05P)\x02\u0240\u0242\x05R*\x02\u0241\u023B\x03" +
    "\x02\x02\x02\u0241\u023D\x03\x02\x02\x02\u0241\u023E\x03\x02\x02\x02\u0241" +
    "\u023F\x03\x02\x02\x02\u0241\u0240\x03\x02\x02\x02\u0242\u0257\x03\x02" +
    "\x02\x02\u0243\u0245\f\b\x02\x02\u0244\u0246\x07\v\x02\x02\u0245\u0244" +
    "\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02" +
    "\u0247\u0249\t\x05\x02\x02\u0248\u024A\x07\v\x02\x02\u0249\u0248\x03\x02" +
    "\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B" +
    "\u0256\x05F$\t\u024C\u024E\f\x07\x02\x02\u024D\u024F\x07\v\x02\x02\u024E" +
    "\u024D\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u0250\x03\x02" +
    "\x02\x02\u0250\u0252\t\x06\x02\x02\u0251\u0253\x07\v\x02\x02\u0252\u0251" +
    "\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02" +
    "\u0254\u0256\x05F$\b\u0255\u0243\x03\x02\x02\x02\u0255\u024C\x03\x02\x02" +
    "\x02\u0256\u0259\x03\x02\x02\x02\u0257\u0255\x03\x02\x02\x02\u0257\u0258" +
    "\x03\x02\x02\x02\u0258G\x03\x02\x02\x02\u0259\u0257\x03\x02\x02\x02\u025A" +
    "\u025B\t\x06\x02\x02\u025B\u025C\x05F$\x02\u025CI\x03\x02\x02\x02\u025D" +
    "\u025F\x07 \x02\x02\u025E\u0260\x05F$\x02\u025F\u025E\x03\x02\x02\x02" +
    "\u025F\u0260\x03\x02\x02\x02\u0260\u0268\x03\x02\x02\x02\u0261\u0263\x07" +
    "\x14\x02\x02\u0262\u0264\x07\v\x02\x02\u0263\u0262\x03\x02\x02\x02\u0263" +
    "\u0264\x03\x02\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265\u0267\x05F$\x02" +
    "\u0266\u0261\x03\x02\x02\x02\u0267\u026A\x03\x02\x02\x02\u0268\u0266\x03" +
    "\x02\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269\u026B\x03\x02\x02\x02\u026A" +
    "\u0268\x03\x02\x02\x02\u026B\u026C\x07!\x02\x02\u026CK\x03\x02\x02\x02" +
    "\u026D\u026F\x07\x1C\x02\x02\u026E\u0270\x07\v\x02\x02\u026F\u026E\x03" +
    "\x02\x02\x02\u026F\u0270\x03\x02\x02\x02\u0270\u0272\x03\x02\x02\x02\u0271" +
    "\u0273\x05N(\x02\u0272\u0271\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02" +
    "\u0273\u0275\x03\x02\x02\x02\u0274\u0276\x07\v\x02\x02\u0275\u0274\x03" +
    "\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277" +
    "\u0278\x07\x1D\x02\x02\u0278M\x03\x02\x02\x02\u0279\u027B\x05P)\x02\u027A" +
    "\u027C\x07\v\x02\x02\u027B\u027A\x03\x02\x02\x02\u027B\u027C\x03\x02\x02" +
    "\x02\u027C\u027D\x03\x02\x02\x02\u027D\u027F\x07\x12\x02\x02\u027E\u0280" +
    "\x07\v\x02\x02\u027F\u027E\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02" +
    "\u0280\u0281\x03\x02\x02\x02\u0281\u0282\x05P)\x02\u0282O\x03\x02\x02" +
    "\x02\u0283\u0284\t\x07\x02\x02\u0284Q\x03\x02\x02\x02\u0285\u0287\x07" +
    "\x1E\x02\x02\u0286\u0288\x07\v\x02\x02\u0287\u0286\x03\x02\x02\x02\u0287" +
    "\u0288\x03\x02\x02\x02\u0288\u0289\x03\x02\x02\x02\u0289\u028B\x05F$\x02" +
    "\u028A\u028C\x07\v\x02\x02\u028B\u028A\x03\x02\x02\x02\u028B\u028C\x03" +
    "\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D\u028E\x07\x1F\x02\x02\u028E" +
    "S\x03\x02\x02\x02\u028F\u0290\x07\t\x02\x02\u0290U\x03\x02\x02\x02iY]" +
    "bn\x80\x84\x96\xA2\xA6\xAE\xB2\xB6\xBA\xC2\xC6\xD2\xD6\xDA\xDE\xE6\xEE" +
    "\xF7\xFB\u0102\u0106\u0109\u010F\u0113\u0117\u011C\u0120\u0124\u0128\u012E" +
    "\u0132\u0137\u0140\u0142\u0146\u014A\u0150\u0154\u0158\u015C\u0162\u0166" +
    "\u016A\u016F\u0174\u0179\u017D\u0180\u0185\u0188\u018C\u0191\u0195\u01A0" +
    "\u01A5\u01AA\u01AF\u01B2\u01B5\u01BB\u01BF\u01CA\u01CE\u01D5\u01D9\u01DC" +
    "\u01E4\u01EB\u01EE\u01F1\u01F6\u01FB\u01FD\u0209\u020D\u0212\u0214\u021A" +
    "\u0223\u0229\u0234\u0237\u0241\u0245\u0249\u024E\u0252\u0255\u0257\u025F" +
    "\u0263\u0268\u026F\u0272\u0275\u027B\u027F\u0287\u028B";
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
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "documentation", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "body", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "whitespace", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "annotations", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "tag", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "tagName", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "tagID", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "optionalTagID", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "propertyTagID", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "type", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "tupleType", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "tupleTypeList", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "primaryType", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "parenthesizedType", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "lambdaType", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "formalParameterSequence", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "parameter", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "arrayType", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "objectType", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "objectPairType", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "optionalType", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "propertyType", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "description", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "descriptionLine", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "descriptionLineStart", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "descriptionText", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "descriptionLineElement", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "descriptionLineText", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "inlineTag", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "inlineTagName", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "inlineTagBody", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "braceExpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "braceBody", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "braceText", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "expression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "unaryExpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "arrayExpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "objectExpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "objectPair", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "literal", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "parenthesizedExpression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], TomParser.prototype, "identifier", null);
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
    MINUS() { return this.tryGetToken(TomParser.MINUS, 0); }
    description() {
        return this.tryGetRuleContext(0, DescriptionContext);
    }
    EQUAL() { return this.tryGetToken(TomParser.EQUAL, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
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
    optionalTagID(i) {
        if (i === undefined) {
            return this.getRuleContexts(OptionalTagIDContext);
        }
        else {
            return this.getRuleContext(i, OptionalTagIDContext);
        }
    }
    PERIOD(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.PERIOD);
        }
        else {
            return this.getToken(TomParser.PERIOD, i);
        }
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
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
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    QUESTION() { return this.tryGetToken(TomParser.QUESTION, 0); }
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
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    }
    PERIOD(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.PERIOD);
        }
        else {
            return this.getToken(TomParser.PERIOD, i);
        }
    }
    optionalType(i) {
        if (i === undefined) {
            return this.getRuleContexts(OptionalTypeContext);
        }
        else {
            return this.getRuleContext(i, OptionalTypeContext);
        }
    }
    optionalTagID(i) {
        if (i === undefined) {
            return this.getRuleContexts(OptionalTagIDContext);
        }
        else {
            return this.getRuleContext(i, OptionalTagIDContext);
        }
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