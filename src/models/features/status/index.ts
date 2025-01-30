import { Errors } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStatus = {
  isOk: boolean;
  isLoading: boolean;
};

const initialState: InitialStatus = {
  isOk: true,
  isLoading: false,
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    setStatus: (state, { payload }: PayloadAction<Errors>) => {
      state.isLoading = false;
      state.isOk = !Boolean(payload);
    },
  },
});

export const statusActions = statusSlice.actions;
export default statusSlice.reducer;
