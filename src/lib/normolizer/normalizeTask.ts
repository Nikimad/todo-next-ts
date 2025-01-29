import { UnnormalEntityParam, UnnormalTaskEntity } from "./types";
import { TaskEntity } from "@/models/features/tasks";

export type AdditionalTaskProps = {
  boardId: TaskEntity["boardId"];
};

const normalizeTask = (
  task: UnnormalEntityParam<UnnormalTaskEntity>,
  additional: AdditionalTaskProps
) => {
  const normalizedTask: TaskEntity = {
    ...additional,
    id: task.id,
    title: String(task.title),
    question_type: "multiple",
  };

  return normalizedTask;
};

export default normalizeTask;
