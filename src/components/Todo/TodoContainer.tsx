import { TodoActionsTypes, TodoEntity } from "@/lib/actions/todo";

import {
  useRef,
  useActionState,
  useCallback,
  startTransition,
  useEffect,
  useState,
} from "react";
import { todoReducer } from "@/lib/actions/todo";
import validateIsEmpty from "@/lib/helpers/validateIsEmpty";
import handleForm from "@/lib/helpers/handleForm";
import Todo from "./Todo";
import TodoEditor from "../TodoEditor";

type TodoEditorContainerProps = {
  todo: TodoEntity;
  removeTodo: (deletedTodo: TodoEntity) => void;
};

const TodoEditorContainer = ({
  todo,
  removeTodo,
}: TodoEditorContainerProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const prevTodoRef = useRef(todo);

  const [state, dispatch, isLoading] = useActionState(todoReducer, {
    errors: null,
    todo,
  });

  const handleEditStart = useCallback(
    () => isEdit || setIsEdit(true),
    [isEdit]
  );
  const handleEditEnd = useCallback(() => isEdit && setIsEdit(false), [isEdit]);

  const handleCancelEdit = useCallback(() => {
    startTransition(() => {
      dispatch({
        type: TodoActionsTypes.Reset,
        payload: { errors: null, todo: prevTodoRef.current },
      });
    });
    handleEditEnd();
  }, [dispatch, handleEditEnd]);

  const handleDelete = useCallback(() => {
    startTransition(() => {
      dispatch({
        type: TodoActionsTypes.Delete,
        payload: { errors: null, todo: todo },
      });
    });
  }, [todo, dispatch]);

  const handleEdit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      const { values } = handleForm(e);

      const editedTodo = {
        id: values.id,
        text: values.text,
        is_right: Boolean(values.is_right),
      };

      if (
        prevTodoRef.current.text === editedTodo.text &&
        prevTodoRef.current.is_right === editedTodo.is_right
      ) {
        handleEditEnd();
        return;
      }

      startTransition(() => {
        dispatch({
          type: TodoActionsTypes.Edit,
          payload: {
            errors: validateIsEmpty("text", values.text),
            todo: editedTodo,
          },
        });
      });
    },
    [dispatch, handleEditEnd]
  );

  const handleFocus = useCallback(
    (input: HTMLInputElement) => input?.focus(),
    []
  );

  useEffect(() => {
    if (
      !("status" in state.todo) &&
      !state.errors &&
      state.todo !== prevTodoRef.current
    ) {
      prevTodoRef.current = state.todo;
      handleEditEnd();
    }
  }, [state, handleEditEnd]);

  useEffect(() => {
    if ("status" in state.todo && state.todo.status === "ok") {
      removeTodo(todo);
    }
  }, [state, todo, removeTodo]);

  return !isEdit ? (
    <Todo
      todo={prevTodoRef.current}
      isLoading={isLoading}
      onEditStart={handleEditStart}
      onDelete={handleDelete}
    />
  ) : (
    <TodoEditor
      todo={prevTodoRef.current}
      errors={state.errors}
      isLoading={isLoading}
      onSubmit={handleEdit}
      onReset={handleCancelEdit}
      onMount={handleFocus}
    />
  );
};

export default TodoEditorContainer;
