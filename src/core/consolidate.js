import { merge, isArray } from 'lodash';

export default function consolidate(statements) {
  const reduced = statements.reduce((p, s) => {
    const identity = identifier(s);

    return p.has(identity)
      ? p.set(identity, join(p.get(identity), s))
      : p.set(identity, s)
  }, new Map());

  return values(reduced);
}

function values(map) {
  const a = Array(map.size);
  let i = 0;

  for (let value of map.values()) {
    a[i++] = value;
  }

  return a;
}

function identifier(statement) {
  return statement['selector'] || statement['query'];
}

function join(first, second) {
  if (first['at-rule']) {
    const rulesets = consolidate(first['rulesets'].concat(second['rulesets']));

    return { ...first, ...second, rulesets };
  }

  return merge(first, second, (a, b) => {
    if (isArray(a)) {
      return a.concat(b)
    }
  });
}
