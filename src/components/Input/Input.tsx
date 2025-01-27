import s from "./Input.module.css";

export interface InputProps extends Readonly<React.ComponentProps<"input">> {
  onMount?: (input: HTMLInputElement) => void;
}

const Input = ({ onMount, className, ...props }: InputProps) => (
  <input ref={onMount} className={className || s.input} {...props} />
);

export default Input;
