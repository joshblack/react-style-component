import sort from './sort';
import format from './format';
import transform from './transform';
import consolidate from './consolidate';
import generateClassName from './className';
import autoprefix from '../vendor/autoprefix';

const generate = generateClassName();

export default function getStylesFrom(props) {
  const className = generate();
  const styles =
    format(
      sort(
        consolidate(
          transform(autoprefix(props), className))));

  return { className, styles };
}

