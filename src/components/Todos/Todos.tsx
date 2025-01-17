"use client";

import type { TodoEntity } from "@/lib/actions/todo";
import { TodosActionsTypes } from "@/lib/actions/todos";

import {
  useContext,
  useActionState,
  useCallback,
  startTransition,
  useRef,
} from "react";
import { SessionContext } from "@/components/SessionContext";
import { todosReducer } from "@/lib/actions/todos";
import validateIsEmpty from "@/lib/helpers/validateIsEmpty";
import TodoCreator from "../TodoCreator";
import TodosList from "../TodosList";

const Todos = () => {
  const ctx = useContext(SessionContext);

  const scopeKey = useRef(ctx ? ctx.getScopeKey() : "");

  const [{ todos, errors }, dispatch, isLoading] = useActionState(
    todosReducer,
    {
      todos: ctx ? ctx.getTodos() : [],
      errors: null,
    }
  );

  const handleAddTodo = useCallback(
    (text: string, is_right: boolean) => {
      const newTodo: TodoEntity = {
        id: crypto.randomUUID(),
        text,
        is_right,
      };

      startTransition(() => {
        if (scopeKey)
          dispatch({
            type: TodosActionsTypes.Add,
            payload: {
              errors: validateIsEmpty("text", newTodo.text),
              todo: newTodo,
              scopeKey: scopeKey.current,
            },
          });
      });
    },
    [dispatch]
  );

  const handleRemoveTodo = useCallback(
    (todo: TodoEntity) => {
      startTransition(() => {
        dispatch({
          type: TodosActionsTypes.Remove,
          payload: { errors: null, todo },
        });
      });
    },
    [dispatch]
  );

  return (
    <>
      <TodoCreator
        todo={{
          id: "",
          text: "",
          is_right: false,
        }}
        isLoading={isLoading}
        errors={errors}
        addTodo={handleAddTodo}
      />
      <TodosList todos={todos} removeTodo={handleRemoveTodo} />
    </>
  );
};

export default Todos;
