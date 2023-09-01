import { Block, CommonState } from '../types';

export interface LatestBlocks {
  blocks: Block[];
}

export interface LatestBlocksState extends CommonState<LatestBlocks> {}
