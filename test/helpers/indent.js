"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Indents the given string
 * @param {string} str  The string to be indented.
 * @param {number} indents  The amount of indentations to place at the
 *     beginning of each line of the string.
 * @param {number=} opt_spacesPerIndent  Optional.  If specified, this should be
 *     the number of spaces to be used for each tab that would ordinarily be
 *     used to indent the text.  These amount of spaces will also be used to
 *     replace any tab characters that already exist within the string.
 * @return {string}  The new string with each line beginning with the desired
 *     amount of indentation.
 */
function indent(str, indents, opt_spacesPerIndent) {
    str = str.replace(/^(?=.)/gm, new Array(indents + 1).join('\t'));
    const indented = (new Array(opt_spacesPerIndent + 1 || 0)).join(' '); // re-use
    return opt_spacesPerIndent ? str.replace(/^\t+/g, tabs => tabs.replace(/./g, indented)) : str;
}
exports.default = indent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5kZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxnQkFBK0IsR0FBVyxFQUFFLE9BQWUsRUFBRSxtQkFBNEI7SUFDdkYsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRSxNQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLG1CQUFtQixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVM7SUFDL0UsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUNoRyxDQUFDO0FBSkQseUJBSUMifQ==