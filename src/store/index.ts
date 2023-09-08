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
import {
  transactionDetailsSlice as transactionDetailsReducer,
  TransactionDetailsState,
} from '../services/transaction';

export interface RootState {
  blockDetails: BlockDetailsState;
  latestBlocks: LatestBlocksState;
  latestTransactions: LatestTransactionsState;
  transactionDetails: TransactionDetailsState;
}

const reducersMap: ReducersMapObject<RootState> = {
  blockDetails: blockDetailsReducer,
  latestBlocks: latestBlocksReducer,
  latestTransactions: latestTransactionsReducer,
  transactionDetails: transactionDetailsReducer,
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
