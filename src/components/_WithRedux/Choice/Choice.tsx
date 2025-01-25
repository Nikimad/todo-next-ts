import s from "./Choice.module.css";

export interface ChoiceProps
  extends Readonly<React.InputHTMLAttributes<HTMLInputElement>> {
  type?: "checkbox";
}

const Choice = ({ type, className, children, ...props }: ChoiceProps) => (
  <label className={s.choice__container}>
    <span className="visually-hidden">{children}</span>
    <input type={type || "checkbox"} className={`visually-hidden ${className || s.choice}`} {...props} />
    <span className={s.choice__apperance}></span>
  </label>
);

export default Choice;
