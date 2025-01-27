import { all } from "redux-saga/effects";
import { authorizationWatcherSaga } from "./features/authorization/sagas";
import { boardsWatcherSaga } from "./features/boards/sagas";
import { tasksWatcherSaga } from "./features/tasks/sagas";
import { todosWatcherSaga } from "./features/todos/sagas";

function* rootSaga() {
  yield all([
    authorizationWatcherSaga(),
    boardsWatcherSaga(),
    tasksWatcherSaga(),
    todosWatcherSaga(),
  ]);
}

export default rootSaga;
