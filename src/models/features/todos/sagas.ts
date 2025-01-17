import type { PayloadAction } from "@reduxjs/toolkit";
import { put, takeEvery } from "redux-saga/effects";
import { todosActions } from ".";

function* addTodoSaga({
  payload,
}: PayloadAction<{
  id: number;
}>) {
  yield put(todosActions.addTodoSuccess(payload));
}

export function* todosWatcherSaga() {
  yield takeEvery(todosActions.addTodo.toString(), addTodoSaga);
}
