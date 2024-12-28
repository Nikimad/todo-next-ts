import ErrorMessage from "../ErrorMessage";

const Field = ({
  label,
  id,
  name,
  type,
  error,
}: Readonly<{
  label: string;
  id: string;
  name: string;
  type?: string;
  error?: string | string[];
}>) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} name={name} type={type} aria-describedby={`${id}-error`} />
    <ErrorMessage id={id} error={error} />
  </div>
);

export default Field;
