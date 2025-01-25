import type { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { UnnormolizeTaskEntity } from "../tasks";
import { UnnormolizeState } from "@/models";

export type UnnormolizeBoardEntity = {
  id: string | number;
  title: string;
  questions: UnnormolizeTaskEntity[],
  created_at: string;
};

export type BoardEntity = {
  id: string | number;
  title: string;
  created_at: string;
};

export type BoardStatus = {
  status: string;
}; //@duplicate: TaskStatus, TodoStatus

export type BoardPayloadAction = PayloadAction<BoardEntity>;

export const boardsAdapter = createEntityAdapter<BoardEntity>({
  sortComparer: (a: BoardEntity, b: BoardEntity) => {
    const firstdate = new Date(a.created_at);
    const secdate = new Date(b.created_at);
    return Number(secdate) - Number(firstdate);
  }
});

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
    setBoards: (state, { payload: { boards } }: PayloadAction<UnnormolizeState>) => {
      const normolizedBoards: BoardEntity[] = boards.map(
        ({ title, id, created_at }) => ({ title, id, created_at })
      );
      
      boardsAdapter.setAll(state, normolizedBoards);
    },
  },
});

export const boardsActions = boardsSlice.actions;
export default boardsSlice.reducer;
