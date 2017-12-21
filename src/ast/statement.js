"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Statement {
}
exports.Statement = Statement;
class DescriptionStatement extends Statement {
    constructor(description) {
        super();
        this.description = description;
    }
    accept(visitor) {
        return visitor.visitDescription(this);
    }
}
exports.DescriptionStatement = DescriptionStatement;
class MarkdownStatement extends Statement {
    constructor(markdown) {
        super();
        this.markdown = markdown;
    }
    accept(visitor) {
        return visitor.visitMarkdown(this);
    }
}
exports.MarkdownStatement = MarkdownStatement;
class TagStatement extends Statement {
    constructor(tag, parameter, description) {
        super();
        this.tag = tag;
        this.parameter = parameter;
        this.description = description;
    }
    accept(visitor) {
        return visitor.visitTagStatement(this);
    }
}
exports.TagStatement = TagStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGVtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUE7Q0FFQztBQUZELDhCQUVDO0FBRUQsMEJBQWtDLFNBQVEsU0FBUztJQUVqRCxZQUFtQixXQUFrQjtRQUNuQyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2pDLENBQUM7SUFDTSxNQUFNLENBQUksT0FBNEI7UUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0Y7QUFURCxvREFTQztBQUVELHVCQUErQixTQUFRLFNBQVM7SUFFOUMsWUFBWSxRQUFlO1FBQ3pCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUNNLE1BQU0sQ0FBSSxPQUE0QjtRQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBQ0Y7QUFURCw4Q0FTQztBQUVELGtCQUEwQixTQUFRLFNBQVM7SUFJekMsWUFBWSxHQUFVLEVBQUUsU0FBZ0MsRUFBRSxXQUFrQztRQUMxRixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUNNLE1BQU0sQ0FBSSxPQUE0QjtRQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRjtBQWJELG9DQWFDIn0=