import { TaskEntity } from "@/models/features/tasks";

const getTask = (boardId: string) => (values: { [key: string]: string }): TaskEntity => ({
  id: values.id,
  title: values.title,
  question_type: "multiple",
  boardId
});

export default getTask;
