"use client";

import { useAppSelector } from "@/models/hooks";
import { todosSelectors } from "@/models/features/todos/selectors";
import Todos from "./Todos";

const TasksContainer = ({
  params: { taskId },
}: {
  params: { taskId: string };
}) => {
  const todos = useAppSelector(todosSelectors.selectAllByTaskId(taskId));
  return <Todos todos={todos} />;
};

export default TasksContainer;
