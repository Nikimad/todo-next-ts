import { UnnormalTaskEntity, TaskEntity } from "@/models/types/entities";
import { UnnormalEntityParam } from "./types";

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
