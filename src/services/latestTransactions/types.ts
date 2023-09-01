import { CommonState, TransactionResponse } from '../types';

export interface LatestTransactions {
  transactions: TransactionResponse[];
}

export interface LatestTransactionsState extends CommonState<LatestTransactions> {}
