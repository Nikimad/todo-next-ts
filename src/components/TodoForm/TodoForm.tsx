import type { TodoStateProps } from "@/lib/actions/todo";
import type { FormProps } from "@/components/Form";

import Form from "@/components/Form";
import ErrorMessage from "@/components/ErrorMessage";
import Spinner from "@/components/Spinner";
import Input from "@/components/Input";
import s from "./TodoForm.module.css";

interface TodoFormProps extends FormProps, TodoStateProps {
  onMount?: (input: HTMLInputElement) => void;
}

const TodoForm = ({
  todo,
  errors,
  isLoading,
  onSubmit,
  onReset,
  onMount,
  children,
}: TodoFormProps) => (
  <Form onSubmit={onSubmit} onReset={onReset}>
    {isLoading && (
      <div className={s.form__spinner}>
        <Spinner />
      </div>
    )}
    <fieldset className={s.form__todo}>
      <legend className="visually-hidden">Todo</legend>
      <input type="hidden" name="id" defaultValue={todo.id} />
      <label>
        <span className="visually-hidden">Completed</span>
        <Input
          type="checkbox"
          name="is_right"
          value="completed"
          defaultChecked={todo.is_right}
        />
      </label>
      <label htmlFor={`${todo.id || ""}/text`} className="visually-hidden">
        Text
      </label>
      <Input
        type="text"
        id={`${todo.id || ""}/text`}
        name="text"
        defaultValue={todo.text}
        onMount={onMount}
      />
      <div className={s.form__todo__error}>
        <ErrorMessage name="text" errors={errors} />
      </div>
    </fieldset>
    <div className={s.form__controls}>{children}</div>
  </Form>
);

export default TodoForm;
