import max from './index';

describe('max::', () => {
  /** @test {max} */
  it('Should return max number value from array', () => {
    expect(max([1, 2, 3, -1])).toBe(3);
  });

  /** @test {max} */
  it('Should ignore -Infinity/Infinity', () => {
    expect(max([Infinity, 1])).toBe(1);
  });

  /** @test {max} */
  it('Should ignore NaN', () => {
    expect(max([NaN, 1, 2])).toBe(2);
  });
});
