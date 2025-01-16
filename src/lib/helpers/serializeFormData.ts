const serializeFormData = (formData: FormData) => {
  const values: {[key:string]: string}= {};

  for (const [key, value] of formData) {
    if (key.startsWith("$")) continue;
    if (typeof value === "string") {
        values[key] = value;
    }
    if (typeof value !== "string") {
        values[key] = value.name;
    }
  }

  return values;
};

export default serializeFormData;
