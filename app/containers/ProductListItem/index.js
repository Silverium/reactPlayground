/**
 *
 * ProductListItem
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
import Cell from './Cell';
import makeSelectProductListItem from './selectors';
import reducer from './reducer';
import saga from './saga';
import Wrapper from './Wrapper';
import messages from './messages';


export class ProductListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;

    return (
      <Wrapper>
        <Cell>
          {item.ref}
        </Cell>
        <Cell>
          {item.description}     
        </Cell>
        <Cell>
          {item.leadTime}
        </Cell>
        <Cell>
          {item.workingTimePerBox} 
        </Cell>
      </Wrapper>
    );
  }
}

ProductListItem.propTypes = {
  item: PropTypes.object,

};

const mapStateToProps = createStructuredSelector({
  productlistitem: makeSelectProductListItem(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'productListItem', reducer });
const withSaga = injectSaga({ key: 'productListItem', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProductListItem);
