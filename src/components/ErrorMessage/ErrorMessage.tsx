import type { Errors } from "@/lib/types";
import s from "./ErrrorMessage.module.css";

interface ErrorSpan extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  errors?: Errors;
}

const ErrorMessage = ({ id, name, errors, className, ...props }: ErrorSpan) =>
  errors?.[name] && (
    <span
      id={`${id}-error`}
      aria-live="polite"
      className={className || s.message}
      {...props}
    >
      {typeof errors[name] === "string"
        ? errors[name]
        : errors[name].join(", ")}
    </span>
  );

export default ErrorMessage;
