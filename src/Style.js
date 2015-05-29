import { Children, cloneElement } from 'react';
import { isFunction, omit } from 'lodash';
import getStylesFrom from './core/getStylesFrom';

export default class Style {
  render () {
    const props = Object.assign({}, omit(this.props, 'children'));

    if (Children.count(this.props.children) === 1) {
      const child = Children.only(this.props.children);

      if (isFunction(child.type) && new child.type() instanceof Style) {
        return cloneElement(child, { ...props });
      }
    }

    const { styles, className } = getStylesFrom(props);

    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        {
          Children.map(this.props.children,
            (child) => cloneElement(child, { className }))
        }
      </div>
    );
  }
}
