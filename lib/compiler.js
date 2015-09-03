import _ from 'lodash';
import jade from 'jade';
import fs from 'fs';
import path from 'path';

/**
 * The class that compiles the Jade template.
 * @class Compiler
 */
 class Compiler {
	constructor (parser) {
		/**
		 * Gets the options from the parser.
		 * @type {object}
		 */
		this.options = parser.options;
		/**
		 * Gets the parsed files from the parser
		 * @type {Array}
		 */
		this.files = parser.files;
		// Set up the compiler
		this.setup();
	}
	/**
	 * Compiles the docs.
	 * @param  {Object} locals local variable object
	 * @jsFiddle http://jsfiddle.net/4L6Br/embedded/
	 * @returns {String} rendered content
	 */
	compile (locals) {
		// Get the path (alias for filename)
		var { path } = this.options.template;
		// Return the compiled template
	  return this.jade.compile(this.template, {
	    pretty: true,
	    filename: path
	  })(locals);
	}
	/**
	 * Sets up the compiler by initializing jade,
	 * the template, and the filters for jade.
	 */
	setup() {
		/**
		 * Jade used to compile the documentation
		 * @type {Jade} Jade compiler
		 */
		this.jade = jade;
		/**
		 * Template used to produce the documentation
		 * @type {String} template string
		 */
		this.template = fs.readFileSync(path.resolve(
			__dirname, this.options.template.path)).toString();
		/**
		 * Jade support for filter `:code`
		 * @param  {String} block
		 * @returns {String}
		 */
		this.jade.filters.code = function(block) {
		 return block.replace( /&/g, '&amp;'  )
		  .replace( /</g, '&lt;'   )
		  .replace( />/g, '&gt;'   )
		  .replace( /"/g, '&quot;' )
		  .replace( /#/g, '&#35;'  )
		  .replace( /\\/g, '\\\\'  )
		  .replace( /\n/g, '\\n'   );
		};
	}
}

export default Compiler;