import type { Errors } from "@/lib/types";

interface ErrorSpan extends React.ComponentProps<"span"> {
  name?: string;
  errors?: Errors;
}

const ErrorMessage = ({ id, name, errors, ...props }: ErrorSpan) => {
  const message =
    name && errors?.[name]
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
        {...props}
      >
        {capitalizedMessage}
      </span>
    )
  );
};

export default ErrorMessage;
