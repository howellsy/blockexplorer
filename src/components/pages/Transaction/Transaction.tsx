import { FC, useEffect } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchTransactionDetails } from '../../../services/transaction';
import { TransactionDetails } from '../../organisms/TransactionDetails';

const Transaction: FC = () => {
  const { hash } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!hash) return;
    dispatch(fetchTransactionDetails(hash));
  }, [dispatch, hash]);

  const {
    transactionDetails: { data: transactionDetails },
  } = useAppSelector((state) => state);

  return (
    <>
      <Box component="main">
        <Container maxWidth="xl">
          <Grid container spacing={4} pt={4}>
            <Grid item xs={12}>
              {transactionDetails && (
                <TransactionDetails transaction={transactionDetails.transaction} />
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Transaction;
