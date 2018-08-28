/*
 *
 * VesTableFooter actions
 *
 */

import { DEFAULT_ACTION, UPDATE_ROWS_PER_PAGE } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function updateRowsPerPage(payload) {
  return {
    type: UPDATE_ROWS_PER_PAGE,
    payload,
  };
}
