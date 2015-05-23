import hyphenate from '../vendor/hyphenate';
import deepMapKeys from '../utils/deepMapKeys';
import isMedia from '../utils/typechecks/isMedia';
import isPseudo from '../utils/typechecks/isPseudo';

export default function transform(props, selector) {
  const styles = deepMapKeys(props, hyphenate);

  return Object.keys(styles).reduce((p, key) => {
    if (isPseudo(key)) {
      return p.concat(...transform(styles[key], key));
    }
    else if (isMedia(key, styles[key])) {
      const { rule, queries, value } = styles[key];

      // Lift default value
      const declaration = {
        rule: 'declaration',
        selector,
        property: key,
        value
      };

      const q = queries.reduce((p, query) => {
        const [queryString, propertyValue] = query;

        return p.concat({
          rule,
          selector,
          query: queryString,
          property: key,
          value: propertyValue
        });

      }, []);

      return p.concat(...[declaration, ...q]);
    }
    else {
      return p.concat({
        rule: 'declaration',
        selector,
        property: key,
        value: styles[key]
      });
    }
  }, []);
}
