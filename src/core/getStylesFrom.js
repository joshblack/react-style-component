import format from './format';
import transform from './transform';
import consolidate from './consolidate';
import validate from './validate';
import generateClassName from './className';
import autoprefix from '../vendor/autoprefix';

export default function getStylesFrom(props) {
  const className = generateClassName();
  const styles = __DEV__ ? autoprefix(validate(props)) : autoprefix(props);
  const transformed = transform(styles);
  const consolidated = consolidate(transformed);

  return { className, styles: format(consolidated, className) };
}
