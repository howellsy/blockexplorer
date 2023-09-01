import { FC, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
} from '@mui/material';
import { TransactionsList } from '../../organisms/TransactionsList';
import { BlocksList } from '../../organisms/BlocksList';
import { useAppDispatch, useAppSelector,useGetTransactions } from '../../../hooks';
import { fetchLatestBlocks } from '../../../services/latestBlocks';


const Dashboard: FC = () => {
  const dispatch = useAppDispatch();
  const latestTransactions = useGetTransactions(6);

  useEffect(() => {
    dispatch(fetchLatestBlocks());
  }, [dispatch]);

  const {
    latestBlocks: { data: latestBlocks },
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
