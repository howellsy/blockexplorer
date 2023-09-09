import { TableBody, styled } from '@mui/material';

export const ListTableBody = styled(TableBody)`
  tr:first-child td {
    padding-top: 0;
  }

  tr:last-child td {
    border-bottom: 0;
    padding-bottom: 0;
  }
`;
