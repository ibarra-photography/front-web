import { doPasswordMatch } from '../matchPasswords';

describe('doPasswordMatch', () => {
  it('returns true if the passwords match', () => {
    expect(doPasswordMatch('password123', 'password123')).toBe(true);
  });

  it('returns false if the passwords do not match', () => {
    expect(doPasswordMatch('password123', 'password456')).toBe(false);
  });
});
