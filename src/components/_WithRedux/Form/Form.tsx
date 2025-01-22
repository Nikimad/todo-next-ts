import s from "./Form.module.css";

export type FormProps = Readonly<React.FormHTMLAttributes<HTMLFormElement>>;

const Form = ({ className, ...props }: FormProps) => (
  <form className={className || s.form} {...props} />
);

export default Form;
