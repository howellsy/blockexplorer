import { NUM_LATEST_TRANSACTIONS } from '../../../config';
import api from '../../api';
import { TransactionResponse } from '../../types';

const getLatestTransactions = async () => {
  const latestBlockNumber = await api.core.getBlockNumber();
  const block = await api.core.getBlock(latestBlockNumber);

  const lastTransactions = block.transactions.slice(-NUM_LATEST_TRANSACTIONS);

  const transactionPromises = lastTransactions.map((txHash) => {
    return api.core.getTransaction(txHash);
  });

  const transactions = await Promise.all(transactionPromises);
  return transactions.filter(Boolean) as TransactionResponse[];
};

export default getLatestTransactions;
