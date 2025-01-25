"use client";

import { useAppSelector } from "@/models/hooks";
import { tasksSelectors } from "@/models/features/tasks/selectors";
import Tasks from "./Tasks";

const TasksContainer = ({
  params: { boardId },
}: {
  params: { boardId: string };
}) => {
  const tasks = useAppSelector(tasksSelectors.selectAllByBoardId(boardId));
  return <Tasks tasks={tasks} />;
};

export default TasksContainer;
