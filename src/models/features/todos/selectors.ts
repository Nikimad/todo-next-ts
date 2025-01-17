import type { RootState } from "@/models";

import { createSelector } from "@reduxjs/toolkit";
import { todosAdapter } from ".";

const selectTodosRoot = createSelector(
  (state: RootState) => state,
  ({ todos }) => todos
);

export const todosSelectors = todosAdapter.getSelectors(selectTodosRoot);
