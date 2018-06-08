import { createSelector } from 'reselect';

/**
 * Direct selector to the productListItem state domain
 */
const selectProductListItemDomain = (state) => state.get('productListItem');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProductListItem
 */

const makeSelectProductListItem = () => createSelector(
  selectProductListItemDomain,
  (substate) => substate.toJS()
);

export default makeSelectProductListItem;
export {
  selectProductListItemDomain,
};
