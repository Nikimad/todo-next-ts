import type { TaskPayloadAction } from ".";
import type { TaskEntityResponse, TaskStatusResponse } from "./api";

import { call, put, takeEvery } from "redux-saga/effects";
import { createTask, editTask, deleteTask } from "./api";
import normalizeTask from "@/lib/normolizer/normalizeTask";
import { tasksActions } from ".";
import { statusActions } from "../status";

function* addTaskSaga({ payload }: TaskPayloadAction) {
  const [errors, newTask]: TaskEntityResponse = yield call(createTask, payload);
  if (newTask) {
    yield put(
      tasksActions.addTaskSuccess(
        normalizeTask(newTask, { boardId: payload.boardId })
      )
    );
  }
  if (errors) yield put(statusActions.setStatus(errors));
}

function* updateTaskSaga({ payload }: TaskPayloadAction) {
  const [errors, editedTask]: TaskEntityResponse = yield call(
    editTask,
    payload
  );
  if (editedTask) {
    yield put(
      tasksActions.updateTaskSuccess({
        id: payload.id,
        changes: normalizeTask(editedTask, { boardId: payload.boardId }),
      })
    );
  }
  if (errors) yield put(statusActions.setStatus(errors));
}

function* removeTaskSaga({ payload }: TaskPayloadAction) {
  const [errors, meta]: TaskStatusResponse = yield call(deleteTask, payload);
  if (meta && meta.status === "ok") {
    yield put(tasksActions.removeTaskSuccess(payload.id));
  }
  if (errors) yield put(statusActions.setStatus(errors));
}

export function* tasksWatcherSaga() {
  yield takeEvery(tasksActions.addTask, addTaskSaga);
  yield takeEvery(tasksActions.updateTask, updateTaskSaga);
  yield takeEvery(tasksActions.removeTask, removeTaskSaga);
}
