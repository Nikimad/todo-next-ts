"use client";

import { tasksActions, type TaskEntity } from "@/models/features/tasks";

import EntityCreator from "../EntityCreator";
import getTask from "@/lib/normolizer/getTask";

const TaskCreatorContainer = ({
  params: { boardId },
}: {
  params: { boardId: string };
}) => {
  const taskDraft: TaskEntity = {
    boardId,
    id: crypto.randomUUID(),
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
