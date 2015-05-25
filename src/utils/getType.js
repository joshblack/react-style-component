import isMedia from './typechecks/isMedia';
import isDeclaration from './typechecks/isDeclaration';
import isPseudoClass from './typechecks/isPseudoClass';
import isPseudoElement from './typechecks/isPseudoElement';

export default function getType(key, value) {
  const classifiers = new Map([
    [isMedia, 'media'],
    [isDeclaration, 'declaration'],
    [isPseudoClass, 'pseudoClass'],
    [isPseudoElement, 'pseudoElement']
  ]);

  for (var classifier of classifiers.keys()) {
    if (classifier(key, value))
      return classifiers.get(classifier)
  }

  throw new Error(
    `Invalid Property Type \`${key}\` on a Style Component`
  );
}
