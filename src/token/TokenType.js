"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TokenKind;
(function (TokenKind) {
    TokenKind[TokenKind["None"] = 0] = "None";
    TokenKind[TokenKind["Ampersand"] = 1] = "Ampersand";
    TokenKind[TokenKind["Any"] = 2] = "Any";
    TokenKind[TokenKind["Arrow"] = 3] = "Arrow";
    TokenKind[TokenKind["Colon"] = 4] = "Colon";
    TokenKind[TokenKind["Comma"] = 5] = "Comma";
    TokenKind[TokenKind["Description"] = 6] = "Description";
    TokenKind[TokenKind["Equal"] = 7] = "Equal";
    TokenKind[TokenKind["Identifier"] = 8] = "Identifier";
    TokenKind[TokenKind["Initializer"] = 9] = "Initializer";
    // LeftBrace,
    // LeftBracket,
    TokenKind[TokenKind["LeftParen"] = 10] = "LeftParen";
    TokenKind[TokenKind["LineTerminator"] = 11] = "LineTerminator";
    TokenKind[TokenKind["Markdown"] = 12] = "Markdown";
    TokenKind[TokenKind["Minus"] = 13] = "Minus";
    TokenKind[TokenKind["NullTerminator"] = 14] = "NullTerminator";
    TokenKind[TokenKind["Pipe"] = 15] = "Pipe";
    TokenKind[TokenKind["QuestionMark"] = 16] = "QuestionMark";
    // RightBrace,
    // RightBracket,
    TokenKind[TokenKind["RightParen"] = 17] = "RightParen";
    TokenKind[TokenKind["Tag"] = 18] = "Tag";
    TokenKind[TokenKind["EOF"] = 19] = "EOF";
})(TokenKind = exports.TokenKind || (exports.TokenKind = {}));
function getTokenKind(ch) {
    return ({
        '&': TokenKind.Ampersand,
        '=>': TokenKind.Arrow,
        ':': TokenKind.Colon,
        ',': TokenKind.Comma,
        '=': TokenKind.Equal,
        '(': TokenKind.LeftParen,
        '-': TokenKind.Minus,
        '|': TokenKind.Pipe,
        '?': TokenKind.QuestionMark,
        ')': TokenKind.RightParen,
        '@': TokenKind.Tag,
        '\n': TokenKind.LineTerminator
    })[ch];
}
exports.getTokenKind = getTokenKind;
function getTokenName(type) {
    return ({
        [TokenKind.None]: 'None',
        [TokenKind.Ampersand]: 'Ampersand',
        [TokenKind.Arrow]: 'Arrow',
        [TokenKind.Colon]: 'Colon',
        [TokenKind.Comma]: 'Comma',
        [TokenKind.Description]: 'Description',
        [TokenKind.Equal]: 'Equal',
        [TokenKind.Identifier]: 'Identifier',
        [TokenKind.Initializer]: 'Initializer',
        [TokenKind.LeftParen]: 'LeftParen',
        [TokenKind.Markdown]: 'Markdown',
        [TokenKind.Minus]: 'Minus',
        [TokenKind.NullTerminator]: 'NullTerminator',
        [TokenKind.Pipe]: 'Pipe',
        [TokenKind.QuestionMark]: 'QuestionMark',
        [TokenKind.RightParen]: 'RightParen',
        [TokenKind.Any]: 'Any',
        [TokenKind.Tag]: 'Tag',
        [TokenKind.EOF]: 'EOF'
    })[type];
}
exports.getTokenName = getTokenName;
function getTokenCharacter(type) {
    return ({
        [TokenKind.None]: '',
        [TokenKind.Ampersand]: '&',
        [TokenKind.Arrow]: '=>',
        [TokenKind.Colon]: ':',
        [TokenKind.Comma]: ',',
        [TokenKind.Equal]: '=',
        [TokenKind.LeftParen]: '(',
        [TokenKind.Minus]: '-',
        [TokenKind.Pipe]: '|',
        [TokenKind.QuestionMark]: '?',
        [TokenKind.RightParen]: ')',
        [TokenKind.Tag]: '@'
    })[type];
}
exports.default = TokenKind;
