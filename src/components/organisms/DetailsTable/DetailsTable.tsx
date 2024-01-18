import { Table, Tooltip } from '../../atoms';
import { FC } from 'react';
import {
  DetailsTableBody,
  DetailsTableCell,
  DetailsTableRow,
  HelpIcon,
} from './DetailsTable.styles';

export interface DetailsTableRowData {
  label: string;
  tooltip: string;
  value: string | number | React.ReactNode;
  hasSeparator?: boolean;
}

export interface DetailsTableProps {
  rows: DetailsTableRowData[];
}

const DetailsTable: FC<DetailsTableProps> = ({ rows }) => (
  <Table>
    <DetailsTableBody>
      {rows.map(({ label, hasSeparator, tooltip, value }) => (
        <DetailsTableRow key={label} hasSeparator={!!hasSeparator}>
          <DetailsTableCell>
            <Tooltip title={tooltip}>
              <HelpIcon />
            </Tooltip>
            {label}:
          </DetailsTableCell>
          <DetailsTableCell>{value}</DetailsTableCell>
        </DetailsTableRow>
      ))}
    </DetailsTableBody>
  </Table>
);

export default DetailsTable;
