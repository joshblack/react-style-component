import assert from 'assert';
import isDeclaration from '../src/utils/typechecks/isDeclaration';
import isMedia from '../src/utils/typechecks/isMedia';
import isPseudoClass from '../src/utils/typechecks/isPseudoClass';
import isPseudoElement from '../src/utils/typechecks/isPseudoElement';

describe('typechecks', () => {
  describe('#isDeclaration', () => {
    it('should return true for a valid CSS property', () => {
      assert.equal(true, isDeclaration('display'));
    });

    it ('should return false for at-rules', () => {
      assert.equal(false, isDeclaration('keyframes'));
    });

    it('should return false for psuedo classes and elements', () => {
      assert.equal(false, isDeclaration('hover'));
      assert.equal(false, isDeclaration('before'));
    });

    it('should return false for invalid properties', () => {
      assert.equal(false, isDeclaration('foo'));
    });
  });

  describe('#isMedia', () => {
    it('should return true if it\'s a valid CSS property with an object value', () => {
      assert.equal(true, isMedia('display', {}));
    });

    it('should return false if it\'s a valid CSS property but a simple value', () => {
      assert.equal(false, isMedia('display', 'block'));
    });
  });

  describe('#isPseudoClass', () => {
    it('should return true for a property that is a pseudo class', () => {
      assert.equal(true, isPseudoClass('focus'));
    });

    it('should return false for CSS properties', () => {
      assert.equal(false, isPseudoClass('display'));
    });

    it('should return false for at-rules', () => {
      assert.equal(false, isPseudoClass('keyframes'));
    });
  });

  describe('#isPseudoElement', () => {
    it('should return true for a property that is a pseudo element', () => {
      assert.equal(true, isPseudoElement('before'));
    });

    it('should return false for CSS properties', () => {
      assert.equal(false, isPseudoElement('display'));
    });

    it('should return false for at-rules', () => {
      assert.equal(false, isPseudoElement('keyframes'));
    });
  });
});

