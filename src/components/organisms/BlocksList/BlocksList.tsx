import {
  Card,
  CardContent,
  CardHeader,
  Link,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '../../atoms';
import { Block } from '../../../services/types';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { FC } from 'react';
import { DateTime } from 'luxon';
import { truncateAddress } from '../../../utils';
import { NavPaths } from '../../../config';
import { ListTableBody } from './BlocksList.style';

export interface BlocksListProps {
  blocks: Block[];
  title: string;
}

const BlocksList: FC<BlocksListProps> = ({ blocks, title, ...props }) => (
  <Card {...props}>
    <CardHeader title={title} />
    <CardContent>
      <Table>
        <TableHead className="visually-hidden">
          <TableRow>
            <TableCell />
            <TableCell>Block Number</TableCell>
            <TableCell>Fee Recipient</TableCell>
            <TableCell>Number of Transactions</TableCell>
          </TableRow>
        </TableHead>
        <ListTableBody>
          {blocks.map((block) => (
            <TableRow key={`block${block.number}`}>
              <TableCell width={25}>
                <Inventory2OutlinedIcon color="secondary" />
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="body2">
                  <Link href={`${NavPaths.BLOCK}/${block.number}`}>{block.number}</Link>
                  <div>{DateTime.fromSeconds(block.timestamp).toRelative()}</div>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">
                  <div>Fee Recipient</div>
                  <div>{truncateAddress(block.miner)}</div>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="body2">
                  <Tooltip title="Transactions in this block">
                    <div>{block.transactions.length} txns</div>
                  </Tooltip>
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </ListTableBody>
      </Table>
    </CardContent>
  </Card>
);

export default BlocksList;
