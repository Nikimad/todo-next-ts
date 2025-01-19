import type { TodoPayloadAction } from ".";
import type { TodoEntityResponse, TodoStatusResponse } from "./api";

import { call, put, takeEvery } from "redux-saga/effects";
import { todosActions } from ".";
import { createTodo, editTodo, deleteTodo } from "./api";

function* addTodoSaga({ payload }: TodoPayloadAction) {
  const [errors, newTodo]: TodoEntityResponse = yield call(createTodo, payload);
  if (newTodo) {
    yield put(todosActions.addTodoSuccess(newTodo));
  }
}

function* updateTodoSaga({ payload }: TodoPayloadAction) {
  const [errors, editedTodo]: TodoEntityResponse = yield call(
    editTodo,
    payload
  );
  if (editedTodo) {
    yield put(
      todosActions.updateTodoSuccess({ id: payload.id, changes: editedTodo })
    );
  }
}

function* removeTodoSaga({ payload }: TodoPayloadAction) {
  const [errors, meta]: TodoStatusResponse = yield call(deleteTodo, payload);
  if (meta && meta.status === "ok") {
    yield put(todosActions.removeTodoSuccess(payload.id));
  }
}

export function* todosWatcherSaga() {
  yield takeEvery(todosActions.addTodo, addTodoSaga);
  yield takeEvery(todosActions.updateTodo, updateTodoSaga);
  yield takeEvery(todosActions.removeTodo, removeTodoSaga);
}
