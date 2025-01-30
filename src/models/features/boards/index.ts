import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import getDelegateCreator from "@/lib/helpers/getDelegateCreator";
import { authorizationActions } from "../authorization";

export type BoardEntity = {
  id: string | number;
  title: string;
  created_at: string;
};

export type BoardPayloadAction = PayloadAction<BoardEntity>;

export const boardsAdapter = createEntityAdapter<BoardEntity>({
  sortComparer: (a: BoardEntity, b: BoardEntity) => {
    const firstdate = new Date(a.created_at);
    const secdate = new Date(b.created_at);
    return Number(secdate) - Number(firstdate);
  },
});

const delegateCreator =
  getDelegateCreator<ReturnType<typeof boardsAdapter.getInitialState>>();
const delegateActionWithPayloadToSaga = delegateCreator<BoardEntity>();
const delegateActionWithoutPayloadToSaga = delegateCreator<void>();

export const boardsSlice = createSlice({
  name: "boards",
  initialState: boardsAdapter.getInitialState(),
  reducers: {
    getBoards: delegateActionWithoutPayloadToSaga,
    addBoard: delegateActionWithPayloadToSaga,
    updateBoard: delegateActionWithPayloadToSaga,
    removeBoard: delegateActionWithPayloadToSaga,
    addBoardSuccess: boardsAdapter.addOne,
    setBoards: boardsAdapter.setAll,
    updateBoardSuccess: boardsAdapter.updateOne,
    removeBoardSuccess: boardsAdapter.removeOne,
  },
  extraReducers: (builder) =>
    builder.addCase(authorizationActions.logout, boardsAdapter.removeAll),
});

export const boardsActions = boardsSlice.actions;
export default boardsSlice.reducer;
