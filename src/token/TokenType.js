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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5UeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVG9rZW5UeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBWSxTQXlCWDtBQXpCRCxXQUFZLFNBQVM7SUFDbkIseUNBQVEsQ0FBQTtJQUNSLG1EQUFTLENBQUE7SUFDVCx1Q0FBRyxDQUFBO0lBQ0gsMkNBQUssQ0FBQTtJQUNMLDJDQUFLLENBQUE7SUFDTCwyQ0FBSyxDQUFBO0lBQ0wsdURBQVcsQ0FBQTtJQUNYLDJDQUFLLENBQUE7SUFDTCxxREFBVSxDQUFBO0lBQ1YsdURBQVcsQ0FBQTtJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2Ysb0RBQVMsQ0FBQTtJQUNULDhEQUFjLENBQUE7SUFDZCxrREFBUSxDQUFBO0lBQ1IsNENBQUssQ0FBQTtJQUNMLDhEQUFjLENBQUE7SUFDZCwwQ0FBSSxDQUFBO0lBQ0osMERBQVksQ0FBQTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsc0RBQVUsQ0FBQTtJQUNWLHdDQUFHLENBQUE7SUFDSCx3Q0FBRyxDQUFBO0FBQ0wsQ0FBQyxFQXpCVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQXlCcEI7QUFFRCxzQkFBNkIsRUFBVTtJQUNyQyxNQUFNLENBQUMsQ0FBQztRQUNOLEdBQUcsRUFBRSxTQUFTLENBQUMsU0FBUztRQUN4QixJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUs7UUFDckIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxLQUFLO1FBQ3BCLEdBQUcsRUFBRSxTQUFTLENBQUMsS0FBSztRQUNwQixHQUFHLEVBQUUsU0FBUyxDQUFDLEtBQUs7UUFDcEIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxTQUFTO1FBQ3hCLEdBQUcsRUFBRSxTQUFTLENBQUMsS0FBSztRQUNwQixHQUFHLEVBQUUsU0FBUyxDQUFDLElBQUk7UUFDbkIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxZQUFZO1FBQzNCLEdBQUcsRUFBRSxTQUFTLENBQUMsVUFBVTtRQUN6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