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
    // @RuleVersion(0)
    documentation() {
        let _localctx = new DocumentationContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, TomParser.RULE_documentation);
        let _la;
        try {
            this.state = 85;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.EOF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 78;
                        this.match(TomParser.EOF);
                    }
                    break;
                case TomParser.NEWLINE:
                case TomParser.SPACE:
                case TomParser.AT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 79;
                        this.body();
                        this.state = 81;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.NEWLINE) {
                            {
                                this.state = 80;
                                this.match(TomParser.NEWLINE);
                            }
                        }
                        this.state = 83;
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
    // @RuleVersion(0)
    body() {
        let _localctx = new BodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, TomParser.RULE_body);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 90;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TomParser.NEWLINE || _la === TomParser.SPACE) {
                    {
                        {
                            this.state = 87;
                            this.whitespace();
                        }
                    }
                    this.state = 92;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 93;
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
    // @RuleVersion(0)
    whitespace() {
        let _localctx = new WhitespaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, TomParser.RULE_whitespace);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 95;
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
    // @RuleVersion(0)
    annotations() {
        let _localctx = new AnnotationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, TomParser.RULE_annotations);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 97;
                this.tag();
                this.state = 102;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 98;
                                this.match(TomParser.NEWLINE);
                                this.state = 99;
                                this.tag();
                            }
                        }
                    }
                    this.state = 104;
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
    // @RuleVersion(0)
    tag() {
        let _localctx = new TagContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, TomParser.RULE_tag);
        let _la;
        try {
            this.state = 222;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 105;
                        this.tagName();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 106;
                        this.tagName();
                        this.state = 107;
                        this.match(TomParser.SPACE);
                        this.state = 108;
                        this.tagID();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 110;
                        this.tagName();
                        this.state = 111;
                        this.match(TomParser.SPACE);
                        this.state = 112;
                        this.descriptionDelimiter();
                        this.state = 113;
                        this.match(TomParser.SPACE);
                        this.state = 114;
                        this.tagBody();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 116;
                        this.tagName();
                        this.state = 117;
                        this.match(TomParser.SPACE);
                        this.state = 118;
                        this.tagID();
                        this.state = 120;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 119;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 122;
                        this.assignmentDelimiter();
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
                        this.expression(0);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 128;
                        this.tagName();
                        this.state = 129;
                        this.match(TomParser.SPACE);
                        this.state = 130;
                        this.tagID();
                        this.state = 131;
                        this.match(TomParser.SPACE);
                        this.state = 132;
                        this.descriptionDelimiter();
                        this.state = 133;
                        this.match(TomParser.SPACE);
                        this.state = 134;
                        this.tagBody();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 136;
                        this.tagName();
                        this.state = 137;
                        this.match(TomParser.SPACE);
                        this.state = 138;
                        this.tagID();
                        this.state = 139;
                        this.match(TomParser.SPACE);
                        this.state = 140;
                        this.assignmentDelimiter();
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
                        this.expression(0);
                        this.state = 145;
                        this.match(TomParser.SPACE);
                        this.state = 146;
                        this.descriptionDelimiter();
                        this.state = 147;
                        this.match(TomParser.SPACE);
                        this.state = 148;
                        this.tagBody();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 150;
                        this.tagName();
                        this.state = 151;
                        this.match(TomParser.SPACE);
                        this.state = 152;
                        this.tagID();
                        this.state = 154;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 153;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 156;
                        this.typeDelimiter();
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
                        this.type();
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
                        this.state = 166;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 165;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 168;
                        this.typeDelimiter();
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
                        this.type();
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
                        this.assignmentDelimiter();
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
                        this.expression(0);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 182;
                        this.tagName();
                        this.state = 183;
                        this.match(TomParser.SPACE);
                        this.state = 184;
                        this.tagID();
                        this.state = 186;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 185;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 188;
                        this.typeDelimiter();
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
                        this.type();
                        this.state = 193;
                        this.match(TomParser.SPACE);
                        this.state = 194;
                        this.descriptionDelimiter();
                        this.state = 195;
                        this.match(TomParser.SPACE);
                        this.state = 196;
                        this.tagBody();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 198;
                        this.tagName();
                        this.state = 199;
                        this.match(TomParser.SPACE);
                        this.state = 200;
                        this.tagID();
                        this.state = 202;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 201;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 204;
                        this.typeDelimiter();
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
                        this.type();
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
                        this.assignmentDelimiter();
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
                        this.expression(0);
                        this.state = 217;
                        this.match(TomParser.SPACE);
                        this.state = 218;
                        this.descriptionDelimiter();
                        this.state = 219;
                        this.match(TomParser.SPACE);
                        this.state = 220;
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
    // @RuleVersion(0)
    tagName() {
        let _localctx = new TagNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, TomParser.RULE_tagName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 224;
                this.match(TomParser.AT);
                this.state = 225;
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
    // @RuleVersion(0)
    tagID() {
        let _localctx = new TagIDContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, TomParser.RULE_tagID);
        try {
            this.state = 229;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 227;
                        this.optionalTagID();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 228;
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
    // @RuleVersion(0)
    optionalTagID() {
        let _localctx = new OptionalTagIDContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, TomParser.RULE_optionalTagID);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 231;
                this.identifier();
                this.state = 232;
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
    // @RuleVersion(0)
    tagBody() {
        let _localctx = new TagBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, TomParser.RULE_tagBody);
        try {
            this.state = 236;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 234;
                        this.description();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 235;
                        this.inlineTag();
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
    // @RuleVersion(0)
    assignmentDelimiter() {
        let _localctx = new AssignmentDelimiterContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, TomParser.RULE_assignmentDelimiter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
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
    // @RuleVersion(0)
    typeDelimiter() {
        let _localctx = new TypeDelimiterContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, TomParser.RULE_typeDelimiter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 240;
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
    // @RuleVersion(0)
    type() {
        let _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, TomParser.RULE_type);
        let _la;
        try {
            let _alt;
            this.state = 270;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 242;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 243;
                        this.identifier();
                        this.state = 254;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 245;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 244;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 247;
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
                                        this.state = 249;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 248;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 251;
                                        this.type();
                                    }
                                }
                            }
                            this.state = 256;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 257;
                        this.match(TomParser.PAREN_OPEN);
                        this.state = 259;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 258;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 261;
                        this.type();
                        this.state = 263;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === TomParser.SPACE) {
                            {
                                this.state = 262;
                                this.match(TomParser.SPACE);
                            }
                        }
                        this.state = 265;
                        this.match(TomParser.PAREN_CLOSE);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 267;
                        this.lambdaType();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 268;
                        this.arrayType();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 269;
                        this.objectType();
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
    // @RuleVersion(0)
    lambdaType() {
        let _localctx = new LambdaTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, TomParser.RULE_lambdaType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 272;
                this.match(TomParser.PAREN_OPEN);
                this.state = 274;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 273;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 276;
                this.formalParameterSequence();
                this.state = 278;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 277;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 280;
                this.match(TomParser.PAREN_CLOSE);
                this.state = 282;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 281;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 284;
                this.match(TomParser.ARROW);
                this.state = 286;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 285;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 288;
                this.type();
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
    // @RuleVersion(0)
    formalParameterSequence() {
        let _localctx = new FormalParameterSequenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, TomParser.RULE_formalParameterSequence);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 290;
                this.parameter();
                this.state = 298;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TomParser.COMMA) {
                    {
                        {
                            this.state = 291;
                            this.match(TomParser.COMMA);
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
                            this.parameter();
                        }
                    }
                    this.state = 300;
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
    // @RuleVersion(0)
    parameter() {
        let _localctx = new ParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, TomParser.RULE_parameter);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 301;
                this.identifier();
                this.state = 310;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                    case 1:
                        {
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
                            this.match(TomParser.COLON);
                            this.state = 307;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 306;
                                    this.match(TomParser.SPACE);
                                }
                            }
                            this.state = 309;
                            this.type();
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
    // @RuleVersion(0)
    arrayType() {
        let _localctx = new ArrayTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, TomParser.RULE_arrayType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 312;
                this.match(TomParser.BRACKET_OPEN);
                this.state = 314;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
                    case 1:
                        {
                            this.state = 313;
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 317;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.PAREN_OPEN) | (1 << TomParser.BRACKET_OPEN))) !== 0)) {
                    {
                        this.state = 316;
                        this.type();
                    }
                }
                this.state = 326;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TomParser.COMMA) {
                    {
                        {
                            this.state = 319;
                            this.match(TomParser.COMMA);
                            this.state = 321;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === TomParser.SPACE) {
                                {
                                    this.state = 320;
                                    this.match(TomParser.SPACE);
                                }
                            }
                            this.state = 323;
                            this.type();
                        }
                    }
                    this.state = 328;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 330;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 329;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 332;
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
    // @RuleVersion(0)
    objectType() {
        let _localctx = new ObjectTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, TomParser.RULE_objectType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 334;
                this.match(TomParser.BRACE_OPEN);
                this.state = 336;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                    case 1:
                        {
                            this.state = 335;
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 339;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.PAREN_OPEN) | (1 << TomParser.BRACKET_OPEN))) !== 0)) {
                    {
                        this.state = 338;
                        this.objectPairType();
                    }
                }
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
    // @RuleVersion(0)
    objectPairType() {
        let _localctx = new ObjectPairTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, TomParser.RULE_objectPairType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 346;
                this.type();
                this.state = 348;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 347;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 350;
                this.match(TomParser.COLON);
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
                this.type();
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
    // @RuleVersion(0)
    descriptionDelimiter() {
        let _localctx = new DescriptionDelimiterContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, TomParser.RULE_descriptionDelimiter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 356;
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
    // @RuleVersion(0)
    description() {
        let _localctx = new DescriptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, TomParser.RULE_description);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 358;
                this.descriptionLine();
                this.state = 362;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.MINUS) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.COLON) | (1 << TomParser.PERIOD) | (1 << TomParser.INLINE_TAG_START) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.BRACE_CLOSE))) !== 0)) {
                    {
                        {
                            this.state = 359;
                            this.descriptionLine();
                        }
                    }
                    this.state = 364;
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
    // @RuleVersion(0)
    descriptionLine() {
        let _localctx = new DescriptionLineContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, TomParser.RULE_descriptionLine);
        try {
            let _alt;
            this.state = 379;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
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
                        this.state = 365;
                        this.descriptionLineStart();
                        this.state = 369;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 366;
                                        this.descriptionLineElement();
                                    }
                                }
                            }
                            this.state = 371;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                        }
                    }
                    break;
                case TomParser.INLINE_TAG_START:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 372;
                        this.inlineTag();
                        this.state = 376;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 373;
                                        this.descriptionLineElement();
                                    }
                                }
                            }
                            this.state = 378;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
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
    // @RuleVersion(0)
    descriptionLineStart() {
        let _localctx = new DescriptionLineStartContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, TomParser.RULE_descriptionLineStart);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 382;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 381;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 385;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 384;
                                    this.descriptionText();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 387;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 394;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 392;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case TomParser.ID:
                                case TomParser.TEXT_CONTENT:
                                case TomParser.MINUS:
                                case TomParser.FORWARD_SLASH:
                                case TomParser.COLON:
                                case TomParser.PERIOD:
                                case TomParser.BRACE_OPEN:
                                case TomParser.BRACE_CLOSE:
                                    {
                                        this.state = 389;
                                        this.descriptionText();
                                    }
                                    break;
                                case TomParser.SPACE:
                                    {
                                        this.state = 390;
                                        this.match(TomParser.SPACE);
                                    }
                                    break;
                                case TomParser.AT:
                                    {
                                        this.state = 391;
                                        this.match(TomParser.AT);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 396;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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
    // @RuleVersion(0)
    descriptionText() {
        let _localctx = new DescriptionTextContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, TomParser.RULE_descriptionText);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 397;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.MINUS) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.COLON) | (1 << TomParser.PERIOD) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.BRACE_CLOSE))) !== 0))) {
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
    // @RuleVersion(0)
    descriptionLineElement() {
        let _localctx = new DescriptionLineElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, TomParser.RULE_descriptionLineElement);
        try {
            this.state = 401;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.INLINE_TAG_START:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 399;
                        this.inlineTag();
                    }
                    break;
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
                        this.state = 400;
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
    // @RuleVersion(0)
    descriptionLineText() {
        let _localctx = new DescriptionLineTextContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, TomParser.RULE_descriptionLineText);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 406;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 406;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case TomParser.ID:
                                    case TomParser.TEXT_CONTENT:
                                    case TomParser.MINUS:
                                    case TomParser.FORWARD_SLASH:
                                    case TomParser.COLON:
                                    case TomParser.PERIOD:
                                    case TomParser.BRACE_OPEN:
                                    case TomParser.BRACE_CLOSE:
                                        {
                                            this.state = 403;
                                            this.descriptionText();
                                        }
                                        break;
                                    case TomParser.SPACE:
                                        {
                                            this.state = 404;
                                            this.match(TomParser.SPACE);
                                        }
                                        break;
                                    case TomParser.AT:
                                        {
                                            this.state = 405;
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
                    this.state = 408;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
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
    // @RuleVersion(0)
    inlineTag() {
        let _localctx = new InlineTagContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, TomParser.RULE_inlineTag);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 410;
                this.match(TomParser.INLINE_TAG_START);
                this.state = 411;
                this.inlineTagID();
                this.state = 415;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 412;
                                this.match(TomParser.SPACE);
                            }
                        }
                    }
                    this.state = 417;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                }
                this.state = 419;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.NEWLINE) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.PERIOD) | (1 << TomParser.BRACE_OPEN))) !== 0)) {
                    {
                        this.state = 418;
                        this.inlineTagBody();
                    }
                }
                this.state = 421;
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
    // @RuleVersion(0)
    inlineTagID() {
        let _localctx = new InlineTagIDContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, TomParser.RULE_inlineTagID);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 423;
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
    // @RuleVersion(0)
    inlineTagBody() {
        let _localctx = new InlineTagBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, TomParser.RULE_inlineTagBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 426;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 425;
                            this.braceBody();
                        }
                    }
                    this.state = 428;
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
    // @RuleVersion(0)
    braceExpression() {
        let _localctx = new BraceExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, TomParser.RULE_braceExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 430;
                this.match(TomParser.BRACE_OPEN);
                this.state = 434;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.ID) | (1 << TomParser.NEWLINE) | (1 << TomParser.SPACE) | (1 << TomParser.TEXT_CONTENT) | (1 << TomParser.FORWARD_SLASH) | (1 << TomParser.PERIOD) | (1 << TomParser.BRACE_OPEN))) !== 0)) {
                    {
                        {
                            this.state = 431;
                            this.braceBody();
                        }
                    }
                    this.state = 436;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
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
    // @RuleVersion(0)
    braceBody() {
        let _localctx = new BraceBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, TomParser.RULE_braceBody);
        try {
            let _alt;
            this.state = 453;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case TomParser.BRACE_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 439;
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
                        this.state = 440;
                        this.braceText();
                        this.state = 450;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 444;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 441;
                                                        this.match(TomParser.NEWLINE);
                                                    }
                                                }
                                            }
                                            this.state = 446;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
                                        }
                                        this.state = 447;
                                        this.braceText();
                                    }
                                }
                            }
                            this.state = 452;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
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
    // @RuleVersion(0)
    braceText() {
        let _localctx = new BraceTextContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, TomParser.RULE_braceText);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 455;
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
    // @RuleVersion(0)
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 62;
        this.enterRecursionRule(_localctx, 62, TomParser.RULE_expression, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 462;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case TomParser.PLUS:
                    case TomParser.MINUS:
                    case TomParser.EXCLAMATION:
                        {
                            this.state = 458;
                            this.unaryExpression();
                        }
                        break;
                    case TomParser.BRACKET_OPEN:
                        {
                            this.state = 459;
                            this.arrayExpression();
                        }
                        break;
                    case TomParser.BRACE_OPEN:
                        {
                            this.state = 460;
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
                            this.state = 461;
                            this.literal();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 484;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 482;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_expression);
                                        this.state = 464;
                                        if (!(this.precpred(this._ctx, 5)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        this.state = 466;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 465;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 468;
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
                                        this.state = 470;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 469;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 472;
                                        this.expression(6);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, TomParser.RULE_expression);
                                        this.state = 473;
                                        if (!(this.precpred(this._ctx, 4)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        this.state = 475;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 474;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 477;
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
                                        this.state = 479;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === TomParser.SPACE) {
                                            {
                                                this.state = 478;
                                                this.match(TomParser.SPACE);
                                            }
                                        }
                                        this.state = 481;
                                        this.expression(5);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 486;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
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
    // @RuleVersion(0)
    unaryExpression() {
        let _localctx = new UnaryExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, TomParser.RULE_unaryExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 487;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.PLUS) | (1 << TomParser.MINUS) | (1 << TomParser.EXCLAMATION))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 488;
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
    // @RuleVersion(0)
    arrayExpression() {
        let _localctx = new ArrayExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, TomParser.RULE_arrayExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 490;
                this.match(TomParser.BRACKET_OPEN);
                this.state = 492;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral) | (1 << TomParser.PLUS) | (1 << TomParser.MINUS) | (1 << TomParser.EXCLAMATION) | (1 << TomParser.BRACE_OPEN) | (1 << TomParser.BRACKET_OPEN))) !== 0)) {
                    {
                        this.state = 491;
                        this.expression(0);
                    }
                }
                this.state = 501;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === TomParser.COMMA) {
                    {
                        {
                            this.state = 494;
                            this.match(TomParser.COMMA);
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
                            this.expression(0);
                        }
                    }
                    this.state = 503;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 504;
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
    // @RuleVersion(0)
    objectExpression() {
        let _localctx = new ObjectExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, TomParser.RULE_objectExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 506;
                this.match(TomParser.BRACE_OPEN);
                this.state = 508;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
                    case 1:
                        {
                            this.state = 507;
                            this.match(TomParser.SPACE);
                        }
                        break;
                }
                this.state = 511;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TomParser.IntegerLiteral) | (1 << TomParser.FloatingPointLiteral) | (1 << TomParser.BooleanLiteral) | (1 << TomParser.CharacterLiteral) | (1 << TomParser.StringLiteral) | (1 << TomParser.NullLiteral))) !== 0)) {
                    {
                        this.state = 510;
                        this.objectPair();
                    }
                }
                this.state = 514;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 513;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 516;
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
    // @RuleVersion(0)
    objectPair() {
        let _localctx = new ObjectPairContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, TomParser.RULE_objectPair);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 518;
                this.literal();
                this.state = 520;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 519;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 522;
                this.match(TomParser.COLON);
                this.state = 524;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === TomParser.SPACE) {
                    {
                        this.state = 523;
                        this.match(TomParser.SPACE);
                    }
                }
                this.state = 526;
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
    // @RuleVersion(0)
    number() {
        let _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, TomParser.RULE_number);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 528;
                _la = this._input.LA(1);
                if (!(_la === TomParser.IntegerLiteral || _la === TomParser.FloatingPointLiteral)) {
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
    // @RuleVersion(0)
    literal() {
        let _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, TomParser.RULE_literal);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 530;
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
    // @RuleVersion(0)
    identifier() {
        let _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, TomParser.RULE_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 532;
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
            case 31:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 5);
            case 1:
                return this.precpred(this._ctx, 4);
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
TomParser.RULE_lambdaType = 12;
TomParser.RULE_formalParameterSequence = 13;
TomParser.RULE_parameter = 14;
TomParser.RULE_arrayType = 15;
TomParser.RULE_objectType = 16;
TomParser.RULE_objectPairType = 17;
TomParser.RULE_descriptionDelimiter = 18;
TomParser.RULE_description = 19;
TomParser.RULE_descriptionLine = 20;
TomParser.RULE_descriptionLineStart = 21;
TomParser.RULE_descriptionText = 22;
TomParser.RULE_descriptionLineElement = 23;
TomParser.RULE_descriptionLineText = 24;
TomParser.RULE_inlineTag = 25;
TomParser.RULE_inlineTagID = 26;
TomParser.RULE_inlineTagBody = 27;
TomParser.RULE_braceExpression = 28;
TomParser.RULE_braceBody = 29;
TomParser.RULE_braceText = 30;
TomParser.RULE_expression = 31;
TomParser.RULE_unaryExpression = 32;
TomParser.RULE_arrayExpression = 33;
TomParser.RULE_objectExpression = 34;
TomParser.RULE_objectPair = 35;
TomParser.RULE_number = 36;
TomParser.RULE_literal = 37;
TomParser.RULE_identifier = 38;
TomParser.ruleNames = [
    "documentation", "body", "whitespace", "annotations", "tag", "tagName",
    "tagID", "optionalTagID", "tagBody", "assignmentDelimiter", "typeDelimiter",
    "type", "lambdaType", "formalParameterSequence", "parameter", "arrayType",
    "objectType", "objectPairType", "descriptionDelimiter", "description",
    "descriptionLine", "descriptionLineStart", "descriptionText", "descriptionLineElement",
    "descriptionLineText", "inlineTag", "inlineTagID", "inlineTagBody", "braceExpression",
    "braceBody", "braceText", "expression", "unaryExpression", "arrayExpression",
    "objectExpression", "objectPair", "number", "literal", "identifier"
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
TomParser._serializedATN = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03!\u0219\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x03\x02\x03\x02\x03\x02" +
    "\x05\x02T\n\x02\x03\x02\x03\x02\x05\x02X\n\x02\x03\x03\x07\x03[\n\x03" +
    "\f\x03\x0E\x03^\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05" +
    "\x03\x05\x07\x05g\n\x05\f\x05\x0E\x05j\v\x05\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x05\x06{\n\x06\x03\x06\x03\x06\x05\x06\x7F\n\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x91\n" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x05\x06\x9D\n\x06\x03\x06\x03\x06\x05\x06\xA1\n\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xA9\n\x06\x03\x06\x03" +
    "\x06\x05\x06\xAD\n\x06\x03\x06\x03\x06\x05\x06\xB1\n\x06\x03\x06\x03\x06" +
    "\x05\x06\xB5\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05" +
    "\x06\xBD\n\x06\x03\x06\x03\x06\x05\x06\xC1\n\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xCD\n" +
    "\x06\x03\x06\x03\x06\x05\x06\xD1\n\x06\x03\x06\x03\x06\x05\x06\xD5\n\x06" +
    "\x03\x06\x03\x06\x05\x06\xD9\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x05\x06\xE1\n\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x05" +
    "\b\xE8\n\b\x03\t\x03\t\x03\t\x03\n\x03\n\x05\n\xEF\n\n\x03\v\x03\v\x03" +
    "\f\x03\f\x03\r\x03\r\x03\r\x05\r\xF8\n\r\x03\r\x03\r\x05\r\xFC\n\r\x03" +
    "\r\x07\r\xFF\n\r\f\r\x0E\r\u0102\v\r\x03\r\x03\r\x05\r\u0106\n\r\x03\r" +
    "\x03\r\x05\r\u010A\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0111\n\r\x03" +
    "\x0E\x03\x0E\x05\x0E\u0115\n\x0E\x03\x0E\x03\x0E\x05\x0E\u0119\n\x0E\x03" +
    "\x0E\x03\x0E\x05\x0E\u011D\n\x0E\x03\x0E\x03\x0E\x05\x0E\u0121\n\x0E\x03" +
    "\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0128\n\x0F\x03\x0F\x07\x0F" +
    "\u012B\n\x0F\f\x0F\x0E\x0F\u012E\v\x0F\x03\x10\x03\x10\x05\x10\u0132\n" +
    "\x10\x03\x10\x03\x10\x05\x10\u0136\n\x10\x03\x10\x05\x10\u0139\n\x10\x03" +
    "\x11\x03\x11\x05\x11\u013D\n\x11\x03\x11\x05\x11\u0140\n\x11\x03\x11\x03" +
    "\x11\x05\x11\u0144\n\x11\x03\x11\x07\x11\u0147\n\x11\f\x11\x0E\x11\u014A" +
    "\v\x11\x03\x11\x05\x11\u014D\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x05" +
    "\x12\u0153\n\x12\x03\x12\x05\x12\u0156\n\x12\x03\x12\x05\x12\u0159\n\x12" +
    "\x03\x12\x03\x12\x03\x13\x03\x13\x05\x13\u015F\n\x13\x03\x13\x03\x13\x05" +
    "\x13\u0163\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x07\x15" +
    "\u016B\n\x15\f\x15\x0E\x15\u016E\v\x15\x03\x16\x03\x16\x07\x16\u0172\n" +
    "\x16\f\x16\x0E\x16\u0175\v\x16\x03\x16\x03\x16\x07\x16\u0179\n\x16\f\x16" +
    "\x0E\x16\u017C\v\x16\x05\x16\u017E\n\x16\x03\x17\x05\x17\u0181\n\x17\x03" +
    "\x17\x06\x17\u0184\n\x17\r\x17\x0E\x17\u0185\x03\x17\x03\x17\x03\x17\x07" +
    "\x17\u018B\n\x17\f\x17\x0E\x17\u018E\v\x17\x03\x18\x03\x18\x03\x19\x03" +
    "\x19\x05\x19\u0194\n\x19\x03\x1A\x03\x1A\x03\x1A\x06\x1A\u0199\n\x1A\r" +
    "\x1A\x0E\x1A\u019A\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u01A0\n\x1B\f\x1B\x0E" +
    "\x1B\u01A3\v\x1B\x03\x1B\x05\x1B\u01A6\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03" +
    "\x1C\x03\x1D\x06\x1D\u01AD\n\x1D\r\x1D\x0E\x1D\u01AE\x03\x1E\x03\x1E\x07" +
    "\x1E\u01B3\n\x1E\f\x1E\x0E\x1E\u01B6\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03" +
    "\x1F\x03\x1F\x07\x1F\u01BD\n\x1F\f\x1F\x0E\x1F\u01C0\v\x1F\x03\x1F\x07" +
    "\x1F\u01C3\n\x1F\f\x1F\x0E\x1F\u01C6\v\x1F\x05\x1F\u01C8\n\x1F\x03 \x03" +
    " \x03!\x03!\x03!\x03!\x03!\x05!\u01D1\n!\x03!\x03!\x05!\u01D5\n!\x03!" +
    "\x03!\x05!\u01D9\n!\x03!\x03!\x03!\x05!\u01DE\n!\x03!\x03!\x05!\u01E2" +
    "\n!\x03!\x07!\u01E5\n!\f!\x0E!\u01E8\v!\x03\"\x03\"\x03\"\x03#\x03#\x05" +
    "#\u01EF\n#\x03#\x03#\x05#\u01F3\n#\x03#\x07#\u01F6\n#\f#\x0E#\u01F9\v" +
    "#\x03#\x03#\x03$\x03$\x05$\u01FF\n$\x03$\x05$\u0202\n$\x03$\x05$\u0205" +
    "\n$\x03$\x03$\x03%\x03%\x05%\u020B\n%\x03%\x03%\x05%\u020F\n%\x03%\x03" +
    "%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03(\x02\x02\x03@)\x02\x02\x04\x02\x06" +
    "\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
    "\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
    "2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
    "N\x02\x02\v\x03\x02\n\v\x03\x02\x17\x18\x07\x02\t\t\f\f\x0F\x0F\x11\x13" +
    "\x1C\x1D\x05\x02\t\f\x11\x11\x13\x13\x03\x02\x10\x11\x03\x02\x0E\x0F\x04" +
    "\x02\x0E\x0F\x1A\x1A\x03\x02\x03\x04\x03\x02\x03\b\u0251\x02W\x03\x02" +
    "\x02\x02\x04\\\x03\x02\x02\x02\x06a\x03\x02\x02\x02\bc\x03\x02\x02\x02" +
    "\n\xE0\x03\x02\x02\x02\f\xE2\x03\x02\x02\x02\x0E\xE7\x03\x02\x02\x02\x10" +
    "\xE9\x03\x02\x02\x02\x12\xEE\x03\x02\x02\x02\x14\xF0\x03\x02\x02\x02\x16" +
    "\xF2\x03\x02\x02\x02\x18\u0110\x03\x02\x02\x02\x1A\u0112\x03\x02\x02\x02" +
    "\x1C\u0124\x03\x02\x02\x02\x1E\u012F\x03\x02\x02\x02 \u013A\x03\x02\x02" +
    "\x02\"\u0150\x03\x02\x02\x02$\u015C\x03\x02\x02\x02&\u0166\x03\x02\x02" +
    "\x02(\u0168\x03\x02\x02\x02*\u017D\x03\x02\x02\x02,\u0180\x03\x02\x02" +
    "\x02.\u018F\x03\x02\x02\x020\u0193\x03\x02\x02\x022\u0198\x03\x02\x02" +
    "\x024\u019C\x03\x02\x02\x026\u01A9\x03\x02\x02\x028\u01AC\x03\x02\x02" +
    "\x02:\u01B0\x03\x02\x02\x02<\u01C7\x03\x02\x02\x02>\u01C9\x03\x02\x02" +
    "\x02@\u01D0\x03\x02\x02\x02B\u01E9\x03\x02\x02\x02D\u01EC\x03\x02\x02" +
    "\x02F\u01FC\x03\x02\x02\x02H\u0208\x03\x02\x02\x02J\u0212\x03\x02\x02" +
    "\x02L\u0214\x03\x02\x02\x02N\u0216\x03\x02\x02\x02PX\x07\x02\x02\x03Q" +
    "S\x05\x04\x03\x02RT\x07\n\x02\x02SR\x03\x02\x02\x02ST\x03\x02\x02\x02" +
    "TU\x03\x02\x02\x02UV\x07\x02\x02\x03VX\x03\x02\x02\x02WP\x03\x02\x02\x02" +
    "WQ\x03\x02\x02\x02X\x03\x03\x02\x02\x02Y[\x05\x06\x04\x02ZY\x03\x02\x02" +
    "\x02[^\x03\x02\x02\x02\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]_\x03\x02" +
    "\x02\x02^\\\x03\x02\x02\x02_`\x05\b\x05\x02`\x05\x03\x02\x02\x02ab\t\x02" +
    "\x02\x02b\x07\x03\x02\x02\x02ch\x05\n\x06\x02de\x07\n\x02\x02eg\x05\n" +
    "\x06\x02fd\x03\x02\x02\x02gj\x03\x02\x02\x02hf\x03\x02\x02\x02hi\x03\x02" +
    "\x02\x02i\t\x03\x02\x02\x02jh\x03\x02\x02\x02k\xE1\x05\f\x07\x02lm\x05" +
    "\f\x07\x02mn\x07\v\x02\x02no\x05\x0E\b\x02o\xE1\x03\x02\x02\x02pq\x05" +
    "\f\x07\x02qr\x07\v\x02\x02rs\x05&\x14\x02st\x07\v\x02\x02tu\x05\x12\n" +
    "\x02u\xE1\x03\x02\x02\x02vw\x05\f\x07\x02wx\x07\v\x02\x02xz\x05\x0E\b" +
    "\x02y{\x07\v\x02\x02zy\x03\x02\x02\x02z{\x03\x02\x02\x02{|\x03\x02\x02" +
    "\x02|~\x05\x14\v\x02}\x7F\x07\v\x02\x02~}\x03\x02\x02\x02~\x7F\x03\x02" +
    "\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x81\x05@!\x02\x81\xE1\x03\x02\x02" +
    "\x02\x82\x83\x05\f\x07\x02\x83\x84\x07\v\x02\x02\x84\x85\x05\x0E\b\x02" +
    "\x85\x86\x07\v\x02\x02\x86\x87\x05&\x14\x02\x87\x88\x07\v\x02\x02\x88" +
    "\x89\x05\x12\n\x02\x89\xE1\x03\x02\x02\x02\x8A\x8B\x05\f\x07\x02\x8B\x8C" +
    "\x07\v\x02\x02\x8C\x8D\x05\x0E\b\x02\x8D\x8E\x07\v\x02\x02\x8E\x90\x05" +
    "\x14\v\x02\x8F\x91\x07\v\x02\x02\x90\x8F\x03\x02\x02\x02\x90\x91\x03\x02" +
    "\x02\x02\x91\x92\x03\x02\x02\x02\x92\x93\x05@!\x02\x93\x94\x07\v\x02\x02" +
    "\x94\x95\x05&\x14\x02\x95\x96\x07\v\x02\x02\x96\x97\x05\x12\n\x02\x97" +
    "\xE1\x03\x02\x02\x02\x98\x99\x05\f\x07\x02\x99\x9A\x07\v\x02\x02\x9A\x9C" +
    "\x05\x0E\b\x02\x9B\x9D\x07\v\x02\x02\x9C\x9B\x03\x02\x02\x02\x9C\x9D\x03" +
    "\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\xA0\x05\x16\f\x02\x9F\xA1\x07" +
    "\v\x02\x02\xA0\x9F\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2\x03" +
    "\x02\x02\x02\xA2\xA3\x05\x18\r\x02\xA3\xE1\x03\x02\x02\x02\xA4\xA5\x05" +
    "\f\x07\x02\xA5\xA6\x07\v\x02\x02\xA6\xA8\x05\x0E\b\x02\xA7\xA9\x07\v\x02" +
    "\x02\xA8\xA7\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAA\x03\x02\x02" +
    "\x02\xAA\xAC\x05\x16\f\x02\xAB\xAD\x07\v\x02\x02\xAC\xAB\x03\x02\x02\x02" +
    "\xAC\xAD\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB0\x05\x18\r\x02" +
    "\xAF\xB1\x07\v\x02\x02\xB0\xAF\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02" +
    "\xB1\xB2\x03\x02\x02\x02\xB2\xB4\x05\x14\v\x02\xB3\xB5\x07\v\x02\x02\xB4" +
    "\xB3\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6" +
    "\xB7\x05@!\x02\xB7\xE1\x03\x02\x02\x02\xB8\xB9\x05\f\x07\x02\xB9\xBA\x07" +
    "\v\x02\x02\xBA\xBC\x05\x0E\b\x02\xBB\xBD\x07\v\x02\x02\xBC\xBB\x03\x02" +
    "\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC0\x05\x16" +
    "\f\x02\xBF\xC1\x07\v\x02\x02\xC0\xBF\x03\x02\x02\x02\xC0\xC1\x03\x02\x02" +
    "\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC3\x05\x18\r\x02\xC3\xC4\x07\v\x02\x02" +
    "\xC4\xC5\x05&\x14\x02\xC5\xC6\x07\v\x02\x02\xC6\xC7\x05\x12\n\x02\xC7" +
    "\xE1\x03\x02\x02\x02\xC8\xC9\x05\f\x07\x02\xC9\xCA\x07\v\x02\x02\xCA\xCC" +
    "\x05\x0E\b\x02\xCB\xCD\x07\v\x02\x02\xCC\xCB\x03\x02\x02\x02\xCC\xCD\x03" +
    "\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xD0\x05\x16\f\x02\xCF\xD1\x07" +
    "\v\x02\x02\xD0\xCF\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2\x03" +
    "\x02\x02\x02\xD2\xD4\x05\x18\r\x02\xD3\xD5\x07\v\x02\x02\xD4\xD3\x03\x02" +
    "\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD8\x05\x14" +
    "\v\x02\xD7\xD9\x07\v\x02\x02\xD8\xD7\x03\x02\x02\x02\xD8\xD9\x03\x02\x02" +
    "\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDB\x05@!\x02\xDB\xDC\x07\v\x02\x02\xDC" +
    "\xDD\x05&\x14\x02\xDD\xDE\x07\v\x02\x02\xDE\xDF\x05\x12\n\x02\xDF\xE1" +
    "\x03\x02\x02\x02\xE0k\x03\x02\x02\x02\xE0l\x03\x02\x02\x02\xE0p\x03\x02" +
    "\x02\x02\xE0v\x03\x02\x02\x02\xE0\x82\x03\x02\x02\x02\xE0\x8A\x03\x02" +
    "\x02\x02\xE0\x98\x03\x02\x02\x02\xE0\xA4\x03\x02\x02\x02\xE0\xB8\x03\x02" +
    "\x02\x02\xE0\xC8\x03\x02\x02\x02\xE1\v\x03\x02\x02\x02\xE2\xE3\x07\r\x02" +
    "\x02\xE3\xE4\x05N(\x02\xE4\r\x03\x02\x02\x02\xE5\xE8\x05\x10\t\x02\xE6" +
    "\xE8\x05N(\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE6\x03\x02\x02\x02\xE8\x0F" +
    "\x03\x02\x02\x02\xE9\xEA\x05N(\x02\xEA\xEB\x07\x16\x02\x02\xEB\x11\x03" +
    "\x02\x02\x02\xEC\xEF\x05(\x15\x02\xED\xEF\x054\x1B\x02\xEE\xEC\x03\x02" +
    "\x02\x02\xEE\xED\x03\x02\x02\x02\xEF\x13\x03\x02\x02\x02\xF0\xF1\x07\x15" +
    "\x02\x02\xF1\x15\x03\x02\x02\x02\xF2\xF3\x07\x12\x02\x02\xF3\x17\x03\x02" +
    "\x02\x02\xF4\u0111\x05N(\x02\xF5\u0100\x05N(\x02\xF6\xF8\x07\v\x02\x02" +
    "\xF7\xF6\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02" +
    "\xF9\xFB\t\x03\x02\x02\xFA\xFC\x07\v\x02\x02\xFB\xFA\x03\x02\x02\x02\xFB" +
    "\xFC\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFF\x05\x18\r\x02\xFE" +
    "\xF7\x03\x02\x02\x02\xFF\u0102\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02" +
    "\u0100\u0101\x03\x02\x02\x02\u0101\u0111\x03\x02\x02\x02\u0102\u0100\x03" +
    "\x02\x02\x02\u0103\u0105\x07\x1E\x02\x02\u0104\u0106\x07\v\x02\x02\u0105" +
    "\u0104\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106\u0107\x03\x02" +
    "\x02\x02\u0107\u0109\x05\x18\r\x02\u0108\u010A\x07\v\x02\x02\u0109\u0108" +
    "\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02" +
    "\u010B\u010C\x07\x1F\x02\x02\u010C\u0111\x03\x02\x02\x02\u010D\u0111\x05" +
    "\x1A\x0E\x02\u010E\u0111\x05 \x11\x02\u010F\u0111\x05\"\x12\x02\u0110" +
    "\xF4\x03\x02\x02\x02\u0110\xF5\x03\x02\x02\x02\u0110\u0103\x03\x02\x02" +
    "\x02\u0110\u010D\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u010F" +
    "\x03\x02\x02\x02\u0111\x19\x03\x02\x02\x02\u0112\u0114\x07\x1E\x02\x02" +
    "\u0113\u0115\x07\v\x02\x02\u0114\u0113\x03\x02\x02\x02\u0114\u0115\x03" +
    "\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0118\x05\x1C\x0F\x02\u0117" +
    "\u0119\x07\v\x02\x02\u0118\u0117\x03\x02\x02\x02\u0118\u0119\x03\x02\x02" +
    "\x02\u0119\u011A\x03\x02\x02\x02\u011A\u011C\x07\x1F\x02\x02\u011B\u011D" +
    "\x07\v\x02\x02\u011C\u011B\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02" +
    "\u011D\u011E\x03\x02\x02\x02\u011E\u0120\x07\x19\x02\x02\u011F\u0121\x07" +
    "\v\x02\x02\u0120\u011F\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121" +
    "\u0122\x03\x02\x02\x02\u0122\u0123\x05\x18\r\x02\u0123\x1B\x03\x02\x02" +
    "\x02\u0124\u012C\x05\x1E\x10\x02\u0125\u0127\x07\x14\x02\x02\u0126\u0128" +
    "\x07\v\x02\x02\u0127\u0126\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02" +
    "\u0128\u0129\x03\x02\x02\x02\u0129\u012B\x05\x1E\x10\x02\u012A\u0125\x03" +
    "\x02\x02\x02\u012B\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012C" +
    "\u012D\x03\x02\x02\x02\u012D\x1D\x03\x02\x02\x02\u012E\u012C\x03\x02\x02" +
    "\x02\u012F\u0138\x05N(\x02\u0130\u0132\x07\v\x02\x02\u0131\u0130\x03\x02" +
    "\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133" +
    "\u0135\x07\x12\x02\x02\u0134\u0136\x07\v\x02\x02\u0135\u0134\x03\x02\x02" +
    "\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0139" +
    "\x05\x18\r\x02\u0138\u0131\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02" +
    "\u0139\x1F\x03\x02\x02\x02\u013A\u013C\x07 \x02\x02\u013B\u013D\x07\v" +
    "\x02\x02\u013C\u013B\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D" +
    "\u013F\x03\x02\x02\x02\u013E\u0140\x05\x18\r\x02\u013F\u013E\x03\x02\x02" +
    "\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0148\x03\x02\x02\x02\u0141\u0143" +
    "\x07\x14\x02\x02\u0142\u0144\x07\v\x02\x02\u0143\u0142\x03\x02\x02\x02" +
    "\u0143\u0144\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0147\x05" +
    "\x18\r\x02\u0146\u0141\x03\x02\x02\x02\u0147\u014A\x03\x02\x02\x02\u0148" +
    "\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014C\x03\x02" +
    "\x02\x02\u014A\u0148\x03\x02\x02\x02\u014B\u014D\x07\v\x02\x02\u014C\u014B" +
    "\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02" +
    "\u014E\u014F\x07!\x02\x02\u014F!\x03\x02\x02\x02\u0150\u0152\x07\x1C\x02" +
    "\x02\u0151\u0153\x07\v\x02\x02\u0152\u0151\x03\x02\x02\x02\u0152\u0153" +
    "\x03\x02\x02\x02\u0153\u0155\x03\x02\x02\x02\u0154\u0156\x05$\x13\x02" +
    "\u0155\u0154\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0158\x03" +
    "\x02\x02\x02\u0157\u0159\x07\v\x02\x02\u0158\u0157\x03\x02\x02\x02\u0158" +
    "\u0159\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015B\x07\x1D" +
    "\x02\x02\u015B#\x03\x02\x02\x02\u015C\u015E\x05\x18\r\x02\u015D\u015F" +
    "\x07\v\x02\x02\u015E\u015D\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02" +
    "\u015F\u0160\x03\x02\x02\x02\u0160\u0162\x07\x12\x02\x02\u0161\u0163\x07" +
    "\v\x02\x02\u0162\u0161\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163" +
    "\u0164\x03\x02\x02\x02\u0164\u0165\x05\x18\r\x02\u0165%\x03\x02\x02\x02" +
    "\u0166\u0167\x07\x0F\x02\x02\u0167\'\x03\x02\x02\x02\u0168\u016C\x05*" +
    "\x16\x02\u0169\u016B\x05*\x16\x02\u016A\u0169\x03\x02\x02\x02\u016B\u016E" +
    "\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02" +
    "\u016D)\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016F\u0173\x05,\x17" +
    "\x02\u0170\u0172\x050\x19\x02\u0171\u0170\x03\x02\x02\x02\u0172\u0175" +
    "\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02" +
    "\u0174\u017E\x03\x02\x02\x02\u0175\u0173\x03\x02\x02\x02\u0176\u017A\x05" +
    "4\x1B\x02\u0177\u0179\x050\x19\x02\u0178\u0177\x03\x02\x02\x02\u0179\u017C" +
    "\x03\x02\x02\x02\u017A\u0178\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02" +
    "\u017B\u017E\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017D\u016F\x03" +
    "\x02\x02\x02\u017D\u0176\x03\x02\x02\x02\u017E+\x03\x02\x02\x02\u017F" +
    "\u0181\x07\v\x02\x02\u0180\u017F\x03\x02\x02\x02\u0180\u0181\x03\x02\x02" +
    "\x02\u0181\u0183\x03\x02\x02\x02\u0182\u0184\x05.\x18\x02\u0183\u0182" +
    "\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0183\x03\x02\x02\x02" +
    "\u0185\u0186\x03\x02\x02\x02\u0186\u018C\x03\x02\x02\x02\u0187\u018B\x05" +
    ".\x18\x02\u0188\u018B\x07\v\x02\x02\u0189\u018B\x07\r\x02\x02\u018A\u0187" +
    "\x03\x02\x02\x02\u018A\u0188\x03\x02\x02\x02\u018A\u0189\x03\x02\x02\x02" +
    "\u018B\u018E\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018D\x03" +
    "\x02\x02\x02\u018D-\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018F" +
    "\u0190\t\x04\x02\x02\u0190/\x03\x02\x02\x02\u0191\u0194\x054\x1B\x02\u0192" +
    "\u0194\x052\x1A\x02\u0193\u0191\x03\x02\x02\x02\u0193\u0192\x03\x02\x02" +
    "\x02\u01941\x03\x02\x02\x02\u0195\u0199\x05.\x18\x02\u0196\u0199\x07\v" +
    "\x02\x02\u0197\u0199\x07\r\x02\x02\u0198\u0195\x03\x02\x02\x02\u0198\u0196" +
    "\x03\x02\x02\x02\u0198\u0197\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02" +
    "\u019A\u0198\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B3\x03\x02" +
    "\x02\x02\u019C\u019D\x07\x1B\x02\x02\u019D\u01A1\x056\x1C\x02\u019E\u01A0" +
    "\x07\v\x02\x02\u019F\u019E\x03\x02\x02\x02\u01A0\u01A3\x03\x02\x02\x02" +
    "\u01A1\u019F\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A5\x03" +
    "\x02\x02\x02\u01A3\u01A1\x03\x02\x02\x02\u01A4\u01A6\x058\x1D\x02\u01A5" +
    "\u01A4\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A7\x03\x02" +
    "\x02\x02\u01A7\u01A8\x07\x1D\x02\x02\u01A85\x03\x02\x02\x02\u01A9\u01AA" +
    "\x05N(\x02\u01AA7\x03\x02\x02\x02\u01AB\u01AD\x05<\x1F\x02\u01AC\u01AB" +
    "\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01AC\x03\x02\x02\x02" +
    "\u01AE\u01AF\x03\x02\x02\x02\u01AF9\x03\x02\x02\x02\u01B0\u01B4\x07\x1C" +
    "\x02\x02\u01B1\u01B3\x05<\x1F\x02\u01B2\u01B1\x03\x02\x02\x02\u01B3\u01B6" +
    "\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02" +
    "\u01B5\u01B7\x03\x02\x02\x02\u01B6\u01B4\x03\x02\x02\x02\u01B7\u01B8\x07" +
    "\x1D\x02\x02\u01B8;\x03\x02\x02\x02\u01B9\u01C8\x05:\x1E\x02\u01BA\u01C4" +
    "\x05> \x02\u01BB\u01BD\x07\n\x02\x02\u01BC\u01BB\x03\x02\x02\x02\u01BD" +
    "\u01C0\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BF\x03\x02" +
    "\x02\x02\u01BF\u01C1\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C1" +
    "\u01C3\x05> \x02\u01C2\u01BE\x03\x02\x02\x02\u01C3\u01C6\x03\x02\x02\x02" +
    "\u01C4\u01C2\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C8\x03" +
    "\x02\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C7\u01B9\x03\x02\x02\x02\u01C7" +
    "\u01BA\x03\x02\x02\x02\u01C8=\x03\x02\x02\x02\u01C9\u01CA\t\x05\x02\x02" +
    "\u01CA?\x03\x02\x02\x02\u01CB\u01CC\b!\x01\x02\u01CC\u01D1\x05B\"\x02" +
    "\u01CD\u01D1\x05D#\x02\u01CE\u01D1\x05F$\x02\u01CF\u01D1\x05L\'\x02\u01D0" +
    "\u01CB\x03\x02\x02\x02\u01D0\u01CD\x03\x02\x02\x02\u01D0\u01CE\x03\x02" +
    "\x02\x02\u01D0\u01CF\x03\x02\x02\x02\u01D1\u01E6\x03\x02\x02\x02\u01D2" +
    "\u01D4\f\x07\x02\x02\u01D3\u01D5\x07\v\x02\x02\u01D4\u01D3\x03\x02\x02" +
    "\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6\u01D8" +
    "\t\x06\x02\x02\u01D7\u01D9\x07\v\x02\x02\u01D8\u01D7\x03\x02\x02\x02\u01D8" +
    "\u01D9\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01E5\x05@!\b" +
    "\u01DB\u01DD\f\x06\x02\x02\u01DC\u01DE\x07\v\x02\x02\u01DD\u01DC\x03\x02" +
    "\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF" +
    "\u01E1\t\x07\x02\x02\u01E0\u01E2\x07\v\x02\x02\u01E1\u01E0\x03\x02\x02" +
    "\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E5" +
    "\x05@!\x07\u01E4\u01D2\x03\x02\x02\x02\u01E4\u01DB\x03\x02\x02\x02\u01E5" +
    "\u01E8\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E6\u01E7\x03\x02" +
    "\x02\x02\u01E7A\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E9\u01EA" +
    "\t\b\x02\x02\u01EA\u01EB\x05@!\x02\u01EBC\x03\x02\x02\x02\u01EC\u01EE" +
    "\x07 \x02\x02\u01ED\u01EF\x05@!\x02\u01EE\u01ED\x03\x02\x02\x02\u01EE" +
    "\u01EF\x03\x02\x02\x02\u01EF\u01F7\x03\x02\x02\x02\u01F0\u01F2\x07\x14" +
    "\x02\x02\u01F1\u01F3\x07\v\x02\x02\u01F2\u01F1\x03\x02\x02\x02\u01F2\u01F3" +
    "\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\u01F6\x05@!\x02\u01F5" +
    "\u01F0\x03\x02\x02\x02\u01F6\u01F9\x03\x02\x02\x02\u01F7\u01F5\x03\x02" +
    "\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\u01FA\x03\x02\x02\x02\u01F9" +
    "\u01F7\x03\x02\x02\x02\u01FA\u01FB\x07!\x02\x02\u01FBE\x03\x02\x02\x02" +
    "\u01FC\u01FE\x07\x1C\x02\x02\u01FD\u01FF\x07\v\x02\x02\u01FE\u01FD\x03" +
    "\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0201\x03\x02\x02\x02\u0200" +
    "\u0202\x05H%\x02\u0201\u0200\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02" +
    "\u0202\u0204\x03\x02\x02\x02\u0203\u0205\x07\v\x02\x02\u0204\u0203\x03" +
    "\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206" +
    "\u0207\x07\x1D\x02\x02\u0207G\x03\x02\x02\x02\u0208\u020A\x05L\'\x02\u0209" +
    "\u020B\x07\v\x02\x02\u020A\u0209\x03\x02\x02\x02\u020A\u020B\x03\x02\x02" +
    "\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020E\x07\x12\x02\x02\u020D\u020F" +
    "\x07\v\x02\x02\u020E\u020D\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02" +
    "\u020F\u0210\x03\x02\x02\x02\u0210\u0211\x05L\'\x02\u0211I\x03\x02\x02" +
    "\x02\u0212\u0213\t\t\x02\x02\u0213K\x03\x02\x02\x02\u0214\u0215\t\n\x02" +
    "\x02\u0215M\x03\x02\x02\x02\u0216\u0217\x07\t\x02\x02\u0217O\x03\x02\x02" +
    "\x02RSW\\hz~\x90\x9C\xA0\xA8\xAC\xB0\xB4\xBC\xC0\xCC\xD0\xD4\xD8\xE0\xE7" +
    "\xEE\xF7\xFB\u0100\u0105\u0109\u0110\u0114\u0118\u011C\u0120\u0127\u012C" +
    "\u0131\u0135\u0138\u013C\u013F\u0143\u0148\u014C\u0152\u0155\u0158\u015E" +
    "\u0162\u016C\u0173\u017A\u017D\u0180\u0185\u018A\u018C\u0193\u0198\u019A" +
    "\u01A1\u01A5\u01AE\u01B4\u01BE\u01C4\u01C7\u01D0\u01D4\u01D8\u01DD\u01E1" +
    "\u01E4\u01E6\u01EE\u01F2\u01F7\u01FE\u0201\u0204\u020A\u020E";
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
        return this.tryGetRuleContext(0, DescriptionContext);
    }
    inlineTag() {
        return this.tryGetRuleContext(0, InlineTagContext);
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
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    type(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    }
    AMP(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.AMP);
        }
        else {
            return this.getToken(TomParser.AMP, i);
        }
    }
    PIPE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.PIPE);
        }
        else {
            return this.getToken(TomParser.PIPE, i);
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
    PAREN_OPEN() { return this.tryGetToken(TomParser.PAREN_OPEN, 0); }
    PAREN_CLOSE() { return this.tryGetToken(TomParser.PAREN_CLOSE, 0); }
    lambdaType() {
        return this.tryGetRuleContext(0, LambdaTypeContext);
    }
    arrayType() {
        return this.tryGetRuleContext(0, ArrayTypeContext);
    }
    objectType() {
        return this.tryGetRuleContext(0, ObjectTypeContext);
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
class LambdaTypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    PAREN_OPEN() { return this.getToken(TomParser.PAREN_OPEN, 0); }
    formalParameterSequence() {
        return this.getRuleContext(0, FormalParameterSequenceContext);
    }
    PAREN_CLOSE() { return this.getToken(TomParser.PAREN_CLOSE, 0); }
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
    descriptionLine(i) {
        if (i === undefined) {
            return this.getRuleContexts(DescriptionLineContext);
        }
        else {
            return this.getRuleContext(i, DescriptionLineContext);
        }
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
    inlineTagID() {
        return this.getRuleContext(0, InlineTagIDContext);
    }
    BRACE_CLOSE() { return this.getToken(TomParser.BRACE_CLOSE, 0); }
    SPACE(i) {
        if (i === undefined) {
            return this.getTokens(TomParser.SPACE);
        }
        else {
            return this.getToken(TomParser.SPACE, i);
        }
    }
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
class InlineTagIDContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    get ruleIndex() { return TomParser.RULE_inlineTagID; }
    enterRule(listener) {
        if (listener.enterInlineTagID)
            listener.enterInlineTagID(this);
    }
    exitRule(listener) {
        if (listener.exitInlineTagID)
            listener.exitInlineTagID(this);
    }
    accept(visitor) {
        if (visitor.visitInlineTagID)
            return visitor.visitInlineTagID(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], InlineTagIDContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], InlineTagIDContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], InlineTagIDContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], InlineTagIDContext.prototype, "accept", null);
exports.InlineTagIDContext = InlineTagIDContext;
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
    EXCLAMATION() { return this.tryGetToken(TomParser.EXCLAMATION, 0); }
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
class NumberContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IntegerLiteral() { return this.tryGetToken(TomParser.IntegerLiteral, 0); }
    FloatingPointLiteral() { return this.tryGetToken(TomParser.FloatingPointLiteral, 0); }
    get ruleIndex() { return TomParser.RULE_number; }
    enterRule(listener) {
        if (listener.enterNumber)
            listener.enterNumber(this);
    }
    exitRule(listener) {
        if (listener.exitNumber)
            listener.exitNumber(this);
    }
    accept(visitor) {
        if (visitor.visitNumber)
            return visitor.visitNumber(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NumberContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NumberContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NumberContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NumberContext.prototype, "accept", null);
exports.NumberContext = NumberContext;
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