"use strict";
function getTokenType(ch) {
    return ({
        '&': 1 /* Ampersand */,
        '=>': 3 /* Arrow */,
        ':': 4 /* Colon */,
        ',': 5 /* Comma */,
        '=': 7 /* Equal */,
        '(': 10 /* LeftParen */,
        '-': 12 /* Minus */,
        '|': 14 /* Pipe */,
        '?': 15 /* QuestionMark */,
        ')': 16 /* RightParen */,
        '@': 17 /* Tag */
    })[ch];
}
exports.getTokenType = getTokenType;
function getTokenName(type) {
    return ({
        [0 /* None */]: 'None',
        [1 /* Ampersand */]: 'Ampersand',
        [3 /* Arrow */]: 'Arrow',
        [4 /* Colon */]: 'Colon',
        [5 /* Comma */]: 'Comma',
        [6 /* Description */]: 'Description',
        [7 /* Equal */]: 'Equal',
        [8 /* Identifier */]: 'Identifier',
        [9 /* Initializer */]: 'Initializer',
        [10 /* LeftParen */]: 'LeftParen',
        [11 /* Markdown */]: 'Markdown',
        [12 /* Minus */]: 'Minus',
        [13 /* NullTerminator */]: 'NullTerminator',
        [14 /* Pipe */]: 'Pipe',
        [15 /* QuestionMark */]: 'QuestionMark',
        [16 /* RightParen */]: 'RightParen',
        [2 /* Any */]: 'Any',
        [17 /* Tag */]: 'Tag'
    })[type];
}
exports.getTokenName = getTokenName;
function getTokenCharacter(type) {
    return ({
        [0 /* None */]: '',
        [1 /* Ampersand */]: '&',
        [3 /* Arrow */]: '=>',
        [4 /* Colon */]: ':',
        [5 /* Comma */]: ',',
        [7 /* Equal */]: '=',
        [10 /* LeftParen */]: '(',
        [12 /* Minus */]: '-',
        [14 /* Pipe */]: '|',
        [15 /* QuestionMark */]: '?',
        [16 /* RightParen */]: ')',
        [17 /* Tag */]: '@'
    })[type];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5UeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVG9rZW5UeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUEwQkEsc0JBQTZCLEVBQVU7SUFDckMsTUFBTSxDQUFDLENBQUM7UUFDTixHQUFHLEVBQUUsaUJBQW1CO1FBQ3hCLElBQUksRUFBRSxhQUFlO1FBQ3JCLEdBQUcsRUFBRSxhQUFlO1FBQ3BCLEdBQUcsRUFBRSxhQUFlO1FBQ3BCLEdBQUcsRUFBRSxhQUFlO1FBQ3BCLEdBQUcsRUFBRSxrQkFBbUI7UUFDeEIsR0FBRyxFQUFFLGNBQWU7UUFDcEIsR0FBRyxFQUFFLGFBQWM7UUFDbkIsR0FBRyxFQUFFLHFCQUFzQjtRQUMzQixHQUFHLEVBQUUsbUJBQW9CO1FBQ3pCLEdBQUcsRUFBRSxZQUFhO0tBQ25CLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNULENBQUM7QUFkZSxvQkFBWSxlQWMzQixDQUFBO0FBRUQsc0JBQTZCLElBQWU7SUFDMUMsTUFBTSxDQUFDLENBQUM7UUFDTixDQUFDLFlBQWMsQ0FBQyxFQUFFLE1BQU07UUFDeEIsQ0FBQyxpQkFBbUIsQ0FBQyxFQUFFLFdBQVc7UUFDbEMsQ0FBQyxhQUFlLENBQUMsRUFBRSxPQUFPO1FBQzFCLENBQUMsYUFBZSxDQUFDLEVBQUUsT0FBTztRQUMxQixDQUFDLGFBQWUsQ0FBQyxFQUFFLE9BQU87UUFDMUIsQ0FBQyxtQkFBcUIsQ0FBQyxFQUFFLGFBQWE7UUFDdEMsQ0FBQyxhQUFlLENBQUMsRUFBRSxPQUFPO1FBQzFCLENBQUMsa0JBQW9CLENBQUMsRUFBRSxZQUFZO1FBQ3BDLENBQUMsbUJBQXFCLENBQUMsRUFBRSxhQUFhO1FBQ3RDLENBQUMsa0JBQW1CLENBQUMsRUFBRSxXQUFXO1FBQ2xDLENBQUMsaUJBQWtCLENBQUMsRUFBRSxVQUFVO1FBQ2hDLENBQUMsY0FBZSxDQUFDLEVBQUUsT0FBTztRQUMxQixDQUFDLHVCQUF3QixDQUFDLEVBQUUsZ0JBQWdCO1FBQzVDLENBQUMsYUFBYyxDQUFDLEVBQUUsTUFBTTtRQUN4QixDQUFDLHFCQUFzQixDQUFDLEVBQUUsY0FBYztRQUN4QyxDQUFDLG1CQUFvQixDQUFDLEVBQUUsWUFBWTtRQUNwQyxDQUFDLFdBQWEsQ0FBQyxFQUFFLEtBQUs7UUFDdEIsQ0FBQyxZQUFhLENBQUMsRUFBRSxLQUFLO0tBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNYLENBQUM7QUFyQmUsb0JBQVksZUFxQjNCLENBQUE7QUFFRCwyQkFBMkIsSUFBZTtJQUN4QyxNQUFNLENBQUMsQ0FBQztRQUNOLENBQUMsWUFBYyxDQUFDLEVBQUUsRUFBRTtRQUNwQixDQUFDLGlCQUFtQixDQUFDLEVBQUUsR0FBRztRQUMxQixDQUFDLGFBQWUsQ0FBQyxFQUFFLElBQUk7UUFDdkIsQ0FBQyxhQUFlLENBQUMsRUFBRSxHQUFHO1FBQ3RCLENBQUMsYUFBZSxDQUFDLEVBQUUsR0FBRztRQUN0QixDQUFDLGFBQWUsQ0FBQyxFQUFFLEdBQUc7UUFDdEIsQ0FBQyxrQkFBbUIsQ0FBQyxFQUFFLEdBQUc7UUFDMUIsQ0FBQyxjQUFlLENBQUMsRUFBRSxHQUFHO1FBQ3RCLENBQUMsYUFBYyxDQUFDLEVBQUUsR0FBRztRQUNyQixDQUFDLHFCQUFzQixDQUFDLEVBQUUsR0FBRztRQUM3QixDQUFDLG1CQUFvQixDQUFDLEVBQUUsR0FBRztRQUMzQixDQUFDLFlBQWEsQ0FBQyxFQUFFLEdBQUc7S0FDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ1gsQ0FBQyJ9