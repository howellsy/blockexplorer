import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../store';

interface StoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: StoreProviderProps) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
