import { all } from "redux-saga/effects";
import { todosWatcherSaga } from "./features/todos/sagas";
import { tasksWatcherSaga } from "./features/tasks/sagas";
import { boardsWatcherSaga } from "./features/boards/sagas";

function* rootSaga() {
  yield all([todosWatcherSaga(), tasksWatcherSaga(), boardsWatcherSaga()]);
}

export default rootSaga;
