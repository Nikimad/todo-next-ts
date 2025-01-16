import s from "./Button.module.css";

const Button = ({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={className || s.button} {...props}>
    {children}
  </button>
);

export default Button;
