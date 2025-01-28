"use client";

import { useCallback } from "react";
import { useParams } from "next/navigation";
import { useAction } from "@/models/hooks";
import { authorizationActions } from "@/models/features/authorization";
import AuthorizedNav from "./AuthorizedNav";

const AuthorizedNavContainer = () => {
    const params = useParams<{ boardId: string; taskId: string }>();
    const logout = useAction(authorizationActions.logout);
    const handleLogout = useCallback(() => logout(undefined), [logout]);

    return <AuthorizedNav onLogout={handleLogout} params={params} />
};

export default AuthorizedNavContainer;
