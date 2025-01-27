"use client";

import type { TaskEntity } from "@/models/features/tasks";

import { tasksActions } from "@/models/features/tasks";
import EntityEditor from "../EntityEditor";
import getTask from "@/lib/helpers/getTask";
import TaskEditor from "./TaskEditor";

const TaskEditorContainer = ({ task }: { task: TaskEntity }) => (
  <EntityEditor<TaskEntity>
    entityName="task"
    entity={task}
    action={tasksActions.updateTask}
    getEntity={getTask(String(task.boardId))}
  >
    <TaskEditor task={task} />
  </EntityEditor>
);

export default TaskEditorContainer;
