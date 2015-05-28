import expect from 'expect';
import consolidate from '../core/consolidate';

describe('#consolidate', () => {
  // it('should consolidate rulesets with the same selector', () => {
  //   const input = [
  //     { selector: '.a', block: [['display', 'block']] },
  //     { selector: '.a', block: [['font-size', '1em']] }
  //   ];

  //   expect(consolidate(input))
  //     .toEqual([
  //       {
  //         selector: '.a',
  //         block: [['display', 'block'], ['font-size', '1em']]
  //       }
  //     ]);
  // });

  // it('should consolidate media at-rules that have identical queries', () => {
  //   const input = [
  //     {
  //       'at-rule': 'media',
  //       query: 'min-width: 320px',
  //       rulesets: [
  //         { selector: '.a', block: [['display', 'block']] }
  //       ]
  //     },
  //     {
  //       'at-rule': 'media',
  //       query: 'min-width: 320px',
  //       rulesets: [
  //         { selector: '.a:hover', block: [['font-size', '1em']] }
  //       ]
  //     }
  //   ];

  //   expect(consolidate(input))
  //     .toEqual([
  //       {
  //         'at-rule': 'media',
  //         query: 'min-width: 320px',
  //         rulesets: [
  //           { selector: '.a', block: [['display', 'block']] },
  //           { selector: '.a:hover', block: [['font-size', '1em']] }
  //         ]
  //       }
  //     ]);
  // });

  it('should consolidate rulesets with same selectors and same queries', () => {
    const input = [
      {
        'at-rule': 'media',
        query: 'min-width: 320px',
        rulesets: [
          { selector: '.a', block: [['display', 'block']] }
        ]
      },
      {
        'at-rule': 'media',
        query: 'min-width: 320px',
        rulesets: [
          { selector: '.a', block: [['font-size', '1em']] }
        ]
      }
    ];

    expect(consolidate(input))
      .toEqual([
        {
          'at-rule': 'media',
          query: 'min-width: 320px',
          rulesets: [
            {
              selector: '.a',
              block: [['display', 'block'], ['font-size', '1em']]
            }
          ]
        }
      ]);
  });
});
