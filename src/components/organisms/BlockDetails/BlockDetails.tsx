import { Card, CardContent, CardHeader } from '@mui/material';
import { FC } from 'react';
import { DateTime } from 'luxon';
import { Utils } from '../../../utils';
import { Block } from '../../../services/types';
import { DetailsTable, DetailsTableRowData } from '../DetailsTable';

export interface BlockDetailsProps {
  block: Block;
}

const blockDetailsRows = (block: Block): DetailsTableRowData[] => {
  return [
    {
      label: 'Block Height',
      tooltip:
        'Also known as Block Number. The block height, which indicates the length of the blockchain, increases after the addition of the new block.',
      value: block.number,
    },
    {
      label: 'Timestamp',
      tooltip: 'The date and time at which a block is produced.',
      value: `${DateTime.fromSeconds(block.timestamp).toRelative()} (${DateTime.fromSeconds(
        block.timestamp
      ).toLocaleString(DateTime.DATETIME_FULL)})`,
    },
    {
      label: 'Transactions',
      tooltip: 'The number of transactions in the block.',
      value: `${block.transactions.length} transactions`,
    },
    {
      label: 'Fee Recipient',
      tooltip: 'Address receiving fees from transactions in this block.',
      value: block.miner,
      hasSeparator: true,
    },
    {
      label: 'Gas Used',
      tooltip: 'The total gas used in the block and its percentage of gas filled in the block.',
      value: `${block.gasUsed.toNumber().toLocaleString()} (${(
        (block.gasUsed.toNumber() / block.gasLimit.toNumber()) *
        100
      ).toFixed(2)}%)`,
      hasSeparator: true,
    },
    {
      label: 'Gas Limit',
      tooltip: 'Total gas limit provided by all transactions in the block.',
      value: block.gasLimit.toNumber().toLocaleString(),
    },
    {
      label: 'Base Fee Per Gas',
      tooltip:
        'Post-London Upgrade, this represents the minimum gasUsed multiplier required for a tx to be included in a block.',
      value: `${Utils.formatUnits(block.baseFeePerGas || 0)} ETH`,
    },
    {
      label: 'Burnt Fees',
      tooltip:
        'Post-London Upgrade, this represents the part of the tx fee that is burnt: baseFeePerGas * gasUsed.',
      value: `🔥 ${Utils.formatUnits(block.baseFeePerGas!.mul(block.gasUsed))} ETH`,
    },
    {
      label: 'Extra Data',
      tooltip: 'Any data that can be included by the block producer in the block.',
      value: Utils.toUtf8String(block.extraData),
    },
  ];
};

const BlockDetails: FC<BlockDetailsProps> = ({ block }) => (
  <Card>
    <CardHeader title={`Block #${block.number}`} />
    <CardContent>
      <DetailsTable rows={blockDetailsRows(block)}></DetailsTable>
    </CardContent>
  </Card>
);

export default BlockDetails;
