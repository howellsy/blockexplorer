import { createSlice } from '@reduxjs/toolkit';
import { BlockDetailsState } from '../types';
import { fetchBlockDetails } from '../thunks';

const initialState: BlockDetailsState = {
  status: 'idle',
};

const blockDetailsSlice = createSlice({
  name: 'blockDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchBlockDetails.fulfilled, (state, { payload }) => {
        state.data = {
          block: payload,
        };
        state.status = 'success';
        state.error = undefined;
      })
      .addCase(fetchBlockDetails.pending, (state) => {
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(fetchBlockDetails.rejected, (state) => {
        state.status = 'error';
      }),
});

export { fetchBlockDetails };

export default blockDetailsSlice.reducer;
