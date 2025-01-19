import { PayloadAction, PayloadActionCreator } from "@reduxjs/toolkit";
import type { AppDispatch, AppStore, RootState } from ".";

import { useCallback } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
export const useAction = <Payload>(action: PayloadActionCreator<Payload>) => {
  const dispatch = useAppDispatch();
  const dispatchAction = useCallback(
    (payload: Payload): PayloadAction<Payload> => dispatch(action(payload)),
    [dispatch, action]
  );
  return dispatchAction;
};
