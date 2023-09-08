import { FC, useEffect } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchTransactionDetails } from '../../../services/transaction';

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
              Transaction hash {hash}
              {transactionDetails && <pre>{JSON.stringify(transactionDetails, null, 2)}</pre>}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Transaction;
