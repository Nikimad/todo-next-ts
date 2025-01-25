import type { RootState } from "@/models";

import { createSelector } from "@reduxjs/toolkit";

const selectSessionRoot = createSelector(
  (state: RootState) => state,
  ({ session }) => session
);

export const sessionSelectors = {
  selectIsUserAuthorized: createSelector(selectSessionRoot, ({ user }) =>
    Boolean(user)
  ),
};
