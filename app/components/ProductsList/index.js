/**
*
* ProductsList
*
*/

import VesList from 'components/VesList';
import React from 'react';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import PropTypes from 'prop-types';
import ProductListItem from 'containers/ProductListItem';
import LoadingCircular from 'components/LoadingCircular';
import VesTable from '../VesTable';
import {  TableCell } from '@material-ui/core';

function ProductsList({ productsFetching, productsKO, productsData, }) {
  console.log(`%cvariable: productsFetching`, 'background-color: lime;', productsFetching);

  if (productsFetching) {
    console.log('supposedly loading products');
    return <LoadingCircular />;
    // return <VesList component={LoadingCircular} />;
  }
  if (productsKO !== false) {
    // TODO: have a nice Error component and return it here
    const ErrorComponent = () => (
      <div> Something went wrong, please try again!</div>
    );
    return <VesList component={ErrorComponent} />;
  }
  if (productsData !== false) {
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
    return <VesTable items={productsData} headers={headers} />;
    // return <VesList items={productsData} component={ProductListItem} />;
  }
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ProductsList.propTypes = {
  productsFetching: PropTypes.bool,
  productsKO: PropTypes.any,
  productsData: PropTypes.any,
};

export default ProductsList;
