import type { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export type TodoEntity = {
  id: string | number;
  taskId: string | number;
  text: string;
  is_right: boolean;
}; //@duplicate

export type TodoStatus = {
  status: string;
} //@duplicate

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
    updateTodo: delegateActionToSaga,
    removeTodo: delegateActionToSaga,
    addTodoSuccess: todosAdapter.addOne,
    updateTodoSuccess: todosAdapter.updateOne,
    removeTodoSuccess: todosAdapter.removeOne,
  },
});

export const todosActions = todosSlice.actions;
export default todosSlice.reducer;
