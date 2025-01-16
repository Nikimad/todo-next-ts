import { TodoEntity } from "../types";
import Button from "@/components/Button";
import s from "./Todo.module.css";
import Spinner from "@/components/Spinner";

type TodoProps = {
  todo: TodoEntity;
  isLoading: boolean;
  onEditStart: () => void;
  onDelete: () => void;
};

const Todo = ({ todo, isLoading, onEditStart, onDelete }: TodoProps) => (
  <div className={s.todo}>
    <span
      className={`${s.todo__status} ${
        todo.is_right ? s.todo__status_complete : ""
      }`}
    ></span>
    {isLoading && (
      <div className={s.todo__spinner}>
        <Spinner />
      </div>
    )}
    <h2 className={s.todo__title}>{todo.text}</h2>
    <div className={s.todo__controls}>
      <Button onClick={onEditStart}>Edit</Button>
      <Button onClick={onDelete}>Delete</Button>
    </div>
  </div>
);

export default Todo;
