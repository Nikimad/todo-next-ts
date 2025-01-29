import { UnnormalEntityParam, UnnormalTodoEntity } from "./types";
import { TodoEntity } from "@/models/features/todos";

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
