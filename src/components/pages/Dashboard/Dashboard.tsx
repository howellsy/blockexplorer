import { FC, useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
} from '@mui/material';
import { useAlchemy } from '../../particles/AlchemyProvider';
import { TransactionResponse } from 'alchemy-sdk';
import { TransactionsList } from '../../organisms/TransactionsList';
import { BlocksList } from '../../organisms/BlocksList';
import { useGetLatestBlocks } from '../../../hooks';

const Dashboard: FC = () => {
  const { alchemySdk } = useAlchemy();

  const [blockNumber, setBlockNumber] = useState<number>();
  const [latestTransactions, setLatestTransactions] = useState<TransactionResponse[]>();
  const latestBlocks = useGetLatestBlocks(6);

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemySdk.core.getBlockNumber());
    }

    getBlockNumber();
  }, [blockNumber, alchemySdk.core]);

  useEffect(() => {
    async function getLatestTransactions() {
      const block = await alchemySdk.core.getBlockWithTransactions(blockNumber!);

      setLatestTransactions(block.transactions.slice(0, 6));
    }
    if (blockNumber) {
      getLatestTransactions();
    }
  }, [blockNumber, alchemySdk.core]);

  return (
    <>
      <Box
        component="main"
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <BlocksList title="Latest Blocks" blocks={latestBlocks} />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              {
                latestTransactions && (
                  <TransactionsList title="Latest Transactions" transactions={latestTransactions} />
                )
              }
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
