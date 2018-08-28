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
import TablePagination from '@material-ui/core/TablePagination';
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
      <TablePagination
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
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
      return () => console.log('change page event', event);
    },
    handleChangeRowsPerPage(event) {
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
