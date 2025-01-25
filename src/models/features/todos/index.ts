import type { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import type { TaskEntity, UnnormolizeTaskEntity } from "../tasks";

import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { boardsActions, UnnormolizeBoardEntity } from "../boards";
import { UnnormolizeState } from "@/models";

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
    addTodoSuccess: todosAdapter.addOne,
    updateTodoSuccess: todosAdapter.updateOne,
    removeTodoSuccess: todosAdapter.removeOne,
  },
  extraReducers: (builder) =>
    builder.addCase(
      boardsActions.setBoards,
      (state, { payload: { boards } }: PayloadAction<UnnormolizeState>) => {
        const normolizedAnswers: TodoEntity[] = boards.flatMap(
          ({ questions }: UnnormolizeBoardEntity) =>
            questions.flatMap(
              ({ id: taskId, answers }: UnnormolizeTaskEntity) =>
                answers.flatMap(({ id, text, is_right }) => ({
                  id,
                  text,
                  is_right,
                  taskId,
                }))
            )
        );
        
        todosAdapter.setAll(state, normolizedAnswers);
      }
    ),
});

export const todosActions = todosSlice.actions;
export default todosSlice.reducer;
