import expect from 'expect';
import format from '../core/format';

describe('#format', () => {
  describe('production', () => {
    before(() => { global.__DEV__ = false; });

    it('should print a selector with its block', () => {
      const input = [{ selector: '.a', block: [['display', 'block']] }];

      expect(format(input))
        .toEqual('.a{display:block;}');
    });

    it('should print multiple selectors right after each other', () => {
      const input = [
        { selector: '.a', block: [['display', 'block']] },
        { selector: '.b', block: [['display', 'block']] }
      ];

      expect(format(input))
        .toEqual('.a{display:block;}.b{display:block;}');
    });

    it('should print pseudo elements', () => {
      const input = [{ selector: '.a::before', block: [['content', `'foo'`]] }];

      expect(format(input))
        .toEqual('.a::before{content:\'foo\';}');
    });

    it('should print pseudo classes', () => {
      const input = [{ selector: '.a:hover', block: [['display', 'block']] }]

      expect(format(input))
        .toEqual('.a:hover{display:block;}');
    });

    it('should print blocks containing multiple definitions', () => {
      const input = [
        {
          selector: '.a',
          block: [['display', 'block'], ['background', 'black']]
        }
      ];

      expect(format(input))
        .toEqual('.a{display:block;background:black;}');
    });

    it('should print media queries', () => {
      const input = [
        {
          'at-rule': 'media',
          query: '(min-width: 320px)',
          rulesets: [
            { selector: '.a', block: [['display', 'block']] }
          ]
        }
      ];

      expect(format(input))
        .toEqual('@media(min-width: 320px){.a{display:block;}}')
    });
  });

  describe('development', () => {
    before(() => { global.__DEV__ = true });

    it('should pretty print a selector with its block', () => {
      const input = [{ selector: '.a', block: [['display', 'block']] }];

      expect(format(input))
        .toEqual(`.a {
    display: block;
}`);
    });

    it('should pretty print multiple selectors right after each other', () => {
      const input = [
        { selector: '.a', block: [['display', 'block']] },
        { selector: '.b', block: [['display', 'block']] }
      ];

      expect(format(input))
        .toEqual(`.a {
    display: block;
}

.b {
    display: block;
}`);
    });

    it('should pretty print media queries', () => {
      const input = [
        {
          'at-rule': 'media',
          query: '(min-width: 320px)',
          rulesets: [
            { selector: '.a', block: [['display', 'block']] }
          ]
        }
      ];

      expect(format(input))
        .toEqual(`@media(min-width: 320px) {
    .a {
        display: block;
    }
}`)
    });
  });
});
