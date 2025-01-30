import { UnnormalTodoEntity, TodoEntity } from "@/models/types/entities";
import { UnnormalEntityParam } from "./types";

export type AdditionalTodoProps = {
  boardId: TodoEntity["boardId"];
  taskId: TodoEntity["taskId"];
};

const normalizeTodo = (
  todo: UnnormalEntityParam<UnnormalTodoEntity>,
  additional: AdditionalTodoProps
) => {
  const normalizedTodo: TodoEntity = {
    ...additional,
    id: todo.id,
    text: String(todo.text),
    is_right: Boolean(todo.is_right),
  };

  return normalizedTodo;
};

export default normalizeTodo;
