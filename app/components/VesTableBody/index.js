/**
 *
 * VesTableBody
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import RowCheckbox from 'containers/RowCheckbox';

import { TableBody, TableRow, TableCell } from '@material-ui/core';

function VesTableBody(props) {
  const { items, headers, tableName } = props;
  console.log(`%cvesTableBody is rendered`, 'background-color: gold;');

  // TODO: implement the onClick in the Checkbox to add the selected item into the 'numSelected' prop
  return (
    <TableBody>
      {items.map((item, i) => (
        <TableRow
          key={item._id || `row-${i}`}
          onClick={() => /* event */ console.log(`clicked ${item.ref}`, item)}
        >
          <TableCell padding="checkbox">
            <RowCheckbox id={item._id} tableName={tableName} />
          </TableCell>
          {headers.map(header => (
            <TableCell key={`cell-${header.field}`}>
              {item[header.field]}{' '}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}

VesTableBody.propTypes = {
  items: PropTypes.array,
  headers: PropTypes.array,
  numSelected: PropTypes.number,
  onSelectRow: PropTypes.func,
  tableName: PropTypes.string
};

export default VesTableBody;
