import CommentScanner from '../scanner';
import CommentParser from '../parser';
const scanner = new CommentScanner();
scanner.source(`
 @tag id: (id: string, id2: string, id3: string) => any
`);
const parser = new CommentParser(scanner.scan());

describe('CommentParser', () => {
  it('should parse @tag id: (id: string, id2: string, id3: string) => any', () => {
    parser.parse();
  });
});