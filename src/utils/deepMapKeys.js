import { isPlainObject } from 'lodash';

/**
 * Deep map the keys of an object. The keys of the object will be passed into
 * the given function and will be reassigned according to the function's result.
 *
 * @param  {Object}
 * @param  {Function}
 * @return {Object}
 */
export default function deepMapKeys(obj, fn) {
  return Object.keys(obj).reduce((p, key) => {
    return isPlainObject(obj[key])
      ? { ...p, [fn(key)]: deepMapKeys(obj[key], fn) }
      : { ...p, [fn(key)]: obj[key] };
  }, {});
}
