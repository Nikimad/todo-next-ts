import type { TodoEntity } from "@/lib/actions/todo";
import type { TodoEntities } from "@/lib/actions/todos";

import Todo from "../Todo";
import s from "./TodosList.module.css";

type TodoListProps = {
  todos: TodoEntities;
  removeTodo: (todo: TodoEntity) => void;
};

const TodosList = ({ todos, removeTodo }: TodoListProps) => (
  <ul className={s.list}>
    {todos.map((todo) => (
      <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
    ))}
  </ul>
);

export default TodosList;
