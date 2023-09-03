import api from '../../api';

const getBlockDetails = async (blockNumber: number) => {
  const block = await api.core.getBlock(blockNumber);
  return block;
};

export default getBlockDetails;
