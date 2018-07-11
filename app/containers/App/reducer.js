/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  PRODUCTS_FETCH_ING,
  PRODUCTS_FETCH_OK,
  PRODUCTS_FETCH_KO,
  TABLES_SORTBY,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  productsFetching: false,
  productsKO: false,
  productsData: false,
  tables: {
    products: { sortBy: false, order: 'asc' }
  }
});

function appReducer(state = initialState, action) {
  switch (action.type) {
  case LOAD_REPOS:
    return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
  case LOAD_REPOS_SUCCESS:
    return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
  case LOAD_REPOS_ERROR:
    return state
        .set('error', action.error)
        .set('loading', false);
  case PRODUCTS_FETCH_ING:
    return state
        .set('productsFetching', true)
        .set('productsKO', false)
        .set('productsData', false);
  case PRODUCTS_FETCH_OK:
    return state
        .set('productsData', action.products)
        .set('productsFetching', false);
  case PRODUCTS_FETCH_KO:
    return state
        .set('productsKO', action.error)
        .set('productsFetching', false);
  case TABLES_SORTBY:
    return state
        .setIn(['tables', action.payload.tableName, 'sortBy'], action.payload.sortBy)
        .setIn(['tables', action.payload.tableName, 'order'], action.payload.order);
  default:
    return state;
  }
}

export default appReducer;
