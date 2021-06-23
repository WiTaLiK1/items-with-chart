import { getRandomIntInclusive, minMax, reorder } from './index';

describe('The minMax function', () => {
  it('should return min value when value less than min', () => {
    const result = minMax(-5, { min: 2 });

    expect(result).toBe(2);
  });

  it('should return max value when value more than max', () => {
    const result = minMax(10, { max: 5 });

    expect(result).toBe(5);
  });

  it('should return value when value between min and max', () => {
    const result = minMax(3, { max: 5, min: 1 });

    expect(result).toBe(3);
  });
});

describe('The getRandomIntInclusive function', () => {
  it('should return value more than or equal min', () => {
    const randomValue = getRandomIntInclusive(1, 10);

    expect(randomValue).toBeGreaterThanOrEqual(1);
  });

  it('should return value less than or equal max', () => {
    const randomValue = getRandomIntInclusive(1, 10);

    expect(randomValue).toBeLessThanOrEqual(10);
  });
});

describe('The reorder function', () => {
  it('should set element index to last', () => {
    const array = reorder([1, 2, 3, 4], 0, 3);

    expect(array).toEqual([2, 3, 4, 1]);
  });
  it('should set element index to first', () => {
    const array = reorder([1, 2, 3, 4], 3, 0);

    expect(array).toEqual([4, 1, 2, 3]);
  });
  it('should change elements index in middle', () => {
    const array = reorder([1, 2, 3, 4], 1, 2);

    expect(array).toEqual([1, 3, 2, 4]);
  });
});
