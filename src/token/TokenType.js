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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5UeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVG9rZW5UeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFLLFNBd0JKO0FBeEJELFdBQUssU0FBUztJQUNaLHlDQUFRLENBQUE7SUFDUixtREFBUyxDQUFBO0lBQ1QsdUNBQUcsQ0FBQTtJQUNILDJDQUFLLENBQUE7SUFDTCwyQ0FBSyxDQUFBO0lBQ0wsMkNBQUssQ0FBQTtJQUNMLHVEQUFXLENBQUE7SUFDWCwyQ0FBSyxDQUFBO0lBQ0wscURBQVUsQ0FBQTtJQUNWLHVEQUFXLENBQUE7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLG9EQUFTLENBQUE7SUFDVCw4REFBYyxDQUFBO0lBQ2Qsa0RBQVEsQ0FBQTtJQUNSLDRDQUFLLENBQUE7SUFDTCw4REFBYyxDQUFBO0lBQ2QsMENBQUksQ0FBQTtJQUNKLDBEQUFZLENBQUE7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHNEQUFVLENBQUE7SUFDVix3Q0FBRyxDQUFBO0FBQ0wsQ0FBQyxFQXhCSSxTQUFTLEtBQVQsU0FBUyxRQXdCYjtBQUVELHNCQUE2QixFQUFVO0lBQ3JDLE1BQU0sQ0FBQyxDQUFDO1FBQ04sR0FBRyxFQUFFLFNBQVMsQ0FBQyxTQUFTO1FBQ3hCLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSztRQUNyQixHQUFHLEVBQUUsU0FBUyxDQUFDLEtBQUs7UUFDcEIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxLQUFLO1FBQ3BCLEdBQUcsRUFBRSxTQUFTLENBQUMsS0FBSztRQUNwQixHQUFHLEVBQUUsU0FBUyxDQUFDLFNBQVM7UUFDeEIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxLQUFLO1FBQ3BCLEdBQUcsRUFBRSxTQUFTLENBQUMsSUFBSTtRQUNuQixHQUFHLEVBQUUsU0FBUyxDQUFDLFlBQVk7UUFDM0IsR0FBRyxFQUFFLFNBQVMsQ0FBQyxVQUFVO1FBQ3pCLEdBQUcsRUFBRSxTQUFTLENBQUMsR0FBRztRQUNsQixJQUFJLEVBQUUsU0FBUyxDQUFDLGNBQWM7S0FDL0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ1QsQ0FBQztBQWZELG9DQWVDO0FBRUQsc0JBQTZCLElBQWU7SUFDMUMsTUFBTSxDQUFDLENBQUM7UUFDTixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNO1FBQ3hCLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFdBQVc7UUFDbEMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTztRQUMxQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPO1FBQzFCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU87UUFDMUIsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsYUFBYTtRQUN0QyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPO1FBQzFCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFlBQVk7UUFDcEMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsYUFBYTtRQUN0QyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxXQUFXO1FBQ2xDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLFVBQVU7UUFDaEMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTztRQUMxQixDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBRSxnQkFBZ0I7UUFDNUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTTtRQUN4QixDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxjQUFjO1FBQ3hDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFlBQVk7UUFDcEMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSztRQUN0QixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLO0tBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNYLENBQUM7QUFyQkQsb0NBcUJDO0FBRUQsMkJBQTJCLElBQWU7SUFDeEMsTUFBTSxDQUFDLENBQUM7UUFDTixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ3BCLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUc7UUFDMUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSTtRQUN2QixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHO1FBQ3RCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUc7UUFDdEIsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRztRQUN0QixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHO1FBQzFCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUc7UUFDdEIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRztRQUNyQixDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHO1FBQzdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUc7UUFDM0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRztLQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDWCxDQUFDOztBQUVELGtCQUFlLFNBQVMsQ0FBQyJ9