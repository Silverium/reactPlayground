import { createSelector } from 'reselect';

/**
 * Direct selector to the vesTableFooter state domain
 */
const selectVesTableFooterDomain = (state) => state.get('vesTableFooter');

/**
 * Other specific selectors
 */


/**
 * Default selector used by VesTableFooter
 */

const makeSelectVesTableFooter = () => createSelector(
  selectVesTableFooterDomain,
  (substate) => substate.toJS()
);
const makeSelectVesTableFooterPage = () => createSelector(
  selectVesTableFooterDomain,
  (substate) => substate.get('page')
);
const makeSelectVesTableFooterRowsPerPage = () => createSelector(
  selectVesTableFooterDomain,
  (substate) => substate.get('rowsPerPage')
);

export default makeSelectVesTableFooter;
export {
  makeSelectVesTableFooter,
  makeSelectVesTableFooterPage,
  makeSelectVesTableFooterRowsPerPage

};
