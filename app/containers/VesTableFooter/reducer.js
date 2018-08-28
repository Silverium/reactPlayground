/*
 *
 * VesTableFooter reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, UPDATE_ROWS_PER_PAGE } from './constants';

const initialState = fromJS({ rowsPerPage: 5, page: 1 });

function vesTableFooterReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case UPDATE_ROWS_PER_PAGE:
      return state.set('rowsPerPage', action.payload);
    default:
      return state;
  }
}

export default vesTableFooterReducer;
