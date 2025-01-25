import { Errors } from "@/lib/types";
import type { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

export type Sign = {
  username: string;
  password: string;
  password_confirmation?: string;
};

export type User = {
  id: string | number;
  username: string;
  is_admin: true;
};

export type Status = {
    success: "ok";
}

type InitialSession = {
  user: User | null;
  errors: Errors;
};

export type SignPayloadAction = PayloadAction<Sign | never>;
export type UserPayloadAction = PayloadAction<User | null>;

const initialState: InitialSession = {
  user: null,
  errors: null,
};

const delegateActionToSaga: CaseReducer<InitialSession, SignPayloadAction> = (
  state
) => state;

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    signin: delegateActionToSaga,
    signup: delegateActionToSaga,
    logout: delegateActionToSaga,
    setSession: (state, { payload }: UserPayloadAction) => {
      state.user = payload;
    },
    setErrors: (state, { payload }: PayloadAction<Errors>) => {
      state.errors = payload;
    },
  },
});

export const sessionActions = sessionSlice.actions;
export default sessionSlice.reducer;
