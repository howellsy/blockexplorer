import { CommonState, TransactionResponse } from '../types';

export interface TransactionDetails {
  transaction: TransactionResponse;
}

export interface TransactionDetailsState extends CommonState<TransactionDetails> {}
