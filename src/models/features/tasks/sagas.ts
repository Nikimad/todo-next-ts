import type { TaskPayloadAction } from ".";
import type { TaskEntityResponse, TaskStatusResponse } from "./api";

import { call, put, takeEvery } from "redux-saga/effects";
import { tasksActions } from ".";
import { createTask, editTask, deleteTask } from "./api";

function* addTaskSaga({ payload }: TaskPayloadAction) {
  const [errors, newTodo]: TaskEntityResponse = yield call(createTask, payload);
  if (newTodo) {
    yield put(tasksActions.addTaskSuccess({
      boardId: payload.boardId,
      ...newTodo,
    }));
  }
}

function* updateTaskSaga({ payload }: TaskPayloadAction) {
  const [errors, editedTodo]: TaskEntityResponse = yield call(
    editTask,
    payload
  );
  if (editedTodo) {
    yield put(
      tasksActions.updateTaskSuccess({ id: payload.id, changes: editedTodo })
    );
  }
}

function* removeTaskSaga({ payload }: TaskPayloadAction) {
  const [errors, meta]: TaskStatusResponse = yield call(deleteTask, payload);
  if (meta && meta.status === "ok") {
    yield put(tasksActions.removeTaskSuccess(payload.id));
  }
}

export function* tasksWatcherSaga() {
  yield takeEvery(tasksActions.addTask, addTaskSaga);
  yield takeEvery(tasksActions.updateTask, updateTaskSaga);
  yield takeEvery(tasksActions.removeTask, removeTaskSaga);
}
