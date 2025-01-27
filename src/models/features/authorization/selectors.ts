import type { RootState } from "@/models";

import { createSelector } from "@reduxjs/toolkit";

const selectAuthorizationRoot = createSelector(
  (state: RootState) => state,
  ({ authorization }) => authorization
);

export const authorizationSelectors = {
  selectIsUserAuthorized: createSelector(selectAuthorizationRoot, ({ user }) =>
    Boolean(user)
  ),
  selectIsLoading: createSelector(
    selectAuthorizationRoot,
    ({ isLoading }) => isLoading
  ),
  selectErrors: createSelector(selectAuthorizationRoot, ({ errors }) => errors),
};
