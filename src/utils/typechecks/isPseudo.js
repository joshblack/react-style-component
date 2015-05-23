import isPseudoClass from './isPseudoClass';
import isPseudoElement from './isPseudoElement';

export default function isPseudo(key) {
  return isPseudoClass(key) || isPseudoElement(key);
}
