import declarations from './declarations';
import { isPlainObject } from 'lodash';

export default function isDeclaration(key, value) {
  return declarations.has(key) && !isPlainObject(value);
}
