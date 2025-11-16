import { expect } from 'chai';
import { shuffle } from '../src/shuffle.js';

describe('shuffle', () => {
  it('should shuffle the array elements', () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...original]);
    expect(shuffled).to.have.members(original);
    expect(shuffled).to.not.deep.equal(original);
  });
});
