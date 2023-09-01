import formatEtherWithUnit from './formatEtherWithUnit';

describe('formatEtherWithUnit', () => {
  it('should format wei to ether with unit', () => {
    expect(formatEtherWithUnit(1234567890123456)).toEqual('0.0012 ETH');
  });
});
