import { isNumeric } from '../isNumeric';

describe('isNumeric function', () => {
  it('should return true for valid numbers in string form', () => {
    expect(isNumeric('123')).toBe(true);
    expect(isNumeric('-456.7')).toBe(true);
    expect(isNumeric('0')).toBe(true);
    expect(isNumeric('.5')).toBe(true);
    expect(isNumeric('1e3')).toBe(true);
    expect(isNumeric('Infinity')).toBe(true);
  });

  it('should return false for non-number strings', () => {
    expect(isNumeric('')).toBe(false);
    expect(isNumeric('abc')).toBe(false);
    expect(isNumeric('1.2.3')).toBe(false);
    expect(isNumeric('123a')).toBe(false);
  });

  it('should return false for non-string inputs', () => {
    expect(isNumeric('true')).toBe(false);
    expect(isNumeric('null')).toBe(false);
    expect(isNumeric('undefined')).toBe(false);
    expect(isNumeric('{}')).toBe(false);
  });
});
