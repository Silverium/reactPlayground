import { createSelector } from 'reselect';

/**
 * Direct selector to the vesTable state domain
 */
const selectVesTableDomain = state => state.get('vesTable');
// const selectGlobal = state => state.get('global');

/**
 * Other specific selectors
 */

/**
 * Default selector used by VesTable
 */
// const makeSelectVesTable = () =>
//   createSelector(selectVesTableDomain, substate => substate.toJS());
const makeSelectSortTable = () =>
  createSelector(selectVesTableDomain, vesTable => vesTable.get('sorting'));
const makeSelectSelected = () =>
  createSelector(selectVesTableDomain, vesTable => vesTable.get('selected'));

export { makeSelectSortTable, makeSelectSelected };
