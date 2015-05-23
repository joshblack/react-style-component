import { omit } from 'lodash';
import format from './format';
import transform from './transform';
import consolidate from './consolidate';
import generateClassName from './className';

import autoprefix from '../vendor/autoprefix';

export default function getStylesFrom(props) {
  const className = generateClassName();
  const transformed = transform(autoprefix(omit(props, 'children')));
  const consolidated = consolidate(transformed);
  const styles = format(consolidated, className);

  return { className, styles };
}
