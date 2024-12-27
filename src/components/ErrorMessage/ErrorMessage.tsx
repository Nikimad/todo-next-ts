const ErrorMessage = ({
  id,
  error,
}: Readonly<{ id: string; error?: string | string[] }>) =>
  error && (
    <span id={`${id}-error`} aria-live="polite">
      {typeof error === "string" ? error : error.join(", ")}
    </span>
  );

export default ErrorMessage;
