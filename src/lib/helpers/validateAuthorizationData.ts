import { Error, Errors } from "../types";
import { AuthorizationData } from "@/models/features/authorization";
import validateIsEmpty from "./validateIsEmpty";

type ErrorEntrie = [key: string, error: Error];
type ErrorEntries = ErrorEntrie[];

const checkRequired = (authData: AuthorizationData): Errors => {
  const authDataEntries = Object.entries(authData);

  const errorsEntries: ErrorEntries = authDataEntries.reduce(
    (acc: ErrorEntries, [key, value]) => {
      const errors =
        typeof value === "string" ? validateIsEmpty(key, value) : null;

      if (errors) {
        const errEntrie: ErrorEntrie = [key, errors[key]];
        acc = [...acc, errEntrie];
      }

      return acc;
    },
    []
  );

  return errorsEntries.length > 0 ? Object.fromEntries(errorsEntries) : null;
};

const checkPassword = (authData: AuthorizationData, minPasswordLength = 6): Errors => {
  const isSignUp = "password_confirmation" in authData;

  if (isSignUp) {
    const isPasswordMinLengthValid =
      authData.password.length >= minPasswordLength;
    const isPasswordConfirmationMatchPassword =
      authData.password === authData.password_confirmation;

    return !isPasswordMinLengthValid || !isPasswordConfirmationMatchPassword
      ? {
          ...(!isPasswordMinLengthValid && {
            password: `Is too short (minimum is ${minPasswordLength} characters)`,
          }),
          ...(!isPasswordConfirmationMatchPassword && {
            password_confirmation: "Doesn't match Password",
          }),
        }
      : null;
  }

  return null;
};

const validateAuthorizationData = (authData: AuthorizationData): Errors => {
  const requiredErrors = checkRequired(authData);

  if (requiredErrors) return requiredErrors;

  const passwordErrors = checkPassword(authData);

  if (passwordErrors) return passwordErrors;

  return null;
};

export default validateAuthorizationData;
