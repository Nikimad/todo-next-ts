import type { RootState } from "@/models";

import { createSelector } from "@reduxjs/toolkit";
import { todosAdapter } from ".";

const selectTodosRoot = createSelector(
  (state: RootState) => state,
  ({ todos }) => todos
);

const todosAdapterSelectors = todosAdapter.getSelectors(selectTodosRoot);

export const todosSelectors = {
  ...todosAdapterSelectors,
  selectAllByTaskId: (taskId: string) =>
    createSelector(todosAdapterSelectors.selectAll, (entities) =>
      entities.filter((todo) => String(todo.taskId) === taskId)
    ),
};
