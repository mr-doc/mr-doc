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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5UeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVG9rZW5UeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBWSxTQXlCWDtBQXpCRCxXQUFZLFNBQVM7SUFDbkIseUNBQVEsQ0FBQTtJQUNSLG1EQUFTLENBQUE7SUFDVCx1Q0FBRyxDQUFBO0lBQ0gsMkNBQUssQ0FBQTtJQUNMLDJDQUFLLENBQUE7SUFDTCwyQ0FBSyxDQUFBO0lBQ0wsdURBQVcsQ0FBQTtJQUNYLDJDQUFLLENBQUE7SUFDTCxxREFBVSxDQUFBO0lBQ1YsdURBQVcsQ0FBQTtJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2Ysb0RBQVMsQ0FBQTtJQUNULDhEQUFjLENBQUE7SUFDZCxrREFBUSxDQUFBO0lBQ1IsNENBQUssQ0FBQTtJQUNMLDhEQUFjLENBQUE7SUFDZCwwQ0FBSSxDQUFBO0lBQ0osMERBQVksQ0FBQTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsc0RBQVUsQ0FBQTtJQUNWLHdDQUFHLENBQUE7SUFDSCx3Q0FBRyxDQUFBO0FBQ0wsQ0FBQyxFQXpCVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQXlCcEI7QUFFRCxzQkFBNkIsRUFBVTtJQUNyQyxNQUFNLENBQUMsQ0FBQztRQUNOLEdBQUcsRUFBRSxTQUFTLENBQUMsU0FBUztRQUN4QixJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUs7UUFDckIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxLQUFLO1FBQ3BCLEdBQUcsRUFBRSxTQUFTLENBQUMsS0FBSztRQUNwQixHQUFHLEVBQUUsU0FBUyxDQUFDLEtBQUs7UUFDcEIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxTQUFTO1FBQ3hCLEdBQUcsRUFBRSxTQUFTLENBQUMsS0FBSztRQUNwQixHQUFHLEVBQUUsU0FBUyxDQUFDLElBQUk7UUFDbkIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxZQUFZO1FBQzNCLEdBQUcsRUFBRSxTQUFTLENBQUMsVUFBVTtRQUN6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