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
  
  const { headers, numSelected, rowCount, onSelectAllClick, sortTable, order, orderBy, } = props;

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
              sortDirection={orderBy === `header-${header.field}` ? order : false}
            >

              <TableSortLabel
                active={orderBy === `header-${header.field}`}
                direction={order}
                onClick={props.handleSortTable(`header-${header.field}`)}
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
