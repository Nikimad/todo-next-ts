import type { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import type { TaskEntity } from "../tasks";

import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import getDelegateCreator from "@/lib/helpers/getDelegateCreator";

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

const delegateCreator = getDelegateCreator<ReturnType<typeof todosAdapter.getInitialState>>();
const delegateActionWithPayloadToSaga = delegateCreator<TodoEntity>();

export const todosSlice = createSlice({
  name: "todos",
  initialState: todosAdapter.getInitialState(),
  reducers: {
    addTodo: delegateActionWithPayloadToSaga,
    removeTodo: delegateActionWithPayloadToSaga,
    updateTodo: delegateActionWithPayloadToSaga,
    setTodos: todosAdapter.setAll,
    addTodoSuccess: todosAdapter.addOne,
    updateTodoSuccess: todosAdapter.updateOne,
    removeTodoSuccess: todosAdapter.removeOne,
  },
});

export const todosActions = todosSlice.actions;
export default todosSlice.reducer;
