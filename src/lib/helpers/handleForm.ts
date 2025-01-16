import serializeFormData from "./serializeFormData";

const handleForm = (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  const values = serializeFormData(formData);
  
  return {
    form,
    values,
  };
};

export default handleForm;
