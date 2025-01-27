"use client";

import { authorizationActions } from "@/models/features/authorization";
import { useAction } from "@/models/hooks";
import AuthorizedNav from "./AuthorizedNav";
import { useCallback } from "react";

const AuthorizedNavContainer = () => {
    const logout = useAction(authorizationActions.logout);
    const handleLogout = useCallback(() => logout(undefined), [logout]);

    return <AuthorizedNav onLogout={handleLogout} />
};

export default AuthorizedNavContainer;
