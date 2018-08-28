/**
*
* VesTableToolbar
*
*/

import React from 'react';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { Toolbar, Typography, IconButton, } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';



export class VesTableToolbar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { numSelected } = this.props;

    return (
      <Toolbar>
        <div >
          {numSelected > 0 ? (
            <Typography color="inherit" variant="subheading">
              {numSelected} selected
            </Typography>
          ) : (
              <Typography variant="title" id="tableTitle">
                Products
            </Typography>
            )}
        </div>
        <div>
        </div>
        <div >
          {numSelected > 0 ? (
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          ) : (
              <IconButton aria-label="Filter list">
                <FilterListIcon />
              </IconButton>
            )}
        </div>
      </Toolbar>
    );
  }
}

VesTableToolbar.propTypes = {
  numSelected: PropTypes.number,

};

export default VesTableToolbar;
