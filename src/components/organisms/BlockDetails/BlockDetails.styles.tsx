import { TableBody, TableCell, TableRow, styled } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export const DetailsTableCell = styled(TableCell)`
  * {
    vertical-align: middle;
  }

  padding: 12px 16px 10px 0;
`;

export const DetailsTableBody = styled(TableBody)`
  tr:first-child td {
    padding-top: 0;
  }

  tr:last-child td {
    padding-bottom: 0;
  }

  td {
    border-bottom: 0;
  }
`;

export const TableRowWithSeparator = styled(TableRow)`
  td {
    border-top: 1px solid ${({ theme }) => theme.palette.divider};
  }
`;

export const HelpIcon = styled(HelpOutlineIcon)`
  color: ${({ theme }) => theme.palette.text.secondary};
  height: 0.7em;
  margin-right: 5px;
  width: 0.75em;
`;
