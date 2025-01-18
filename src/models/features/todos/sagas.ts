import type { TodoPayloadAction } from ".";
import type { TodoEntityResponse, TodoStatusResponse } from "./api";

import { call, put, takeEvery } from "redux-saga/effects";
import { todosActions } from ".";
import { createTodo, editTodo, deleteTodo } from "./api";

function* addTodoSaga({ payload }: TodoPayloadAction) {
  const [errors, newTodo]: TodoEntityResponse = yield call(createTodo, payload);
  yield put(todosActions.addTodoSuccess(payload));
}

function* updateTodoSaga({ payload }: TodoPayloadAction) {
  const [errors, editedTodo]: TodoEntityResponse = yield call(
    editTodo,
    payload
  );
  yield put(
    todosActions.updateTodoSuccess({ id: payload.id, changes: payload })
  );
}

function* removeTodoSaga({ payload }: TodoPayloadAction) {
  const [errors, meta]: TodoStatusResponse = yield call(deleteTodo, payload);
  yield put(todosActions.removeTodoSuccess(payload.id));
}

export function* todosWatcherSaga() {
  yield takeEvery(todosActions.addTodo, addTodoSaga);
  yield takeEvery(todosActions.updateTodo, updateTodoSaga);
  yield takeEvery(todosActions.removeTodo, removeTodoSaga);
}
