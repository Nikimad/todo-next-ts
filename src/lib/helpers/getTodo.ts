import { EntityValues } from "@/models";
import { UnnormalTodoEntity } from "./normalizeData";
import { TodoEntity } from "@/models/features/todos";

const getTodo =
  (boardId: string, taskId: string) =>
  (values: EntityValues | UnnormalTodoEntity): TodoEntity => ({
    id: values.id,
    text: values.text,
    is_right: Boolean(values.is_right),
    taskId,
    boardId,
  });

export default getTodo;
