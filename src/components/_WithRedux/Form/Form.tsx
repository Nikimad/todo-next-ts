export type FormProps = Readonly<React.ComponentProps<"form">>;

const Form = ({ className, ...props }: FormProps) => (
  <form className={`styled-wrapper ${className || ""}`} {...props} />
);

export default Form;
