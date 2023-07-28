import { Box, Card, CardHeader, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { Block } from 'alchemy-sdk';
import InventoryIcon from '@mui/icons-material/Inventory';
import { FC } from 'react';
import { DateTime } from 'luxon';

export interface BlocksListProps {
  blocks: Block[];
  title: string;
}

const BlocksList: FC<BlocksListProps> = ({ blocks, title, ...props }) => (
  <Card {...props}>
    <CardHeader title={title} />
    <Table>
      <TableHead className='visually-hidden'>
        <TableRow>
          <TableCell>
            Block Number
          </TableCell>
          <TableCell>
            Number of transactions
          </TableCell>
          <TableCell>
            Value
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {blocks.map((block) => (
          <TableRow key={block.number}>
            <TableCell>
              <Box sx={{ display: 'flex', columnGap: '10px', alignItems: 'center' }}>
                <InventoryIcon />
                <Typography
                  color="textSecondary"
                  variant="body2"
                >
                  <div>{block.number}</div>
                </Typography>
                </Box>
            </TableCell>
            <TableCell>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                <div>{block.transactions.length} txns</div>
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                <div>{DateTime.fromSeconds(block.timestamp).toRelative()}</div>
              </Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

export default BlocksList;
