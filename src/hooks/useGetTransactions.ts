import { useEffect, useState } from 'react';
import { useAlchemy } from '../components/particles/AlchemyProvider';
import { TransactionResponse } from 'alchemy-sdk';

const useGetTransactions = (numTransactions?: number, startingBlockNumber?: number) => {
  const [blockNumber, setBlockNumber] = useState<number>();
  const [transactions, setTransactions] = useState<TransactionResponse[]>([]);
  const { alchemySdk } = useAlchemy();

  // get the latest block number if one is not provided
  useEffect(() => {
    async function getBlockNumber() {
      if (startingBlockNumber) {
        setBlockNumber(startingBlockNumber);
        return;
      }
      setBlockNumber(await alchemySdk.core.getBlockNumber());
    }

    getBlockNumber();
  }, [alchemySdk.core, startingBlockNumber]);

  // get the transactions for the block
  useEffect(() => {
    if (!blockNumber) return;

    const getTransactions = async () => {
      const block = await alchemySdk.core.getBlock(blockNumber);
      const transactionPromises = block.transactions.map((txHash) => {
        return alchemySdk.core.getTransaction(txHash);
      });
      const transactions = await Promise.all(transactionPromises);
      setTransactions(transactions.filter((tx) => tx !== null) as TransactionResponse[]);
    };

    getTransactions();
  }, [alchemySdk.core, blockNumber]);

  return numTransactions ? transactions.slice(0, numTransactions) : transactions;
};

export default useGetTransactions;
