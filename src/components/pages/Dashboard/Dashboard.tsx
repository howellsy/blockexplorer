import { FC, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
} from '@mui/material';
import { TransactionsList } from '../../organisms/TransactionsList';
import { BlocksList } from '../../organisms/BlocksList';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchLatestBlocks } from '../../../services/latestBlocks';
import { fetchLatestTransactions } from '../../../services/latestTransactions';

const Dashboard: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLatestBlocks());
    dispatch(fetchLatestTransactions());
  }, [dispatch]);

  const {
    latestBlocks: { data: latestBlocks },
    latestTransactions: { data: latestTransactions },
  } = useAppSelector((state) => state);

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
              {latestBlocks?.blocks && <BlocksList title="Latest Blocks" blocks={latestBlocks.blocks} />}
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              {latestTransactions?.transactions &&
                <TransactionsList title="Latest Transactions" transactions={latestTransactions.transactions} />
              }
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
