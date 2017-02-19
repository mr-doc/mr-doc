"use strict";
const Parser_1 = require("./Parser");
const token_1 = require("../token");
class CommentParser extends Parser_1.default {
    parse() {
        return null;
    }
    parseComment() {
    }
    parseSingleComment() {
    }
    parseDeclaration() {
    }
    parseTypeDeclaration() {
    }
    parseInitializer() {
    }
    parseType() {
    }
    parseOptionalType() {
    }
    parseAnyType() {
    }
    parseUnionType() {
    }
    parseIntersectionType() {
    }
    parseArrowFunction() {
    }
    accept(type) {
        if (type) {
            if (this.current().type === type) {
                this.next();
            }
            else {
                console.log(`warn: expected a token type of ${token_1.getTokenName(type)}`);
            }
        }
        else {
            this.next();
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUNBQThCO0FBQzlCLG9DQUEwRDtBQWdCMUQsbUJBQW9CLFNBQVEsZ0JBQU07SUFDaEMsS0FBSztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ08sWUFBWTtJQUVwQixDQUFDO0lBQ08sa0JBQWtCO0lBRTFCLENBQUM7SUFDTyxnQkFBZ0I7SUFFeEIsQ0FBQztJQUNPLG9CQUFvQjtJQUU1QixDQUFDO0lBQ08sZ0JBQWdCO0lBRXhCLENBQUM7SUFDTyxTQUFTO0lBRWpCLENBQUM7SUFDTyxpQkFBaUI7SUFFekIsQ0FBQztJQUNPLFlBQVk7SUFFcEIsQ0FBQztJQUNPLGNBQWM7SUFFdEIsQ0FBQztJQUNPLHFCQUFxQjtJQUU3QixDQUFDO0lBQ08sa0JBQWtCO0lBRTFCLENBQUM7SUFFTyxNQUFNLENBQUMsSUFBZ0I7UUFDN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNULEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2QsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLG9CQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3RFLENBQUM7UUFDSCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFBQyxDQUFDO0lBQ3pCLENBQUM7Q0FDRiJ9