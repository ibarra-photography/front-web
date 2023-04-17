import { isEmailValid } from '../isEmailValid';

describe('isEmailValid', () => {
  it('returns true for a valid email address', () => {
    expect(isEmailValid('test@example.com')).toBe(true);
    expect(isEmailValid('test.user+1@example.co.uk')).toBe(true);
    expect(isEmailValid('test123@example.com')).toBe(true);
  });

  it('returns false for an invalid email address', () => {
    expect(isEmailValid('test@example')).toBe(false);
    expect(isEmailValid('test.example.com')).toBe(false);
    expect(isEmailValid('test@example.')).toBe(false);
  });
});
