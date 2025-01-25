export type FormProps = Readonly<React.FormHTMLAttributes<HTMLFormElement>>;

const Form = ({ className, ...props }: FormProps) => (
  <form className={`styled-wrapper ${className || ""}`} {...props} />
);

export default Form;
