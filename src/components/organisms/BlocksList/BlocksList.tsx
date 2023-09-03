import {
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Block } from '../../../services/types';
import InventoryIcon from '@mui/icons-material/Inventory';
import { FC } from 'react';
import { DateTime } from 'luxon';
import { truncateAddress } from '../../../utils';
import { NavPaths } from '../../../config';

export interface BlocksListProps {
  blocks: Block[];
  title: string;
}

const BlocksList: FC<BlocksListProps> = ({ blocks, title, ...props }) => (
  <Card {...props}>
    <CardHeader title={title} />
    <Table>
      <TableHead className="visually-hidden">
        <TableRow>
          <TableCell />
          <TableCell>Block Number</TableCell>
          <TableCell>Fee Recipient</TableCell>
          <TableCell>Number of Transactions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {blocks.map((block) => (
          <TableRow key={`block${block.number}`}>
            <TableCell width={25}>
              <InventoryIcon />
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="body2">
                <div>
                  <a href={`${NavPaths.BLOCK}/${block.number}`}>{block.number}</a>
                </div>
                <div>{DateTime.fromSeconds(block.timestamp).toRelative()}</div>
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="body2">
                <div>Fee Recipient</div>
                <div>{truncateAddress(block.miner)}</div>
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="body2">
                <div>{block.transactions.length} txns</div>
              </Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

export default BlocksList;
