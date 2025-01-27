import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import boards, { UnnormolizeBoardEntity, type BoardEntity } from "./features/boards";
import tasks, { type TaskEntity } from "./features/tasks";
import todos, { type TodoEntity } from "./features/todos";
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

export type UnnormolizeState = {
  boards: UnnormolizeBoardEntity[];
}

export type Entity = BoardEntity | TaskEntity | TodoEntity;

type Entities = { board: BoardEntity; task: TaskEntity; todo: TodoEntity };

type IfEquals<T, U, Y = unknown, N = never> = (<G>() => G extends T
  ? 1
  : 2) extends <G>() => G extends U ? 1 : 2
  ? Y
  : N;

export type EntityName<EntityType extends Entity> = keyof {
  [Name in keyof Entities as IfEquals<
    Entities[Name],
    EntityType,
    Name
  >]: Entities[Name];
};; 
