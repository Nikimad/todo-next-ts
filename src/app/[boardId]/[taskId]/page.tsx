import TodoCreator from "@/components/TodoCreator";
import Todos from "@/components/Todos";

const TodosPage = async ({
  params,
}: {
  params: Promise<{ boardId: string, taskId: string }>;
}) => {
  const { boardId, taskId } = await params;
  return (
    <>
      <h2>Todos</h2>
      <TodoCreator params={{ boardId, taskId }} />
      <Todos params={{ taskId }} />
    </>
  );
};

export default TodosPage;
