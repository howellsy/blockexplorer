import { FC, useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
} from '@mui/material';
import { useAlchemy } from '../../particles/AlchemyProvider';
import { TransactionResponse } from 'alchemy-sdk';
import { TransactionsList } from '../../organisms/TransactionsList';

const Dashboard: FC = () => {
  const { alchemySdk } = useAlchemy();

  const [blockNumber, setBlockNumber] = useState<number>();
  const [latestTransactions, setLatestTransactions] = useState<TransactionResponse[]>();

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
              {blockNumber}
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
