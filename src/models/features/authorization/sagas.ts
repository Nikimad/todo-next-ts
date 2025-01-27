import { call, put, takeEvery } from "redux-saga/effects";
import { authorizationActions, AuthorizationDataPayloadAction } from ".";
import { sign, logout, UserResponse, StatusResponse } from "./api";
import { statusActions } from "../status";

function* signSaga({ payload }: AuthorizationDataPayloadAction) {
  const [errors, user]: UserResponse = yield call(sign, payload);
  if (user) yield put(authorizationActions.setUser(user));
  if (errors) yield put(authorizationActions.setErrors(errors));
}

function* logoutSaga() {
  const [errors, status]: StatusResponse = yield call(logout);
  if (status?.success) yield put(authorizationActions.setUser(null));
  if (errors) yield put(statusActions.setStatusReject());
}

export function* authorizationWatcherSaga() {
  yield takeEvery(authorizationActions.signin, signSaga);
  yield takeEvery(authorizationActions.signup, signSaga);
  yield takeEvery(authorizationActions.logout, logoutSaga);
}
