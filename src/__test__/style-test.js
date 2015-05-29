import expect from 'expect';
import React from 'react/addons';
import 'core-js';
import Style from '../Style';

const { addons, Children, render } = React;
const { TestUtils } = addons;

describe('Style', () => {
  before(() => { global.React = React });

  it('should be a React Element', () => {
    expect(TestUtils.isElement(<Style/>)).toEqual(true);
  });

  it('should render a basic declaration', () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Style display="block"><h1>Hello</h1></Style>);
    const result = shallowRenderer.getRenderOutput();

    expect(result.props.children[0]).toEqual(
      <style dangerouslySetInnerHTML={{ __html: '.a{display:block;}' }} />
    );
  });
});
