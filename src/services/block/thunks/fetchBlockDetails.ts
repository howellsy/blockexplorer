import { createAsyncThunk } from '@reduxjs/toolkit';
import getBlockDetails from '../api/getBlockDetails';

const fetchBlockDetails = createAsyncThunk(
  'blockDetails/fetchBlockDetails',
  async (blockId: number) => {
    return getBlockDetails(blockId);
  }
);

export default fetchBlockDetails;
