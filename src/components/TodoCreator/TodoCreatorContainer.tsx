"use client";

import { todosActions, type TodoEntity } from "@/models/features/todos";

import EntityCreator from "../EntityCreator";
import getTodo from "@/lib/helpers/getTodo";

const TodoCreatorContainer = ({
  params: { taskId },
}: {
  params: { taskId: string };
}) => (
  <EntityCreator<TodoEntity>
    entityName="todo"
    entity={{
      id: crypto.randomUUID(),
      taskId,
      text: "",
      is_right: false,
    }}
    action={todosActions.addTodo}
    getEntity={getTodo(taskId)}
  />
);

export default TodoCreatorContainer;
