import type { TodoStateProps } from "@/lib/actions/todo";

import Button from "@/components/Button";
import TodoForm from "../TodoForm";

interface TodoEditorProps
  extends React.FormHTMLAttributes<HTMLFormElement>,
    TodoStateProps {
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
