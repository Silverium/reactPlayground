/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentUser')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);
const makeSelectProductsFetching = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('productsFetching')
);
const makeSelectProductsData = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('productsData')
);
const makeSelectProductsKO = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('productsKO')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectRepos = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'repositories'])
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectProductsFetching,
  makeSelectProductsData,
  makeSelectProductsKO,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
};
