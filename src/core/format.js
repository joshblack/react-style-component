import cssbeautify from 'cssbeautify';

export default function format(statements) {
  const formatted = statements.reduce(
    (p, statement) => join(p, print(statement)), '');

  return __DEV__ ? cssbeautify(formatted) : formatted;
}

function join(...strings) {
  return strings.join('');
}

function print(statement) {
  const printers = {
    selector() {
      return ruleset(statement['selector'], statement['block'])
    },
    media: function () {
      return media(statement);
    }
  }

  return printers[type(statement)]();
}

function type(statement) {
  if (statement['selector']) {
    return 'selector';
  }
  else if (statement['at-rule'] === 'media') {
    return 'media';
  }
  else {
    throw new Error('Invalid statement type.');
  }
}

function media(statement) {
  const { query, rulesets } = statement;

  return join('@media', query, '{', format(rulesets), '}');
}

function ruleset(selector, declarations) {
  return join(selector, block(declarations));
}

function block(declarations) {
  return join(
    '{',
    declarations.reduce(
      (p, d) => join(p, `${d[0]}:${d[1]};`), ''),
    '}'
  );
}
