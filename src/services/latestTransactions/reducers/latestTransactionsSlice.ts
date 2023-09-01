import { createSlice } from '@reduxjs/toolkit';
import { LatestTransactionsState } from '../types';
import fetchLatestTransactions from '../thunks/fetchLatestTransactions';

const initialState: LatestTransactionsState = {
  status: 'idle',
};

const latestTransactionsSlice = createSlice({
  name: 'latestTransactions',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchLatestTransactions.fulfilled, (state, { payload }) => {
        state.data = {
          transactions: payload,
        };
        state.status = 'success';
        state.error = undefined;
      })
      .addCase(fetchLatestTransactions.pending, (state) => {
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(fetchLatestTransactions.rejected, (state) => {
        state.status = 'error';
      }),
});

export default latestTransactionsSlice.reducer;
