const shell = require('shelljs');

if (!shell.which('tsc')) {
  shell.echo('Please install TypeScript before running');
  shell.exit(1);
}

if (!shell.which('antlr4ts')) {
  shell.echo('Please install antlr4-ts globally');
  shell.exit(1);
}


// Generate the lexer and parser using the grammars
shell.echo('[mr-doc]: Generating the lexer and parser...');
if (shell.exec('cd src/tom/grammar/ && antlr4ts -visitor *.g4 && mv *.ts *.tokens ../').code !== 0) {
  shell.echo('An error occurred while generating the lexer and parser.')
  shell.exit(1);
}

// Modify the lexer
shell.echo('[mr-doc]: Modifying the generated files...');
shell.sed('-i', /getText\(\)/g, 'this.text', 'src/tom/TomLexer.ts');
shell.sed('-i', /setType\(BooleanLiteral\)/g, 'this.type = TomLexer.BooleanLiteral', 'src/tom/TomLexer.ts');
shell.sed('-i', /setType\(NullLiteral\)/g, 'this.type = TomLexer.NullLiteral', 'src/tom/TomLexer.ts');

// Modify the parser
shell.sed('-i', /@RuleVersion\(0\)/g, '', 'src/tom/TomParser.ts');

// Compile the Typescript files
shell.echo('[mr-doc]: Building TypeScript files...');
if (shell.exec('tsc').code !== 0) {
  shell.exec('An error occurred while building the TypeScript source.')
  shell.exit(1);
}


// Complete!
shell.echo('[mr-doc]: Done.');