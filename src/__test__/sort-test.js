import expect from 'expect';
import sort from '../core/sort';

describe('#sort', () => {
  it('should just return the statement if it is the only one in the collection', () => {
    const input = [{ selector: '.a', block: [['display', 'block']] }];

    expect(sort(input))
      .toEqual(input);
  });

  it('should sort simple selectors before pseudo selectors', () => {
    const input = [
      { selector: '.a:hover', block: [['background', 'white']] },
      { selector: '.a', block: [['background', 'black']] },
    ];

    expect(sort(input))
      .toEqual([
          { selector: '.a', block: [['background', 'black']] },
          { selector: '.a:hover', block: [['background', 'white']] },
      ])
  });

  it('should put selectors before media queries', () => {
    const input = [
      {
        'at-rule': 'media',
        query: 'min-width: 320px',
        rulesets: [
          { selector: '.a', block: [['display', 'none']] }
        ]
      },
      { selector: '.a', block: [['display', 'block']] }
    ];

    expect(sort(input))
      .toEqual([
        { selector: '.a', block: [['display', 'block']] },
        {
          'at-rule': 'media',
          query: 'min-width: 320px',
          rulesets: [
            { selector: '.a', block: [['display', 'none']] }
          ]
        }
      ]);
  });
});
