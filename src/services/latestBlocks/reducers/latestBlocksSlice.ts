import { createSlice } from '@reduxjs/toolkit';
import { LatestBlocksState } from '../types';
import fetchLatestBlocks from '../thunks/fetchLatestBlocks';

const initialState: LatestBlocksState = {
  status: 'idle',
};

const latestBlocksSlice = createSlice({
  name: 'latestBlocks',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchLatestBlocks.fulfilled, (state, { payload }) => {
        state.data = {
          blocks: payload,
        };
        state.status = 'success';
        state.error = undefined;
      })
      .addCase(fetchLatestBlocks.pending, (state) => {
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(fetchLatestBlocks.rejected, (state) => {
        state.status = 'error';
      }),
});

export { fetchLatestBlocks };

export default latestBlocksSlice.reducer;
