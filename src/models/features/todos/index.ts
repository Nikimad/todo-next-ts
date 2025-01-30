import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoEntity } from "@/models/types/entities";
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import getDelegateCreator from "@/lib/helpers/getDelegateCreator";
import { boardsActions } from "../boards";
import { tasksActions } from "../tasks";
import { authorizationActions } from "../authorization";


export type TodoPayloadAction = PayloadAction<TodoEntity>;

export const todosAdapter = createEntityAdapter<TodoEntity>();

const delegateCreator =
  getDelegateCreator<ReturnType<typeof todosAdapter.getInitialState>>();
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
  extraReducers: (builder) =>
    builder
      .addCase(tasksActions.removeTaskSuccess, (state, { payload }) => {
        const removedTodosIds = state.ids.filter(
          (todoId) => state.entities[todoId].taskId == payload
        );
        todosAdapter.removeMany(state, removedTodosIds);
      })
      .addCase(boardsActions.removeBoardSuccess, (state, { payload }) => {
        const removedTodosIds = state.ids.filter(
          (taskId) => state.entities[taskId].boardId == payload
        );
        todosAdapter.removeMany(state, removedTodosIds);
      })
      .addCase(authorizationActions.logout, todosAdapter.removeAll),
});

export const todosActions = todosSlice.actions;
export default todosSlice.reducer;
