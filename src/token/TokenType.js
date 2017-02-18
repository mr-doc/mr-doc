"use strict";
function getTokenType(ch) {
    return ({
        '&': 1 /* Ampersand */,
        '=>': 2 /* Arrow */,
        ':': 3 /* Colon */,
        ',': 4 /* Comma */,
        '=': 6 /* Equal */,
        // '{': TokenType.LeftBrace,
        // '[': TokenType.LeftBracket,
        '(': 9 /* LeftParen */,
        '-': 11 /* Minus */,
        '|': 13 /* Pipe */,
        '?': 14 /* QuestionMark */,
        // '}': TokenType.RightBrace,
        // ']': TokenType.RightBracket,
        ')': 15 /* RightParen */,
        '@': 17 /* Tag */
    })[ch];
}
exports.getTokenType = getTokenType;
function getTokenName(type) {
    return ({
        [0 /* None */]: 'None',
        [1 /* Ampersand */]: 'Ampersand',
        [2 /* Arrow */]: 'Arrow',
        [3 /* Colon */]: 'Colon',
        [4 /* Comma */]: 'Comma',
        [5 /* Description */]: 'Description',
        [6 /* Equal */]: 'Equal',
        [7 /* Identifier */]: 'Identifier',
        [8 /* Initializer */]: 'Initializer',
        // LeftBrace,
        // LeftBracket,
        [9 /* LeftParen */]: 'LeftParen',
        // [TokenType.LineTerminator]: 'LineTerminator',
        [10 /* Markdown */]: 'Markdown',
        [11 /* Minus */]: 'Minus',
        [12 /* NullTerminator */]: 'NullTerminator',
        [13 /* Pipe */]: 'Pipe',
        [14 /* QuestionMark */]: 'QuestionMark',
        // RightBrace,
        // RightBracket,
        [15 /* RightParen */]: 'RightParen',
        [16 /* SpecialWord */]: 'SpecialWord',
        [17 /* Tag */]: 'Tag'
    })[type];
}
exports.getTokenName = getTokenName;
function getTokenCharacter(type) {
    return ({
        [0 /* None */]: '',
        [1 /* Ampersand */]: '&',
        [2 /* Arrow */]: '=>',
        [3 /* Colon */]: ':',
        [4 /* Comma */]: ',',
        // [TokenType.Description]: 'Description',
        [6 /* Equal */]: '=',
        // [TokenType.Identifier]: 'Identifier',
        // [TokenType.Initializer]: 'Initializer',
        // LeftBrace,
        // LeftBracket,
        [9 /* LeftParen */]: '(',
        // [TokenType.LineTerminator]: 'LineTerminator',
        // [TokenType.Markdown]: 'Markdown',
        [11 /* Minus */]: '-',
        // [TokenType.NullTerminator]: 'NullTerminator',
        [13 /* Pipe */]: '|',
        [14 /* QuestionMark */]: '?',
        // RightBrace,
        // RightBracket,
        [15 /* RightParen */]: ')',
        // [TokenType.SpecialWord]: 'SpecialWord',
        [17 /* Tag */]: '@'
    })[type];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5UeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVG9rZW5UeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUEwQkEsc0JBQTZCLEVBQVU7SUFDckMsTUFBTSxDQUFDLENBQUM7UUFDTixHQUFHLEVBQUUsaUJBQW1CO1FBQ3hCLElBQUksRUFBRSxhQUFlO1FBQ3JCLEdBQUcsRUFBRSxhQUFlO1FBQ3BCLEdBQUcsRUFBRSxhQUFlO1FBQ3BCLEdBQUcsRUFBRSxhQUFlO1FBQ3BCLDRCQUE0QjtRQUM1Qiw4QkFBOEI7UUFDOUIsR0FBRyxFQUFFLGlCQUFtQjtRQUN4QixHQUFHLEVBQUUsY0FBZTtRQUNwQixHQUFHLEVBQUUsYUFBYztRQUNuQixHQUFHLEVBQUUscUJBQXNCO1FBQzNCLDZCQUE2QjtRQUM3QiwrQkFBK0I7UUFDL0IsR0FBRyxFQUFFLG1CQUFvQjtRQUN6QixHQUFHLEVBQUUsWUFBYTtLQUNuQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDVCxDQUFDO0FBbEJELG9DQWtCQztBQUVELHNCQUE2QixJQUFlO0lBQzFDLE1BQU0sQ0FBQyxDQUFDO1FBQ04sQ0FBQyxZQUFjLENBQUMsRUFBRSxNQUFNO1FBQ3hCLENBQUMsaUJBQW1CLENBQUMsRUFBRSxXQUFXO1FBQ2xDLENBQUMsYUFBZSxDQUFDLEVBQUUsT0FBTztRQUMxQixDQUFDLGFBQWUsQ0FBQyxFQUFFLE9BQU87UUFDMUIsQ0FBQyxhQUFlLENBQUMsRUFBRSxPQUFPO1FBQzFCLENBQUMsbUJBQXFCLENBQUMsRUFBRSxhQUFhO1FBQ3RDLENBQUMsYUFBZSxDQUFDLEVBQUUsT0FBTztRQUMxQixDQUFDLGtCQUFvQixDQUFDLEVBQUUsWUFBWTtRQUNwQyxDQUFDLG1CQUFxQixDQUFDLEVBQUUsYUFBYTtRQUN0QyxhQUFhO1FBQ2IsZUFBZTtRQUNmLENBQUMsaUJBQW1CLENBQUMsRUFBRSxXQUFXO1FBQ2xDLGdEQUFnRDtRQUNoRCxDQUFDLGlCQUFrQixDQUFDLEVBQUUsVUFBVTtRQUNoQyxDQUFDLGNBQWUsQ0FBQyxFQUFFLE9BQU87UUFDMUIsQ0FBQyx1QkFBd0IsQ0FBQyxFQUFFLGdCQUFnQjtRQUM1QyxDQUFDLGFBQWMsQ0FBQyxFQUFFLE1BQU07UUFDeEIsQ0FBQyxxQkFBc0IsQ0FBQyxFQUFFLGNBQWM7UUFDeEMsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixDQUFDLG1CQUFvQixDQUFDLEVBQUUsWUFBWTtRQUNwQyxDQUFDLG9CQUFxQixDQUFDLEVBQUUsYUFBYTtRQUN0QyxDQUFDLFlBQWEsQ0FBQyxFQUFFLEtBQUs7S0FDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQTFCRCxvQ0EwQkM7QUFFRCwyQkFBMkIsSUFBZTtJQUN4QyxNQUFNLENBQUMsQ0FBQztRQUNOLENBQUMsWUFBYyxDQUFDLEVBQUUsRUFBRTtRQUNwQixDQUFDLGlCQUFtQixDQUFDLEVBQUUsR0FBRztRQUMxQixDQUFDLGFBQWUsQ0FBQyxFQUFFLElBQUk7UUFDdkIsQ0FBQyxhQUFlLENBQUMsRUFBRSxHQUFHO1FBQ3RCLENBQUMsYUFBZSxDQUFDLEVBQUUsR0FBRztRQUN0QiwwQ0FBMEM7UUFDMUMsQ0FBQyxhQUFlLENBQUMsRUFBRSxHQUFHO1FBQ3RCLHdDQUF3QztRQUN4QywwQ0FBMEM7UUFDMUMsYUFBYTtRQUNiLGVBQWU7UUFDZixDQUFDLGlCQUFtQixDQUFDLEVBQUUsR0FBRztRQUMxQixnREFBZ0Q7UUFDaEQsb0NBQW9DO1FBQ3BDLENBQUMsY0FBZSxDQUFDLEVBQUUsR0FBRztRQUN0QixnREFBZ0Q7UUFDaEQsQ0FBQyxhQUFjLENBQUMsRUFBRSxHQUFHO1FBQ3JCLENBQUMscUJBQXNCLENBQUMsRUFBRSxHQUFHO1FBQzdCLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsQ0FBQyxtQkFBb0IsQ0FBQyxFQUFFLEdBQUc7UUFDM0IsMENBQTBDO1FBQzFDLENBQUMsWUFBYSxDQUFDLEVBQUUsR0FBRztLQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDWCxDQUFDIn0=