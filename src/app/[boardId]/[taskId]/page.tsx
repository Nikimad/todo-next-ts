import TodoCreator from "@/components/_WithRedux/TodoCreator";
import Todos from "@/components/_WithRedux/Todos";

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
