import type { Errors } from "@/lib/types";
import type { TodoEntity } from "@/lib/actions/todo";

import Button from "@/components/Button";
import TodoForm from "../TodoForm";

interface TodoEditorProps extends React.FormHTMLAttributes<HTMLFormElement> {
  todo: TodoEntity;
  errors: Errors;
  isLoading: boolean;
  onMount: (input: HTMLInputElement) => void;
}

const TodoEditor = ({
  todo,
  errors,
  isLoading,
  onSubmit,
  onReset,
  onMount,
}: TodoEditorProps) => (
  <TodoForm
    todo={todo}
    errors={errors}
    isLoading={isLoading}
    onSubmit={onSubmit}
    onReset={onReset}
    onMount={onMount}
  >
    <>
      <Button type="submit">Done</Button>
      <Button type="reset">Cancel</Button>
    </>
  </TodoForm>
);

export default TodoEditor;
