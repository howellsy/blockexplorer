import { Card, CardContent, CardHeader, Table, TableRow, Tooltip } from '@mui/material';
import { FC } from 'react';
import { DateTime } from 'luxon';
import { Utils } from '../../../utils';
import { Block } from '../../../services/types';
import {
  DetailsTableBody,
  DetailsTableCell,
  HelpIcon,
  TableRowWithSeparator,
} from './BlockDetails.styles';

export interface BlockDetailsProps {
  block: Block;
}

const BlockDetails: FC<BlockDetailsProps> = ({ block }) => (
  <Card>
    <CardHeader title={`Block #${block.number}`} />
    <CardContent>
      <Table>
        <DetailsTableBody>
          <TableRow>
            <DetailsTableCell>
              <Tooltip title="Also known as Block Number. The block height, which indicates the length of the blockchain, increases after the addition of the new block.">
                <HelpIcon />
              </Tooltip>
              Block Height:
            </DetailsTableCell>
            <DetailsTableCell>{block.number}</DetailsTableCell>
          </TableRow>
          <TableRow>
            <DetailsTableCell>
              <Tooltip title="The date and time at which a block is produced.">
                <HelpIcon />
              </Tooltip>
              Timestamp:
            </DetailsTableCell>
            <DetailsTableCell>
              {DateTime.fromSeconds(block.timestamp).toRelative()} (
              {DateTime.fromSeconds(block.timestamp).toLocaleString(DateTime.DATETIME_FULL)})
            </DetailsTableCell>
          </TableRow>
          <TableRow>
            <DetailsTableCell>
              <Tooltip title="The number of transactions in the block.">
                <HelpIcon />
              </Tooltip>
              Transactions:
            </DetailsTableCell>
            <DetailsTableCell>{block.transactions.length} transactions</DetailsTableCell>
          </TableRow>
          <TableRowWithSeparator>
            <DetailsTableCell>
              <Tooltip title="Address receiving fees from transactions in this block.">
                <HelpIcon />
              </Tooltip>
              Fee Recipient:
            </DetailsTableCell>
            <DetailsTableCell>{block.miner}</DetailsTableCell>
          </TableRowWithSeparator>
          <TableRowWithSeparator>
            <DetailsTableCell>
              <Tooltip title="The total gas used in the block and its percentage of gas filled in the block.">
                <HelpIcon />
              </Tooltip>
              Gas Used:
            </DetailsTableCell>
            <DetailsTableCell>
              {block.gasUsed.toNumber().toLocaleString()}
              {` (`}
              {((block.gasUsed.toNumber() / block.gasLimit.toNumber()) * 100).toFixed(2)}%{`)`}
            </DetailsTableCell>
          </TableRowWithSeparator>
          <TableRow>
            <DetailsTableCell>
              <Tooltip title="Total gas limit provided by all transactions in the block.">
                <HelpIcon />
              </Tooltip>
              Gas Limit:
            </DetailsTableCell>
            <DetailsTableCell>{block.gasLimit.toNumber().toLocaleString()}</DetailsTableCell>
          </TableRow>
          {block.baseFeePerGas && (
            <>
              <TableRow>
                <DetailsTableCell>
                  <Tooltip title="Post-London Upgrade, this represents the minimum gasUsed multiplier required for a tx to be included in a block.">
                    <HelpIcon />
                  </Tooltip>
                  Base Fee Per Gas:
                </DetailsTableCell>
                <DetailsTableCell>{Utils.formatUnits(block.baseFeePerGas)} ETH</DetailsTableCell>
              </TableRow>
              <TableRow>
                <DetailsTableCell>
                  <Tooltip title="Post-London Upgrade, this represents the part of the tx fee that is burnt: baseFeePerGas * gasUsed.">
                    <HelpIcon />
                  </Tooltip>
                  Burnt Fees:
                </DetailsTableCell>
                <DetailsTableCell>
                  🔥 {Utils.formatUnits(block.baseFeePerGas.mul(block.gasUsed))} ETH
                </DetailsTableCell>
              </TableRow>
            </>
          )}
          <TableRow>
            <DetailsTableCell>
              <Tooltip title="Any data that can be included by the block producer in the block.">
                <HelpIcon />
              </Tooltip>
              Extra Data:
            </DetailsTableCell>
            <DetailsTableCell>{Utils.toUtf8String(block.extraData)}</DetailsTableCell>
          </TableRow>
        </DetailsTableBody>
      </Table>
    </CardContent>
  </Card>
);

export default BlockDetails;
