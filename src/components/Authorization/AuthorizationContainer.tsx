"use client";

import { startTransition, useActionState, useCallback } from "react";
import signAction from "@/lib/actions/authorization/sign";
import Authorization from "./Authorization";
import { UserDataResult } from "@/lib/actions/authorization/types";
import { usePathname } from "next/navigation";

const AuthorizationContainer = () => {
  const isSignUp = usePathname() === "/signup";
  
  const initialState: UserDataResult = [null];
  const [[errors, user], sign, isLoading] = useActionState(
    signAction,
    initialState
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);

      startTransition(() => {
        sign(formData);
      });
    },
    [sign]
  );

  return <Authorization isSignUp={isSignUp} onSubmit={handleSubmit} errors={errors} />;
};

export default AuthorizationContainer;
