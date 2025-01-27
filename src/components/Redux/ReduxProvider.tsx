"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/models";

import { boardsActions } from "@/models/features/boards";
import { tasksActions } from "@/models/features/tasks";
import { todosActions } from "@/models/features/todos";

import { PreparedState } from "@/lib/helpers/getPreparedState";
import { authorizationActions } from "@/models/features/authorization";

const ReduxProvider = ({
  initialState,
  children,
}: {
  initialState: PreparedState;
  children: React.ReactNode;
}) => {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(
      authorizationActions.setUser(initialState.user || null)
    );
    storeRef.current.dispatch(
      boardsActions.setBoards(initialState.boards || [])
    );
    storeRef.current.dispatch(tasksActions.setTasks(initialState.tasks || []));
    storeRef.current.dispatch(todosActions.setTodos(initialState.todos || []));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default ReduxProvider;
