import { Errors } from "@/lib/types";

import Form from "../Form";
import AuthorizationField from "../AuthorizationField";
import ErrorMessage from "../ErrorMessage";
import Button from "../Button";
import Spinner from "@/components/Spinner";
import s from "./Authorization.module.css";

interface AuthorizationFormProps extends React.ComponentProps<"form"> {
  isSignUp: boolean;
  isLoading: boolean;
  errors: Errors;
}

const AuthorizationForm = ({
  isSignUp,
  isLoading,
  errors,
  ref,
  onSubmit,
}: Readonly<AuthorizationFormProps>) => (
  <Form onSubmit={onSubmit} id="authorization" className={s.form} ref={ref}>
    {isLoading && (
      <div className={s.form__spinner}>
        <Spinner />
      </div>
    )}
    <AuthorizationField id="username" name="username" errors={errors}>
      Username
    </AuthorizationField>
    <AuthorizationField
      type="password"
      name="password"
      id="password"
      errors={errors}
    >
      Password
    </AuthorizationField>
    {isSignUp && (
      <AuthorizationField
        type="password"
        name="password_confirmation"
        id="password_confirmation"
        errors={errors}
      >
        Password confirmation
      </AuthorizationField>
    )}
    <Button type="submit" disabled={isLoading}>
      Sign {isSignUp ? "up" : "in"}
    </Button>
    <ErrorMessage id="authorization" name="error" errors={errors} />
  </Form>
);

export default AuthorizationForm;
