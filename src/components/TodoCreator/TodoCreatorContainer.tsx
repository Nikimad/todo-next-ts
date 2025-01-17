import type { TodoStateProps } from "@/lib/actions/todo";
import type { RefObject } from "react";

import { useCallback, useEffect, useRef } from "react";
import handleForm from "@/lib/helpers/handleForm";
import TodoCreator from "./TodoCreator";

interface TodoCreatorContainerProps extends TodoStateProps {
  addTodo: (text: string, is_right: boolean) => void;
};

const TodoCreatorContainer = ({
  todo,
  isLoading,
  errors,
  addTodo,
}: TodoCreatorContainerProps) => {
  const formRef: RefObject<HTMLFormElement | null> = useRef(null);

  const handleAddTodo = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      const { form, values } = handleForm(e);
      formRef.current = form;
      addTodo(values.text, Boolean(values.is_right));
    },
    [addTodo]
  );

  useEffect(() => {
    if (!isLoading) {
      formRef.current?.reset();
      formRef.current = null;
    }
  }, [isLoading, errors]);

  return (
    <TodoCreator
      todo={todo}
      isLoading={isLoading}
      errors={errors}
      onSubmit={handleAddTodo}
    />
  );
};

export default TodoCreatorContainer;
