import getType from '../utils/getType';
import hyphenate from '../vendor/hyphenate';
import invariant from '../vendor/invariant';
import deepMapKeys from '../utils/deepMapKeys';

function ruleset(selector, block) {
  return { selector, block };
}

function media(query, ...rulesets) {
  return { 'at-rule': 'media', query, rulesets };
}

const classifiers = {
  declaration(property, value, className) {
    return ruleset(`.${className}`, [[property, value]]);
  },
  pseudoClass(keyword, declarations, className) {
    return transform(declarations, `${className}:${keyword}`);
  },
  pseudoElement(keyword, declarations, className) {
    return transform(declarations, `${className}::${keyword}`);
  },
  media: function(property, queries, className) {
    return Object.keys(queries).reduce((p, query) => {
      const rs = ruleset(`.${className}`, [[property, queries[query]]]);
      const rule = (query !== 'default') ? media(query, rs) : rs;

      return p.concat(rule);
    }, []);
  }
};

export default function transform(props, className) {
  const properties = deepMapKeys(props, hyphenate);

  return Object.keys(properties).reduce((p, key) => {
    const type = getType(key, properties[key]),
          classifier = classifiers[type];

    invariant(classifier, 'Currently unsupported CSS feature: %s', type);

    return p.concat(classifier(key, properties[key], className));
  }, []);
}
