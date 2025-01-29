"use client";

import { todosActions, type TodoEntity } from "@/models/features/todos";

import EntityCreator from "../EntityCreator";
import getTodo from "@/lib/normolizer/getTodo";

const TodoCreatorContainer = ({
  params: { boardId, taskId },
}: {
  params: { boardId: string; taskId: string };
}) => {
  const todoDraft: TodoEntity = {
    boardId,
    taskId,
    id: crypto.randomUUID(),
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
