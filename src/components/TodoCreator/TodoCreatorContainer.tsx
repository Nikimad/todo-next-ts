"use client";

import { todosActions, type TodoEntity } from "@/models/features/todos";

import EntityCreator from "../EntityCreator";
import getTodo from "@/lib/helpers/getTodo";

const TodoCreatorContainer = ({
  params: { boardId, taskId },
}: {
  params: { boardId: string, taskId: string };
}) => (
  <EntityCreator<TodoEntity>
    entityName="todo"
    entity={{
      boardId,
      taskId,
      id: crypto.randomUUID(),
      text: "",
      is_right: false,
    }}
    sendAction={todosActions.addTodo}
    getEntity={getTodo(taskId)}
  />
);

export default TodoCreatorContainer;
