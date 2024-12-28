import { FormEvent } from "react";
import Field from "../Field";
import ErrorMessage from "../ErrorMessage";
import { Errors } from "@/lib/types";

const Authorization = ({
  onSubmit,
  isSignUp,
  errors,
}: Readonly<{
  onSubmit: React.EventHandler<FormEvent>;
  isSignUp: boolean;
  errors?: Errors | null;
}>) => (
  <form onSubmit={onSubmit} id="authorization">
    <Field
      label="Username"
      id="username"
      name="username"
      error={errors?.username}
    />
    <Field
      label="Password"
      id="password"
      name="password"
      error={errors?.password}
    />
    {isSignUp && (
      <Field
        label="Password confirmation"
        id="password_confirmation"
        name="password_confirmation"
        error={errors?.password_confirmation}
      />
    )}
    <button type="submit">Sign {isSignUp ? "up" : "in"}</button>
    <ErrorMessage id="authorization" error={errors?.error} />
  </form>
);

export default Authorization;
