import type { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { boardsActions, UnnormolizeBoardEntity, type BoardEntity } from "../boards";

import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { TodoEntity } from "../todos";
import { UnnormolizeState } from "@/models";

export type UnnormolizeTaskEntity = {
  id: string | number;
  title: string;
  question_type: "multiple";
  answers: TodoEntity[];
};

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

const delegateActionToSaga: CaseReducer<
  ReturnType<typeof tasksAdapter.getInitialState>,
  TaskPayloadAction
> = (state) => state;

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksAdapter.getInitialState(),
  reducers: {
    addTask: delegateActionToSaga,
    updateTask: delegateActionToSaga,
    removeTask: delegateActionToSaga,
    addTaskSuccess: tasksAdapter.addOne,
    updateTaskSuccess: tasksAdapter.updateOne,
    removeTaskSuccess: tasksAdapter.removeOne,
  },
  extraReducers: (builer) =>
    builer.addCase(
      boardsActions.setBoards,
      (state, { payload: { boards } }: PayloadAction<UnnormolizeState>) => {
        const normolizedTasks: TaskEntity[] = boards.flatMap(
          ({ id: boardId, questions }: UnnormolizeBoardEntity) =>
            questions.map(({ title, id }) => ({
              id,
              boardId,
              title,
              question_type: "multiple",
            }))
        );
        
        tasksAdapter.setAll(state, normolizedTasks);
      }
    ),
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice.reducer;
