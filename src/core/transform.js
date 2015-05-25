import getType from '../utils/getType';
import hyphenate from '../vendor/hyphenate';
import invariant from '../vendor/invariant';
import deepMapKeys from '../utils/deepMapKeys';
import { pairs, pick } from 'lodash';

function ruleset(selector, block) {
  return { selector, block };
}

function Media(query, ...rulesets) {
  return { 'at-rule': 'media', query, rulesets };
}

const classifiers = {
  declaration(property, value, className) {
    return ruleset(`.${className}`, [[property, value]]);
  },
  pseudoClass(keyword, declarations, className) {
    return ruleset(`.${className}:${keyword}`, pairs(declarations));
  },
  pseudoElement(keyword, declarations, className) {
    return ruleset(`.${className}::${keyword}`, pairs(declarations));
  },
  media(property, queries, className) {
    return Object.keys(queries).reduce((p, query) => {
      const rs = ruleset(`.${className}`, [[property, queries[query]]]);
      const rule = (query !== 'default') ? Media(query, rs) : rs;

      return p.concat(rule);
    }, []);
  }
};

export default function transform(props, className) {
  const properties = deepMapKeys(props, hyphenate);

  return Object.keys(properties).reduce((p, key) => {
    const type = getType(key, properties[key]),
          classifier = classifiers[type];

    invariant(
      classifier,
      'Currently unsupported CSS feature: %s',
      type
    );

    return p.concat(classifier(key, properties[key], className));
  }, []);
}
