import { createSlice } from "@reduxjs/toolkit";

type InitialStatus = {
  isOk: boolean;
};

const initialState: InitialStatus = {
  isOk: true,
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setStatusReject: (state) => {
      state.isOk = false;
    },
  },
});

export const statusActions = statusSlice.actions;
export default statusSlice.reducer;
