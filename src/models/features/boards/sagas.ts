import type { BoardPayloadAction } from ".";
import type { BoardEntityResponse, BoardStatusResponse } from "./api";

import { call, put, takeEvery } from "redux-saga/effects";
import { boardsActions } from ".";
import { createBoard, editBoard, deleteBoard } from "./api";
import { tasksActions } from "../tasks";

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
  yield takeEvery(boardsActions.addBoard, addBoardSaga);
  yield takeEvery(boardsActions.updateBoard, updateBoardSaga);
  yield takeEvery(boardsActions.removeBoard, removeBoardSaga);
}
