import s from "./Form.module.css";

export type FormProps = Readonly<React.FormHTMLAttributes<HTMLFormElement>>;

const Form = ({ className, children, ...props }: Readonly<React.FormHTMLAttributes<HTMLFormElement>>) => (
  <form className={className || s.form} {...props}>
    {children}
  </form>
);

export default Form;
