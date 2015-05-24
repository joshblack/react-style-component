import { Children, cloneElement } from 'react';
import getStylesFrom from './core/getStylesFrom';

export default class Style {
  render () {
    const props = Object.assign({}, this.props);
    const { styles, className } = getStylesFrom(props);

    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        {
          Children.map(
            this.props.children,
            (child) => cloneElement(child, { className }))
        }
      </div>
    );
  }
}
