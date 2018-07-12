/*
 *
 * VesTable actions
 *
 */

import {
  DEFAULT_ACTION,
  TABLES_SORTBY,
  SELECT_ALL,
} from './constants';


export function defaultAction(payload) {
  return {
    type: DEFAULT_ACTION,
    payload,
  };
}
export function selectAll(payload) {
  return {
    type: SELECT_ALL,
    payload,
  };
}

export function sortTable(tableName, payload) {  
  return {
    type: TABLES_SORTBY,
    tableName,
    payload,
  };
}
