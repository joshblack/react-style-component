import expect from 'expect';
import React from 'react/addons';
import 'core-js';
import Style from '../Style';

const { addons, render } = React;
const { TestUtils } = addons;

describe('Style', () => {
  it('should be a React Element', () => {
    expect(TestUtils.isElement(<Style/>)).toEqual(true);
  });

  // it('should apply no styles when passed in no styles as props', () => {
  //   class Hello {
  //     render() {
  //       return <Style><h1>Hello World</h1></Style>;
  //     }
  //   }

  //   const shallowRenderer = TestUtils.createRenderer();
  //   shallowRenderer.render(<Style><h1 /></Style>);
  //   const result = shallowRenderer.getRenderOutput();

  //   console.log(result);
  // });

});
