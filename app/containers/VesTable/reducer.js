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
  SELECT_ROW,
} from './constants';

const initialState = fromJS({ sortTable: {}, selected: {}, numTest: 0 });

function vesTableReducer(state = initialState, action) {
  function selectRow() {
    console.log(`%cvariable: state`, 'background-color: lime;', state);

    if (state.getIn(['selected', action.tableName]) === undefined) {
      console.log(
        `%ctable ${action.tableName} was undefined. Initialized now`,
        'background-color: gold;'
      );
      return state.set(
        'selected',
        fromJS({
          [action.tableName]: [action.payload._id],
        })
      );
    }

    const currentTable = state.getIn(['selected', action.tableName]);
    console.log(
      `%cvariable: currentTable`,
      'background-color: lime;',
      currentTable.toJS()
    );

    const item = currentTable.find(o => o === action.payload._id);
    if (item) {
      return state.setIn(
        'selected',
        fromJS({
          [action.tableName]: currentTable.filter(e => e !== item),
        })
      );
    } else {
      return state.updateIn(['selected', action.tableName], arr =>
        arr.push(action.payload._id)
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
