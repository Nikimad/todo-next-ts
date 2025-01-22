import type { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import type { BoardEntity } from "../boards";

import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export type TaskEntity = {
  id: string | number;
  boardId: BoardEntity["id"];
  title: string;
  question_type: "multiple";
};

export type TaskStatus = {
  status: string;
} //@duplicate: BoardStatus, TodoStatus

export type TaskPayloadAction = PayloadAction<TaskEntity>;

export const tasksAdapter = createEntityAdapter<TaskEntity>();

const delegateActionToSaga: CaseReducer<
  ReturnType<typeof tasksAdapter.getInitialState>,
  TaskPayloadAction
> = (state) => state;

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksAdapter.getInitialState(),
  reducers: {
    addTodo: delegateActionToSaga,
    updateTodo: delegateActionToSaga,
    removeTodo: delegateActionToSaga,
    addTodoSuccess: tasksAdapter.addOne,
    updateTodoSuccess: tasksAdapter.updateOne,
    removeTodoSuccess: tasksAdapter.removeOne,
  },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice.reducer;
