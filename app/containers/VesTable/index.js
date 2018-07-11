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
import { sortTable } from './actions';
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
      // const handleRequestSort = (event, property) => {
      //   const orderBy = property;
      //   let order = 'desc';

      //   if (this.state.orderBy === property && this.state.order === 'desc') {
      //     order = 'asc';
      //   }

      //   this.setState({ order, orderBy });
      // };
      content = (
        <Table>
          <VesTableHead
            {...this.props}
            numSelected={0}
            sortTable={this.props.handleSortTable}
          />
          <TableBody>
            {this.props.productsData.map((item, i) => {
              return (
                <TableRow key={item._id || `row-${i}`}>
                  {this.props.headers.map(header => {
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
  sortTable: PropTypes.any,
  productsData: PropTypes.any,
  headers: PropTypes.array,

};

const mapStateToProps = createStructuredSelector({
  sortTable: makeSelectSortTable(),
  headers:()=> [
    {
      text: 'Name',
      field: 'name'
    },
    {
      text: 'Reference',
      field: 'ref'
    },
    {
      text: 'Type',
      field: 'type'
    },
    {
      text: 'Description',
      field: 'description'
    },
  ]
});

function mapDispatchToProps(dispatch) {
  return {
    handleSortTable: property => (evt) => {
      console.log('from mapDispatchToProps in VesTable', property)
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      const orderBy = property;
      let order = 'desc';
      dispatch(sortTable({ tableName: 'products', orderBy, order }));
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
