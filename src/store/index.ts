import { combineReducers, configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import {
  latestBlocksSlice as latestBlocksReducer,
  LatestBlocksState,
} from '../services/latestBlocks';

export interface RootState {
  latestBlocks: LatestBlocksState;
}

const reducersMap: ReducersMapObject<RootState> = {
  latestBlocks: latestBlocksReducer,
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
