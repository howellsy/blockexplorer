import { combineReducers, configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import {
  latestBlocksSlice as latestBlocksReducer,
  LatestBlocksState,
} from '../services/latestBlocks';
import {
  latestTransactionsSlice as latestTransactionsReducer,
  LatestTransactionsState,
} from '../services/latestTransactions';

export interface RootState {
  latestTransactions: LatestTransactionsState;
  latestBlocks: LatestBlocksState;
}

const reducersMap: ReducersMapObject<RootState> = {
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
