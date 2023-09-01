import truncateAddress from './truncateAddress';

describe('truncateAddress', () => {
  it('should truncate an address', () => {
    expect(truncateAddress('0x1234567890abcdef1234567890abcdef12345678')).toEqual('0x1234...5678');
  });

  it('should not truncate an address that is too short', () => {
    expect(truncateAddress('0x1234567890abcdef1234567890abcdef123456')).toEqual(
      '0x1234567890abcdef1234567890abcdef123456'
    );
  });
});
