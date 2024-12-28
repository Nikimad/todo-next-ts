const handleFormData = (formData: FormData) => {
  const values: any = {};

  for (let [key, value] of formData) {
    if (key.startsWith("$")) continue;
    values[key] = value;
  }

  return values;
};

export default handleFormData;
