import isPseudo from '../utils/typechecks/isPseudo';
import getType from '../utils/getType';

// styles: Map<Declarations, Pseudo, Media>
// className: string
export default function format(styles, className) {
  let str = '';

  if (!styles) {
    return ruleset(selector(`.${className}`), block());
  }

  for (let [key, value] of styles.entries()) {
    if (key === 'declarations') {
      const wrapper = wrap(className);

      value = value.map((v) => {
        const [property, value] = v;

        return `\t${property}: ${value};`;
      });

      str = str + wrapper(value.join('\n'))
    }
    else if (isPseudo(key)) {
      const wrapper = wrap(className, key);

      value = value.map((v) => {
        const [property, value] = v;

        return `\t${property}: ${value};`;
      });

      str = str + wrapper(value.join('\n'))
    }
    else {
      const wrapper = media(key);
      let inner = '';

      for (let [key, values] of value.entries()) {

        const wrapper = key === 'declarations'
          ? wrap(className)
          : wrap(className, key);

        if (values.length !== 0) {
          values = values.map((v) => {
            const [property, value] = v;

            return `\t${property}: ${value};`;
          });

          inner = inner + wrapper(values.join('\n'))
        }
      }

      str = str + wrapper(inner);
    }
  }

  return str;
}

function ruleset(selector, block) {
  return __DEV__
    ? `\n${selector} ${block}\n`
    : `${selector}${block}`
}

function selector(...selectors) {
  return selectors.join('');
}

function block(...declarations) {
  return __DEV__
    ? `{\n${declarations.join('\n')}\n}`
    : `{${declarations.join('')}}`;
}

function media(query) {
  return function inner(content) {
    return `\n@media ${query} {\n${content}\n}\n`;
  }
}

function wrap(className, selector) {
  const s = selector
    ? Selector(getType(selector), selector)
    : undefined;

  return function wrapContent(content) {
    return s
      ? `\n.${className}${s} {\n${content}\n}\n`
      : `\n.${className} {\n${content}\n}\n`;
  }
}

function Selector(type, keyword) {
  return type === 'pseudoClass' ? `:${keyword}` : `::${keyword}`;
}
