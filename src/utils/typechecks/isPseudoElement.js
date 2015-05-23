import pseudoElements from './pseudo-elements';

export default function isPseudoElement(key) {
  return pseudoElements.has(key);
}
