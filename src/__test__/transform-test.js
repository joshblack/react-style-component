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
  })

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


// describe('#transform', () => {
//   it('should transform declarations', () => {
//     expect(transform({ display: 'block' })).to.deep.equal([
//       {
//         rule: 'declaration',
//         selector: undefined,
//         property: 'display',
//         value: 'block'
//       }
//     ]);
//   });

//   it('should transform pseudo elements', () => {
//     const pseudoElem = { before: { content: 'foo', color: 'blue' }};

//     expect(transform(pseudoElem)).to.deep.equal([
//       {
//         rule: 'declaration',
//         selector: 'before',
//         property: 'content',
//         value: 'foo'
//       },
//       {
//         rule: 'declaration',
//         selector: 'before',
//         property: 'color',
//         value: 'blue'
//       }
//     ]);
//   });

//   it('should transform pseudo classes', () => {
//     const pseudoClass = { hover: { background: 'black' }};

//     expect(transform(pseudoClass)).to.deep.equal([
//       {
//         rule: 'declaration',
//         selector: 'hover',
//         property: 'background',
//         value: 'black'
//       }
//     ]);
//   });

//   it('should transform @media', () => {
//     const props = {
//       fontSize: {
//         rule: 'media',
//         queries: [
//           ['(min-width: 320px)', '2em'],
//           ['(min-width: 640px)', '4em']
//         ],
//         value: '1em'
//       }
//     };

//     expect(transform(props)).to.deep.equal([
//       {
//         rule: 'declaration',
//         selector: undefined,
//         property: 'font-size',
//         value: '1em'
//       },
//       {
//         rule: 'media',
//         selector: undefined,
//         query: '(min-width: 320px)',
//         property: 'font-size',
//         value: '2em'
//       },
//       {
//         rule: 'media',
//         selector: undefined,
//         query: '(min-width: 640px)',
//         property: 'font-size',
//         value: '4em'
//       }
//     ]);
//   });

//   it('should transform media rules inside of pseudo classes', () => {
//     const props = {
//       hover: {
//         background: {
//           rule: 'media',
//           queries: [
//             ['(min-width: 320px)', 'blue'],
//             ['(min-width: 640px)', 'red']
//           ],
//           value: 'black'
//         }
//       }
//     }

//     expect(transform(props)).to.deep.equal([
//       {
//         rule: 'declaration',
//         selector: 'hover',
//         property: 'background',
//         value: 'black'
//       },
//       {
//         rule: 'media',
//         selector: 'hover',
//         query: '(min-width: 320px)',
//         property: 'background',
//         value: 'blue' },
//       {
//         rule: 'media',
//         selector: 'hover',
//         query: '(min-width: 640px)',
//         property: 'background',
//         value: 'red'
//       }
//     ]);
//   });

//   // @media should throw if no default value
//   // it should throw for invalid queries in __DEV__
//   // it should hoist the default value
//   // it should support one query, or multiple queries

//   // it should throw if not a valid CSS type

//   // it should transform keyframes
//   // it should transform fontface
// });
