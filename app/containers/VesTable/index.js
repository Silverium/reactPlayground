/**
 *
 * VesTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectSortTable, makeSelectSelected } from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import { sortTable, selectRow } from './actions';
import Wrapper from './Wrapper';
import { Table } from '@material-ui/core';
import VesTableHead from 'components/VesTableHead';
import VesTableBody from 'components/VesTableBody';
import LoadingCircular from 'components/LoadingCircular';

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
}
export class VesTable extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {}
  render() {
    let content = <LoadingCircular />;
    // If we have items, render them

    if (this.props.items) {
      const {
        sortTable,
        handleSortTable,
        onSelectAllClick,
        onSelectRow,
        headers,
        items,
        tableName,
        selected,
      } = this.props;
      const numSelected = 0;
      // console.log(`%cvariable: selected`, 'background-color: lime;', selected);
      const selectedItems = selected.get(tableName);

      const vesTableHeadProps = {
        handleSortTable,
        onSelectAllClick,
        headers,
        numSelected,
        sortTable,
        tableName,
      };
      const { orderBy = '', order = '' } =
        (sortTable && sortTable.has(tableName) && sortTable.get(tableName)) ||
        {};
      const vesTableBodyProps = {
        headers,
        numSelected,
        onSelectRow,
        tableName,
        selected: selectedItems,
        items: items.sort(getSorting(order, orderBy)),
      };
      content = (
        <Table>
          <VesTableHead {...vesTableHeadProps} />
          <VesTableBody {...vesTableBodyProps} />
        </Table>
      );
    }
    return <Wrapper>{content}</Wrapper>;
  }
}

VesTable.propTypes = {
  handleSortTable: PropTypes.func,
  onSelectAllClick: PropTypes.func,
  onSelectRow: PropTypes.func,
  sortTable: PropTypes.object,
  items: PropTypes.any,
  headers: PropTypes.array,
  selected: PropTypes.object,
  tableName: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sortTable: makeSelectSortTable(),
  selected: makeSelectSelected(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleSortTable({ orderBy, order, tableName }) {
      return evt => {
        if (evt !== undefined && evt.preventDefault) evt.preventDefault();
        dispatch(sortTable(tableName, { orderBy, order }));
      };
    },
    onSelectAllClick() {
      console.log('All selected clicked!');
    },
    onSelectRow(tableName, item) {
      dispatch(selectRow(tableName, item));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'vesTable', reducer });
const withSaga = injectSaga({ key: 'vesTable', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(VesTable);
