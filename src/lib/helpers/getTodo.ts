import { TodoEntity } from "@/models/features/todos";

const getTodo =
  (boardId: string, taskId: string) =>
  (values: { [key: string]: string }): TodoEntity => ({
    id: values.id,
    text: values.text,
    is_right: Boolean(values.is_right),
    taskId,
    boardId,
  });

export default getTodo;
