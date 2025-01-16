"use client";

import { ReactNode, useCallback, useContext } from "react";
import { SessionContext } from "../SessionContext";
import { logout } from "@/lib/actions/authorization";

const HeaderContainer = ({ children }: Readonly<{ children: ReactNode }>) => {
  const ctx = useContext(SessionContext);
  const isUserAuthorized = Boolean(ctx && ctx.isUserHasScope);
  const handleLogout = useCallback(() => {
    ctx?.setScope();
    logout();
  }, [ctx]);

  return !ctx?.errors ? isUserAuthorized ? (
    <button className="link" onClick={handleLogout}>
      Log out
    </button>
  ) : (
    children
  ) : null;
};

export default HeaderContainer;
