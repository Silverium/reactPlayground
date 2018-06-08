/*
 *
 * ProductsPage actions
 *
 */

import {
  DEFAULT_ACTION,
  PRODUCTS_FETCH_ING,
  PRODUCTS_FETCH_OK,
  PRODUCTS_FETCH_KO,
} from './constants';

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