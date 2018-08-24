/*
 *
 * VesTable reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  TABLES_SORTBY,
  SELECT_ALL,
  SELECT_ROW
} from './constants';

const initialState = fromJS({ sortTable: {}, selected: {}, numTest: 0 });

function vesTableReducer(state = initialState, action) {
  function selectRow() {
    const currentTable = state.getIn(['selected', action.tableName]);
    if (currentTable === undefined) {
      console.log(
        `%ctable ${action.tableName} was undefined. Initialized now`,
        'background-color: gold;'
      );
      return state.setIn(
        ['selected',
          action.tableName, action.payload._id],
        true
      );
    }

    const item = currentTable.has(action.payload._id);
    if (item) {
      return state.setIn(
        ['selected', action.tableName, action.payload._id],
        false
      );
    } else {
      return state.setIn(
        ['selected', action.tableName, action.payload._id],
        true
      );
    }
  }
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case TABLES_SORTBY:
      return state.setIn(['sortTable', action.tableName], action.payload);
    case SELECT_ALL:
      return state.setIn(['sortTable', action.tableName], action.payload);
    case SELECT_ROW:
      return selectRow();
    default:
      return state;
  }
}

export default vesTableReducer;
