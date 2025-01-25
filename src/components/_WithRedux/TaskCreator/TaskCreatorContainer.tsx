"use client";

import { tasksActions, type TaskEntity } from "@/models/features/tasks";

import EntityCreator from "../EntityCreator";
import getTask from "@/lib/helpers/getTask";

const TaskCreatorContainer = ({
  params: { boardId },
}: {
  params: { boardId: string };
}) => (
  <EntityCreator<TaskEntity>
    entityName="task"
    entity={{
      id: crypto.randomUUID(),
      boardId,
      title: "",
      question_type: "multiple",
    }}
    action={tasksActions.addTask}
    getEntity={getTask(boardId)}
  />
);

export default TaskCreatorContainer;
