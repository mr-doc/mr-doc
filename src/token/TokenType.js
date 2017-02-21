"use strict";
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
})(TokenType || (TokenType = {}));
function getTokenType(ch) {
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
exports.getTokenType = getTokenType;
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
        [TokenType.Tag]: 'Tag'
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TokenType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5UeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVG9rZW5UeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFLLFNBd0JKO0FBeEJELFdBQUssU0FBUztJQUNaLHlDQUFRLENBQUE7SUFDUixtREFBUyxDQUFBO0lBQ1QsdUNBQUcsQ0FBQTtJQUNILDJDQUFLLENBQUE7SUFDTCwyQ0FBSyxDQUFBO0lBQ0wsMkNBQUssQ0FBQTtJQUNMLHVEQUFXLENBQUE7SUFDWCwyQ0FBSyxDQUFBO0lBQ0wscURBQVUsQ0FBQTtJQUNWLHVEQUFXLENBQUE7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLG9EQUFTLENBQUE7SUFDVCw4REFBYyxDQUFBO0lBQ2Qsa0RBQVEsQ0FBQTtJQUNSLDRDQUFLLENBQUE7SUFDTCw4REFBYyxDQUFBO0lBQ2QsMENBQUksQ0FBQTtJQUNKLDBEQUFZLENBQUE7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHNEQUFVLENBQUE7SUFDVix3Q0FBRyxDQUFBO0FBQ0wsQ0FBQyxFQXhCSSxTQUFTLEtBQVQsU0FBUyxRQXdCYjtBQUVELHNCQUE2QixFQUFVO0lBQ3JDLE1BQU0sQ0FBQyxDQUFDO1FBQ04sR0FBRyxFQUFFLFNBQVMsQ0FBQyxTQUFTO1FBQ3hCLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSztRQUNyQixHQUFHLEVBQUUsU0FBUyxDQUFDLEtBQUs7UUFDcEIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxLQUFLO1FBQ3BCLEdBQUcsRUFBRSxTQUFTLENBQUMsS0FBSztRQUNwQixHQUFHLEVBQUUsU0FBUyxDQUFDLFNBQVM7UUFDeEIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxLQUFLO1FBQ3BCLEdBQUcsRUFBRSxTQUFTLENBQUMsSUFBSTtRQUNuQixHQUFHLEVBQUUsU0FBUyxDQUFDLFlBQVk7UUFDM0IsR0FBRyxFQUFFLFNBQVMsQ0FBQyxVQUFVO1FBQ3pCLEdBQUcsRUFBRSxTQUFTLENBQUMsR0FBRztRQUNs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