import s from "./Input.module.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onMount?: (input: HTMLInputElement) => void;
}

const Input = ({ className, type, onMount, ...props }: InputProps) => (
  <>
    <input
      type={type}
      className={`${className || s.input}${
        type === "checkbox" ? " visually-hidden" : ""
      }`}
      ref={onMount}
      {...props}
    />
    {type === "checkbox" && <span className={s.input__box}></span>}
  </>
);

export default Input;
