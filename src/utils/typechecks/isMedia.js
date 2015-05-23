import isDeclaration from './isDeclaration';
import { isPlainObject } from 'lodash';

export default function isMedia(key, value) {
  return isDeclaration(key) && isPlainObject(value);
}
