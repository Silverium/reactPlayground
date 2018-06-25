/**
*
* VesTableHead
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { TableHead, TableRow, TableCell } from '@material-ui/core';

function VesTableHead(props) {
  const { headers } = props;
  return (
    <TableHead>
      <TableRow>
        {headers.map(header => {
          return (<TableCell>{header.text} </TableCell>);
        })}
      </TableRow>
    </TableHead>
  );
}

VesTableHead.propTypes = {
  headers: PropTypes.array
};

export default VesTableHead;
