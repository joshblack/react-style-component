import expect from 'expect';
import React from 'react/addons';
import 'core-js';
import Style from '../Style';

const { addons, Children, render, renderToString } = React;
const { TestUtils } = addons;

describe('Style', () => {
  before(() => { global.React = React; });

  it('should be a React Element', () => {
    expect(TestUtils.isElement(<Style/>)).toEqual(true);
  });

  it('should render a basic declaration', () => {
    expect(renderToString(<Style display="block"><h1>Hello</h1></Style>))
      .toBe('<div data-reactid=".0" data-react-checksum="-2028918118"><style data-reactid=".0.0">.c{display:block;}</style><h1 class="c" data-reactid=".0.1:$=10:0">Hello</h1></div>');
  });

  it('should pass in styles to children style components', () => {
    expect(renderToString(
      <Style display="block"><Style background="black"><div/></Style></Style>))
      .toBe('<div data-reactid=".1" data-react-checksum="1954230417"><style data-reactid=".1.0">.d{background:black;display:block;}</style><div class="d" data-reactid=".1.1:$=10:0"></div></div>');
  });

  it('should pass in styles to children of components that use Style', () => {
    class Block extends Style {
      constructor(props) {
        super({ display: 'block', ...props });
      }
    }

    expect(renderToString(<Block display="block"><div/></Block>))
      .toBe('<div data-reactid=".2" data-react-checksum="471935492\"><style data-reactid=".2.0">.e{display:block;}</style><div class="e" data-reactid=".2.1:$=10:0"></div></div>');

    expect(renderToString(<Block display="block"><Style background="black"><div/></Style></Block>))
      .toBe('<div data-reactid=".3" data-react-checksum="2005479579"><style data-reactid=".3.0">.f{background:black;display:block;}</style><div class="f" data-reactid=".3.1:$=10:0"></div></div>');
  });
});
