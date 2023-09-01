export interface CommonState<D = unknown, E = string | undefined> {
  data?: D;
  error?: E;
  status: 'idle' | 'loading' | 'success' | 'error';
}

export type { Block, TransactionResponse } from 'alchemy-sdk';
