import { describe, expect, it } from 'vitest';
import { rentalCost } from './rental';
describe('demo rental billing', () => {
  it('charges each started half hour', () => {
    expect(rentalCost(0)).toBe(0);
    expect(rentalCost(1)).toBe(1);
    expect(rentalCost(30)).toBe(1);
    expect(rentalCost(31)).toBe(2);
  });
  it('rejects invalid durations', () => {
    for (const minutes of [-1, NaN, Infinity]) expect(() => rentalCost(minutes)).toThrow();
  });
});
