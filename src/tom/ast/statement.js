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
//# sourceMappingURL=statement.js.map