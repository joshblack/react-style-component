import pseudoClasses from './pseudo-classes';

export default function isPseudoClass(key) {
  return pseudoClasses.has(key);
}
