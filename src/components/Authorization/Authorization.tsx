import type { Errors } from "@/lib/types";
import type { FormProps } from "../Form";

import Form from "../Form";
import Input from "../Input";
import ErrorMessage from "../ErrorMessage";
import Button from "../Button";
import Spinner from "../Spinner";
import s from "./Authorization.module.css";

interface AuthorizationFormProps extends FormProps {
  isLoading: boolean;
  isSignUp: boolean;
  errors: Errors;
}

const Authorization = ({
  isLoading,
  onSubmit,
  isSignUp,
  errors,
}: AuthorizationFormProps) => (
  <Form onSubmit={onSubmit} id="authorization">
    {isLoading && <div className={s.form__spinner}><Spinner /></div>}
    <label>
      Username
      <Input id="username" name="username" />
      <ErrorMessage name="username" id="username" errors={errors} />
    </label>
    <label>
      Password
      <Input type="password" id="password" name="password" />
      <ErrorMessage name="password" id="password" errors={errors} />
    </label>
    {isSignUp && (
      <label>
        Password confirmation
        <Input
        type="password_confirmation"
        id="password_confirmation"
        name="password_confirmation"
      />
      <ErrorMessage name="passord_confirmation" id="passord_confirmation" errors={errors} />
      </label>
    )}
    <Button type="submit">
      Sign {isSignUp ? "up" : "in"}
    </Button>
    <ErrorMessage id="authorization" name="error" errors={errors} />
  </Form>
);

export default Authorization;
