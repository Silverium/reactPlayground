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
import { Tooltip, Toolbar, Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

export class VesTableToolbar extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { numSelected, tableName } = this.props;

    return (
      <Toolbar>
        <div>
          {numSelected > 0 ? (
            <Typography color="inherit" variant="subheading">
              {numSelected} selected
            </Typography>
          ) : (
            <Typography
              data-tip={tableName[0].toUpperCase() + tableName.slice(1)}
              variant="title"
              id="tableTitle"
            >
              {tableName[0].toUpperCase() + tableName.slice(1)}
            </Typography>
          )}
        </div>

        <div>
          <Tooltip title="hello tooltip">
            <p data-tip="hello world">Tooltip</p>
          </Tooltip>
        </div>
        <div>
          {numSelected > 0 ? (
            <IconButton aria-label="Delete" data-tip="Delete">
              <DeleteIcon />
            </IconButton>
          ) : (
            <IconButton aria-label="Filter list" data-tip="Filter">
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
  tableName: PropTypes.string,
};

export default VesTableToolbar;
