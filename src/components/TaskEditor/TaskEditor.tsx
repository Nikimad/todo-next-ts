import type { TaskEntity } from "@/models/types/entities";

import EntityLink from "../EntityLink";

const TaskEditor = ({ task }: { task: TaskEntity }) => (
  <EntityLink href={`/${task.boardId}/${task.id}`}>{task.title}</EntityLink>
);

export default TaskEditor;