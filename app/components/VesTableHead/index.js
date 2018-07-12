/**
*
* VesTableHead
*
*/

import { Checkbox, TableCell, TableHead, TableRow, Tooltip, TableSortLabel } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';


function VesTableHead(props) {
  const { headers, numSelected, rowCount, onSelectAllClick, handleSortTable, sortTable, tableName, } = props;
  const { orderBy = '', order = '' } = (sortTable && sortTable.has(tableName) && sortTable.get(tableName)) || {};

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {headers.map(header => {
          return (
            <TableCell
              key={header.field}
              sortDirection={header.field === orderBy ? order : false}
            >

              <TableSortLabel
                active={orderBy === header.field}
                direction={order || 'asc'}
                onClick={handleSortTable({ orderBy: header.field, tableName, order: (orderBy === header.field && order === 'asc' ? 'desc' : 'asc') })}
              >
                {header.text}
              </TableSortLabel>

            </TableCell>

          );
        })}
      </TableRow>
    </TableHead>
  );
}

VesTableHead.propTypes = {
  headers: PropTypes.array,
  numSelected: PropTypes.number,
  // onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func,
  handleSortTable: PropTypes.func,
  tableName: PropTypes.string,
  sortTable: PropTypes.object,
  rowCount: PropTypes.number,
};

export default VesTableHead;
