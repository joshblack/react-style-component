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
      .toBe('<div data-reactid=".0" data-react-checksum="-2045695338"><style data-reactid=".0.0">.a{display:block;}</style><h1 class="a" data-reactid=".0.1:$=10:0">Hello</h1></div>');
  });

  it('should pass in styles to children style components', () => {
    expect(renderToString(
      <Style display="block"><Style background="black"><div/></Style></Style>))
      .toBe('<div data-reactid=".1" data-react-checksum="1927098507"><style data-reactid=".1.0">.a{background:black;display:block;}</style><div class="a" data-reactid=".1.1:$=10:0"></div></div>');
  });

  // it('should pass in styles to children of components that extend Style', () => {});
});
