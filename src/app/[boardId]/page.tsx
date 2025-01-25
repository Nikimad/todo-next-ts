import TaskCreator from "@/components/_WithRedux/TaskCreator";
import Tasks from "@/components/_WithRedux/Tasks";

const TasksPage = async ({
  params,
}: {
  params: Promise<{ boardId: string }>;
}) => {
  const { boardId } = await params;
  return (
    <>
      <h2>Tasks</h2>
      <TaskCreator params={{ boardId }} />
      <Tasks params={{ boardId }} />
    </>
  );
};

export default TasksPage;
