/*
 *
 * VesTable actions
 *
 */

import {
  DEFAULT_ACTION,
  INIT,
  TABLES_SORTBY,
} from './constants';


export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function sortTable(tableName, payload) {
  console.log(`%cvariable: payload from actions`, 'background-color: lime;', payload);
  
  return {
    type: TABLES_SORTBY,
    tableName,
    payload,
  };
}
export function initTable(payload) {
  console.log(`%cvariable: payload from actions`, 'background-color: lime;', payload);
  
  return {
    type: INIT,
    payload,
  };
}