import type { TodoStateProps } from "@/lib/actions/todo";

import TodoForm from "../TodoForm";
import Button from "@/components/Button";

interface TodoCreator
  extends Readonly<React.FormHTMLAttributes<HTMLFormElement>>,
    TodoStateProps {}

const TodoCreator = ({ errors, isLoading, onSubmit }: TodoCreator) => (
  <TodoForm
    todo={{
      id: "",
      text: "",
      is_right: false,
    }}
    isLoading={isLoading}
    errors={errors}
    onSubmit={onSubmit}
  >
    <Button disabled={isLoading}>Add todo</Button>
  </TodoForm>
);

export default TodoCreator;
