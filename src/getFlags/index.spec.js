import getFlags from './index';

describe('getFlags::', () => {
  /** @test {getFlags} */
  it('Should return array of flags', () => {
    const arr = [
      {
        flags: [1, 2, 3]
      }
    ];
    expect(getFlags(arr)).toEqual([1, 2, 3]);
  });

  /** @test {getFlags} */
  it('Should return array of flags for passed array with any size', () => {
    const obj1 = {flags: [1, 2, 3]};
    const obj2 = {flags: [4, 5, 6]};
    const obj3 = {flags: [7, 8, 9]};

    expect(getFlags([obj1])).toEqual([1, 2, 3]);
    expect(getFlags([obj1, obj2])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(getFlags([obj1, obj2, obj3])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
