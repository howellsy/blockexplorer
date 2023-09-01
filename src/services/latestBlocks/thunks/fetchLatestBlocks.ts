import { createAsyncThunk } from '@reduxjs/toolkit';
import getLatestBlocks from '../api/getLatestBlocks';
import { Block } from '../../types';

const fetchLatestBlocks = createAsyncThunk<Block[], void, {}>(
  'latestBlocks/fetchLatestBlocks',
  async () => {
    return getLatestBlocks();
  }
);

export default fetchLatestBlocks;
