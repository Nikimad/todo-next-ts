import type { PayloadAction } from "@reduxjs/toolkit";
import { boardsActions, type BoardEntity } from "../boards";

import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import getDelegateCreator from "@/lib/helpers/getDelegateCreator";

export type TaskEntity = {
  id: string | number;
  boardId: BoardEntity["id"];
  title: string;
  question_type: "multiple";
};

export type TaskStatus = {
  status: string;
}; //@duplicate: BoardStatus, TodoStatus

export type TaskPayloadAction = PayloadAction<TaskEntity>;

export const tasksAdapter = createEntityAdapter<TaskEntity>();

const delegateCreator =
  getDelegateCreator<ReturnType<typeof tasksAdapter.getInitialState>>();
const delegateActionWithPayloadToSaga = delegateCreator<TaskEntity>();

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksAdapter.getInitialState(),
  reducers: {
    addTask: delegateActionWithPayloadToSaga,
    updateTask: delegateActionWithPayloadToSaga,
    removeTask: delegateActionWithPayloadToSaga,
    setTasks: tasksAdapter.setAll,
    addTaskSuccess: tasksAdapter.addOne,
    updateTaskSuccess: tasksAdapter.updateOne,
    removeTaskSuccess: tasksAdapter.removeOne,
  },
  extraReducers: (builder) =>
    builder.addCase(boardsActions.removeBoardSuccess, (state, { payload }) => {
      const removedTasksIds = state.ids.filter(
        (taskId) => state.entities[taskId].boardId == payload
      );
      tasksAdapter.removeMany(state, removedTasksIds);
    }),
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice.reducer;
