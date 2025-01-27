"use client";

import { Errors } from "@/lib/types";
import { useCallback, useState } from "react";
import { useAction, useAppSelector } from "@/models/hooks";
import { authorizationSelectors } from "@/models/features/authorization/selectors";
import {
  authorizationActions,
  AuthorizationData,
} from "@/models/features/authorization";
import validateAuthorizationData from "@/lib/helpers/validateAuthorizationData";
import AuthorizationForm from "../AuthorizationForm";

const Authorization = () => {
  const authorizationErrors = useAppSelector(
    authorizationSelectors.selectErrors
  );
  const setAuthorizationErrors = useAction(authorizationActions.setErrors);
  const [errors, setErrors] = useState<Errors>(null);

  const handleResetAuthorizationErrors = useCallback(
    (el: HTMLFormElement) =>
      el || (authorizationErrors && setAuthorizationErrors(null)),
    [authorizationErrors, setAuthorizationErrors]
  );

  const handleValidateAuthorization = (authData: AuthorizationData) => {
    const validationErrors = validateAuthorizationData(authData);
    setErrors(validationErrors);
    return validationErrors;
  };

  const isValid = (authData: AuthorizationData) => {
    const errors = handleValidateAuthorization(authData);
    return !Boolean(errors);
  };

  return (
    <AuthorizationForm
      errors={errors || authorizationErrors}
      isAuthDataValid={isValid}
      onMount={handleResetAuthorizationErrors}
    />
  );
};

export default Authorization;
