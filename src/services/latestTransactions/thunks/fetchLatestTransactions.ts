import { createAsyncThunk } from '@reduxjs/toolkit';
import getLatestTransactions from '../api/getLatestTransactions';
import { TransactionResponse } from '../../types';

const fetchLatestTransactions = createAsyncThunk<TransactionResponse[], void, {}>(
  'latestTransactions/fetchLatestTransactions',
  async () => {
    return getLatestTransactions();
  }
);

export default fetchLatestTransactions;
