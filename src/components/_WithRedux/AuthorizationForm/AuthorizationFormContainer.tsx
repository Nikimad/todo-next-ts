import { Errors } from "@/lib/types";
import {
  authorizationActions,
  AuthorizationData,
} from "@/models/features/authorization";

import { JSX, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useAction, useAppSelector } from "@/models/hooks";
import { authorizationSelectors } from "@/models/features/authorization/selectors";
import handleForm from "@/lib/helpers/handleForm";

import AuthorizationForm from "./AuthorizationForm";

type AuthorizationFormContainerProps = {
  errors: Errors;
  isAuthDataValid: (authData: AuthorizationData) => boolean;
  onMount: (el: HTMLFormElement) => void;
};

const AuthorizationFormContainer = ({
  errors,
  isAuthDataValid,
  onMount,
}: AuthorizationFormContainerProps) => {
  const isSignUp = usePathname() === "/signup";
  const isLoading = useAppSelector(authorizationSelectors.selectIsLoading);

  const getAuthData = useCallback(
    (values: { [key: string]: string }): AuthorizationData => ({
      username: values.username,
      password: values.password,
      is_admin: true,
      ...(isSignUp && {
        password_confirmation: values.password_confirmation,
      }),
    }),
    [isSignUp]
  );

  const sendAuthData = useAction(
    authorizationActions[isSignUp ? "signup" : "signin"]
  );

  const handleAuthorization = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      const { values } = handleForm(e);
      const authData = getAuthData(values);
      if (isAuthDataValid(authData)) sendAuthData(authData);
    },
    [getAuthData, isAuthDataValid, sendAuthData]
  );

  return (
    <AuthorizationForm
      isSignUp={isSignUp}
      isLoading={isLoading}
      errors={errors}
      onSubmit={handleAuthorization}
      ref={onMount}
    />
  );
};

export default AuthorizationFormContainer;
