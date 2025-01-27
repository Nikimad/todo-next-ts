import TodoCreator from "@/components/TodoCreator";
import Todos from "@/components/Todos";

const TodosPage = async ({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) => {
  const { taskId } = await params;
  return (
    <>
      <h2>Todos</h2>
      <TodoCreator params={{ taskId }} />
      <Todos params={{ taskId }} />
    </>
  );
};

export default TodosPage;
