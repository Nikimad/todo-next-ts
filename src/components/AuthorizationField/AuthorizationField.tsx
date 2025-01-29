import { Errors } from "@/lib/types";
import Input from "../Input";
import ErrorMessage from "../ErrorMessage";
import s from "./AuthorizationField.module.css";

interface AuthorizationFieldProps extends React.ComponentProps<typeof Input> {
  errors: Errors;
}

const AuthorizationField = ({
  id,
  type,
  name,
  errors,
  children,
}: AuthorizationFieldProps) => (
  <label className={s.field}>
    {children}
    <Input id={id} type={type} name={name} />
    <ErrorMessage id={id} name={name} className={s.field__error} errors={errors} />
  </label>
);

export default AuthorizationField;
