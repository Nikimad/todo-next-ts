import type { Errors } from "@/lib/types";
import s from "./ErrrorMessage.module.css";

interface ErrorSpan extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  errors?: Errors;
}

const ErrorMessage = ({ id, name, errors, className, ...props }: ErrorSpan) => {
  const message = errors?.[name]
    ? typeof errors?.[name] === "string"
      ? errors[name]
      : errors[name].join(", ")
    : null;
  const capitalizedMessage =
    message && `${message.charAt(0).toUpperCase()}${message.slice(1)}`;
  return (
    capitalizedMessage && (
      <span
        id={`${id}-error`}
        aria-live="polite"
        className={className || s.message}
        {...props}
      >
        {capitalizedMessage}
      </span>
    )
  );
};

export default ErrorMessage;
