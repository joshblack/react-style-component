import expect from 'expect';
import getStylesFrom from '../core/getStylesFrom';

describe('#getStylesFrom', () => {
  before(() => { global.__DEV__= false; });

  it('should be able to create a class for a single property definition', () => {
    expect(getStylesFrom({ display: 'block' }))
      .toEqual({
        className: 'a',
        styles: '.a{display:block;}'
      });
  });

  it('should autoprefix properties and have them returned as declarations', () => {
    expect(getStylesFrom({ transition: '0.2s all' }))
      .toEqual({
        className: 'a',
        styles: '.a{transition:0.2s all;-webkit-transition:0.2s all;-moz-transition:0.2s all;-ms-transition:0.2s all;}'
      });

    expect(getStylesFrom({ userSelect: 'none' }))
      .toEqual({
        className: 'a',
        styles: '.a{user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;}'
      });

    expect(getStylesFrom({ boxShadow: 'none' }))
      .toEqual({
        className: 'a',
        styles: '.a{box-shadow:none;-webkit-box-shadow:none;-moz-box-shadow:none;-ms-box-select:none;}'
      });

    expect(getStylesFrom({ fontSmoothing: 'antialiased' }))
      .toEqual({
        className: 'a',
        styles: '.a{font-smoothing:antialiased;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}'
      });
  });
});
