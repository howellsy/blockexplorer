import { FC } from 'react';
import { TransactionResponse } from '../../../services/types';
import { DetailsTable, DetailsTableRowData } from '../DetailsTable';
import { Card, CardContent, CardHeader, Link } from '@mui/material';
import { Utils } from '../../../utils';
import { NavPaths } from '../../../config';

export interface TransactionDetailsProps {
  transaction: TransactionResponse;
}

const transactionDetailsRows = (transaction: TransactionResponse): DetailsTableRowData[] => [
  {
    label: 'Transaction Hash',
    tooltip:
      'A TxHash or transaction hash is a unique 66-character identifier that is generated whenever a transaction is executed.',
    value: transaction.hash,
  },
  {
    label: 'Block',
    tooltip:
      'Number of the block in which the transaction is recorded. Block confirmations indicate how many blocks have been added since the transaction was produced.',
    value: transaction.blockNumber ? (
      <>
        <Link href={`${NavPaths.BLOCK}/${transaction.blockNumber}`}>{transaction.blockNumber}</Link>
        <span> ({transaction.confirmations} confirmations)</span>
      </>
    ) : (
      'Unavailable'
    ),
  },
  {
    label: 'From',
    tooltip: 'The sending party of the transaction.',
    value: transaction.from,
    hasSeparator: true,
  },
  {
    label: 'To',
    tooltip: 'The receiving party of the transaction (could be a contract address).',
    value: transaction.to ? transaction.to : 'Unavailable',
  },
  {
    label: 'Value',
    tooltip: 'The value being transacted in Ether.',
    value: `${Utils.formatUnits(transaction.value)} ETH`,
    hasSeparator: true,
  },
  {
    label: 'Transaction Fee',
    tooltip: 'The fee paid to the miner for the transaction.',
    value: transaction.gasPrice
      ? `${Utils.formatUnits(transaction.gasPrice.mul(transaction.gasLimit))} ETH`
      : 'Unavailable',
  },
  {
    label: 'Gas Price',
    tooltip: 'The price of gas in Ether.',
    value: transaction.gasPrice ? `${Utils.formatUnits(transaction.gasPrice)} ETH` : 'Unavailable',
  },
];

const TransactionDetails: FC<TransactionDetailsProps> = ({ transaction }) => (
  <Card>
    <CardHeader title="Transaction Details" />
    <CardContent>
      <DetailsTable rows={transactionDetailsRows(transaction)}></DetailsTable>
    </CardContent>
  </Card>
);

export default TransactionDetails;
