import type { TodoPayloadAction } from ".";
import type { TodoEntityResponse, TodoStatusResponse } from "./api";

import { call, put, takeEvery } from "redux-saga/effects";
import { createTodo, editTodo, deleteTodo } from "./api";
import normalizeTodo from "@/lib/normolizer/normalizeTodo";
import { todosActions } from ".";
import { statusActions } from "../status";

function* addTodoSaga({ payload }: TodoPayloadAction) {
  const [errors, newTodo]: TodoEntityResponse = yield call(createTodo, payload);
  if (newTodo) {
    yield put(
      todosActions.addTodoSuccess(
        normalizeTodo(newTodo, {
          boardId: payload.boardId,
          taskId: payload.taskId,
        })
      )
    );
  }
  if (errors) yield put(statusActions.setStatus(errors));
}

function* updateTodoSaga({ payload }: TodoPayloadAction) {
  const [errors, editedTodo]: TodoEntityResponse = yield call(
    editTodo,
    payload
  );
  if (editedTodo) {
    yield put(
      todosActions.updateTodoSuccess({
        id: payload.id,
        changes: normalizeTodo(editedTodo, {
          boardId: payload.boardId,
          taskId: payload.taskId,
        }),
      })
    );
  }
  if (errors) yield put(statusActions.setStatus(errors));
}

function* removeTodoSaga({ payload }: TodoPayloadAction) {
  const [errors, meta]: TodoStatusResponse = yield call(deleteTodo, payload);
  if (meta && meta.status === "ok") {
    yield put(todosActions.removeTodoSuccess(payload.id));
  }
  if (errors) if (errors) yield put(statusActions.setStatus(errors));
}

export function* todosWatcherSaga() {
  yield takeEvery(todosActions.addTodo, addTodoSaga);
  yield takeEvery(todosActions.updateTodo, updateTodoSaga);
  yield takeEvery(todosActions.removeTodo, removeTodoSaga);
}
