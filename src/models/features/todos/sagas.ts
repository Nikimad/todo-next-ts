import type { TodoPayloadAction } from ".";
import type { TodoEntityResponse, TodoStatusResponse } from "./api";

import { call, put, takeEvery } from "redux-saga/effects";
import { todosActions } from ".";
import { createTodo, editTodo, deleteTodo } from "./api";
import getTodo from "@/lib/helpers/getTodo";

function* addTodoSaga({ payload }: TodoPayloadAction) {
  const [errors, newTodo]: TodoEntityResponse = yield call(createTodo, payload);
  if (newTodo) {
    const handleUnnormalTodo = getTodo(
      String(payload.boardId),
      String(payload.taskId)
    );
    yield put(todosActions.addTodoSuccess(handleUnnormalTodo(newTodo)));
  }
  if (errors) {
    /*status reject*/
  }
}

function* updateTodoSaga({ payload }: TodoPayloadAction) {
  const [errors, editedTodo]: TodoEntityResponse = yield call(
    editTodo,
    payload
  );
  if (editedTodo) {
    const handleUnnormalTodo = getTodo(
      String(payload.boardId),
      String(payload.taskId)
    );
    yield put(
      todosActions.updateTodoSuccess({
        id: payload.id,
        changes: handleUnnormalTodo(editedTodo),
      })
    );
  }
  if (errors) {
    /*status reject*/
  }
}

function* removeTodoSaga({ payload }: TodoPayloadAction) {
  const [errors, meta]: TodoStatusResponse = yield call(deleteTodo, payload);
  if (meta && meta.status === "ok") {
    yield put(todosActions.removeTodoSuccess(payload.id));
  }
  if (errors) {
    /*status reject*/
  }
}

export function* todosWatcherSaga() {
  yield takeEvery(todosActions.addTodo, addTodoSaga);
  yield takeEvery(todosActions.updateTodo, updateTodoSaga);
  yield takeEvery(todosActions.removeTodo, removeTodoSaga);
}
