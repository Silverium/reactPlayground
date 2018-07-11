/*
 *
 * ProductsPage actions
 *
 */

import {
  DEFAULT_ACTION,
} from './constants';
import {
  PRODUCTS_FETCH_ING,
  PRODUCTS_FETCH_OK,
  PRODUCTS_FETCH_KO,
} from 'containers/App/constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function productsOK(products) {
  return {
    type: PRODUCTS_FETCH_OK,
    products,
  };
}
export function productsKO(error) {
  return {
    type: PRODUCTS_FETCH_KO,
    error,
  };
}

export function productsLoad() {
  return {
    type: PRODUCTS_FETCH_ING,
    
  };
}