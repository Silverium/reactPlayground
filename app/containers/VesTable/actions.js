/*
 *
 * VesTable actions
 *
 */

import {
  DEFAULT_ACTION,
} from './constants';

import {
  TABLES_SORTBY,
} from 'containers/App/constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function sortTable(payload) {
  console.log(`%cvariable: payload from actions`, 'background-color: lime;', payload);
  
  return {
    type: TABLES_SORTBY,
    payload,
  };
}