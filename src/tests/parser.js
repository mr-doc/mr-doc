"use strict";
const scanner_1 = require("../scanner");
const parser_1 = require("../parser");
const scanner = new scanner_1.default();
scanner.source(`
 @see {{url}}
`);
const parser = new parser_1.default(scanner.scan());
describe('CommentParser', () => {
    it('should parse @tag id: (id: string, id2: string, id3: string) => any', () => {
        parser.parse();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx3Q0FBd0M7QUFDeEMsc0NBQXNDO0FBQ3RDLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQWMsRUFBRSxDQUFDO0FBQ3JDLE9BQU8sQ0FBQyxNQUFNLENBQUM7O0NBRWQsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRWpELFFBQVEsQ0FBQyxlQUFlLEVBQUU7SUFDeEIsRUFBRSxDQUFDLHFFQUFxRSxFQUFFO1FBQ3hFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=