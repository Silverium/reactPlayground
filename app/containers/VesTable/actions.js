/*
 *
 * VesTable actions
 *
 */

import {
  DEFAULT_ACTION,
  TABLES_SORTBY,
  SELECT_ALL,
  SELECT_ROW,
} from './constants';

export function defaultAction(payload) {
  return {
    type: DEFAULT_ACTION,
    payload,
  };
}
export function selectAll(tableName, payload) {
  return {
    type: SELECT_ALL,
    tableName,
    payload,
  };
}

export function selectRow(tableName, payload) {
  return {
    type: SELECT_ROW,
    tableName,
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
