import * as FS from 'fs';
import * as Path from 'path';

export default function read(file: number | string, ext?: string) {
  return FS.readFileSync(Path.resolve(__dirname, '../fixtures') + `/comments/${file}${ext ? '.' + ext : '.txt'}`, 'utf8');
}