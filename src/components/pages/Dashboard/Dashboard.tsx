import { FC } from 'react';
import {
  Box,
  Container,
  Grid,
} from '@mui/material';
import { TransactionsList } from '../../organisms/TransactionsList';
import { BlocksList } from '../../organisms/BlocksList';
import { useGetLatestBlocks, useGetTransactions } from '../../../hooks';

const Dashboard: FC = () => {
  const latestBlocks = useGetLatestBlocks(6);
  const latestTransactions = useGetTransactions(6);

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
