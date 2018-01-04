"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TokenType;
(function (TokenType) {
    TokenType[TokenType["None"] = 0] = "None";
    TokenType[TokenType["Ampersand"] = 1] = "Ampersand";
    TokenType[TokenType["Any"] = 2] = "Any";
    TokenType[TokenType["Arrow"] = 3] = "Arrow";
    TokenType[TokenType["Colon"] = 4] = "Colon";
    TokenType[TokenType["Comma"] = 5] = "Comma";
    TokenType[TokenType["Description"] = 6] = "Description";
    TokenType[TokenType["Equal"] = 7] = "Equal";
    TokenType[TokenType["Identifier"] = 8] = "Identifier";
    TokenType[TokenType["Initializer"] = 9] = "Initializer";
    // LeftBrace,
    // LeftBracket,
    TokenType[TokenType["LeftParen"] = 10] = "LeftParen";
    TokenType[TokenType["LineTerminator"] = 11] = "LineTerminator";
    TokenType[TokenType["Markdown"] = 12] = "Markdown";
    TokenType[TokenType["Minus"] = 13] = "Minus";
    TokenType[TokenType["NullTerminator"] = 14] = "NullTerminator";
    TokenType[TokenType["Pipe"] = 15] = "Pipe";
    TokenType[TokenType["QuestionMark"] = 16] = "QuestionMark";
    // RightBrace,
    // RightBracket,
    TokenType[TokenType["RightParen"] = 17] = "RightParen";
    TokenType[TokenType["Tag"] = 18] = "Tag";
    TokenType[TokenType["EOF"] = 19] = "EOF";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
function getTokenKind(ch) {
    return ({
        '&': TokenType.Ampersand,
        '=>': TokenType.Arrow,
        ':': TokenType.Colon,
        ',': TokenType.Comma,
        '=': TokenType.Equal,
        '(': TokenType.LeftParen,
        '-': TokenType.Minus,
        '|': TokenType.Pipe,
        '?': TokenType.QuestionMark,
        ')': TokenType.RightParen,
        '@': TokenType.Tag,
        '\n': TokenType.LineTerminator
    })[ch];
}
exports.getTokenKind = getTokenKind;
function getTokenName(type) {
    return ({
        [TokenType.None]: 'None',
        [TokenType.Ampersand]: 'Ampersand',
        [TokenType.Arrow]: 'Arrow',
        [TokenType.Colon]: 'Colon',
        [TokenType.Comma]: 'Comma',
        [TokenType.Description]: 'Description',
        [TokenType.Equal]: 'Equal',
        [TokenType.Identifier]: 'Identifier',
        [TokenType.Initializer]: 'Initializer',
        [TokenType.LeftParen]: 'LeftParen',
        [TokenType.Markdown]: 'Markdown',
        [TokenType.Minus]: 'Minus',
        [TokenType.NullTerminator]: 'NullTerminator',
        [TokenType.Pipe]: 'Pipe',
        [TokenType.QuestionMark]: 'QuestionMark',
        [TokenType.RightParen]: 'RightParen',
        [TokenType.Any]: 'Any',
        [TokenType.Tag]: 'Tag',
        [TokenType.EOF]: 'EOF'
    })[type];
}
exports.getTokenName = getTokenName;
function getTokenCharacter(type) {
    return ({
        [TokenType.None]: '',
        [TokenType.Ampersand]: '&',
        [TokenType.Arrow]: '=>',
        [TokenType.Colon]: ':',
        [TokenType.Comma]: ',',
        [TokenType.Equal]: '=',
        [TokenType.LeftParen]: '(',
        [TokenType.Minus]: '-',
        [TokenType.Pipe]: '|',
        [TokenType.QuestionMark]: '?',
        [TokenType.RightParen]: ')',
        [TokenType.Tag]: '@'
    })[type];
}
//# sourceMappingURL=TokenType.js.map