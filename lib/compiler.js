import _ from 'lodash';
import jade from 'jade';
import fs from 'fs';
import path from 'path';

/**
 * @class Compiler
 * @description The class that compiles the jade template.
 */
export default class Compiler {
	constructor (parser) {
		this.options = parser.options;
		this.files = parser.files;
		this.setup();
	}
	/**
	 * @description Compiles the docs.
	 * @param  {Object} locals local variable object
	 * @jsFiddle http://jsfiddle.net/4L6Br/embedded/
	 * @return {String} rendered content
	 */
	compile (locals) {
		var { path } = this.options.template;
	  return jade.compile(this.template, {
	    pretty: true,
	    filename: path
	  })(locals);
	}
	/**
	 * 
	 */
	setup() {
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
		 * @return {String}
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