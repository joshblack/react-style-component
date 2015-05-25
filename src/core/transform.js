import getType from '../utils/getType';
import hyphenate from '../vendor/hyphenate';
import invariant from '../vendor/invariant';
import deepMapKeys from '../utils/deepMapKeys';
import { pairs } from 'lodash';

function declaration(key, value) {
  return [key, value];
}

function block(...declarations) {
  return [...declarations];
}

function ruleset(selector, block) {
  return { selector, block };
}

const classifiers = {
  declaration,
  pseudoClass(keyword, declarations, className) {
    return ruleset(`${className}:${keyword}`, pairs(declarations));
  },
  pseudoElement(keyword, declarations, className) {
    return ruleset(`${className}::${keyword}`, pairs(declarations));
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
      key
    );

    return p.concat([classifier(key, properties[key], className)]);
  }, []);
}



// export default function transform(props, selector) {
//   const styles = deepMapKeys(props, hyphenate);

//   return Object.keys(styles).reduce((p, key) => {
//     if (isPseudo(key)) {
//       return p.concat(...transform(styles[key], key));
//     }
//     else if (isMedia(key, styles[key])) {
//       const { rule, queries, value } = styles[key];

//       // Lift default value
//       const declaration = {
//         rule: 'declaration',
//         selector,
//         property: key,
//         value
//       };

//       const q = queries.reduce((p, query) => {
//         const [queryString, propertyValue] = query;

//         return p.concat({
//           rule,
//           selector,
//           query: queryString,
//           property: key,
//           value: propertyValue
//         });

//       }, []);

//       return p.concat(...[declaration, ...q]);
//     }
//     else {
//       return p.concat({
//         rule: 'declaration',
//         selector,
//         property: key,
//         value: styles[key]
//       });
//     }
//   }, []);
// }
