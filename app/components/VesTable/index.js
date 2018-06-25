/**
*
* VesTable
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import { Table,  TableBody, TableRow, TableCell, } from '@material-ui/core';
import VesTableHead from 'components/VesTableHead';



function VesTable(props) {
  let content = (<div></div>);
  // If we have items, render them
  if (props.items) {
    content = (
      <Table>
        <VesTableHead {...props} />
        <TableBody>
          {props.items.map((item) => {
            return (
              <TableRow>
                {props.headers.map(header => {
                  return (<TableCell key={`cell-${header.field}`}>{item[header.field]}  </TableCell>);
                })
                }
              </TableRow>
            );
          })}

        </TableBody>
      </Table>
    );
  }
  return (
    <Wrapper>

      {content}

    </Wrapper>
  );
}

VesTable.propTypes = {
  items: PropTypes.array,
  headers: PropTypes.array,
};

export default VesTable;
