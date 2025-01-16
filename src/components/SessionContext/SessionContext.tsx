"use client";

import type { TodoEntities } from "@/lib/actions/todos";
import type { Scope } from "@/lib/actions/authorization";
import { Endpoints } from "@/lib/endpoints";
import { Lists } from "@/lib/actions/authorization";

import { createContext, ReactNode, useCallback, useState } from "react";
import { Errors } from "@/lib/types";

interface Session {
  isUserHasScope: boolean;
  setScope: (scope: Scope) => void;
  getTodos: () => TodoEntities;
  getScopeKey: () => string;
}

export const SessionContext = createContext<Session | null>(null);

const SessionProvider = ({
  initialScope,
  children,
}: Readonly<{
  errors: Errors;
  initialScope?: Scope;
  children?: ReactNode;
}>) => {
  const [scope, setScope] = useState(initialScope);

  const handleSetScope = useCallback((scope: Scope) => setScope(scope), []);

  const getList = useCallback(
    (scope?: Scope) =>
      scope?.questions.find(({ title }) => title === Lists.Todos),
    []
  );

  const getTodos = useCallback(
    () => getList(scope)?.answers || [],
    [scope, getList]
  );

  const getScopeKey = useCallback(() => {
    const list = getList(scope);
    return scope ? `${Endpoints.List}/${list?.id}/${Endpoints.Todos}` : "";
  }, [scope, getList]);

  return (
    <SessionContext.Provider
      value={{
        isUserHasScope: Boolean(scope),
        setScope: handleSetScope,
        getTodos,
        getScopeKey,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
