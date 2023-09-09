import { Chip, TableBody, styled } from '@mui/material';

export const AmountChip = styled(Chip)`
  font-size: 0.6rem;
  font-weight: bold;
`;

export const ListTableBody = styled(TableBody)`
  tr:first-child td {
    padding-top: 0;
  }

  tr:last-child td {
    border-bottom: 0;
    padding-bottom: 0;
  }
`;
