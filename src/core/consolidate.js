export default function consolidate(styles) {
  const rulesets = styles.filter((style) => style['rule'] === 'declaration')
    .reduce((p, style) => {
      const { selector, property, value } = style;

      if (selector) {
        return !p.has(selector)
          ? (p.set(selector, [[property, value]]), p)
          : (p.get(selector).push([property, value]), p);
      }
      else {
        p.get('declarations').push([property, value]);
        return p;
      }

    }, new Map([ ['declarations', []] ]));

  const media = styles.filter((style) => style['rule'] === 'media')
    .reduce((p, style) => {
      const { selector, query, property, value } = style;

      if (!p.get(query)) {
        if (selector) {
          p.set(query, new Map([
            ['declarations', []],
            [selector, [[property, value]]]
          ]))
        }
        else {
          p.set(query, new Map([
            ['declarations', [[property, value]]]
          ]));
        }

        return p;
      }
      else {
        const declarations = p.get(query).get('declarations');
        const selectors = p.get(query).get(selector) || [];

        if (selector) {
          p.get(query).set(selector,
            selectors.concat([[property, value]]));
        }
        else {
          p.get(query).set('declarations',
            declarations.concat([[property, value]]));
        }

        return p;
      }
    }, new Map());

  return new Map([...rulesets, ...media]);
}
