import type { RootState } from "@/models";

import { createSelector } from "@reduxjs/toolkit";
import {  tasksAdapter } from ".";

const selectTasksRoot = createSelector(
  (state: RootState) => state,
  ({ tasks }) => tasks
);

const tasksAdapterSelectors = tasksAdapter.getSelectors(selectTasksRoot);

export const tasksSelectors = {
  ...tasksAdapterSelectors,
  selectAllByBoardId: (boardId: string) =>
    createSelector(tasksAdapterSelectors.selectAll, (entities) =>
      entities.filter((task) => String(task.boardId) === boardId)
    ),
};
