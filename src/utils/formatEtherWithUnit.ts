import { BigNumberish, Utils } from 'alchemy-sdk';

const formatEtherWithUnit = (wei: BigNumberish) =>
  Number(Utils.formatEther(wei)).toFixed(4) + ' ETH';

export default formatEtherWithUnit;
