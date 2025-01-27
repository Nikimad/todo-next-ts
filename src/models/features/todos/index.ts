import type { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import type { TaskEntity } from "../tasks";

import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export type TodoEntity = {
  id: string | number;
  taskId: TaskEntity["id"];
  text: string;
  is_right: boolean;
};

export type TodoStatus = {
  status: string;
}; //@duplicate: BoardStatus, TaskStatus

export type TodoPayloadAction = PayloadAction<TodoEntity>;

export const todosAdapter = createEntityAdapter<TodoEntity>();

const delegateActionToSaga: CaseReducer<
  ReturnType<typeof todosAdapter.getInitialState>,
  TodoPayloadAction
> = (state) => state;

export const todosSlice = createSlice({
  name: "todos",
  initialState: todosAdapter.getInitialState(),
  reducers: {
    addTodo: delegateActionToSaga,
    removeTodo: delegateActionToSaga,
    updateTodo: delegateActionToSaga,
    setTodos: todosAdapter.setAll,
    addTodoSuccess: todosAdapter.addOne,
    updateTodoSuccess: todosAdapter.updateOne,
    removeTodoSuccess: todosAdapter.removeOne,
  },
});

export const todosActions = todosSlice.actions;
export default todosSlice.reducer;
