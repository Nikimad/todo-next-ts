import { EntityValues } from "@/models";
import { UnnormalTaskEntity } from "./normalizeData";
import { TaskEntity } from "@/models/features/tasks";

const getTask =
  (boardId: string) =>
  (values: EntityValues | UnnormalTaskEntity): TaskEntity => ({
    id: values.id,
    title: values.title,
    question_type: "multiple",
    boardId,
  });

export default getTask;
