import { all, take, call, put, select, takeLatest } from 'redux-saga/effects';
import {  PRODUCTS_FETCH_ING, } from 'containers/App/constants';
import {  productsOK, productsKO } from 'containers/App/actions';
import request from 'utils/request';


export function* getProducts() {
  const requestURL = `http://localhost:9000/api/products`;

  try {
    // Call our request helper (see 'utils/request')
    const products = (yield call(request, requestURL)).content;
    yield new Promise(res=>setTimeout(()=>res('whatever'),3000));
    yield put(productsOK(products));
    console.log(`%cvariable: products`, 'background-color: lime;', products);
  } catch (err) {
    yield put(productsKO(err));
  }
}


export function* productsData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(PRODUCTS_FETCH_ING, getProducts);
}


// Individual exports for testing
export default function* rootSaga() {
  yield all([
    productsData(),
  ]);
}