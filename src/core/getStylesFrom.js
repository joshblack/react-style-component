import format from './format';
import transform from './transform';
import consolidate from './consolidate';
import generateClassName from './className';
import autoprefix from '../vendor/autoprefix';

export default function getStylesFrom(props) {
  const className = generateClassName();
  const styles = format(consolidate(transform(autoprefix(props), className)));

  return { className, styles };
}

