"use client";

import type { TaskEntity } from "@/models/features/tasks";

import { tasksActions } from "@/models/features/tasks";
import EntityEditor from "../EntityEditor";
import getTask from "@/lib/normolizer/getTask";
import TaskEditor from "./TaskEditor";

const TaskEditorContainer = ({ task }: { task: TaskEntity }) => (
  <EntityEditor<TaskEntity>
    entityName="task"
    entity={task}
    sendAction={tasksActions.updateTask}
    deleteAction={tasksActions.removeTask}
    getEntity={getTask({ boardId: task.boardId })}
  >
    <TaskEditor task={task} />
  </EntityEditor>
);

export default TaskEditorContainer;
