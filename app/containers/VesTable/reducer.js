/*
 *
 * VesTable reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';
import {
  TABLES_SORTBY,
} from 'containers/App/constants';
const initialState = fromJS({});

function vesTableReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case TABLES_SORTBY:
      return state.set('sortBy', action.payload);
    default:
      return state;
  }
}

export default vesTableReducer;
