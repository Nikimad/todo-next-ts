import type { BoardPayloadAction } from ".";
import type { BoardEntityResponse, BoardStatusResponse, UnnormalDataResponse } from "./api";

import { call, put, takeEvery } from "redux-saga/effects";
import { boardsActions } from ".";
import { createBoard, editBoard, deleteBoard, getBoards } from "./api";
import normalizeData from "@/lib/helpers/normalizeData";
import { tasksActions } from "../tasks";
import { todosActions } from "../todos";

function* getBoardsSaga() {
  const [errors, data]: UnnormalDataResponse = yield call(getBoards);
  if (data){
    const nomalizedData = normalizeData(data);
    yield put(boardsActions.setBoards(nomalizedData.boards));
    yield put(tasksActions.setTasks(nomalizedData.tasks));
    yield put(todosActions.setTodos(nomalizedData.todos));
  }
}

function* addBoardSaga({ payload }: BoardPayloadAction) {
  const [errors, newBoard]: BoardEntityResponse = yield call(createBoard, payload);
  if (newBoard) {
    yield put(boardsActions.addBoardSuccess(newBoard));
  }
}

function* updateBoardSaga({ payload }: BoardPayloadAction) {
  const [errors, editedBoard]: BoardEntityResponse = yield call(
    editBoard,
    payload
  );
  if (editedBoard) {
    yield put(
      boardsActions.updateBoardSuccess({ id: payload.id, changes: editedBoard })
    );
  }
}

function* removeBoardSaga({ payload }: BoardPayloadAction) {
  const [errors, meta]: BoardStatusResponse = yield call(deleteBoard, payload);
  if (meta && meta.status === "ok") {
    yield put(boardsActions.removeBoardSuccess(payload.id));
  }
}

export function* boardsWatcherSaga() {
  yield takeEvery(boardsActions.getBoards, getBoardsSaga);
  yield takeEvery(boardsActions.addBoard, addBoardSaga);
  yield takeEvery(boardsActions.updateBoard, updateBoardSaga);
  yield takeEvery(boardsActions.removeBoard, removeBoardSaga);
}
