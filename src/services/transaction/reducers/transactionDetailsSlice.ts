import { createSlice } from '@reduxjs/toolkit';
import { TransactionDetailsState } from '../types';
import { fetchTransactionDetails } from '../thunks';

const initialState: TransactionDetailsState = {
  status: 'idle',
};

const transactionDetailsSlice = createSlice({
  name: 'transactionDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchTransactionDetails.fulfilled, (state, { payload }) => {
        if (payload === null) {
          state.status = 'error';
          return;
        }
        state.data = {
          transaction: payload,
        };
        state.status = 'success';
        state.error = undefined;
      })
      .addCase(fetchTransactionDetails.pending, (state) => {
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(fetchTransactionDetails.rejected, (state) => {
        state.status = 'error';
      }),
});

export { fetchTransactionDetails };

export default transactionDetailsSlice.reducer;
