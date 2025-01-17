import { createSlice, createEntityAdapter, PayloadAction } from "@reduxjs/toolkit";

type TodoEntity = { id: number };//@duplicate

export const todosAdapter = createEntityAdapter<TodoEntity>();

export const todosSlice = createSlice({
  name: "todos",
  initialState: todosAdapter.getInitialState(),
  reducers: {
    addTodo: (state, {}: PayloadAction<TodoEntity>) => state,
    addTodoSuccess: todosAdapter.addOne,
  },
});

export const todosActions = todosSlice.actions;
export default todosSlice.reducer;
