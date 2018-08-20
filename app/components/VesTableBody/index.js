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

import { Checkbox, TableBody, TableRow, TableCell } from '@material-ui/core';

function VesTableBody(props) {
  const { items, headers, /* numSelected, */ onSelectRow, tableName } = props;
  // TODO: implement the onClick in the Checkbox to add the selected item into the 'numSelected' prop
  return (
    <TableBody>
      {items.map((item, i) => (
        <TableRow
          key={item._id || `row-${i}`}
          onClick={event => console.log(`clicked ${item.ref}`, event)}
        >
          <TableCell padding="checkbox">
            <Checkbox
              checked={item.isSelected}
              onClick={event => onSelectRow(tableName, item, event)}
            />
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
  tableName: PropTypes.string,
};

export default VesTableBody;
