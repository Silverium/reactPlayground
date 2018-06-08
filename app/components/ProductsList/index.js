/**
*
* ProductsList
*
*/

import VesList from 'components/VesList';
import LoadingIndicator from 'components/LoadingIndicator';
import React from 'react';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import PropTypes from 'prop-types';
import ProductListItem from 'containers/ProductListItem';


function ProductsList({productsFetching,productsKO,productsData,}) {
  console.log(`%cvariable: productsFetching`, 'background-color: lime;', productsFetching);
  
  if (productsFetching) {
    console.log('supposedly loading products');
    return <VesList component={LoadingIndicator} />;
  }
  if (productsData !== false) {
    return <VesList items={productsData} component={ProductListItem} />;
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
