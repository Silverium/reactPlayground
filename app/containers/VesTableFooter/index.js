/**
 *
 * VesTableFooter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { makeSelectVesTableFooter, makeSelectVesTableFooterPage, makeSelectVesTableFooterRowsPerPage } from './selectors';
import reducer from './reducer';
// import messages from './messages';
import { FormControl, MenuItem, Select, InputLabel } from '@material-ui/core';
import { updateRowsPerPage } from './actions';

export class VesTableFooter extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  componentDidMount() { }
  render() {
    console.log(
      `%cvariable: this.props`,
      'background-color: lime;',
      this.props
    );

    const {
      count,
      rowsPerPage,
      handleChangePage,
      handleChangeRowsPerPage,
      page,
    } = this.props;
    return (
      <FormControl >
        <InputLabel htmlFor="age-simple">Age</InputLabel>
        <Select
          value={rowsPerPage}
          onChange={handleChangeRowsPerPage}
          inputProps={{
            name: 'Rows per Page',
            id: 'RowsPerPage',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

VesTableFooter.propTypes = {
  handleChangePage: PropTypes.func,
  handleChangeRowsPerPage: PropTypes.func,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  count: PropTypes.number,
};

const mapStateToProps =
  createStructuredSelector({
    vestablefooter: makeSelectVesTableFooter(),
    rowsPerPage: makeSelectVesTableFooterRowsPerPage(),
    page: makeSelectVesTableFooterPage(),
  });

function mapDispatchToProps(dispatch) {
  console.log('mapDispatchToProps from VesTableFooter');
  return {
    handleChangePage(event) {
      return console.log('change page event', event);
    },
    handleChangeRowsPerPage(event) {
      console.log(`%cvariable: event.target.value`, 'background-color: lime;', event.target.value);

      dispatch(updateRowsPerPage, event.target.value);
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'vesTableFooter', reducer });

export default compose(
  withReducer,
  withConnect
)(VesTableFooter);
