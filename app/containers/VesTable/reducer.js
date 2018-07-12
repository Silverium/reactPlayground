/*
 *
 * VesTable reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  TABLES_SORTBY,
  INIT,
} from './constants';

const initialState = fromJS({sortTable:{}});

function vesTableReducer(state = initialState, action) {
  switch (action.type) {
    case INIT:
      return state.set(action.payload.tableName, {});
    case DEFAULT_ACTION:
      return state;
    case TABLES_SORTBY:
      return state.setIn(['sortTable',action.tableName], action.payload);
    default:
      return state;
  }
}

export default vesTableReducer;
