import { Errors } from "@/lib/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import getDelegateCreator from "@/lib/helpers/getDelegateCreator";

export type AuthorizationData = {
  username: string;
  password: string;
  is_admin: true;
  password_confirmation?: string;
};

export type User = {
  id: string | number;
  username: string;
  is_admin: true;
} | null;

export type Status = {
  success: boolean;
};

export type AuthorizationDataPayloadAction = PayloadAction<AuthorizationData>;
export type UserPayloadAction = PayloadAction<User>;

type AuthorizationState = {
  user: User;
  isLoading: boolean;
  errors: Errors;
};

const initialState: AuthorizationState = {
  user: null,
  isLoading: false,
  errors: null,
};

const delegateCreator = getDelegateCreator<AuthorizationState>();
const delegateActionWithPayloadToSaga = delegateCreator<AuthorizationData>(
  (state) => {
    state.isLoading = true;
    state.errors = null;
  }
);
const delegateActionWithoutPayloadToSaga = delegateCreator<void>();

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    signin: delegateActionWithPayloadToSaga,
    signup: delegateActionWithPayloadToSaga,
    logout: delegateActionWithoutPayloadToSaga,
    setUser: (state, { payload }: UserPayloadAction) => {
      state.isLoading = false;
      state.errors = null;
      state.user = payload;
    },
    setErrors: (state, { payload }: PayloadAction<Errors>) => {
      console.log(payload);
      state.isLoading = false;
      state.errors = payload;
    },
  },
});

export const authorizationActions = authorizationSlice.actions;
export default authorizationSlice.reducer;
