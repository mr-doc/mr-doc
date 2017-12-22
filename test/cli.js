// /* eslint-env node, mocha */

// const CLI = require('../src/cli/');
// const Path = require('path');
// const assert = require('chai').assert;

// describe('cli', () => {
//   describe('javascript', () => {
//     const options = {
//       source: `${Path.join(__dirname, 'fixtures/javascript/')}/*.js`,
//       cwd: process.cwd(),
//     };
//     const buffer = [];
//     it('should return a stream with two files', (done) => {
//       CLI.launch(options)
//       .then(result => {
//         result.stream
//         .on('data', (data) => {
//           buffer.push(data);
//         })
//         .on('end', () => {
//           assert.isTrue(buffer.length === 2);
//           done();
//         });
//       });
//     });
//   });
// });
