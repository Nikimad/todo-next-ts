import { UnnormalEntityParam, UnnormalTodoEntity } from "./types";
import { AdditionalTodoProps } from "./normalizeTodo";
import normalizeTodo from "./normalizeTodo";

const getTodo =
  (additional: AdditionalTodoProps) =>
  (todo: UnnormalEntityParam<UnnormalTodoEntity>) =>
    normalizeTodo(todo, additional);

export default getTodo;
