const precedence = new Map([
  ['selector', 1],
  ['psuedoClass', 2],
  ['pseudoElement', 2],
  ['media', 3]
]);

export default function sort(collection) {
  return collection.length === 1
    ? collection
    : collection.sort(compare);
}

function compare(a, b) {
  return precedence.get(type(a)) - precedence.get(type(b));
}

function type(statement) {
  const { selector } = statement;

  if (statement['at-rule']) {
    return statement['at-rule'];
  }
  else if (selector.includes(':')) {
    return 'psuedoClass'
  }
  else if (selector.includes('::')) {
    return 'pseudoElement'
  }
  else {
    return 'selector';
  }
}
