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
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TableCell, TableBody } from '@material-ui/core';




function VesTable(props) {
  const ComponentToRender = props.component;
  let content = (<div></div>);
  // If we have items, render them
  if (props.items) {
    content = (
      <Table>
        <TableHead>
          <TableRow>
            {props.headers.map(header => {
              return (<TableCell>{header.text} </TableCell>);
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.items.map((item) => {
            return (
              <TableRow>
                {props.headers.map(header => {
                  return (<ComponentToRender key={`cell-${header.field}`}>{item[header.field]}  </ComponentToRender>);
                })
                }
              </TableRow>
            );
          })}

        </TableBody>
      </Table>
    );
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }
  return (
    <Wrapper>

      {content}

    </Wrapper>
  );
}

VesTable.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array,
  headers: PropTypes.array,
};

export default VesTable;
