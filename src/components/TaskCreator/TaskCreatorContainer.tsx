"use client";

import type { TaskEntity } from "@/models/types/entities";
import { tasksActions } from "@/models/features/tasks";
import getTask from "@/lib/normolizer/getTask";
import EntityCreator from "../EntityCreator";

const TaskCreatorContainer = ({
  params: { boardId },
}: {
  params: { boardId: string };
}) => {
  const taskDraft: TaskEntity = {
    boardId,
    id: "taskDraftId",
    title: "",
    question_type: "multiple",
  };

  return (
    <EntityCreator<TaskEntity>
      entityName="task"
      entity={taskDraft}
      sendAction={tasksActions.addTask}
      getEntity={getTask({ boardId })}
    />
  );
};

export default TaskCreatorContainer;
