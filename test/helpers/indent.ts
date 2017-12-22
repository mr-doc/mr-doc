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
export default function indent(str: string, indents: number, opt_spacesPerIndent?: number) {
  str = str.replace(/^(?=.)/gm, new Array(indents + 1).join('\t'));
  const indented = (new Array(opt_spacesPerIndent + 1 || 0)).join(' '); // re-use
  return opt_spacesPerIndent ? str.replace(/^\t+/g, tabs => tabs.replace(/./g, indented)) : str;
}