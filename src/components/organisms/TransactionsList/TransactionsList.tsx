import type { FC } from 'react';
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
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import { TransactionResponse } from '../../../services/types';
import { formatEtherWithUnit, truncateAddress } from '../../../utils';
import { NavPaths } from '../../../config';
import { AmountChip, ListTableBody } from './TransactionsList.style';

export interface TransactionsListProps {
  transactions: TransactionResponse[];
  title: string;
}

const TransactionsList: FC<TransactionsListProps> = ({ transactions, title, ...props }) => (
  <Card {...props}>
    <CardHeader title={title} />
    <CardContent>
      <Table>
        <TableHead className="visually-hidden">
          <TableRow>
            <TableCell />
            <TableCell>Txn Hash</TableCell>
            <TableCell>From/To</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <ListTableBody>
          {transactions.map((transaction) => (
            <TableRow key={`tx${transaction.hash}`}>
              <TableCell width={25}>
                <ReceiptOutlinedIcon color="secondary" />
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="body2">
                  <Tooltip title={transaction.hash}>
                    <Link href={`${NavPaths.TRANSACTION}/${transaction.hash}`}>
                      {truncateAddress(transaction.hash)}
                    </Link>
                  </Tooltip>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" title={transaction.from} variant="body2">
                  From {truncateAddress(transaction.from)}
                </Typography>
                {transaction.to && (
                  <Typography color="textSecondary" title={transaction.to} variant="body2">
                    To {truncateAddress(transaction.to)}
                  </Typography>
                )}
              </TableCell>
              <TableCell width={100}>
                <AmountChip label={formatEtherWithUnit(transaction.value)} variant="outlined" />
                {/* <Chip label={formatEtherWithUnit(transaction.value)} variant="outlined" /> */}
              </TableCell>
            </TableRow>
          ))}
        </ListTableBody>
      </Table>
    </CardContent>
  </Card>
);

export default TransactionsList;
