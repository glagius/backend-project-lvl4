// @ts-check
import { Model } from 'objection';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = fileURLToPath(path.dirname(import.meta.url));

export default class BaseModel extends Model {
  static get modelPaths() {
    return [__dirname];
  }
}
