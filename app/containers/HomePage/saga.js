/**
 * Gets the repositories of the user from Github
 */

import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS, PRODUCTS_FETCH_ING, } from 'containers/App/constants';
import { reposLoaded, repoLoadingError, productsOK, productsKO } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
// import { delay } from 'redux-saga';


export function print(text) {
  console.log(`%cvariable: text`, 'background-color: lime;', text);

}

export function* helloSaga() {
  yield takeLatest(PRODUCTS_FETCH_ING, print, 'hello products');
}
/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);

    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}
export function* getProducts() {
  // Select username from store
  // const username = yield select(makeSelectUsername());
  const requestURL = `http://localhost:9000/api/products`;

  try {
    // Call our request helper (see 'utils/request')
    const products = (yield call(request, requestURL)).content;
    // yield call(delay,0);
    yield put(productsOK(products));
    console.log(`%cvariable: products`, 'background-color: lime;', products);
  } catch (err) {
    yield put(productsKO(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
}
export function* productsData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(PRODUCTS_FETCH_ING, getProducts);
}


export default function* rootSaga() {
  yield all([
    // helloSaga(),
    githubData(),
    productsData(),
  ]);
}
