import { Errors } from "../types";

const validateIsEmpty = (key: string, value: string): Errors =>
  value ? null : { [key]: "Can't be blank" };

export default validateIsEmpty;
