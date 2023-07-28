import formatEtherWithUnit from './formatEtherWithUnit';

describe('formatEtherWithUnit', () => {
  it('should format wei to ether with unit', () => {
    expect(formatEtherWithUnit(1234567890123456789)).toEqual('1.2346 ETH');
  });
});
