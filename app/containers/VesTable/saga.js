import {
  /* take, */ all,
  /* call, put, */ select,
  takeLatest,
} from 'redux-saga/effects';
import { SELECT_ROW } from './constants';

import { makeSelectSelection } from 'containers/VesTable/selectors';
function logMe(text) {
  console.log(`%cvariable: text`, 'background-color: lime;', text);

  return () => true;
}

export function* selectRow() {
  // Watches for SELECT_ROW actions and calls getRepos when one comes in.
  // It will be cancelled automatically on component unmount
  const selection = yield select(makeSelectSelection());
  console.log(`%cvariable: selection`, 'background-color: lime;', selection);

  yield takeLatest(SELECT_ROW, logMe);
}
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield all([
    // helloSaga(),
    selectRow(),
  ]);
}
