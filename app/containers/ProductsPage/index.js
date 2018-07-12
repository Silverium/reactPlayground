/**
 *
 * ProductsPage
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
import VesTable from '../VesTable/Loadable';
import Button from '@material-ui/core/Button';
import { makeSelectProductsFetching, makeSelectProductsData, makeSelectProductsKO } from 'containers/App/selectors';
import { productsLoad } from './actions';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';


export class ProductsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {

    if (!this.props.productsData) {
      console.log(`%cvariable: ProductsPage.props1`, 'background-color: lime;', this.props);
      this.props.productsLoad();
    }

  }

  render() {
    const { productsFetching, productsKO, productsData:items } = this.props;
    const headers = [
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
    ];
    const productsVesTableProps = {
      productsFetching,
      productsKO,
      items,
      headers,
      tableName: 'products',
    };
    return (
      <div>
        {/* <FormattedMessage {...messages.header} /> */}
        <Button variant="outlined" color="primary" onClick={this.props.productsLoad}>
          Load Products
        </Button>
        <VesTable
          {...productsVesTableProps}
        />
      </div>
    );
  }
}

ProductsPage.propTypes = {
  productsFetching: PropTypes.bool,
  productsData: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  productsLoad: PropTypes.func,
  productsKO: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

const mapStateToProps = createStructuredSelector({
  productsFetching: makeSelectProductsFetching(),
  productsData: makeSelectProductsData(),
  productsKO: makeSelectProductsKO(),
});

function mapDispatchToProps(dispatch) {
  return {
    productsLoad: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(productsLoad());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'productsPage', reducer });
const withSaga = injectSaga({ key: 'productsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProductsPage);
