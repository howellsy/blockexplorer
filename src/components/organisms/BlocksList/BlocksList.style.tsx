import { styled } from '@mui/material';
import { TableBody } from '../../atoms';

export const ListTableBody = styled(TableBody)`
  tr:first-child td {
    padding-top: 0;
  }

  tr:last-child td {
    border-bottom: 0;
    padding-bottom: 0;
  }
`;
