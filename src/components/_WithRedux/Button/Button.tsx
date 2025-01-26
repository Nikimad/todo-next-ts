import s from "./Button.module.css";

type ButtonProps = Readonly<React.ButtonHTMLAttributes<HTMLButtonElement>>;

const Button = ({ className, ...props }: ButtonProps) => (
  <button className={className || s.button} {...props} />
);

export default Button;
