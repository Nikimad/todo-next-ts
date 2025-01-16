import type { Errors } from "@/lib/types";
import type { RefObject } from "react";

import { useCallback, useEffect, useRef } from "react";
import handleForm from "@/lib/helpers/handleForm";
import TodoCreator from "./TodoCreator";

type TodoCreatorContainerProps = {
  isLoading: boolean;
  errors: Errors;
  addTodo: (text: string, is_right: boolean) => void;
};

const TodoCreatorContainer = ({
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
      isLoading={isLoading}
      errors={errors}
      onSubmit={handleAddTodo}
    />
  );
};

export default TodoCreatorContainer;
