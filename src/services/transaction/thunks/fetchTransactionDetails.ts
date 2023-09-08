import { createAsyncThunk } from '@reduxjs/toolkit';
import getTransactionDetails from '../api/getTransactionDetails';

const fetchTransactionDetails = createAsyncThunk(
  'transactionDetails/fetchTransactionDetails',
  async (transactionHash: string) => {
    return getTransactionDetails(transactionHash);
  }
);

export default fetchTransactionDetails;
