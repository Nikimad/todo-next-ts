import type { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export type BoardEntity = {
  id: string | number;
  title: string;
};

export type BoardStatus = {
  status: string;
} //@duplicate: TaskStatus, TodoStatus

export type BoardPayloadAction = PayloadAction<BoardEntity>;

export const boardsAdapter = createEntityAdapter<BoardEntity>();

const delegateActionToSaga: CaseReducer<
  ReturnType<typeof boardsAdapter.getInitialState>,
  BoardPayloadAction
> = (state) => state;

export const boardsSlice = createSlice({
  name: "boards",
  initialState: boardsAdapter.getInitialState(),
  reducers: {
    addBoard: delegateActionToSaga,
    updateBoard: delegateActionToSaga,
    removeBoard: delegateActionToSaga,
    addBoardSuccess: boardsAdapter.addOne,
    updateBoardSuccess: boardsAdapter.updateOne,
    removeBoardSuccess: boardsAdapter.removeOne,
  },
});

export const boardsActions = boardsSlice.actions;
export default boardsSlice.reducer;
