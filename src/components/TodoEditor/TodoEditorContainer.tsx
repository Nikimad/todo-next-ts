"use client";

import type { TodoEntity } from "@/models/types/entities";

import { useAction } from "@/models/hooks";
import { useCallback } from "react";
import { todosActions } from "@/models/features/todos";
import getTodo from "@/lib/normolizer/getTodo";
import EntityEditor from "../EntityEditor";
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
      sendAction={todosActions.updateTodo}
      deleteAction={todosActions.removeTodo}
      getEntity={getTodo({ boardId: todo.boardId, taskId: todo.taskId })}
    >
      <TodoEditor todo={todo} onComplete={handleComplete} />
    </EntityEditor>
  );
};

export default TodoEditorContainer;
