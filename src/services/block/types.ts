import { Block, CommonState } from '../types';

export interface BlockDetails {
  block: Block;
}

export interface BlockDetailsState extends CommonState<BlockDetails> {}
