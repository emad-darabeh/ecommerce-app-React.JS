import { all, takeLatest, put, call } from 'redux-saga/effects';

import { SIGN_OUT_SUCCESS } from '../user/user.types';

import { clearCart } from './cart.actions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}
// listeners
export function* onUserSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

// cart root saga
export function* cartSagas() {
  yield all([call(onUserSignOutSuccess)]);
}
