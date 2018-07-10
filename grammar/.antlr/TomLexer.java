// Generated from c:\Users\iwata\Documents\GitHub\mr-doc\grammar/TomLexer.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class TomLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		ID=1, NEWLINE=2, SPACE=3, TEXT_CONTENT=4, AT=5, MINUS=6, COLON=7, PERIOD=8, 
		FORWARD_SLASH=9, INLINE_TAG_START=10, BRACE_OPEN=11, BRACE_CLOSE=12;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"ID", "NEWLINE", "SPACE", "TEXT_CONTENT", "AT", "MINUS", "COLON", "PERIOD", 
		"FORWARD_SLASH", "INLINE_TAG_START", "BRACE_OPEN", "BRACE_CLOSE"
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


	public TomLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "TomLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\16K\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\3\2\6\2\35\n\2\r\2\16\2\36\3\3\3\3\5\3#\n\3\3\3\3"+
		"\3\3\3\3\3\5\3)\n\3\3\3\3\3\5\3-\n\3\5\3/\n\3\3\4\6\4\62\n\4\r\4\16\4"+
		"\63\3\5\6\5\67\n\5\r\5\16\58\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3"+
		"\13\3\13\3\13\3\f\3\f\3\r\3\r\2\2\16\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21"+
		"\n\23\13\25\f\27\r\31\16\3\2\5\4\2C\\c|\4\2\13\13\"\"\13\2\13\f\17\17"+
		"\"\",,/\61<<BB}}\177\177\2R\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3"+
		"\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2"+
		"\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\3\34\3\2\2\2\5.\3\2\2\2\7\61\3"+
		"\2\2\2\t\66\3\2\2\2\13:\3\2\2\2\r<\3\2\2\2\17>\3\2\2\2\21@\3\2\2\2\23"+
		"B\3\2\2\2\25D\3\2\2\2\27G\3\2\2\2\31I\3\2\2\2\33\35\t\2\2\2\34\33\3\2"+
		"\2\2\35\36\3\2\2\2\36\34\3\2\2\2\36\37\3\2\2\2\37\4\3\2\2\2 \"\7\f\2\2"+
		"!#\5\7\4\2\"!\3\2\2\2\"#\3\2\2\2#/\3\2\2\2$%\7\17\2\2%&\7\f\2\2&(\3\2"+
		"\2\2\')\5\7\4\2(\'\3\2\2\2()\3\2\2\2)/\3\2\2\2*,\7\17\2\2+-\5\7\4\2,+"+
		"\3\2\2\2,-\3\2\2\2-/\3\2\2\2. \3\2\2\2.$\3\2\2\2.*\3\2\2\2/\6\3\2\2\2"+
		"\60\62\t\3\2\2\61\60\3\2\2\2\62\63\3\2\2\2\63\61\3\2\2\2\63\64\3\2\2\2"+
		"\64\b\3\2\2\2\65\67\n\4\2\2\66\65\3\2\2\2\678\3\2\2\28\66\3\2\2\289\3"+
		"\2\2\29\n\3\2\2\2:;\7B\2\2;\f\3\2\2\2<=\7/\2\2=\16\3\2\2\2>?\7<\2\2?\20"+
		"\3\2\2\2@A\7\60\2\2A\22\3\2\2\2BC\7\61\2\2C\24\3\2\2\2DE\7}\2\2EF\7B\2"+
		"\2F\26\3\2\2\2GH\7}\2\2H\30\3\2\2\2IJ\7\177\2\2J\32\3\2\2\2\n\2\36\"("+
		",.\638\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}