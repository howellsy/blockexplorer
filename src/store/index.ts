import { combineReducers, configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import {
  latestBlocksSlice as latestBlocksReducer,
  LatestBlocksState,
} from '../services/latestBlocks';
import {
  latestTransactionsSlice as latestTransactionsReducer,
  LatestTransactionsState,
} from '../services/latestTransactions';
import { blockDetailsSlice as blockDetailsReducer, BlockDetailsState } from '../services/block';

export interface RootState {
  blockDetails: BlockDetailsState;
  latestBlocks: LatestBlocksState;
  latestTransactions: LatestTransactionsState;
}

const reducersMap: ReducersMapObject<RootState> = {
  blockDetails: blockDetailsReducer,
  latestBlocks: latestBlocksReducer,
  latestTransactions: latestTransactionsReducer,
};

const reducers = combineReducers(reducersMap);

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;

export default store;
