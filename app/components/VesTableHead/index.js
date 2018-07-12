/**
*
* VesTableHead
*
*/

import { Checkbox, TableCell, TableHead, TableRow, Tooltip, TableSortLabel } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';



function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
}

function VesTableHead(props) {
  console.log(`%cvariable: props from VesTableHead`, 'background-color: lime;', props);

  const { headers, numSelected, rowCount, onSelectAllClick, sortTable, tableName, order, orderBy, } = props;
  console.log(`%cvariable: sortTable&&sortTable.get(tableName).orderBy`, 'background-color: lime;', sortTable && sortTable.get(tableName).orderBy);
  console.log(`%cvariable: sortTable&&sortTable.get(tableName).order`, 'background-color: lime;', sortTable && sortTable.get(tableName).order);

  return (
    <TableHead>
      <TableRow>
        {/* <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell> */}
        {headers.map(header => {
          return (
            <TableCell
              key={`header-${header.field}`}
              sortDirection={`header-${header.field}` === sortTable && sortTable.get(tableName).orderBy ? sortTable && sortTable.get(tableName).order : false}
            >

              <TableSortLabel
                active={sortTable && sortTable.get(tableName).orderBy === `header-${header.field}`}
                direction={sortTable && sortTable.get(tableName).order}
                onClick={props.handleSortTable({ orderBy: `header-${header.field}`, tableName })}
              >
                {header.text}
              </TableSortLabel>


              {/* {header.text} */}
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
  order: PropTypes.string,
  orderBy: PropTypes.string,
  rowCount: PropTypes.number,
};

export default VesTableHead;
