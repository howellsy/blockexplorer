import api from '../../api';

const getTransactionDetails = async (transactionHash: string) => {
  const block = await api.core.getTransaction(transactionHash);
  return block;
};

export default getTransactionDetails;
