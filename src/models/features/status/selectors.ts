import type { RootState } from "@/models";

import { createSelector } from "@reduxjs/toolkit";

const selectStatusRoot = createSelector(
  (state: RootState) => state,
  ({ status }) => status
);

export const statusSelectors = {
  selectIsOk: createSelector(selectStatusRoot, ({ isOk }) => isOk),
  selectIsLoading: createSelector(selectStatusRoot, ({ isLoading }) => isLoading),
};
