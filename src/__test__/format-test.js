import expect from 'expect';
import format from '../core/format';

describe('#format', () => {
  describe('development', () => {
    before(() => { global.__DEV__ = true; });

    it('should return an empty class body for no style definition', () => {
      expect(format(undefined, 'a')).toBe('\n.a {\n\n}\n');
    });
  });

  describe('production', () => {
    before(() => { global.__DEV__ = false });

    it('should return a minimized empty class body for no style definition', () => {
      expect(format(undefined, 'a')).toBe('.a{}');
    });
  })




  // Needs to respect __DEV__ or !__DEV__ flags
});
