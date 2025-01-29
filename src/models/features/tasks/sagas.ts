import type { TaskPayloadAction } from ".";
import type { TaskEntityResponse, TaskStatusResponse } from "./api";

import { call, put, takeEvery } from "redux-saga/effects";
import { tasksActions } from ".";
import { createTask, editTask, deleteTask } from "./api";
import getTask from "@/lib/helpers/getTask";

function* addTaskSaga({ payload }: TaskPayloadAction) {
  const [errors, newTask]: TaskEntityResponse = yield call(createTask, payload);
  if (newTask) {
    const handleUnnormalTask = getTask(String(payload.boardId));
    yield put(tasksActions.addTaskSuccess(handleUnnormalTask(newTask)));
  }
  if (errors) {
    /*status reject*/
  }
}

function* updateTaskSaga({ payload }: TaskPayloadAction) {
  const [errors, editedTask]: TaskEntityResponse = yield call(
    editTask,
    payload
  );
  if (editedTask) {
    const handleUnnormalTask = getTask(String(payload.boardId));
    yield put(
      tasksActions.updateTaskSuccess({ id: payload.id, changes: handleUnnormalTask(editedTask) })
    );
  }
  if (errors) {
    /*status reject*/
  }
}

function* removeTaskSaga({ payload }: TaskPayloadAction) {
  const [errors, meta]: TaskStatusResponse = yield call(deleteTask, payload);
  if (meta && meta.status === "ok") {
    yield put(tasksActions.removeTaskSuccess(payload.id));
  }
  if (errors) {
    /*status reject*/
  }
}

export function* tasksWatcherSaga() {
  yield takeEvery(tasksActions.addTask, addTaskSaga);
  yield takeEvery(tasksActions.updateTask, updateTaskSaga);
  yield takeEvery(tasksActions.removeTask, removeTaskSaga);
}
