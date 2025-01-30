import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import boards from "./features/boards";
import tasks from "./features/tasks";
import todos from "./features/todos";
import authorization from "./features/authorization";
import status from "./features/status";
import rootSaga from "./sagas";

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: {
      authorization,
      status,
      boards,
      tasks,
      todos,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
