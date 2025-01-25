"use client";

import type { Errors } from "@/lib/types";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore, UnnormolizeState } from "@/models";
import { boardsActions } from "@/models/features/boards";

const ReduxProvider = ({
  unnormolizeState,
  children,
}: {
  errors: Errors;
  unnormolizeState: UnnormolizeState;
  children: React.ReactNode;
}) => {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(boardsActions.setBoards(unnormolizeState));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default ReduxProvider;
