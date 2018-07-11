import { createSelector } from 'reselect';

/**
 * Direct selector to the vesTable state domain
 */
const selectVesTableDomain = (state) => state.get('vesTable');
const selectGlobal = (state) => state.get('global');

/**
 * Other specific selectors
 */


/**
 * Default selector used by VesTable
 */

const makeSelectVesTable = () => createSelector(
  selectVesTableDomain,
  (substate) => substate.toJS()
);
const makeSelectSortTable = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['tables', 'products'])

)

export {
  makeSelectSortTable,
};
