import type { RootState } from "@/models";

import { createSelector } from "@reduxjs/toolkit";
import { boardsAdapter } from ".";

const selectBoardsRoot = createSelector(
  (state: RootState) => state,
  ({ boards }) => boards
);

export const boardsSelectors = boardsAdapter.getSelectors(selectBoardsRoot);
