import type { RootState } from "@/models";

import { createSelector } from "@reduxjs/toolkit";
import { tasksAdapter } from ".";

const selectTasksRoot = createSelector(
  (state: RootState) => state,
  ({ tasks }) => tasks
);

export const tasksSelectors = tasksAdapter.getSelectors(selectTasksRoot);
