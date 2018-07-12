/**
 *
 * VesTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectSortTable } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { sortTable, initTable } from './actions';
import Wrapper from './Wrapper';
import { Table, TableBody, TableRow, TableCell, } from '@material-ui/core';
import VesTableHead from 'components/VesTableHead';
import LoadingCircular from 'components/LoadingCircular';



export class VesTable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
  }
  render() {
    let content = (<LoadingCircular />);
    // If we have items, render them


    if (this.props.productsData) {
      const  {sortTable, tableName,handleSortTable, headers, productsData} = this.props;
      const {orderBy, order} = sortTable.get(tableName);
      const vesTableHeadProps ={
        handleSortTable,
        headers,
        numSelected:0,
        sortTable
      };
      content = (
        <Table>
          <VesTableHead
            {...vesTableHeadProps}
          />
          <TableBody>
            {productsData.map((item, i) => {
              return (
                <TableRow key={item._id || `row-${i}`}>
                  {headers.map(header => {
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
}

VesTable.propTypes = {
  handleSortTable: PropTypes.func,
  sortTable: PropTypes.object,
  productsData: PropTypes.any,
  headers: PropTypes.array,
  tableName: PropTypes.string.isRequired,

};

const mapStateToProps = createStructuredSelector({
  sortTable: makeSelectSortTable(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleSortTable: ({orderBy, tableName}) => (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      let order = 'desc';
      dispatch(sortTable(tableName,{ orderBy, order }));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'vesTable', reducer });
const withSaga = injectSaga({ key: 'vesTable', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(VesTable);
