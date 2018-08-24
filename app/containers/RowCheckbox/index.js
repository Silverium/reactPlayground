/**
 *
 * RowCheckbox
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Checkbox } from '@material-ui/core';

import injectReducer from 'utils/injectReducer';
// import makeSelectRowCheckbox from './selectors';
import { selectRow } from 'containers/VesTable/actions';
import reducer from './reducer';

export class RowCheckbox extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { isChecked, onSelectRow, id, tableName } = this.props;
    return (<Checkbox
      checked={
        isChecked
      }
      onClick={
        () => {
          onSelectRow(tableName, { _id: id });
        }
      }
    />);
  }
}

RowCheckbox.propTypes = {
  isChecked: PropTypes.bool,
  onSelectRow: PropTypes.func,
  id: PropTypes.string,
  tableName: PropTypes.string,
};

const mapStateToProps = (state, props) => ({
  isChecked: state.getIn(['vesTable', 'selected', props.tableName, props.id]),
});

function mapDispatchToProps(dispatch) {
  return {
    onSelectRow(tableName, item) {
      dispatch(selectRow(tableName, item));
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'rowCheckbox', reducer });

export default compose(
  withReducer,
  withConnect,
)(RowCheckbox);
