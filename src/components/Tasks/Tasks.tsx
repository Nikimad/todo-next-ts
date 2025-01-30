import type { TaskEntity } from "@/models/types/entities";

import EntitiesList from "../EntitiesList";
import TaskEditor from "../TaskEditor";

interface TasksProps {
  tasks: TaskEntity[];
}

const Tasks = ({ tasks }: TasksProps) => (
  <EntitiesList<TaskEntity>
    name="task"
    isEmpty={tasks.length === 0}
  >
    {tasks.map((task) => (
      <TaskEditor key={task.id} task={task} />
    ))}
  </EntitiesList>
);

export default Tasks;
