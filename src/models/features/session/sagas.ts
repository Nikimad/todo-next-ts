import { sessionActions, SignPayloadAction } from ".";

import { call, put, takeEvery } from "redux-saga/effects";

import { sign, logout, UserResponse, StatusResponse } from "./api";

function* signSaga({ payload }: SignPayloadAction) {
  const [errors, user]: UserResponse = yield call(sign, payload);
  if (user) {
    yield put(sessionActions.setSession(user));
  }
}

function* logoutSaga() {
  const [errors, status]: StatusResponse = yield call(logout);
  if (status?.success === "ok") {
    yield put(sessionActions.setSession(null));
  }
}

export function* sessionWatcherSaga() {
  yield takeEvery(sessionActions.signin, signSaga);
  yield takeEvery(sessionActions.signup, signSaga);
  yield takeEvery(sessionActions.logout, logoutSaga);
}
