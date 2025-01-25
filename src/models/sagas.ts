import { all } from "redux-saga/effects";
import { sessionWatcherSaga } from "./features/session/sagas";
import { boardsWatcherSaga } from "./features/boards/sagas";
import { tasksWatcherSaga } from "./features/tasks/sagas";
import { todosWatcherSaga } from "./features/todos/sagas";

function* rootSaga() {
  yield all([
    sessionWatcherSaga(),
    boardsWatcherSaga(),
    tasksWatcherSaga(),
    todosWatcherSaga(),
  ]);
}

export default rootSaga;
