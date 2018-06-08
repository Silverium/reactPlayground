import { createSelector } from 'reselect';

/**
 * Direct selector to the productsPage state domain
 */
const selectProductsPageDomain = (state) => state.get('productsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProductsPage
 */

const makeSelectProductsPage = () => createSelector(
  selectProductsPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectProductsPage;
export {
  selectProductsPageDomain,
};
