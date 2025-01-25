"use client";

import type { TodoEntity } from "@/models/features/todos";

import { todosActions } from "@/models/features/todos";
import EntityEditor from "../EntityEditor";
import getTodo from "@/lib/helpers/getTodo";
import { useAction } from "@/models/hooks";
import { useCallback } from "react";
import TodoEditor from "./TodoEditor";

const TodoEditorContainer = ({ todo }: { todo: TodoEntity }) => {
  const updateTodo = useAction(todosActions.updateTodo);

  const handleComplete = useCallback(
    () => updateTodo({ ...todo, is_right: !todo.is_right }),
    [todo, updateTodo]
  );

  return (
    <EntityEditor<TodoEntity>
      entityName="todo"
      entity={todo}
      action={todosActions.updateTodo}
      getEntity={getTodo(String(todo.taskId))}
    >
      <TodoEditor todo={todo} onComplete={handleComplete} />
    </EntityEditor>
  );
};

export default TodoEditorContainer;
