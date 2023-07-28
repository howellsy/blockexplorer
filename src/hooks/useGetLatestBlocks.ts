import { useEffect, useState } from 'react';
import { useAlchemy } from '../components/particles/AlchemyProvider';
import { Block } from 'alchemy-sdk';

const useGetLatestBlocks = (numBlocks: number) => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const { alchemySdk } = useAlchemy();

  useEffect(() => {
    const getLatestBlocks = async () => {
      const latestBlockNumber = await alchemySdk.core.getBlockNumber();
      const blockNumbers = Array.from(
        { length: numBlocks },
        (_, i) => latestBlockNumber - i
      );
      const blockPromises = blockNumbers.map((blockNumber) =>
        alchemySdk.core.getBlock(blockNumber)
      );
      const latestBlocks = await Promise.all(blockPromises);
      setBlocks(latestBlocks);
    };

    getLatestBlocks();
  }, [alchemySdk, numBlocks]);

  return blocks;
};

export default useGetLatestBlocks;
