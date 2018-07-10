// Generated from c:\Users\iwata\Documents\GitHub\mr-doc\grammar\TomParser.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class TomParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		ID=1, NEWLINE=2, SPACE=3, TEXT_CONTENT=4, AT=5, MINUS=6, COLON=7, PERIOD=8, 
		FORWARD_SLASH=9, INLINE_TAG_START=10, BRACE_OPEN=11, BRACE_CLOSE=12;
	public static final int
		RULE_documentation = 0, RULE_body = 1, RULE_whitespace = 2, RULE_annotations = 3, 
		RULE_tag = 4, RULE_tagID = 5, RULE_tagBody = 6, RULE_description = 7, 
		RULE_descriptionLine = 8, RULE_descriptionLineStart = 9, RULE_descriptionText = 10, 
		RULE_descriptionLineElement = 11, RULE_descriptionLineText = 12, RULE_inlineTag = 13, 
		RULE_inlineTagID = 14, RULE_inlineTagBody = 15, RULE_braceExpression = 16, 
		RULE_braceBody = 17, RULE_braceText = 18;
	public static final String[] ruleNames = {
		"documentation", "body", "whitespace", "annotations", "tag", "tagID", 
		"tagBody", "description", "descriptionLine", "descriptionLineStart", "descriptionText", 
		"descriptionLineElement", "descriptionLineText", "inlineTag", "inlineTagID", 
		"inlineTagBody", "braceExpression", "braceBody", "braceText"
	};

	private static final String[] _LITERAL_NAMES = {
		null, null, null, null, null, "'@'", "'-'", "':'", "'.'", "'/'", "'{@'", 
		"'{'", "'}'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "ID", "NEWLINE", "SPACE", "TEXT_CONTENT", "AT", "MINUS", "COLON", 
		"PERIOD", "FORWARD_SLASH", "INLINE_TAG_START", "BRACE_OPEN", "BRACE_CLOSE"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "TomParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public TomParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class DocumentationContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(TomParser.EOF, 0); }
		public BodyContext body() {
			return getRuleContext(BodyContext.class,0);
		}
		public List<WhitespaceContext> whitespace() {
			return getRuleContexts(WhitespaceContext.class);
		}
		public WhitespaceContext whitespace(int i) {
			return getRuleContext(WhitespaceContext.class,i);
		}
		public TerminalNode SPACE() { return getToken(TomParser.SPACE, 0); }
		public DocumentationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_documentation; }
	}

	public final DocumentationContext documentation() throws RecognitionException {
		DocumentationContext _localctx = new DocumentationContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_documentation);
		int _la;
		try {
			int _alt;
			setState(51);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EOF:
				enterOuterAlt(_localctx, 1);
				{
				setState(38);
				match(EOF);
				}
				break;
			case NEWLINE:
			case SPACE:
			case AT:
				enterOuterAlt(_localctx, 2);
				{
				setState(42);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(39);
						whitespace();
						}
						} 
					}
					setState(44);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
				}
				setState(45);
				body();
				setState(47);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(46);
					match(SPACE);
					}
				}

				setState(49);
				match(EOF);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BodyContext extends ParserRuleContext {
		public AnnotationsContext annotations() {
			return getRuleContext(AnnotationsContext.class,0);
		}
		public List<WhitespaceContext> whitespace() {
			return getRuleContexts(WhitespaceContext.class);
		}
		public WhitespaceContext whitespace(int i) {
			return getRuleContext(WhitespaceContext.class,i);
		}
		public BodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_body; }
	}

	public final BodyContext body() throws RecognitionException {
		BodyContext _localctx = new BodyContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_body);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(53);
					whitespace();
					}
					} 
				}
				setState(58);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			}
			setState(59);
			annotations();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhitespaceContext extends ParserRuleContext {
		public TerminalNode SPACE() { return getToken(TomParser.SPACE, 0); }
		public TerminalNode NEWLINE() { return getToken(TomParser.NEWLINE, 0); }
		public WhitespaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whitespace; }
	}

	public final WhitespaceContext whitespace() throws RecognitionException {
		WhitespaceContext _localctx = new WhitespaceContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_whitespace);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(61);
			_la = _input.LA(1);
			if ( !(_la==NEWLINE || _la==SPACE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnnotationsContext extends ParserRuleContext {
		public List<TagContext> tag() {
			return getRuleContexts(TagContext.class);
		}
		public TagContext tag(int i) {
			return getRuleContext(TagContext.class,i);
		}
		public AnnotationsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotations; }
	}

	public final AnnotationsContext annotations() throws RecognitionException {
		AnnotationsContext _localctx = new AnnotationsContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_annotations);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(64); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(63);
					tag();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(66); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TagContext extends ParserRuleContext {
		public TerminalNode AT() { return getToken(TomParser.AT, 0); }
		public TagIDContext tagID() {
			return getRuleContext(TagIDContext.class,0);
		}
		public List<TerminalNode> SPACE() { return getTokens(TomParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(TomParser.SPACE, i);
		}
		public List<TagBodyContext> tagBody() {
			return getRuleContexts(TagBodyContext.class);
		}
		public TagBodyContext tagBody(int i) {
			return getRuleContext(TagBodyContext.class,i);
		}
		public TerminalNode NEWLINE() { return getToken(TomParser.NEWLINE, 0); }
		public TagContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tag; }
	}

	public final TagContext tag() throws RecognitionException {
		TagContext _localctx = new TagContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_tag);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SPACE) {
				{
				setState(68);
				match(SPACE);
				}
			}

			setState(71);
			match(AT);
			setState(72);
			tagID();
			setState(74);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				setState(73);
				match(SPACE);
				}
				break;
			}
			setState(79);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(76);
					tagBody();
					}
					} 
				}
				setState(81);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			}
			setState(83);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NEWLINE) {
				{
				setState(82);
				match(NEWLINE);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TagIDContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(TomParser.ID, 0); }
		public TagIDContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tagID; }
	}

	public final TagIDContext tagID() throws RecognitionException {
		TagIDContext _localctx = new TagIDContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_tagID);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TagBodyContext extends ParserRuleContext {
		public DescriptionContext description() {
			return getRuleContext(DescriptionContext.class,0);
		}
		public InlineTagContext inlineTag() {
			return getRuleContext(InlineTagContext.class,0);
		}
		public TagBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tagBody; }
	}

	public final TagBodyContext tagBody() throws RecognitionException {
		TagBodyContext _localctx = new TagBodyContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_tagBody);
		try {
			setState(89);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(87);
				description();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(88);
				inlineTag();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DescriptionContext extends ParserRuleContext {
		public List<DescriptionLineContext> descriptionLine() {
			return getRuleContexts(DescriptionLineContext.class);
		}
		public DescriptionLineContext descriptionLine(int i) {
			return getRuleContext(DescriptionLineContext.class,i);
		}
		public DescriptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_description; }
	}

	public final DescriptionContext description() throws RecognitionException {
		DescriptionContext _localctx = new DescriptionContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_description);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			descriptionLine();
			setState(95);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(92);
					descriptionLine();
					}
					} 
				}
				setState(97);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DescriptionLineContext extends ParserRuleContext {
		public DescriptionLineStartContext descriptionLineStart() {
			return getRuleContext(DescriptionLineStartContext.class,0);
		}
		public List<DescriptionLineElementContext> descriptionLineElement() {
			return getRuleContexts(DescriptionLineElementContext.class);
		}
		public DescriptionLineElementContext descriptionLineElement(int i) {
			return getRuleContext(DescriptionLineElementContext.class,i);
		}
		public InlineTagContext inlineTag() {
			return getRuleContext(InlineTagContext.class,0);
		}
		public DescriptionLineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_descriptionLine; }
	}

	public final DescriptionLineContext descriptionLine() throws RecognitionException {
		DescriptionLineContext _localctx = new DescriptionLineContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_descriptionLine);
		try {
			int _alt;
			setState(112);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
			case SPACE:
			case TEXT_CONTENT:
			case MINUS:
			case COLON:
			case PERIOD:
			case FORWARD_SLASH:
			case BRACE_OPEN:
			case BRACE_CLOSE:
				enterOuterAlt(_localctx, 1);
				{
				setState(98);
				descriptionLineStart();
				setState(102);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(99);
						descriptionLineElement();
						}
						} 
					}
					setState(104);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
				}
				}
				break;
			case INLINE_TAG_START:
				enterOuterAlt(_localctx, 2);
				{
				setState(105);
				inlineTag();
				setState(109);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(106);
						descriptionLineElement();
						}
						} 
					}
					setState(111);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DescriptionLineStartContext extends ParserRuleContext {
		public List<TerminalNode> SPACE() { return getTokens(TomParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(TomParser.SPACE, i);
		}
		public List<DescriptionTextContext> descriptionText() {
			return getRuleContexts(DescriptionTextContext.class);
		}
		public DescriptionTextContext descriptionText(int i) {
			return getRuleContext(DescriptionTextContext.class,i);
		}
		public List<TerminalNode> AT() { return getTokens(TomParser.AT); }
		public TerminalNode AT(int i) {
			return getToken(TomParser.AT, i);
		}
		public DescriptionLineStartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_descriptionLineStart; }
	}

	public final DescriptionLineStartContext descriptionLineStart() throws RecognitionException {
		DescriptionLineStartContext _localctx = new DescriptionLineStartContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_descriptionLineStart);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(115);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SPACE) {
				{
				setState(114);
				match(SPACE);
				}
			}

			setState(118); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(117);
					descriptionText();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(120); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(127);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(125);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case ID:
					case TEXT_CONTENT:
					case MINUS:
					case COLON:
					case PERIOD:
					case FORWARD_SLASH:
					case BRACE_OPEN:
					case BRACE_CLOSE:
						{
						setState(122);
						descriptionText();
						}
						break;
					case SPACE:
						{
						setState(123);
						match(SPACE);
						}
						break;
					case AT:
						{
						setState(124);
						match(AT);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				setState(129);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DescriptionTextContext extends ParserRuleContext {
		public TerminalNode TEXT_CONTENT() { return getToken(TomParser.TEXT_CONTENT, 0); }
		public TerminalNode ID() { return getToken(TomParser.ID, 0); }
		public TerminalNode FORWARD_SLASH() { return getToken(TomParser.FORWARD_SLASH, 0); }
		public TerminalNode BRACE_OPEN() { return getToken(TomParser.BRACE_OPEN, 0); }
		public TerminalNode BRACE_CLOSE() { return getToken(TomParser.BRACE_CLOSE, 0); }
		public TerminalNode COLON() { return getToken(TomParser.COLON, 0); }
		public TerminalNode MINUS() { return getToken(TomParser.MINUS, 0); }
		public TerminalNode PERIOD() { return getToken(TomParser.PERIOD, 0); }
		public DescriptionTextContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_descriptionText; }
	}

	public final DescriptionTextContext descriptionText() throws RecognitionException {
		DescriptionTextContext _localctx = new DescriptionTextContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_descriptionText);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(130);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ID) | (1L << TEXT_CONTENT) | (1L << MINUS) | (1L << COLON) | (1L << PERIOD) | (1L << FORWARD_SLASH) | (1L << BRACE_OPEN) | (1L << BRACE_CLOSE))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DescriptionLineElementContext extends ParserRuleContext {
		public InlineTagContext inlineTag() {
			return getRuleContext(InlineTagContext.class,0);
		}
		public DescriptionLineTextContext descriptionLineText() {
			return getRuleContext(DescriptionLineTextContext.class,0);
		}
		public DescriptionLineElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_descriptionLineElement; }
	}

	public final DescriptionLineElementContext descriptionLineElement() throws RecognitionException {
		DescriptionLineElementContext _localctx = new DescriptionLineElementContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_descriptionLineElement);
		try {
			setState(134);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INLINE_TAG_START:
				enterOuterAlt(_localctx, 1);
				{
				setState(132);
				inlineTag();
				}
				break;
			case ID:
			case SPACE:
			case TEXT_CONTENT:
			case AT:
			case MINUS:
			case COLON:
			case PERIOD:
			case FORWARD_SLASH:
			case BRACE_OPEN:
			case BRACE_CLOSE:
				enterOuterAlt(_localctx, 2);
				{
				setState(133);
				descriptionLineText();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DescriptionLineTextContext extends ParserRuleContext {
		public List<DescriptionTextContext> descriptionText() {
			return getRuleContexts(DescriptionTextContext.class);
		}
		public DescriptionTextContext descriptionText(int i) {
			return getRuleContext(DescriptionTextContext.class,i);
		}
		public List<TerminalNode> SPACE() { return getTokens(TomParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(TomParser.SPACE, i);
		}
		public List<TerminalNode> AT() { return getTokens(TomParser.AT); }
		public TerminalNode AT(int i) {
			return getToken(TomParser.AT, i);
		}
		public DescriptionLineTextContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_descriptionLineText; }
	}

	public final DescriptionLineTextContext descriptionLineText() throws RecognitionException {
		DescriptionLineTextContext _localctx = new DescriptionLineTextContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_descriptionLineText);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(139); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					setState(139);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case ID:
					case TEXT_CONTENT:
					case MINUS:
					case COLON:
					case PERIOD:
					case FORWARD_SLASH:
					case BRACE_OPEN:
					case BRACE_CLOSE:
						{
						setState(136);
						descriptionText();
						}
						break;
					case SPACE:
						{
						setState(137);
						match(SPACE);
						}
						break;
					case AT:
						{
						setState(138);
						match(AT);
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
				setState(141); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InlineTagContext extends ParserRuleContext {
		public TerminalNode INLINE_TAG_START() { return getToken(TomParser.INLINE_TAG_START, 0); }
		public InlineTagIDContext inlineTagID() {
			return getRuleContext(InlineTagIDContext.class,0);
		}
		public TerminalNode BRACE_CLOSE() { return getToken(TomParser.BRACE_CLOSE, 0); }
		public List<TerminalNode> SPACE() { return getTokens(TomParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(TomParser.SPACE, i);
		}
		public InlineTagBodyContext inlineTagBody() {
			return getRuleContext(InlineTagBodyContext.class,0);
		}
		public InlineTagContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inlineTag; }
	}

	public final InlineTagContext inlineTag() throws RecognitionException {
		InlineTagContext _localctx = new InlineTagContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_inlineTag);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(143);
			match(INLINE_TAG_START);
			setState(144);
			inlineTagID();
			setState(148);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(145);
					match(SPACE);
					}
					} 
				}
				setState(150);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			}
			setState(152);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ID) | (1L << NEWLINE) | (1L << SPACE) | (1L << TEXT_CONTENT) | (1L << PERIOD) | (1L << FORWARD_SLASH) | (1L << BRACE_OPEN))) != 0)) {
				{
				setState(151);
				inlineTagBody();
				}
			}

			setState(154);
			match(BRACE_CLOSE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InlineTagIDContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(TomParser.ID, 0); }
		public InlineTagIDContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inlineTagID; }
	}

	public final InlineTagIDContext inlineTagID() throws RecognitionException {
		InlineTagIDContext _localctx = new InlineTagIDContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_inlineTagID);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(156);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InlineTagBodyContext extends ParserRuleContext {
		public List<BraceBodyContext> braceBody() {
			return getRuleContexts(BraceBodyContext.class);
		}
		public BraceBodyContext braceBody(int i) {
			return getRuleContext(BraceBodyContext.class,i);
		}
		public InlineTagBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inlineTagBody; }
	}

	public final InlineTagBodyContext inlineTagBody() throws RecognitionException {
		InlineTagBodyContext _localctx = new InlineTagBodyContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_inlineTagBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(159); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(158);
				braceBody();
				}
				}
				setState(161); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ID) | (1L << NEWLINE) | (1L << SPACE) | (1L << TEXT_CONTENT) | (1L << PERIOD) | (1L << FORWARD_SLASH) | (1L << BRACE_OPEN))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BraceExpressionContext extends ParserRuleContext {
		public TerminalNode BRACE_OPEN() { return getToken(TomParser.BRACE_OPEN, 0); }
		public TerminalNode BRACE_CLOSE() { return getToken(TomParser.BRACE_CLOSE, 0); }
		public List<BraceBodyContext> braceBody() {
			return getRuleContexts(BraceBodyContext.class);
		}
		public BraceBodyContext braceBody(int i) {
			return getRuleContext(BraceBodyContext.class,i);
		}
		public BraceExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_braceExpression; }
	}

	public final BraceExpressionContext braceExpression() throws RecognitionException {
		BraceExpressionContext _localctx = new BraceExpressionContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_braceExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(163);
			match(BRACE_OPEN);
			setState(167);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ID) | (1L << NEWLINE) | (1L << SPACE) | (1L << TEXT_CONTENT) | (1L << PERIOD) | (1L << FORWARD_SLASH) | (1L << BRACE_OPEN))) != 0)) {
				{
				{
				setState(164);
				braceBody();
				}
				}
				setState(169);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(170);
			match(BRACE_CLOSE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BraceBodyContext extends ParserRuleContext {
		public BraceExpressionContext braceExpression() {
			return getRuleContext(BraceExpressionContext.class,0);
		}
		public List<BraceTextContext> braceText() {
			return getRuleContexts(BraceTextContext.class);
		}
		public BraceTextContext braceText(int i) {
			return getRuleContext(BraceTextContext.class,i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(TomParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(TomParser.NEWLINE, i);
		}
		public BraceBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_braceBody; }
	}

	public final BraceBodyContext braceBody() throws RecognitionException {
		BraceBodyContext _localctx = new BraceBodyContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_braceBody);
		try {
			int _alt;
			setState(186);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BRACE_OPEN:
				enterOuterAlt(_localctx, 1);
				{
				setState(172);
				braceExpression();
				}
				break;
			case ID:
			case NEWLINE:
			case SPACE:
			case TEXT_CONTENT:
			case PERIOD:
			case FORWARD_SLASH:
				enterOuterAlt(_localctx, 2);
				{
				setState(173);
				braceText();
				setState(183);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(177);
						_errHandler.sync(this);
						_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
						while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
							if ( _alt==1 ) {
								{
								{
								setState(174);
								match(NEWLINE);
								}
								} 
							}
							setState(179);
							_errHandler.sync(this);
							_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
						}
						setState(180);
						braceText();
						}
						} 
					}
					setState(185);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BraceTextContext extends ParserRuleContext {
		public TerminalNode TEXT_CONTENT() { return getToken(TomParser.TEXT_CONTENT, 0); }
		public TerminalNode ID() { return getToken(TomParser.ID, 0); }
		public TerminalNode SPACE() { return getToken(TomParser.SPACE, 0); }
		public TerminalNode FORWARD_SLASH() { return getToken(TomParser.FORWARD_SLASH, 0); }
		public TerminalNode NEWLINE() { return getToken(TomParser.NEWLINE, 0); }
		public TerminalNode PERIOD() { return getToken(TomParser.PERIOD, 0); }
		public BraceTextContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_braceText; }
	}

	public final BraceTextContext braceText() throws RecognitionException {
		BraceTextContext _localctx = new BraceTextContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_braceText);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(188);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ID) | (1L << NEWLINE) | (1L << SPACE) | (1L << TEXT_CONTENT) | (1L << PERIOD) | (1L << FORWARD_SLASH))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\16\u00c1\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\3\2\3\2\7\2+\n\2\f\2\16\2.\13\2\3\2\3\2\5\2\62\n"+
		"\2\3\2\3\2\5\2\66\n\2\3\3\7\39\n\3\f\3\16\3<\13\3\3\3\3\3\3\4\3\4\3\5"+
		"\6\5C\n\5\r\5\16\5D\3\6\5\6H\n\6\3\6\3\6\3\6\5\6M\n\6\3\6\7\6P\n\6\f\6"+
		"\16\6S\13\6\3\6\5\6V\n\6\3\7\3\7\3\b\3\b\5\b\\\n\b\3\t\3\t\7\t`\n\t\f"+
		"\t\16\tc\13\t\3\n\3\n\7\ng\n\n\f\n\16\nj\13\n\3\n\3\n\7\nn\n\n\f\n\16"+
		"\nq\13\n\5\ns\n\n\3\13\5\13v\n\13\3\13\6\13y\n\13\r\13\16\13z\3\13\3\13"+
		"\3\13\7\13\u0080\n\13\f\13\16\13\u0083\13\13\3\f\3\f\3\r\3\r\5\r\u0089"+
		"\n\r\3\16\3\16\3\16\6\16\u008e\n\16\r\16\16\16\u008f\3\17\3\17\3\17\7"+
		"\17\u0095\n\17\f\17\16\17\u0098\13\17\3\17\5\17\u009b\n\17\3\17\3\17\3"+
		"\20\3\20\3\21\6\21\u00a2\n\21\r\21\16\21\u00a3\3\22\3\22\7\22\u00a8\n"+
		"\22\f\22\16\22\u00ab\13\22\3\22\3\22\3\23\3\23\3\23\7\23\u00b2\n\23\f"+
		"\23\16\23\u00b5\13\23\3\23\7\23\u00b8\n\23\f\23\16\23\u00bb\13\23\5\23"+
		"\u00bd\n\23\3\24\3\24\3\24\2\2\25\2\4\6\b\n\f\16\20\22\24\26\30\32\34"+
		"\36 \"$&\2\5\3\2\4\5\6\2\3\3\6\6\b\13\r\16\4\2\3\6\n\13\2\u00cb\2\65\3"+
		"\2\2\2\4:\3\2\2\2\6?\3\2\2\2\bB\3\2\2\2\nG\3\2\2\2\fW\3\2\2\2\16[\3\2"+
		"\2\2\20]\3\2\2\2\22r\3\2\2\2\24u\3\2\2\2\26\u0084\3\2\2\2\30\u0088\3\2"+
		"\2\2\32\u008d\3\2\2\2\34\u0091\3\2\2\2\36\u009e\3\2\2\2 \u00a1\3\2\2\2"+
		"\"\u00a5\3\2\2\2$\u00bc\3\2\2\2&\u00be\3\2\2\2(\66\7\2\2\3)+\5\6\4\2*"+
		")\3\2\2\2+.\3\2\2\2,*\3\2\2\2,-\3\2\2\2-/\3\2\2\2.,\3\2\2\2/\61\5\4\3"+
		"\2\60\62\7\5\2\2\61\60\3\2\2\2\61\62\3\2\2\2\62\63\3\2\2\2\63\64\7\2\2"+
		"\3\64\66\3\2\2\2\65(\3\2\2\2\65,\3\2\2\2\66\3\3\2\2\2\679\5\6\4\28\67"+
		"\3\2\2\29<\3\2\2\2:8\3\2\2\2:;\3\2\2\2;=\3\2\2\2<:\3\2\2\2=>\5\b\5\2>"+
		"\5\3\2\2\2?@\t\2\2\2@\7\3\2\2\2AC\5\n\6\2BA\3\2\2\2CD\3\2\2\2DB\3\2\2"+
		"\2DE\3\2\2\2E\t\3\2\2\2FH\7\5\2\2GF\3\2\2\2GH\3\2\2\2HI\3\2\2\2IJ\7\7"+
		"\2\2JL\5\f\7\2KM\7\5\2\2LK\3\2\2\2LM\3\2\2\2MQ\3\2\2\2NP\5\16\b\2ON\3"+
		"\2\2\2PS\3\2\2\2QO\3\2\2\2QR\3\2\2\2RU\3\2\2\2SQ\3\2\2\2TV\7\4\2\2UT\3"+
		"\2\2\2UV\3\2\2\2V\13\3\2\2\2WX\7\3\2\2X\r\3\2\2\2Y\\\5\20\t\2Z\\\5\34"+
		"\17\2[Y\3\2\2\2[Z\3\2\2\2\\\17\3\2\2\2]a\5\22\n\2^`\5\22\n\2_^\3\2\2\2"+
		"`c\3\2\2\2a_\3\2\2\2ab\3\2\2\2b\21\3\2\2\2ca\3\2\2\2dh\5\24\13\2eg\5\30"+
		"\r\2fe\3\2\2\2gj\3\2\2\2hf\3\2\2\2hi\3\2\2\2is\3\2\2\2jh\3\2\2\2ko\5\34"+
		"\17\2ln\5\30\r\2ml\3\2\2\2nq\3\2\2\2om\3\2\2\2op\3\2\2\2ps\3\2\2\2qo\3"+
		"\2\2\2rd\3\2\2\2rk\3\2\2\2s\23\3\2\2\2tv\7\5\2\2ut\3\2\2\2uv\3\2\2\2v"+
		"x\3\2\2\2wy\5\26\f\2xw\3\2\2\2yz\3\2\2\2zx\3\2\2\2z{\3\2\2\2{\u0081\3"+
		"\2\2\2|\u0080\5\26\f\2}\u0080\7\5\2\2~\u0080\7\7\2\2\177|\3\2\2\2\177"+
		"}\3\2\2\2\177~\3\2\2\2\u0080\u0083\3\2\2\2\u0081\177\3\2\2\2\u0081\u0082"+
		"\3\2\2\2\u0082\25\3\2\2\2\u0083\u0081\3\2\2\2\u0084\u0085\t\3\2\2\u0085"+
		"\27\3\2\2\2\u0086\u0089\5\34\17\2\u0087\u0089\5\32\16\2\u0088\u0086\3"+
		"\2\2\2\u0088\u0087\3\2\2\2\u0089\31\3\2\2\2\u008a\u008e\5\26\f\2\u008b"+
		"\u008e\7\5\2\2\u008c\u008e\7\7\2\2\u008d\u008a\3\2\2\2\u008d\u008b\3\2"+
		"\2\2\u008d\u008c\3\2\2\2\u008e\u008f\3\2\2\2\u008f\u008d\3\2\2\2\u008f"+
		"\u0090\3\2\2\2\u0090\33\3\2\2\2\u0091\u0092\7\f\2\2\u0092\u0096\5\36\20"+
		"\2\u0093\u0095\7\5\2\2\u0094\u0093\3\2\2\2\u0095\u0098\3\2\2\2\u0096\u0094"+
		"\3\2\2\2\u0096\u0097\3\2\2\2\u0097\u009a\3\2\2\2\u0098\u0096\3\2\2\2\u0099"+
		"\u009b\5 \21\2\u009a\u0099\3\2\2\2\u009a\u009b\3\2\2\2\u009b\u009c\3\2"+
		"\2\2\u009c\u009d\7\16\2\2\u009d\35\3\2\2\2\u009e\u009f\7\3\2\2\u009f\37"+
		"\3\2\2\2\u00a0\u00a2\5$\23\2\u00a1\u00a0\3\2\2\2\u00a2\u00a3\3\2\2\2\u00a3"+
		"\u00a1\3\2\2\2\u00a3\u00a4\3\2\2\2\u00a4!\3\2\2\2\u00a5\u00a9\7\r\2\2"+
		"\u00a6\u00a8\5$\23\2\u00a7\u00a6\3\2\2\2\u00a8\u00ab\3\2\2\2\u00a9\u00a7"+
		"\3\2\2\2\u00a9\u00aa\3\2\2\2\u00aa\u00ac\3\2\2\2\u00ab\u00a9\3\2\2\2\u00ac"+
		"\u00ad\7\16\2\2\u00ad#\3\2\2\2\u00ae\u00bd\5\"\22\2\u00af\u00b9\5&\24"+
		"\2\u00b0\u00b2\7\4\2\2\u00b1\u00b0\3\2\2\2\u00b2\u00b5\3\2\2\2\u00b3\u00b1"+
		"\3\2\2\2\u00b3\u00b4\3\2\2\2\u00b4\u00b6\3\2\2\2\u00b5\u00b3\3\2\2\2\u00b6"+
		"\u00b8\5&\24\2\u00b7\u00b3\3\2\2\2\u00b8\u00bb\3\2\2\2\u00b9\u00b7\3\2"+
		"\2\2\u00b9\u00ba\3\2\2\2\u00ba\u00bd\3\2\2\2\u00bb\u00b9\3\2\2\2\u00bc"+
		"\u00ae\3\2\2\2\u00bc\u00af\3\2\2\2\u00bd%\3\2\2\2\u00be\u00bf\t\4\2\2"+
		"\u00bf\'\3\2\2\2\36,\61\65:DGLQU[ahoruz\177\u0081\u0088\u008d\u008f\u0096"+
		"\u009a\u00a3\u00a9\u00b3\u00b9\u00bc";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}