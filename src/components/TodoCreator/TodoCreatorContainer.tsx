"use client";

import type { TodoEntity } from "@/models/types/entities";
import { todosActions} from "@/models/features/todos";
import getTodo from "@/lib/normolizer/getTodo";
import EntityCreator from "../EntityCreator";

const TodoCreatorContainer = ({
  params: { boardId, taskId },
}: {
  params: { boardId: string; taskId: string };
}) => {
  const todoDraft: TodoEntity = {
    boardId,
    taskId,
    id: "todoDraftId",
    text: "",
    is_right: false,
  };

  return (
    <EntityCreator<TodoEntity>
      entityName="todo"
      entity={todoDraft}
      sendAction={todosActions.addTodo}
      getEntity={getTodo({ boardId, taskId })}
    />
  );
};

export default TodoCreatorContainer;
