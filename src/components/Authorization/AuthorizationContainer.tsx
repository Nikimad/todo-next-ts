"use client";

import {
  startTransition,
  useActionState,
  useCallback,
  useEffect,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { sign as signAction } from "@/lib/actions/authorization";
import Authorization from "./Authorization";

const AuthorizationContainer = () => {
  const { replace } = useRouter();

  const isSignUp = usePathname() === "/signup";

  const [[errors, scope], sign, isLoading] = useActionState(signAction, [null]);

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

  useEffect(() => {
    if (scope) replace("/");
  }, [scope, replace]);

  return (
    <Authorization
      isLoading={isLoading}
      isSignUp={isSignUp}
      onSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default AuthorizationContainer;
