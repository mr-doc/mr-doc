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
exports.default = TokenType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5UeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVG9rZW5UeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSyxTQXlCSjtBQXpCRCxXQUFLLFNBQVM7SUFDWix5Q0FBUSxDQUFBO0lBQ1IsbURBQVMsQ0FBQTtJQUNULHVDQUFHLENBQUE7SUFDSCwyQ0FBSyxDQUFBO0lBQ0wsMkNBQUssQ0FBQTtJQUNMLDJDQUFLLENBQUE7SUFDTCx1REFBVyxDQUFBO0lBQ1gsMkNBQUssQ0FBQTtJQUNMLHFEQUFVLENBQUE7SUFDVix1REFBVyxDQUFBO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZixvREFBUyxDQUFBO0lBQ1QsOERBQWMsQ0FBQTtJQUNkLGtEQUFRLENBQUE7SUFDUiw0Q0FBSyxDQUFBO0lBQ0wsOERBQWMsQ0FBQTtJQUNkLDBDQUFJLENBQUE7SUFDSiwwREFBWSxDQUFBO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixzREFBVSxDQUFBO0lBQ1Ysd0NBQUcsQ0FBQTtJQUNILHdDQUFHLENBQUE7QUFDTCxDQUFDLEVBekJJLFNBQVMsS0FBVCxTQUFTLFFBeUJiO0FBRUQsc0JBQTZCLEVBQVU7SUFDckMsTUFBTSxDQUFDLENBQUM7UUFDTixHQUFHLEVBQUUsU0FBUyxDQUFDLFNBQVM7UUFDeEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxLQUFLO1FBQ3JCLEdBQUcsRUFBRSxTQUFTLENBQUMsS0FBSztRQUNwQixHQUFHLEVBQUUsU0FBUyxDQUFDLEtBQUs7UUFDcEIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxLQUFLO1FBQ3BCLEdBQUcsRUFBRSxTQUFTLENBQUMsU0FBUztRQUN4QixHQUFHLEVBQUUsU0FBUyxDQUFDLEtBQUs7UUFDcEIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxJQUFJO1FBQ25CLEdBQUcsRUFBRSxTQUFTLENBQUMsWUFBWTtRQUMzQixHQUFHLEVBQUUsU0FBUyxDQUFDLFVBQVU7UUFDekIsR0FBRyxFQUFFLFNB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