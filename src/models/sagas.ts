import { all } from "redux-saga/effects";
import { todosWatcherSaga } from "./features/todos/sagas";

function* rootSaga() {
  yield all([todosWatcherSaga()]);
}

export default rootSaga;
