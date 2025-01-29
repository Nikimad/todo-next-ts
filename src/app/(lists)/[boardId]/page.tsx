import TaskCreator from "@/components/TaskCreator";
import Tasks from "@/components/Tasks";

const TasksPage = async ({
  params,
}: {
  params: Promise<{ boardId: string }>;
}) => {
  const { boardId } = await params;
  return (
    <>
      <TaskCreator params={{ boardId }} />
      <Tasks params={{ boardId }} />
    </>
  );
};

export default TasksPage;
