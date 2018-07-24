/**
 *
 * VesTableBody
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { Checkbox, TableBody, TableRow, TableCell } from '@material-ui/core';

function VesTableBody(props) {
  const { items, headers } = props;

  return (
    <TableBody>
      {items.map((item, i) => (
        <TableRow
          key={item._id || `row-${i}`}
          onClick={event => console.log(item, event.id)}
        >
          <TableCell padding="checkbox">
            <Checkbox checked={item.isSelected} />
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
};

export default VesTableBody;
