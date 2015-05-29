import expect from 'expect';
import transform from '../core/transform';
import autoprefix from '../vendor/autoprefix';

describe('#transform', () => {
  before(() => { global.__DEV__ = true });

  it('should return a ruleset from a property', () => {
    const input = { display: 'block' };

    expect(transform(input, 'a'))
      .toEqual([
        {
          selector: '.a',
          block: [['display', 'block']]
        }
      ]);
  });

  it('should return a ruleset from a pseudo class', () => {
    const input = { hover: { background: 'black' } };

    expect(transform(input, 'a'))
      .toEqual([
        {
          selector: '.a:hover',
          block: [['background', 'black']]
        }
      ]);
  });

  it('should return a ruleset from a pseudo element', () => {
    const input = { before: { content: '' } };

    expect(transform(input, 'a'))
      .toEqual([
        {
          selector: '.a::before',
          block: [['content', '']]
        }
      ]);
  });

  it('should return a statement from a media query', () => {
    const input = { fontSize: { 'min-width: 320px': '2em', default: '1em' } };

    expect(transform(input, 'a'))
      .toEqual([
        {
          'at-rule': 'media',
          query: 'min-width: 320px',
          rulesets: [
            { selector: '.a', block: [['font-size', '2em']] }
          ]
        },
        {
          selector: '.a',
          block: [['font-size', '1em']]
        }
      ]);
  });

  it('should support a media query in a pseudo class', () => {
    const input = {
      hover: {
        fontSize: { 'min-width: 320px': '2em', default: '1em'}
      }
    };

    expect(transform(input, 'a'))
      .toEqual([
        {
          'at-rule': 'media',
          query: 'min-width: 320px',
          rulesets: [
            { selector: '.a:hover', block: [['font-size', '2em']] }
          ]
        },
        {
          selector: '.a:hover',
          block: [['font-size', '1em']]
        }
      ]);
  });

  it('should support a media query in a pseudo element', () => {
    const input = {
      before: {
        fontSize: { 'min-width: 320px': '2em', default: '1em' }
      }
    };

    expect(transform(input, 'a'))
      .toEqual([
        {
          'at-rule': 'media',
          query: 'min-width: 320px',
          rulesets: [
            { selector: '.a::before', block: [['font-size', '2em']] }
          ]
        },
        {
          selector: '.a::before',
          block: [['font-size', '1em']]
        }
      ]);
  });

  it('should hyphenate property values that should be hyphenated', () => {
    const input = { fontSize: '1em' };

    expect(transform(input, 'a'))
      .toEqual([
        {
          selector: '.a',
          block: [['font-size', '1em']]
        }
      ]);
  });

  it('should throw for invalid properties on the component', () => {
    const input = { foo: 'bar' };

    expect(() => transform(input))
      .toThrow(/Invalid Property Type `foo` on a Style Component/);
  });
});
